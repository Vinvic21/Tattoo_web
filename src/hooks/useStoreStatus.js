import { useEffect, useState } from 'react'
import { HOURS } from '../data/business'

function computeStatus(now) {
  const day = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60
  const today = HOURS[day]

  if (today.open !== null && hour >= today.open && hour < today.close) {
    const hoursLeft = today.close - hour
    return {
      isOpen: true,
      label: 'Open now',
      detail:
        hoursLeft < 1
          ? `Closes in ${Math.round(hoursLeft * 60)} min`
          : `Closes at ${formatHour(today.close)}`,
    }
  }

  // find the next day that opens
  for (let i = 1; i <= 7; i++) {
    const nextDay = HOURS[(day + i) % 7]
    if (nextDay.open !== null) {
      const label = i === 1 ? 'Tomorrow' : nextDay.day
      return {
        isOpen: false,
        label: 'Closed now',
        detail: `Opens ${label} at ${formatHour(nextDay.open)}`,
      }
    }
  }

  return { isOpen: false, label: 'Closed now', detail: '' }
}

function formatHour(hour) {
  const h = Math.floor(hour)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const display = h % 12 === 0 ? 12 : h % 12
  return `${display}:00 ${suffix}`
}

export function useStoreStatus() {
  const [status, setStatus] = useState(() => computeStatus(new Date()))

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(computeStatus(new Date()))
    }, 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return status
}
