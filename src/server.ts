import express from "express";


const app = express();

app.get("/test-get", (request, response) => {
    return response.send("HelloWorld GET");
});

app.post("/test-post", (request, response) => {
    return response.send("HelloWorld POST");
});

app.listen(3000, () => console.log("Server is running"));