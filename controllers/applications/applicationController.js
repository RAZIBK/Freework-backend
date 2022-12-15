const expressAsyncHandler = require("express-async-handler");
const Application = require("../../model/application.js/application");

const createApplicationCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    let application = new Application({ ...req.body, userId: req.user._id });
    await application.save();
    console.log(application);
    res.json({ application, message: "Application submitted" });
  } catch (error) {
    res.json(error);
  }
});

const singleApplicationCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req.params.id);
  try {
    let application = await Application.find({
      projectId: req.params.id,
    }).populate('userId')
    console.log(application);
    res.json(application);
  } catch (error) {
    res.json(error);
  }
});

const myApplicationCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req.params.id);
  try {
    let application = await Application.find({
      userId: req.user._id,
    })
    console.log(application);
    res.json(application);
  } catch (error) {
    res.json(error);
  }
});
module.exports = {
  createApplicationCtrl,
  singleApplicationCtrl,
  myApplicationCtrl
};
