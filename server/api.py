from flask import Flask
import json

app = Flask(__name__)
@app.route("/api", methods=['GET'])


#read in the json file data through this function 
def api():
    return jsonfiles('electricity.json'), 200

def jsonfiles(filename):
    with open(filename) as f:
        data = json.load(f)
    return data


if __name__ == '__main__':
    app.run(debug=True)