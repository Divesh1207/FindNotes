# About The Project

![Screenshot 2024-06-18 175154](https://github.com/Divesh1207/FindNotes/assets/88198940/a990a650-024a-4229-a756-bfaf5bca8c9f)

This Notes App is your gateway to an organized and productive life. Built with Vite, React, Express, and Node.js, it offers seamless user experiences for managing notes. Register, log in, and create, read, update, and delete notes effortlessly. It's your go-to platform for all things notes, ensuring an immersive and tailored note-taking experience.
## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [License](#license)

## Features
- User registration and login
- CRUD operations for notes
- Add images to notes via Cloudinary
- Secure authentication with JWT


## Technologies Used
- **Frontend**: Vite, React, Redux Toolkit, React Router DOM, React Toastify, React Icons
- **Backend**: Express, Node.js, MongoDB
- **Authentication**:JWT, bcrypt, hashcode
- **Image Upload**:Multer, Cloudinary



## Project Setup

### Backend Setup
1. Clone the repository:
```bash
https://github.com/Divesh1207/FindNotes.git

cd FindNotes/server
```


 
2.  Install the required dependencies:

```bash

npm install
```

3.Create a .env file in the Backend directory with the following content:

```bash

MONGODB_URL=your_mongodb_connection_string

PORT=your_port

SECRET_KEY=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret


```

4. Start the backend server:

```bash

npm start

```


### Frontend Setup

1. Navigate to the Frontend directory:

```bash

cd FindNotes/client

```


 
2.  Install the required dependencies:

```bash

npm install
```

3.Create a .env file in the Frontend directory with the following content:

```bash
VITE_BACKEND_URL= your_backend_hosted_url

```

4. Start the frontend server:

```bash

npm run dev

```
## Environment Variables

## Backend Environment Variables

- **MONGODB_URL**: The connection string for your MongoDB database.
- **SECRET_KEY**: A secret key for JWT authentication.
- **CLOUDINARY_CLOUD_NAME**: Your Cloudinary cloud name for image uploads.
- **CLOUDINARY_API_KEY**: Your Cloudinary API key.
- **CLOUDINARY_API_SECRET**: Your Cloudinary API secret.

## Frontend Environment Variables

- **VITE_BACKEND_URL:** :  The URL where your backend server is hosted.

 
## Usage:

1. **Register**: Begin your note-taking journey by creating your personal account. Sign up with just a few clicks and unlock a world of organized productivity!
2. **Login**: Already have an account? Simply log in with your registered credentials and dive back into the organized world of notes!
3. **Create Notes**: Start by creating new notes. Whether it's a quick reminder or a detailed plan, adding a note is just a click away.
4. **Read Notes**: Browse through your notes with ease. Click on any note to view its details and attachments.
5. **Update Notes**: Need to make changes? Edit your notes anytime to keep them up-to-date.
6. **Delete Notes**: Finished with a note? Delete it effortlessly to keep your workspace clutter-free.
7. **Add Images to Notes**: Enhance your notes by uploading images directly through Cloudinary.


 
## License

This project is licensed under the MIT License. See the LICENSE file for more details.

[MIT](https://choosealicense.com/licenses/mit/)
