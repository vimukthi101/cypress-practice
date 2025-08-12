export class AlertsPage{
    simpleAlert = () => cy.get('#alertBtn')
    confirmationAlert = () => cy.get('#confirmBtn')
    promptAlert = () => cy.get('#promptBtn')
    promptMessage = () => cy.get('#demo')
    hoverButton = () => cy.contains('Point Me')
    hoverContent = () => cy.contains('.dropdown-content')
    inputField = () => cy.get('#field2')
    copyButton = () => cy.contains('Copy Text')
    draggableContent = () => cy.get('#draggable')
    droppableContent = () => cy.get('#droppable')

    handleSimpleAlert(): this {
        this.simpleAlert().click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am an alert box!')
        })
        return this
    }

    handleConfirmationAlert(): this {
        this.confirmationAlert().click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.eq('Press a button!')
            return false
        })
        return this
    }

    handlePromptAlert(): this {
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('vimukthi')
        })
        this.promptAlert().click()
        this.promptMessage().should('have.text','Hello vimukthi! How are you today?')
        return this
    }

    hoverOverButton(): this {
        this.hoverButton().scrollIntoView().trigger('mouseover')
        this.hoverContent().should('be.visible').and('have.text','Laptops')
        return this
    }

    copyContentToNewField(): this {
        this.inputField().should('be.empty')
        this.copyButton().dblclick('top')
        this.inputField().should('have.value','Hello World!')
        return this
    }

    dragAndDrop(): this{
        this.droppableContent().invoke('text').then((text)=>{
            expect(text.trim()).to.eq('Drop here')
        })
        // const dataTransfer = new DataTransfer();
        // this.draggableContent().trigger('dragstart', {dataTransfer})
        // this.droppableContent().trigger('drop', {dataTransfer})
        // this.draggableContent().trigger('dragend')
        this.draggableContent().trigger('mousedown', { which: 1 })
        this.droppableContent().trigger('mousemove', {clientX:200,clientY:0}).trigger('mouseup', { force: true })
        this.droppableContent().invoke('text').then((text)=>{
            expect(text.trim()).to.eq('Dropped!')
        })
        return this
    }
}