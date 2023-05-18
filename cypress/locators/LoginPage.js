class LoginPage {

    login = {
        "input_user" : "[data-cy='username']",
        "input_password" : "[data-cy='password']",
        "button_submit" : "[data-cy='submit']",
    
        "userName" : "user",
        "password" : "user"
    }


    homePage = {
        "button_folders" : "':nth-child(2) > .mr-2'",
        "buttton_items" : "':nth-child(1) > .mr-2'"
    }



}

module.exports = new LoginPage();