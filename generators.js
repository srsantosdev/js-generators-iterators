// GENERATORS

const assert = require('assert');

function* calculation(arg1, arg2) {
  yield arg1 * arg2;
}

function* main() {
  yield 'Hello'
  yield '-'
  yield 'World'
  yield* calculation(20, 20)
}

const generator = main()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

assert.deepStrictEqual(generator.next(), { value: 'Hello', done: false })
assert.deepStrictEqual(generator.next(), { value: '-', done: false })
assert.deepStrictEqual(generator.next(), { value: 'World', done: false })
assert.deepStrictEqual(generator.next(), { value: 400, done: false })
assert.deepStrictEqual(generator.next(), { value: undefined, done: true })

// console.log('Array.from', Array.from(main()))
assert.deepStrictEqual(Array.from(main()), ['Hello', '-', 'World', 400])
assert.deepStrictEqual([...main()], ['Hello', '-', 'World', 400])
