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
		<View_4 />
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
				Intelligent Warehouse Automation.
			</p>
			<span className='d-flex justify-content-center'>
					<input type="button" onClick={() => document.getElementById('sect_a').scrollIntoView()} className='border-accent text-inverse justify-self-center box-hover bg-accent-hover transition-quick cursor-pointer p-h-50 p-v-20 m-v-20 b-1 align-self-start d-flex text-inverse bg-primary' value=" Find out more "/>
			</span>

		</div>
	</div>
	)
}

//For displaying details on UI
const View_2 = () => {
	return(
		<div id="sect_a" class={style.wrapper}>
			{/* <div className={style.mockup}>
			</div> */}
			<div className='d-flex flex-1 align-items-center justify-content-center'>
				{/* <Mockups src_array={[API_2, API]}/> */}
				<Mockups src_array={[API_2]}/>
			</div>
			<div className='d-flex flex-column flex-1 align-self-center justify-content-start p-20 m-top-20'>
				{/* <p  className='text-accent text-sm'>
					communication layer
				</p> */}
				<h1 className='text-inverse'>
					Functional and Secure API
				</h1>
				
				<p className='text-inverse opacity-5 p-right-100 segoe text-light text-sm'>
					Built with the LTS Microsoft .NET framework (currently .NET 6), the API utilises some of the latest technologies and best practices in the enterprise application development industry. 
					This means the that the user, engineer, application developer or automation integrator will experience lightning fast API responses. 
					Furthermore, integration is made significantly easier through our compliance of the OpenAPI specification. 
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
					Responsive UI
				</h1>
				
				<p className='text-inverse opacity-5 p-left-100 text-right segoe text-light text-sm'>
					We identified that the modern UI and HMI technologies in the automation industry are clunky and outdated. 
					So we set out to create a user experience that uses some of the latest web UI technologies.
					 The application resides on a locally hosted website so that the data can be accessed from anywhere within the secure local network. 
					 We constructed our experience using the widely implemented React.js library (maintained by Facebook).
					 This results in a responsive web UI that works on any device on any OS. Remove the need for overpriced HMI systems. 
				</p>
				{/* <span className='border-accent box-hover transition-quick cursor-pointer p-20 m-v-20 b-1 align-self-end d-flex text-inverse'> Find out more </span> */}
			</div>
			<div className="d-flex flex-1 align-items-center justify-content-center">
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

const View_4 = () => {
	return(
		<div className='d-flex bg-primary	 flex-column p-v-50 p-20 ' style={{ minHeight: "20vh" }} >
			<div className='d-flex flex-1 justify-content-center align-items-center m-v-2'>
				<h1 className='text-inverse text-center opacity-5'>if this excites you</h1>
			</div>
			<div className='d-flex flex-1 justify-content-center align-items-center flex-column'>
				<p className='d-flex text-light text-inverse opacity-5 segoe text-sm	'>
					Tell us a bit about your warehouse and your business and we'll get in touch with you.
				</p>
				<span className='d-flex justify-content-center m-v-10'>
					<a href="mailto:tudor.wolff@toastedmarshmallow.co" className='border-accent text-inverse justify-self-center box-hover bg-accent-hover transition-quick cursor-pointer p-h-50 p-v-20 m-v-20 b-1 align-self-start d-flex text-inverse bg-primary'> Contact us </a>
				</span>
			</div >
		</div>
	)
}

const Footer = () => {
	return(
		<div className='d-flex bg-offshade p-v-50 p-20' style={{minHeight: "15vh"}} >
			<div className='d-flex flex-1 justify-content-center align-items-center'>
				<span className='b-right-1 p-h-5'>© DarkWarehouse 2022. All rights reserved </span>
				<span><img src={Icon} alt="TM Logo" height={25} width={30}/></span>
				<span className="p-h-2"> Solution Provided by<a className="text-bold text-tm-red transition-quick" href="https://toastedmarshmallow.co/">Toasted Marshmallow</a></span>
				{/* <img src="images/Icon.png" alt="Toasted Marshmallow Logo" width="25px" height="25px"></img> */}
			</div >
		</div>
	)
}

