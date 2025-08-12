describe('API Tests', () => {
    it('Send requests 1', () => {
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'get',
        }).then((body)=>{
            cy.log(JSON.stringify(body))
            cy.log('`````````````````````````````````')
            cy.log(JSON.stringify(body.body))
            cy.log('`````````````````````````````````')
            cy.log(body.body.data.email)
        })
    })

    it('Send requests 2', () => {
        cy.request('POST','https://reqres.in/api/users','"name": "morpheus","job": "leader"}')
            .its('status').should('eq',401)
    })

    it('Send requests 3', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                name: 'morpheus',
                job: 'leader'
            },
            failOnStatusCode: false
        }).its('body')
            .should('have.property', 'error', 'Missing API key');
    });

    it('Send requests 4', () => {
        cy.intercept({
            url:'https://api.hubspot.com/livechat-public/v1/message/public',
            method:'GET'
        },{fixture:'example.json'}).as('myStub')
        cy.visit('https://docs.cypress.io/api/commands/intercept#StaticResponse-objects')
        cy.wait('@myStub').then((body)=>{
            cy.log(JSON.stringify(body))
        })
    })
})

describe('Cy Task',()=>{
    it('Cy.Task()', ()=>{
        cy.task('myLog','vimukthi').then((mydata)=>{
            cy.log(mydata)
        })
    })

    it('Cy.exec()', ()=>{
        cy.exec('npx cypress -v').then((msg)=>{
            cy.log(JSON.stringify(msg.stdout))
        })
    })
})