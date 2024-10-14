import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Overview, Users, Agents, Cards, BitcoinEthereum, Payments, Transactions, Statistics, AgentsAdd } from '../../pages/Dashboard/index'

function DashboardRoutes() {
	return (
		<div className='containers'>
			<Header />
			<div className="flex justify-between">
				<Sidebar />
				<div className="w-[80%] h-[100vh] overflow-y-auto">
					<Routes>
						<Route path='/' element={<Overview />} />
						<Route path='/users' element={<Users />} />
						<Route path='/agents' element={<Agents />} />
						<Route path='/agents/add' element={<AgentsAdd />} />
						<Route path='/cards' element={<Cards />} />
						<Route path='/bitcoin-ethereum' element={<BitcoinEthereum />} />
						<Route path='/payments' element={<Payments />} />
						<Route path='/transactions' element={<Transactions />} />
						<Route path='/statistics' element={<Statistics />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}
export default DashboardRoutes