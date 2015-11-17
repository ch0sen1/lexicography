'use strict';

let Trie = require('./trie');

let radixSort = (strings, order) => {
  // create a new trie
  let trie = new Trie(order);

  // insert the given strings into the trie
  for (let i = 0; i < strings.length; i++) {
    trie.insert(strings[i]);
  }

  // print input
  console.log(`input: ${strings}, '${order}'`);

  // print out trie content in corrent order
  console.log(`output: ${trie.toArray()}`);

  // extra line for readability
  console.log();
}

radixSort(['acb', 'abc', 'bca'], 'abc');
radixSort(['acb', 'abc', 'bca'], 'cba');
radixSort(['aaa', 'aa', ''], 'a');
radixSort(['a', 'acb', 'abc', 'bca', '', 'c', 'bacc', 'b', 'acc'], 'abc');
radixSort(['a', 'acb', 'abc', 'bca', '', 'c', 'bacc', 'b', 'acc'], 'cba');
