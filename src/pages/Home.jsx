import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import FriendsGrid from '../components/FriendsGrid'
import friendsData from '../data/friends.json'

export default function Home() {
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
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