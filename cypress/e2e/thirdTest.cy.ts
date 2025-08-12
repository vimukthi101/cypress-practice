describe('Download Test', {browser: "electron"}, () => {
    it('File Download using intercept', () => {
        cy.intercept('GET', 'https://the-internet.herokuapp.com/download/file.json').as('fileDownload')
        cy.visit('https://the-internet.herokuapp.com/download')
        cy.contains('file.json').click()
        cy.wait('@fileDownload').then((body) => {
            expect(body.response?.statusCode).to.be.eq(200)
        })
    })

    it('File Download using invoke', () => {
        cy.visit('https://the-internet.herokuapp.com/download')
        cy.contains('file.json').invoke('attr', 'href').should('eq', 'download/file.json')
    })

    it('File Download using library', () => {
        cy.downloadFile('https://the-internet.herokuapp.com/download/file.json', './cypress/downloads/', 'downloaded.json')
    })
})

describe('File scenarios', () => {
    it('Read File', () => {
        cy.readFile('cypress/downloads/downloaded.json').then((body)=>{
            cy.log(body)
        })
    })

    it('Write File', () => {
        cy.writeFile('cypress/downloads/new-file.json','{"name":"vimukthi"}',"utf-8")
    })

    it('Fixtures', () => {
        cy.fixture('example.json').then((body)=>{
            cy.log(body.name)
        })
    })
})