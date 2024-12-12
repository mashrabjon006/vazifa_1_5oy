// ### **1. IIFE (Immediately Invoked Function Expression) ga oid 2 ta:**

// 1. IIFE yordamida massiv ichidagi sonlarning yig‘indisini hisoblaydigan dastur tuzing.  
//    (Masalan: `[1, 2, 3, 4]` -> `10`)

// 2. IIFE yordamida berilgan ikki sonning ko‘paytmasini hisoblab, natijani konsolga chiqaring.

// const arr = [1,2,3,4]
// var res = 0
// for (let i = 0; i<= arr.length; i++){
//    res += arr
// }
// console.log(res);

// 1.2
// (function(){
//    function ab(a,b){
//       return a+b
//    }
//    console.log(ab(1,2))
// })()

// ### **2. Object, array copy ga oid 3 ta:**

// 1. Ob'ektdan nusxa olib, yangi xususiyat qo‘shadigan funksiyani yozing.  
// (Masalan: `{name: "Ali", age: 25}` -> `{name: "Ali", age: 25, city: "Tashkent"}`)
 
// var abj = {name: "Ali", age: 25}


// ### **3. Pure function ga oid 2 ta:**

// 1. Berilgan ikkita massivni birlashtiradigan va yangi massiv qaytaradigan funksiyani yozing.  
//    (Masalan: `` va `[3, 4]` -> `[1, 2, 3, 4]`)
// var a = [1, 2]
// var b = [3, 4]

// var c = a.concat(b)
// console.log(c)


// 2. Massivdagi barcha sonlarning o‘rtacha qiymatini hisoblab qaytaradigan funksiyani tuzing.  
//    (Masalan: `[2, 4, 6, 8]` -> `5`)

// **4. Callback Functions**

// function double(array) {
//     let result = []; 
//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] * 2); 
//     }
//     return result;
// }
// console.log(double([10, 20, 30])); // Output: [20, 40, 60]

// function filtr(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }
// console.log(filtr([15, 22, 33])); 

// // **5. Recursive Functions**

// function factorial(num) {
//     if (num === 0) return 1;
//     return num * factorial(num - 1);
// }
// console.log(factorial(5)); // Output: 120

// function fibonachi(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibonachi(n - 1) + fibonachi(n - 2);
// }
// console.log(fibonachi(7));

// function arr(array) {
//     if (array.length === 0) return 0;
//     return array[0] + arr(array.slice(1));
// }
// console.log(arr([1, 2, 3, 4, 5])); 

// // **6. Object Methods**

// const carDetails = {
//     brand: "Audi",
//     model: "A4",
//     year: 2022,
//     color: "blue"
// };

// const keys = Object.keys(carDetails);
// console.log(keys); 

// const values = Object.values(carDetails);
// console.log(values); 

// const entries = Object.entries(carDetails);
// console.log(entries)

// // **7. JSON Functions**


// // **8. String Methods**

// function delet(text) {
//     return text.split(' ').filter(function(word) {
//         return word !== ''
//     }).join('')
// }

// console.log(delet("  hello world  "))

// function kotaHarf(str) {
//     return str.toUpperCase();
// }
// console.log(kotaHarf('hello world'))

// function abs(arg) {
//     if (arg.length === 0) {
//         return arg;
//     }

//     const a = arg[0].toUpperCase();
    
//     const b = arg.slice(1).toLowerCase();
    
//     return a + b;
// }

// console.log(abs("hello world"))

// function trimSpacesEnd(text) {
//     return text.trimEnd();
// }
// console.log(trimSpacesEnd('   hii   '))

// function arr(arg) {
//     return arg.split(' ');
// }
// console.log(arr('jkfnd jkewnqfk je kjqwne'));

// function rever(text) {
//     return text.split('').reverse().join('');
// }
// console.log(rever('hello'))

// function count(a, b) {
//     const wordsArray = a.split(' ');
//     return wordsArray.filter(function(item) {
//         return item === b
//     }).length
// }

// console.log(count("hello hello everyone", "hello"))

// function unli(satr) {
//     let res = ''; 

//     for (let i = 0; i < satr.length; i++) {
//         let harf = satr[i];
        
//         if (harf !== 'A' && harf !== 'a' && 
//         harf !== 'E' && harf !== 'e' && 
//         harf !== 'I' && harf !== 'i' && 
//         harf !== 'O' && harf !== 'o' && 
//         harf !== 'U' && harf !== 'u') {
//             res += harf; 
//         }
//     }

//     return res; 
// }
// console.log(unli('salom')); 

// function get(text, index) {
//     return text.slice(index);
// }
// console.log(get("hello world", 6))

// function abs(text, length) {
//     return text.slice(0, length);
// }
// console.log(abs("Goodbye World", 7));

// function replaceWord(text, oldWord, newWord) {
//     return text.replace(oldWord, newWord);
// }
// console.log(replaceWord("hello universe", "universe", "world")); 

// function convertToLowerCase(str) {
//     return str.toLowerCase();
// }
// console.log(convertToLowerCase('HELLO FRIENDS')); 

// function removeBelg(text, char) {
//     return text.trim(char);
// }
// console.log(removeBelg('***hello***', '*'))

