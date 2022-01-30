from flask import Flask, jsonify
import json

app = Flask(__name__)
@app.route("/api", methods=['GET'])


#read in the json file data through this function 

def api():
    result = []
    for i in evdata["fuel_stations"]:
        result.append({"id": i["id"],
        "city": i["city"],
        "long:": i["longitude"],
       "lat:": i["latitude"],
       "type:": 0 })
    return jsonify(result), 200


key_list = ["id", "city", "long", "lat"]

def jsonfiles(filename):
    with open(filename) as f:
        data = json.load(f)
    return data

# data that will be displayed 

evdata = jsonfiles('electricity.json')




if __name__ == '__main__':
    app.run(debug=True)