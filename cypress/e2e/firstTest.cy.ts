import {HomePage} from "../pages/homePage.js";
import Base from "../pages/base.js";
import {UploadFiles} from "../pages/uploadFiles.js";
import {Table} from "../pages/table.js";
import {Shadow} from "../pages/shadow.js";
import example from '../fixtures/example.json'

const homePage = new HomePage()
const basePage = new Base()
const uploadFiles = new UploadFiles()
const table = new Table()
const shadow = new Shadow()

describe('Form Tests', () => {
    it('Submit form without data', () => {
        basePage.visitPage()
        homePage.verifyPageTitle().submitForm()
        homePage.verifyResults('Please select both start and end dates.')
    })

    it('Submit form with all data', () => {
        basePage.visitPage()
        homePage.verifyPageTitle().fillForm().submitForm()
        homePage.verifyResults('You selected a range of 20 days.')
    })
})

describe('Upload Tests', () => {
    it('Upload one file', () => {
        basePage.visitPage()
        uploadFiles.uploadSingleFile()
    })

    it('Upload multiple files', () => {
        basePage.visitPage()
        uploadFiles.uploadMultipleFiles()
    })
})

describe('Table Tests', () => {
    it('Get table data', () => {
        basePage.visitPage()
        table.getData()
    })
})

describe('Shadow Tests', () => {
    it('Interact with shadow', () => {
        basePage.visitPage()
        shadow.interactWithElements(example.name)
    })
})