from marshmallow import Schema, fields

class TicketSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str(required=True)
    description = fields.Str(required=True)
    status = fields.Str()
    user_id = fields.Int(required=True)