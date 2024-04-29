import React, { useState } from 'react';
import Template from './theames/main';

const App = () => {
    const [textColor, setTextColor] = useState('#fff');
    const [backgroundColor, setBackgroundColor] = useState('#333');
    const [eventBackground, setEventBackground] = useState('');
    const [selectedTemplate, setSelectedTemplate] = useState('default');

    // Form data state variables
    const [eventTitle, setEventTitle] = useState('');
    const [images, setImages] = useState([]);
    const [des, setDes] = useState('');
    const [date, setDate] = useState('');
    const [eventType, setEventType] = useState('');
    const [socialLinks, setSocialLinks] = useState(['']);

    const handleColorChange = (color) => {
        setTextColor(color);
    };

    const handleBackgroundChange = (color) => {
        setBackgroundColor(color);
    };

    const handleEventBackgroundChange = (e) => {
        setEventBackground(URL.createObjectURL(e.target.files[0]));
    };

    const handleTemplateChange = (template) => {
        setSelectedTemplate(template);
    };

    const handleDataSubmit = async(e) => {
        e.preventDefault();
        setEventTitle(e.target.eventTitle.value);
        setDes(e.target.des.value);
        setDate(e.target.date.value);
        setEventType(e.target.eventType.value);

      // store the data 
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const urls = files.map(file => URL.createObjectURL(file));
        setImages(urls);
    };

    const handleSocialLinkChange = (index, value) => {
        const newLinks = [...socialLinks];
        newLinks[index] = value;
        setSocialLinks(newLinks);
    };

    return (
        <center>
            <div>
                <input type="color" value={textColor} onChange={(e) => handleColorChange(e.target.value)} />
                <input type="color" value={backgroundColor} onChange={(e) => handleBackgroundChange(e.target.value)} />
                <input type="file" accept="image/*" onChange={handleEventBackgroundChange} />
                <select value={selectedTemplate} onChange={(e) => handleTemplateChange(e.target.value)}>
                    <option value="default">Default Template</option>
                    <option value="another">Another Template</option>
                </select>

                <form onSubmit={handleDataSubmit}>
                    <input type="text" name="eventTitle" placeholder="Event Title" />
                    <input type="text" name="des" placeholder="Event Description" />
                    <input type="date" name="date" onChange={(e) => setDate(e.target.value)} />
                    <input type="text" name="eventType" placeholder="Event Type" />
                    <input type="file" accept="image/*" multiple onChange={handleImageChange} />
                    {socialLinks.map((link, index) => (
                        <input key={index} type="text" value={link} onChange={(e) => handleSocialLinkChange(index, e.target.value)} placeholder="Social Link" />
                    ))}
                    <button type="button" onClick={() => setSocialLinks([...socialLinks, ''])}>Add Social Link</button>
                    <button type="submit">Submit</button>
                </form>
            </div>

            {selectedTemplate === 'default' && (
                <div style={{ color: textColor, backgroundColor: backgroundColor }}>
                    <Template
                        title={eventTitle}
                        link="#"
                        images={images}
                        description={des}
                        date={date}
                        eventType={eventType}
                        socials={socialLinks.filter(link => link.trim() !== '')}
                        linkTitle="Learn More"
                        eventBackground={eventBackground}
                    />
                </div>
            )}

            {selectedTemplate === 'another' && (
                <div style={{ color: textColor, backgroundColor: backgroundColor }}>
                    {/* Render another template */}
                </div>
            )}
        </center>
    );
};

export default App;
