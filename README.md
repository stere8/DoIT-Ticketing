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
