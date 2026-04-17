import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'
import { useTimeline } from '../context/TimelineContext'

const COLORS = ['#a78bfa', '#2d6a5f', '#34d399']

export default function Analytics() {
  const { entries } = useTimeline()

  const calls = entries.filter(e => e.type === 'Call').length
  const texts = entries.filter(e => e.type === 'Text').length
  const videos = entries.filter(e => e.type === 'Video').length

  const data = [
    { name: 'Text', value: texts },
    { name: 'Call', value: calls },
    { name: 'Video', value: videos },
  ].filter(d => d.value > 0)

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Friendship Analytics</h1>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <p className="text-sm text-gray-500 mb-4">By Interaction Type</p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}