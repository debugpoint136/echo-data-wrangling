const fs = require('fs');
const input = process.argv[2];
const uuid = require('uuid');
const UUID = uuid.v4();
const { createMutations } = require('./helper/createMutations');
if (!process.argv[2]) {
  console.log(`Usage :
  node src/json_to_graphql_mutations.js src/json/biosamples_subject_9320086_hiv_10.json > ${UUID}.mutations.js  
  `);
  process.exit(0);
}

/**
 * { study_id: 'iPREX HIV study',
  subject_id: '9320086',
  handler: '',
  collecting_institution: 'DU',
  prime_institution: 'DU',
  biosample_id: 'CCC018X5-03',
  exposure_type: 'Infection',
  exposure_code: 'HIV',
  handler_code: 'HIV',
  condition_code: 'C',
  clinical_data: { sex: 'M', age: '22', race: 'Mixed/Other' },
  infection_metadata:
   { agent: 'HIV',
     date_of_diagnosis: '2009-10-06',
     confirmatory_assay: 'PCR',
     infection_status: 'Negative',
     agent_load: 40 } }
 */
const INPUTJSON = require(`${__dirname}/${input}`);
const results = [];
Object.keys(INPUTJSON).forEach(key => {
  let tmp;
  const value = INPUTJSON[key];
  switch (key) {
    case 'subject_id':
      tmp = createMutations('Subject', INPUTJSON);
      results.push(tmp);
      break;

    case 'sample_cat':
      tmp = createMutations('Biosample', INPUTJSON);
      results.push(tmp);
      break;

    case 'filename':
      tmp = createMutations('SequencingItem', INPUTJSON);
      results.push(tmp);
      break;
  
    default:
      break;
  }
})

// console.log(` mutation {
//   ${results.join('\n')}
// }
//   `);
console.log(results.join('\n'));
console.log(`===============================================================`)
console.log(`results saved in ${UUID}.mutations.js`);
console.log(`===============================================================`)


