/// <reference types="Cypress" />

import HomePage, { button } from "../locators/HomePage"
import FolderPage from "../locators/FolderPage"
import ItemPage from "../locators/ItemPage"


let nameFolder;
let title;
let idFolder;


describe('Tests', ()=>{


    beforeEach('Web under test', ()=>{

        cy.visit('https://qa-challenge.ensolvers.com/')

        cy.fixture("userData").then((Data)=>

        {   
            cy.login(Data.user.name, Data.user.password)
            cy.contains('Welcome to Ensolvers QA Challenge!').should('be.visible')
        })

    })
    

    it('Test new folder', ()=>{

        cy.get(HomePage.button.folders).click();
        cy.contains('Folders').should('be.visible')
        cy.get(FolderPage.buttons.createFolder).click();
        cy.wait(1000)
        
        nameFolder = "folder" + (Math.floor(Math.random() * 10000) + 1).toString();

        cy.get(FolderPage.Box.txt).type(nameFolder);
        cy.get(FolderPage.Box.txt).should('have.value', nameFolder)
        cy.get(FolderPage.buttons.save).click()
        cy.contains('A new folder is created with identifier').should('be.visible')

        cy.get(FolderPage.Box.message).invoke('text').then((text) => {
            idFolder = parseInt(text.replace(/\D/g, '')).toString();
        });
    })


    it('Test create new item', ()=> {
        cy.get(HomePage.button.items).click();
        cy.contains('To Do Items').should('be.visible');
        cy.get(ItemPage.button.crateNewItem).click();
        cy.wait(1000)
        cy.contains('Create or edit a ToDoItem').should('be.visible');

        title = "title" + (Math.floor(Math.random() * 10000) + 1).toString();

        cy.get(ItemPage.box.title).type(title);
        cy.get(ItemPage.box.title).should('have.value', title)

        cy.get(ItemPage.box.description).type("description");
        cy.get(ItemPage.box.description).should('have.value', 'description')

        cy.get(ItemPage.box.folder).select(idFolder);
        cy.get(ItemPage.box.folder).should('have.value', idFolder)
        
        cy.get(ItemPage.button.save).click();
    })

})