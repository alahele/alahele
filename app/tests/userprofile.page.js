import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';

class UserProfilePage {
  constructor() {
    this.pageId = `#${PAGE_IDS.USER_PROFILE}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await t.expect(this.pageSelector.exists).ok();
  }

}

export const userProfile = new UserProfilePage();
