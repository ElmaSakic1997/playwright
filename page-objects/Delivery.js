export class Delivery {
    constructor(page) {
        this.page = page
    }

    fillFormDate = async (inputId, value) => {
      await this.page.fill(`input[name="customer_order[${inputId}]"]`, value);
      await this.page.mouse.click(0, 0);
    }

    transformDateFormat = async (dateStr) => {
      // Split the string into week and year
      let [week, year] = dateStr.split(" / ");

      // Remove any leading zeros from the year
      year = year.trim().padStart(4, '20');

      // Return the transformed string
      return `${week.trim()}/${year}`;
    }

    deliveryDetails = async () => {
      // get the value of the current week
      let currentWeekYear = await this.page.$eval('.navbar-right span.font-18-500', el => el.innerText);
      currentWeekYear = await this.transformDateFormat(currentWeekYear);

      await this.fillFormDate('requested_date', currentWeekYear);

      const deliveryDateLocator = this.page.locator('.float-left:has-text("Must be delivered by:") + .float-right.fw-500');
      const deliveryDate = await deliveryDateLocator.textContent();

      await this.fillFormDate('confirmed_date', deliveryDate);
    }
}
