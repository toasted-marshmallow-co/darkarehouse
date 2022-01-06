import { h } from 'preact';
import { Router } from 'preact-router';


// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
// import Header from './header';
// import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		{/* <Header /> */}
		<Router>
			<Home path="/" />
			<Home path="/" />
			{/* <Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" user="john"/> */}
		</Router>
	</div>
)

export default App;
