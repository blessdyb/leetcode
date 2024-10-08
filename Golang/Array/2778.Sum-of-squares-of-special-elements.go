package main

func sumOfSquares(nums []int) int {
	ret := 0
	n := len(nums)
	for i := 1; i <= n; i++ {
		if (n % i) == 0 {
			ret += nums[i-1] * nums[i-1]
		}
	}
	return ret
}
