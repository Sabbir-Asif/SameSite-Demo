const express = require("express");
const cors = require("cors");
const path = require("path");

const port = 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.setHeader("Set-Cookie", [
        "cookie-8080=1; Max-Age=3600; SameSite=Strict; Secure"
    ])
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/docs', (req, res) => {
    res.setHeader("Set-Cookie", [
        "path_test = sabbir; Max-Age=3600; path=/docs"
    ])
    res.send(`cookies recieved= ${req.headers.cookie}`);
});
app.get('/dev', (req, res) => {
    
    res.send(`cookies recieved= ${req.headers.cookie}`);
})

app.get('/docs/test', (req, res) => {
    res.send(`cookies recieved= ${req.headers.cookie}`);
})




app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
