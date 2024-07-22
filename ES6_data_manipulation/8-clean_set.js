function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  const cleanedValues = [];

  if (startString) {
    for (const value of set) {
      if (value.startsWith(startString)) {

        cleanedValues.push(value.slice(startString.length));
      }
    }

    return cleanedValues.join('-');
  }
  return '';
}

export default cleanSet;
