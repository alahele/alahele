import { Selector, t } from 'testcafe';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class NavBar {

  /* If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout() {
    const loggedInUser = await Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists;
    if (loggedInUser) {
      await t.click(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`);
      await t.click(`#${COMPONENT_IDS.NAVBAR_SIGN_OUT}`);
    }
  }

  async gotoSignInPage() {
    await this.ensureLogout(t);
    await t.click(`#${COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_IN}`);
  }

  async gotoHomePage() {
    await Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists;
    await t.click(`#${COMPONENT_IDS.NAVBAR_HOME_PAGE}`);
  }

  async gotoBillListPage() {
    await t.click('button.navbar-toggler');
    await Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists;
    await t.click(`#${COMPONENT_IDS.NAVBAR_BILL_LIST}`);
  }

  async gotoHearingListPage() {
    await t.click('button.navbar-toggler');
    await Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists;
    await t.click(`#${COMPONENT_IDS.NAVBAR_HEARING_LIST}`);
  }

  async gotoTestimonyListPage() {
    await t.click('button.navbar-toggler');
    await Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists;
    await t.click(`#${COMPONENT_IDS.NAVBAR_TESTIMONY_LIST}`);
  }

  async gotoCreateTestimonyPage() {
    await t.click('button.navbar-toggler');
    await Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists;
    await t.click(`#${COMPONENT_IDS.NAVBAR_CREATE_TESTIMONY}`);
  }

  /* Check that the specified user is currently logged in. */
  async isLoggedIn(username) {
    const loggedInUser = Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).innerText;
    await t.expect(loggedInUser).eql(username);
  }

  /* Check that someone is logged in, then click items to logout. */
  async logout() {
    await t.expect(Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists).ok();
    await t.click(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_SIGN_OUT}`);
  }

  /* Go to the user page page. */
  async gotoUserProfilePage() {
    await Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_USER_PROFILE}`);
  }

  /* Go to the manage database page. Must be adimin. */
  async gotoManageDatabasePage() {
    await t.expect(Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists).ok();
    await t.click(`#${COMPONENT_IDS.NAVBAR_MANAGE_DROPDOWN}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_MANAGE_DROPDOWN_DATABASE}`);
  }

  /* Go to the list bills page. Must be signed in */
  async gotoBillsListPage() {
    await t.click('button.navbar-toggler');
    await t.expect(Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists).ok();
    await t.click(`#${COMPONENT_IDS.NAVBAR_BILL_LIST}`);
  }
}

export const navBar = new NavBar();
