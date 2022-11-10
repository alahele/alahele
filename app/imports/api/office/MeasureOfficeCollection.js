import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import BaseCollection from '../base/BaseCollection';

export const measureOfficePublications = {
  measures: 'measures',
  office: 'office',
};

class MeasureOfficeCollection extends BaseCollection {
  constructor() {
    super('Measure Office', new SimpleSchema({
      measure: Object,
      office: String,
    }));
  }

  define({ measures, office }) {
    // UNIQUE (year, measureType, measureNumber, notice)
    if (this.isDefined({ measures, office })) {
      return this.findDoc({ measures, office })._id;
    }
    const docID = this._collection.insert({
      measures,
      office,
    });
    return docID;
  }

  update(docID, {
    measures, office,
  }) {
    const updateData = {};

    if (measures) {
      updateData.measures = measures;
    }
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
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(measureOfficePublications.measures, function publish() {
        if (this.userId) {
          return instance._collection.find({});
        }
        return this.ready();
      });

      Meteor.publish(measureOfficePublications.office, function publish() {
        if (this.userId) {
          return instance._collection.find({});
        }
        return this.ready();
      });
    }
  }

  subscribeMeasures() {
    if (Meteor.isClient) {
      return Meteor.subscribe(measureOfficePublications.measures);
    }
    return null;
  }

  subscribeOffice() {
    if (Meteor.isClient) {
      return Meteor.subscribe(measureOfficePublications.office);
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
    const measures = doc.measures;
    const office = doc.office;
    return { measures, office };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const MeasureOfficePublications = new MeasureOfficeCollection();
