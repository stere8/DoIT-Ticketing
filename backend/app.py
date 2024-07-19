from flask import Flask
from flask_jwt_extended import JWTManager
from backend.models.database import db
from flask_migrate import Migrate
from backend.routes.ticket_route import ticket_bp
from backend.routes.user_routes import user_bp
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///doit.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
CORS(app)

db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)


app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(ticket_bp, url_prefix='/tickets')

@app.route('/')
def index():
    with open('API_INSTRUCTIONS.md', 'r') as file:
        instructions = file.read()
    return instructions





if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run()
