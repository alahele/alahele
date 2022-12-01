import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class IndividualBillPage {
  constructor() {
    this.pageId = `#${PAGE_IDS.INDIVIDUAL_BILL}`;
    this.pageSelector = Selector(this.pageId);
  }

  /* Asserts that this page is currently displayed. */
  async isDisplayed() {
    await t.wait(5000).expect(this.pageSelector.exists).ok();
  }

  async gotoIndividualTestimonyPage() {
    await t.click(`#${COMPONENT_IDS.INDIVIDUAL_TESTIMONY_BUTTON}`);
  }
}

export const individualBillPage = new IndividualBillPage();
