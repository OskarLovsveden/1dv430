import React from 'react'
import { useHistory } from 'react-router-dom'

const DeleteListModal = ({ listID }) => {
	const deleteList = event => {
		event.preventDefault()
		console.log(listID)
	}

	return (
		<>
			<button
				type="button"
				className="btn btn-sm btn-danger float-right"
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
								className="btn btn-primary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button
								type="button"
								className="btn btn-danger"
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

export default DeleteListModal
