# MEVN Frontend Repository Readme

This repository contains the frontend code for a project that uses the MEVN stack (MongoDB, Express, Vue, Node.js). The purpose of this repository is to create the user interface for the application.

## Technologies Used

- Vue: a frontend JavaScript framework used to create user interfaces.
- Vue Router: a routing library used to handle navigation between pages.
- Axios: a library used to make HTTP requests from the frontend.
- Tailwind CSS: a utility-first CSS framework used to style the frontend.

## Getting Started

### Prerequisites

To run the frontend code, you will need to have Node.js installed on your computer.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Run the command `npm install` to install all dependencies.

### Usage

1. Make sure the backend server is running on your machine.
2. Run the command `npm run dev` to start the development server.
3. The server will be listening on port 3000 by default.

### Folder Structure

- `src/`: contains the source code for the frontend.
  - `assets/`: contains images, fonts, and other assets used in the application.
  - `components/`: contains reusable components used throughout the application.
  - `router.js`: contains the Vue Router configuration for the application.
  - `views/`: contains the top-level views for each page of the application.
  - `App.vue`: the root component of the application.
  - `main.js`: the entry point for the application.

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles Vue in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

#### `npm run preview`

Serves the production build from the `dist` folder using Vite's built-in preview server.

### Credits

This project was created by Nguyen Hoang Huy. The backend repository can be found at https://github.com/nguyenhoanghuycqtv/social-network-be.

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).