const fs = require('fs');

fs.writeFile("index.html",`<h1>Hello World</h1>
<p>This is Durgesh Yadav</p>`, (err) =>{
    console.log(err);
})