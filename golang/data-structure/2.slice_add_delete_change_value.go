package main

import "fmt"

func main() {

	num := []int{1, 2, 3, 4, 5}
	// get value by index
	a := num[1:3] // same with var a = num[1:3]
	fmt.Println(a)
	// add new data to slice
	num = append(num, 6)
	// delete data in slice by index using a variadic argument
	num = append(num[:2], num[2+1:]...)
	// change value by index
	num[3] = 3
	fmt.Println("Integer array: ", num)
}
