import React from 'react';
import { IPost } from '../interfaces/posts';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link, useParams } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface PostListState {
    posts: IPost[]
}

interface PostProps {
    post: IPost
}

interface SinglePostProps {
    postId: string
}

interface SinglePostState {
    loaded: boolean,
    post?: IPost
}

interface SinglePostFromURLParams {
    id: string
}

function AbbreviatedPost(props: PostProps) {
    return (
        <Row >
            <Col>
                <h2>{props.post.title}</h2>
                <p>{props.post.body}</p>
            </Col>
        </Row>
    );
}

function truncatePost(body: string): string {
    return (body.trimEnd().length <= 500 ? body : body.trimEnd().substr(0, 500) + "...");
}

function PostCard(props: PostProps) {
    return (
        <Card className="mb-2">
            <Card.Body>
                <Card.Title>{props.post.title}</Card.Title>
                <Card.Text>{truncatePost(props.post.body)}</Card.Text>
                <div className="d-flex flex-row-reverse">
                    <Button variant="link" as={Link} to={`/posts/${props.post._id}`}>Continue Reading</Button>
                </div>
            </Card.Body>
        </Card>
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
        const posts = this.state.posts.map(post => <PostCard post={post} key={post._id} />);
        return (
            <Container style={{ marginTop: "4rem" }}>
                {posts}
            </Container>
        );
    };
}

export function SinglePostFromURL() {
    let { id } = useParams<SinglePostFromURLParams>();
    return (
        <SinglePost postId={id} />
    );
}

export class SinglePost extends React.Component<SinglePostProps, SinglePostState> {
    constructor(props: any) {
        super(props);
        this.state = {
            loaded: false,
        }
    }
    componentDidMount() {
        const req = axios.get(`${BASE_URL}/posts/${this.props.postId}`).then((response) => {
            this.setState({
                post: response.data,
                loaded: true
            });
        }, (error) => {
            console.error(error);
        });
    }
    render() {
        const loaded = this.state.loaded;
        const post = this.state.post;
        return (
            <Container style={{ marginTop: "4rem" }}>
                <h4>{post?.title ?? ''}</h4>
                <p>{post?.body ?? ''}</p>
            </Container>
        );
    }
}