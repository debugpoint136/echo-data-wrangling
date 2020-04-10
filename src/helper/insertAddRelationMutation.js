const insertAddRelationMutation = (source, target) => {
  const identifier = createPrefix(source) + createPrefix(target);
  return `
  ${identifier}: Add${source.name}${target.name} (from: { id: "${source.id}" }, to: { id: "${target.id}" }) {
    from {
      id
    }
  }
  `;
}

module.exports = {
  insertAddRelationMutation
}

function createPrefix(str) {
  return str.name.toLowerCase().slice(0, 4) + str.id.toLowerCase().replace('-', '');
}