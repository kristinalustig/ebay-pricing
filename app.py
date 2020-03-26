import json
import os
from flask import Flask, escape, request, jsonify, render_template

app = Flask(__name__)

with open('data/magiclist.json') as f:
  data = json.load(f)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/api/cards', methods=['GET', 'POST'])
def api_magic_get():
  return jsonify(data), 200

if __name__ == '__main__':
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port)
