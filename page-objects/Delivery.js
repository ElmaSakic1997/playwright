export class Delivery {
    constructor(page) {
        this.page = page

        this.requestedWeekField = page.getByLabel('* Requested week')
    }

    deliveryDetails = async () => {
        await this.requestedWeekField.waitFor()
        await this.requestedWeekField.click()
    }
}