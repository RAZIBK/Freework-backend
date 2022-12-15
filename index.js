const  express  = require("express");
const dotenv=require('dotenv')
const cors = require ('cors')
dotenv.config();    
const dbConnect=require('./config/db/dbconnection');
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const userRoutes = require("./route/users/UserRoutes");
const clientRoutes = require("./route/users/clientRoutes");
const projectRoutes = require("./route/project/ProjectRoutes");
const applicationRoutes = require("./route/applications/applicationRouter");






const app=express();
dbConnect()



app.use(express.json());
app.use(cors());

app.use('/api/user',userRoutes);
app.use('/api/client',clientRoutes);
app.use('/api/project',projectRoutes);
app.use('/api/application',applicationRoutes);

app.use(notFound)
app.use(errorHandler)


const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`server is running at ${PORT}`)); 