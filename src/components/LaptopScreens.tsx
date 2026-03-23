// 5 coded HTML/CSS UI screens for the HeroScene 3D laptop
// Each is designed to look great at small scale inside the 3D model

// --- Screen 1: LOGIN PORTAL (Far Left) ---
export const LoginScreen = () => (
  <div className="w-[360px] h-[260px] bg-[#FAF9F6] flex items-center justify-center select-none overflow-hidden" style={{ fontFamily: 'system-ui, sans-serif' }}>
    <div className="w-[200px] bg-white p-4 rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-3 border-b pb-2">
        <span className="text-[#C6A87C] font-bold text-[9px] border-b-2 border-[#C6A87C] pb-2 -mb-2">Admin / Seller</span>
        <span className="text-gray-400 text-[8px] font-medium">B2B Buyer</span>
      </div>
      <div className="space-y-2">
        <div>
          <div className="text-[6px] text-gray-500 uppercase tracking-wider font-bold">Store Code / GSTIN</div>
          <div className="h-5 w-full bg-gray-50 rounded border border-gray-200 mt-0.5 flex items-center px-2 text-gray-700 text-[7px] font-medium">DMD-JEWELS-01</div>
        </div>
        <div>
          <div className="text-[6px] text-gray-500 uppercase tracking-wider font-bold">Mobile / Staff ID</div>
          <div className="h-5 w-full bg-gray-50 rounded border border-gray-200 mt-0.5 flex items-center px-2 text-[7px] justify-between">
            <span className="text-gray-700 font-medium">+91 98765 43210</span>
            <span className="text-[#C6A87C] text-[6px] font-bold">Get OTP</span>
          </div>
        </div>
        <div>
          <div className="text-[6px] text-gray-500 uppercase tracking-wider font-bold">Security PIN</div>
          <div className="flex gap-1 mt-0.5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`h-5 flex-1 rounded border flex items-center justify-center text-[8px] font-bold ${i < 4 ? 'border-[#C6A87C] text-[#2C2C2C] bg-white' : 'border-gray-200 bg-gray-50'}`}>
                {i < 4 ? '•' : ''}
              </div>
            ))}
          </div>
        </div>
        <div className="h-5 w-full bg-[#2C2C2C] rounded flex items-center justify-center text-white font-bold text-[7px] mt-2">
          Secure Login
        </div>
        <div className="text-center text-[5px] text-gray-400 flex items-center justify-center gap-0.5">
          <span>🔒</span> End-to-end encrypted
        </div>
      </div>
    </div>
    {/* Decorative blurs */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C6A87C]/10 rounded-full blur-2xl"></div>
    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#2C2C2C]/5 rounded-full blur-2xl"></div>
  </div>
);

