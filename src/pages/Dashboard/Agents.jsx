import React from 'react'
import Button from '../../components/Button'
import { AgentsIcon1 } from '../../assets/images/Icon'
import { Checkbox } from 'antd'
import { AgentsIcon2, AgentsIcon3 } from '../../assets/images/Icon'
function Agents() {
	return (
		<div className='py-[50px] pl-[85px] pr-[95px]'>
			<p className="text-[12px] mb-[24px] text-[#fff] font-bold leading-[18px]">Admin Management Agents</p>
			<div className="mb-[28px] flex items-center justify-between">
				<h2 className="text-[16px] font-bold leading-[24px] text-[#fff]">Agents</h2>
				<div className="flex items-center gap-[20px]">
					<input className='border-[1px] border-[#fff] agents-searchInput w-[216px] text-white text-[10px] leading-[24px] rounded-[100px] py-[12px] cursor-pointer pl-[58px] pr-[27px] outline-none bg-transparent focus:shadow-md focus:shadow-white' type="text" placeholder='Search Agents' name='searching' aria-label='Searching...' />
					<Button extraStyle={'flex items-center justify-center gap-[7px] '}>
						<AgentsIcon1 />
						Add Agents
					</Button>
				</div>
			</div>
			<div className="px-[52px] pt-[46px] pb-[37px] border-[2px] border-[#F0F0F0] rounded-[10px]">
				<table className="w-full text-white">
					<thead>
						<tr>
							<th className='w-[25%] px-[24px] text-start'><Checkbox className='text-white text-[12px] font-bold leading-[163%]'>Account Status</Checkbox></th>
							<th className="w-[25%] text-[12px] font-bold leading-[163%] text-center">User Name</th>
							<th className="w-[40%] text-[12px] font-bold leading-[163%] text-center">Email</th>
							<th className="w-[10%] px-[24px] text-[12px] font-bold leading-[163%] text-end">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr className='border-[1px] border-[#f0f0f0] text-center mx-auto'>
							<td className=' py-[14px] pl-[24px]'>
								<Checkbox></Checkbox>
								<button className="w-[90px] rounded-[215px] bg-[#5DF888] py-[6px] text-center text-[12px] text-white font-bold leading-[18px] ml-[15px]">Active</button>
							</td>
							<td className='flex items-center justify-center gap-[17px] py-[14px]'>
								<img className='rounded-[50%]' src="https://picsum.photos/id/14/500/500" alt="random img" width={36} height={36} />
								<strong className="text-white text-[12px] leading-[163%]">Ramon Ridwan</strong>
							</td>
							<td className='text-white text-[12px] text-center leading-[163%] py-[14px]'>Ramonridwan@protonmail.com</td>
							<td className='text-center space-x-[17px] py-[14px] pr-[24px]'>
								<button><AgentsIcon2 /></button>
								<button><AgentsIcon3 /></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Agents