/// <reference types="cypress-downloadfile"/>
import {AlertsPage} from "../pages/alertsPage";
import Base from "../pages/base";

const basePage = new Base()
const alertsPage = new AlertsPage()

describe('Window related tests', () => {
    it('Simple alert', () => {
        basePage.visitPage()
        alertsPage.handleSimpleAlert()
    })

    it('Confirmation alert', () => {
        basePage.visitPage()
        alertsPage.handleConfirmationAlert()
    })

    it('Prompt alert', () => {
        basePage.visitPage()
        alertsPage.handlePromptAlert()
    })
})

describe('Other tests', () => {
    it('Hover over button', () => {
        basePage.visitPage()
        alertsPage.hoverOverButton()
    })

    it('Double Click', () => {
        basePage.visitPage()
        alertsPage.copyContentToNewField()
    })

    it('Drag and Drop', () => {
        basePage.visitPage()
        alertsPage.dragAndDrop()
    })

    it('Iframe test', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/iframe-demo/')
        cy.iFrame('#iFrame1').find('.rsw-ce').as('textArea')
        cy.get('@textArea').should('have.text', 'Your content.')
        cy.get('@textArea').clear().type('hello vimukthi saranga')
        cy.get('@textArea').should('have.text', 'hello vimukthi saranga')
    })
})