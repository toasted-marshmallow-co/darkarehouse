import { h } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import style from './style.css';
import Loader from '../../components/loader';
import Logo from '../../assets/images/Logo_Light.png'

import { FiMail } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';

const Mockups = lazy(() => import('../../components/mockups/index'));



const Home = () => (
	<div class={style.home}>
		<Suspense  fallback={<Loader />}>
			<div class={style.wrapper}>

				{/* <div className={style.mockup}>
					<Suspense fallback={<Loader />}>
					<Mockups />
					</Suspense>
				</div> */}

				<div class={style.content_centered}>
					<p class={style.message}>Coming soon</p>
					<span className={style.hero}>
						<img class={style.logo} src={Logo} alt="Darkwarehouse Logo"/>
						<h1 class={style.title}>DarkWarehouse</h1>
					</span>
					<p class={style.description}>
						Sophisticated warehouse automation solutions.
					</p>
					<span className={style.contact}>
						<span className={style.detail}><FiMail /> <a href="mailto: info@storagemanagement.co.za">info@storagemanagement.co.za</a></span>
						<span className={style.detail}><FiGlobe /> <a href='https://storagemanagement.co.za'>storagemanagement.co.za</a></span>
					</span> 

				</div>			
			</div>
		</Suspense>
		<div class={style.wrapper}>
			Two
		</div>
		<div class={style.wrapper}>
			Three
		</div>

	</div>
);

export default Home;

