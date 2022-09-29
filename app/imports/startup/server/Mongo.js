import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { Measures } from '../../api/measure/MeasureCollection';
/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.define(data);
}

// Initialize the StuffsCollection if empty.
if (Stuffs.count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

if (Meteor.settings.public.loadMeasures && Measures.count() === 0) {
  if (Meteor.settings.public.measuresFileName) {
    const assetsFileName = Meteor.settings.public.measuresFileName;
    console.log(`Loading data from private/${assetsFileName}`);
    // eslint-disable-next-line no-undef
    const jsonData = JSON.parse(Assets.getText(assetsFileName));
    jsonData.forEach(measure => Measures.define(measure));
  }
}
