from tkinter import *
from tkinter import filedialog
from PIL import Image, ImageTk
from time import *
import os
# import tensorflow as tf
# import numpy as np
# import keras
# from skimage import io
# from tensorflow.keras.preprocessing import image
window = Tk()
window.title("Covid-19 Detection System")
window.minsize(500,350)

# model =tf.keras.models.load_model('H:\plant-leaf-detection\modeldetection.h5',compile=False)
#######################################

def fileDialog():
        file = filedialog.askopenfilename(initialdir =  "/", title = "Select A File", filetype =
        (("jpeg files","*.jpg"),("all files","*.*")) )
        n_img = Image.open(file)
        n_img=n_img.resize((300, 300), Image.ANTIALIAS)
        n_photo = ImageTk.PhotoImage(n_img)
        image_label.configure(image=n_photo)
        image_label.image=n_photo
        # global model
        ind=model_predict(file)
        if(ind==1):
                color="red"
        else:
                color="green"
        prediction.config(text=prediction_class[ind],fg=color,font="bold")
        
        
#################################
#Browse
browse_btn_frame=LabelFrame(window, text = "Open File",width=310,height=200)
browse_btn_frame.grid(column = 0, row = 0,columnspan=2,padx = 20)
browse_btn=Button(browse_btn_frame, text = "Browse A File",width=60,command=fileDialog)
browse_btn.grid(column = 0, row = 0,padx = 20, pady = 20)
#################################
#Prediction
prediction_frame=LabelFrame(window, text = "Prediction")
prediction_frame.grid(column = 0, row = 2,padx = 20,pady = 20)
prediction=Label(prediction_frame, text = "Waiting to upload",width=60)
prediction.grid(column = 0, row = 0,padx = 20, pady = 20)
#################################
#Show image



image_frame=LabelFrame(window, text = "Image",)
image_frame.grid(column = 0, row = 1,padx = 10, )
img_new = Image.open("H:\covid-detection\image-icon.png")
img_new=img_new.resize((300, 300), Image.ANTIALIAS)
photo = ImageTk.PhotoImage(img_new)
image_label=Label(image_frame, image=photo,width=330,height=330)
image_label.grid(column = 0, row = 0,padx = 20, pady = 20)

#################################
#Remedy





print('Model loaded. ')

prediction_class=['negative','positive']

def model_predict(img_path):
        return 1
#     img = image.load_img(img_path, grayscale=False, target_size=((128,128)))
#     show_img = image.load_img(img_path, grayscale=False, target_size=(128, 128))
#     x = image.img_to_array(img)
#     x = np.expand_dims(x, axis=0)
#     x = np.array(x, 'float32')
#     x /= 255
#     preds = model.predict(x)
#     a = preds
#     ind=np.argmax(a)  
#     return ind

mainloop()