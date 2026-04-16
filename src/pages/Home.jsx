import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import FriendsGrid from '../components/FriendsGrid'

export default function Home() {
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      import('../data/friends.json').then(data => {
        setFriends(data.default)
        setLoading(false)
      })
    }, 800)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-[#2d6a5f] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div>
      <Banner friends={friends} />
      <FriendsGrid friends={friends} />
    </div>
  )
}