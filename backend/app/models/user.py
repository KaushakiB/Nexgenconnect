# models/user.py   ← at least do this for now
from pydantic import BaseModel

class User(BaseModel):
    name: str
    email: str
    # you can add more later: subjects: list[str], year: int, etc.
