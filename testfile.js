window.localStorage.setItem('myKey','password'); 
localStorage.aKey='data';
console.log(   localStorage.getItem('myKey')   );
console.log(   localStorage.aKey   );

localStorage.user=JSON.stringify({
    name : 'mimi' , 
    age: 21 
})
console.log(JSON.parse(localStorage.user) );

console.log(localStorage.key(0));

localStorage.removeItem('aKey');