import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import mongoHelper from '../helpers/mongoHelper'
const { getList } = mongoHelper

const List = () => {
	let { id } = useParams()
	useEffect(() => {
		const getListOnRender = async () => {
			const list = await getList(id)
			console.log(list)
		}
		getListOnRender()
	})
	return <div>{id}</div>
}

export default List
