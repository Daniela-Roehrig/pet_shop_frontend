/* import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Button.module.css';

const Button = ({
    status,                 
    position,               
    text,                  
    left,
    right,
    bottom,
    width = "inherit",
    minWidth,
    target,                 
    action,                 
    type,                   
    disableClickFeedback = false 
}) => {
    const [visible, setVisible] = useState(false);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setVisible(status);
    }, [status]);

    useEffect(() => {
        if (clicked && !disableClickFeedback) {
            const timer = setTimeout(() => setClicked(false), 2000); // optional: reset nach 2 Sek
            return () => clearTimeout(timer);
        }
    }, [clicked, disableClickFeedback]);

    const handleClick = async (e) => {
        if (type !== "submit") {
            e.preventDefault();
        }

        if (target) {
            navigate(target);
        } else if (typeof action === 'function') {
            const result = await action();

            if (result === true && !disableClickFeedback) {
                setClicked(true);
            }
        }
    };

    if (!visible) return null;

    return (
        <button
            className={`${styles.cartBtn} ${clicked ? styles.added : ''}`}
            onClick={handleClick}
            type={type}
            style={{
                position,
                left,
                right,
                bottom,
                width,
                minWidth
            }}
        >
            {clicked && !disableClickFeedback ? 'added' : text}
        </button>
    );
};

export default Button; */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Button.module.css';

const Button = ({
    status,                 
    position,               
    text,                  
    left, 
    right,
    bottom,
    width = "inherit",
    minWidth,
    target,                 
    action,                 
    type,                   
    disableClickFeedback = false 
}) => {
    const [visible, setVisible] = useState(false);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setVisible(status);
    }, [status]);

    // Kein Timer mehr - clicked bleibt erhalten
    // Wenn du möchtest, kannst du clicked über Props resetten oder externe Steuerung implementieren.

    const handleClick = async (e) => {
        if (type !== "submit") {
            e.preventDefault();
        }

        if (target) {
            navigate(target);
        } else if (typeof action === 'function') {
            const result = await action();

            if (result === true && !disableClickFeedback) {
                setClicked(true);
            }
        }
    };

    if (!visible) return null;

    return (
        <button
            className={`${styles.cartBtn} ${clicked ? styles.added : ''}`}
            onClick={handleClick}
            type={type}
            style={{
                position,
                left,
                right,
                bottom,
                width,
                minWidth
            }}
        >
            {clicked && !disableClickFeedback ? 'added' : text}
        </button>
    );
};

export default Button;
