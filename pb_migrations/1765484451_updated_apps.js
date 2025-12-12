/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_923867626")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "[a-z0-9]{20}",
    "hidden": false,
    "id": "text2038898989",
    "max": 20,
    "min": 0,
    "name": "app_id",
    "pattern": "^[a-z0-9]+$",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_923867626")

  // remove field
  collection.fields.removeById("text2038898989")

  return app.save(collection)
})
