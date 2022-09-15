import { Selector, t } from 'testcafe';
import { /* manageDatabasePage, */ signOutPage } from './simple.page';
import { landingPage } from './landing.page';
import { signInPage } from './signin.page';
import { navBar } from './navbar.component';
import { billListPage } from './billlist.page.js';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';
import { testimonyListPage } from './testimonylist.page';
import { userProfile } from './userprofile.page';
import { individualBillPage } from './individualbill.page';
import { createTestimonyPage } from './createtestimony.page';
/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const adminCredentials = { username: 'admin@foo.com', password: 'changeme' };

fixture('meteor-application-template-production localhost test with default db')
  .page('http://localhost:3000');

test('Test that billslist page show up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.gotoBillsListPage();
  await billListPage.isDisplayed();
});

test('Test that testimony list page shows up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.gotoTestimonyListPage();
  await testimonyListPage.isDisplayed();
});

test('Test that landing page shows up', async () => {
  await landingPage.isDisplayed();
});

test('Test that signin and signout work', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that navbar options route correctly when logged in', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.gotoHomePage();
  await navBar.gotoHearingListPage();
  await navBar.gotoBillListPage();
  await navBar.gotoTestimonyListPage();
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that admin page show up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(adminCredentials.username);
  await navBar.logout();
});

test('Test that hearing list page shows up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.gotoHearingListPage();
  await t.expect(Selector(`#${PAGE_IDS.HEARING_LIST}`).exists).ok();
  await navBar.logout();
});

test('Test that user profile page shows up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.gotoUserProfilePage();
  await userProfile.isDisplayed();
});

test('Test that individual bill page show up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.gotoBillsListPage();
  await billListPage.gotoIndividualBillPage();
  await individualBillPage.isDisplayed();
});

test('Test that create testimony page show up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.gotoCreateTestimonyPage();
  await createTestimonyPage.isDisplayed();
});
