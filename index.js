// 1.  // Employee shift check

// let start = Number(prompt("enter the start time:")); 
// let ampm = prompt("is the start time am or pm:").toLowerCase(); 
// let end = Number(prompt("enter the end time:")); 
// if (start >= 10 && ampm == "pm" && end <= 6) { 
// console.log(`Night shift`); 
// } 
// else { 
// console.log(`day shift`); 
// }
// -------------------------------------------------------------------

// 2. // temperature advisory

// let n = +prompt("Enter the temperature : ")
// if(n<10){
//     console.log("Cold")
// }else if( n>10&&n<25){
//     console.log("Moderate")
// }else if(n>25){
//     console.log("Hot")
// }else{
//     console.log("Enter a valid number")
// }

// -------------------------------------------------------------------

// 3.Discount


// let n = +prompt("enter the amount : ");
// if(n>100&&n<200){
//     p = (10*n)/100
//     console.log(`10% Discount ${100-p} `)
// }else if(n>200){
//        p = (20*n)/100
//     console.log(`10% Discount ${100-p} `)
// }else if(n<100){
//     console.log("discount not applied")
// }else{
//     console.log("enter a valid amount")
// }

// --------------------------------------------------------------------

// 4.Elevator Capacity Check

// let n = prompt("enter the no of persons : ");
// let arr = [];
// for(let i = 0;i<n;i++){
//     arr[i] = prompt(`enter the weights  ${i+1} : `)
// }
// sum = 0 ;
// for(let  i = 0 ; i<arr.length;i++){
//     sum += +arr[i]
// }
// console.log(sum)
// if(sum > 500){
//     console.log("over loaded")
// }else{
//     console.log("the elevator is not overloaded")
// }

// ------------------------------------------------------------------------

// 5.E-commerce Order Validity 


// let n = prompt("enter the no of orders : ");
// if(n<5){
//     console.log("Invalid order")
// }else if(n=>5&&n<=10){
//     console.log("Standard order")
// }else if(n>10){
//     console.log("Bulk order")
// }else{
//     console.log("enter a valid number")
// }

// --------------------------------------------------------------------------

// leet code 13 and 9

// 9.palindrome

// let n = +prompt("enter the a number : ");
// sum = 0;
// let p = n;
// while(p>0){
//     remainder = p % 10;
//     sum = sum*10 + remainder ;
//     p = Math.floor(p/10);
// }
// console.log(sum)

// if(n === sum ){
//     console.log("palindrome")
// }else{
//     console.log("not a palindrome")
// }

// ----------------------------------------------------------------------------


// day -2
// ---------

// 6.Account Balance Status

// let n = prompt("Enter the balance : ");
// if(n<100){
//     console.log("Low Balance")
// }else if(n>=100&&n<=500){
//     console.log("Healthy")
// }else if(n>500){
//     console.log("High Balance")
// }else{
//     console.log("Enter a valid number")
// }


// -------------------------------------------------------------------------------

// 7.Flight Price Calculator


// let n = prompt("Enter the ticket cost : ");
// let discount = 0;
// if(n>0){
//   let p = prompt("enter the class : ").toLowerCase();
//   if(p = "advance"){
//      discount = (5*100)/n;
     
//   }else if(p = "business"){
//       discount = (10*100)/n
//   }else if(p = "premium"){
//       discount = (15*100)/n
//   }
// }else{
//     console.log("enter a valid number")
// }
// console.log(discount)

// ------------------------------------------------------------------------------

// 8.Voting Eligibility


// let age = prompt("Enter the age : ");
// if(age >=18){
//     console.log("eligible for vote ")
// }else{
//     console.log("Not eligible for vote")
// }

// ---------------------------------------------
// 9.
// -----------------------------------------------------------------------------
// 10.Traffic Light Simulation

// let color = prompt("Enter the color : ").toLowerCase();
// if(color === "red"){
//     console.log("Stop")
// }else if(color === "yellow"){
//     console.log("Slow down")
// }else if(color === "green"){
//     console.log("Go")
// }else{
//     console.log("enter a valid color")
// }
// ---------------------------------------------------------------------------

// leet code - 2

// 1.two sum 

// let arr  = [2,7,11,15];
// target  = 9;
// ans = 0;
// for(let  i = 0;i<arr.length;i++){
//     for(let j = i+1;i<arr.length;i++){
//       if(arr[i]+arr[j] === target){
//          ans = [i,j];
//       }
//     }
// }
// console.log(ans);

// ----------------------------------------------------------------------------------

// 7.  reverse a string

// let x = 123;
// sum = 0;
// while(x>0){
//     rem = x%10;
//     sum = sum*10 +rem;
//     x = Math.floor(x/10);
// }
// console.log(sum)


// -------------------------------------------------------------------------------------
// 9.palindrome

// let n = 121;
// sum = 0;
// dum = n;
// while(dum>0){
//     rem = dum%10;
//     sum = (sum*10) + rem;
//     dum =Math.floor(dum/10);
// }
// // console.log(sum)
// // console.log(n)
// if(sum === n ){
//     console.log("palindrome")
// }else{
//     console.log("not a palindrome")
// }

// ---------------------------------------------------------------------------------------

// day --3
// ---------------------


// 11. Electricity Bill Calculation

// let n  = +prompt("Enter the amount : ");
// sum = 0;
// if(n<=100){
//     sum = n + n*0.10;
// }else if(n>100&&n<=200){
// sum = n + n*0.0;   
// }else if(n>200){
//    sum = n + n*0.10;
// }else{
//     console.log("enter the valid..!")
// }
// console.log(sum)

// ---------------------------------------------------------------------------------------------

// 12.Calculate Weekly Wages

