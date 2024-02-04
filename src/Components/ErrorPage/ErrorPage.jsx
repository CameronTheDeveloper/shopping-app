import "./ErrorPage.module.css";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            <h1>Oh no, this route doesn't exist!</h1>
            <Link to="/">Return to home</Link>
        </div>
    );
}

export default ErrorPage;