import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import Button from '../../components/Button'
import { AgentMoreEditIcon, ArrowBackIcon } from '../../assets/images/Icon'

function AgentMore() {
	const { agents } = useContext(Context)
	const { id } = useParams()
	const navigate = useNavigate()
	const singleAgent = agents.find(item => item.id == id)
	return (
		<div className='py-[50px] pl-[85px] pr-[95px]'>
			<p className="text-[12px] mb-[24px] text-[#fff] font-bold leading-[18px]">Admin Management Agents</p>
			<div className="mb-[28px] flex items-center justify-between">
				<div className="flex items-center gap-[20px]">
					<button onClick={() => navigate(-1)}><ArrowBackIcon /></button>
					<h2 className="text-[16px] font-bold leading-[24px] text-[#fff]">Agent: <span className="font-normal">{singleAgent.userName}</span></h2>
				</div>
				<div className="flex items-center gap-[20px]">
					<Button onClick={() => navigate("edit")} extraStyle={'flex items-center justify-center gap-[7px]'}>
						<AgentMoreEditIcon />
						Edit Agent
					</Button>
				</div>
			</div>
			<div className="pt-[60px] pl-[90px] pb-[120px] border-[2px] border-[#f0f0f0] rounded-[10px] text-left">
				<ul>
					<li className={`mb-[50px] w-[260px] h-[245px] rounded-[50%] bg-[#C4C4C4]`}>
						<img className='w-[260px] h-[245px] inline-block rounded-[50%]' src={singleAgent.imgUrl} alt="img" width={260} height={245} />
					</li>
					<li className='mb-[20px]'>
						<strong className='text-[20px] text-white font-bold leading-[163%]'>ID: <span className="font-normal">{id}</span></strong>
					</li>
					<li className='mb-[20px]'>
						<strong className='text-[20px] text-white font-bold leading-[163%]'>Agent Name: <span className="font-normal">{singleAgent.userName}</span></strong>
					</li>
					<li className='mb-[20px]'>
						<strong className='text-[20px] text-white font-bold leading-[163%]'>Agent Email: <span className="font-normal">{singleAgent.userEmail}</span></strong>
					</li>
					<li className='mb-[20px]'>
						<strong className='text-[20px] text-white font-bold leading-[163%]'>Agent About: <span className="font-normal">{singleAgent.userAbout}</span></strong>
					</li>
					<li>
						<strong className={`text-[20px] text-white font-bold leading-[163%]`}>Agent Status: <span className={`ml-[15px] px-[25px] py-[6px] rounded-[215px] text-[12px] text-white font-bold leading-[18px] ${singleAgent.status ? "bg-[#5DF888]" : "bg-[#FF4949]"}`}>{singleAgent.status ? "Active" : "Down"}</span></strong>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default AgentMore