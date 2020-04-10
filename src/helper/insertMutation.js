const insertMutation = (TYPE, items, identifier) => {

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
  tmp = tmp + `)
        ${items.map(d => d.key)
    .join('\n\t')}
      }
      `;
  return tmp;
}

module.exports = {
  insertMutation
}