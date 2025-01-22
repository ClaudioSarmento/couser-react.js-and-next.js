import { PostCard } from '../PostCard';
import './styles.css';
import P from 'prop-types'

export const Posts = ({ posts = [] }) => (
    <div className="posts">
        {posts.map(post => (
            <PostCard title={post.title}
                cover={post.cover}
                body={post.body}
                id={post.id}
                key={post.id}
            />
        ))}
    </div>
);

Posts.defaultProps = {
    posts: [],
};

Posts.proTypes = {
    posts: P.array
};
