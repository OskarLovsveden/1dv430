import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import * as serviceWorker from './serviceWorker'

// Import Components
import SearchBar from './components/SearchBar'

const Test = () => {
	const logSubmit = submittedInput => {
		console.log('Logging submitted input: ', submittedInput)
	}

	return (
		<SearchBar submit={logSubmit} placeholder="Search for game..."></SearchBar>
	)
}

ReactDOM.render(<Test></Test>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
