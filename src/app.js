  
const express = require('express');
const app = express();
const path = require("path");


// const authRoutes = require("./routes/auths_routes");
const sendEmail = require("../src/routes/send_mail");
app.use(express.json());


// ..........................end of middlewares.........................
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Setting up the route
// app.use("/api/auths", authRoutes);
// app.use("/", viewRoutes);                 

// app.use('/api/v1/', require('../routes/users/index'));
 app.use("/api/mail", sendEmail);

app.use((err, req, res, next) => {
  console.log("====== consoling error js app.js");
  console.log(err);
  const errStatus = err.statusCode || 500;
  const errors  = err.message;
  const errData = err.Data;
  return res.status(errStatus).json({errors, errData});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}`));