const { lookupRequiredKeys } = require('./lookupRequiredKeys');
const { insertMutation } = require('./insertMutation');

const createMutations = (TYPE, input) => {
  let tmp;
  let items;
  switch (TYPE) {
    case 'Subject':
      items = lookupRequiredKeys(TYPE, input);
      tmp = insertMutation(TYPE, items, 's1');
      break;

    case 'Biosample':
      items = lookupRequiredKeys(TYPE, input);
      tmp = insertMutation(TYPE, items, 'b1');
      break;

    case 'SequencingItem':
      items = lookupRequiredKeys(TYPE, input);
      tmp = insertMutation(TYPE, items, 'f1');
      break;

    default:
      break;
  }

  return tmp;
}

module.exports = {
  createMutations
}

