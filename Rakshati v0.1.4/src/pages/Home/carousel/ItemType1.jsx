import GreenButton from '@/components/GreenButton';
import React from 'react';
import dummyImg from '@images/banner.svg';

const ItemType1 = ({ img, heading, subHeading, buttonText, buttonOnClick }) => {
	return (
		<div className="w-full  h-full shrink-0  relative px-20">
			<div className="flex flex-col items-center mt-20 text-center space-y-5">
				<h1 className="text-8xl ">
					{heading || 'All things finance, right here. '}
				</h1>
				<p className="text-2xl text-gray-500 font-semibold">
					{subHeading || 'Built for a growing India.'}
				</p>
				<GreenButton
					onClick={buttonOnClick}
					text={buttonText || 'Get Started'}
				/>
			</div>

			<img
				src={img || dummyImg}
				className="absolute bottom-5 left-1/2 h-1/2 -translate-x-1/2 object-cover -z-20"
			/>
		</div>
	);
};

export default ItemType1;
