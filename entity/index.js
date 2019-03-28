/**
 * HTML Entity Encode&&Decode
 */

const entity = {
  /**
   * @param {String} str
   */
  encode: (str) => {
    let encode = [];
    str += '';
    for (let i = str.length - 1; i >= 0; i--) {
      encode.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
    }

    return encode.join('');
  },

  /**
   * @param {String} str
   */
  decode: (str) => {
    return str.replace(/&#(\d+);/g, function (match, decode) {
      return String.fromCharCode(decode);
    });
  }
}

module.exports.default = module.exports = entity;