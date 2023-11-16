export class HomePage {
    constructor(page) {
        this.page = page

        this.ordersDropdown = page.locator('a:has-text("Orders")')
        this.customerLink = page.locator('a[href="/customer_orders"]')
        this.addCustomerOrderButton = page.locator('.ts-add-button');
        this.searchDropdown = page.getByTitle('Select Here')
        this.customerSelectBerlin = page.locator('label').filter({ hasText: '2C-Möbel Berlin Cramer+Cramer GmbH / Berlin' })
        // this.addressDropdown = page.getByLabel('* Address')
        this.addressDropdown = page.locator('#customer_order_address_id')
        this.addressSelect = page.locator('select[name="customer_order[address_id]"]')
        this.createButton = page.locator('.btn-submit:has-text("Create")')
    }

    goToOrdersCustomer = async () => {
        await this.ordersDropdown.waitFor()
        await this.ordersDropdown.click()
        await this.customerLink.waitFor()
        await this.customerLink.click()
    }

    addCustomerOrder = async () => {
        await this.addCustomerOrderButton.waitFor()
        await this.addCustomerOrderButton.click()
    }

    newCustomerOrder = async () => {
        await this.searchDropdown.waitFor()
        await this.searchDropdown.click()
        await this.customerSelectBerlin.waitFor()
        await this.customerSelectBerlin.click()
        await this.addressDropdown.waitFor()
        await this.addressDropdown.click()
        await this.addressSelect.waitFor()
        await this.addressSelect.selectOption('981')
        await this.createButton.waitFor()
        await this.createButton.click()
    }
}