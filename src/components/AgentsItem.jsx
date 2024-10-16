import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Checkbox from 'antd/es/checkbox/Checkbox'
import { Context } from '../context/Context'
import { AgentsIcon2, AgentsIcon3 } from '../assets/images/Icon'

function AgentsItem({ item, deleteBtnClick }) {
	const navigate = useNavigate()
	const { agents, setAgents } = useContext(Context)
	const [isPending, setIsPending] = useState(false)

	function handleStatusBtnClick() {
		setIsPending(true)
		setTimeout(() => {
			setIsPending(false)
			item.status = !item.status
			setAgents([...agents])
		}, 1000)
	}

	function handleCheckedBtn(e) {
		item.isChecked = !item.isChecked
		setAgents([...agents])
	}

	return (
		<tr className='text-center border-[1px] border-[#f0f0f0]'>
			<td className=' py-[14px] text-left pl-[24px]'>
				<Checkbox onChange={handleCheckedBtn} checked={item.isChecked}></Checkbox>
				<button onClick={handleStatusBtnClick} className={`${isPending ? "active-pending" : (item.status ? "bg-[#5DF888]" : "bg-[#FF4949]")} w-[90px] rounded-[215px] py-[6px] duration-500 text-center text-[12px] text-white font-bold leading-[18px] ml-[15px]`}>{isPending ? "Pending" : (item.status ? "Active" : 'Down')}</button>
			</td>
			<td className='flex items-center justify-center gap-[17px] py-[14px]'>
				<img className='rounded-[50%] w-[36px] h-[36px]' src={item.imgUrl} alt="img" width={36} height={36} />
				<strong className="text-white text-[12px] leading-[163%]">{item.userName}</strong>
			</td>
			<td className='text-white text-[12px] text-center leading-[163%] py-[14px]'>{item.userEmail}</td>
			<td className='text-right space-x-[17px] py-[14px] pr-[24px]'>
				<button onClick={() => deleteBtnClick(item.id)} className='duration-500 hover:scale-[1.4]'><AgentsIcon2 /></button>
				<button onClick={() => navigate(`${item.id}`)} className='duration-500 hover:scale-[1.4]'><AgentsIcon3 /></button>
			</td>
		</tr>
	)
}

export default AgentsItem