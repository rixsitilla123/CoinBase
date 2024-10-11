import React from 'react'
import { HeaderLogo, HeaderIcon1, HeaderIcon2 } from '../assets/images/Icon'

function Header() {
	return (
		<header className='pl-[65px] py-[23px] pr-[102px] border-b-[2px] border-[#F7F7F7]'>
			<div className=" flex items-center justify-between text-white">
				<a href="/">
					<HeaderLogo/>
				</a>
				<div className="flex items-center gap-[77px]">
					<div className="flex items-end gap-[20px] cursor-pointer">
						<HeaderIcon1/>
						<span className="text-[12px] leading-[24px]">CoinBase</span>
					</div> 
					<HeaderIcon2/>
				</div>
			</div>
		</header>
	)
}

export default Header