import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
      const timer = setInterval(() => {
            console.log('Use Effect Called')
        }, 2000);

        return () => {
            clearInterval(timer);
            console.log('clear interval')
        }
    }, [])

    
    return (
        <>
        <h1>Contact</h1>
        </>
    )
}

export default Contact;