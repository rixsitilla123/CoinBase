import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkbox, Modal } from 'antd'
import { Context } from '../../context/Context'
import Button from '../../components/Button'
import AgentsItem from '../../components/AgentsItem'
import { AgentsIcon1 } from '../../assets/images/Icon'
import Loading from '../../assets/images/Loading.png'

function Agents() {
	const navigate = useNavigate()
	const { agents, setAgents } = useContext(Context)
	const [allAgents, setAllAgents] = useState(agents)
	const [isLoading, setIsLoading] = useState(false)
	const [deleteModal, setDeleteModal] = useState(false)
	const [deleteId, setDeleteId] = useState(null)
	const [allCheck, setAllCheck] = useState(JSON.parse(localStorage.getItem("allCheck")) || false)

	// checked part start 
	function handleAllChecked(e) {
		setAllCheck(e.target.checked)
		if (e.target.checked) {
			agents.forEach(item => item.isChecked = true)
		} else {
			agents.forEach(item => item.isChecked = false)
		}
		setAgents([...agents])
	}
	localStorage.setItem('allCheck', JSON.stringify(allCheck))
	// checked part end

	// delete part start 
	function deleteBtnClick(id) {
		setDeleteModal(true)
		setDeleteId(id)
	}
	function handleDeleteAgent() {
		setDeleteModal(false)
		setIsLoading(true)
		const deleteIndex = agents.findIndex(item => item.id == deleteId)
		agents.splice(deleteIndex, 1)
		setTimeout(() => {
			setIsLoading(false)
			setAgents([...agents])
		}, 1000)
	}
	// delete part end 

	// search part start 
	function handleSearchAgent(e) {
		setIsLoading(true)
		if (e.target.value) {
			const filterAgent = agents.filter(item => item.userName.toLowerCase().includes(e.target.value.toLowerCase()))
			setTimeout(() => {
				setIsLoading(false)
				setAllAgents(filterAgent)
			}, 1000)
		} else {
			setTimeout(() => {
				setIsLoading(false)
				setAllAgents(agents)
			}, 1000)
		}
	}
	// search part end

	return (
		<div className='py-[50px] pl-[85px] pr-[95px]'>
			<p className="text-[12px] mb-[24px] text-[#fff] font-bold leading-[18px]">Admin Management Agents</p>
			<div className="mb-[28px] flex items-center justify-between">
				<h2 className="text-[16px] font-bold leading-[24px] text-[#fff]">Agents</h2>
				<div className="flex items-center gap-[20px]">
					<input onChange={handleSearchAgent} className='border-[1px] border-[#fff] agents-searchInput w-[216px] text-white text-[10px] leading-[24px] rounded-[100px] py-[12px] cursor-pointer pl-[58px] pr-[27px] outline-none bg-transparent focus:shadow-md focus:shadow-white' type="text" placeholder='Search Agents' name='searching' aria-label='Searching...' />
					<Button onClick={() => navigate('add')} extraStyle={'flex items-center justify-center gap-[7px]'}>
						<AgentsIcon1 />
						Add Agents
					</Button>
				</div>
			</div>
			<div className="px-[52px] pt-[10px] pb-[37px] border-[2px] border-[#F0F0F0] rounded-[10px]">
				<table className="w-full text-white">
					<thead>
						<tr>
							<th className='w-[25%] px-[24px] text-start'><Checkbox checked={allCheck} onChange={handleAllChecked} className='text-white text-[12px] font-bold leading-[163%]'>Account Status</Checkbox></th>
							<th className="w-[25%] text-[12px] font-bold leading-[163%] text-center">User Name</th>
							<th className="w-[40%] text-[12px] font-bold leading-[163%] text-center">Email</th>
							<th className="w-[10%] text-[12px] font-bold leading-[163%] px-[24px] text-end">Action</th>
						</tr>
					</thead>
					<tbody>
						{isLoading ?
							<div className="w-[380%] flex justify-center"><img src={Loading} alt="Loading..." width={300} height={300} /></div>
							: allAgents.map(item => <AgentsItem deleteBtnClick={deleteBtnClick} item={item} key={item.id} />)}
					</tbody>
				</table>
			</div>
			<Modal title={"Are you sure delete this Agent?"} open={deleteModal} onCancel={() => setDeleteModal(false)} okText={"Delete"} onOk={handleDeleteAgent}></Modal>
		</div>
	)
}

export default Agents