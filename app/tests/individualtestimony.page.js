import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';

class IndividualTestimonyPage {
  constructor() {
    this.pageId = `#${PAGE_IDS.INDIVIDUAL_TESTIMONY}`;
    this.pageSelector = Selector(this.pageId);
  }

  /* Asserts that this page is currently displayed. */
  async isDisplayed() {
    await t.wait(8000).expect(this.pageSelector.exists).ok();
  }
}

export const individualTestimonyPage = new IndividualTestimonyPage();
