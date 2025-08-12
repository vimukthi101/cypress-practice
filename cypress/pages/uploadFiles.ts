export class UploadFiles {
    uploadFileOne = () => cy.get('#singleFileInput')
    uploadFileTwo = () => cy.get('#multipleFilesInput')
    uploadButtonOne = () => cy.contains('Upload Single File')
    uploadButtonTwo = () => cy.contains('Upload Multiple Files')
    singleFileStatus = () => cy.get('#singleFileStatus')
    multipleFileStatus = () => cy.get('#multipleFilesStatus')

    uploadSingleFile(): this {
        this.uploadFileOne().selectFile('./cypress/fixtures/example.json')
        this.uploadButtonOne().click()
        this.singleFileStatus()
            .should('have.text', 'Single file selected: example.json, Size: 155 bytes, Type: application/json')
        return this
    }

    uploadMultipleFiles(): this {
        this.uploadFileTwo().selectFile(['./cypress/fixtures/example.json', './cypress/fixtures/example-two.json'])
        this.uploadButtonTwo().click()
        this.multipleFileStatus()
            .should('contain', 'Multiple files selected')
            .and('contain', 'example.json, Size: 155 bytes, Type: application/json')
            .and('contain', 'example-two.json, Size: 155 bytes, Type: application/json')
        return this
    }
}