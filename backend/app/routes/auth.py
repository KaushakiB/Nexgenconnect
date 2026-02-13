from fastapi import APIRouter, HTTPException, Depends
from firebase_admin import auth as firebase_auth
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

router = APIRouter()
security = HTTPBearer()

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        decoded_token = firebase_auth.verify_id_token(credentials.credentials)
        return decoded_token
    except:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

@router.get("/verify")
def verify_user(user=Depends(verify_token)):
    return {"uid": user["uid"], "email": user["email"]}

