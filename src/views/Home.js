import useFetch from "../hooks/useFetch";
import BlogList from '../components/BlogList';

function Home(){
	const {state: [posts, setPosts], isFetching, error} = useFetch('http://localhost:8000/posts');
	
	function deletePost(e, id){
		e.stopPropagation();
		e.preventDefault();
		fetch('http://localhost:8000/posts/' + id, {
			method: 'DELETE'
		}).then(() => {
			posts.splice(posts.findIndex(post => post.id === id), 1);
			setPosts([...posts]);
		})
	}

	return (
		<div className="home">
			{ error && <p>{ error }</p>}
			{ isFetching && <p>Loading...</p>}
			{/*<button onClick={(event) => handleClickAgain('mario', event)}>Click me again</button>*/}
			{ posts && <BlogList title="All Posts!" posts={ posts } handleDelete={deletePost}/>}
		</div>
	);
}

export default Home;