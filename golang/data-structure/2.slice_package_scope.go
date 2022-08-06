package main

import "fmt"

// Package scope array definition
var intSlice []int
var strSlice []string

func main() {
	intSlice = []int{1, 2, 3, 4, 5}
	fmt.Println("integer Slice: ", intSlice)

	strSlice = []string{"a", "b", "c", "d", "e"}
	fmt.Println("string slice: ", strSlice)
	printInteger()
}

// This function can access the integerSlice because integerSlice is package scoped
func printInteger() {
	fmt.Println("Integer: ", intSlice)
}
