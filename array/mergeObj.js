const mergeObj = (src, mergeName, dest) => {
  if (!dest) {
    return src;
  } else {
    src.forEach((s, sIndex) => {
      dest.forEach((d) => {
        if (s[mergeName] === d[mergeName]) {
          src[sIndex] = d;
        }
      })
    })
    return src;
  }
}

module.exports.default = module.exports = mergeObj;