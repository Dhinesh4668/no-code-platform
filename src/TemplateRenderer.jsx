import React, { useState, useEffect } from "react";

const TemplateRenderer = ({ templateId, formData }) => {
  const [templateHtml, setTemplateHtml] = useState("");

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await fetch(`http://localhost:8080/render-template/1`);
        if (!response.ok) {
          throw new Error("Failed to fetch template");
        }
        const html = await response.text();
        setTemplateHtml(html);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTemplate();
  }, [templateId]);

  const renderTemplateWithData = () => {
    let renderedHtml = templateHtml;
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
        renderedHtml = renderedHtml.replace(regex, formData[key]);
      }
    }
    return renderedHtml;
  };

  return <div dangerouslySetInnerHTML={{ __html: renderTemplateWithData() }} />;
};

export default TemplateRenderer;
