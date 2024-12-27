# Google Auth

## Overview

This project will help you setup Google OAuth in any of your MERN projects.

Flow diagram:
![Flow Diagram](/images/flow-diagram.png)

## Setup

After cloning the repository, create .env files inside frontend/ and backend/ folders.

1. Frontend .env variables -

```bash
VITE_GOOGLE_CLIENT_ID=your-client-id

VITE_SERVER_URL=your-backend-server-url along with /auth

```

2. Backend .env variables

```bash
PORT=XXXX
DB_URL=XXXX (mongodb url)

GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

JWT_SECRET=your-secret-key
JWT_TIMEOUT=12h (example expiry)
```

Once you have configured necessary environment variables, you will have to get the clientId and clientSecret from your google console

1. Visit `console.cloud.google.com`

2. Click on the projects section on the top left

![Project](/images/{A2CCE280-10D4-40BF-807A-FAC5FD755E65}.png)

In case you don't see a project ID it's alright.

3. Click on `Create Project`

4. You can change the name of the project (optional)

5. Once it's created (might take a few minutes), you will see a notification to select that project. Just navigate and look around to see the `Select Project` option.

6. Once you are in a project, you should see a `Dashboard` button

![Dashboard](/images/{EB2DA909-CB00-4F8A-9ADD-9FCDD287EF39}.png)

Click on `Dashboard`

7. Click on APIs and Services

![API Services](/images/{A703D080-2969-4048-B097-CDC629AF2A49}.png)

8. Go to OAuth Consent Screen as shown

![Consent Screen](/images//{821A0EE8-AA14-4A12-B942-AFD32B3704BC}.png)

9. Use External option, click create.

10. Give any name, provide your email under `User Support Email`

11. Only fill required info for now, you don't need domain name, app, logo, etc.

12. Fill your email again under `Developer Contact Information`

13. Click save

14. Now scopes are the permissions that the user will grant us (the data that we can access in our application).

15. Select the first 2 scopes.

16. Save and continue to the Dashboard

17. Now click on the Credentials tab on the left sidebar.

18. Click on `Create Credentials` and select `OAuth Client ID`

19. Application Type : `Web Application`

20. !! Important: Authorized JavaScript Origin: `http://localhost:5173`

21. Create it and click on `Download JSON`.

22. This json file contains your `clientId` and `clientSecret`

23. Use this in .env

## Run the project

Navigate to backend folder.

```bash
cd ./backend/
```

Install all the required dependencies.

```bash
npm install
```

Start the server in development mode.

```bash
npm run dev
```

Navigate to frontend folder.

```bash
cd ./frontend/
```

Install all the required dependencies.

```bash
npm install
```

Start the vite app in development mode.

```bash
npm run dev
```

Visit: `http://localhost:5173/`
