import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Roles } from 'meteor/alanning:roles';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';
import { isValidMeasureType } from '../legislature/measureTypes';

export const testimonyPublications = {
  testimony: 'testimony',
  testimonyAdmin: 'testimonyAdmin', // not sure if we need this.
  testimonyProcessor: 'testimonyProcessor',
  testimonyWriter: 'testimonyWriter',
  testimonyOfficeApprover: 'testimonyOfficeApprover',
  testimonyPipeApprover: 'testimonyPipeApprover',
  testimonyFinalApprover: 'testimonyFinalApprover',
};

export const testimonyType = [
  'Individual',
  'Organization',
];

export const testimonyPosition = [
  'Support',
  'Oppose',
  'Comments Only',
];

export const testimonyStatus = [
  'Processor',
  'Writer',
  'Office Approver',
  'PIPE Approver',
  'Final Approver',
  'Complete',
];

class TestimonyCollection extends BaseCollection {
  constructor() {
    super('Testimony', new SimpleSchema({
      year: Number,
      measureType: String,
      measureNumber: Number,
      date: Date,
      chair: { type: String, optional: true },
      viceChair: { type: String, optional: true },
      type: { type: String, allowedValues: testimonyType, defaultValue: 'Organization' },
      name: { type: String, defaultValue: 'DOE' },
      position: { type: String, optional: true, allowedValues: testimonyPosition },
      method: { type: String, optional: true },
      body: { type: Array, optional: true },
      'body.$': { type: String },
      comment: { type: Array, optional: true },
      'comment.$': { type: String },
      status: { type: String, allowedValues: testimonyStatus, defaultValue: 'Processor' },
      docName: String,
    }));
  }

  /**
   * Defines the testimonye associated with a measure and the associated Meteor account.
   * @param year The measure year associated with this testimony.
   * @param measureType The measure type associated with this testimony.
   * @param measureNumber The measure type associated with this testimony.
   * @param date The date testimony is made.
   * @param time The time testimony is made.
   * @param chair Current chair of the committee.
   * @param viceChair Current vice chair of the committee.
   * @param type Testimony type. Will be either individual or organization.
   * @param name Testifier or Organization name. Default organization is DOE.
   * @param position Testifier position, either support, oppose or comment only.
   * @param method Testifiers method of testifying, for individuals testifying remotely
   * @param body The body of the testimony, type array for ease of adding or excluding arguments
   * @param comment The comments from testimony approvers/editors, type array for was of adding or deleting comments.
   * @param status The status of the testimony process within the organization.
   * @param docName The saved document name for a testimony. Assuming user will be creating drafts and final draft, allows multiple testimony documents per bill.
   */

  define({ year, measureType, measureNumber, date, chair, viceChair, type, name, position, method, body, comment, status, docName }) {
    // UNIQUE (year, measureType, measureNumber)
    if (this.isDefined({ year, measureType, measureNumber, docName })) {
      return this.findDoc({ year, measureType, measureNumber, docName })._id;
    }
    if (!isValidMeasureType(measureType)) {
      throw new Meteor.Error(`${measureType} is an invalid Measure Type.`);
    }
    const docID = this._collection.insert({
      year,
      measureType,
      measureNumber,
      date,
      chair,
      viceChair,
      type,
      name,
      position,
      method,
      body,
      comment,
      status,
      docName,
    });
    return docID;
  }

  update(docID, { year, measureType, measureNumber, date, chair, viceChair, type, name, position, method, body, comment, status, docName }) {
    const updateData = {};
    if (_.isNumber(year)) {
      updateData.year = year;
    }
    if (measureType) {
      if (!isValidMeasureType(measureType)) {
        throw new Meteor.Error(`${measureType} is an invalid Measure Type.`);
      }
      updateData.measureType = measureType;
    }
    if (_.isNumber(measureNumber)) {
      updateData.measureNumber = measureNumber;
    }
    if (date) {
      updateData.date = date;
    }
    if (chair) {
      updateData.chair = chair;
    }
    if (viceChair) {
      updateData.viceChair = viceChair;
    }
    if (type) {
      updateData.type = type;
    }
    if (name) {
      updateData.name = name;
    }
    if (position) {
      updateData.position = position;
    }
    if (method) {
      updateData.method = method;
    }
    if (body) {
      updateData.body = body;
    }
    if (comment) {
      updateData.comment = comment;
    }
    if (status) {
      updateData.status = status;
    }
    if (docName) {
      updateData.docName = docName;
    }
    this._collection.update(docID, { $set: updateData });
  }

