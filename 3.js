let str = "Hello"
let inverse = ""

for(let i = 5; i > 0; --i)
{
  inverse += str.slice(i - 1, i)
}

console.log(inverse)

