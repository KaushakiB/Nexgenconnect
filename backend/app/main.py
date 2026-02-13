import os
from dotenv import load_dotenv

load_dotenv()

FRONTEND_URL = os.getenv("FRONTEND_URL")
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, events

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later restrict to your Vercel domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(events.router, prefix="/events", tags=["Events"])

@app.get("/")
def root():
    return {"message": "NexgenConnect Backend Running"}