  /**
   * A stricter form of remove that throws an error if the document or docID could not be found in this collection.
   * @param { String | Object } title A document or docID in this collection.
   * @returns true
   */
  removeIt(title) {
    const doc = this.findDoc(title);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  /**
   * Default publication method for entities.
   * It publishes the entire collection for admin and just the opportunity associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      // get the TestimonyCollection instance
      const instance = this;

      /** This subscription publishes all documents regardless of Roles. */
      Meteor.publish(testimonyPublications.testimony, function publish() {
        if (Meteor.isServer) {
          return instance._collection.find({});
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user, but only if the logged in user is Admin. */
      Meteor.publish(testimonyPublications.testimonyAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });

      /** This subscription publishes only the documents associated with the logged in SECRETARY role. */
      Meteor.publish(testimonyPublications.testimonyProcessor, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.PROCESSOR)) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes only the documents associated with the logged in WRITER role. */
      Meteor.publish(testimonyPublications.testimonyWriter, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.WRITER)) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes only the documents associated with the logged in OFFICE APPROVER role. */
      Meteor.publish(testimonyPublications.testimonyOfficeApprover, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.OFFICE_APPROVER)) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes only the documents associated with the logged in PIPE APPROVER role. */
      Meteor.publish(testimonyPublications.testimonyPipeApprover, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.PIPE_APPROVER)) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes only the documents associated with the logged in FINAL APPROVER role. */
      Meteor.publish(testimonyPublications.testimonyFinalApprover, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.FINAL_APPROVER)) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });
    }
  }

  /**
   * Subscription method for all testimonies.
   */
  subscribeTestimony() {
    if (Meteor.isClient) {
      return Meteor.subscribe(testimonyPublications.testimony);
    }
    return null;
  }

  /**
   * Subscription method for admin users.
   * It subscribes to the entire collection.
   */
  subscribeTestimonyAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(testimonyPublications.testimonyAdmin);
    }
    return null;
  }

  subscribeTestimonyProcessor() {
    if (Meteor.isClient) {
      return Meteor.subscribe(testimonyPublications.testimonyProcessor);
    }
    return null;
  }

  subscribeTestimonyWriter() {
    if (Meteor.isClient) {
      return Meteor.subscribe(testimonyPublications.testimonyWriter);
    }
    return null;
  }

  subscribeTestimonyOfficeApprover() {
    if (Meteor.isClient) {
      return Meteor.subscribe(testimonyPublications.testimonyOfficeApprover);
    }
    return null;
  }

  subscribeTestimonyPipeApprover() {
    if (Meteor.isClient) {
      return Meteor.subscribe(testimonyPublications.testimonyPipeApprover);
    }
    return null;
  }

  subscribeTestimonyFinalApprover() {
    if (Meteor.isClient) {
      return Meteor.subscribe(testimonyPublications.testimonyFinalApprover);
    }
    return null;
  }

  getTestimony(id) {
    const testimonies = this._collection.find().fetch();
    const final = testimonies.filter(testimony => testimony._id === id);
    return final[0];
  }

  /**
   * Default implementation of assertValidRoleForMethod. Asserts that userId is logged in as an Admin or User.
   * This is used in the define, update, and removeIt Meteor methods associated with each class.
   * @param userId The userId of the logged in user. Can be null or undefined
   * @throws { Meteor.Error } If there is no logged in user, or the user is not an Admin or User.
   */
  assertValidRoleForMethod(userId) {
    this.assertRole(userId, [ROLE.ADMIN, ROLE.USER, ROLE.PROCESSOR, ROLE.WRITER, ROLE.OFFICE_APPROVER, ROLE.PIPE_APPROVER, ROLE.FINAL_APPROVER]); // edit this later to assert proper roles
  }

  /**
     * Returns an object representing the definition of docID in a format appropriate to the restoreOne or define function.
     * @param docID
     * @return {{measureID, date, time, chair, viceChair, type, name, position, method, body, comment, status}}
     */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const year = doc.year;
    const measureType = doc.measureType;
    const measureNumber = doc.measureNumber;
    const date = doc.date;
    const chair = doc.chair;
    const viceChair = doc.viceChair;
    const type = doc.type;
    const name = doc.name;
    const position = doc.position;
    const method = doc.method;
    const body = doc.body;
    const comment = doc.comment;
    const status = doc.status;
    const docName = doc.docName;
    return { year, measureType, measureNumber, date, chair, viceChair, type, name, position, method, body, comment, status, docName };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Testimony = new TestimonyCollection();
