// CodeUse var... never.
Use let... when you know the value of a variable will change. For example, a counter variable that starts at 0 and is subsequently incremented to 1, 2, 3, and so on. In the lessons on looping and iteration in JavaScript, let will have its moment in the spotlight.
Use const... for every other variable.
Best practice is to always declare variables with const and then, if you later realize that the value has to change over the course of your program, circle back to change it to let. your solution in this!


const companyName = 'Scuber';

let mostProfitableNeighborhood = 'Chelsea';

let companyCeo = 'Lauren Hart';