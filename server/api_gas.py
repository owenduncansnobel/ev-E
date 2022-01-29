from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from marshmallow_jsonapi.flask import Schema
from marshmallow_jsonapi import fields
from flask_rest_jsonapi import Api, ResourceDetail, ResourceList

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////gas.db'
db = SQLAlchemy(app)

# Define a class for the Gas table
class Gas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    latitude = db.Column(db.Integer)
    longitude = db.Column(db.Integer)
    type = db.Column(db.Boolean)

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
    type = fields.Boolean(load_only=True)

# Create resource managers and endpoints
class GasMany(ResourceList):
    schema = GasSchema
    data_layer = {'session': db.session,
                  'model': Gas}


class GasOne(ResourceDetail):
    schema = GasSchema
    data_layer = {'session': db.session,
                  'model': Gas}


api_gas = Api(app)
api_gas.route(GasMany, 'gas_many', '/gas')
api_gas.route(GasOne, 'gas_one', '/artist/<int:id>')


# main loop to run app in debug mode
if __name__ == '__main__':
    app.run(debug=True)

db.create_all()
