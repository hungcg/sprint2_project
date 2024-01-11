import React, {useEffect, useRef, useState} from 'react';

function Ontop(props) {

    const myBtn = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);


    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };
    const topFunction = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (myBtn && myBtn.current) {
            if (scrollPosition > 20) {
                myBtn.current.style.display = "block";
            } else {
                myBtn.current.style.display = "none";
            }
        }
    }, [scrollPosition]);
    return (
        <div>
            {Ontop}
        </div>
    );
}

export default Ontop;