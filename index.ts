
const TOLERANCE = Math.pow(10, -10)

const f = (x, c) => x * x - c
const fPrime = x => 2 * x

type Sqrt = (c: number) => number
const sqrt: Sqrt = c => {
  const initialGuess = 10
  let i
  let x1 = initialGuess
  let x0

  for (i = 1; i < 100; i++) {
    x0 = x1
    x1 = x0 - f(x0, c) / fPrime(x0)

    if (Math.abs(x1 - x0) <= TOLERANCE) {
      break
    }
  }

  console.log(`${i} iterations`)

  return x0
}


console.log(sqrt(612))
console.log(sqrt(4))


