import express from "express";

import * as db from "./db.mjs";

const incidentRouter = express.Router();

incidentRouter.get("/", async (request, response) => {
  const incidents = await db.getIncidents();
  response.json(incidents);
});

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

export default incidentRouter;
