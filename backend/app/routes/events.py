from fastapi import APIRouter, Depends
from firebase_admin import firestore
from app.firebase_config import db
from app.models.event import Event
from app.routes.auth import verify_token

router = APIRouter()

@router.post("/create")
def create_event(event: Event, user=Depends(verify_token)):
    event_data = event.dict()
    event_data["creator_id"] = user["uid"]

    db.collection("events").add(event_data)

    return {"message": "Event created successfully"}

@router.get("/all")
def get_events(user=Depends(verify_token)):
    events = db.collection("events").stream()

    return [event.to_dict() for event in events]
