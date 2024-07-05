from flask import Flask
from flask_jwt_extended import JWTManager
from backend.models.database import db
from backend.routes.ticket_route import ticket_bp
from backend.routes.user_routes import user_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///doit.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'

db.init_app(app)
jwt = JWTManager(app)


app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(ticket_bp, url_prefix='/tickets')





if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run()
