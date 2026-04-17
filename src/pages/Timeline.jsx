import { useState } from 'react'
import { useTimeline } from '../context/TimelineContext'
import { Search } from 'lucide-react'

export default function Timeline() {
  const { entries } = useTimeline()
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('newest')

  const iconMap = {
    Call: '📞',
    Text: '💬',
    Video: '📹',
    Meetup: '🤝',
  }

  const filtered = entries
    .filter(e => filter === 'All' || e.type === filter)
    .filter(e =>
      e.friendName.toLowerCase().includes(search.toLowerCase()) ||
      e.type.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return sort === 'newest' ? dateB - dateA : dateA - dateB
    })

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Timeline</h1>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">

        {/* Search */}
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or type..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-600 bg-white focus:outline-none focus:border-[#2d6a5f]"
          />
        </div>

        {/* Filter */}
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 bg-white focus:outline-none focus:border-[#2d6a5f]"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
          <option value="Meetup">Meetup</option>
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 bg-white focus:outline-none focus:border-[#2d6a5f]"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>

      </div>

      {/* Entries */}
      <div className="flex flex-col gap-2">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm">No entries found.</p>
          </div>
        ) : (
          filtered.map(entry => (
            <div
              key={entry.id}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 hover:shadow-sm transition-shadow"
            >
              <span className="text-2xl">{iconMap[entry.type] || '🤝'}</span>
              <div>
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">{entry.type}</span>
                  <span className="text-gray-400"> with {entry.friendName}</span>
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{entry.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}