/* Types */
export interface Person {
  aadhaarNo?: number;
  name: string;
  age: number;
  gender?: GENDER;
  location?: string;
  vxnType?: VXN_TYPES;
  dose?: DOSE_TYPES;
  dose2Before?: Date;
  locationType?: VXN_LOCATION_PREFERENCE;
  day: SCHEDULE_DAY_TYPES;
  slot: SCHEDULE_SLOT_TYPES;
}

export interface Employee extends Person {
  empId: number;
  email: string;
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
  DAY_1 = 'Same Day',
  DAY_2 = 'Different Day'
}

export enum SCHEDULE_SLOT_TYPES {
  SAME_SLOT = 'Same Session',
  DIFF_SLOT = 'Different Session'
}

/* sample JSONs */
export const employee1: Employee = {
  empId: 12345,
  name: 'John Galt',
  gender: GENDER.MALE,
  aadhaarNo: 1234 - 1234 - 1234,
  age: 31,
  location: 'Bangalore',
  email: 'test@test.com',
  vxnType: VXN_TYPES.COVAXIN,
  locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
  day: SCHEDULE_DAY_TYPES.DAY_1,
  slot: SCHEDULE_SLOT_TYPES.SAME_SLOT
};

export const employee: Employee = {
  empId: 12345,
  name: 'John Galt',
  gender: GENDER.MALE,
  dose: DOSE_TYPES.DOSE_1,
  aadhaarNo: 1234 - 1234 - 1234,
  age: 31,
  location: 'Bangalore',
  email: 'test@test.com',
  vxnType: VXN_TYPES.COVAXIN,
  locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
  day: SCHEDULE_DAY_TYPES.DAY_1,
  slot: SCHEDULE_SLOT_TYPES.SAME_SLOT,
  members: [
    {
      relationType: RELATION_TYPES.SELF,
      name: 'John Galt',
      gender: GENDER.MALE,
      dose: DOSE_TYPES.DOSE_2,
      aadhaarNo: 1234 - 1234 - 1234,
      age: 55,
      location: 'Bangalore',
      vxnType: VXN_TYPES.COVAXIN,
      locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
      day: SCHEDULE_DAY_TYPES.DAY_1,
      slot: SCHEDULE_SLOT_TYPES.DIFF_SLOT
    },
    {
      relationType: RELATION_TYPES.FATHER,
      name: 'Matt Galt',
      gender: GENDER.MALE,
      dose: DOSE_TYPES.DOSE_2,
      aadhaarNo: 1234 - 1234 - 1234,
      age: 55,
      location: 'Bangalore',
      vxnType: VXN_TYPES.COVAXIN,
      locationType: VXN_LOCATION_PREFERENCE.ON_SITE,
      day: SCHEDULE_DAY_TYPES.DAY_1,
      slot: SCHEDULE_SLOT_TYPES.DIFF_SLOT
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
      day: SCHEDULE_DAY_TYPES.DAY_1,
      slot: SCHEDULE_SLOT_TYPES.SAME_SLOT
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
      day: SCHEDULE_DAY_TYPES.DAY_1,
      slot: SCHEDULE_SLOT_TYPES.DIFF_SLOT
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
      day: SCHEDULE_DAY_TYPES.DAY_1,
      slot: SCHEDULE_SLOT_TYPES.SAME_SLOT
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
      day: SCHEDULE_DAY_TYPES.DAY_1,
      slot: SCHEDULE_SLOT_TYPES.DIFF_SLOT
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
      day: SCHEDULE_DAY_TYPES.DAY_1,
      slot: SCHEDULE_SLOT_TYPES.SAME_SLOT
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
      day: SCHEDULE_DAY_TYPES.DAY_2,
      slot: SCHEDULE_SLOT_TYPES.DIFF_SLOT
    }
  ]
};
