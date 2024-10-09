import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import {SiteLogo} from '../../assets/images/Icon';
import {Context} from '../../context/Context'
import toast, {Toaster} from 'react-hot-toast' 

function SignIn() {
	const {token, setToken} = useContext(Context)	
	function handleSignInSubmit(e) {
		e.preventDefault()
		const data = {
			email: e.target.email.value,
			password: e.target.password.value
		}
		if(data.email == "rixsitilla@gmail.com" && data.password == "12345678"){
			setToken(data)
		}else{
			toast.error("User not found!")
		}
	}

	return (
		<div className='text-center flex flex-col items-center mt-[62px]'>
			<Toaster position='top-center' reverseOrder={false}/>
			<SiteLogo/>
			<h2 className="mt-[22px] mb-[12px] text-[25px] font-bold leading-[38px] text-[#fff]">Sign In</h2>
			<form onSubmit={handleSignInSubmit} className='w-[362px] text-start'>
				<label className='flex flex-col mb-[30px] cursor-pointer'>
					<span className='text-[#fff] text-[12px] leading-[16px] tracking-[0.4px]'>Email</span>
					<input type="email" name='email' placeholder='Email' required autoComplete='off' className="outline-none py-[23px] mt-[20px] px-[34px] bg-[#fff] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
				</label>
				<label className='flex flex-col mb-[12px] cursor-pointer'>
					<span className='text-[#fff] text-[12px] leading-[16px] tracking-[0.4px]'>Password</span>
					<input type="password" name='password' placeholder='XXXXXXXXXX' required autoComplete='off' className="outline-none py-[23px] mt-[20px] px-[34px] bg-[#fff] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
				</label>
				<div className="flex flex-col items-center">
					<Link className='text-[10px] text-[#fff] leading-[15px] mb-[10px]' to={'/sign-up'}>Sign Up</Link>
					<Button type={'submit'} btnTitle={'Sign In'}/>
				</div>
			</form>
		</div>
	)
}

export default SignIn