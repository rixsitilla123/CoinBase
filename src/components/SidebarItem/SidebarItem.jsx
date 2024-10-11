import React from 'react'
import { SidebarIcon1, SidebarIcon2, SidebarIcon3, SidebarIcon4, SidebarIcon5, SidebarIcon6, SidebarIcon7, SidebarIcon8 } from '../../assets/images/Icon'
import { NavLink } from 'react-router-dom'

function SidebarItem() {
	const SidebarList = [
		{
			id: 1,
			icon: <SidebarIcon1 />,
			title: "Overview",
			path: "/",
			notificationCount: null
		}, {
			id: 2,
			icon: <SidebarIcon2 />,
			title: "Users",
			path: "/users",
			notificationCount: null
		}, {
			id: 3,
			icon: <SidebarIcon3 />,
			title: "Agents",
			path: "/agents",
			notificationCount: null
		}, {
			id: 4,
			icon: <SidebarIcon4 />,
			title: "Cards",
			path: "/cards",
			notificationCount: 19
		}, {
			id: 5,
			icon: <SidebarIcon5 />,
			title: "Bitcoin & Ethereum",
			path: "/bitcoin-ethereum",
			notificationCount: null
		}, {
			id: 6,
			icon: <SidebarIcon6 />,
			title: "Payments",
			path: "/payments",
			notificationCount: 10
		}, {
			id: 7,
			icon: <SidebarIcon7 />,
			title: "Transactions",
			path: "/transactions",
			notificationCount: null
		}, {
			id: 8,
			icon: <SidebarIcon8 />,
			title: "Statistics",
			path: "/statistics",
			notificationCount: null
		},
	]
	return (
		<>
			{SidebarList.map(item => (
				<NavLink to={item.path} key={item.id} className='relative pl-[57px] py-[16px] rounded-r-[100px] flex items-center gap-[20px] text-left'>
					{item.icon}
					<span className="text-[#fff] text-[12px] leading-[20px]">{item.title}</span>
					{item.notificationCount ? <button className="w-[20px] h-[20px] absolute top-0 bottom-0 right-[20px] my-auto rounded-[50%] flex items-center sidebarItemCount p-[5px] text-white font-semibold text-[10px]">{item.notificationCount}</button> : ""}
				</NavLink>
			))}
		</>
	)
}

export default SidebarItem