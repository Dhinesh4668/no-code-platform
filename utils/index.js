const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors);

const templates = [
  {
    id: 1,
    name: "Simple Design Template",
    imageUrl: "https://example.com/image.jpg",
    description:
      "This is a simple design template with a title, image, and description.",
  },
];

app.set("view engine", ejs);

app.set("views", path.join(__dirname, "views"));

app.get("/render-template/:id", (req, res) => {
  const templateId = parseInt(req.params.id);
  const template = templates.find((template) => template.id === templateId);

  if (!template) {
    res.status(404).send("Template not found");
    return;
  }

  // Sample form data
  const formData = {
    name: "John Doe",
    email: "john@example.com",
  };

  res.render("template", { template, formData }); // Pass formData to the template
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
