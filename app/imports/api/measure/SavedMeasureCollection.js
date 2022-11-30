import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { _ } from 'meteor/underscore';
import BaseCollection from '../base/BaseCollection';

export const savedMeasurePublications = {
  saved: 'Saved',
};

class SavedMeasureCollection extends BaseCollection {
  constructor() {
    super('SavedMeasure', new SimpleSchema({
      year: Number,
      measureType: String,
      measureNumber: Number,
      code: { type: String, optional: true },
      measureTitle: { type: String, optional: true },
      bitAppropriation: { type: Number, optional: true },
      description: { type: String, optional: true },
    }));
  }

  define({ year, measureType, measureNumber, code, measureTitle, bitAppropriation, description }) {
    // PRIMARY KEY (year, measureType, measureNumber) so they are unique
    if (this.isDefined({ year, measureType, measureNumber })) {
      return this.findDoc({ year, measureType, measureNumber })._id;
    }
    const docID = this._collection.insert({ year, measureType, measureNumber, code, measureTitle, bitAppropriation, description });
    return docID;
  }

  update(docID, { year, measureType, measureNumber, code, measureTitle, bitAppropriation, description }) {
    const updateData = {};
    if (code) {
      updateData.code = code;
    }
    if (year) {
      updateData.year = year;
    }
    if (measureType) {
      updateData.measureType = measureType;
    }

    if (measureNumber) {
      updateData.measureNumber = measureNumber;
    }
    if (measureTitle) {
      updateData.measureTitle = measureTitle;
    }

    if (_.isNumber(bitAppropriation)) {
      updateData.bitAppropriation = bitAppropriation;
    }
    if (description) {
      updateData.description = description;
    }
    this._collection.update(docID, { $set: updateData });
  }

  publish() {
    if (Meteor.isServer) {
      // get the MeasureCollection instance
      const instance = this;
      Meteor.publish(savedMeasurePublications.measures, function publish() {
        if (this.userId) {
          return instance._collection.find({});
        }
        return this.ready();
      });
    }
  }

  subscribeMeasures() {
    if (Meteor.isClient) {
      return Meteor.subscribe(savedMeasurePublications.measures);
    }
    return null;
  }

  getMeasure(id) {
    const measures = this._collection.find().fetch();
    const final = measures.filter(measure => measure._id === id);
    return final[0];
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const year = doc.year;
    const measureType = doc.measureType;
    const measureNumber = doc.measureNumber;
    const code = doc.code;
    const measureTitle = doc.measureTitle;
    const bitAppropriation = doc.bitAppropriation;
    const description = doc.description;
    return { year, measureType, measureNumber, code, measureTitle, bitAppropriation, description };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const SavedMeasure = new SavedMeasureCollection();
