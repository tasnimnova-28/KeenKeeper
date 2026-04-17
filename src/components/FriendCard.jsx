import { useNavigate } from 'react-router-dom'

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

export default function FriendCard({ friend }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow"
    >
      {/* Profile Picture */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full object-cover mb-3"
      />

      {/* Name */}
      <h3 className="font-bold text-gray-800 text-base mb-1">
        {friend.name}
      </h3>

      {/* Days Since Contact */}
      <p className="text-gray-400 text-xs mb-3">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      {/* Tags */}
<div className="flex flex-wrap justify-center gap-1 mb-3">
  {friend.tags.map((tag, index) => (
    <span
      key={index}
      className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full uppercase tracking-wide"
    >
      {tag}
    </span>
  ))}
</div>

      {/* Status Badge */}
      <span className={`text-xs font-semibold px-4 py-1 rounded-full ${statusStyles[friend.status]}`}>
        {statusLabels[friend.status]}
      </span>
    </div>
  )
}