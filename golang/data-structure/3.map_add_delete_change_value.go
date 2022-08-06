package main

import "fmt"

func main() {

	currency := map[string]string{
		"SGD": "Singapore Dollar",
		"IDR": "Indonesia Rupiah",
		"JPY": "Japan Yen",
		"CHF": "Switzerland Franc",
	}

	// Adding data to the map:
	currency["USD"] = "USA Dollar"
	fmt.Println("Currency with USD added: ", currency)

	// Remove data from the map:
	delete(currency, "IDR")
	fmt.Println("Currency with IDR deleted: ", currency)

	// Replacing one entry with another:
	currency["SGD"] = "Newzealand Dollar"
	fmt.Println("Currency with SGD value replaced with NZD: ", currency)

	// Ranging through the map:
	for key, value := range currency {
		fmt.Printf("%v might be equal to: %v\n", key, value)
	}
}