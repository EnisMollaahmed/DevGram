import { Spinner } from "react-bootstrap";
import './Loading.css'

export default function Loading(){
    return (
        <section className="loading-section">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </section>
    )
}