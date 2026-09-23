import React, { useEffect, useRef, useState } from "react";
import "../../css/aboutComponents/CounterSection.css";

const counterData = [
    {
        title: "GROUP FOUNDED IN MUMBAI",
        value: 2006,
        suffix: "",
    },
    {
        title: "YEARS OF PROMOTER EXPERIENCE",
        value: 40,
        suffix: "+",
    },
    {
        title: "MINIMUM PIECES PER STYLE",
        value: 300,
        suffix: "",
    },
    {
        title: "VERIFIED BUYER RATING",
        value: 5,
        suffix: ".0",
    },
];

const CounterSection = () => {
    const sectionRef = useRef(null);
    const [startCounter, setStartCounter] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounter(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="counter-section py-0"
        >
            <div className="container-fluid">
                <div className="row g-0">

                    {counterData.map((item, index) => (
                        <CounterItem
                            key={index}
                            {...item}
                            start={startCounter}
                            index={index}
                        />
                    ))}

                </div>
            </div>
        </section>
    );
};

const CounterItem = ({
    title,
    value,
    suffix,
    start,
    index,
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime = null;
        const duration = 1800;

        const animate = (currentTime) => {
            if (!startTime) {
                startTime = currentTime;
            }

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            // Smooth ease-out
            const easedProgress =
                1 - Math.pow(1 - progress, 3);

            setCount(
                Math.floor(easedProgress * value)
            );

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(animate);
    }, [start, value]);

    return (
        <div
            className={`
                col-12 
                col-sm-6 
                col-lg-3 
                counter-item
                ${index === 1 ? "counter-second" : ""}
            `}
        >
            <div className="counter-content">

                <div className="common-title">
                    <h6 className="counter-title">
                        {title}
                    </h6>

                    <h2>
                        {count}
                        {count === value && suffix}
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default CounterSection;