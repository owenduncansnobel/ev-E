from flask import Flask, jsonify, request
import json
import requests 


# create the flask app
app = Flask(__name__)
@app.route("/api", methods=['GET',' POST'])

# main functions 


def api():

    """ 
    This function defines the flask app used 
    to test this code. 
    -------
    Input: None
    Output: specific data from json file extracted,
    then jsonifyed and returned again
    
    """
    result = []
    
    
    
    for i in evdata["fuel_stations"]:
        
        result.append({"id": i["id"],
        "city": i["city"],
        "long:": i["longitude"],
       "lat:": i["latitude"],
       "type:": 0,
       })

    return jsonify(result), 200



def jsonfiles(filename):

    """
    This function reads in a json file and returns stores it in a variable 
    that is returned 
    ------
    Input: json file name
    Output: variable storing json data
    """

    with open(filename) as f:
        data = json.load(f)
    return data

# read in json data using function above
evdata = jsonfiles('electricity.json')


with open("apikey.txt") as f: 
    api_key = f.readline()
    f.close

# making get requests for city council contact information





if __name__ == '__main__':
    app.run(debug=True)




