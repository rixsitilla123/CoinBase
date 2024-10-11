import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import { Context } from '../../context/Context'
import Button from '../../components/Button';
import { SiteLogo } from '../../assets/images/Icon';
import Loading from '../../assets/images/Loading.png'

function SignIn() {
	const { token, setToken } = useContext(Context)
	const [isLoading, setIsLoading] = useState(false)
	const signUpData = JSON.parse(localStorage.getItem('signUp'))
	function handleSignInSubmit(e) {
		e.preventDefault()
		const data = {
			email: e.target.email.value,
			password: e.target.password.value
		}
		setIsLoading(true)
		if (signUpData) {
			if (data.email == signUpData.email && data.password == signUpData.password) {
				setTimeout(() => {
					setIsLoading(false)
					setToken(data)
				}, 1000)
			} else {
				setTimeout(() => {
					setIsLoading(false)
					toast.error("User not found!")
				}, 1000)
			}
		} else {
			if (data.email == "rixsitilla@gmail.com" && data.password == "12345678") {
				setTimeout(() => {
					setIsLoading(false)
					setToken(data)
				}, 1000)
			}
			else {
				setTimeout(() => {
					setIsLoading(false)
					toast.error("User not found!")
				}, 1000)
			}
		}
	}
	return (
		<div data-aos='fade-up' data-aos-duration='1500' className='text-center flex flex-col items-center mt-[62px]'>
			<Toaster position='top-center' reverseOrder={false} />
			<SiteLogo />
			<h2 className="mt-[22px] mb-[12px] text-[25px] font-bold leading-[38px] text-[#fff]">Sign In</h2>
			<form onSubmit={handleSignInSubmit} className='w-[362px] text-start'>
				<label className='flex flex-col mb-[30px] cursor-pointer'>
					<span className='text-[#fff] text-[12px] leading-[16px] tracking-[0.4px]'>Email</span>
					<input type="email" name='email' placeholder='Email' required autoComplete='off' className="outline-none focus:shadow-lg focus:shadow-white py-[23px] mt-[20px] px-[34px] bg-[#fff] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
				</label>
				<label className='flex flex-col mb-[12px] cursor-pointer'>
					<span className='text-[#fff] text-[12px] leading-[16px] tracking-[0.4px]'>Password</span>
					<input type="password" name='password' placeholder='XXXXXXXXXX' required autoComplete='off' className="outline-none focus:shadow-lg focus:shadow-white py-[23px] mt-[20px] px-[34px] bg-[#fff] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
				</label>
				<div className="flex flex-col items-center">
					<Link className='text-[10px] text-[#fff] hover:scale-150 duration-300 leading-[15px] mb-[10px]' to={'/sign-up'}>Sign Up</Link>
					<Button type={'submit'}>
						{isLoading ? <img className='mx-auto scale-[2]' src={Loading} alt="loading" width={20} height={20} /> : "Sign In"}
					</Button>
				</div>
			</form>
		</div>
	)
}
export default SignIn