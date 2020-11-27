const read = (existing, { args, args: { first, last, after, before } }) => {
  console.log('-----args-----')
  console.log(args)
  console.log('first')
  console.log(first)
  console.log('after')
  console.log(after)
  return existing
}

export default read