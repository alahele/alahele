import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';
import { isValidOfficeType } from '../legislature/officeTypes';

export const officePublications = {
  offices: 'offices',
  officesAdmin: 'officesAdmin', // not sure if we need this.
};

class OfficeCollection extends BaseCollection {
  constructor() {
    super('Offices', new SimpleSchema({
      officeName: String,
    }));
  }

  define({ officeName }) {
    // UNIQUE (year, measureType, measureNumber, notice)
    if (this.isDefined({ officeName })) {
      return this.findDoc({ officeName })._id;
    }
    if (!isValidOfficeType(officeName)) {
      throw new Meteor.Error(`${officeName} is an invalid Measure Type.`);
    }
    const docID = this._collection.insert({ officeName });
    return docID;
  }

  update(docID, {
    officeName,
  }) {
    const updateData = {};
    // if (year) { NOTE: 0 is falsy, so we need to check if the year is a number.
    if (officeName) {
      if (!isValidOfficeType(officeName)) {
        throw new Meteor.Error(`${officeName} is an invalid Measure Type.`);
      }
      updateData.officeName = officeName;
    }
    this._collection.update(docID, { $set: updateData });
  }

  /**
   * Default publication method for entities.
   * It publishes the entire collection for admin and just the stuff associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      // get the HearingCollection instance.
      const instance = this;
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(officePublications.offices, function publish() {
        if (this.userId) {
          return instance._collection.find({});
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
      Meteor.publish(officePublications.officesAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  subscribeOffices() {
    if (Meteor.isClient) {
      return Meteor.subscribe(officePublications.hearings);
    }
    return null;
  }

  subscribeOfficesAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(officePublications.hearingsAdmin);
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
    const officeName = doc.office;
    return { officeName };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Offices = new OfficeCollection();
