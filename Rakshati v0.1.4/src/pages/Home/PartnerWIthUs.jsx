import React from 'react';
import { LuMoveRight } from 'react-icons/lu';
import partnerBg from '@images/partnerBg.png';

const PartnerWIthUs = () => {
	return (
		<div className="flex flex-col items-center py-20">
			<h1 className="text-5xl font-bold text-center my-10">
				At 3.9+ Crore <br />
				stores, apps, websites & more
			</h1>

			<a className="bg-sky-400 text-white flex  py-5 px-9 rounded-full text-xl items-center mb-5 hover:cursor-pointer">
				Partner with us <LuMoveRight className="text-3xl ml-5" />
			</a>
			<img src={partnerBg} alt="" />
		</div>
	);
};

export default PartnerWIthUs;
