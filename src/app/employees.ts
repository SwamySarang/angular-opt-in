/* Types */
export interface Person {
  aadhaarNo?: number;
  name: string;
  age: number;
  gender?: GENDER;
  dose?: DOSE_TYPES;
  location?: string;
  vxnType?: VXN_TYPES;
  locationType?: VXN_LOCATION_PREFERENCE;
  group: SCHEDULE_GROUP_TYPES;
}

export interface Employee extends Person {
  empId: number;
  workLocation: string;
  members?: Member[];
}

export interface Member extends Person {
  relationType: string;
}

export enum GENDER {
  MALE,
  FEMALE
}

export enum DOSE_TYPES {
  DOSE_1 = 'Dose 1',
  DOSE_2 = 'Dose 2'
}

export enum VXN_TYPES {
  COVAXIN = 'Covaxin',
  COVISHIELD = 'Covishield',
  SPUTNIK_V = 'Sputnik-V'
}

export enum VXN_LOCATION_PREFERENCE {
  ON_SITE = 'On-site',
  IN_CLINIC = 'In-clinic'
}

export enum RELATION_TYPES {
  SELF = 'Self',
  FATHER = 'Father',
  MOTHER = 'Mother',
  SPOUSE = 'Spouse',
  FATHER_IN_LAW = 'Father In-law',
  MOTHER_IN_LAW = 'Mother In-law',
  SON = 'Son',
  DAUGTHER = 'Daughter'
}

export enum SCHEDULE_GROUP_TYPES {
  GROUP_1 = '04-June-2021',
  GROUP_2 = '05-June-2021'
}

export enum SCHEDULE_DAY_TYPES {
  DAY_1 = 'Day 1',
  DAY_2 = 'Day 2'
}

export enum SCHEDULE_SLOT_TYPES {
  SLOT_1 = 'Slot 1',
  SLOT_2 = 'Slot 2',
  SLOT_3 = 'Slot 3',
  SLOT_4 = 'Slot 4',
  SLOT_5 = 'Slot 5',
  SLOT_6 = 'Slot 6',
  SLOT_7 = 'Slot 7',
  SLOT_8 = 'Slot 8'
}

/* sample JSONs */
export const employee1: Employee = {
  empId: 12345,
  name: 'John Galt',
  gender: GENDER.MALE,
  aadhaarNo: 1234 - 1234 - 1234,
  age: 31,
  location: 'Bangalore',
  workLocation: 'Bangalore',
  vxnType: VXN_TYPES.COVAXIN,
  locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
  group: SCHEDULE_GROUP_TYPES.GROUP_1
};

export const employee: Employee = {
  empId: 12345,
  name: 'John Galt',
  gender: GENDER.MALE,
  dose: DOSE_TYPES.DOSE_1,
  aadhaarNo: 1234 - 1234 - 1234,
  age: 31,
  location: 'Bangalore',
  workLocation: 'Bangalore',
  vxnType: VXN_TYPES.COVAXIN,
  locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
  group: SCHEDULE_GROUP_TYPES.GROUP_2,
  members: [
    {
      relationType: RELATION_TYPES.FATHER,
      name: 'John Galt',
      gender: GENDER.MALE,
      dose: DOSE_TYPES.DOSE_2,
      aadhaarNo: 1234 - 1234 - 1234,
      age: 55,
      location: 'Bangalore',
      vxnType: VXN_TYPES.COVAXIN,
      locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
      group: SCHEDULE_GROUP_TYPES.GROUP_2
    },
    {
      relationType: RELATION_TYPES.MOTHER,
      name: 'Elfie Galt',
      gender: GENDER.FEMALE,
      dose: DOSE_TYPES.DOSE_1,
      aadhaarNo: 1234 - 1234 - 1235,
      age: 50,
      location: 'Bangalore',
      vxnType: VXN_TYPES.COVISHIELD,
      locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
      group: SCHEDULE_GROUP_TYPES.GROUP_1
    },
    {
      relationType: RELATION_TYPES.SPOUSE,
      name: 'Julie Galt',
      gender: GENDER.FEMALE,
      dose: DOSE_TYPES.DOSE_2,
      aadhaarNo: 1234 - 1234 - 1235,
      age: 30,
      location: 'Bangalore',
      vxnType: VXN_TYPES.COVISHIELD,
      locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
      group: SCHEDULE_GROUP_TYPES.GROUP_1
    },
    {
      relationType: RELATION_TYPES.SON,
      name: 'Sun Galt',
      gender: GENDER.FEMALE,
      dose: DOSE_TYPES.DOSE_1,
      aadhaarNo: 1234 - 1234 - 1235,
      age: 8,
      location: 'Bangalore',
      vxnType: VXN_TYPES.COVISHIELD,
      locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
      group: SCHEDULE_GROUP_TYPES.GROUP_2
    },
    {
      relationType: RELATION_TYPES.DAUGTHER,
      name: 'Dora Galt',
      gender: GENDER.FEMALE,
      dose: DOSE_TYPES.DOSE_2,
      aadhaarNo: 1234 - 1234 - 1235,
      age: 4,
      location: 'Bangalore',
      vxnType: VXN_TYPES.COVISHIELD,
      locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
      group: SCHEDULE_GROUP_TYPES.GROUP_1
    },
    {
      relationType: RELATION_TYPES.FATHER_IN_LAW,
      name: 'Jake Galt',
      gender: GENDER.MALE,
      dose: DOSE_TYPES.DOSE_1,
      aadhaarNo: 1234 - 1234 - 1234,
      age: 52,
      location: 'Bangalore',
      vxnType: VXN_TYPES.COVAXIN,
      locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
      group: SCHEDULE_GROUP_TYPES.GROUP_1
    },
    {
      relationType: RELATION_TYPES.MOTHER_IN_LAW,
      name: 'Marie Galt',
      gender: GENDER.FEMALE,
      dose: DOSE_TYPES.DOSE_1,
      aadhaarNo: 1234 - 1234 - 1235,
      age: 47,
      location: 'Bangalore',
      vxnType: VXN_TYPES.COVISHIELD,
      locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
      group: SCHEDULE_GROUP_TYPES.GROUP_1
    }
  ]
};
