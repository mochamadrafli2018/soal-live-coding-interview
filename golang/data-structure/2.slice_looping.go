package main

import "fmt"

func main() {

	a := []int{1, 2, 3, 4, 5}

	// 1. using range
	for key, value := range a {
		fmt.Println(key, value)
	}
	// key can be replaced with "_":
	for _, value := range a {
		fmt.Println(value)
	}

	// 2. Using for loop
	for i := 0; i < len(a); i++ {
		fmt.Println(a[i])
	}
}
