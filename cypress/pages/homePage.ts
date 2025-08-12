export class HomePage{
    pageTitle = () => cy.get('.post-title > a')
    nameInputField = () => cy.get('#name')
    emailInputField = () => cy.get('#email')
    phoneInputField = () => cy.get('#phone')
    addressInputField = () => cy.get('#textarea')
    genderRadioButton = () => cy.get('[type="radio"]')
    daysCheckBox = () => cy.get('[type="checkbox"]')
    countryDropDown = () => cy.get('#country')
    colorsDropDown = () => cy.get('#colors')
    animalsDropDown = () => cy.get('#animals')
    datePickerOne = () => cy.get('#datepicker')
    datePickerTwo = () => cy.get('#txtDate')
    datePickerRangeStart = () => cy.get('#start-date')
    datePickerRangeEnd = () => cy.get('#end-date')
    submitButton = () => cy.get('.submit-btn')
    resultSection = () => cy.get('#result')

    verifyPageTitle(): this{
        this.pageTitle().should('have.text','GUI Elements')
        return this
    }

    fillForm(): this{
        this.nameInputField().type('vimukthi')
        this.emailInputField().type('v@g.com')
        this.phoneInputField().type('0711853675')
        this.addressInputField().type('202,al-jathimiya')
        this.genderRadioButton().check('male')
        this.daysCheckBox().check('thursday')
        this.countryDropDown().select('France')
        this.colorsDropDown().select('green')
        this.animalsDropDown().select(3)//dog
        this.datePickerOne().type('03/10/2024')
        this.datePickerTwo().invoke('removeAttr','readonly')
        this.datePickerTwo().type('04/20/2025',{force:true})
        this.datePickerRangeStart().type('2024-05-20')
        this.datePickerRangeEnd().type('2024-06-09')
        return this
    }

    submitForm(): this{
        this.submitButton().click()
        return this
    }

    verifyResults(text:string): this{
        this.resultSection().should('have.text',text)
        return this
    }
}