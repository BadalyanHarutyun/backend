require("dotenv").config()

const express = require("express");
const cors = require("cors")
const app = express();

const adminLoginRoute = require("./routes/adminLoginRoute");
const adminCarBrandRoute = require("./routes/carBrandRoute");
const admincarModelRoute = require("./routes/carModelRoute");
const adminCarRoute = require("./routes/carRoute");
const adminRoute = require("./routes/adminRoute");
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1",adminRoute );
app.use("/api/v1",adminLoginRoute );
app.use("/api/v1",adminCarBrandRoute );
app.use("/api/v1",admincarModelRoute);
app.use("/api/v1",adminCarRoute);
app.use((err, req, res, next) => {
    if(err) {
      console.log("global err middleware",err)
        res.send(err)
    }
  })

app.listen(PORT, () => console.log(`app listen Port ${PORT}`));