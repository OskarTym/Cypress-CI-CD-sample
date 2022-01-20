/// <reference types="cypress" />

export class Elements{

    mainUrl = 'https://poppabet.com/'

    register_btn = '.global_register-btn'


// FULL Registration Form

// ----- Step 1 - ACCOUNT INFORMATION

    left_panel = '.register-background'
    full_reg_form = '.btns-container > :nth-child(1)'
    quick_reg_form = '.btns-container > :nth-child(2)'

    reg_form = '.allFormItems'
    title = '.account-info'
    username_input = ':nth-child(3) > .form_field > .ng-untouched'
    full_email_input = ':nth-child(4) > .form_field > .ng-untouched'
    password_input = ':nth-child(1) > .form_field > .ng-untouched'
    passwordInfo = '.password-info'
    passwordInfoText = 'A password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters, for example #, ?, !.'
    confirmPassword_input = ':nth-child(2) > .form_field > .ng-untouched'
    citizenship_input = '.ng-pristine'

    s1_next_btn = '.reg-step-navigate-buttons'

// ----- Step 2 - regirstration

    firstName_input = ':nth-child(3) > .form_field > .ng-untouched'
    lastName_input = ':nth-child(4) > .form_field > .ng-untouched'
    birthYear_input = '.birthDate_tabs > :nth-child(1) > .custom_dropdown_reg'
    birthMonth_input = '#birth-month'
    birthDay_input = ':nth-child(3) > .ng-untouched'

    gender_dropdown = '.form_field > .select-box > .custom_dropdown_reg'
    country_dropdown = '.begion_tabs > :nth-child(1) > .custom_dropdown_reg'
    city_dropdown = '.begion_tabs > :nth-child(2) > .custom_dropdown_reg'
    
    goback_btn = '.reg-step-navigate-buttons > .reg_item'
    s2_next_btn = '.craft_btn'


// ----- Step 3 - regirstration

    residentialAdrr_input = '.form_field > .ng-untouched'

    mobileCode_dropdown = '.custom_dropdown_reg > .flex_between'
    mobileNum_input = '.mobileData_tabs > .ng-pristine'


    fullAcceptTerms_chechbox = '.reg-checkbox'
    s3RegSubmit_btn = '.craft_btn'

// ----- Confirmation step

    congratulationsMessage = '.congratulations-content'
    congratulationsTitle = '.title'
    congratulationsText = '.text'

    congratulation_btn = '.finalize-btn'


// QUICK Registration Form

    regBy_dropdown = '.custom_dropdown_reg'
    quick_email_input = '.form_field > .ng-pristine'
    currency_select = '.select-box > .ng-untouched'

    quickAcceptTerms_chechbox = '#acceptTerms'
    quick_submit_reg_btn = '.reg-step-navigate-buttons'

    accInfo = '.user-id-info'


}