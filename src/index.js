import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './layout/Layout'
import { GameProvider } from './context/GameState'

// import * as serviceWorker from './serviceWorker';

const app = (
	<GameProvider>
		<Layout />
	</GameProvider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
