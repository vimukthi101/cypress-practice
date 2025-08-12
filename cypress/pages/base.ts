export default class Base{
    mainTitle = () => cy.contains('For Selenium, Cypress & Playwright')
    footerLinks = {
        homeLink : () => cy.contains('Home'),
        hiddenElementsLink : () => cy.contains('Hidden Elements & AJAX'),
        downloadFilesLink : () => cy.contains('Download Files')
    }

    visitPage(): this{
        cy.visit('')
        this.mainTitle()
        this.footerLinks.homeLink()
        this.footerLinks.hiddenElementsLink()
        this.footerLinks.downloadFilesLink()
        return this
    }
}