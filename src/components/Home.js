import React from 'react'
import { useHistory } from 'react-router-dom'
import SearchGame from '../components/search/SearchGame'

const Home = () => {
	const history = useHistory()

	return (
		<div>
			<SearchGame />
			<div className="row row-cols-1 row-cols-md-2">
				<div className="card m-auto text-center" style={{ maxWidth: '20rem' }}>
					<div className="card-body">
						<h3 className="card-title">Get Started!</h3>
						<p className="card-text text-default">
							Click a button to log into your account or register a new one!
						</p>
						<h5>Happy collecting!</h5>
						<button
							onClick={() => history.push('/login')}
							type="button"
							className="btn btn-outline-default btn-md"
						>
							Login
						</button>
						<button
							onClick={() => history.push('/register')}
							type="button"
							className="btn  btn-outline-default btn-md"
						>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
