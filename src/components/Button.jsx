import React from 'react';

function Button({type, btnTitle}) {
	return (
		<button type={type} className={`py-[16px] px-[50px] rounded-[100px] text-[10px] text-[#fff] leading-[15px] btn`}>{btnTitle}</button>
	)
}

export default Button