from fastapi import FastAPI
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase
cred = credentials.Certificate("firebase-key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

app = FastAPI()

@app.get("/")
def home():
    return {"message": "NexGen Connect Backend Running"}

@app.post("/create-user")
def create_user(user: dict):
    db.collection("users").document(user["uid"]).set(user)
    return {"status": "user created"}

@app.get("/users")
def get_users():
    users = db.collection("users").stream()
    return [user.to_dict() for user in users]
