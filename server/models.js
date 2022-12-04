const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});
const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: { type: String, enum: ["Not Started", "In Progress", "Done"] },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
});

const Client = mongoose.model("Client", ClientSchema);
const Project = mongoose.model("Project", ProjectSchema);

module.exports = { Client, Project };
