class Item{

    button = {
        "crateNewItem" : "[data-cy='entityCreateButton']",
        "save" : "[data-cy='entityCreateSaveButton']"
    }

    box = {
        "title" : "[data-cy='title']",
        "description" : "[data-cy='description']",
        "folder" : "[data-cy='folder']"
    }
}

module.exports = new Item();