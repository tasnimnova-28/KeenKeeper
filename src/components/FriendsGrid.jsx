import FriendCard from './FriendCard'

export default function FriendsGrid({ friends }) {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {friends.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  )
}