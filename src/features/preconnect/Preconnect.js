export default function Preconnect(){
    return <>
        <p>Preconnect</p>
        <img style={{height:'40px',width:'40px'}} src="https://fusion.ironsrc.net/assets/icons/v2/ios.svg" />
    </>

}

/*
    When working with CORS origin the browser needs to figure out the origin DNS address initial 
    a connection and identify the server by SSL protocol, all those take time and delay the response
    up to 500ms.
    
    by adding <link rel="preconnect" href="https://fusion.ironsrc.net"> tag we can establish an
    earlier connection and save this time on the actual request. 


    chrome://net-internals/#dns
*/