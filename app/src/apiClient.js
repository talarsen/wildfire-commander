export const getIncidents = () => _get("/api/incidents");

export const getOneIncident = (incident_number) =>
  _get(`/api/incident/${incident_number}`);

const _get = async (url) => (await fetch(url)).json();
