import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Loading from '../../assets/images/Loading.png'
function SignUp() {
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	function handleSignUpSubmit(e) {
		e.preventDefault()
		const data = {
			email: e.target.newEmail.value,
			password: e.target.newPassword.value
		}
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
			localStorage.setItem('signUp', JSON.stringify(data))
			navigate(-1)
		}, 1000)
	}
	return (
		<div data-aos='fade-up' data-aos-duration='1500' className='text-center flex flex-col items-center mt-[62px]'>
			<h2 className="mt-[22px] mb-[12px] text-[25px] font-bold leading-[38px] text-[#fff]">Sign Up</h2>
			<form onSubmit={handleSignUpSubmit} className='w-[362px] text-start'>
				<label className='flex flex-col mb-[30px] cursor-pointer'>
					<span className='text-[#fff] text-[12px] leading-[16px] tracking-[0.4px]'>New Email</span>
					<input type="email" name='newEmail' placeholder='Email' required autoComplete='off' className="outline-none focus:shadow-lg focus:shadow-white py-[23px] mt-[20px] px-[34px] bg-[#fff] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
				</label>
				<label className='flex flex-col mb-[12px] cursor-pointer'>
					<span className='text-[#fff] text-[12px] leading-[16px] tracking-[0.4px]'>New Password</span>
					<input type="password" name='newPassword' placeholder='XXXXXXXXXX' required autoComplete='off' className="outline-none focus:shadow-lg focus:shadow-white py-[23px] mt-[20px] px-[34px] bg-[#fff] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
				</label>
				<div className="flex flex-col items-center">
					<Link className='text-[10px] hover:scale-150 duration-300 text-[#fff] leading-[15px] mb-[10px]' to={'/'}>Sign In</Link>
					<Button type={'submit'}>
						{isLoading ? <img className='mx-auto scale-[2]' src={Loading} alt="loading" width={20} height={20} /> : "Sign Up"}
					</Button>
				</div>
			</form>
		</div>
	)
}
export default SignUp