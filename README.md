# lexicography-sorting
Sort an array of strings based on an arbitrary lexicographic ordering.

To run this project, you must have at least Node v4.0.0 installed. Open a terminal window, clone this repo, then `cd` into the project directory. Run `npm install` to install dependencies and then run `npm start` to run the main index script. To try different inputs, edit the main index script.

My solution to sorting an array of strings with a given arbitrary order uses a trie-based radix sort. I first insert all the given strings in a trie data structure then retrieve the keys in the trie using a depth-first traversal. Each node contains an array of pointers to other nodes and the order of the pointers is decided when given an alphabet.

This solution's worst case time complexity is O(nk) where n is the size of the array to be sorted and k is the length of each word. Every time a node is added to the trie, an empty array is initialized with a max size of 26 items. I decided the sacrifice in  memory was worth it to save time sorting. The worst case for space complexity is O(n + k).
