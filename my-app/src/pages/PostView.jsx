import Post from "../components/Post";
import Content from "../components/Content";
import Header from "../components/Header";
import Comments from "../components/Comments";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PostView() {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                const resPost = res.data;
                setPost(resPost);
            })
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => {
                const resComments = res.data;
                setComments(resComments);
            })

    }, []);

    return (
        <>
            <Header />
            <article>
                {post && <Post title={post.title} />}
                {post && <Content text={post.body} />}
            </article>
            {comments && <Comments allComments={comments} />}

        </>
    );
}

export default PostView;