import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import '../assets/boxes.css';

export const Textbox = () => {
    return (
        <>
            <div className="text-container">
                <LoremIpsum
                    p={3}
                />
            </div>
        </>
    );
};

export const Imagebox = () => {
    return (
        <div className="image-box">
            <p> image box </p>
        </div>
    );
};
