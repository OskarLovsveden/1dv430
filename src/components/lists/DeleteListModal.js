import React, { useContext } from 'react'
import { FlashContext } from '../../context/FlashState'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'

const DeleteListModal = ({ listID }) => {
	const { showFlash } = useContext(FlashContext)
	const history = useHistory()

	const deleteList = async event => {
		event.preventDefault()
		const response = await axios({
			method: 'post',
			url: `/mongo/list/delete/${listID}`
		})
		if (response.data.type === 'success') {
			history.push('/lists')
			showFlash(response.data)
		} else {
			showFlash(response.data)
		}
	}

	return (
		<>
			<button
				type="button"
				className="btn btn-sm btn-outline-danger float-right"
				data-toggle="modal"
				data-target="#deleteModal"
			>
				<i className="fas fa-trash"></i>
			</button>

			<div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Delete list?</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-outline-default"
								data-dismiss="modal"
							>
								Close
							</button>
							<button
								type="button"
								className="btn btn-outline-danger"
								data-dismiss="modal"
								onClick={deleteList}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

DeleteListModal.propTypes = {
	listID: PropTypes.string.isRequired
}

export default DeleteListModal
