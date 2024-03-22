class TrieNode{
    constructor(){
        this.children =new Map();
        this.isEndOfWord=false;
    }
}

class Trie{
    constructor(){
        this.root =new TrieNode();
    }

    insert(word){
        let node =this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char,new TrieNode())
            }
            node=node.children.get(char)
        }
        node.isEndOfWord=true;
    }
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    }
}



const trie =new Trie();
trie.insert('apple')
console.log(trie.search("aple")); // Output: true
