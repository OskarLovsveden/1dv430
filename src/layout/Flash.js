import React, { useContext } from 'react'
import { FlashContext } from '../context/FlashState'

const Flash = () => {
	const { flash, hideFlash } = useContext(FlashContext)
	const { type, text, visible } = flash

	return visible ? (
		<div
			className={`alert alert-${type} alert-dismissible fade show`}
			role="alert"
		>
			{text}
			<button
				type="button"
				className="close"
				data-dismiss="alert"
				aria-label="Close"
				onClick={hideFlash}
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	) : (
		<></>
	)
}

export default Flash
