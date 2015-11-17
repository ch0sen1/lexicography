'use strict';

let _ = require('underscore');

// defines a node used in a trie:
// char - character value
// word - boolean to indicate the end of a word
// child - array of trie nodes
let Node = class Node {
  constructor (char, child) {
    if (!char) char = '';
    if (!child) child = null;

    this.char = char;
    this.word = false;
    this.child = child;
  }
};

// defines an alphabet:
// index - object with alphabet characters as keys,
//   and the index of each character in the alphabet as values
// length - value that holds the length of the alphabet
let Alphabet = class Alphabet {
  constructor (order) {
    this.index = _.reduce(order, (memo, val, i) => {
      memo[val] = i;

      return memo;
    }, {});

    this.length = order.length;
  }
}

// defines a trie data structure:
// alpha - alphabet used in the trie
// root - node at the root of the trie
// insert - function that inserts a word into the trie
// toArray - returns an array of words in the given order
let Trie = class Trie {
  constructor (order) {
    this.alpha = new Alphabet(order);
    this.root = new Node(null, new Array(order.length));
    this.words = [];
  }

  insert (word) {
    // begin traversing trie at the root node
    let current = this.root;

    // if given an empty string at the root level
    if (word.length === 0) {
      current.char = word;
      current.word = true;
    }

    // iterate through the characters in a given word
    for (let i = 0; i < word.length; i++) {
      // looks up a character's index in the alphabet
      let index = this.alpha.index[word[i]];

      // if it's the first time visiting an index
      if (!current.child[index]) {
        // create a new node
        current.child[index] = new Node(word[i], new Array(word.length));
      }

      // update current node pointer
      current = current.child[index];

      // mark the last node when done iterating through a word
      if (i === word.length - 1) current.word = true;
    }
  }

  toArray (node, word) {
    // begin traversing trie at the root node
    if (!node) {
      // initial values
      this.toArray(this.root, '');

      // return the list of words in the correct order
      return this.words;
    } else {
      // push a word to the words list if node contains last character in a word
      if (node.word) this.words.push(`'${word}${node.char}'`);

      // iterate through a node's children
      for (let i = 0; i < node.child.length; i++) {
        if (node.child[i]) this.toArray(node.child[i], `${word}${node.char}`);
      }

      // done iterating through a node's children
      return;
    }
  }
};

module.exports = Trie;
