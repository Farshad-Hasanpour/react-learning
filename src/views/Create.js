import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from '../styles/Create.module.css';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPending(true);
		const blog = { title, body, author};
		fetch('http://localhost:8000/posts', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			//history.go(-1); //go back one step
			history.push('/');
		}).finally(() => {
			setIsPending(false);
		})
	};

	return (
		<div className={style.create}>
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
				<label>Blog body:</label>
				<textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
				<label>Blog author:</label>
				<select value={author} onChange={e => setAuthor(e.target.value)}>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
				</select>
				{!isPending && <button>Add Post</button>}
				{isPending && <button disabled>Adding Post ...</button>}
			</form>
		</div>
	);
};

export default Create;