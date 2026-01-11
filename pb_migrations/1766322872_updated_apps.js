/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_923867626")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id = dev.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_923867626")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id = dev.id || @request.auth.id = \"8ywjvojahnprezi\""
  }, collection)

  return app.save(collection)
})
