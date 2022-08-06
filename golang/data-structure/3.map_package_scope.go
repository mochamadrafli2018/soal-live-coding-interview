package main

import "fmt"

var nameAgeMap map[string]int

func main() {

	nameAgeMap = map[string]int{
		"Umar": 25,
		"Utsman": 23,
	}
	fmt.Println("Print the age of James: ", nameAgeMap["Umar"])

	for key, value := range nameAgeMap {
		fmt.Printf("%v is %d years old\n", key, value)
	}
}