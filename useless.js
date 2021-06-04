function useless(str) {

    if (typeof(str) !== 'string') {
      throw new Error("Insert a string");
    }

    let result = "";
    result += str
        .replace(/a/g,'😎')
        .replace(/b/g,'🤠')
        .replace(/c/g,'👻')
        .replace(/d/g,'🥶')
        .replace(/e/g,'👽')
        .replace(/f/g,'🕵️')
        .replace(/g/g,'🏃🏻')
        .replace(/h/g,'👾')
        .replace(/g/g,'👺')
        .replace(/i/g,'☢️')
        .replace(/j/g,'♏️')
        .replace(/k/g,'👩‍🏫')
        .replace(/l/g,'🈶')
        .replace(/m/g,'🦹‍♂️')
        .replace(/n/g,'👥')
        .replace(/o/g,'👩🏿‍🏫')
        .replace(/p/g,'👨🏾‍❤️‍💋‍👨🏻')
        .replace(/q/g,'♝')
        .replace(/r/g,'👩🏼‍💻')
        .replace(/s/g,'👩🏼‍')
        .replace(/t/g,'🙌🏼')
        .replace(/u/g,'🙆🏻‍♂️')
        .replace(/v/g,'👨🏻‍🎨')
        .replace(/w/g,'🤙🏻')
        .replace(/x/g,'👑')
        .replace(/y/g,'👯‍♀️')
        .replace(/z/g,'🦸')
      
      
    console.log(result) 
    return result;
  }

module.exports = useless
