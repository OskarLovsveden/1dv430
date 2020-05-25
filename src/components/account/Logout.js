import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Logout = () => {
	const { userLogout, setFlash } = useContext(GlobalContext)
	const history = useHistory()

	const logoutUser = async event => {
		event.preventDefault()
		try {
			const response = await axios({ method: 'post', url: 'user/logout' })
			const data = response.data
			if (data.type === 'success') {
				userLogout()
				setFlash(data)
			}
			history.push('/')
		} catch (error) {
			console.error(error.message)
		}
	}

	const doNotLogoutUser = () => {
		history.push('/')
	}

	return (
		<div className="d-flex flex-column justify-content-center pb-5">
			<div className="text-center">
				<p className="h4 mb-4">Logout</p>
				<p className="h5 mb-4">Are you sure you want to logout?</p>
				<button className="btn btn-primary" onClick={logoutUser}>
					Yes
				</button>
				<button className="btn btn-danger" onClick={doNotLogoutUser}>
					No
				</button>
			</div>
		</div>
	)
}

export default Logout
