let numbers = []
function sum(numberToAdd){
    if(numberToAdd && Number.isInteger(numberToAdd)){ //любое количество раз с не undefined аргументом
        numbers.push(numberToAdd)
    }
    if(numberToAdd === undefined) {
        let result = numbers.reduce((acc, number) => acc + number);
        console.log('sum: ', result)
        return result
    }
}
sum(1)
sum(5)
sum(9)
sum(0)
sum('ухаха')
sum(1)
sum()