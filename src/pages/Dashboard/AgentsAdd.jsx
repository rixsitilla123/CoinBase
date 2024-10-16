import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
import CustomLoading from '../../components/CustomLoading'
import { AgentsAddIcon, ArrowBackIcon } from '../../assets/images/Icon'

function AgentsAdd() {
	const navigate = useNavigate()
	const { id } = useParams()
	const { agents, setAgents } = useContext(Context)
	const [imgUrl, setImgUrl] = useState(null)
	const [userName, setUserName] = useState("")
	const [userEmail, setUserEmail] = useState("")
	const [userAbout, setUserAbout] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	function handleSubmitAddAgent(e) {
		e.preventDefault()
		if (id) {
			const editAgent = agents.find(item => item.id == id)
			editAgent.imgUrl = imgUrl
			editAgent.userName = userName
			editAgent.userEmail = userEmail
			editAgent.userAbout = userAbout
			setIsLoading(true)
			setTimeout(() => {
				setIsLoading(false)
				setAgents([...agents])
				navigate(-1)
			}, 1500)
		} else {
			const data = {
				id: agents.length + 1,
				isChecked: false,
				status: true,
				imgUrl,
				userName,
				userEmail,
				userAbout
			}
			setIsLoading(true)
			setTimeout(() => {
				setIsLoading(false)
				setAgents([...agents, data])
				navigate(-1)
			}, 1500)
		}
	}

	useEffect(() => {
		if (id) {
			const editAgent = agents.find(item => item.id == id)
			setImgUrl(editAgent.imgUrl)
			setUserName(editAgent.userName)
			setUserEmail(editAgent.userEmail)
			setUserAbout(editAgent.userAbout)
		}
	}, [])

	return (
		<div className='pl-[85px] pr-[95px] pt-[50px] pb-[90px]'>
			<div className='mb-[36px] space-y-[33px]'>
				<p className="text-[12px] text-[#fff] font-bold leading-[18px]">Admin Management Agents</p>
				<div className="flex items-center gap-[20px]">
					<button onClick={() => navigate(-1)}><ArrowBackIcon /></button>
					<h2 className="text-[16px] text-[#fff] font-bold leading-[24px]">Agent {id ? "Edit" : "Create"}</h2>
				</div>
			</div>
			<div className="border-[2px] border-[#f0f0f0] rounded-[10px] pt-[90px] pb-[55px]">
				<form onSubmit={handleSubmitAddAgent} className="w-[362px] mx-auto">
					<label className="border-[1px] border-white rounded-[10px] mb-[83px] w-[244px] h-[168px] flex flex-col items-center mx-auto cursor-pointer">
						<input onChange={(e) => setImgUrl(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden' />
						{imgUrl ? <img className='w-full h-full' src={imgUrl} alt="choose img" width={'100%'} height={'100%'} />
							: <div className='mt-[52px] flex flex-col items-center'>
								<AgentsAddIcon />
								<strong className="text-[#fff] mt-[20px] text-[12px] inline-block font-bold leading-[163%]">Upload Agent image here</strong>
							</div>
						}
					</label>
					<label className='flex flex-col mb-[30px] cursor-pointer'>
						<span className='text-[#fff] text-[14px] leading-[16px] tracking-[0.4px]'>Agent Name</span>
						<input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" name='agentName' placeholder='Enter name' required autoComplete='off' className="outline-none bg-transparent border-[1px] border-[#f0f0f0] focus:shadow-lg focus:shadow-white py-[23px] mt-[20px] px-[34px] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
					</label>
					<label className='flex flex-col mb-[30px] cursor-pointer'>
						<span className='text-[#fff] text-[14px] leading-[16px] tracking-[0.4px]'>Agent Email</span>
						<input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="email" name='agentEmail' placeholder='Enter email' required autoComplete='off' className="outline-none bg-transparent border-[1px] border-[#f0f0f0] focus:shadow-lg focus:shadow-white py-[23px] mt-[20px] px-[34px] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
					</label>
					<label className='flex flex-col mb-[38px] cursor-pointer'>
						<span className='text-[#fff] text-[14px] leading-[16px] tracking-[0.4px]'>About</span>
						<input value={userAbout} onChange={(e) => setUserAbout(e.target.value)} type="text" name='agentAbout' placeholder='Enter about agent' required autoComplete='off' className="outline-none bg-transparent border-[1px] border-[#f0f0f0] focus:shadow-lg focus:shadow-white py-[23px] mt-[20px] px-[34px] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
					</label>
					<Button type={'submit'} extraStyle={'mx-auto block'}>{id ? "Edit" : "Add"} Agent</Button>
				</form>
				{isLoading && <CustomLoading />}
			</div>
		</div>
	)
}

export default AgentsAdd