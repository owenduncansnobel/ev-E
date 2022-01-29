from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from marshmallow_jsonapi.flask import Schema
from marshmallow_jsonapi import fields

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////artists.db'
db = SQLAlchemy(app)

# Define a class for the Gas table
class Gas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    latitude = db.Column(db.Integer)
    longitude = db.Column(db.Integer)

# Create data abstraction layer
class GasSchema(Schema):
    class Meta:
        type_ = 'gas'
        self_view = 'gas_one'
        self_view_kwargs = {'id': '<id>'}
        self_view_many = 'gas_many'

    id = fields.Integer()
    name = fields.Str(required=True)
    latitude = fields.Integer(load_only=True)
    longitude = fields.Integer(load_only=True)

db.create_all()