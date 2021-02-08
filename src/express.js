
const express = require('express') 
const path = require('path') 
const app = express() 
  
// Static Middleware 
app.use(express.static(path.join(__dirname, 'public'))) 
  
// View Engine Setup 

  
app.listen(8080, function(error){ 
    if(error) throw error 
    console.log("Server created Successfully") 
}) 
