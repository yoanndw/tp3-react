import { Link } from "react-router-dom";

export function About() {
    return (
        <div>
            <h1>About</h1>

            <p>Created by Yoann DEWILDE for Web Engineering module.</p>

            <Link to="/">Return to list</Link>
        </div>
    );
}