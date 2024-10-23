// array methods


//concat() that concatenates two or more arrays

// let arr1=[1,2,3];
// let x=[121,24,33,30,0];/
// let arr2=arr1.concat( x,[4,5],[!true])
// let arr2=arr1.concat(x,[""])
// console.log(arr2);


// let arr3=arr1.concat(arr2)
// let arr3=arr2.concat(arr1)
// console.log(arr1,x);



// merge two arrays by using only two variable
// let arr1=[1,2,3];
// let arr2=[4,5,6]
// console.log(arr1.concat(arr2));
// console.log(arr2.concat(arr1));

// let arr1=[1,2,3];
// let arr2=[4,6,7];
// // arr1=arr1+[,4,5,6];
// arr1 =[...arr1,  33 ,45 ,5]
// console.log(arr1);

// three variable

// let arr1=[false];
// let arr2=[,4,5,6]
// let arr3=arr1+arr2;
// console.log([arr3]);

//one variable
// let arr1=[1,2,3];
// arr1=arr1.concat(4,5)
// console.log(arr1);











// fill()
// one
// let arr1=[1,2,3];
// arr1.fill(90)
// console.log(arr1);


// two
// let arr1=[1,2,3];
// console.log(arr1.fill(90));

//to find the length
// let arr1=[1,2,3];
// console.log(arr1.length);


// method 3 fill and length check
// let arr1=[1,2,3,true,"false",-0,''];
// // let lengthOfArray=arr1.length;
// // console.log(lengthOfArray);
// // console.log(arr1);

// let modified=arr1.map((item)=>{return 900})
// console.log(modified);




// method 4
// let arr1=[1,2,3];
// let newModifiedArr=[];
// for (let index = 0; index < arr1.length; index++) {
//     newModifiedArr[index] = 90 ;     
// }
// console.log(newModifiedArr);

// let arr1=[1,2,3];
// let finalarr=[];
// for(let i=0; i < arr1.length; i++){
//     finalarr[i] = 90;
// }
// console.log(finalarr);














// method 2 lenght check
// let arr1=[1,2,3,true,"false",-1,];
// let lengthOfArray=arr1.length;
// console.log(lengthOfArray);
// console.log(arr1.length);










// filter
// let ages=[32,11,32,77,82,true]
// let result=ages.filter((item)=>{return item>=18})
// console.log(result);

// let  salary=[32000,2400,25000,76000,30000,29000];
// let result=salary.filter((item)=> {return item<=29000})
// console.log(result);







// let ages=[32,11,32,18,77,82,true]
// // let result=ages.filter((item)=>{
// //     // return typeof item === 'number' && item>80 && item>18 })
// //     return typeof item === 'boolean' && item === true })
// // console.log(result);

// check the type of at index
// console.log(typeof ages[6]);






// let ages=[32,11,32,77,82,true]
// let result=ages.filter(checkAdult);
// function checkAdult(age){
//     return age>=18
// }
// console.log(result);

// let std=[1,2,3,4,5]
// let result=std.filter(checkeligible)
// function checkeligible(rnm){
//     return rnm>2;
// }
// console.log(result);





// let ages=[32,11,32,77,82]
// let result= ages.map((item)=>{ if(item>=18) {return  item}   })
// // result.splice(1,1)
// // result.splice(1,-6)
// let undefinedIndex=result.indexOf(77)
// // console.log(result);
// console.log(result , undefinedIndex);

// console.log("the undefinedx value is at ".concat(undefinedIndex).concat(" index"));
// console.log("the undefinedx value is at "+ undefinedIndex +" index");
// console.log("the undefinedx value is at ", undefinedIndex ," index");
// console.log(`the undefined value is at the ${undefinedIndex} index`);









// Indexof indexpr value btaae ga left side se

// //-1
//  let st=[12,23,2,true,1,11,22,213,23,3]
//  result=st.indexOf(true)
//  console.log(result);

//  let st=[12,23,2,'true',1,13,3]
//  result=st.indexOf(`true`)
//  console.log(result);



//  let st=[12,23,2,true,1,13,3]
//  result=st.indexOf(true)
//  console.log(result);


//lastindexof  dekhe ga right side se he pr start 0 index se he
//  let st=[12,23,2,1,12,3]
//  result=st.lastIndexOf(3)
//  console.log(result);
 

// // find can pas the arrow function if value in array then log otherwise it show the undefined
//  let st=[12,23,2,1,12,3]
//   result=st.find((item)=>{return item==3})
//   console.log(result);


 
// simple flat can flat the rray at 3 level
// let x=[1,[2,3],3,5,6,[8,5,9,1,2,3,4,5]]
// y=x.flat()
// console.log(y);



