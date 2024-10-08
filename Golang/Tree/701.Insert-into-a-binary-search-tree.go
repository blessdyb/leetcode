package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func insertIntoBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
		return &TreeNode{
			Val: val,
		}
	} else if root.Val > val {
		if root.Left == nil {
			root.Left = &TreeNode{
				Val: val,
			}
		} else {
			insertIntoBST(root.Left, val)
		}
	} else if root.Right == nil {
		root.Right = &TreeNode{
			Val: val,
		}
	} else {
		insertIntoBST(root.Right, val)
	}
	return root
}
