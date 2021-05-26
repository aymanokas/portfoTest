export const avatarName = (name = '') => name.trim().split(' ').reduce((value, current) => value + current.charAt(0), '')
export const formatMinutesDuration = (duration) => {
  const parsedDuration = parseInt(duration, 10)
  let hours = Math.floor(parsedDuration / 3600)
  let minutes = Math.floor((parsedDuration - (hours * 3600)) / 60)
  if (hours === 0) { hours = '' } else if (hours < 10 || hours >= 10) { hours = hours + 'h' }
  if (minutes === 0) { minutes = '' } else if (minutes < 10) { minutes = '0' + minutes + 'min' }
  return hours + minutes
}
