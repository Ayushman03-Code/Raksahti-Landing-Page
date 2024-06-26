import React from 'react';
import ScrollCard from '../../components/ScrollCard';
import upiBg from '@images/upi.jpg';
import creditBg from '@images/credit.jpg';
import tapBg from '@images/tap.jpg';

const CardsCarousel = () => {
	return (
		<div className="flex space-x-20 overflow-scroll pl-10">
			<ScrollCard
				icon={''}
				heading={'SCAN & PAY'}
				subHeading={'scan & pay any UPI QR'}
				backgroundImage={upiBg}
			/>
			<ScrollCard
				icon={''}
				heading={'UPI ON CREDIT'}
				subHeading={'UPI payments on credit.'}
				backgroundImage={creditBg}
			/>
			<ScrollCard
				icon={''}
				heading={'TAP TO PAY'}
				subHeading={'tap your phone. pay on credit.'}
				backgroundImage={tapBg}
			/>
			<ScrollCard
				icon={''}
				heading={'SCAN & PAY'}
				subHeading={'scan & pay any UPI QR'}
				backgroundImage={upiBg}
			/>
			<ScrollCard
				icon={''}
				heading={'UPI ON CREDIT'}
				subHeading={'UPI payments on credit.'}
				backgroundImage={creditBg}
			/>
			<ScrollCard
				icon={''}
				heading={'TAP TO PAY'}
				subHeading={'tap your phone. pay on credit.'}
				backgroundImage={tapBg}
			/>
		</div>
	);
};

export default CardsCarousel;
