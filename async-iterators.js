// ASYNC ITERATORS

const { readFile, stat, readdir } = require('fs/promises')

function* promisified() {
  yield readFile(__filename)
  yield Promise.resolve('Hello world')
}

async function* systemInfo() {
  const file = await readFile(__filename)
  yield { file: file.toString() }

  const { size } = await stat(__filename)
  yield { size }

  const dir = await readdir(__dirname)
  yield { dir }
}


// Promise.all([...promisified()]).then(results => console.log('promisified', results))

// IIFE
;(async () => {
  for await(const item of systemInfo()) {
    console.log('for await', item)
  }
})()