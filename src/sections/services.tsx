import { motion } from 'framer-motion';import * as React from 'react';import marinAirCon from '@/assets/Dometic+sailing+boat+inside+.jpg';import marineRefrigeration from '@/assets/EOS_Dometic_Day3_2588_Sailboat_Drinks_Final.jpg';import checkbox from '@/assets/icons/icon-checkbox.svg';import marineIceMakers from '@/assets/Tropical+cocktail+on+beach.jpeg';import { ServiceExperience } from '@/sections/service-experience';import { cn } from '@/utils';export const Services = () => {	return (		<section			className={'flex w-full flex-col items-center justify-center py-32'}		>			<div				className={					'flex w-[1440px] flex-col items-center justify-center gap-32 py-32'				}			>				<SectionCard					title={'Marine Air Conditioning'}					para={						'Stay cool on the seas with Summit Marine’s expert marine air conditioning services. We specialise in the installation, repair, and maintenance of high-quality air conditioning systems for all types of boats.'					}					img={marinAirCon}					isReverse={false}					tickList={[						'Design and manufacture',						'Installation',						'Servicing',						'Repairs',					]}				/>				<SectionCard					title={'Marine Refrigeration'}					para={						'Keep your food fresh and drinks chilled with a reliable marine refrigeration setup. Our skilled technicians ensure your onboard cooling systems are installed correctly and run efficiently.'					}					img={marineRefrigeration}					isReverse={true}					tickList={[						'Design and manufacture',						'Installation',						'Servicing',						'Repairs',					]}				/>				<SectionCard					title={'Marine Ice Makers'}					para={						"When you're out about on the stunning Sydney harbour, nothing beats a frosty beverage. Enjoy a steady supply of ice with our marine ice maker services and take your summer boating to the next level."					}					img={marineIceMakers}					isReverse={false}					tickList={['Installation', 'Servicing', 'Repairs']}				/>			</div>			<ServiceExperience />		</section>	);};const SectionCard = ({	title,	para,	img,	isReverse,	tickList,}: {	title: string;	para: string;	img: string;	isReverse: boolean;	tickList: string[];}) => {	const duration = 0.8;	const offset = 25;	const blur = 5;	return (		<div className={'flex h-[480px] w-full flex-row gap-32'}>			<motion.div				initial={{					opacity: 0,					x: isReverse ? offset : -offset,					filter: `blur(${blur}px)`,				}}				whileInView={{					opacity: 1,					x: 0,					filter: 'blur(0px)',				}}				transition={{ duration: duration, ease: 'easeIn' }}				viewport={{ once: true, amount: 0.75 }}				className={cn(					'box-border flex size-full flex-1 flex-col items-center justify-center gap-4 ',					isReverse && 'order-2',				)}			>				<img					src={img}					alt={''}					className={'size-full rounded-2xl object-cover'}				/>			</motion.div>			<motion.div				initial={{					opacity: 0,					x: isReverse ? -offset : offset,					filter: `blur(${blur}px)`,				}}				whileInView={{					opacity: 1,					x: 0,					filter: 'blur(0px)',				}}				transition={{ duration: duration, ease: 'easeIn' }}				viewport={{ once: true, amount: 0.75 }}				className={cn(					'box-border flex size-full flex-1 flex-col items-center justify-center gap-4',					isReverse && 'order-1',				)}			>				<h1					className={						'font-primary text-4xl font-bold uppercase tracking-wide text-primary-grey'					}				>					{title}				</h1>				<p					className={						'text-justify font-primary text-xl text-black/70'					}				>					{para}				</p>				<ul					className={						'flex w-full flex-col gap-2 px-8 py-4 font-primary text-xl text-black/70'					}				>					{tickList.map((item) => (						<li							key={item}							className={'flex flex-row items-center gap-4'}						>							<img src={checkbox} alt={''} className={'size-6'} />							<p className={'font-primary'}>{item}</p>						</li>					))}					{/*<li className={'flex flex-row items-center gap-4'}>*/}					{/*	<img src={checkbox} alt={''} className={'size-6'} />*/}					{/*	<p className={'font-primary'}>Installation</p>*/}					{/*</li>*/}					{/*<li className={'flex flex-row items-center gap-4'}>*/}					{/*	<img src={checkbox} alt={''} className={'size-6'} />*/}					{/*	<p className={'font-primary'}>Servicing</p>*/}					{/*</li>*/}					{/*<li className={'flex flex-row items-center gap-4'}>*/}					{/*	<img src={checkbox} alt={''} className={'size-6'} />*/}					{/*	<p className={''}>Repairs</p>*/}					{/*</li>*/}				</ul>			</motion.div>		</div>	);};