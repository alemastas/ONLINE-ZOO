// https://github.com/AlreadyBored/basic-js

function countCats(arr){
    let count = 0;

    arr.forEach(el => {
        el.forEach(el1 => {
            if(el1 == '^^'){
                count++;
            }
        })
    });
    return count;
}

// countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]);

function createDreamTeam(members){
    // dream team name
    members.sort()
    // members is a array
    let result = '';
    members.forEach(el => {
        (typeof el === 'string') ? resultSlice(el) : el;
    })

    function resultSlice(el){
        result = result + el.slice(0,1);
    }
    
    return result;
};

/* createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) // => 'ADMM'
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) // => 'LOO' */

function getSeason(date){
    if(date == null){ throw new Error('Unable to determine the time of year!')}
    if(date == undefined){ throw new Error('Invalid date!') }
    let curDate = new Date(date);
    let mounth = (curDate.getMonth() + 1);
    console.log(curDate);
    if(mounth <= 2 || mounth == 12){ return 'winter'}
    else if(mounth >= 3 && mounth <= 5){ return 'spring'}
    else if(mounth >= 6 && mounth <= 8){ return 'summer'}
    else if(mounth >= 9 && mounth <= 11){ return 'autunn'}
};

function transform(arr){
    if(!Array.isArray(arr)){ throw new Error("'arr' parameter must be an instance of the Array!")}
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == '--discard-next'){ i ++ }
        else if(arr[i] == '--discard-prev'){ result.pop() }
        else if(arr[i] == '--double-next'){ result.push(arr[i + 1]) }
        else if(arr[i] == '--double-prev'){ result.push(arr[i - 1]) }
        else { result.push(arr[i]) };
    }
    return result;
}

// transform([1, 2, 3, '--discard-prev', 4, 5])

const chainMaker = {

    result : [],

    getLength(){
        this.result.length;
        return this;
    },
    addLink(index){
        this.result.push(`( ${index} )`);
        return this;
    },
    removeLink(position){
        if(position == null){ delete this.result[-1] }
        this.result.splice((position - 1), (position - 1));
        return this;
    },
    reverseChain(result){
        this.result.reverse();
        return this;
    },
    finishChain(){
        return this.result.join('~~');
    },
    printThis(){ console.log(this, this.result) }
} 

/* tests
chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'

chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() => '( 2 )~~( 3 )'

chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() => '( 2 )~~( 1 )~~( 3 )'
*/

class DepthCalculator{
    calculateDepth(arr){
        this.arr = arr;
        if (!Array.isArray(arr)){ throw new Error('arr is not array')};
    
        let count = 1;
        arr.forEach(el => {
            if(Array.isArray(el)){ count += depthCalc.calculateDepth(el) }
        })
        return count;
    }
}

/*tests 
const depthCalc = new DepthCalculator();
depthCalc.calculateDepth([1, 2, 3, 4, 5]) // => 1
depthCalc.calculateDepth([1, 2, 3, [4, 5]]) // => 2
depthCalc.calculateDepth([[[]]]) // => 3
*/

// extented repeater

function repeater(str = 'default', options = {repeatTimes, separator, 
    addition : '', additionRepeatTimes, additionSeparator}){
        let add = (`${options.addition}${options.additionSeparator}`).repeat(options.additionRepeatTimes);
        let result = '';
        for(let i = 0; i < options.repeatTimes; i++){
            result += `${str}${add}${options.separator}`;
        }
    return result;
}

// test repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

class VigenereCipheringMachine{ // need to fix that
    
    constructor(bool){
        let handler = bool;
    }

    genSqViz(lang) {

        en : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
        square = []

        var l = this[lang], square = [];
        for (var i = 0; i < l.length; i++) {
            this.square[i] = l.slice(i).concat(l.slice(0, i));
        }
        return square;
    }

    encrypt(text, key){

        if (text.length !== key.length) return false;
        var s = "";
        for (var i = 0; i < text.length; i++) {
            s += this.square[this[lang].indexOf(text[i])][this[lang].indexOf(key[i])];
        }
        return this.constructor.handler == true? s.toUpperCase() : s.split("").reverse().join("").toUpperCase(); // default return s
    }

    decrypt(key, cipher) {

        if (cipher.length !== key.length) return false;
        var s = "";
        for (var i = 0; i < cipher.length; i++) {
            var row = this[lang].indexOf(key[i])
            coll = this.square[row].indexOf(cipher[i]);
            s += this[lang][coll];
        }
        return this.constructor.handler == true? s.toUpperCase() : s.split("").reverse().join("").toUpperCase(); // default return s
    }

        // https://github.com/GooseBumpsOS/cipher_vigenere
}

    function getCommonCharacterCount(str, strN){
        if(str.length !== strN.length){ throw new Error('different length of args pairs') }
        let count = [];
        
        function sorted(str){
            let arr = str.split('').sort()
            return arr
        }

        for(let j = 0; j < strN.length; j++){
            if(sorted(str)[j] === sorted(strN)[j]){
                count.push(strN)
            }
        }

        console.log(sorted(str), sorted(strN))
        return count.length
    }

    // getCommonCharacterCount('aabcc', 'adcaa')

