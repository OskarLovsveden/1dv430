import React from 'react'
import ReactDOM from 'react-dom'
import App from './layout/App'
import { GameProvider } from './context/GameState'
import { GlobalProvider } from './context/GlobalState'

// import * as serviceWorker from './serviceWorker';

const app = (
	<GlobalProvider>
		<GameProvider>
			<App />
		</GameProvider>
	</GlobalProvider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
