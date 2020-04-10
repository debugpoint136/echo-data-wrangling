const { lookupRequiredKeys } = require('./lookupRequiredKeys');
const { insertMutation } = require('./insertMutation');
const { insertAddRelationMutation } = require('./insertAddRelationMutation');

const createMutations = (TYPE, input) => {
  let tmp;
  let items;
  switch (TYPE) {
    case 'Subject':
      items = lookupRequiredKeys(TYPE, input);
      tmp = insertMutation(TYPE, items);
      break;

    case 'Biosample':
      items = lookupRequiredKeys(TYPE, input);
      tmp = insertMutation(TYPE, items);
      tmp += insertAddRelationMutation(
        { id: getId(items), name: 'Biosample' },
        { id: input.subject_id, name: 'Subject' },
      )
      break;

    case 'SequenceItem':
      items = lookupRequiredKeys(TYPE, input);
      tmp = insertMutation(TYPE, items);
      tmp += insertAddRelationMutation(
        { id: getId(items), name: 'SequenceItem' },
        { id: input.biosample_id, name: 'Biosample' },
      )
      break;

    default:
      break;
  }

  return tmp;
}

module.exports = {
  createMutations
}

function getId(list) {
  const res = list.filter(d => d.type === 'ID');
  if (res.length) {
    return res[0].value;
  } else {
    throw new Error("ID is missing");
  }
}