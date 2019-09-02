//supports only the object in the api
const searchInObject = (object, term1) => {
    const term = term1.toLowerCase();
    const obj = Object.assign({}, object);
    let found = false;
    const keys = Object.keys(obj);
    for (let key of keys) {
      if (obj[key].toString().toLowerCase().indexOf(term) !== -1) {
        //console.log(term)
        found = true;
        const value = obj[key];
        const index = value.toLowerCase().indexOf(term);
        const subtr = value.toString().slice(index, index + term.length);
        obj[key+'dis'] = value.slice(0, index) + '<span class="hl">' + subtr + '</span>' + value.slice(index + term.length, value.length);
        console.log(obj[key]);
      }
    }
    if (found) return obj;
    return undefined;
  }
  
  
  
  export const search = (dataSet, term) => {
    const matched = [];
    dataSet.forEach((item) => {
      const result = searchInObject(item, term);
      if (result) matched.push(result);
    })
    return matched;
  }