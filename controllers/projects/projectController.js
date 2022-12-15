const expressAsyncHandler = require("express-async-handler");
const Project = require("../../model/project/project");



  const createProjectCtrl = expressAsyncHandler(async (req, res) => {
    console.log(req.user._id);
   try {
      let newProject=new Project({...req.body,userId:req.user._id})
      await newProject.save()
    res.json({message: "New Project added", success: true,newProject})
   } catch (error) {
    res.json(error)
   }
  });
  
  const allProjectCtrl = expressAsyncHandler(async (req, res) => {
    try {
       const allProjects=await Project.find().populate('userId')
     res.json(allProjects)
    } catch (error) {
     res.json(error)
    }
   });
   
   const singleProjectCtrl = expressAsyncHandler(async (req, res) => {
    try {
       const singleUserProject=await Project.find({userId:req.user._id}).populate('userId')
     res.json(singleUserProject)
    } catch (error) {
     res.json(error)
    }
   });
 




module.exports = {
  createProjectCtrl,
  allProjectCtrl,
  singleProjectCtrl
};
