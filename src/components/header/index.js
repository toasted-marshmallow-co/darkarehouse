import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import Logo from '/assets/images/Logo_Light.png';

const Header = () => (
	<header class={style.header}>
		<span><img src={Logo} height="30" width="30" alt="DW Logo" /></span>
		<nav>
			<a className={style.contact} href="mailto:tudor.wolff@toastedmarshmallow.co">Contact</a>
		</nav>
	</header>
);

export default Header;
