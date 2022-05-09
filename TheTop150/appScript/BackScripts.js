function myFunction() {}
var App = SpreadsheetApp //this is just kinda needed for any kind of App Script aplication, it sets up our spreadsheet in the directory of my google drive
var SS = App.getActiveSpreadsheet()  //SS is a set up variable that calls for the spread sheet so we can do things with it in later lines

var ListPage = SS.getSheetByName("test")
var API_Sheet = SS.getSheetByName("test2") //this is so cringe lmao ok well here we go
var LeaderBoard = SS.getSheetByName("test3")
