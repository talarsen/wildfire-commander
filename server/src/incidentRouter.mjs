import express from "express";

import * as db from "./db.mjs";

const incidentRouter = express.Router();
//https://hostname/api/incidents/
//on line 8 the / is the end of incidents
incidentRouter.get("/", async (request, response) => {
  const incidents = await db.getIncidents();
  response.json(incidents);
});
//get one incident
//not much different from get all but specify params in route.
incidentRouter.get("/:incident_number", async (req, res) => {
  try {
    console.log("ID:", req.params.incident_number);
    const incident = await db.getOneIncident(req.params.incident_number);
    res.json(incident);
  } catch (err) {
    console.error(err.message);
  }
});

incidentRouter.use(express.json());
// incidentRouter.post("/", async (request, response) => {
//   const task = await db.addTask(request.body.name);
//   response.status(201).json(task);
// });

export default incidentRouter;
