import {useCallback, useState} from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import style from './Preflight.module.css';
import PreflightService from '../../services/Preflight.service';

export default function Preflight() {

    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(() => {
        setLoading(true);
        PreflightService.get().then(_ => setLoading(false));

    }, []);

    return <>
        <span className={style.subHeader}>preflight request</span>
        {loading ?
            <LoadingButton loading variant="outlined">Fetch</LoadingButton> :
            <Button variant="contained" onClick={fetchData} >Fetch</Button>
        }
    </>
}

/*
    Preflight request occurs when sending request to a different domain (CORS) and adding custom 
    headers. for example "authorization". it's can delay the response upto 500 ms for each request.

    SOLUTION - 
    attached "Access-Control-Max-Age" header to OPTIONS request to allow caching
*/