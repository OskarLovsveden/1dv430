import React from 'react'
import Nav from './Nav'
import Routes from './Routes'
import Footer from './Footer'

export const App = () => {
	return (
		<>
			<Routes>
				<Nav />
			</Routes>
			<Footer />
		</>
	)
}

export default App
