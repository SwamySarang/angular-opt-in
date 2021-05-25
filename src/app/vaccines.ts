export interface Vaccine {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  info: string;
}

export const vaccines = [
  {
    id: 1,
    name: 'Covaxin',
    manufacturer: 'Bharat Biotech, Hyderabad',
    description: 'test test test test test test test test test test',
    info: '2nd dose recommendation after XYZ weeks of first dose'
  },
  {
    id: 2,
    name: 'Covishieled',
    manufacturer: 'SII, Pune',
    description:
      'description description description description description description description description description description',
    info: '2nd dose recommendation after XYZ weeks of first dose'
  },
  {
    id: 3,
    name: 'Sputnik V',
    manufacturer: 'Russia',
    description:
      'example example example example example example example example example example',
    info: '2nd dose recommendation after XYZ weeks of first dose'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
