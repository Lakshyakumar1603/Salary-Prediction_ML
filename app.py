from flask import Flask,render_template,request,url_for
import joblib
import mysql.connector as con 

app=Flask(__name__)

model=joblib.load("salary-prediction-model.lb")

@app.route("/")
def home():
    return render_template("form.html")

@app.route("/user_data",methods=["GET","POST"])
def user_data():
    if request.method=="POST":
        jtt=request.form["jtt"]
        jt=request.form["jt"]
        el=request.form["el"]
        l=request.form["l"]
        sc=request.form["sc"]
        
    data=[[int(jtt),int(jt),int(el),int(l),int(sc)]]
    
    #prediction work 
    pred=model.predict(data)
    pred=pred.ravel()
    pred=str(int(pred[0]))
    msg="your Predicted Credit Limit is "+ pred
    
    
    main_data=[int(jtt),int(jt),int(el),int(l),int(sc),int(pred)]
    
    #database work
    #mysql connection work 
    conn=con.connect(
        host="localhost",
        user="root",
        password="",
        database="salary"
    )
    #create the cursor object 
    cursor = conn.cursor()
    
    Qurey="insert into prediction(jtt,jt,el,l,sc,p) values(%s,%s,%s,%s,%s,%s)"
    cursor.execute(Qurey,main_data)
    
    # Commit the transaction
    conn.commit()

    # Close the cursor and connection
    cursor.close()
    conn.close()
    return pred
    
if(__name__=="__main__"):
    app.run(debug=True)