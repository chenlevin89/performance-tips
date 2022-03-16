import {useEffect} from "react";

export default function Fibonacci({index, callback = () => {}}) {
    useEffect(() => {
        callback()
    },[index])

    return <p>{fib(index)}</p>
}

function fib(n) {
    return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
}