import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import BaseCollection from '../base/BaseCollection';

export const OfficePublications = {
  offices: 'offices',
};

class OfficeCollection extends BaseCollection {
  constructor() {
    super('Office', new SimpleSchema({
      office: String,
    }));
  }

  define({ office }) {
    // UNIQUE (year, measureType, measureNumber, notice)
    if (this.isDefined(office)) {
      return this.findDoc(office)._id;
    }
    const docID = this._collection.insert({
      office,
    });
    console.log(office);
    return docID;
  }

  update(docID, office) {
    const updateData = {};
    if (office) {
      updateData.office = office;
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
      Meteor.publish(OfficePublications.offices, function publish() {
        if (this.userId) {
          return instance._collection.find({});
        }
        return this.ready();
      });
      /** This subscription publishes only the documents associated with the logged in user */

      // Meteor.publish(measureOffices.office, function publish() {
      //     if (this.userId) {
      //         return instance._collection.find({});
      //     }
      //     return this.ready();
      // });
    }
  }

  subscribeOffices() {
    if (Meteor.isClient) {
      return Meteor.subscribe(OfficePublications.offices);
    }
    return null;
  }

  // subscribeOffice() {
  //   if (Meteor.isClient) {
  //     return Meteor.subscribe(measureOffices.office);
  //   }
  //   return null;
  // }

  /**
     * Returns an object representing the definition of docID in a format appropriate to the restoreOne or define function.
     * @param docID
     * @returns {{noticePdfUrl: *, measureNumber: *, code: *, committee: *, year: (*|moment.numberlike|((y: number) => moment.Moment)|(() => number)|number|"numeric"|"2-digit"|string),
     * @returns {{noticePdfUrl: *, measureNumber: *, code: *, committee: *, year: (*|moment.numberlike|((y: number) => moment.Moment)|(() => number)|number|"numeric"|"2-digit"|string),
     * description: *, room: *, lastUpdated: *, datetime: *, measureRelativeUrl: *, noticeUrl: *, measureType: *, timestamp: *, notice: *}}
     */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const office = doc.office;
    return office;
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Offices = new OfficeCollection();
