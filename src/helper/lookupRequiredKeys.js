const uuid = require('uuid');

const lookupRequiredKeys = (TYPE, input) => {
  switch (TYPE) {
    case 'Subject':
      const { subject_id } = input;
      const { sex, gender, age, race } = input.clinical_data;
      if (input.hasOwnProperty('medications')) {
        // console.log(input.medications);
        // add relationships
      }
      return [
        {
          key: 'id',
          value: subject_id, 
          type: 'ID'
        },
        {
          key: 'sex',
          value: sex || gender || 'UNKNOWN', 
          type: 'String'
        },
        {
          key: 'age',
          value: age, 
          type: 'Int'
        },
        {
          key: 'race',
          value: race || 'UNKNOWN', 
          type: 'String'
        }
      ]

    case 'Biosample':
      const { biosample_id } = input;
      const type  = input.sample_type;
      const kind  = input.pro_or_ret;
      const category  = input.sample_cat;
      const collection_time  = input.collection_time;
      const elapsed_time  = input.elapsed_time;
      return [
        {
          key: 'id',
          value: biosample_id, 
          type: 'ID'
        },
        {
          key: 'type',
          value: type, 
          type: 'String'
        },
        {
          key: 'kind',
          value: kind, 
          type: 'String'
        },
        {
          key: 'category',
          value: category, 
          type: 'String'
        },
        {
          key: 'collection_time',
          value: collection_time, 
          type: 'Date'
        },
        {
          key: 'elapsed_time',
          value: elapsed_time, 
          type: 'String'
        }
    ];

    case 'SequencingItem':
      const UUID = uuid.v4();
      // const { biosample_id } = input;
      const filename  = input.filename;
      const md5sum  = input.md5sum;
      const assay  = input.assay;

      return [
        {
          key: 'id',
          value: UUID, 
          type: 'ID'
        },
        {
          key: 'filename',
          value: filename, 
          type: 'String'
        },
        {
          key: 'md5sum',
          value: md5sum, 
          type: 'String'
        },
        {
          key: 'assay',
          value: assay, 
          type: 'String'
        }
    ];

    default:
      break;
  }
}


module.exports = {
  lookupRequiredKeys
}