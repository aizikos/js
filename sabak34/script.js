//Преобразуйте псевдо массив  в массив
//A)
var first = {0: 'first', 1: 'second', 2: 'third', length: 3} ;

var array =[];

for (var i = 0; i< first.length;i++){
  array.push(first[i]);
};

console.log(array);
// B)

let m = ["first", "second", "third" ]

for(let i = 0; i < m.length; i++){
    console.log(m[i].split(''))
}
