import { Link } from 'react-router-dom';
import styles from '../styles/PostPreview.module.css'

const BlogList = ({posts, title, handleDelete}) => (
	<div className="blog-list">
		<h2>{ title }</h2>
		{posts.map(post => (
			<Link to={`/post/${post.id}`} key={ post.id }>
				<div className={styles["blog-preview"]}>
					<h2>{ post.title }</h2>
					<p>Written by { post.author }</p>
					<button onClick={(e) => handleDelete(e, post.id)}>delete</button>
				</div>
			</Link>
		))}
	</div>
);

export default BlogList;