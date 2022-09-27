import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';

class IndividualBillPage {
  constructor() {
    this.pageId = `#${PAGE_IDS.INDIVIDUAL_BILL}`;
    this.pageSelector = Selector(this.pageId);
  }

  /* Asserts that this page is currently displayed. */
  async isDisplayed() {
    await t.expect(this.pageSelector.exists).ok();
  }
}

export const individualBillPage = new IndividualBillPage();
