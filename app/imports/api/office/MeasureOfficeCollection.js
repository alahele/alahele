import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';

export const measureOfficePublications = {
  measureOffices: 'measureOffices',
};

class MeasureOfficeCollection extends BaseCollection {
  constructor() {
    super('MeasureOffice', new SimpleSchema({
      measureID: String,
      officeID: String,
    }));
  }

  /**
   * Default implementation of assertValidRoleForMethod. Asserts that userId is logged in as an Admin or Advisor.
   * This is used in the define, update, and removeIt Meteor methods associated with each class.
   * @param userId The userId of the logged in user. Can be null or undefined
   * @throws { Meteor.Error } If there is no logged in user, or the user is not an Admin or Advisor.
   */
  assertValidRoleForMethod(userId) {
    this.assertRole(userId, [ROLE.ADMIN, ROLE.USER]);
  }

  define({ measureID, officeID }) {
    // UNIQUE (year, measureType, measureNumber, notice)
    if (this.isDefined({ measureID, officeID })) {
      return this.findDoc({ measureID, officeID })._id;
    }
    const docID = this._collection.insert({
      measureID,
      officeID,
    });
    return docID;
  }

  update(docID, {
    measureID, officeID,
  }) {
    const updateData = {};

    if (measureID) {
      updateData.measureID = measureID;
    }
    if (officeID) {
      updateData.officeID = officeID;
    }
    this._collection.update(docID, { $set: updateData });
  }

  /**
   * Default publication method for entities.
   * It publishes the entire collection for admin and just the stuff associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      // get the MeasureOfficeCollection instance.
      const instance = this;
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(measureOfficePublications.measureOffices, function publish() {
        if (this.userId) {
          return instance._collection.find({});
        }
        return this.ready();
      });
    }
  }

  subscribeMeasureOffices() {
    if (Meteor.isClient) {
      return Meteor.subscribe(measureOfficePublications.measureOffices);
    }
    return null;
  }

  /**
   * Returns an object representing the definition of docID in a format appropriate to the restoreOne or define function.
   * @param docID
   * @returns {{noticePdfUrl: *, measureNumber: *, code: *, committee: *, year: (*|moment.numberlike|((y: number) => moment.Moment)|(() => number)|number|"numeric"|"2-digit"|string),
   * description: *, room: *, lastUpdated: *, datetime: *, measureRelativeUrl: *, noticeUrl: *, measureType: *, timestamp: *, notice: *}}
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const measureID = doc.measureID;
    const officeID = doc.officeID;
    return { measureID, officeID };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const MeasureOffices = new MeasureOfficeCollection();
