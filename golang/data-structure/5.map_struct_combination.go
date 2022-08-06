// Adding key:value pair in a map
package main

// importing required packages
import "fmt"

// declaring a struct
type User struct {
	name string
	id	int
	password string
}

func main() {

	// Creating struct instances
	user1 := User{"Aisha", 1, "pass1"}
	user2 := User{"Alina", 2, "pass2"}
	user3 := User{"Hana", 3, "pass3"}

	// Declaring and initialising using map literals
	mp:= map[User]int{
		user1: 1, 
		user2: 2,
	}
	fmt.Println("Original map was", mp)
	
	// Add a new user in map
	mp[user3] = 3
	mp[User{"Zafia", 4, "pass4"}] = 4

	// Values have their zero values
	// Here initial value was 0 after
	// incrementing it became 1
	mp[User{"Tina", 5, "pass5"}]++

	fmt.Println("After adding key:value "+
	"pairs to the map, Updated map is:", mp)
}
