package main

import "fmt"

type student struct {
	firstName string
	lastName  string
	email     string
	age       int
	hobby     []string
}

func main() {
	//Assigning values to the fields in the person struct:
	student_1 := student{
		firstName: "Mark",
		lastName:  "Kedu",
		email:     "blabla@email.gom",
		age:       30,
		hobby: []string{
			"reading the novel",
			"working out",
			"sleeping",
		},
	}

	fmt.Println("The student data: ", student_1)
	// Access struct item
	fmt.Println("The student's name: ", student_1.firstName)
	for key, i := range student_1.hobby {
		fmt.Println("Student hobby number", key+1, "is", i)
	}
}
