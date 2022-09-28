import _ from 'lodash';

export const houseCommittees = {
  AGR: { name: 'Agriculture', key: 'AGR' },
  CAI: { name: 'Culture, Arts, & International Affairs', key: 'CAI' },
  CMV: { name: 'Corrections, Military, & Veterans', key: 'CMV' },
  CPC: { name: 'Consumer Protection & Commerce', key: 'CPC' },
  ECD: { name: 'Economic Development', key: 'EDC' },
  EDN: { name: 'Education', key: 'EDN' },
  EEP: { name: 'Energy & Environmental Protection', key: 'EEP' },
  FIN: { name: 'Finance', key: 'FIN' },
  GVR: { name: 'Government Reform', key: 'GVR' },
  HET: { name: 'Higher Education & Technology', key: 'HET' },
  HHH: { name: 'Health, Human Services, & Homelessness', key: 'HHH' },
  HSG: { name: 'Housing', key: 'HSG' },
  JHA: { name: 'Judiciary & Hawaiian Affairs', key: 'JHA' },
  LAT: { name: 'Labor & Tourism', key: 'LAT' },
  LMG: { name: 'Legislative Management', key: 'LMG' },
  PDP: { name: 'Pandemic & Disaster Preparedness', key: 'PDP' },
  TRN: { name: 'Transportation', key: 'TRN' },
  WAL: { name: 'Water & Land', key: 'WAL' },
};

export const senateCommittees = {
  AEN: { name: 'Agriculture and Environment', key: 'AEN' },
  CPN: { name: 'Commerce and Consumer Protection', key: 'CPN' },
  EDU: { name: 'Education', key: 'EDU' },
  EET: { name: 'Energy, Economic Development, and Tourism', key: 'EET' },
  GVO: { name: 'Government Operations', key: 'GVO' },
  HMS: { name: 'Human Services', key: 'HMS' },
  HOU: { name: 'Housing', key: 'HOU' },
  HRE: { name: 'Higher Education', key: 'HRE' },
  HTH: { name: 'Health', key: 'HTH' },
  HWN: { name: 'Hawaiian Affairs', key: 'HWN' },
  JDC: { name: 'Judiciary', key: 'JDC' },
  LCA: { name: 'Labor, Culture and the Arts', key: 'LCA' },
  PSM: { name: 'Public Safety, Intergovernmental, and Military Affairs', key: 'PSM' },
  TRS: { name: 'Transportation', key: 'TRS' },
  WAM: { name: 'Ways and Means', key: 'WAM' },
  WTL: { name: 'Water and Land', key: 'WTL' },
};

export const isValidHouseCommittee = (committee) => _.includes(houseCommittees.keys(), committee);
export const isValidSenateCommittee = (committee) => _.includes(senateCommittees.keys(), committee);
export const isValidCommittee = (committee) => isValidHouseCommittee(committee) || isValidSenateCommittee(committee);
export const getRandomHouseCommittee = () => {
  const keys = Object.keys(houseCommittees);
  return houseCommittees[keys[Math.floor(keys.length * Math.random())]];
};
export const getRandomSenateCommittee = () => {
  const keys = Object.keys(senateCommittees);
  return senateCommittees[keys[Math.floor(keys.length * Math.random())]];
};
