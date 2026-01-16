export default function DashboardScreen() {
    return (
        <div className="w-[960px] h-[600px] bg-[#FBFBF9] p-8 flex flex-col gap-6 select-none overflow-hidden border-4 border-[#2D2D2D]">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-red-400"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                    <div className="w-4 h-4 rounded-full bg-green-400"></div>
                </div>
                <div className="text-[#D4AF37] font-serif font-bold tracking-widest text-lg">DMD GOLD</div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
                {/* Stat Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-2">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wide">Total Inventory</h3>
                    <p className="text-4xl font-serif text-[#2D2D2D]">1,240 <span className="text-lg text-gray-400">g</span></p>
                    <div className="w-full bg-gray-100 h-1 rounded-full mt-2">
                        <div className="bg-[#D4AF37] w-3/4 h-1 rounded-full"></div>
                    </div>
                </div>
                {/* Stat Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-2">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wide">Sales Today</h3>
                    <p className="text-4xl font-serif text-[#2D2D2D]">₹ 8.4L</p>
                    <div className="w-full bg-gray-100 h-1 rounded-full mt-2">
                        <div className="bg-[#2D2D2D] w-1/2 h-1 rounded-full"></div>
                    </div>
                </div>
                {/* Stat Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-2">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wide">Pending Orders</h3>
                    <p className="text-4xl font-serif text-[#2D2D2D]">12</p>
                    <div className="flex gap-1 mt-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white -ml-3"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white -ml-3 flex items-center justify-center text-[10px] text-white font-bold">+4</div>
                    </div>
                </div>
            </div>

            {/* Main Chart Area */}
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-end justify-between px-8 py-8 gap-4 opacity-50">
                    {[40, 70, 45, 90, 60, 80, 50, 75, 60, 95].map((h, i) => (
                        <div key={i} className="w-full bg-[#D4AF37]" style={{ height: `${h}%`, opacity: 0.2 + (i / 20) }}></div>
                    ))}
                </div>
                <h2 className="text-2xl font-serif z-10 bg-white/80 backdrop-blur px-6 py-2 rounded-full border border-gray-100">Gold Rate Analytics</h2>
            </div>
        </div>
    );
}