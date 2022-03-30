const { driver } = require('../../webdriverConfigs/chromeDriver');
const { DriverUtils } = require('../../driverUtils/driverUtils');

class BaseElement {
  constructor(locator) {
    this.locator = locator;
  }

  findElement() {
    return driver.findElement(this.locator);
  }

  textInput(inputData) {
    this.findElement().sendKeys(inputData);
  }

  isSelected() {
    return this.findElement().isSelected();
  }

  getElementText() {
    return this.findElement().getText();
  }

  click() {
    DriverUtils.wait(this.locator);
    return this.findElement(this.locator).click();
  }

  clickAction() {
    DriverUtils.wait(this.locator);
    return driver.actions().click(this.findElement()).perform();
  }

  hoverAction() {
    DriverUtils.wait(this.locator);
    return driver.actions().move({ duration: 5000, origin: this.findElement() }).perform();
  }

  elementFindAndClickJavaScript() {
    DriverUtils.wait(this.locator);
    return driver.executeScript(`document.querySelector("${this.locator[Object.keys(this.locator)[0]]}").click()`);
  }
}

module.exports = { BaseElement };
