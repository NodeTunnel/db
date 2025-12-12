/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3085411453")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = \"8ywjvojahnprezi\"",
    "deleteRule": "@request.auth.id = \"8ywjvojahnprezi\"",
    "listRule": "",
    "updateRule": "@request.auth.id = \"8ywjvojahnprezi\"",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3085411453")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
