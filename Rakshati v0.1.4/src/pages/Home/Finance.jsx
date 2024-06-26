import React from 'react';
import PhoneImg from '@images/phone.png';
import BuildingImg from '@images/indianMarketBuilding.png';
import ExploreButton from '@/components/ExploreButton';
import StocksImg from '@images/stocksHist.png';
import MFImg from '@images/mutualFund.png';
import FnOImg from '@images/fno.png';

const Finance = () => {
	return (
		<div className="flex items-center p-10">
			<div className="w-1/2 space-y-5">
				<img src={BuildingImg} alt="" height={140} width={128} />
				<h1 className="text-6.5 leading-[1.05]">
					Indian market at your fingertips
				</h1>
				<p className="text-lg text-secondary">
					Long-term or short-term, high risk or low risk. Be the kind of
					investor you want to be.
				</p>
				<div className="space-y-2">
					<ExploreButton text="Insurances" icon={StocksImg} />
					<ExploreButton text="Investment Planning" icon={MFImg} />
					<ExploreButton text="Credit" icon={FnOImg} />
				</div>
			</div>
			<div className="w-1/2 flex justify-end">
				<img src={PhoneImg} alt="" width={320} />
			</div>
		</div>
	);
};

export default Finance;
