`use strict`   //контроль

console.log('<<Язык сценариев JavaScript и библиотека jQeerty>>')

console.log('Задание # 1');

function fn(a,b){
   if(typeof a!=='number'||typeof b!=='number'){
      return 'One of the arguments is not a number'
   }
   if(a < b){
      return -1;
   }else if(a > b){
      return 1;
   }else return 0;
}
//let a = prompt("Enter first digit:");
console.log('fn(3,5) :',fn(3,5));
console.log('fn(7,4) :',fn(7,4));
console.log('fn(12,12) :',fn(12,12));
console.log('fn("abc",34) :',fn('abc',34));
//----------------------------
console.log('');
console.log('Задание № 2');

function factorial(n){
    return n ? n * factorial(n - 1) : 1;
}
console.log('factorial 5 = ',factorial(5));
 //----
function factorial2(n,result=1 ){
   if(!n){
return result;
   }else{
    return factorial2(n - 1, result * n);
   }
}
console.log('factorial2 6 = ',factorial2(6));
//-----------------------------------
console.log('');
console.log('Задание № 3');

//let a = prompt("Enter the first number: ");
//let b = prompt("Enter the second the number: ");
//let c = prompt("Enter the third number: ");
function numbers(a,b,c){
return  Number(`${a}${b}${c}`);
}
console.log('number 1,2,3 = ',numbers(1,2,3));
console.log('number 5,7,8 = ',numbers(5,7,8));
console.log('number 7,8,7 = ',numbers(7,8,7));
//---------------------------------------
console.log('');
console.log('Задание № 4');

function square(length,width = length){
   if(length > 0 && width > 0)
      return (length * width);
   else return 'Error. Number not positive';
}
console.log('Square width 5, length 5 = ',square(5,5));
console.log('Square width 7, length 5 = ',square(7,5));
console.log('Square width 10, length 0 = ',square(10));
console.log('Square width -1, length 6 = ',square(-1,6));

//---------------------------------------
console.log('');
console.log('Задание № 5');

function perfectNum(n){
   let summa = 0;
   if(n<=0){
      return 'Error. number not positive!';
   }
   for(let i = 0;i < n; i++)
      if(n % i === 0)
         summa += i;
   if(summa === n) return true;
   else return false;      
   }
console.log('Number 6 : ',perfectNum(6));
console.log('Number 28: ',perfectNum(28));
console.log('Number 777 : ',perfectNum(777));
console.log('Number 8128 : ',perfectNum(8128));
console.log('Number 120 : ',perfectNum(120));
console.log('Number 130 : ',perfectNum(130));
console.log('Number 496 : ',perfectNum(496));
console.log('Number -10 : ',perfectNum(-10));


//---------------------------------------
console.log('');
console.log('Задание № 6');

function perfectRange(min,max){
   for(;min <= max; min++){
      if(perfectNum(min))
      console.log('perfect number: ',min);
   }
}
perfectRange(3,1000);

//------------------------------------------
console.log('');
console.log('Задание № 7');

function consoleTime(h, m = 0, s = 0){
   if( h !== 0 && h <= 9){
      h = '0' + `${h}`;
   }
   else if(h = '00'){
   
   }
   if(m !== 0 && m <= 9){
      m = '0'+ `${m}`;
   }
   else if(m === 0){
      m = '00';
   }
   if(s !== 0 && s <= 9){
      s = '0'+ `${s}`;
   }
   else if(s === 0){
      s = '00';
   }
   let time = `${h}:${m}:${s}`;
   //return `${h}:${m}:${s}`;
   return time;
}
console.log('consoleTime(4): ',consoleTime(4));//04:00:00
console.log('consoleTime(12,12,12): ',consoleTime(12,12,12));//04:00:00
console.log('consoleTime(2,34,40): ',consoleTime(2,34,40));//04:00:00

//-----------------------------------------
console.log('');
console.log('Задание № 8');

function consSecTime(h,m = 0,s = 0){
  return ((h *= 3600) + (m *= 60) + s);
}
console.log('consSecTime(3): ',consSecTime(3))//10800
console.log('consSecTime(1): ',consSecTime(1))//3600
console.log('consSecTime(1,1): ',consSecTime(1,1,))//3660
console.log('consSecTime(1,2,2): ',consSecTime(1,2,2))//3722


//-----------------------------------------
console.log('');
console.log('Задание № 9');

function secondsTime(s){
   let hour = Math.floor(s / 3600);//Math.floor() округляет в меньшую сторону
   //console.log('hour: ',hour);
   let minutes = Math.floor(((s / 3600) - hour) * 60);
   //console.log('minutes: ',minutes);
   let seconds = s - ((hour * 3600) + (minutes * 60));
   //console.log('seconds: ',seconds);
   return consoleTime(hour,minutes,seconds);
}
//secondsTime(3600)//1
secondsTime(3665)//1
console.log(secondsTime(3665));                 //-!!!
console.log(secondsTime(851));
console.log(secondsTime(7549));
console.log(secondsTime(10800));
console.log(secondsTime(3600));
console.log(secondsTime(3722));                 // -!!!

//-----------------------------------------
console.log('');
console.log('Задание № 10');
function deferenceDate(h,m = 0,s = 0,h2,m2 = 0,s2 = 0){
   if(h===0)h=24;
  let second1 = (h * 3600 + m * 60 + s);
  let second2 = (h2 * 3600 + m2 * 60 + s2);
  let deferenceSec = Math.abs(second1 - second2); //Math.abs() возвращает абсолютное число
   return secondsTime(deferenceSec);

}
console.log('deferenceDate(1,0,0,2,0,0): ',deferenceDate(1,0,0,2,0,0)); //01:00:00
console.log('deferenceDate(0,10,0,10,9,0): ',deferenceDate(0,10,0,10,9,0));//
console.log('deferenceDate(1,0,0,2,0,0): ',deferenceDate(2,6,0,5,4,10));
console.log('deferenceDate(15,30,44,15,31,45): ',deferenceDate(15,30,44,15,31,45));


