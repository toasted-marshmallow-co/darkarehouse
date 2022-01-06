import { h } from 'preact';
import style from './style.css';

const Loader = () => (
    <div class={style.example}>
        <div class={style.container}>
            <div class={style.block}>
                <div class={style.item}></div>
                <div class={style.item}></div>
                <div class={style.item}></div>
                <div class={style.item}></div>
            </div>
        </div>
        <div class={style.container}>
            <div class={style.block}>
                <div class={style.item}></div>
                <div class={style.item}></div>
                <div class={style.item}></div>
                <div class={style.item}></div>
            </div>
        </div>
        <div class={style.container}>
            <div class={style.block}>
                <div class={style.item}></div>
                <div class={style.item}></div>
                <div class={style.item}></div>
                <div class={style.item}></div>
            </div>
        </div>
        <div class={style.container}>
            <div class={style.block}>
                <div class={style.item}></div>
                <div class={style.item}></div>
                <div class={style.item}></div>
                <div class={style.item}></div>
            </div>
        </div>
    </div>
);

export default Loader;