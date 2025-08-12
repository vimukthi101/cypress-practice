export class Table{
    bookTable = () => cy.get('[name="BookTable"]').find('tbody > tr')

    getData(): this {
        this.bookTable().each((row)=>{
            cy.log(row.text())
        })
        cy.log('```````````````````````````````````')
        this.bookTable().first().as('firstRow')
        cy.get('@firstRow').then((data)=>{
            cy.log(data.text())
        })
        cy.log('```````````````````````````````````')
        this.bookTable().last().then((data)=>{
            cy.log(data.text())
        })
        cy.log('```````````````````````````````````')
        this.bookTable().eq(3).as('fourthRow')
        cy.get('@fourthRow').then((data)=>{
            cy.log(data.text())
        })
        return this
    }
}