// let x=[1,[2,3],3,5,6,[8,5,9,1,2,3,[11,22,22,4,5]] ,[1,2,3]]
// let z=[];
// function flater(arr){
//     let y=[];
//     for (let index = 0; index < x.length; index++) {
//         if(index==0){
//             y=arr.flat()
//         }else{
//             y=y.flat()
//         }
//     }
//     return y;
// }
// z=flater(x)
// console.log(z);

// let x = [1, [2, 3], 3, 5, 6, [8,[1,2,3],[1,1,1],[2,2,3],[1,2,3],[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,
// [1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2], 5, 9, 1, 2, 3, [11, 22, 22, 4, 5]], [1, 2, 3]];
// let z = [];

// function flater(arr) {
//     return arr.flat(Infinity); // Flattens the array to any depth
// }

// z = flater(x);
// console.log(z);












// 18-10-2024
// isarry can chek array is found or not itt trerurn boolean likre true and false
// let array = [ "ali" ,"daniyal" , "ddssd" , 'dgd']
//  let array2 = { name: ["ssre" , 'stdstg']}
//  let isItArray = Array.isArray(array)
//  console.log(isItArray);


// let arr1=["awais","ahsan","ali",`true`];
// let arr2={name:["awaisrafiq","sir daniyal"]}
// let isItArray = Array.isArray(arr1)
// console.log(isItArray);



//join orignal array cananot be changed
 
// let arr1=["awais","ahsan","ali",`true`];
// console.log(arr1.join(', '));
// console.log(arr1.join(' , '));
// console.log(arr1.join(' & '));
// console.log(arr1.join(' and '));


// keys it tell us the indexes we alse check by the lentgh method
// const arr = ['apple', 'banana', 'cherry'];
// const iterator = arr.keys();
// for ( key of iterator) {
//   console.log(key); // Output: 0, 1, 2
// }


//reverse method  it can change the lst index in 1st and so on
// let array = [ "ali" ,"daniyal" , "asad" , 'awais']
// console.log(array.reverse());


//slice (1, 2) 1st can pas the index and 2nd can return the array that we need but output show lenght-1

// const fruits = ["Bbnana",'Banana', "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3)
// console.log(fruits.slice(1, 3));



// sort
// const n= [34 ,434 ,33, 5,24, 7]
// console.log(n.sort());

// let num=[8,7,6,5,4,3,2,1];
// console.log(num.sort());


// let num=[88,77,66,55,44,33,22,11];
// console.log(num.sort());


// let num=[88,11,77,22,66,33,55,66,44,33,22,11];
// console.log(num.sort());


// let num=[12,34,56,78,910,12,33,4,5,66];
// console.log(num.sort((a, b) => a - b));



// desceding
// let numd=[12,34,56,78,910,12,33,4,5,66];
// console.log(numd.sort((a, b) => b - a));











// const operation = (n1 , n2 , operation = 'sum')=>{
//     operation = operation.toLocaleLowerCase()
//     operation = operation.substring(0, 3);
//     console.log(operation);
//     if (operation === 'sum') {
//         return n1+n2
//     } else if  (operation === 'sub' ) {
//         return n1-n2
//     }
//     else if  (operation === 'mul') {
//         return n1*n2        
//     }
//     else if  (operation === 'div') {
//         return n1/n2
//     }
//     else if (operation === '') {
//         return "operation is an empty string"
//     }
//     else {
//         return "operation is unacceptable"
//     }
// }

// let n1 =12;
// let n2 = 2;
// // sum , sub , mul , div
// let ans = operation(n1 , n2 ,"MULTIPLY")
// console.log(ans);

 





// const operation = (n1,n2, operation="sum")=>{
//     if (operation==='sum') {
//         return n1+n2;
//     } else if (operation==='sub') {
//         return n1-n2;
//     }else if (operation==='mul') {
//         return n1*n2;
//     }else if (operation==='div') {
//         return n1/n2;
//     }else if (operation==='') {
//         return "operation is empty string"
//     }
//     else{
//         return "operation is unaccessible"
//     }
// }
// let n1=10;
// let n2=2;
// let ans=operation(n1,n2, "mul")
// console.log(ans);




// let arr=[1,2,3,,4,3,2,11];
// let arr2=arr.sort()
// console.log(arr2);


//if two comma then empty item
// let arr=[1,3,,2,5];
// console.log(arr);

let bubbleSort=(arr)=>{  
      for(let i=0; i<arr.length-1; i++){
        for(j=0; j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                let temp =arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
      }
      return arr;
}

let arr=[1,3,2,5];
console.log("before sort array",arr);

let sortedArr = bubbleSort(arr)
console.log("after sorting ", sortedArr);













