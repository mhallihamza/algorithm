let string ="hi world.";
let count1=0,count2=0,count3=0;
let regex1 =/[aeiouy]/g;
count1 = string.length;
if(count1!=0) count2 =1;
if(regex1.test(string)===false) { 
  count2 =0; 
  }
else count2 = string.match(regex1).length;
if(count1!=0) count3 =string.split(" ").length
else count3 = 0;
console.log(count1);
console.log(count2);
console.log(count3);