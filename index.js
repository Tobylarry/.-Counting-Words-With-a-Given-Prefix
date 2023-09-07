/**

You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.



*/

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

 //using filter method
var prefixCount = function(words, pref) {
    return words.filter((a)=> a.slice(0, pref.length) === pref).length;
};

//using method startwith
//const prefixCount = (words, pref) => words.filter(word => word.startsWith(pref)).length;
