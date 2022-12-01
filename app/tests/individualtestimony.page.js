import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class IndividualTestimonyPage {
  constructor() {
    this.pageId = `#${PAGE_IDS.INDIVIDUAL_TESTIMONY}`;
    this.pageSelector = Selector(this.pageId);
  }

  /* Asserts that this page is currently displayed. */
  async isDisplayed() {
    await t.wait(2000).expect(this.pageSelector.exists).ok();
  }

  async gotoIndividualBillPage() {
    await t.click(`#${COMPONENT_IDS.INDIVIDUAL_TESTIMONY_BUTTON}`);
  }
}

export const individualTestimonyPage = new IndividualTestimonyPage();
