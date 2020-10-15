const express = require("express");

(async () => {
    const app = express();
    app.get('/', (req, res) => res.send("Hello World, Initial start of the server."));
    
    app.listen(3000, () => {
        console.log("Server has started.");
    })

})();