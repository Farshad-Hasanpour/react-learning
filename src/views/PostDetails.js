import { useParams, useHistory } from 'react-router-dom';
import styles from "../styles/PostDetails.module.css";
import useFetch from "../hooks/useFetch"

const PostDetails = ({ handleDelete }) => {
	const { id } = useParams();
	const {state: [post], error, isFetching } = useFetch('http://localhost:8000/posts/' + id);
	const history = useHistory();

	function deletePost(){
		fetch('http://localhost:8000/posts/' + id, {
			method: 'DELETE'
		}).then(() => {
			history.push('/');
		})
	}

	return (
		<div className={styles['blog-details']}>
			{ isFetching && <div>Loading...</div> }
			{ error && <div>{ error }</div> }
			{ post && (
				<article>
					<h2>{ post.title }</h2>
					<p>Written By { post.author }</p>
					<div>{ post.body }</div>
					<button onClick={ deletePost }>Delete</button>
				</article>
			)}
		</div>
	);
};

export default PostDetails;