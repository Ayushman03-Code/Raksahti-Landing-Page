import React from 'react';
import upiImg from '@images/upi.jpg';
import scanIcon from '@images/scanIcon.png';
import { BsArrow90DegRight } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { LuMoveRight } from 'react-icons/lu';

const ScrollCard = ({
	icon,
	heading,
	subHeading,
	buttonText,
	backgroundImage,
	onClick,
}) => {
	return (
		<div
			className="flex flex-col items-center 
    w-96 aspect-[9/16] relative
    py-6 px-12 text-white space-y-5 border border-neutral-500 shrink-0"
		>
			{/* Background Color div */}
			<div className="bg-black h-full w-full absolute top-0 left-0 -z-20" />

			{/* Background Image */}
			<img
				src={backgroundImage || upiImg}
				alt=""
				className=" absolute bottom-0 left-0 -z-10"
			/>

			{/* Heading */}
			<div className="text-2xl flex items-center mr-8 font-thin">
				<img src={icon || scanIcon} alt="" className=" w-8 inline mr-3" />
				<h4>{heading || 'SCAN & PAY'}</h4>
			</div>

			<h4 className="text-5xl font-bold tracking-tight text-center ">
				{subHeading || 'scan & pay any UPI QR'}
			</h4>

			<button
				className="flex items-center p-3 justify-center w-[180px] border border-neutral-600 space-x-4 relative backdrop-blur-sm"
				onClick={onClick}
			>
				<p className="uppercase font-bold">{buttonText || 'Know More'}</p>
				<LuMoveRight className="text-xl" />
			</button>
		</div>
	);
};

export default ScrollCard;
