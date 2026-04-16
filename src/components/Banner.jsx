import { UserPlus } from 'lucide-react'

export default function Banner({ friends }) {
  const totalFriends = friends.length
  const onTrack = friends.filter(f => f.status === 'on-track').length
  const needAttention = friends.filter(f =>
    f.status === 'overdue' || f.status === 'almost due'
  ).length

  const interactionsThisMonth = friends.reduce((acc, f) => {
    return acc + (f.interactions ? f.interactions.length : 0)
  }, 0)

  return (
    <section className="bg-gray-50 py-12 px-6">

      {/* Title & Subtitle */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
      </div>

      {/* Add a Friend Button */}
      <div className="flex justify-center mb-10">
        <button className="flex items-center gap-2 bg-[#2d6a5f] hover:bg-[#245a50] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors">
          <UserPlus size={16} />
          Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-gray-800">{totalFriends}</p>
          <p className="text-sm text-gray-500 mt-1">Total Friends</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-gray-800">{onTrack}</p>
          <p className="text-sm text-gray-500 mt-1">On Track</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-gray-800">{needAttention}</p>
          <p className="text-sm text-gray-500 mt-1">Need Attention</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-gray-800">{interactionsThisMonth}</p>
          <p className="text-sm text-gray-500 mt-1">Interactions This Month</p>
        </div>
      </div>

    </section>
  )
}