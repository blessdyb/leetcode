package main

func countGoodSubstrings(s string) int {
	ret := 0
	for i := 0; i < len(s)-2; i++ {
		if s[i] != s[i+1] && s[i+1] != s[i+2] && s[i] != s[i+2] {
			ret++
		}
	}
	return ret
}
