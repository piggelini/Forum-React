import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";



export default function Feed() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const resPosts = res.data;
                setPosts(resPosts);
            })
    })

    return (
        <main>
            {posts && posts.map((post) => {
                return <Post title={post.title} content={post.body} id={post.id} />
            })}

        </main>
    );
}
