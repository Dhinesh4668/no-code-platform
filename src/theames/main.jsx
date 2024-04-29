import React from 'react';

const Template = ({ title, link, images, description, date, eventType, socials, linkTitle, eventBackground }) => {
    const containerStyle = {
        backgroundImage: `url(${eventBackground})`,
        padding: '20px',
        borderRadius: '8px',
        color: '#fff', 
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>Started at {date}</h3>
            <h4>Event Type: {eventType}</h4>
            <a href={link}>{linkTitle}</a>
            <div>
                {/* Render social links */}
                {socials.map((social, index) => (
                    <p key={social}>Social {index + 1}: {social}</p>
                ))}
            </div>
            <div>
                {/* Render images */}
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Event ${index + 1}`} width={100} height={100} />
                ))}
            </div>
        </div>
    );
}

export default Template;
