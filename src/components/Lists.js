import React, { useEffect, useState } from 'react'

import mongoHelper from '../helpers/mongoHelper'
const { getLists, newList } = mongoHelper

const Lists = () => {
	const [lists, setLists] = useState([])

	useEffect(() => {
		const getListsOnRender = async () => {
			const data = await getLists()
			setLists(data)
		}
		getListsOnRender()
	}, [])

	return (
		<div>
			<button onClick={newList} className="btn btn-sm">
				Add new list
			</button>
			<ul>
				{lists.length
					? lists.map(list => (
							<li key={list._id}>
								<a href={`/list/${list._id}`}>{list.name}</a>
							</li>
					  ))
					: null}
			</ul>
		</div>
	)
}

export default Lists
