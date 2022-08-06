package main

import "fmt"

type student struct {
	firstName string
	lastName  string
	email     string
	age       int
}

func main() {
	//Assigning values to the fields in the person struct:
	student_1 := student{
		firstName: "Mark",
		lastName:  "Kedu",
		email:     "blabla@email.gom",
		age:       30,
	}

	fmt.Println("The student data: ", student_1)
}
