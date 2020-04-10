const uuid = require('uuid');

const insertMutation = (TYPE, items) => {
  const identifier = createIdentifier(TYPE, items);

  let tmp = `${identifier}: Create${TYPE}(`;
  items
    .forEach((item, index) => {
      const { key, value, type } = item
      switch (type) {
        case 'ID':
          tmp = tmp + `${key}: "${value}"`;
          break;
        case 'String':
          tmp = tmp + `${key}: "${value}"`;
          break;
        case 'Int':
          tmp = tmp + `${key}: ${value}`;
          break;
        case 'Date':
          tmp = tmp + `${key}: { formatted: "${value}" }`;
          break;
        case 'Boolean':
          // tmp = tmp + `${key}: "${value}"`;
          break;
      
        default:
          break;
      }
      

      if (index < items.length - 1) {
        tmp = tmp + `, `
      }
    })
  tmp = tmp + `) {
        ${items.map(d => {
          if (d.type === 'Date') {
            return d.key + " {\n" + "\t  formatted\n" + "\t}";
          }
          return d.key
        })
    .join('\n\t')}
      }
      `;
  return tmp;
}

module.exports = {
  insertMutation
}


function createIdentifier(TYPE, list) {
  const IdElem = list.filter(d => d.type === 'ID');
  const prefix = TYPE.toLowerCase().slice(0, 4);

  if (IdElem.length) {
    return prefix + IdElem[0].value.replace('-','');
  } else {
    return uuid.v4(); // generate an id on the fly
  }
}