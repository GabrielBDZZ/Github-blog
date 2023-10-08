export function formatRelativeDate(createdAt: string) {
  const createdAtDate = new Date(createdAt)
  const currentDate = new Date()

  const diffInMilliseconds = Math.abs(
    currentDate.getTime() - createdAtDate.getTime(),
  )

  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) {
    return 'Hoje'
  } else if (diffInDays === 1) {
    return 'Há 1 dia'
  } else {
    return `Há ${diffInDays} dias`
  }
}
