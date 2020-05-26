import React, { useContext } from 'react'
// import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
// import { cleanup } from '@testing-library/react'

const Flash = () => {
	const { flash } = useContext(GlobalContext)
	const { type, text } = flash

	// const [state, setstate] = useState()

	// useEffect(() => {
	// 	setstate({ type: type, text: text })
	// 	const visibility = setTimeout(() => {
	// 		setstate(null)
	// 	}, 5000)
	// 	cleanup(clearTimeout(visibility))
	// }, [type, text])

	return (
		type.length !== 0 &&
		text.length !== 0 && (
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
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		)
	)
}

export default Flash
