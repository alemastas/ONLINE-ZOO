let buttonElement = document.querySelector('button');

buttonElement.onclick = function() {
   console.log('click')
}

// let btn = document.getElementById('btn'); // button
// console.log(btn.getAttribute('id')); // print id
// btn.setAttribute('id', 'ss'); // set attr
// console.log(btn.getAttribute('id')); // check attr
// console.log(btn.hasAttribute('name')); // check attr
// btn.removeAttribute('id'); // delete attr
// console.log(btn.hasAttribute('id')); // check attr
// console.log(btn.classList.value); // check class

// console.log(btn.dataset);
// console.log(btn.className);
// btn.className = 'butts';
// console.log(btn.className);
// btn.className = 'button';

// var paraElement = document.createElement('p'); // add element
// paraElement.className = 'p1';
// document.body.appendChild(paraElement);

// var mainElement = document.getElementById('main'); //select element in currect group
// var smallElements = mainElement.getElementsByClassName('small');

// let counter = {
//     a: 0, b: 0,
//     c: 0, d: 0,
//     e: 0, f: 0, 
//     g: 0,  h: 0,  
//     i: 0,  j: 0,  
//     k: 0,  l: 0,  
//     m: 0,  n: 0,  
//     o: 0,  p: 0,  
//     q: 0,  r: 0,  
//     s: 0,  t: 0, 
//     v: 0,  w:0,  
//     x: 0,  y: 0,  z: 0,  
//     };

// function gotLetterCount(str){
//     str = str.toLowerCase();
//     for(let el in counter)
//         for(let i = 0; i < str.length; i++){
//             if(el == str[i]) 
//              { counter[el]++ }
//     }
//     console.log(counter);
// }