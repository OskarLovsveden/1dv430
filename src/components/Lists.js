import React, { useEffect, useState } from 'react'
import mongoHelper from '../helpers/mongoHelper'

const Lists = () => {
	const [lists, setLists] = useState([])

	useEffect(() => {
		const getLists = async () => {
			const data = await mongoHelper.getLists()
			setLists(data)
		}
		getLists()
	}, [])

	return (
		<div>
			<ul>
				{lists.length
					? lists.map(list => <li key={list._id}>{list.name}</li>)
					: null}
			</ul>
		</div>
	)
}

export default Lists
