
const sayHello = (word = 'hello', ...otherStuff:string[]): string => {
    console.log(otherStuff)
    return word
}

sayHello('Zevi', 'Liao')

