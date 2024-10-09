import React from 'react'
import {HeaderIcon1, HeaderIcon2, SiteLogoHeader } from '../assets/images/Icon'

function Header() {
	return (
		<header className='py-[24px] border-b-[1px] border-[#F7F7F7] pr-[8px] pl-[10px]'>
			<div className="containers">
				<SiteLogoHeader />
				<div className="flex items-center gap-[75px]">
					<div className="flex items-end gap-[18px]">
						<HeaderIcon1/>
						<span className="text-[12px] text-[#fff] leading-[24px]">CoinBase</span>
					</div>
					<HeaderIcon2/>
				</div>
			</div>
		</header>
	)
}

export default Header