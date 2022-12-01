import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class CreateTestimonyPage {
  constructor() {
    this.pageId = `#${PAGE_IDS.CREATE_TESTIMONY}`;
    this.pageSelector = Selector(this.pageId);
  }

  /* Asserts that this page is currently displayed. */
  async isDisplayed() {
    await t.wait(2000).expect(this.pageSelector.exists).ok();
  }

  /* Asserts that the selected bill is shown. */
  async selectBill() {
    await t.click(`#${COMPONENT_IDS.CREATE_TESTIMONY_CHOOSE_FROM_BILLS_BUTTON}`);
    await t.click(`#${COMPONENT_IDS.CREATE_TESTIMONY_SELECT_BILL_BUTTON}`);
    await Selector(`#${COMPONENT_IDS.CREATE_TESTIMONY_BILL}`).exists;
  }

  /* Submit testimony */
  async submitTestimony() {
    await t.click(`#${COMPONENT_IDS.CREATE_TESTIMONY_FORM_SUBMIT}`);

  }
}

export const createTestimonyPage = new CreateTestimonyPage();
