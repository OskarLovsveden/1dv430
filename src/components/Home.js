import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useHistory } from 'react-router-dom'

const Home = () => {
	const history = useHistory()
	const { user } = useContext(GlobalContext)

	return (
		<div className="w-responsive m-auto">
			{!user ? (
				<div className="row row-cols-1 row-cols-md-2 mt-5">
					<div
						className="card m-auto text-center"
						style={{ maxWidth: '20rem' }}
					>
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
			) : (
				<div className="row row-cols-1 row-cols-md-2 mt-5">
					<div
						className="card m-auto text-center"
						style={{ maxWidth: '20rem' }}
					>
						<div className="card-body">
							<h3 className="card-title">Welcome!</h3>
							<p className="card-text text-default">
								Click the button to start searching for games!
							</p>
							<h5>Happy collecting!</h5>
							<button
								onClick={() => history.push('/search')}
								type="button"
								className="btn btn-outline-default btn-md"
							>
								Search
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Home
