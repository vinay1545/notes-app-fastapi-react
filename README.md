# Notes App with Search

A lightweight Notes Application built using React JS and FastAPI.

## Features

- Create new notes
- Search notes by keyword
- Case-insensitive search
- Substring matching
- Responsive UI
- REST API integration
- In-memory storage

---

## Tech Stack

### Frontend
- React JS
- CSS
- Axios

### Backend
- FastAPI
- Python

---

## Project Structure

notes-app/
|
├── backend/
│   ├── main.py
│   └── requirements.txt
│
└── frontend/
    ├── src/
    └── package.json

---

## Run Backend

```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

## Run Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```text
http://localhost:3000
```

---

## API Endpoints

### Get All Notes

```http
GET /notes
```

### Search Notes

```http
GET /notes?search=react
```

### Create Note

```http
POST /notes
```

Example Request Body:

```json
{
  "title": "Mini Project Notes",
  "body": "Build Notes App using React and FastAPI."
}
```

---

## Search Functionality

- Search is case-insensitive
- Matches substrings
- Searches both title and body

Examples:
- react
- React
- notes
- api

---

## Storage

Notes are stored using an in-memory Python list.
No external database is used.
