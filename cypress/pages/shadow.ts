export class Shadow{
    shadowRoot = () => cy.get('#shadow_host')

    getShadowRoot(){
        return this.shadowRoot().scrollIntoView().shadow()
    }

    interactWithElements(text:string): this {
        this.getShadowRoot().find('[type="text"]').type(text)
        this.getShadowRoot().find('[type="checkbox"]').check()
        this.getShadowRoot().find('[type="file"]').selectFile('./cypress/fixtures/example-two.json')
        return this
    }
}