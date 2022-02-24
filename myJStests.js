
const myTest = { name: '  jane  ' } 
console.log(myTest)

function trimProperties(obj) {
    // ✨ implement
    console.log(trimProperties)
    return(Object.keys(obj).forEach(k => obj[k] = obj[k].trim()));
  }


  trimProperties(myTest)