// --- Screen 2: INVENTORY GRID (Inner Left) ---
export const InventoryScreen = () => (
  <div className="w-[380px] h-[260px] bg-[#FAF9F6] select-none overflow-hidden p-4 flex flex-col" style={{ fontFamily: 'system-ui, sans-serif' }}>
    <div className="flex justify-between items-center mb-3">
      <div className="text-[#C6A87C] text-[7px] font-bold tracking-widest uppercase">Live Stock View</div>
      <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[6px] font-bold rounded-full">Active Scanner</div>
    </div>
    <div className="grid grid-cols-6 gap-1.5 flex-1">
      {[...Array(18)].map((_, i) => (
        <div key={i} className={`rounded-lg border flex items-center justify-center ${i < 14 ? 'bg-[#C6A87C] border-[#C6A87C] shadow-sm' : 'bg-white border-dashed border-gray-300'}`}>
          {i < 14 && <div className="text-white font-serif text-[10px]">Au</div>}
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center text-[7px] text-gray-500 bg-white p-2 rounded-lg border shadow-sm mt-2">
      <div>
        <div className="text-[5px] uppercase font-bold text-gray-400">Total Pieces</div>
        <div className="font-bold text-[#2C2C2C] text-[9px]">570</div>
      </div>
      <div className="text-right">
        <div className="text-[5px] uppercase font-bold text-gray-400">Stock Value</div>
        <div className="font-bold text-[#C6A87C] text-[9px]">₹4.2 Cr</div>
      </div>
    </div>
  </div>
);

// --- Screen 3: DASHBOARD (Center - Main Screen) ---
export const DashboardScreenUI = () => (
  <div className="w-[580px] h-[320px] bg-[#FAF9F6] select-none overflow-hidden p-5 flex flex-col" style={{ fontFamily: 'system-ui, sans-serif' }}>
    {/* Header */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-3">
      <div className="flex gap-1.5 items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
      </div>
      <div className="text-[#C6A87C] font-serif font-bold tracking-widest text-[9px]">DMD GOLD</div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-3 gap-3 mb-3">
      <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 space-y-1">
        <h3 className="text-gray-400 text-[6px] uppercase tracking-wide font-bold">Total Inventory</h3>
        <p className="text-[14px] font-serif text-[#2C2C2C]">1,240 <span className="text-[8px] text-gray-400">g</span></p>
        <div className="w-full bg-gray-100 h-0.5 rounded-full">
          <div className="bg-[#C6A87C] w-3/4 h-0.5 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 space-y-1">
        <h3 className="text-gray-400 text-[6px] uppercase tracking-wide font-bold">Sales Today</h3>
        <p className="text-[14px] font-serif text-[#2C2C2C]">₹ 8.4L</p>
        <div className="w-full bg-gray-100 h-0.5 rounded-full">
          <div className="bg-[#2C2C2C] w-1/2 h-0.5 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 space-y-1">
        <h3 className="text-gray-400 text-[6px] uppercase tracking-wide font-bold">Pending Orders</h3>
        <p className="text-[14px] font-serif text-[#2C2C2C]">12</p>
        <div className="flex gap-0.5 mt-0.5">
          <div className="w-4 h-4 rounded-full bg-gray-200 border border-white"></div>
          <div className="w-4 h-4 rounded-full bg-gray-300 border border-white -ml-1.5"></div>
          <div className="w-4 h-4 rounded-full bg-gray-400 border border-white -ml-1.5 flex items-center justify-center text-[5px] text-white font-bold">+4</div>
        </div>
      </div>
    </div>

    {/* Chart Area */}
    <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex items-center justify-center relative">
      <div className="absolute inset-0 flex items-end justify-between px-4 py-3 gap-1.5 opacity-50">
        {[40, 70, 45, 90, 60, 80, 50, 75, 60, 95, 55, 85].map((h, i) => (
          <div key={i} className="w-full bg-[#C6A87C] rounded-t-sm" style={{ height: `${h}%`, opacity: 0.2 + (i / 24) }}></div>
        ))}
      </div>
      <h2 className="text-[10px] font-serif z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-100">Gold Rate Analytics</h2>
    </div>
  </div>
);

// --- Screen 4: BILLING / POS (Inner Right) ---
export const BillingScreen = () => (
  <div className="w-[380px] h-[260px] bg-[#FAF9F6] select-none overflow-hidden p-4 flex flex-col" style={{ fontFamily: 'system-ui, sans-serif' }}>
    <div className="flex justify-between items-center mb-2">
      <div className="text-[#C6A87C] font-bold text-[7px] tracking-widest uppercase">Billing & POS</div>
      <div className="px-1.5 py-0.5 bg-[#2C2C2C] text-white text-[6px] rounded flex items-center gap-1 font-bold">
        <span>LIVE RATE:</span>
        <span className="text-[#C6A87C]">₹6,200/g</span>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-2.5 mb-2">
      <div className="flex justify-between items-end border-b border-gray-100 pb-1.5 mb-1.5">
        <div>
          <div className="text-[5px] text-gray-400 uppercase font-bold tracking-wider">Customer Info</div>
          <div className="font-bold text-[#2C2C2C] text-[8px]">Mrs. Anjali Sharma</div>
          <div className="text-[5px] text-gray-500">+91 99887 76655 | PAN: ABCDE1234F</div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between font-bold text-[#2C2C2C] text-[7px]">
          <span>1. Gold Choker Set (22K)</span>
          <span>₹2,45,000</span>
        </div>
        <div className="flex justify-between text-[5px] text-gray-500 ml-2">
          <span>Net: 35.2g | MC: 12% | Stone: ₹15k</span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-2.5 flex-1">
      <div className="flex justify-between text-[6px] text-gray-500 mb-1"><span>Subtotal</span><span>₹2,45,000</span></div>
      <div className="flex justify-between text-[6px] text-gray-500 mb-1"><span>GST (3%)</span><span>₹7,350</span></div>
      <div className="flex justify-between text-[6px] text-green-600 font-bold mb-1.5 border-b border-gray-100 pb-1.5"><span>Festive Discount</span><span>-₹2,350</span></div>
      <div className="flex justify-between items-center text-[#2C2C2C]">
        <span className="text-[5px] font-bold uppercase tracking-wider text-gray-400">Net Payable</span>
        <span className="text-[12px] font-black">₹2,50,000</span>
      </div>
    </div>

    <div className="h-5 bg-[#2C2C2C] text-white rounded flex items-center justify-center font-bold text-[7px] mt-2">
      Generate Final Invoice
    </div>
  </div>
);

// --- Screen 5: PRODUCT CREATION (Far Right) ---
export const ProductScreen = () => (
  <div className="w-[360px] h-[260px] bg-white select-none overflow-hidden p-4 flex flex-col" style={{ fontFamily: 'system-ui, sans-serif' }}>
    <div className="flex justify-between items-center mb-2">
      <div className="text-[#2C2C2C] text-[9px] font-bold">Add to Master Stock</div>
      <div className="bg-blue-50 text-blue-600 text-[5px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">RFID Scanned</div>
    </div>

    <div className="space-y-2 flex-1">
      <div className="flex gap-2">
        <div className="flex-1 h-12 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 text-[7px]">
          <span className="text-[10px] mb-0.5">📷</span>
          <span className="text-[5px] font-bold uppercase">Upload Photo</span>
        </div>
        <div className="flex-1 flex flex-col justify-center space-y-1">
          <div className="h-4 bg-gray-50 border border-gray-200 rounded flex items-center px-2 text-[6px] font-medium"><span className="text-gray-400 w-6 text-[5px]">SKU:</span> RN-882</div>
          <div className="h-4 bg-gray-50 border border-gray-200 rounded flex items-center px-2 text-[6px] font-medium"><span className="text-gray-400 w-6 text-[5px]">HUID:</span> AB123C</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        <div>
          <div className="text-[5px] text-gray-500 uppercase font-bold ml-0.5">Category</div>
          <div className="h-4 bg-gray-50 border border-gray-200 rounded flex justify-between items-center px-2 text-[6px] font-medium text-gray-700">
            Gold Ring <span className="text-gray-400 text-[5px]">▼</span>
          </div>
        </div>
        <div>
          <div className="text-[5px] text-gray-500 uppercase font-bold ml-0.5">Purity</div>
          <div className="h-4 bg-gray-50 border border-gray-200 rounded flex justify-between items-center px-2 text-[6px] font-medium text-gray-700">
            22K (916) <span className="text-gray-400 text-[5px]">▼</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5 bg-[#FAF9F6] p-2 rounded-lg border border-[#C6A87C]/20">
        <div>
          <div className="text-[5px] text-gray-500 uppercase font-bold">Gross Wt</div>
          <div className="text-[7px] font-bold text-[#2C2C2C]">12.500 g</div>
        </div>
        <div>
          <div className="text-[5px] text-gray-500 uppercase font-bold">Stone Wt</div>
          <div className="text-[7px] font-bold text-red-500">-1.200 g</div>
        </div>
        <div>
          <div className="text-[5px] text-[#C6A87C] uppercase font-bold">Net Wt</div>
          <div className="text-[7px] font-bold text-green-700 border-b border-green-700 inline-block">11.300 g</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        <div>
          <div className="text-[5px] text-gray-500 uppercase font-bold ml-0.5">Making Charge</div>
          <div className="h-4 bg-gray-50 border border-gray-200 rounded flex items-center px-2 text-[6px] font-bold text-gray-700">₹450 / gm</div>
        </div>
        <div>
          <div className="text-[5px] text-gray-500 uppercase font-bold ml-0.5">Stone Value</div>
          <div className="h-4 bg-gray-50 border border-gray-200 rounded flex items-center px-2 text-[6px] font-bold text-gray-700">₹2,500</div>
        </div>
      </div>
    </div>

    <div className="h-5 w-full bg-[#C6A87C] rounded flex items-center justify-center text-white font-bold text-[7px] mt-2 shadow-sm">
      Save & Print Barcode
    </div>
  </div>
);
