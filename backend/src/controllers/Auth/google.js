import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { OAuth2Client } from "../../utils/googleConfig.js";
import axios from "axios";
import jwt from "jsonwebtoken";

export const loginGoogle = async (req, res) => {
  try {
    const { code } = req.query;

    const googleRes = await OAuth2Client.getToken(code);

    OAuth2Client.setCredentials(googleRes.tokens);

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );

    const { email, name, picture } = userRes.data;

    let createdUser = await User.findOne({ email });

    if (!createdUser) {
      createdUser = await User.create({
        name,
        email,
        image: picture,
        lastLogin: new Date(),
      });
    }

    const token = jwt.sign(
      {
        _id: createdUser._id,
        email: createdUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_TIMEOUT }
    );

    createdUser.lastLogin = createdUser.currentLogin;
    createdUser.currentLogin = new Date();
    await createdUser.save();

    return res
      .status(200)
      .send(new ApiResponse(200, { token, user: createdUser }, "Logged in."));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "Failed to login."));
  }
};
