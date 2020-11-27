const read = (existing, { args, args: { first, last, after, before } }) => {
  console.log('----- entering READ -----')
  console.log('--- existing ---')
  console.log(existing)
  console.log('--- args ---')
  console.log(args)
  console.log('first')
  console.log(first)
  console.log('after')
  console.log(after)
  console.log('----- leaving READ -----')
  return existing
}

export default read