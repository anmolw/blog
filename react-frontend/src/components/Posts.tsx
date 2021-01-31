import React from 'react';
import { IPost } from '../interfaces/posts';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const BASE_URL = 'http://localhost:3000';

interface PostListState {
    posts: IPost[]
}

interface PostProps {
    post: IPost
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

function truncatePost(body: String) {

}

function PostCard(props: PostProps) {
    return (
        <Card className="mb-2">
            <Card.Body>
                <Card.Title>{props.post.title}</Card.Title>
                <Card.Text>{props.post.body}</Card.Text>
                <div className="d-flex flex-row-reverse">
                    <Button variant="primary">Read More</Button>
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
            // <div>
            <Container style={{ marginTop: "4rem" }}>
                {posts}
            </Container>
            // </div>
        );
    };
}