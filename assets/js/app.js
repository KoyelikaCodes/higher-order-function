//FOR LOOP//

for(var i = 1; i<= 10; i++){
    console.log(i);
}

//PRINT EVEN NUMBER//
for(var k = 1; k<= 15; k++)
    if(k % 2 === 0){
        console.log(k);
    }

//PRINT ODD NUMBER//
for(var i = 1; i <= 15; i++)
    if(i % 2 !== 0){// duno method kaam karega like === 0 se bhi hoga aur !==(not double equal to) 0 se bhi hoga
        console.log(i);
    }

//3 && 7 (And Operator in the loop)

for(var i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 7 === 0){
        console.log(i);
    }
}

// 3 || 7 (Or Operator in the loop)

//for(var i = 1; i <= 100; i++){
    //if(i % 3 === 0 || i % 7 === 0){
        //console.log
    //}
//}

//Number Pattern//
1
12
123
1234
12345

//0r star 

//*
//**
//***
//****
//*****

for(var a = 1; a <= 5; a++){
    for(var b = 1; b <= a; b++){
        document.write(b);
    }

    document.write("<hr>") //(document.write(dot write method) method so basically ye ek horizontally line create karta hai aur <br> se direct next line pe jati hai)
}


// For Loop-templating of list[Itrating array]


//var age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Array >> where we can store the multiple data/information on the basis of index number
//index number start from 0

var skills = ['html', 'css', 'javascript', 'angular', 'mongoDB', 'java'];
var fruits = ['apple', 'mango', 'chikoo', 'banana', 'strawberry', ];

console.log(skills[4]);
console.log(skills[0]);
console.log(skills[2]);
console.log(skills[6]);
console.log(fruits[1]);
console.log(fruits[3]);
console.log(skills.length); //output 6

console.log(skills[skills.length-2]); // output mongoDB

skills[skills.length]='fullstack' // ise hoga ye skills me fullstack add hoga aur lenth ho jayega 7

console.log(skills); //and print karega 7 of lenth and last skill ka naam hoga fullstack

console.log(fruits.length - 3); //ise hoga fruits ke length me se sirf 3 cut hoga 2 lenth dega so output will be 2


//for(var i = 0; i < skills.length; i++){ //for loop 1
    //console.log(skills[i]);
//} 


for(var i = 0; i < skills.length; i++){ //for loop 2
    console.log("Hello" + " " + skills[i]); //cl("Hello " + skills[i]);
} 

// for loop 1:  skills ka data/value print karne ke liye aise kiye aur agar aap <= dete hai toh aapko length ke baad undefined kar ke aa jayega agar aap nhi chahte hai toh aapko normal < lessthan dene se proper length aa jayega without undefined or error.
// for loop 2:  and agar mujhe skills ke html se pehele "Hello" chahe sare value ke pehele then mujhe string interpolation method use karna hai like:

//****Template literal method****//

//template literal method me back tick aur $  ka use hoga and isme jaise {cl("Hello " + skills[i]);} aisa likhe  + symbol ka use hua hai hello likhne ke liye isme nhi hoga jaise example dekhiye 

//for(var i = 0; i < fruits.length; i++){ 
    //console.log(`Hello ${fruits[i]}`)
//} 

var skillInfo = document.getElementById('skillList');
console.log(skillInfo);

var result =" "; //bahar result declare karne se sath me emplty string dalenge to pura output ayega without undefined

for(var i = 0; i < skills.length; i++){
    console.log(skills[i]);
    result += "<li class='list-group-item'>" + skills[i] + "</li>";

    //result = " " + undefined"<li class='list-group-item'>" + html +"</li>"; // aisa dalne se html se hi satrt hoga empty string dalne se hua hai agar nah dale to undefined hoga jo mein already output ke sath likhi hun for own understanding.
}
console.log(result);