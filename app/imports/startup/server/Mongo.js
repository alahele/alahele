import { Meteor } from 'meteor/meteor';
import { Measures } from '../../api/measure/MeasureCollection';
import { Hearings } from '../../api/hearing/HearingCollection';
import { Testimony } from '../../api/testimony/TestimonyCollection';
import { Stuffs } from '../../api/stuff/StuffCollection';
/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.define(data);
}

if (Meteor.settings.public.loadMeasures && Measures.count() === 0) {
  if (Meteor.settings.public.measuresFileName) {
    const assetsFileName = Meteor.settings.public.measuresFileName;
    console.log('--------------------------------------');
    console.log(`Loading data from private/${assetsFileName}`);
    // eslint-disable-next-line no-undef
    const jsonData = JSON.parse(Assets.getText(assetsFileName));
    jsonData.forEach(measure => Measures.define(measure));
  }
}

if (Meteor.settings.public.loadHearings && Hearings.count() === 0) {
  if (Meteor.settings.public.hearingsFileName) {
    const assetsFileName = Meteor.settings.public.hearingsFileName;
    console.log('--------------------------------------');
    console.log(`Loading data from private/${assetsFileName}`);
    // eslint-disable-next-line no-undef
    const jsonData = JSON.parse(Assets.getText(assetsFileName));
    jsonData.forEach(hearing => Hearings.define(hearing));
  }
}

if (Meteor.settings.public.loadTestimony && Testimony.count() === 0) {
  if (Meteor.settings.public.testimonyFileName) {
    const assetsFileName = Meteor.settings.public.testimonyFileName;
    console.log('--------------------------------------');
    console.log(`Loading data from private/${assetsFileName}`);
    // eslint-disable-next-line no-undef
    const jsonData = JSON.parse(Assets.getText(assetsFileName));
    jsonData.forEach(testimony => Testimony.define(testimony));
  }
}

// Initialize the Stuffs if empty.
if (Stuffs.count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating Default Data');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
