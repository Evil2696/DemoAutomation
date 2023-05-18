class FolderPage{

    buttons = {
        "createFolder" : "[data-cy='entityCreateButton']",
        "save" : "[data-cy='entityCreateSaveButton']"
    }

    Box={
        "txt" : "[data-cy='name']",
        "message" : ".Toastify__toast-body"
    }

}

module.exports = new FolderPage();