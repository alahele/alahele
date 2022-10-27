import _ from 'lodash';

export const officeTypes = {
  OSIP: 'OSIP',
  OFS: 'OFS',
  OCID: 'OCID',
  OSSS: 'OTM',
  DEPUTY: 'DEPUTY',
};

export const isValidOfficeType = (type) => _.includes(officeTypes, type);
