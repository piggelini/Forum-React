import Content from "./Content";
import { Link } from "react-router-dom";

export default function Post({ title, id }) {
    return (
        <section>
            <Link to={`/post/${id}`}><h2 className="title">{title}</h2></Link>
        </section>
    )
}