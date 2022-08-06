package main

import "fmt"

// Package scope array definition
var intArray [5]int
var strArray [4]string

func main() {

	intArray[0] = 1
	intArray[1] = 2
	intArray[2] = 3
	intArray[3] = 4
	intArray[4] = 5

	fmt.Println("This is the integer Array: ", intArray)

	strArray[0] = "first"
	strArray[1] = "second"
	strArray[2] = "third"
	strArray[3] = "fourth"

	fmt.Println("This is the string array: ", strArray)

}
