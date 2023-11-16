export class LoginPage {
    constructor(page) {
        this.page = page

        this.emailInput = page.locator('#user_email')
        this.passwordInput = page.locator('#user_password')
        this.loginButton = page.locator('.btn.btn-submit.no-shadow.pull-right.m-t-sm')
        this.ordersDropdown = page.locator('a:has-text("Orders")')

    }

    visit = async () => {
        await this.page.goto("https://staging.vorta.io/")
    }

    fillLoginDetails = async (loginDetails) => {
        await this.emailInput.waitFor()
        await this.emailInput.fill(loginDetails.email)
        await this.passwordInput.waitFor()
        await this.passwordInput.fill(loginDetails.password)
        await this.loginButton.waitFor()
        await this.loginButton.click()
        await this.page.waitForURL("https://staging.vorta.io/")
    }
}