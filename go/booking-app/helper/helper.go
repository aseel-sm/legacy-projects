package helper

import "strings"
func ValidateInput(fname string,lname string,email string,userTicket uint,balanceTicket uint) (bool,bool,bool){
	isValidName:=len(fname) >=2 &&len(lname)>=2
	isValidEmail:=strings.Contains(email,"@")
	isValidTicket:= userTicket>0 && userTicket<=balanceTicket
	return isValidName,isValidEmail,isValidTicket
}