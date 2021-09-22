import { Link } from 'react-router-dom';
import style from '../styles/Navbar.module.css';

function Navbar(){
	return (
		<nav className={style.navbar}>
			<h1>The Dojo Blog</h1>
			<div className={style.links}>
				<Link to="/">Home</Link>
				<Link to="/create" style={{
					color: 'white',
					backgroundColor: '#f1356d',
					borderRadius: '8px'
				}}>New Blog</Link>
			</div>
		</nav>
	);
}

export default Navbar;