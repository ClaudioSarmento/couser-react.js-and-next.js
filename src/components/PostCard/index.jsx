import './styles.css'
import P from 'prop-types'
export const PostCard = ({ title, cover, body, id }) => {

    return (<div className='post'>
        <img src={cover} alt={title}></img>
        <div key={id} className='post-content'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </div>);
}

PostCard.propTypes = {
    title: P.string.isRequired,
    cover: P.string.isRequired,
    body: P.string.isRequired,
    id: P.number.isRequired
}
