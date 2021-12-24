from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/birthday')
def birthday():
    return 'August 23, 1987'

@app.route('/greeting/<name>')
def greeting(name):
    return 'Hello, %s' % name

@app.route('/sum/<int1>/<int2>')
def sum(int1,int2):
    total = int(int1) + int(int2)
    return str(total)

@app.route('/multiply/<int1>/<int2>')
def multiply(int1,int2):
    total = int(int1)*int(int2)
    return str(total)

@app.route('/subtract/<int1>/<int2>')
def subtract(int1,int2):
    total = int(int1)-int(int2)
    return str(total)

@app.route('/favoritefoods')
def foods():
    foods = ['coffee','cheesecake','salads']
    return jsonify(foods)
