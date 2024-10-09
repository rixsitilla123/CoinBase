import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

function SignUp() {
	return (
		<div className='text-center flex flex-col items-center mt-[62px]'>
			<h2 className="mt-[22px] mb-[12px] text-[25px] font-bold leading-[38px] text-[#fff]">Sign Up</h2>
			<form className='w-[362px] text-start'>
				<label className='flex flex-col mb-[30px] cursor-pointer'>
					<span className='text-[#fff] text-[12px] leading-[16px] tracking-[0.4px]'>New Email</span>
					<input type="email" name='newEmail' placeholder='Email' required autoComplete='off' className="outline-none py-[23px] mt-[20px] px-[34px] bg-[#fff] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
				</label>
				<label className='flex flex-col mb-[12px] cursor-pointer'>
					<span className='text-[#fff] text-[12px] leading-[16px] tracking-[0.4px]'>New Password</span>
					<input type="password" name='newPassword' placeholder='XXXXXXXXXX' required autoComplete='off' className="outline-none py-[23px] mt-[20px] px-[34px] bg-[#fff] rounded-[100px] w-[100%] text-[#858585] text-[12px] leading-[24px] tracking-[0.1px]" />
				</label>
				<div className="flex flex-col items-center">
					<Link className='text-[10px] text-[#fff] leading-[15px] mb-[10px]' to={'/'}>Sign In</Link>
					<Button type={'submit'} btnTitle={'Sign Up'}/>
				</div>
			</form>
		</div>
	)
}

export default SignUp