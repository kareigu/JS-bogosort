"use strict";

export var shuffle = function shuffle(deck) {
  var random = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random;
  var clone = deck.slice(0);
  var srcIndex = deck.length;
  var dstIndex = 0;
  var shuffled = new Array(srcIndex);

  while (srcIndex) {
    var randIndex = srcIndex * random() | 0;
    shuffled[dstIndex++] = clone[randIndex];
    clone[randIndex] = clone[--srcIndex];
  }

  return shuffled;
};
