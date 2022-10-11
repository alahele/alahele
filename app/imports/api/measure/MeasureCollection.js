import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';
import { isValidMeasureType } from '../legislature/measureTypes';

export const measurePublications = {
  measures: 'measures',
  measuresAdmin: 'measuresAdmin', // not sure if we need this.
};

class MeasureCollection extends BaseCollection {
  constructor() {
    super('Measures', new SimpleSchema({
      year: Number,
      measureType: String,
      measureNumber: Number,
      lastUpdated: { type: Date, optional: true },
      code: { type: String, optional: true },
      measurePdfUrl: { type: String, optional: true },
      measureArchiveUrl: { type: String, optional: true },
      measureTitle: { type: String, optional: true },
      reportTitle: { type: String, optional: true },
      bitAppropriation: { type: Number, optional: true },
      description: { type: String, optional: true },
      status: { type: String, optional: true },
      introducer: { type: String, optional: true },
      currentReferral: { type: String, optional: true },
      companion: { type: String, optional: true },
    }));
  }

  define({ year, measureType, measureNumber, lastUpdated, code, measurePdfUrl, measureArchiveUrl, measureTitle, reportTitle, bitAppropriation, description, status, introducer, currentReferral, companion }) {
    // PRIMARY KEY (year, measureType, measureNumber) so they are unique
    if (this.isDefined({ year, measureType, measureNumber })) {
      return this.findDoc({ year, measureType, measureNumber })._id;
    }
    if (!isValidMeasureType(measureType)) {
      throw new Meteor.Error(`${measureType} is an invalid Measure Type.`);
    }
    const docID = this._collection.insert({ year, measureType, measureNumber, lastUpdated, code, measurePdfUrl, measureArchiveUrl, measureTitle, reportTitle, bitAppropriation, description, status, introducer, currentReferral, companion });
    return docID;
  }

  update(docID, { lastUpdated, code, measurePdfUrl, measureArchiveUrl, measureTitle, reportTitle, bitAppropriation, description, status, introducer, currentReferral, companion }) {
    const updateData = {};
    if (lastUpdated) {
      updateData.lastUpdated = lastUpdated;
    }
    if (code) {
      updateData.code = code;
    }
    if (measurePdfUrl) {
      updateData.measurePdfUrl = measurePdfUrl;
    }
    if (measureArchiveUrl) {
      updateData.measureArchiveUrl = measureArchiveUrl;
    }
    if (measureTitle) {
      updateData.measureTitle = measureTitle;
    }
    if (reportTitle) {
      updateData.reportTitle = reportTitle;
    }
    if (_.isNumber(bitAppropriation)) {
      updateData.bitAppropriation = bitAppropriation;
    }
    if (description) {
      updateData.description = description;
    }
    if (status) {
      updateData.status = status;
    }
    if (introducer) {
      updateData.introducer = introducer;
    }
    if (currentReferral) {
      updateData.currentReferral = currentReferral;
    }
    if (companion) {
      updateData.companion = companion;
    }
    this._collection.update(docID, { $set: updateData });
  }

  publish() {
    if (Meteor.isServer) {
      // get the MeasureCollection instance
      const instance = this;
      Meteor.publish(measurePublications.measures, function publish() {
        if (this.userId) {
          return instance._collection.find({});
        }
        return this.ready();
      });
      Meteor.publish(measurePublications.measuresAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  subscribeMeasures() {
    if (Meteor.isClient) {
      return Meteor.subscribe(measurePublications.measures);
    }
    return null;
  }

  subscribeMeasuresAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(measurePublications.measuresAdmin);
    }
    return null;
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const year = doc.year;
    const measureType = doc.measureType;
    const measureNumber = doc.measureNumber;
    const lastUpdated = doc.lastUpdated;
    const code = doc.code;
    const measurePdfUrl = doc.measurePdfUrl;
    const measureArchiveUrl = doc.measureArchiveUrl;
    const measureTitle = doc.measureTitle;
    const reportTitle = doc.reportTitle;
    const bitAppropriation = doc.bitAppropriation;
    const description = doc.description;
    const status = doc.status;
    const introducer = doc.introducer;
    const currentReferral = doc.currentReferral;
    const companion = doc.companion;
    return { year, measureType, measureNumber, lastUpdated, code, measurePdfUrl, measureArchiveUrl, measureTitle, reportTitle, bitAppropriation, description, status, introducer, currentReferral, companion };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Measures = new MeasureCollection();
