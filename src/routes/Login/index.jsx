import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignUp } from '../../pages/Login/index'
import Loading from '../../assets/images/Loading.png'
const SignIn = lazy(() => new Promise((resolve) => {
	return setTimeout(() => resolve(import("../../pages/Login/SignIn")), 1500);
}))
function LoginRoutes() {
	return (
		<Routes>
			<Route path='/' element={
				<Suspense fallback={<img className='absolute inset-0 m-auto' src={Loading} alt="Loading..." width={300} height={300} />}>
					<SignIn />
				</Suspense>
			} />
			<Route path='/sign-up' element={<SignUp />} />
		</Routes>
	)
}
export default LoginRoutes