import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../stuff/StuffCollection';
import { AdminProfiles } from '../user/AdminProfileCollection';
import { UserProfiles } from '../user/UserProfileCollection';
import { Hearings } from '../hearing/HearingCollection';
import { Measures } from '../measure/MeasureCollection';
import { Offices } from '../office/OfficeCollection';
import { MeasureOffices } from '../office/MeasureOfficeCollection';
import { Testimony } from '../testimony/TestimonyCollection';
import { SavedMeasure } from '../measure/SavedMeasureCollection';

class MATPClass {
  collections;

  collectionLoadSequence;

  collectionAssociation;

  constructor() {
    // list of all the MATP collections
    this.collections = [
      AdminProfiles,
      Hearings,
      Measures,
      Stuffs,
      UserProfiles,
      Offices,
      MeasureOffices,
      Testimony,
      SavedMeasure,
    ];
    /*
         * A list of collection class instances in the order required for them to be sequentially loaded from a file.
         */
    this.collectionLoadSequence = [
      AdminProfiles,
      Hearings,
      Measures,
      UserProfiles,
      Stuffs,
      Offices,
      MeasureOffices,
      Testimony,
      SavedMeasure,
    ];

    /*
         * An object with keys equal to the collection name and values the associated collection instance.
         */
    this.collectionAssociation = {};
    this.collections.forEach((collection) => {
      this.collectionAssociation[collection.getCollectionName()] = collection;
    });
  }

  /**
     * Return the collection class instance given its name.
     * @param collectionName The name of the collection.
     * @returns The collection class instance.
     * @throws { Meteor.Error } If collectionName does not name a collection.
     */
  getCollection(collectionName) {
    // console.log('MATP', collectionName, this.collectionAssociation);
    const collection = this.collectionAssociation[collectionName];
    if (!collection) {
      throw new Meteor.Error(`Called MARTP.getCollection with unknown collection name: ${collectionName}`);
    }
    return collection;
  }
}

export const MATP = new MATPClass();
