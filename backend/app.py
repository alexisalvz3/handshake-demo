import json
from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from datetime import datetime
import os
from dotenv import load_dotenv

# load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app, origins="*")

# configuring the database connection
db_config = {
    'host': os.getenv('DB_HOST', '127.0.0.1'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'database': os.getenv('DB_NAME'),
}


@app.route('/index', methods=['GET', 'POST'])
def get_students():
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM Students')
        students = cursor.fetchall()
        print("Retrieved students:", students)
        cursor.close()
        conn.close()
        return jsonify(students)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)