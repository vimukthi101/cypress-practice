namespace Cypress {
    interface Chainable {
        iFrame(locator: string): Chainable<void>;
    }
}