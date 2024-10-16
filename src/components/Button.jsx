import React from 'react';

function Button({type, children, extraStyle, onClick}) {
	return (
		<button onClick={onClick} type={type} className={`py-[16px] px-[35px] border-[2px] border-transparent hover:border-[#fff] duration-500 rounded-[100px] text-[10px] text-[#fff] leading-[15px] btn ${extraStyle}`}>{children}</button>
	)
}

export default Button