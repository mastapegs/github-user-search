const read = (existingUsers, { args, args: { first, last, after, before } }) => {
  console.log('----- entering READ -----')
  console.log('--- existingUsers ---')
  console.log(existingUsers)
  console.log('--- args ---')
  console.log(args)
  console.log('first')
  console.log(first)
  console.log('after')
  console.log(after)

  if (!existingUsers) return undefined

  const startIndex = existingUsers.edges.length - Math.min(first, existingUsers.edges.length)
  const endIndex = existingUsers.edges.length

  console.log(existingUsers.edges[startIndex])
  console.log(existingUsers.edges[startIndex].cursor)

  const queriedUsers = {
    userCount: existingUsers.userCount,
    edges: existingUsers.edges.slice(startIndex, endIndex),
    pageInfo: {
      hasPreviousPage: (startIndex !== 0),
      hasNextPage: existingUsers.pageInfo.hasNextPage,
      startCursor: existingUsers.edges[startIndex].cursor,
      endCursor: existingUsers.edges[endIndex - 1].cursor
    },
  }

  console.log('----- queriedUsers -----')
  console.log(queriedUsers)

  console.log('----- leaving READ -----')
  return queriedUsers
}

export default read