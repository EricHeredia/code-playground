const helloWorld = (first: string, last: string): string => {
  return `${first} ${last}!`
}

let testString: string = helloWorld('Hello', 'World')

console.log(testString)