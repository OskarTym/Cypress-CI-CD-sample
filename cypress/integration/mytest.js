/// <reference types="cypress" />


import {
    Elements
} from "../support/selectors"

describe('Registration process [FULL + QUICK]', () => {

    // pe -> page element
    const pe = new Elements()

    var uniqueId, uniqueEmail, firstName, lastName

    const uniqueSeed = Date.now().toString();
    const getUniqueId = () => Cypress._.uniqueId(uniqueSeed);
    const pass = 'Qwerty12345'

    function GenerateUser() {
         uniqueId = getUniqueId();
         uniqueEmail = uniqueId + '@gmail.com'

         firstName = 'FN-' + uniqueId
         lastName = 'LN-' + uniqueId
    }

    function saveFullRegData(uniqueId, uniqueEmail, pass, firstName, lastName) {
        cy.writeFile('cypress/fixtures/fullRegData.txt',

            '-----------------------------------\n' +
            'username:   ' + uniqueId + '\n' +
            'email:      ' + uniqueEmail + '\n' +
            'password:   ' + pass + '\n' +
            'first name: ' + firstName + '\n' +
            'last name:  ' + lastName + '\n' +
            '\n   -> User Successfully Registered!\n',

            {
                flag: 'a+'
            })
    }

    function saveQuickRegData(uniqueEmail) {
        cy.writeFile('cypress/fixtures/quickRegData.txt',

            '-----------------------------------\n' +
            'email:      ' + uniqueEmail + '\n' +
            '\n   -> User Successfully Registered!\n',

            {
                flag: 'a+'
            })
    }

    beforeEach(() => {
        cy
            .viewport(1280, 1080)
            .visit(pe.mainUrl)
            .clearLocalStorage()
    })

    it('FULL Successful Registration', () => {

        GenerateUser()

        cy.get(pe.register_btn).click()

        // ----- Step 1 - ACCOUNT INFORMATION

        cy.get(pe.full_reg_form).should('have.class', 'active')

        cy.get(pe.title).should('have.text', 'ACCOUNT INFORMATION')
        cy.get(pe.passwordInfo).should('contain.text', pe.passwordInfoText)

        cy.get(pe.username_input).type('usn' + uniqueId)
        cy.get(pe.full_email_input).type(uniqueEmail)
        cy.get(pe.password_input).type(pass)
        cy.get(pe.confirmPassword_input).type(pass)
        cy.get(pe.citizenship_input).type('UA')

        cy.get(pe.s1_next_btn).click()

        // ----- Step 2 - PERSONAL DETAILS

        cy.get(pe.title).should('have.text', 'PERSONAL DETAILS')

        cy.get(pe.firstName_input).type('FN-' + uniqueId)
        cy.get(pe.lastName_input).type('LN-' + uniqueId)

        cy.get(pe.birthYear_input).select('2000')
        cy.get(pe.birthMonth_input).select('January')
        cy.get(pe.birthDay_input).select('1')

        cy.get(pe.gender_dropdown).select('1')
        cy.get(pe.country_dropdown).select('Ukraine')
        cy.get(pe.city_dropdown).select('Lviv')

        cy.get(pe.s2_next_btn).click()


        // ----- Step 3 - CONTACT DETAILS

        cy.get(pe.title).should('have.text', 'CONTACT DETAILS')
        cy.get(pe.s3RegSubmit_btn).should('have.class', 'not_active')

        cy.get(pe.fullAcceptTerms_chechbox).click()

        cy.get(pe.s3RegSubmit_btn).click()


        // ----- Confirmation step

        cy
            .get(pe.congratulationsTitle)
            .should('contain.text', 'Congratulations, You have successfully registered!')
        cy
            .get(pe.congratulationsText)
            .should('contain.text', 'InPlayBet offers a range of cool features and promotions to Verified users, which is a quick and Fast process from your account!')

        cy.get('.finalize-btn').click()
        // Saving user data to the file -> fixture/fullRegData.txt
        saveFullRegData(uniqueId, uniqueEmail, pass, firstName, lastName)

    })

    it('QUICK Successful Registration By Email', () => {

        GenerateUser()

        cy.get(pe.register_btn).click()
        cy.get(pe.quick_reg_form).click()
        cy.get(pe.quick_reg_form).should('have.class', 'active')

        cy.get(pe.quick_email_input).type(uniqueEmail)
        cy.get(pe.quickAcceptTerms_chechbox).click()
        cy.get(pe.quick_submit_reg_btn).click()
        cy.get(pe.accInfo).should('be.visible')

        // Saving user data to the file -> fixture/quickRegData.txt
        saveQuickRegData(uniqueEmail)

    })

    it('Unsuccessful registration', () => {

        // No cases for unsuccessful registration 
        // because there are no validation for inputs
        // so we can sign up with any data with only submitting
        // Terms & Conditions and Privacy Policy

        assert.isOk('everything', 'Everything is ok')
    })

})