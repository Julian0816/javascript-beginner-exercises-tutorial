// Your code here:

for (let i = 99; i > -1; i--) {
  let lirics = ''
  let lirics2 = ''
  if (i !== 1 && i !== 0) {
    lirics = `'${i} bottles of milk on the wall, ${i} bottles of milk.'`
    lirics2 = `'Take one down and pass it around, ${i - 1} bottles of milk on the wall.'`
  } else if (i == 1) {
    lirics = `'1 bottle of milk on the wall, 1 bottle of milk.'`
    lirics2 = `'Take 1 down and pass it around, no more bottles of milk on the wall.'`
  } else if (i == 0) {
    lirics = `'No more bottles of milk on the wall, no more bottles of milk.'`
    lirics2 = `'Go to the store and buy some more, 99 bottles of milk on the wall.'`
  }
  console.log(lirics)
  console.log(lirics2)
  console.log('')
}


