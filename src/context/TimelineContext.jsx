import { createContext, useContext, useState } from 'react'

const TimelineContext = createContext()

const initialEntries = [
  { id: 1, type: 'Meetup', friendName: 'Tom Baker', date: 'March 29, 2026', icon: '🤝' },
  { id: 2, type: 'Text', friendName: 'Sarah Chen', date: 'March 28, 2026', icon: '💬' },
  { id: 3, type: 'Meetup', friendName: 'Olivia Martinez', date: 'March 26, 2026', icon: '🤝' },
  { id: 4, type: 'Video', friendName: 'Aisha Patel', date: 'March 23, 2026', icon: '📹' },
  { id: 5, type: 'Meetup', friendName: 'Sarah Chen', date: 'March 21, 2026', icon: '🤝' },
  { id: 6, type: 'Call', friendName: 'Marcus Johnson', date: 'March 19, 2026', icon: '📞' },
  { id: 7, type: 'Meetup', friendName: 'Aisha Patel', date: 'March 17, 2026', icon: '🤝' },
  { id: 8, type: 'Text', friendName: 'Olivia Martinez', date: 'March 13, 2026', icon: '💬' },
  { id: 9, type: 'Call', friendName: 'Lisa Nakamura', date: 'March 11, 2026', icon: '📞' },
  { id: 10, type: 'Call', friendName: 'Sarah Chen', date: 'March 11, 2026', icon: '📞' },
  { id: 11, type: 'Video', friendName: 'Marcus Johnson', date: 'March 6, 2026', icon: '📹' },
  { id: 12, type: 'Video', friendName: "Ryan O'Brien", date: 'February 24, 2026', icon: '📹' },
]

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(initialEntries)

  const addEntry = (type, friendName) => {
    const icons = { Call: '📞', Text: '💬', Video: '📹' }
    const now = new Date()
    const date = now.toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric'
    })
    const newEntry = {
      id: Date.now(),
      type,
      friendName,
      date,
      icon: icons[type],
    }
    setEntries(prev => [newEntry, ...prev])
  }

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  )
}

export function useTimeline() {
  return useContext(TimelineContext)
}