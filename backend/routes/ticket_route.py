from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.ticket import Ticket
from schemas.ticket_schema import TicketSchema
from models.database import db

ticket_bp = Blueprint('ticket_bp', __name__)


@ticket_bp.route('/', methods=['POST'])
def create_ticket():
    user_id = get_jwt_identity()
    data = request.get_json()
    new_ticket = Ticket(title=data['title'], description=data['description'], user_id=user_id)
    db.session.add(new_ticket)
    db.session.commit()
    return jsonify(TicketSchema().dump(new_ticket)), 201


@ticket_bp.route('/', methods=['GET'])
def get_tickets():
    user_id = get_jwt_identity()
    tickets = Ticket.query.filter_by(user_id=user_id).all()
    return jsonify(TicketSchema(many=True).dump(tickets)), 200


@ticket_bp.route('/all', methods=['GET'])
def get_all_tickets():
    tickets = Ticket.query.all()
    return jsonify(TicketSchema(many=True).dump(tickets)), 200


@ticket_bp.route('/<int:id>', methods=['PUT'])
def update_ticket(id):
    data = request.get_json()
    ticket = Ticket.query.get_or_404(id)
    ticket.title = data['title']
    ticket.description = data['description']
    ticket.status = data['status']
    db.session.commit()
    return jsonify(TicketSchema().dump(ticket)), 200


@ticket_bp.route('/<int:id>', methods=['DELETE'])
def delete_ticket(id):
    ticket = Ticket.query.get_or_404(id)
    db.session.delete(ticket)
    db.session.commit()
    return jsonify({"message": "Ticket deleted"}), 200


@ticket_bp.route('/<int:id>', methods=['GET'])
def get_ticket(id):
    ticket = Ticket.query.get_or_404(id)
    return jsonify(TicketSchema().dump(ticket)), 200


@ticket_bp.route('/user/<int:id>', methods=['GET'])
def get_user_s_tickets(id):
    user_id = get_jwt_identity()
    if user_id != id:
        return jsonify({"message": "Unauthorized access"}), 403

    tickets = Ticket.query.filter_by(user_id=user_id).all()
    return jsonify(TicketSchema(many=True).dump(tickets)), 200

