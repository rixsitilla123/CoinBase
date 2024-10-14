import React, { useContext } from 'react'
import Button from '../../components/Button'
import { AgentsIcon1 } from '../../assets/images/Icon'
import { Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context'
import AgentsItem from '../../components/AgentsItem'

function Agents() {
	const { agents, setAgents } = useContext(Context)
	const navigate = useNavigate()
	function handleAllChecked(e) {
		if(e.target.checked){
			agents.forEach(item => item.isChecked = true)
		}else{
			agents.forEach(item => item.isChecked = false)
		}
		setAgents([...agents])
	}
	return (
		<div className='py-[50px] pl-[85px] pr-[95px]'>
			<p className="text-[12px] mb-[24px] text-[#fff] font-bold leading-[18px]">Admin Management Agents</p>
			<div className="mb-[28px] flex items-center justify-between">
				<h2 className="text-[16px] font-bold leading-[24px] text-[#fff]">Agents</h2>
				<div className="flex items-center gap-[20px]">
					<input className='border-[1px] border-[#fff] agents-searchInput w-[216px] text-white text-[10px] leading-[24px] rounded-[100px] py-[12px] cursor-pointer pl-[58px] pr-[27px] outline-none bg-transparent focus:shadow-md focus:shadow-white' type="text" placeholder='Search Agents' name='searching' aria-label='Searching...' />
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
							<th className='w-[25%] px-[24px] text-start'><Checkbox onChange={handleAllChecked} className='text-white text-[12px] font-bold leading-[163%]'>Account Status</Checkbox></th>
							<th className="w-[25%] text-[12px] font-bold leading-[163%] text-center">User Name</th>
							<th className="w-[40%] text-[12px] font-bold leading-[163%] text-center">Email</th>
							<th className="w-[10%] text-[12px] font-bold leading-[163%] px-[24px] text-end">Action</th>
						</tr>
					</thead>
					<tbody>
						{agents.map(item => <AgentsItem item={item} key={item.id} />)}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Agents