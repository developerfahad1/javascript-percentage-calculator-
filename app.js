var studentname = document.querySelector('#std-name');
var chemMarks = document.querySelector('#chem-marks');
var matMarks = document.querySelector('#mat-marks');
var phyMarks = document.querySelector('#phy-marks');
var comMarks = document.querySelector('#com-marks');
var studentTotal = document.querySelector('#total-marks');
var percentage = document.querySelector('#percentage');
var grade = document.querySelector('#grade');


function calculatepercentage(){
    console.log(studentname.value);
    console.log(chemMarks.value);
    console.log(matMarks.value);
    console.log(phyMarks.value);
    console.log(comMarks.value);
    
   
  
    var totalmarks = 400;
    var obtainedMarks = +chemMarks.value + +matMarks.value + +phyMarks.value + +comMarks.value;
    console.log('obtained marks ===>' , obtainedMarks);
    studentTotal.innerHTML = obtainedMarks;

    var studentpercentage = obtainedMarks / totalmarks * 100;
    percentage.innerHTML = studentpercentage;


    if(studentpercentage > 80){
        grade.innerHTML = 'A+'
    }else if(studentpercentage > 70){
        grade.innerHTML = 'A'
    } else if(studentpercentage > 60){
        grade.innerHTML = 'B'
    }else{
        grade.innerHTML = 'FAIL'
    }
}
