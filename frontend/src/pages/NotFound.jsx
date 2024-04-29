import { Link } from 'react-router-dom';
import '../styles/NotFound.css'

function NotFound() {
    return (
    <div id='not-found'>
            <Link to='/' className='home-button'>Back to Your Notes</Link>
            <footer className="footer">
                <p><span id="date">2024 &copy; </span>Designed & Coded by Vasil Rangelov. All Rights Reserved</p>
            </footer>
    </div>
    )
}

export default NotFound
