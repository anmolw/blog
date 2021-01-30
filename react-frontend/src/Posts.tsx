import React from 'react';
import { IPost } from './interfaces/posts';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

interface PostListState {
    posts: IPost[]
}

interface PostProps {
    post: IPost
}

function AbbreviatedPost(props: PostProps) {
    return (
        <li key={props.post._id}>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
        </li>
    )
}

export class PostList extends React.Component<{}, PostListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            posts: [],
        };
    }
    componentDidMount() {
        let posts: IPost[];
        const req = axios.get(`${BASE_URL}/posts`).then((result) => {
            posts = result.data;
            this.setState({
                posts: posts,
            });
        }, (error) => {
            console.error(error);
        });
    }
    render() {
        const posts = this.state.posts.map((post: IPost) => {
            return (<AbbreviatedPost post={post} />)
        });
        return (
            <ul>{posts}</ul>
        );
    };
}