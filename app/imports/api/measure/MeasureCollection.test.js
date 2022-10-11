import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';
import faker from 'faker';
import fc from 'fast-check';
import { Measures } from './MeasureCollection';
import { removeAllEntities } from '../base/BaseUtilities';
import { getRandomMeasureType } from '../legislature/measureTypes';
import { getRandomHouseCommittee } from '../legislature/committees';

/* eslint prefer-arrow-callback: "off",  no-unused-expressions: "off" */
/* eslint-env mocha */

if (Meteor.isServer) {
  describe('MeasureCollection', function testSuite() {
    before(function setup() {
      removeAllEntities();
    });

    after(function teardown() {
      removeAllEntities();
    });

    it('Can define and removeIt', function test1(done) {
      fc.assert(
        fc.property(
          fc.integer({ min: 1, max: 3000 }), // measureNumber
          fc.lorem({ maxCount: 1 }), // code
          fc.webUrl(), // measurePdfUrl
          fc.webUrl(), // measureArchiveUrl
          fc.lorem({ maxCount: 6 }), // measureTitle
          fc.lorem({ maxCount: 6 }), // reportTitle
          fc.integer({ min: 1000, max: 300000 }), // bitAppropriation
          fc.lorem({ maxCount: 30 }), // description
          fc.lorem({ maxCount: 3 }), // status
          fc.lorem({ maxCount: 2 }), // introducer
          (measureNumber, code, measurePdfUrl, measureArchiveUrl, measureTitle, reportTitle, bitAppropriation, description, status, introducer) => {
            const year = 2023;
            const measureType = getRandomMeasureType();
            const lastUpdated = new Date();
            const currentReferral = getRandomHouseCommittee().key;
            const companion = `${getRandomMeasureType()}${measureNumber}`;
            const docID = Measures.define({ year, measureType, measureNumber, lastUpdated, measurePdfUrl, measureArchiveUrl, measureTitle, reportTitle, code, companion, currentReferral, introducer, status, description, bitAppropriation });
            expect(Measures.isDefined(docID)).to.be.true;
            Measures.removeIt(docID);
            expect(Measures.isDefined(docID)).to.be.false;
          },
        ),
      );
      done();
    });

    it('Can not define duplicates', function test2() {
      const year = 2023;
      const measureType = getRandomMeasureType();
      const measureNumber = faker.datatype.number({ min: 1, max: 3000 });
      const measurePdfUrl = faker.internet.url();
      const measureArchiveUrl = faker.internet.url();
      const code = faker.lorem.word();
      const measureTitle = faker.lorem.words(6);
      const defineData = { year, measureType, measureNumber, measurePdfUrl, measureArchiveUrl, code, measureTitle };
      const docID1 = Measures.define(defineData);
      const docID2 = Measures.define(defineData);
      expect(docID1).to.eql(docID2);
    });

    it('Can update', function test3(done) {
      const year = 2023;
      const measureType = getRandomMeasureType();
      const measureNumber = faker.datatype.number({ min: 1, max: 3000 });
      const measurePdfUrl = faker.internet.url();
      const measureArchiveUrl = faker.internet.url();
      const code = faker.lorem.word();
      const measureTitle = faker.lorem.words(6);
      const defineData = { year, measureType, measureNumber, measurePdfUrl, measureArchiveUrl, code, measureTitle };
      const docID = Measures.define(defineData);
      fc.assert(
        fc.property(
          fc.lorem({ maxCount: 1 }), // code
          fc.webUrl(), // measurePdfUrl
          fc.webUrl(), // measureArchiveUrl
          fc.lorem({ maxCount: 6 }), // measureTitle
          fc.lorem({ maxCount: 6 }), // reportTitle
          fc.integer({ min: 1000, max: 300000 }), // bitAppropriation
          fc.lorem({ maxCount: 30 }), // description
          fc.lorem({ maxCount: 3 }), // status
          fc.lorem({ maxCount: 2 }), // introducer
          (code1, measurePdfUrl1, measureArchiveUrl1, measureTitle1, reportTitle1, bitAppropriation, description, status, introducer) => {
            const lastUpdated = new Date();
            const currentReferral = getRandomHouseCommittee().key;
            const companion = `${getRandomMeasureType()}${measureNumber}`;
            const updateData = { code: code1, measurePdfUrl: measurePdfUrl1, measureArchiveUrl: measureArchiveUrl1, measureTitle: measureTitle1,
              reportTitle: reportTitle1, bitAppropriation, lastUpdated, companion, description, status, introducer, currentReferral };
            Measures.update(docID, updateData);
            const measure = Measures.findDoc(docID);
            expect(measure.measureTitle).to.eql(measureTitle1);
            expect(measure.code).to.eql(code1);
            expect(measure.measurePdfUrl).to.eql(measurePdfUrl1);
            expect(measure.description).to.eql(description);
          },
        ),
      );
      done();
    });

    it(' dumpOne, removeIt, and restoreOnee', function test4() {
      const origDoc = Measures.findOne({});
      let docID = origDoc._id;
      const dumpObj = Measures.dumpOne(docID);
      Measures.removeIt(docID);
      expect(Measures.isDefined(docID)).to.be.false;
      docID = Measures.define(dumpObj);
      expect(Measures.isDefined(docID)).to.be.true;
      const doc = Measures.findDoc(docID);
      expect(origDoc.measureTitle).to.eql(doc.measureTitle);
    });
  });
}
