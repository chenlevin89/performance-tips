import Icon from '@mui/icons-material/Whatshot';
import style from './Preload.module.css';

export default function Preload() {

    return <div className={style.container}>
        <span>Preload</span>
        <Icon></Icon>
    </div>
}

/*
    Preload allow us to indicate webpack that we like to load this specific lazy load bundle
    as soon as possible without impact browser render blocking,
    meaning that it will have a High priority and it will not delay window.onload callback.
    
    HOW DOES IT WORK
    by using webpack magic comment "webpackPreload:true" on dynamic import will add a
    <link rel="preload" as="script" src="..." /> to the head and indicate to browser that this 
    bundle as a hight priority and should be loaded as soon as possible.
*/