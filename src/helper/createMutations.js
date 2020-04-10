const createMutations = (TYPE, input) => {
  let tmp;
  switch (TYPE) {
    case 'Subject':
      const items = lookupRequiredKeys(TYPE, input);
      tmp = insertMutation(TYPE, items);

      break;

    default:
      break;
  }

  return tmp;
}

module.exports = {
  createMutations
}

const lookupRequiredKeys = (TYPE, input) => {
  switch (TYPE) {
    case 'Subject':
      const {subject_id} = input;
      const {sex, age, race} = input.clinical_data;
      return {id: subject_id, sex, age, race};

    default:
      break;
  }
}

const insertMutation = (TYPE, items) => {

  let tmp = `s1: Create${TYPE}(`;
  Object
    .keys(items)
    .forEach((key, index) => {
      tmp = tmp + `${key}: "${items[key]}"`;
      if (index < Object.keys(items).length - 1) {
        tmp = tmp + `, `
      }
    })
  tmp = tmp + `)
        ${Object
    .keys(items)
    .join('\n\t')}
      }
      `;
  return tmp;
}