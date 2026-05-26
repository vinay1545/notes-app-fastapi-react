from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

notes = []
current_id = 1


class Note(BaseModel):
    title: str
    body: str


@app.get("/notes")
async def get_notes(search: str = ""):

    if search:

        filtered_notes = [
            note for note in notes
            if search.lower() in note["title"].lower()
            or search.lower() in note["body"].lower()
        ]

        return filtered_notes

    return notes


@app.post("/notes")
async def add_note(note: Note):

    global current_id

    note_data = {
        "id": current_id,
        "title": note.title,
        "body": note.body
    }

    notes.append(note_data)

    current_id += 1

    return note_data


if __name__ == "__main__":

    uvicorn.run(
        app,
        host="127.0.0.1",
        port=8000
    )