/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function nodeSum(node) {
    if (node) {
        return node.val + nodeSum(node.left) + nodeSum(node.right);
    }
    return 0;
}

var findTilt = function(root) {
    let sum = 0;
    if (root && (root.left || root.right)) {
        sum += Math.abs(nodeSum(root.left) - nodeSum(root.right)) + findTilt(root.left) + findTilt(root.right);
     }
    return sum;
};

var findTilt = function(root) {
    let sum = 0;
    (function tiltNode(node){
        if (node) {
            const leftTilt = tiltNode(node.left);
            const rightTilt = tiltNode(node.right);
            const tilt = Math.abs(leftTilt - rightTilt);
            sum += tilt;
            return node.val + leftTilt + rightTilt;
        }
        return 0;
    })(root);
    return sum;
}
