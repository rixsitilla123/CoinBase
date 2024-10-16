import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Overview, Users, Cards, BitcoinEthereum, Payments, Transactions, Statistics, AgentsAdd, AgentMore } from '../../pages/Dashboard/index'
import Loading from '../../assets/images/Loading.png'
const Agents = lazy(() => new Promise((resolve) => {
	return setTimeout(() => resolve(import("../../pages/Dashboard/Agents")), 1500)
}))
function DashboardRoutes() {
	return (
		<div className='containers'>
			<Header />
			<div className="flex justify-between">
				<Sidebar />
				<div className="w-[80%] h-[100vh] overflow-y-auto relative">
					<Routes>
						<Route path='/' element={<Overview />} />
						<Route path='/users' element={<Users />} />
						<Route path='/agents' element={
							<Suspense fallback={<img className='absolute inset-0 mx-auto mt-[50px]' src={Loading} alt="Loading..." width={300} height={300} />}>
								<Agents />
							</Suspense>
						} />
						<Route path='/agents/add' element={<AgentsAdd />} />
						<Route path='/agents/:id' element={<AgentMore />} />
						<Route path='/agents/:id/edit' element={<AgentsAdd />} />
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