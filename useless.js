function useless(str) {

    if (typeof(str) !== 'string') {
      throw new Error("Insert a string");
    }

    let result = "";
    result += str
        .replace(/a/g,'๐')
        .replace(/b/g,'๐ค ')
        .replace(/c/g,'๐ป')
        .replace(/d/g,'๐ฅถ')
        .replace(/e/g,'๐ฝ')
        .replace(/f/g,'๐ต๏ธ')
        .replace(/g/g,'๐๐ป')
        .replace(/h/g,'๐พ')
        .replace(/g/g,'๐บ')
        .replace(/i/g,'โข๏ธ')
        .replace(/j/g,'โ๏ธ')
        .replace(/k/g,'๐ฉโ๐ซ')
        .replace(/l/g,'๐ถ')
        .replace(/m/g,'๐ฆนโโ๏ธ')
        .replace(/n/g,'๐ฅ')
        .replace(/o/g,'๐ฉ๐ฟโ๐ซ')
        .replace(/p/g,'๐จ๐พโโค๏ธโ๐โ๐จ๐ป')
        .replace(/q/g,'โ')
        .replace(/r/g,'๐ฉ๐ผโ๐ป')
        .replace(/s/g,'๐ฉ๐ผโ')
        .replace(/t/g,'๐๐ผ')
        .replace(/u/g,'๐๐ปโโ๏ธ')
        .replace(/v/g,'๐จ๐ปโ๐จ')
        .replace(/w/g,'๐ค๐ป')
        .replace(/x/g,'๐')
        .replace(/y/g,'๐ฏโโ๏ธ')
        .replace(/z/g,'๐ฆธ')
      
      
    console.log(result) 
    return result;
  }

module.exports = useless
