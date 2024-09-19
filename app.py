from flask import Flask, render_template, request, redirect, url_for
import ast
import mysql.connector

app = Flask(__name__, static_folder='static')

# url_for("static", "css/styles.css")

@app.route("/")
def landPage():
    return render_template("user_Access.html")



@app.route("/getData", methods=['GET', 'POST'])
def getdat():
    if request.method == "POST":
        a = ast.literal_eval(request.get_data().decode('utf-8'))
        print(a['user'])
        # condition to sql db
        if(a['user'] == "raj"):
            newurl = redirect(url_for("patientPage", pname=a['user']))
        elif(a['user'] == "sham"):
            newurl = redirect(url_for("doctorPage", dname=a['user']))
        else:
            newurl = redirect(url_for("patientPage", pname="new user"))
        return {'url': newurl.location}

        

@app.route("/patient/<pname>")
def patientPage(pname):
    return render_template("index.html", patient=pname)

@app.route("/doctor/<dname>")
def doctorPage(dname):
    return render_template("index.html", doctor=dname)



app.run(host="127.0.0.1", port=2004, debug=True)