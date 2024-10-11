import React, { useState } from 'react'
import SidebarItem from './SidebarItem/SidebarItem'
import { SidebarIcon9 } from '../assets/images/Icon'
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom'

function Sidebar() {
	const navigate = useNavigate()
	const [isOpenModal, setIsOpenModal] = useState(false)
	function handleSureLogOut() {
		localStorage.clear()
		setIsOpenModal(false)
		location.reload()
		navigate("/")
		location.pathname = '/'
	}
	return (
		<div className='w-[20%] h-[100vh] overflow-y-auto border-r-[2px] border-[#F0F0F0]'>
			<ul className='mt-[45px] mr-[17px]'>
				<SidebarItem />
				<button onClick={() => setIsOpenModal(true)} className="relative pl-[57px] py-[16px] rounded-r-[100px] flex items-center gap-[20px] text-left text-[#fff] text-[12px] leading-[20px]">
					<SidebarIcon9 />
					Logout
				</button>
				<Modal title="Are you sure Logout?" open={isOpenModal} onOk={handleSureLogOut} onCancel={() => setIsOpenModal(false)}></Modal>
			</ul>
		</div>
	)
}

export default Sidebar