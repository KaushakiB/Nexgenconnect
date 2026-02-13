import firebase_admin
from firebase_admin import credentials, firestore   # ← add 's' to firestore

cred = credentials.Certificate("firebase_key.json")  # note: your file is firebase_key.json (no underscore in name?)
firebase_admin.initialize_app(cred)                  # ← fix spelling: initialize_app
db = firestore.client()                              # ← fix: firestore.client()
