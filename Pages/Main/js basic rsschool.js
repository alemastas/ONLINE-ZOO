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
        if (!Array.isArray(arr)){ throw new Error('arr is not array')};
    
        let count = 1;
        arr.forEach(el => {
            if(Array.isArray(el)){ count += DepthCalculator(el) }
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