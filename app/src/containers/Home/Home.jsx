import React, { useEffect } from 'react'
import { hero } from '../../assets'
import './home.scss'
import { initSliders } from '../../templates/sliders'
import { popular01 } from '../../assets'
//import 'swiper/scss/pagination'

const Home = () => {

	useEffect(() => {
		initSliders();
	}, [])


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
			<section className='popular'>
				<div className='popular__container'>
					<h1 className='heading-1 border-solid border-b-2 border-main-3 border-spacing-y-[0.28em]'>Популярные товары</h1>
					<div className='mt-20 grid grid-cols-[2fr_3fr] gap-[75px]'>
						<div className='flex flex-col justify-between gap-5'>
							<p className='text-[21px] leading-[1.17]'>
								Это лекарственное растение является отличным стартовым суккулентом, если вы решили начать их разводить.
								Если должным образом ухаживать
								за ним, он может выпустить маленькие желтые цветочки.
							</p>
							<a href='' className='button button-dark'>Купить</a>
						</div>
						<div className='grid'>
							<div className="popular__slider swiper w-full">
								<div className="popular__wrapper swiper-wrapper">
									<div className="popular__slide swiper-slide">
										<img src={popular01} className='rounded-[5px] h-[350px] w-full object-cover' />
										<div className='mt-[10px] flex justify-between'>
											<p>Алоэ  Вера</p>
											<p>20.00р</p>
										</div>
									</div>
									<div className="popular__slide swiper-slide">
										<img src={popular01} className='rounded-[5px] h-[350px] w-full object-cover' />
										<div className='mt-[10px] flex justify-between'>
											<p>Алоэ  Вера</p>
											<p>20.00р</p>
										</div>
									</div>
									<div className="popular__slide swiper-slide">
										<img src={popular01} className='rounded-[5px] h-[350px] w-full object-cover' />
										<div className='mt-[10px] flex justify-between'>
											<p>Алоэ  Вера</p>
											<p>20.00р</p>
										</div>
									</div>
									<div className="popular__slide swiper-slide">
										<img src={popular01} className='rounded-[5px] h-[350px] w-full object-cover' />
										<div className='mt-[10px] flex justify-between'>
											<p>Алоэ  Вера</p>
											<p>20.00р</p>
										</div>
									</div>

									

								</div>
								{/* <button type="button" className="swiper-button-prev">{"<"}</button>
							<button type="button" className="swiper-button-next">{">"}</button> */}
							</div>
							<div className="swiper-pagination mt-9"></div>
						</div>



					</div>
				</div>
			</section>
		</main>
	)
}

export default Home 