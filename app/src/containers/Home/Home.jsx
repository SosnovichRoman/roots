import React, { useEffect } from 'react'
import { hero } from '../../assets'
import './home.scss'

const Home = () => {

	return (
		<main>
			<section>
				<img src={hero} className='inset-0 absolute h-full w-full object-cover' />
				<div className='hero__container relative z-10 h-[100vh] min-h-[600px] max-h-[1300px] flex justify-center items-center flex-col gap-[60px]'>
					<div className='text-neutral-main'>
						<h1 className='hero__title'>Roots</h1>
						<div className='flex justify-between'>
							<p>you</p>
							<p>can</p>
							<p>never</p>
							<p>have</p>
							<p>too</p>
							<p>many</p>
							<p>plants</p>
						</div>
					</div>
					<a href='' className='button'>Перейти к каталогу</a>
				</div>
			</section>
		</main>
	)
}

export default Home 