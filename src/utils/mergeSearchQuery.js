const mergeSearchQuery = (existingUsers = {}, incomingUsers, { args: { first, last, after, before } }) => {

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

  return mergedUsers
  
}

export default mergeSearchQuery