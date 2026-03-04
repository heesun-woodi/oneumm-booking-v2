export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">온음 공간 예약 시스템</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">놀터</button>
            <button className="px-4 py-2 bg-gray-200 rounded">방음실</button>
          </div>
          
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4">2026년 3월</h2>
          </div>
          
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
              <div key={day} className="text-center font-semibold p-2">{day}</div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 31 }, (_, i) => (
              <button
                key={i + 1}
                className="aspect-square border rounded p-2 hover:bg-blue-50"
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">예약 안내</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• 놀터: 09:00-23:00</li>
            <li>• 방음실: 09:00-23:00</li>
            <li>• 시간당 14,000원</li>
            <li>• 회원: 월 3회 무료</li>
          </ul>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>📞 문의: 온음 공동체</p>
          <p>🏦 입금: 카카오뱅크 7979-72-56275 (정상은)</p>
        </div>
      </div>
    </div>
  )
}
