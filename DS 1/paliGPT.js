// class ListNode {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }

// function print(head) {
//     let current=head
//     while (current) {
//         console.log(current.data);
//         current=current.next
//     }
// }

//   let list2= new ListNode ( 1,new ListNode ( 2,new ListNode ( 3,new ListNode ( 4, new ListNode ( 5, new ListNode (6))) ) ) )
//   print(list2)

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================

class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function isPalindrome(head) {
    if (!head || !head.next) {
        return true; // Empty list or single-node list is considered a palindrome
    }

    // Find the middle of the linked list
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let reversedSecondHalf = reverseList(slow);

    // Compare the first and reversed second halves
    while (reversedSecondHalf) {
        if (head.data !== reversedSecondHalf.data) {
            return false;
        }
        head = head.next;
        reversedSecondHalf = reversedSecondHalf.next;
    }

    return true;
}

function reverseList(head) {
    // Initialize two pointers: prev and current
    let prev = null;
    let current = head;

    // Iterate through the linked list
    while (current) {
        // Store the next node in the list in a temporary variable
        let next = current.next;

        // Reverse the link by pointing the current node's next to the previous node
        current.next = prev;

        // Move the prev pointer to the current node
        prev = current;

        // Move the current pointer to the next node in the original list
        current = next;
    }

    // After the loop, 'prev' will be the new head of the reversed list
    return prev;
}

// Example usage:
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))));
console.log(isPalindrome(list)); // Output: true

const anotherList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(isPalindrome(anotherList)); // Output: false


// ==============================================================================================
// ==============================================================================================
// ==============================================================================================

// class ListNode {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }
  
//   function isPalindromeWithStack(head) {
//     let stack = [];
//     let slow = head;
//     let fast = head;
  
//     // Push the first half of the linked list onto the stack
//     while (fast && fast.next) {
//       stack.push(slow.data);
//       slow = slow.next;
//       fast = fast.next.next;
//     }
  
//     // If the length is odd, skip the middle element
//     if (fast) {
//       slow = slow.next;
//     }
  
//     // Pop elements from the stack and compare with the second half of the linked list
//     while (slow) {
//       if (slow.data !== stack.pop()) {
//         return false;
//       }
//       slow = slow.next;
//     }
  
//     return true;
//   }
  
//   // Example usage:
//   const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))));
//   console.log(isPalindromeWithStack(list)); // Output: true
  
//   const anotherList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
//   console.log(isPalindromeWithStack(anotherList)); // Output: false
  