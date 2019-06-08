
const sayHello = (word?: string): string => {
    console.log(word || 'hello')
    return word || 'hello'
}

sayHello()

