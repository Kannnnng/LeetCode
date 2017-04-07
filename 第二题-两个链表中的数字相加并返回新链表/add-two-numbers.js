/**
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 8 Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var myAddTwoNumbers = function(l1, l2) {
  var temp = new ListNode(0);
  var head = temp;
  var headForL1 = l1;
  var headForL2 = l2;
  var carry = 0;
  var temp1 = 0;
  var temp2 = 0;
  while (headForL1 || headForL2) {
    temp.next = new ListNode(0);
    temp = temp.next;
    temp1 = headForL1 ? headForL1.val : 0;
    temp2 = headForL2 ? headForL2.val : 0;
    temp.val = (carry + temp1 + temp2) % 10;
    carry = parseInt((carry + temp1 + temp2) / 10);
    headForL1 = headForL1 ? headForL1.next : null;
    headForL2 = headForL2 ? headForL2.next : null;
  }
  if (carry) {
    temp.next = new ListNode(carry);
    temp = temp.next;
  }
  return head.next;
};

var temp1 = new ListNode(1);
var temp2 = new ListNode(2);
var temp3 = new ListNode(3);
var temp4 = new ListNode(4);
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;

var tempTwo1 = new ListNode(1);
var tempTwo2 = new ListNode(2);
var tempTwo3 = new ListNode(3);
var tempTwo4 = new ListNode(4);
tempTwo1.next = tempTwo2;
tempTwo2.next = tempTwo3;
tempTwo3.next = tempTwo4;

var temp = myAddTwoNumbers(temp1, tempTwo1);

console.log(temp);