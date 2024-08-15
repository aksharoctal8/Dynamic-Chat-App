import express from 'express';

import 'dotenv/config';
const app = express(); 

const PORT = process.env.PORT; 

app.listen(PORT, (error) => {
    if (error) {
        console.error("Server Error:", error);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});
