package main

import (
	"booking-app/helper" //user-defined package-helper
	"fmt"
	"sync"
	"time"
)

// pakacge level variable
var confName="Demo Conference"
const confTickets=50 
var balanceTicket uint=50 //unsinged int

type UserData struct {
	fname string
	lname string
	email string
	noOfTickets uint
}

// var bookings []string //declaring slice of string type 
// var bookings []map[string]string //declaring slice of map type 
var bookings []UserData //declaring slice of user defined type   UserData
var wg=sync.WaitGroup{} //sync- main cant exit before  executing the routine
func main() {

	// confName:="Demo Conference" another method to define variable

	greetUser()

	// fmt.Printf("Type of Variable,%T,%T,%T\n",confName,confTickets,balanceTicket) //print variable type

	//var bookings [50]string //declaring array of string type ieth size 50
	//bookings[0]="Aseel" //assigning value to array

	// fmt.Printf("Length of array %v\n",len(bookings))

	// for loop infinite
	for {
		var fname string
		var lname string
		var email string
		var userTicket uint
	// getting input
		fmt.Print("Enter your Fname:")
		fmt.Scan(&fname)
		fmt.Print("Enter your Lname:")
		fmt.Scan(&lname)
		fmt.Print("Enter your email:")
		fmt.Scan(&email)
		fmt.Print("Enter required ticket:")
		fmt.Scan(&userTicket)
		
		// user ip validation


		
		isValidName,isValidEmail,isValidTicket:=helper.ValidateInput(fname,lname,email,userTicket,balanceTicket)

		if isValidName && isValidEmail &&isValidTicket{
			balanceTicket=balanceTicket-userTicket
			var userData=UserData{
				fname: fname,
				lname: lname,
				email: email,
				noOfTickets: userTicket,
			}

			
			bookings = append(bookings, userData  )
			fmt.Printf("Thank you %v for booking %v tickets.Soft copy of ticket is mailed to %v.\n",fname,userTicket,email)
			fmt.Printf("Availibale ticket %v\n",balanceTicket)
			wg.Add(1)
			go sendTicketFaking(fname,lname,userTicket,email) //enable concurrency- go routine
			fmt.Printf("Tickets booked (Fnames) by %v \n",printFirstName())

	
			if balanceTicket ==0 {
				fmt.Println("All tickets are booked,no seat remaining")
				break
			}
			}else{
				
			fmt.Printf("Input error,please try again\n",)
			if !isValidName {
				fmt.Printf("Invalid Name\n",)
			}
			if !isValidEmail {
				fmt.Printf("Invalid email\n",)
			}
			if !isValidTicket {
				fmt.Printf("Invalid ticket number.\n",)
			}

		}	
		
	}
wg.Wait()
	
}

func greetUser(){
	fmt.Printf("Welcome to %v booking platform\n",confName)
	fmt.Println("Book your tickets to attend")
	fmt.Println("Total Ticket:",confTickets)
	fmt.Println("Availiable Ticket:",balanceTicket)
}

func printFirstName() []string{
	var fNames= []string{}
	// for-each loop
	for _,booking := range bookings{
	fNames=append(fNames, booking.fname)

	}

	// fmt.Printf("Tickets booked (Fnames) by %v \n",fNames)
	return fNames
}

func sendTicketFaking(fname string,lname string,userTicket uint,email string){
	time.Sleep(10*time.Second)
	ticket:=fmt.Sprintf("%v tickets for %v %v",userTicket,fname,lname)
	fmt.Println("------------------------")
	fmt.Printf("Sending ticketing %v to email %v\n",ticket,email)
	fmt.Println("------------------------")
	wg.Done()
}