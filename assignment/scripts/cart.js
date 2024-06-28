console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const maxItems = 5;
let basket = [];
function isFull(){
    if (basket.length >= maxItems)
        return true
    else
        return false
} // end isFull
console.log(`Test for isFull function: `, isFull());
function addItem(item){
    if (isFull() == false){
        console.log(`Adding ${item} to basket`);
        basket.push(item)
        console.log(`In your basket: ${basket}`);
        return true
    }
    else if (isFull() == true){
        console.log(`Your basket is full! ヽ(｀⌒´メ)ノ`);
        console.log(`In your basket: ${basket}`);
        return false
    }
    else{
        console.log(`it broke!`);
        console.log(`In your basket: ${basket}`);
        return false
    }
}// end addItem
console.log(addItem(`cupcakes`));
console.log(addItem(`flour`));
console.log(addItem(`brownies`));
console.log(addItem(`coffee`));
console.log(addItem(`tea`));
console.log(addItem(`pasta`));

function listItems(){
    for (let item of basket) {
        console.log(item);
    }
    return `Looks Good!`
} // end listItems
console.log(listItems());

function empty(){
    for(let i=basket.length;i>0;i--)
        basket.shift()
    return `Emptied :D`
} // end empty
console.log(empty());
console.log(`Should be empty: `, basket);

function removeItem(item){
    if (basket.indexOf(item) >= 0){
       let removedItem = basket.splice(basket.indexOf(item), 1)
       //this line of code is kind of gross to look at, I know.
       //I just wanted it to be as concise as possible
       //Also, the reason it's not just returning the basket.splice
       //is because the test expected a string, not array
        return removedItem[0]
    }
    else if (basket.indexOf(item) < 0)
        return null
    else
        return `It broke ヽ(｀⌒´メ)ノ`
}// end remove item

console.log(addItem(`cupcakes`));
console.log(addItem(`flour`));
console.log(addItem(`brownies`));
console.log(addItem(`coffee`));

console.log(`negative test removeItem`, removeItem(`tissues`));
console.log(`positive test removeItem`, removeItem(`cupcakes`));
console.log(basket);

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
