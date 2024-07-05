**Progress Update: 4-5/7/2024**

Starting from Scratch: Building the API
Today marked the beginning of my journey in creating the API for my application. I started with the basics, setting up a new Flask app with the classic "Hello World" example. This initial step was crucial to ensure that my development environment was correctly configured and that Flask was running smoothly.

Adding Routes and Testing URLs
Once the basic setup was complete, I added a few routes to test if the URLs were working as expected. This step involved creating simple endpoints and verifying their responses, which helped me confirm that the routing mechanism was functioning correctly.

Organizing Code: Moving to Modules
Initially, all my classes were contained within a single app.py file. However, I soon realized the importance of organizing my code into modules. This led me to create separate directories for models and routes, each with its own __init__.py file to make them proper Python modules.

Managing Virtual Environments: The .venv Dilemma
A significant learning moment came when I discovered the benefits of excluding the .venv directory from my Git repository. Including it made the repository unnecessarily heavy. Here's how I resolved this:

bash
Copy code
# Step 1: Add .venv to .gitignore
echo ".venv" >> .gitignore

# Step 2: Remove .venv from Git cache
git rm -r --cached .venv
git add .
git commit -m "Add .venv to .gitignore and remove it from Git tracking"

# Step 3: Push changes to remote repository (if applicable)
git push origin your-branch-name
This process also involved removing .idea and cache files, which was initially challenging but ultimately rewarding.

Tackling Circular Imports
As I continued to modularize my code, I encountered issues with circular imports. Specifically, the app.py file was using the database (db) and importing some routes, while those routes were also importing db from app.py. To resolve this, I moved the database initialization to its own file, which helped break the circular dependency.

Running the App as a Module
After reorganizing the code, I faced issues with running the application. The solution was to run the backend as a module, which streamlined the execution process.

Authentication: Staying Logged In
Finally, I tackled the authentication mechanism. To stay logged in, I implemented a system where the token obtained during login is used as a Bearer token for subsequent requests. This ensures secure and persistent user sessions.
