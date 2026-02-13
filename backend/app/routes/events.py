from pydantic import BaseModel
from datetime import datetime

class Event(BaseModel):
    title: str
    city: str
    destination: str
    travel_date: datetime
    transport_mode: str

