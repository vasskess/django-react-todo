import { useState, useEffect } from 'react'
import api from '../todo_api'
import Note from '../components/Note'
import '../styles/Home.css'

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get('/api/notes/')
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data)
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert('Note Deleted !');
                else alert('Note delete failed.');
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post('api/notes/', {content, title})
            .then((res) => {
                if (res.status === 201) alert('Note Created!');
                else alert('Note creation faild.');
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <p className='info-text'>My Notes</p>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <h2 className='info-text'>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
            <footer className="footer">
                <p><span id="date">2024 &copy; </span>Designed & Coded by Vasil Rangelov. All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Home;