function deleteDigit(number){
    let str = String(number)
    let arr = []
    let temp = []

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++){
            if(j !== i){ temp.push(str[j]) }
            else(console.log())
        }
        arr.push(Number(temp.join('')))
        temp = []
    }
    return Math.max.apply(null, arr)
}

// deleteDigit(152) => 52

function getDNSStats(arr){ // need to make this madness work
    let tempArr = []
    for(let i = 0; i < arr.length; i++){
        tempArr.push( arr[i].split('.') )
    }
    return tempArr;
}

function encoderLine(str){
    let tempRes = ''
    let result = ''
    let count = 0;
    for(let i = 0; i < str.length; i++){
        count = 0;
        for(let j = 0; j < str.length; j++){
            if(str[i] == str[j]){ count++ }
        }
        result += `${count}${str[i]}`
    }
    return ([...new Set(result).keys()]).join('').replace('1', '')
}

// encodeLine('aabbbc') => '2a3bc'

function renameFiles(arr){ 
    let count = 1;
    for(let i = 0; i < arr.length; i++){
        count = 1;
        for(let j = i + 1; j < arr.length; j++){

            if(arr[i] === arr[j]){
                arr[j] = `${arr[j]}(${(count)})`
                count++;
            }
        }
    }
    return arr
}

// renameFiles(["file", "file", "image", "file(1)", "file"]) => ["file", "file(1)", "image", "file(1)(1)", "file(2)"]

function getEmailDomain(str){
    return str.slice(str.indexOf('@') + 1)
}

// getEmailDomain('prettyandsimple@example.com') => 'example.com'

function isMAC48Address(str){
    let bool = true;
    let check = ['0', '1', '2', '3', '4', '5', '6', '7', '8', 
    '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let arr = str.split('-').join('').split('');

    arr.map(el => {
        if(check.includes(el)){ }
        else { bool = false }
    })
    return bool
}

// isMAC48Address('00-1B-63-84-45-E6')

function getMatrixElementsSum(matrix){
    let sum = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 4; j++){
            if(i == 0){
                sum += matrix[i][j]
            }
            else if(i == 1){
                if( matrix[i - 1][j] == 0 ){ }
                else { sum += matrix[i][j] }
            }
            else if(i == 2){
                if( matrix[i - 1][j] == 0 || matrix[i - 2][j] == 0 ){ }
                else { sum += matrix[i][j] }
            }
        }
    }
    return sum;
}

// getMatrixElementsSum(matrix) => 9
// const matrix = [
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]
//    ];

function minesweeper(matrix){ 
    let m = matrix;
    let n = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]

    if(m[0][0] == true){ n[0][1]++, n[1][0]++ } // r, d
    else if(m[0][1] == true){ n[0][0]++, n[0][2]++, n[1][1]++ } // l, r, d
    else if(m[0][2] == true){ n[0][1]++, n[1][2]++ } // l, d

    else if(m[1][0] == true){ n[1][1]++, n[2][0]++, n[0][0]++ } // r, d, u
    else if(m[1][1] == true){ n[1][0]++, n[0][1]++, n[1][2]++, n[2][1]++ } // l, u, r, d
    else if(m[1][2] == true){ n[1][1]++, n[2][2]++, n[0][2]++ } // u, l, d

    else if(m[2][0] == true){ n[1][0]++, n[2][1]++ } // u, r
    else if(m[2][1] == true){ n[2][0]++, n[1][1]++, n[2][2]++ } // l, u, r
    else if(m[2][2] == true){ n[2][1]++, n[1][2]++ } // l, u

    return n

}

const matrix = [
 [true, false, false],
 [false, true, false],
 [false, false, false]
];

function sortByHeight(arr){
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == -1){
            tempArr.push(i)
            delete arr[i]
        }
    }
    arr.sort()
    tempArr.forEach(el =>{
        arr.splice(el, 0, -1)
    })
    return arr.filter(n => n)
}

// test sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])

function getSumOfDigits(num){
    let sum = 0;
    let arr = String(num).split('');
    arr.forEach(el => {
        sum += +el
    })
    return +(String(sum)[0])
}

// test getSumOfDigits(100) => 1 // getSumOfDigits(91) => 1

// CODE WARS CODE WARS CODE WARS CODE WARS CODE WARS CODE WARS CODE WARS CODE WARS CODE WARS CODE WARS

var runLengthEncoding = function(str){
    const result = {}
    let obj = {}
    for(let i = 0; i < str.length; i++){
      if( !Object.keys(obj).includes(str[i]) ){
        obj[str[i]] = 1
      } else { 
        obj[str[i]]++ 
            }
    }
    
      let exitArr = Object.entries(obj)
      return exitArr.map(([key, value]) => [value, key])
}
