import pickle
from flask import Flask, jsonify, render_template, request
import joblib
import os
import numpy as np
import joblib
from pickle import load
import tensorflow
import pandas as pd
app = Flask(__name__)

scalar= load(open('scaler2.pkl', 'rb'))
model=tensorflow.keras.models.load_model('ann-2.h5')


diagnoses = ['Negative',
             'Hypothyroid', 
             'Hyperthyroid']
@app.route("/")
def index():
    return render_template("index.html")

@app.route('/predict',methods=['POST','GET'])
def result():
    print(request.data)


    age= float(request.form['age'])
    sex=float(request.form['sex'])
    on_thyroxine= float(request.form['on_thyroxine'])
    sick= float(request.form['sick'])
    pregnant = float(request.form['pregnant'])
    query_hypothyroid= float(request.form['query_hypothyroid'])
    query_hyperthyroid= float(request.form['query_hyperthyroid'])
    goitre= float(request.form['goitre'])
    hypopituitary= float(request.form['hypopituitary'])
    TSH= float(request.form['TSH'])
    T3= float(request.form['T3'])
    TT4= float(request.form['TT4'])
#  ['age', 'sex', 'on_thyroxine', 'sick', 'pregnant',
#               'query_hypothyroid', 'query_hyperthyroid', 'goitre',
#               'hypopituitary', 'TSH', 'T3', 'TT4', 'target']
    X= np.array([[ age,sex,on_thyroxine,sick,pregnant,query_hypothyroid,
                  query_hyperthyroid,goitre,hypopituitary,TSH,T3,TT4 ]])

        
    X=pd.DataFrame(X,columns=['age', 'sex', 'on_thyroxine', 'sick', 'pregnant',
              'query_hypothyroid', 'query_hyperthyroid', 'goitre',
               'hypopituitary', 'TSH', 'T3', 'TT4',])
    print(X)

    

    

   

    X_c=scalar.transform(X)
   
   
    pred=model.predict(X_c)
    print(pred)
    idx=np.argmax(pred[0])
    print(diagnoses[idx])

    # print(pred_1,pred,pred_3)
    return jsonify({'pred':diagnoses[idx]})

if __name__ == "__main__":
    app.run(debug=True, port=9457)
