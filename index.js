const express = require('express');
const app = express();
const PORT = 3000;

// Middleware phục vụ file tĩnh trong thư mục 'public'
app.use(express.static('public'));

// Đường dẫn chính (Home)
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #555;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to My Test Project</h1>
            <p>This is a simple Node.js application with a single Home page.</p>
        </body>
        </html>
    `);
});

// Lắng nghe cổng
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
