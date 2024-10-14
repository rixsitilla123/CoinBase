import React from 'react'
import Loading from '../assets/images/Loading.png';

function CustomLoading() {
	return (
		<div className='fixed flex items-center justify-center inset-0 bg-[#00000059] backdrop-blur'>
			<img src={Loading} alt="loading" width={300} height={300}/>
		</div>
	)
}

export default CustomLoading