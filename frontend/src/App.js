import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const API_URL = "http://127.0.0.1:8000";


    const fetchNotes = async () => {

        const response =
            await axios.get(
                `${API_URL}/notes?search=${search}`
            );

        setNotes(response.data);
    };


    const createNote = async () => {

        if (!title || !body) {

            alert("Please fill all fields");

            return;
        }

        await axios.post(`${API_URL}/notes`, {
            title,
            body
        });

        setTitle("");
        setBody("");

        fetchNotes();
    };


useEffect(() => {

    fetchNotes();

}, [search]);


    return (

        <div className="container">

            <h1>Notes App</h1>

            <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Write note..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <button onClick={createNote}>
                Add Note
            </button>

            <input
                type="text"
                placeholder="Search notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="notes-section">

                {
                    notes.map(note => (

                        <div
                            className="note-card"
                            key={note.id}
                        >

                            <h3>{note.title}</h3>

                            <p>{note.body}</p>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default App;