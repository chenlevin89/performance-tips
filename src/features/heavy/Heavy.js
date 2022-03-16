import {useEffect, useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Fibonacci from '../../components/fibonacci/Fibonacci';

export default function Heavy() {

    const [template, setTemplate] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {

        // setTimeout(() => {
        //     setTemplate(<Fibonacci index={38} callback={() => setLoader(false)} />)
        // }, 300)


         setTemplate(<Fibonacci index={38} callback={() => setLoader(false)} />)

    }, [])


    return <>
        <div>
            <p>Heavy Component</p>
            {loader && <CircularProgress/>}
        </div>

        {template}
    </>
}

/*
    Long task consider as task that block the main thread for longer then 50ms
    when the main thread is block by those tasks he can't handle other events 
    like Dom rendering and react to user interaction. this can lead to a poor
    user experience.

    SOLUTION
    breakdown those long task to smaller tasks by delegate them into the event loop 
    to allow the main thread react to user interaction between execution.
*/