// let n = prompt("Enter the time : ");
// let w = prompt("Enter the wages : ")
// sum = 0;
// if(n>40){
//     sum = w*1.5;
// }else if(n<=40) {
//  sum = n;
// }else{
//     console.log("Enter the valid ! ")
// }

// console.log(sum)

// ---------------------------------------------------------------------------------------------

// 13.Student Grades Calculation

// let sub1 = parseFloat(prompt("Enter the marks 1 : "));
// let sub2 = parseFloat(prompt("Enter the marks 2 : "));
// let sub3 = parseFloat(prompt("Enter the marks 3 : "));

// let sum = (sub1 + sub2 + sub3) / 3;

// if (sum >= 90 && sum <= 100) {
//     console.log("A");
// } else if (sum >= 80 && sum <= 89) {
//     console.log("B");
// } else if (sum >= 70 && sum <= 79) {
//     console.log("C");
// } else {
//     console.log("Enter valid marks!");
// }

// -----------------------------------------------------------------------------------------

// 14.Warehouse Stock Update


// let n  = prompt("Enter the stock : ");
// if(n<0){
//     console.log("Out of stock")
// }else if(n<=10&&n>=0){
//     console.log("Low Stock")
// }else if(n>10){
//    console.log("In Stock") 
// }else{
//     console.log("Enter the valid stock ! ")
// }

// ---------------------------------------------------------------------------------------

// 15.Game Score Tracker

// let n = prompt("Enter the points : ");
// if(n>=100&&n<=500){
//   console.log("Crossed 100 milestone ")  
// }else if(n>=500&&n<=1000){
//   console.log("Crossed 500 milestone ")  
// }else if(n>=1000){
//   console.log("Crossed 1000 milestone ")
// }else{
//    console.log("enter teh valid points!")
// }

// ----------------------------------------------------------------------------------------




// modules
// --------------

// 16.Calculate Train Fare

// import {trainFare} from "./utlise.js";
// let distance = +prompt("Enter the value : ");
// trainFare(distance);

// -----------------------------------------------


// 17.Loan Eligibility Check

// import {loanEligibilityCheck} from "./utlise.js";

// let income = prompt("Enter the income : ");
// let score  = prompt("Enter the score : ");
// loanEligibilityCheck(income,score);
// -------------------------------------------------------

// 18. Movie Ticket Price Calculation
// import {movieTicketPriceCalculation} from "./utlise.js"
// let price = +prompt("enter the ticket price : ");
// let studentOrSenior = prompt("enter the student or senior : ").toLowerCase();
// console.log(movieTicketPriceCalculation(price,studentOrSenior));

// ------------------------------------------------------------

// 19.Game Level Up

// function gameLevelUp(){
//   let points = prompt("enter the points : ")
//   if(points>=1000){
//     console.log("you have enough points to level up")
//   }else{
//     console.log("keep playing you doesn't have enough points for level up") 
//   }
// }

// gameLevelUp();

// -----------------------------------------

// 20.Fuel Cost Estimation


// function fuelCostEstimation(){
//   let distance = prompt("Enter the distance : ");
// let fuel = prompt("Enter the fuel efficiency : ")
//  let fuelPrice = prompt("Enter the fuel price : ")

//  let fuelRequired = distance/fuel;
//  let totalCost = fuelRequired*fuelPrice;
//  return totalCost;
// }

// console.log(fuelCostEstimation());

// -------------------------------------------------

// 21.Classroom Seating Arrangement

// function classroomSeatingArrangement(){
//   let students = prompt("Enter the number of students : ")
//   let seats = prompt("Enter the seats per row : ")

//  let rows = Math.round(students/seats);

// return rows;
// }
// console.log(`requried rows : ${classroomSeatingArrangement()}`)
// -----------------------------------------------


// 22.Tax Calculation


// function taxCalculation(){
// let income = prompt("Enter the income : ")
// let tax = 0;
// if(income>0&&income<50000){
// tax = (income/100)*10;
// }else if(income>50000&&income<100000){
//   tax = (income/100)*20;
// }else if(income>100000){
//   tax = (income/100)*30;
// }else{
//   console.log("Enter the valid details !")
// }
// console.log(`Tax : ${tax}`)
// return tax
// }

// taxCalculation()

// ---------------------------------------------------


// 23. Employee Bonus Calculation

// function employeeBonusCalculation(){
//   let salary = prompt("Enter the salary : ")
//   let service = prompt("Enter the years of services : ")
//   let bonus = 0;
//   if(service>=5&&service<10){
//      bonus = (salary/100)*5;
//   }else if(service>10&&service<20){
//     bonus = (salary/100)*10;
//   }else if(service>=20){
//     bonus = (salary/100)*15;
//   }
//   console.log(bonus)
//   return bonus;
// }
// employeeBonusCalculation()

// -------------------------------------------------------

// 24. Fuel Efficiency Check

// function fuelEfficiencyCheck(){
//   let fuelUsed = prompt("Enter the fuel used : ");
//   let distance = prompt("Enter the distance : ");
//   let fuelEfficiency = fuelUsed / distance;
//   console.log(`your fuel efficiency is : ${fuelEfficiency}`)
//   return fuelEfficiency;
// }
// fuelEfficiencyCheck()

// ----------------------------------------------------------------

// 25.Internet Usage Alert

// function internetUsageAlert(){
//   let data = +prompt("enter the data : ")
//   if(data>80&&data<100){
//     alert("your data reached 80%")
//   }else if(data>100){
//     alert("your data reached 100%")
//   }else{
//     console.log("enter a valid data")
//   }
// }
// internetUsageAlert();

// --------------------------------------------------------------------

