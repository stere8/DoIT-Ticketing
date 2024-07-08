Welcome to the development journey of DoIt-Ticketing System!

This README serves as a living document that chronicles my progress in building this app. Consider it a behind-the-scenes peek into the challenges, solutions, and exciting milestones along the way.  This project will also be a learning experience for me as I delve deeper into Flask and explore a surprise frontend language (stay tuned to find out which one!).

May 4-5, 2024: Building the Foundation

Today's focus was on constructing the core API using Flask. Here's a breakdown of the steps:

Hello, World!: Starting with the classic tradition, I created a basic Flask app to ensure everything was set up correctly.
Testing Routes: To verify URL functionality, I added a few paths and tested their responses. This helped establish a solid framework for handling user requests.
Organizing Classes: Initially, all classes resided within app.py. However, for better maintainability and scalability, I decided to move them into separate modules.
Cleaning Up the Project:

As I delved deeper, I stumbled upon the importance of keeping the project clean and efficient. One crucial aspect was .gitignore:

Step 1: Banishing the Virtual Environment: Adding .venv to .gitignore prevents unnecessary bloating of the Git repository. The command:

Bash
echo ".venv" >> .gitignore
Use code with caution.
content_copy
achieves this by appending .venv to the .gitignore file.

Step 2: Evicting the Cache: To remove the virtual environment from Git's cache, the following commands were used:

Bash
git rm -r --cached .venv
git add .
git commit -m "Add .venv to .gitignore and remove it from Git tracking"
Use code with caution.
content_copy
This ensures a leaner repository and avoids version control conflicts.

Step 3: Pushing the Clean Up: If the project is hosted on a remote repository, pushing the changes using the appropriate command like:

Bash
git push origin your-branch-name
Use code with caution.
content_copy
updates the remote with the revised .gitignore.

Modularizing the App:

After the housekeeping, it was time to organize the code for better structure. Key changes included:

Dedicated Folders: Creating separate folders for models and routes fostered cleaner separation of concerns. Each folder received an __init__.py file to make them Python modules.
Taming Circular Imports: When dependencies arose between these modules (e.g., app using db and routes importing db from app), I encountered the dreaded circular import issue. The solution? Defining a dedicated db.py file to house database connection logic, accessible to both models and routes.
The Authentication Challenge:

Continuing the development, I hit a roadblock with user authentication. To maintain session persistence, I explored utilizing bearer tokens. This journey is still ongoing, and I'll share further insights once I've conquered this hurdle.

Stay Tuned!

This is just the beginning of the app development adventure. As I navigate through upcoming challenges and celebrate victories, I'll keep this blog updated. Feel free to join me on this exciting voyage!

Learning Flask and Beyond

This project will be a valuable learning experience for me as I expand my knowledge of Flask and delve into a new frontend language (the suspense continues!). I'll be documenting my learning process here, sharing insights and discoveries along the way.

I hope this enhanced README provides an engaging and informative chronicle of the DoIt-Ticketing System's development!


### Creation Journal Entry

**Date:** 7-8/7

**Today's Learning and Activities:**

#### Angular Components and Services
- **Angular Basics:** Refreshed my knowledge on Angular, focusing on creating components and services.
- **Task Component:** Created a task component to display individual tasks.
  - **Command:** `ng generate component task`
- **Task Service:** Created a service to provide task data.
  - **Command:** `ng generate service task`
- **Service Update:** Added preloaded tasks to the task service.
- **Component Update:** Used the task service in the task component to display tasks.
- **HTML Update:** Updated the task component's HTML to display tasks.
- **App Component Update:** Included the task component in the app component.
- **App Module Update:** Declared the task component and provided the task service.

#### Fixing TypeScript Errors
- **Error:** `Property 'tasks' has no initializer and is not definitely assigned in the constructor.ts(2564)`
- **Solution 1:** Initialize `tasks` with an empty array.
- **Solution 2:** Use definite assignment assertion (`!`).

#### Dashboard Component
- **Component Creation:** Created a dashboard component with preloaded tasks.
- **HTML Template:** Added HTML to display tasks in the dashboard component.
- **Testing:** Steps to test the dashboard component:
  - Ensure component configuration.
  - Add routing for the dashboard.
  - Use the dashboard component in a template.
  - Start the Angular development server and navigate to the dashboard route.

#### Styling Components
- **Global Styles:** Added global styles in `src/styles.css`.
- **Component-Specific Styles:** Added styles specific to the dashboard component in `dashboard.component.css`.
- **Button Styles:** Added buttons and styled them in the dashboard component.

#### User Authentication Components
- **Components Creation:** Created login, signup, and logout components.
  - **Commands:** 
    - `ng generate component login`
    - `ng generate component signup`
    - `ng generate component logout`
- **User Service:** Created a service to handle authentication logic and HTTP requests.
  - **Command:** `ng generate service auth`
- **Routing:** Updated routing to include paths for login, signup, and logout components.
- **Templates and Styles:** Added templates and styles for the new components.
- **Route Guards:** Used an auth guard to secure routes that require authentication.

#### API Instructions
- **User Routes:**
  - **Register:** `/users/register` (POST)
  - **Login:** `/users/login` (POST)
  - **Get All Users:** `/users/` (GET)
  - **Get User by ID:** `/users/<int:id>` (GET)
- **Ticket Routes:**
  - **Create Ticket:** `/tickets/` (POST)
  - **Get User's Tickets:** `/tickets/` (GET)
  - **Get All Tickets:** `/tickets/all` (GET)
  - **Update Ticket:** `/tickets/<int:id>` (PUT)
  - **Delete Ticket:** `/tickets/<int:id>` (DELETE)

**Summary:**
- Generated and updated Angular components and services.
- Fixed TypeScript errors.
- Styled components.
- Created user authentication components and services.
- Updated routing and secured routes with guards.
- Documented API instructions for user and ticket routes.

This setup will display a list of preloaded tasks in the Angular application and handle user authentication with login, signup, and logout functionalities.
