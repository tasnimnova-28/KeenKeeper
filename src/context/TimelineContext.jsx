import { createContext, useContext, useState } from 'react'

import callIcon from '../assets/call.png'
import textIcon from '../assets/text.png'
import videoIcon from '../assets/video.png'

const TimelineContext = createContext()

const initialEntries = [
  { id: 1, type: 'Meetup', friendName: 'Tom Baker', date: 'March 29, 2026', icon: null },
  { id: 2, type: 'Text', friendName: 'Sarah Chen', date: 'March 28, 2026', icon: textIcon },
  { id: 3, type: 'Meetup', friendName: 'Olivia Martinez', date: 'March 26, 2026', icon: null },
  { id: 4, type: 'Video', friendName: 'Aisha Patel', date: 'March 23, 2026', icon: videoIcon },
  { id: 5, type: 'Meetup', friendName: 'Sarah Chen', date: 'March 21, 2026', icon: null },
  { id: 6, type: 'Call', friendName: 'Marcus Johnson', date: 'March 19, 2026', icon: callIcon },
]

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(initialEntries)

  const addEntry = (type, friendName) => {
    const icons = {
      Call: callIcon,
      Text: textIcon,
      Video: videoIcon,
      Meetup: null,
    }

    const now = new Date()

    const date = now.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })

    const newEntry = {
      id: Date.now(),
      type,
      friendName,
      date,
      icon: icons[type] || null,
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