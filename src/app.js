var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
function addChocolates(chocolates,color, count){
  
  if(count<=0){
    return "Number cannot be zero/negative"
  }
for(i=0;i<count;i++){
chocolates.unshift(color);
}

}
//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates,number){
  if(number>chocolates.length)
    return "Insufficient chocolates in the dispenser"
  
  if(number<=0)
  return "Number cannot be zero/negative"
  
  let remArr= chocolates.splice(0,number)
   return remArr;
}
//Progression 3: Dispense z chocolates
function dispenseChocolates(chocolates,number){
  if(number>chocolates.length)
  return "Insufficient chocolates in the dispenser"

if(number<=0)
return "Number cannot be zero/negative"

let resultArr = [];
for(let i=0; i<number;i++){
resultArr.push(chocolates.pop())
}
return resultArr;
}

//Progression 4: Dispense z chocolates of x color
// One Way 
function dispenseChocolatesOfColor(chocolates,number, color){
  if(number>chocolates.length)
  return "Insufficient chocolates in the dispenser"
if(number<=0)
return "Number cannot be zero/negative"

let temp = chocolates.filter((currcolor)=>{
  return currcolor == color;
})

return dispenseChocolates(temp,number);

// Second Way 

// let colorArr=[];
// for(let i=chocolates.length;i>=0;i--){
//   if(color == chocolates[i]){
//     colorArr.push(chocolates[i]);
//   }
// }
// return colorArr

}
//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates){
  let reffArr = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
  
  let result =[];
  reffArr.forEach((currColor)=>{
    let count=0;
    chocolates.forEach((currChocolates)=>{
      if(currChocolates == currColor){
        count++;
      }
    })
    count>0?result.push(count):null;
  })
  return result
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates){
  let countMap={};
  // for(let i=0; i<chocolates.length; i++){
  //   let color = chocolates[i]
  //   if(countMap[color]){
  //     countMap[color]+=1
  //   }
  //   else{
  //     countMap[color]=1
  //   }
  // }

  chocolates.forEach((currChocolates)=>{
    countMap[currChocolates]=(countMap[currChocolates]||0)+1
  })
  let sortColor = Object.keys(countMap).sort().sort((a,b)=>countMap[b]-countMap[a])
  console.log("sortColor: ", sortColor);

  let sortedChocolates =[]

  sortColor.forEach((currColor)=>{
    for(let i=0;i<countMap[currColor];i++){
      sortedChocolates.push(currColor)
    }
  })
  return sortedChocolates

}
//Progression 7: Change z chocolates of x color to y color
function changeChocolateColor(chocolates,number, color, finalColor){
  if(number<=0)
return "Number cannot be zero/negative"

if(color==finalColor)
  return "Can't replace the same chocolates"

  let result = chocolates.map((currChocolates)=>{
    if(currChocolates==color){
      currChocolates = finalColor
      number--;
      return currChocolates;
    }
    else{
      return currChocolates;
    }
  })
  return result
}
//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
  if(color==finalColor)
  return "Can't replace the same chocolates";

  let modifiedChocolate=chocolates.map((currChocolates)=>currChocolates==color?finalColor : currChocolates)

  let count = modifiedChocolate.filter(currChocolates => currChocolates == finalColor).length
  return [count,modifiedChocolate]
}

//Challenge 1: Remove one chocolate of x color from the top
function removeChocolateOfColor(chocolates,color){
  let index = chocolates.indexOf(color)
  chocolates.splice(index,1);
  return chocolates;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed

function  dispenseRainbowChocolates(chocolates){
  let countMap = [];

  chocolates.forEach((currChocolates)=>{
    countMap[currChocolates]=(countMap[currChocolates]||0)+1
  })

  let countOfEachChocolate = Object.values(countMap);
  let total =0;
  countOfEachChocolate.forEach((count)=>{
    if(count == 3){
      total+= count/3;
    }
  })
  return total
}