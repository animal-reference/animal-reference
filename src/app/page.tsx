export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
      {/* First Row */}
      <div className="lg:col-span-4 bg-white shadow">
        <h2 className="text-l font-bold bg-[#7CAA96] text-white px-2 py-1">Featured Species</h2>
        <div className="p-2 text-black">
          <p>Highlight of a featured farm animal species...</p>
        </div>
      </div>
      <div className="lg:col-span-4 bg-white shadow">
        <h2 className="text-l font-bold bg-[#7CAA96] text-white px-2 py-1">Global Statistics</h2>
        <div className="p-2 text-black">
          <p>Overview of global farm animal statistics...</p>
        </div>
      </div>
      <div className="lg:col-span-4 bg-white shadow">
        <h2 className="text-l font-bold bg-[#7CAA96] text-white px-2 py-1">Quick Facts</h2>
        <div className="p-2">
          <ul className="list-disc list-inside text-black">
            <li>Fact about chickens</li>
            <li>Fact about cows</li>
            <li>Fact about pigs</li>
          </ul>
        </div>
      </div>

      {/* Second Row */}
      <div className="lg:col-span-4 bg-white shadow">
        <h2 className="text-l font-bold bg-[#7CAA96] text-white px-2 py-1">Population Trends</h2>
        <div className="p-2 text-black">
          <p>Chart or table showing population trends of farm animals...</p>
        </div>
      </div>
      <div className="lg:col-span-4 bg-white shadow">
        <h2 className="text-l font-bold bg-[#7CAA96] text-white px-2 py-1">Welfare Indicators</h2>
        <div className="p-2 text-black">
          <p>Information on animal welfare indicators...</p>
        </div>
      </div>
      <div className="lg:col-span-4 bg-white shadow">
        <h2 className="text-l font-bold bg-[#7CAA96] text-white px-2 py-1">Recent Updates</h2>
        <div className="p-2 text-black">
          <p>List of recent updates to animal reference...</p>
        </div>
      </div>
    </div>
  );
}
