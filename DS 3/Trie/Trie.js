// A trie, also known as a prefix tree, is a tree-like data structure used to store a dynamic set of strings, where the keys are usually strings. It allows for efficient insertion, deletion, and lookup operations on strings, making it useful in applications like autocomplete, spell checking, and IP routing.

//======= basic structure of a Trie node in JavaScript ========
// Answer:
class TrieNode {
    constructor() {
        this.children = new Map(); // Map to store child nodes
        this.isEndOfWord = false; // Flag to mark end of a word
    }
}
// 
//======= insert a word into a Trie in JavaScript ========
// Answer:
function insertWord(root, word) {
    let node = root;
    for (let char of word) {
        if (!node.children.has(char)) {
            node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
    }
    node.isEndOfWord = true; // Mark end of word
}

//              (root)
//              /      \
//              a        b
//              /|\        \
//              p p b        a
//              /   |         |
//              p    r         l
//              / \   |         |
//              l   r  i         l
//              |   |  |         |
//              e   i  c         l
//              |            |
//              c            (end)
//              |            |
//              o            (end)
//              |            |
//              t            (end)
//              |            |
//              (end)        (end)


//======= search for a word in a Trie in JavaScript ========
// Answer:
function searchWord(root, word) {
    let node = root;
    for (let char of word) {
        if (!node.children.has(char)) {
            return false; // Word not found
        }
        node = node.children.get(char);
    }
    return node !== null && node.isEndOfWord; // Check if end of word marker is set
}


//=======  delete a word from a Trie in JavaScript ========
// Answer:
function deleteWord(root, word, depth = 0) {
    if (!root) return null;
    if (depth === word.length) {
        root.isEndOfWord = false;
        if (root.children.size === 0) {
            root = null;
        }
        return root;
    }

    const char = word[depth];
    root.children.set(char, deleteWord(root.children.get(char), word, depth + 1));

    if (root.children.size === 0 && !root.isEndOfWord) {
        root = null;
    }

    return root;
}


//======= check if a prefix exists in the Trie in JavaScript ========

// Answer:
function isPrefixPresent(root, prefix) {
    let node = root;
    for (let char of prefix) {
        if (!node.children.has(char)) {
            return false; // Prefix not found
        }
        node = node.children.get(char);
    }
    return true; // Prefix found
}








