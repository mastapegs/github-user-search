const mergeSearchQuery = (existingUsers = {}, incomingUsers, { args: { first, last, after, before } }) => {
  console.log('existingUsers')
  console.log(existingUsers)
  console.log('incomingUsers')
  console.log(incomingUsers)
  console.log('first')
  console.log(first)
  console.log('after')
  console.log(after)

  const edges = (() => {
    if (!existingUsers.edges) return [...incomingUsers.edges]
    return [...existingUsers.edges, ...incomingUsers.edges]
  })()

  const mergedUsers = {
    userCount: incomingUsers.userCount,
    pageInfo: {
      hasPreviousPage: false,
      hasNextPage: incomingUsers.pageInfo.hasNextPage,
      startCursor: !existingUsers.pageInfo ? incomingUsers.pageInfo.startCursor : existingUsers.pageInfo.startCursor,
      endCursor: incomingUsers.pageInfo.endCursor,
    },
    edges,
  }

  console.log('----- mergedUsers -----')
  console.log(mergedUsers)

  return mergedUsers
}

export default mergeSearchQuery