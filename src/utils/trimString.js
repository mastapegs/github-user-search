const trimString = string => {
  if (!string) return
  const trimLength = 20
  if (string.length <= trimLength) return string
  return `${string.slice(0, trimLength)}...`
}

export default trimString