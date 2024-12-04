from flask import Flask, jsonify, request
from google.cloud import secretmanager
from firebase_functions import https_fn
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

ALLOWED_ORIGINS = {'http://localhost:4200':['38.25.22.137'], None : [] }

def get_secret(secret_id, project_id):
    client = secretmanager.SecretManagerServiceClient()
    name = f"projects/{project_id}/secrets/{secret_id}/versions/latest"
    response = client.access_secret_version(request={"name": name})
    return response.payload.data.decode("UTF-8")

@app.route('/api-key', methods=['GET'])
def get_api_key():

    origin = request.headers.get('Origin')
    forward = request.headers.get('X-Forwarded-For')

    print(origin)
    print(forward)
    # print(request.headers.get('X-Forwarded-Proto'))
    print(request.headers.__dict__)

    if (  forward not in ALLOWED_ORIGINS[origin]): return jsonify({
        "res": "Not allowed origin",
        }), 500

    secret_id = "vlueiochatAPIkey"  # Nombre del secreto
    project_id = "vluedotweb"  # Reemplaza con tu ID de proyecto
    try:
        api_key = get_secret(secret_id, project_id)
        return jsonify({"res": api_key}), 200
    except Exception as e:
        return jsonify({"res": str(e)}), 500
    
@app.route('/test', methods=['GET'])
def test():
    return {"Test" : "Everything K"}, 200
    

@https_fn.on_request()
def vluedotweb(req: https_fn.Request) -> https_fn.Response:
    with app.request_context(req.environ):
        return app.full_dispatch_request()

if __name__ == '__main__':

    app.run(debug=True)