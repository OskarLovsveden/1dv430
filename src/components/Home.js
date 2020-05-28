import React from 'react'
import SearchGame from './SearchGame'
import { useLocation } from 'react-router-dom'

const Home = () => {
	const location = useLocation()
	return (
		<>
			{location.state && console.log(location.state)}
			<SearchGame />
		</>
	)
}

// Exports
export default Home
