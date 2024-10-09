import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Overview } from '../../pages'

function DashboardRoutes() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Overview />} />
			</Routes>
		</>
	)
}

export default DashboardRoutes