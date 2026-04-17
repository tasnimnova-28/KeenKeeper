import { useParams, useNavigate } from 'react-router-dom'
import { Clock, Archive, Trash2, Phone, MessageSquare, Video } from 'lucide-react'
import toast from 'react-hot-toast'
import friendsData from '../data/friends.json'
import { useTimeline } from '../context/TimelineContext'

const statusStyles = {
  'overdue': 'bg-red-500 text-white',
  'almost due': 'bg-orange-400 text-white',
  'on-track': 'bg-[#2d6a5f] text-white',
}

const statusLabels = {
  'overdue': 'Overdue',
  'almost due': 'Almost Due',
  'on-track': 'On-Track',
}

export default function FriendDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addEntry } = useTimeline()

  const friend = friendsData.find(f => f.id === parseInt(id))

  if (!friend) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500">Friend not found.</p>
      </div>
    )
  }

  const handleCheckIn = (type) => {
    addEntry(type, friend.name)
    toast.success(`${type} with ${friend.name} logged!`, {
      icon: type === 'Call' ? '📞' : type === 'Text' ? '💬' : '📹',
    })
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT COLUMN */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center">

          {/* Profile Picture */}
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 rounded-full object-cover mb-3"
          />

          {/* Name */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">{friend.name}</h2>

          {/* Status */}
          <span className={`text-xs font-semibold px-4 py-1 rounded-full mb-2 ${statusStyles[friend.status]}`}>
            {statusLabels[friend.status]}
          </span>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-1 mb-3">
            {friend.tags.map((tag, i) => (
              <span key={i} className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full uppercase">
                {tag}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-500 italic mb-1">"{friend.bio}"</p>

          {/* Email */}
          <p className="text-xs text-gray-400 mb-6">Preferred: {friend.email}</p>

          {/* Action Buttons */}
          <div className="w-full flex flex-col gap-2">
            <button className="flex items-center justify-center gap-2 w-full border border-gray-200 rounded-lg py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Clock size={15} />
              Snooze 2 Weeks
            </button>
            <button className="flex items-center justify-center gap-2 w-full border border-gray-200 rounded-lg py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Archive size={15} />
              Archive
            </button>
            <button className="flex items-center justify-center gap-2 w-full border border-gray-200 rounded-lg py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
              <Trash2 size={15} />
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-gray-800">{friend.days_since_contact}</p>
              <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-gray-800">{friend.goal}</p>
              <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-lg font-bold text-gray-800">
                {new Date(friend.next_due_date).toLocaleDateString('en-US', {
                  month: 'short', day: 'numeric', year: 'numeric'
                })}
              </p>
              <p className="text-xs text-gray-500 mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">Relationship Goal</h3>
              <button className="text-sm text-[#2d6a5f] font-medium hover:underline">Edit</button>
            </div>
            <p className="text-sm text-gray-500">
              Connect every <span className="font-bold text-gray-800">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleCheckIn('Call')}
                className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-xl py-4 hover:bg-gray-50 transition-colors"
              >
                <Phone size={22} className="text-gray-600" />
                <span className="text-sm text-gray-600">Call</span>
              </button>
              <button
                onClick={() => handleCheckIn('Text')}
                className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-xl py-4 hover:bg-gray-50 transition-colors"
              >
                <MessageSquare size={22} className="text-gray-600" />
                <span className="text-sm text-gray-600">Text</span>
              </button>
              <button
                onClick={() => handleCheckIn('Video')}
                className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-xl py-4 hover:bg-gray-50 transition-colors"
              >
                <Video size={22} className="text-gray-600" />
                <span className="text-sm text-gray-600">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}