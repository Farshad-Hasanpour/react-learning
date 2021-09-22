import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Create from './views/Create';
import PostDetails from './views/PostDetails';
import NotFound from './views/404';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
						<Route path="/create">
							<Create/>
						</Route>
						<Route path="/post/:id">
							<PostDetails/>
						</Route>
						<Route path="*">
							<NotFound/>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
