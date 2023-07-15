// unknown
function mutiplyByTwo(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }
}
