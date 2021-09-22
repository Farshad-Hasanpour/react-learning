import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import routes from './routes';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
				<div className="content">
					<Switch>
						{routes.map((route, i) => (
							<Route
								key={i}
								path={route.path}
								exact={route.exact}
								render={props => (
									// pass the sub-routes down to keep nesting
									<route.component {...props} routes={route.routes} />
								)}
							/>
						))}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
