#### Toro Investimentos

--ABOUT--

An Angular frontend application to be used with the Toro Investimentos backend application

--INSTRUCTIONS--

To run the project, all you need to do is run "npm install" then "ng serve" in a terminal pointing to this project's folder. Alternativelly, you can build a 
Docker image with the Dockerfile that comes with this project and run the project in http://localhost:4200.

The credentials used to login are: username="admin", password="password", or whatever username and password you've set in the backend.

--ADDITIONAL INFO--

Like the Backend, this project follows a clean, hexagonal architecture and the DRY principles by settings the crud components and them extending them by the real, functional
components. To reduce loading time and data overfetching, the datatables use paginated queries that can be set in the backend.

--LIMITATIONS--

The application does not refresh the authorization token automatically because it would escape the scope of the project, which was to create a simple CRUD with a file
upload, so every 15 minutes it is neccessary to re-login the user. Applying a refresh token system is not hard, since the project already creates a refresh token for 
the user.