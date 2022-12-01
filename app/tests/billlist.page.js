import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class BillListPage {
  constructor() {
    this.pageId = `#${PAGE_IDS.BILL_LIST}`;
    this.pageSelector = Selector(this.pageId);
  }

  /* Asserts that this page is currently displayed. */
  async isDisplayed() {
    // From https://testcafe.io/documentation/402803/recipes/best-practices/create-helpers
    // Note that this file imports t (the test controller) from the testcafe module. You don’t need to pass t to helper functions because TestCafe can resolve the current test context and provide the correct test controller instance.
    await t.wait(5000).expect(this.pageSelector.exists).ok();
  }

  async gotoIndividualBillPage() {
    await t.click(`#${COMPONENT_IDS.INDIVIDUAL_BILL_BUTTON}`);
  }
}

export const billListPage = new BillListPage();
