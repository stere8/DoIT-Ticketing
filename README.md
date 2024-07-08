# Welcome to the Development Journey of DoIt-Ticketing System!

This README serves as a living document that chronicles my progress in building this app. Consider it a behind-the-scenes peek into the challenges, solutions, and exciting milestones along the way. This project will also be a learning experience for me as I delve deeper into Flask and explore Angular as the frontend framework.

---

## May 4-5, 2024: Building the Foundation

### Flask API Development

**Today's focus was on constructing the core API using Flask. Here's a breakdown of the steps:**

1. **Hello, World!**: Starting with the classic tradition, I created a basic Flask app to ensure everything was set up correctly.
2. **Testing Routes**: To verify URL functionality, I added a few paths and tested their responses. This helped establish a solid framework for handling user requests.
3. **Organizing Classes**: Initially, all classes resided within `app.py`. However, for better maintainability and scalability, I decided to move them into separate modules.

### Cleaning Up the Project

- **Step 1: Banishing the Virtual Environment**: Adding `.venv` to `.gitignore` prevents unnecessary bloating of the Git repository.
  ```bash
  echo ".venv" >> .gitignore
  ```
- **Step 2: Evicting the Cache**: To remove the virtual environment from Git's cache:
  ```bash
  git rm -r --cached .venv
  git add .
  git commit -m "Add .venv to .gitignore and remove it from Git tracking"
  ```
- **Step 3: Pushing the Clean Up**: If the project is hosted on a remote repository:
  ```bash
  git push origin your-branch-name
  ```

### Modularizing the App

- **Dedicated Folders**: Creating separate folders for models and routes fostered cleaner separation of concerns. Each folder received an `__init__.py` file to make them Python modules.
- **Taming Circular Imports**: When dependencies arose between these modules, I encountered the dreaded circular import issue. The solution? Defining a dedicated `db.py` file to house database connection logic, accessible to both models and routes.

### The Authentication Challenge

Continuing the development, I hit a roadblock with user authentication. To maintain session persistence, I explored utilizing bearer tokens. This journey is still ongoing, and I'll share further insights once I've conquered this hurdle.

---

## Stay Tuned!

This is just the beginning of the app development adventure. As I navigate through upcoming challenges and celebrate victories, I'll keep this blog updated. Feel free to join me on this exciting voyage!

---

## Learning Flask and Beyond

This project will be a valuable learning experience for me as I expand my knowledge of Flask and delve into Angular. I'll be documenting my learning process here, sharing insights and discoveries along the way.

---

## Creation Journal Entry

**Date:** 7-8/7

**Today's Learning and Activities:**

### Angular Components and Services

- **Angular Basics:** Refreshed my knowledge on Angular, focusing on creating components and services.
  - **Angular Components:** Components are the building blocks of Angular applications. They encapsulate the HTML, CSS, and logic for a part of the user interface.
  - **Angular Services:** Services are used to share data and functionality across components. They are typically used for tasks like fetching data from a server.

- **Task Component:** Created a task component to display individual tasks.
  - **Command:** `ng generate component task`
  - **Explanation:** This command generates the necessary files for a new component, including the TypeScript, HTML, and CSS files.

- **Task Service:** Created a service to provide task data.
  - **Command:** `ng generate service task`
  - **Explanation:** This command generates a new service file where we can define methods to fetch and manipulate data.

- **Service Update:** Added preloaded tasks to the task service.
  - **Explanation:** Services can hold data and provide methods to access and manipulate that data. This is useful for sharing data between components.

- **Component Update:** Used the task service in the task component to display tasks.
  - **Explanation:** By injecting the service into the component, we can call its methods to get data and display it in the component's template.

- **HTML Update:** Updated the task component's HTML to display tasks.
  - **Explanation:** Angular's template syntax allows us to bind data from the component to the HTML, making it easy to display dynamic content.

- **App Component Update:** Included the task component in the app component.
  - **Explanation:** The root component of the application should include other components to build the complete UI.

- **App Module Update:** Declared the task component and provided the task service.
  - **Explanation:** All components and services must be declared and provided in the app module to be used throughout the application.

### Fixing TypeScript Errors

- **Error:** `Property 'tasks' has no initializer and is not definitely assigned in the constructor.ts(2564)`
  - **Solution 1:** Initialize `tasks` with an empty array.
  - **Solution 2:** Use definite assignment assertion (`!`).

### Dashboard Component

- **Component Creation:** Created a dashboard component with preloaded tasks.
  - **Command:** `ng generate component dashboard`
  - **Explanation:** The dashboard component will serve as the main view for displaying tasks.

- **HTML Template:** Added HTML to display tasks in the dashboard component.
  - **Explanation:** The template uses Angular's structural directives like `*ngFor` to loop through tasks and display them.

- **Testing:** Steps to test the dashboard component:
  - **Ensure Component Configuration:** Verify that the component is correctly configured.
  - **Add Routing for the Dashboard:** Update the routing module to include a path for the dashboard component.
  - **Use the Dashboard Component in a Template:** Include the dashboard component in the main app component template.
  - **Start the Angular Development Server:** Run `ng serve` and navigate to the dashboard route.

### Styling Components

- **Global Styles:** Added global styles in `src/styles.css`.
  - **Explanation:** Global styles apply to the entire application and are defined in the main styles file.

- **Component-Specific Styles:** Added styles specific to the dashboard component in `dashboard.component.css`.
  - **Explanation:** Component-specific styles are scoped to the component, preventing them from affecting other parts of the application.

- **Button Styles:** Added buttons and styled them in the dashboard component.
  - **Explanation:** Buttons can be styled using CSS classes to improve the UI/UX.

### User Authentication Components

- **Components Creation:** Created login, signup, and logout components.
  - **Commands:** 
    - `ng generate component login`
    - `ng generate component signup`
    - `ng generate component logout`
  - **Explanation:** These components will handle user authentication, allowing users to log in, sign up, and log out.

- **User Service:** Created a service to handle authentication logic and HTTP requests.
  - **Command:** `ng generate service auth`
  - **Explanation:** The authentication service will manage user sessions and communicate with the backend API.

- **Routing:** Updated routing to include paths for login, signup, and logout components.
  - **Explanation:** Routing allows users to navigate between different views in the application.

- **Templates and Styles:** Added templates and styles for the new components.
  - **Explanation:** Each component has its own template and styles to define its appearance and behavior.

- **Route Guards:** Used an auth guard to secure routes that require authentication.
  - **Explanation:** Route guards can prevent unauthorized access to certain routes, ensuring that only authenticated users can access them.

### API Instructions

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

---

I hope this enhanced README provides an engaging and informative chronicle of the DoIt-Ticketing System's development!
