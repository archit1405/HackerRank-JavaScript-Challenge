<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/buttonsGrid.css" type ="text/css">
        <title>Buttons Grid</title>
    </head>
  var b=document.getElementById('button5');
var arr=[1,2,3,6,9,8,7,4];
b.onclick=function()
{
arr.unshift(arr.pop());
 document.getElementById('button1').innerHTML =arr[0];
    document.getElementById('button2').innerHTML =arr[1] ;
    document.getElementById('button3').innerHTML =arr[2];
    document.getElementById('button6').innerHTML =arr[3];
    document.getElementById('button9').innerHTML =arr[4];
    document.getElementById('button8').innerHTML =arr[5];
    document.getElementById('button7').innerHTML =arr[6];
    document.getElementById('button4').innerHTML =arr[7];
    
}