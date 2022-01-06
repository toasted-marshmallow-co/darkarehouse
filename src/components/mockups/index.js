import { h } from 'preact';
import style from './style.css';

import API from '/assets/images/DW_API.png'
import UI from '/assets/images/DW_UI.png'
//import UI_2 from '../../assets/images/DW_UI_2.png'

const Mockups = () => (
    <>

        {/* <div className={style.ui_2}>
            <img class={style.card} src={UI_2} alt="Darkwarehouse UI"></img>
        </div> */}
        <div className={style.api}>
            <img class={style.card} src={API} alt="Darkwarehouse API"></img>
        </div>
        <div className={style.ui}>
            <img class={style.card} src={UI} alt="Darkwarehouse UI"></img>
        </div>
    </>
);

export default Mockups;


