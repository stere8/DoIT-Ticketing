    #API Instructions

    ## User Routes

    ### Register a New User
    **Endpoint:** `/users/register`  
    **Method:** `POST`  
    **Description:** Registers a new user.  
    **Request Body:**
    ```json
    {
        "username": "your_username",
        "email": "your_email",
        "password": "your_password"
    }
    ```
    **Response:**
    ```json
    {
        "message": "User created"
    }
    ```

    ### Login
    **Endpoint:** `/users/login`  
    **Method:** `POST`  
    **Description:** Logs in a user and returns a JWT token.  
    **Request Body:**
    ```json
    {
        "email": "your_email",
        "password": "your_password"
    }
    ```
    **Response:**
    ```json
    {
        "access_token": "your_jwt_token"
    }
    ```

    ### Get All Users
    **Endpoint:** `/users/`  
    **Method:** `GET`  
    **Description:** Retrieves all users.  
    **Response:**
    ```json
    [
        {
            "id": 1,
            "username": "user1",
            "email": "user1@example.com"
        },
        ...
    ]
    ```

    ### Get User by ID
    **Endpoint:** `/users/<int:id>`  
    **Method:** `GET`  
    **Description:** Retrieves a user by their ID.  
    **Response:**
    ```json
    {
        "id": 1,
        "username": "user1",
        "email": "user1@example.com"
    }
    ```

    ## Ticket Routes

    ### Create a Ticket
    **Endpoint:** `/tickets/`  
    **Method:** `POST`  
    **Description:** Creates a new ticket. Requires JWT token.  
    **Request Body:**
    ```json
    {
        "title": "Ticket Title",
        "description": "Ticket Description"
    }
    ```
    **Response:**
    ```json
    {
        "id": 1,
        "title": "Ticket Title",
        "description": "Ticket Description",
        "status": "open",
        "user_id": 1
    }
    ```

    ### Get User's Tickets
    **Endpoint:** `/tickets/`  
    **Method:** `GET`  
    **Description:** Retrieves all tickets for the logged-in user. Requires JWT token.  
    **Response:**
    ```json
    [
        {
            "id": 1,
            "title": "Ticket Title",
            "description": "Ticket Description",
            "status": "open",
            "user_id": 1
        },
        ...
    ]
    ```

    ### Get All Tickets
    **Endpoint:** `/tickets/all`  
    **Method:** `GET`  
    **Description:** Retrieves all tickets.  
    **Response:**
    ```json
    [
        {
            "id": 1,
            "title": "Ticket Title",
            "description": "Ticket Description",
            "status": "open",
            "user_id": 1
        },
        ...
    ]
    ```

    ### Update a Ticket
    **Endpoint:** `/tickets/<int:id>`  
    **Method:** `PUT`  
    **Description:** Updates a ticket by its ID. Requires JWT token.  
    **Request Body:**
    ```json
    {
        "title": "Updated Title",
        "description": "Updated Description",
        "status": "closed"
    }
    ```
    **Response:**
    ```json
    {
        "id": 1,
        "title": "Updated Title",
        "description": "Updated Description",
        "status": "closed",
        "user_id": 1
    }
    ```

    ### Delete a Ticket
    **Endpoint:** `/tickets/<int:id>`  
    **Method:** `DELETE`  
    **Description:** Deletes a ticket by its ID. Requires JWT token.  
    **Response:**
    ```json
    {
        "message": "Ticket deleted"
    }
    ```

    ## Relevant Files and Directories

    - **/backend/routes/__init__.py**: Empty file, initializes the routes module.
    - **/backend/__init__.py**: Empty file, initializes the backend module.
    - **/backend/models/__init__.py**: Empty file, initializes the models module.
    - **/backend/models/user.py**: Defines the `User` model with attributes `id`, `username`, `email`, `password`, and a relationship with `Ticket`.
    - **/backend/routes/user_routes.py**: Contains routes for user registration, login, and retrieval.
    - **/backend/routes**: Contains `ticket_route.py` and `user_routes.py`, defining blueprints for handling HTTP requests related to tickets and users.
    - **/backend/models**: Contains model definitions for the application, including `User`, `Item`, `Store`, and `Ticket`.
    - **/backend/models/ticket.py**: Defines the `Ticket` model with attributes `id`, `title`, `description`, `status`, and `user_id`.
    - **/backend**: Contains the backend code for the Flask application, including `app.py`, which initializes the app and registers blueprints.
    - **/backend/routes/ticket_route.py**: Defines routes for creating, retrieving, updating, and deleting tickets.
    - **/backend/instance**: Contains configuration files for the Flask application.
    - **/backend/schemas**: Contains `ticket_schema.py`, defining a schema for ticket objects using Marshmallow.
    - **/backend/app.py**: Initializes the Flask app, sets up the database connection, and registers blueprints for user and ticket routes.
    - **/.gitignore**: Specifies files and directories to be ignored by Git, including `.venv` and `.idea`.
    - **/backend/models/database.py**: Creates an instance of the SQLAlchemy class to interact with the database.

    