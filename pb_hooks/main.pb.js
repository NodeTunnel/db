/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/app-exists/{appId}", (e) => {
  const RELAY_TOKEN = $os.getenv("RELAY_TOKEN");

  const token = e.request.header.get("X-Relay-Token");
  if (!RELAY_TOKEN || token !== RELAY_TOKEN) {
    return e.json(401, { error: "unauthorized" });
  }

  const appId = e.request.pathValue("appId");

  try {
    $app.findRecordById("apps", appId);
    return e.json(200, {});
  } catch {
    return e.json(404, {});
  }
});
