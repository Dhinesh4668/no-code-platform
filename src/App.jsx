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
    const [link, setLink] = useState('')

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
                <label>text color: {''}</label>
                <input type="color" value={textColor} onChange={(e) => handleColorChange(e.target.value)} /><br />
                <lable>backgroundColor : {' '}</lable>
                <input type="color" value={backgroundColor} onChange={(e) => handleBackgroundChange(e.target.value)} /><br />
                <label>event banner: {' '}</label>
                <input type="file" placeholder="event banner" accept="image/*" onChange={handleEventBackgroundChange} /><br />
                <select value={selectedTemplate} onChange={(e) => handleTemplateChange(e.target.value)}><br />
                    <option value="default">Default Template</option>
                    <option value="another">Another Template</option>
                    <option value="another">Another Template</option>
                    <option value="another">Another Template</option>
                    <option value="another">Another Template</option>
                    <option value="another">Another Template</option>
                    <option value="another">Another Template</option>
                    <option value="another">Another Template</option>
                    <option value="another">Another Template</option>
                </select>

                <form onSubmit={handleDataSubmit}>
                    <input type="text" name="eventTitle" placeholder="Event Title" />
                    <br />
                    <input type="text" name="des" placeholder="Event Description" />
                    <br />
                    <input type="date" name="event date" onChange={(e) => setDate(e.target.value)} />
                    <br />
                    <input type="text" name="eventType" placeholder="Event Type" />
                    <br />
                    <input type="file" accept="image/*" multiple onChange={handleImageChange} />
                    <br />
                    <input type='url' value={link} placeholder='event link' onChange={(e)=> setLink(e.target.value)} /><br />
                    {socialLinks.map((link, index) => (
                        <input key={index} type="text" value={link} onChange={(e) => handleSocialLinkChange(index, e.target.value)} placeholder="Social Link" />
                    ))}
                    <button type="button" onClick={() => setSocialLinks([...socialLinks, ''])}>Add Social Link</button>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>

            {selectedTemplate && (
                <div style={{ color: textColor, backgroundColor: backgroundColor }}>
                    <Template
                        title={eventTitle}
                        link={link}
                        images={images}
                        description={des}
                        date={date}
                        eventType={eventType}
                        socials={socialLinks.filter(link => link.trim() !== '')}
                        linkTitle="Lean More"
                        eventBackground={eventBackground}
                    />
                </div>
            )}

            {selectedTemplate === 'another' && (
                <div style={{ color: textColor, backgroundColor: backgroundColor }}>
                </div>
            )}
        </center>
    );
};

export default App;
