import { h } from 'preact';
import style from './style.css';
//import Loader from '../../components/loader';
import Mockups from '../../components/mockups';

import { AiOutlineConsoleSql } from 'react-icons/ai';
import { SiMongodb } from 'react-icons/si';
import { SiDotnet } from 'react-icons/si';
import { SiDocker } from 'react-icons/si';
import { SiAzuredevops } from 'react-icons/si';
import { SiSwagger } from 'react-icons/si';

import { SiReact } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';

import Logo from '/assets/images/Logo_Light.png';
import Icon from '/assets/icons/Icon.png';
import API_2 from '/assets/images/DW_API_2.png'
import UI_2 from '/assets/images/DW_UI_2.png'

const Home = () => (
	<div class={style.body}>
		<View_1 />
		<View_2 />
		<Toolbox />
		<View_3 />
		<Footer />
	</div>
);

export default Home;

//For displaying landing page
const View_1 = () => {
	return(
	<div class={style.wrapper}>
		<div class={style.content_centered}>
			<p class={style.message}>Coming soon</p>
			<span className={style.hero}>
				<img className={style.logo} src={Logo} alt="Darkwarehouse Logo" />
				<h1 className={style.title}>DarkWarehouse</h1>
			</span>
			<p className={style.description}>
				Sophisticated warehouse automation solutions.
			</p>
			<span className='d-flex justify-content-center'>
				<span className='border-accent justify-self-center box-hover bg-accent-hover transition-quick cursor-pointer p-h-50 p-v-20 m-v-20 b-1 align-self-start d-flex text-inverse'> Contact us </span>
			</span>

		</div>
	</div>
	)
}

//For displaying details on UI
const View_2 = () => {
	return(
		<div class={style.wrapper}>
			{/* <div className={style.mockup}>
			</div> */}
			<div className='d-flex flex-1 align-items-center justify-content-center bg-offshade'>
				{/* <Mockups src_array={[API_2, API]}/> */}
				<Mockups src_array={[API_2]}/>
			</div>
			<div className='d-flex flex-column flex-1 align-self-center justify-content-start p-20 m-top-20'>
				{/* <p  className='text-accent text-sm'>
					communication layer
				</p> */}
				<h1 className='text-inverse'>
					Darkwarehouse <br/>
					<span className='text-accent'>a</span>pplication <span className='text-accent'>p</span>rogramming <span className='text-accent'>i</span>nterface
				</h1>
				
				<p className='text-inverse opacity-5 p-right-100'>
					Leveraging the power of the .Net 6.0 framework, we've built our API to be lightning fast.
					Integrating the latest technology with best practices and meticuluous testing has resulted in
					an application programming interface that's easy to use, exposes complex functionality, and robust as can be. 
				</p>
				{/* <span className='border-accent box-hover transition-quick cursor-pointer p-20 m-v-20 b-1 align-self-start d-flex text-inverse'> Find out more </span> */}
			</div>
		</div>
	)
}

const View_3 = () => {
	return(
		<div class={style.wrapper}>
			<div className='d-flex flex-column flex-1 align-self-center justify-content-end p-20 m-v-20'>
				{/* <p className='text-accent text-sm text-right'>
					interface layer
				</p> */}
				<h1 className='text-inverse text-right'>
					Darkwarehouse <br />
					<span className='text-accent'>u</span>ser <span className='text-accent'>i</span>nterface
				</h1>
				
				<p className='text-inverse opacity-5 p-left-100 text-right'>
					Responsive, customizable, and interactive is what we've aimed for with our UI.
					Built using the latest iteration of ReactJs we've made an OS-irrespective, cross-browser web application to interact with and monitor 
					real world warehouse traffic and throughput from any device. Updated in real time.
				</p>
				{/* <span className='border-accent box-hover transition-quick cursor-pointer p-20 m-v-20 b-1 align-self-end d-flex text-inverse'> Find out more </span> */}
			</div>
			<div className="d-flex flex-1 align-items-center justify-content-center bg-offshade">
				<Mockups src_array={[UI_2]} />
				{/* <Mockups src_array={[UI_2, UI]} /> */}
			</div>
		</div>
	)
}

const Toolbox = () => {
	return(
		<div className='d-flex bg-offshade flex-column p-v-50 p-20' style={{ minHeight: "30vh" }} >
			<div className='d-flex flex-1 justify-content-center align-items-center m-v-20'>
				<h1 className='text-inverse text-center opacity-5'>what's in our toolbox</h1>
			</div>
			<div className='d-flex flex-1 justify-content-center align-items-center'>
				<span className='d-flex flex-row'>
					<span className='p-20 text-lg text-accent'><AiOutlineConsoleSql /></span>
					<span className='p-20 text-lg text-accent'><SiMongodb /></span>
					<span className='p-20 text-lg text-accent'><SiDotnet /></span>
					<span className='p-20 text-lg text-accent'><SiDocker /></span>
					<span className='p-20 text-lg text-accent'><SiSwagger /></span>
				</span>
			</div >
			<div className='d-flex flex-1 justify-content-center align-items-center'>
				<span className='d-flex flex-row'>
					<span className='p-20 text-lg text-accent'><SiAzuredevops /></span>
					<span className='p-20 text-lg text-accent'><SiJavascript /></span>
					<span className='p-20 text-lg text-accent'><SiReact /></span>
					<span className='p-20 text-lg text-accent'><SiSass /></span>
					<span className='p-20 text-lg text-accent'><SiHtml5 /></span>
				</span>
			</div >
		</div>
	)
}

const Footer = () => {
	return(
		<div className='d-flex bg-offshade p-v-50 p-20' style={{minHeight: "15vh"}} >
			<div className='d-flex flex-1 justify-content-center align-items-center'>
				<span className='b-right-1 p-h-5'>© DarkWarehouse 2021. All rights reserved </span>
				<span><img src={Icon} alt="TM Logo" height={25} width={30}/></span>
				<span className="p-h-5"> Solution Provided by <a className="bolded tms-tm-hover transition-quick" href="https://toastedmarshmallow.co/">Toasted Marshmallow</a></span>
				{/* <img src="images/Icon.png" alt="Toasted Marshmallow Logo" width="25px" height="25px"></img> */}
			</div >
		</div>
	)
}

