import { h } from 'preact';
import style from './style.css';
import 'style/utilities.css';


//import UI_2 from '../../assets/images/DW_UI_2.png'

const Mockups = ({ src_array, callback_activate_modal }) => (
        <>
        <div className={style.card_holder}>
        {src_array.map(src => {
            return(
                <div className={style.card_wrapper}>
                    {/* <span className={style.card_topper}>
                        <span className={style.card_button}></span>
                        <span className={style.card_button}></span>
                        <span className={style.card_button}></span>
                    </span> */}
                    <img className={style.card} src={src} alt="Darkwarehouse screenshot" onClick={() => callback_activate_modal(true)}></img>
                </div>
            )
        })}
        </div>
    </>
);

export default Mockups;


