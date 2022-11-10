import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import BaseProfileCollection from './BaseProfileCollection';
import { ROLE } from '../role/Role';
import { Users } from './UserCollection';

class UserProfileCollection extends BaseProfileCollection {
  constructor() {
    super('UserProfile', new SimpleSchema({
      email: String,
      role: String,
      firstName: String,
      lastName: String,
      phone: { type: String, defaultValue: 'N/A' },
      img: { type: String, defaultValue: 'https://www.nicepng.com/png/detail/115-1150821_default-avatar-comments-sign-in-icon-png.png' },
      office: { type: String, defaultValue: 'N/A' },
      testimonyRole: { type: String, defaultValue: 'N/A' },
      task: { type: String, defaultValue: 'N/A' },
    }));
  }

  /**
     * Defines the profile associated with an User and the associated Meteor account.
     * @param email The email associated with this profile. Will be the username.
     * @param password The password for this user.
     * @param firstName The first name.
     * @param lastName The last name..
     * @param phone The phone number of the user
     * @param img The profile picture of the user
     * @param office The office the user belongs in.
     * @param testimonyRole The role user has regarding testimonies.
     * @param task Responsibilities of the user.
     */
  define({ email, firstName, lastName, password, phone, img, office, testimonyRole, task }) {
    if (Meteor.isServer) {
      const username = email;
      const user = this.findOne({ email, firstName, lastName });
      if (!user) {
        const role = ROLE.USER;
        const userID = Users.define({ username, email, role, password });
        const profileID = this._collection.insert({ email, firstName, lastName, userID, role, phone, img, office, testimonyRole, task });
        this._collection.update(profileID, { $set: { userID } });
        return profileID;
      }
      return user._id;
    }
    return undefined;
  }

  /**
     * Updates the UserProfile. You cannot change the email or role.
     * @param docID the id of the UserProfile
     * @param firstName new first name (optional).
     * @param lastName new last name (optional).
     */
  update(docID, { firstName, lastName, role, phone, img, office, testimonyRole, task }) {
    this.assertDefined(docID);
    const updateData = {};
    if (firstName) {
      updateData.firstName = firstName;
    }
    if (lastName) {
      updateData.lastName = lastName;
    }
    if (role) {
      updateData.role = role;
    }
    if (phone) {
      updateData.phone = phone;
    }
    if (img) {
      updateData.img = img;
    }
    if (office) {
      updateData.office = office;
    }
    if (testimonyRole) {
      updateData.testimonyRole = testimonyRole;
    }
    if (task) {
      updateData.task = task;
    }
    this._collection.update(docID, { $set: updateData });
  }

  /**
     * Removes this profile, given its profile ID.
     * Also removes this user from Meteor Accounts.
     * @param profileID The ID for this profile object.
     */
  removeIt(profileID) {
    if (this.isDefined(profileID)) {
      return super.removeIt(profileID);
    }
    return null;
  }

  /**
     * TODO CAM: Update this documentation since we want to be able to sign up new users.
     * Implementation of assertValidRoleForMethod. Asserts that userId is logged in as an Admin or User.
     * This is used in the define, update, and removeIt Meteor methods associated with each class.
     * @throws { Meteor.Error } If there is no logged in user, or the user is not an Admin or User.
     */
  assertValidRoleForMethod() {
    // this.assertRole(userId, [ROLE.ADMIN, ROLE.USER]);
    return true;
  }

  /**
     * Returns an array of strings, each one representing an integrity problem with this collection.
     * Returns an empty array if no problems were found.
     * Checks the profile common fields and the role..
     * @returns {Array} A (possibly empty) array of strings indicating integrity issues.
     */
  checkIntegrity() {
    const problems = [];
    this.find().forEach((doc) => {
      if (doc.role !== ROLE.User) {
        problems.push(`UserProfile instance does not have ROLE.USER: ${doc}`);
      }
    });
    return problems;
  }

  /**
     * Returns an object representing the UserProfile docID in a format acceptable to define().
     * @param docID The docID of a UserProfile
     * @returns { Object } An object representing the definition of docID.
     */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const email = doc.email;
    const firstName = doc.firstName;
    const lastName = doc.lastName;
    const role = doc.role;
    const phone = doc.phone;
    const img = doc.img;
    const office = doc.office;
    const testimonyRole = doc.testimonyRole;
    const task = doc.task;
    return { email, firstName, lastName, role, phone, img, office, testimonyRole, task };
  }
}

/**
 * Profides the singleton instance of this class to all other entities.
 * @type {UserProfileCollection}
 */
export const UserProfiles = new UserProfileCollection();
