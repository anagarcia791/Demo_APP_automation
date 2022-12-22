const CommonActions = require("../../helpers/CommonActions");
const Utils = require("../../helpers/Utils");

/**
 * Native Dropdown Class
 */
class NativeDropDown {
  /**
   * Mobile elements
   */
  get dropDownComponent() {
    return $("android.widget.ListView");
  }

  get dropDownOptionsList() {
    return $$("android.widget.CheckedTextView");
  }

  /**
   * Methods
   */
  async getDropdownListSize() {
    return (await this.dropDownOptionsList.length) - 1;
  }

  async getDropDownOptionsTextList() {
    const optionsList = [];
    await this.dropDownOptionsList.forEach(async (element) => {
      const text = await element.getText();
      optionsList.push(text);
    });
    optionsList.shift();
    return optionsList;
  }

  async getOptionToSelectRandomly() {
    return Utils.getRandomNumber(await this.getDropdownListSize());
  }

  async selectListOption(optionToSelect) {
    await CommonActions.doClickOn(this.dropDownOptionsList[optionToSelect]);
  }

  checkOptionSelectedIndex(dropDownOptionsTextList, text) {
    return dropDownOptionsTextList.indexOf(text);
  }
}

module.exports = new NativeDropDown();
