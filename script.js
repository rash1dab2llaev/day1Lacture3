/*1 function giveMeSomething(str) {
    let someThingStr = 'something'
    console.log(someThingStr.concat(' ',str));
}
giveMeSomething('Bobe joye') */


/*2 
function giveMeSomething(str) {
    let someThingStr = 'something'
    console.log(someThingStr.concat(str));
}
giveMeSomething('Bobe joye') */


/* 3
function giveMeSomething(str1, str2) {
    if (str1.length ==str2.length) {
        console.log(true);
    }else{
        console.log(false);
    }
}
giveMeSomething('ad', 'AB') */

/*4 
function isEmpty(str) {
    if (str.length == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isEmpty('') */

/*5 
function stringInt(str) {
    console.log(+str);
}
stringInt('1000') */

/* 6
function parseToString(bool) {
    console.log(String(bool));
}
parseToString(true) */

/* 7
function concatName(first, last) {
    console.log(last.concat(',', first));
}
concatName('Rashid', 'Abdullaev') */

/* 8
function oddOrEven(str) {
    str.length % 2 == 0 ? console.log(true) : console.log(false)
}
oddOrEven('applle') */

/* 9
function newWord(str) {
    console.log(str.slice(1));
}
newWord('world') */



/* 10
function isLastChildN(str) {
    str.charAt(str.length - 1) == 'n' ? console.log(true) : console.log(false);

}
isLastChildN('aiden')
isLastChildN('aide') */


/* 11
function repeatName(str, num) {
    console.log(str.repeat(num));
}
repeatName('hello', 3) */

/* 12
function firstAndLast(str) {
    console.log(str.slice(0, 1), str.slice(str.length - 1));
}
firstAndLast('apple') */


/* 13
function repeatLastChild(str, num) {
    let lastChild = str.charAt(str.length - 1)
    console.log(lastChild.repeat(num));
}
repeatLastChild('hello world', 6) */

/* 14
function charCout(s, str) {
    let arrStr = str.split('')
    let k = 0
    for (const elem of arrStr) {
        if (s == elem) {
            k++
        }
    }
    console.log(k);
}
charCout('a', 'apple') */


/*15 
function doubleChar(str) {
    let arrStr = str.split('')
    let newStr = ''
    for (const elem of arrStr) {
        newStr += elem.repeat(2)
    }
    console.log(newStr);
}
doubleChar('hello') */

/* 16
function sayHelloAndBye(str, num) {
    num == 1 ? console.log(`hello ${str}`) : console.log(`bye ${str}`)
}
sayHelloAndBye('Jone', 1)
sayHelloAndBye('Jone', 0) */

/*17 
function reverseCase(str) {
    let arrStr = str.split('')
    let newStr = ''

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i]==arrStr[i].toLowerCase()) {
            newStr+=arrStr[i].toUpperCase()
        }
        if (arrStr[i]==arrStr[i].toUpperCase()) {
            newStr+=arrStr[i].toLowerCase()
        }
    }
    console.log(newStr);
  
}
reverseCase('Hello')
 */


/* 18
function findNemo(str) {
    let arrStr = str.split(' ')
    console.log(`A found Nemo is ${arrStr.indexOf('Nemo')+1}`);
}
findNemo('Nemo I am finding Nmo') */


function vowels(str) {
    let vovels = 'aeiouyw'
    let vowelsArr = vovels.split('')
    let strArr = str.split('')
    let k = 0
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < vowelsArr.length; j++) {
            if (str[i] == vowelsArr[j]) {
                k++
            }
        }
        console.log(k);
    }
    console.log(k);
}
vowels('Celebration')