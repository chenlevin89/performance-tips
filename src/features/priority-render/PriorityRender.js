import {useEffect, useRef, useState} from "react"
import Fibonacci from '../../components/fibonacci/Fibonacci';
import VisibilityObserver from '../../utils/VisibilityObserver';


export default function PriorityRender() {

    const containerElement = useRef();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const element = containerElement.current;

        const callback = () => setIndex(index => index + 1);
        const mutationObserver = VisibilityObserver({element, callback})

        callback();
        return () => {mutationObserver.disconnect()}
    }, []);


    return <div ref={containerElement}>
        <p>Priority Render</p>
        {index > 2 && <Fibonacci index={38} />}
        {index > 0 && <p>First</p>}
        {index > 1 && <p>Second</p>}
    </div>
}


/*
    Long task can cause to poor user experience since the browser is stuck
    and changes to screen are delayed. in order to solve this issue we can start by 
    rendering part of the view and keep long task to last.

    SOLUTION
    the combination of MutationObserver and IntersectionObserver allow us to detect when
    DOM changes are made and when element are rendered to the screen.
    this way we can control the order og the printing and avoid render blocks experience.
*/