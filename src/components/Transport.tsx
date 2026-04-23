import { Train, Luggage, AlertTriangle, Ticket, Clock, MapPin, CreditCard } from 'lucide-react';
import { ShinkansenIllustration } from './Illustrations';

export function Transport() {
  return (
    <div className="space-y-6 pb-24 px-4 pt-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Train className="w-6 h-6 text-orange-600" />
          新幹線與交通指南
        </h2>
        <p className="text-gray-500 text-sm mt-1">為你整理往返大阪與廣島的交通方式及行李規定。</p>
      </div>

      {/* JR Pass Info */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-sm overflow-hidden text-white relative">
        <ShinkansenIllustration className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10" />
        <div className="p-5 relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="w-5 h-5 text-green-100" />
            <h3 className="text-lg font-bold">JR Pass 使用指南</h3>
          </div>
          <p className="text-sm text-green-50 mb-4">
            推薦使用<strong>「關西&廣島地區鐵路周遊券」(5日)</strong>，完美涵蓋此行程所有跨區交通！
          </p>
          <div className="space-y-2 text-xs">
            <div className="bg-white/10 p-2.5 rounded-lg backdrop-blur-sm">
              <span className="font-bold text-green-100 block mb-1">✅ 涵蓋範圍 (免費搭乘)：</span>
              <ul className="list-disc pl-4 space-y-1 text-white">
                <li>關西機場 ➔ 新大阪 (HARUKA 特急)</li>
                <li>新大阪 ➔ 廣島 (山陽新幹線，可搭希望號 Nozomi)</li>
                <li>廣島 ➔ 三原/尾道 (新幹線及 JR 在來線)</li>
                <li>宮島口 ➔ 宮島 (JR 西日本宮島渡輪)</li>
              </ul>
            </div>
            <div className="bg-black/10 p-2.5 rounded-lg backdrop-blur-sm">
              <span className="font-bold text-green-100 block mb-1">❌ 不涵蓋範圍：</span>
              <ul className="list-disc pl-4 space-y-1 text-white">
                <li>廣島市內路面電車 (需另外付費或買一日券)</li>
                <li>忠海港 ➔ 兔仔島渡輪 (需另外買船票)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Card 1: Day 1 KIX to Hiroshima */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white">
          <div className="flex justify-between items-center mb-1">
            <span className="text-blue-100 text-xs font-bold tracking-wider uppercase bg-blue-700/30 px-2 py-0.5 rounded">Day 1</span>
            <Clock className="w-4 h-4 text-blue-100" />
          </div>
          <h3 className="text-xl font-bold mt-2">大阪 ➔ 廣島</h3>
          <p className="text-blue-100 text-sm mt-1">關西機場出發路線</p>
        </div>
        <div className="p-5">
          <div className="flex items-stretch gap-4">
            <div className="flex flex-col items-center mt-1">
              <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-50"></div>
              <div className="w-0.5 h-12 bg-gray-200 my-1"></div>
              <div className="w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-50"></div>
              <div className="w-0.5 h-12 bg-gray-200 my-1"></div>
              <div className="w-3 h-3 rounded-full bg-red-500 ring-4 ring-red-50"></div>
            </div>
            <div className="flex-1 space-y-5">
              <div>
                <p className="font-bold text-gray-900">關西機場 (KIX)</p>
                <p className="text-xs text-gray-500 mt-0.5">16:00 抵達，辦理入境</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-gray-900">新大阪站</p>
                  <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">轉車</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">搭乘 HARUKA 特急 (約 50 分鐘)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">廣島站</p>
                <p className="text-xs text-gray-500 mt-0.5">搭乘 山陽新幹線 (約 1.5 小時)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Day 4 Hiroshima to Osaka */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4 text-white">
          <div className="flex justify-between items-center mb-1">
            <span className="text-orange-100 text-xs font-bold tracking-wider uppercase bg-orange-700/30 px-2 py-0.5 rounded">Day 4</span>
            <Ticket className="w-4 h-4 text-orange-100" />
          </div>
          <h3 className="text-xl font-bold mt-2">廣島 ➔ 大阪</h3>
          <p className="text-orange-100 text-sm mt-1">返回新大阪路線</p>
        </div>
        <div className="p-5 space-y-4">
          <p className="text-sm text-gray-700">從廣島站搭乘山陽新幹線直達新大阪站。</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="inline-block bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded mb-2">希望號 Nozomi</span>
              <p className="text-xs text-gray-600 leading-relaxed">車程約 1h20m。<br/>班次最密集。</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="inline-block bg-pink-100 text-pink-800 text-[10px] font-bold px-2 py-1 rounded mb-2">櫻花號 Sakura</span>
              <p className="text-xs text-gray-600 leading-relaxed">車程約 1h25m。<br/>指定席座位較寬敞。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Oversized Baggage */}
      <div className="bg-white rounded-2xl shadow-sm border border-amber-200 overflow-hidden">
        <div className="bg-amber-50 p-5 border-b border-amber-100 flex items-start gap-4">
          <div className="bg-amber-100 p-2.5 rounded-full shrink-0">
            <Luggage className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-amber-900">特大行李必須預約座位</h3>
            <p className="text-xs text-amber-700 mt-1">攜帶 2 件大型行李搭新幹線必讀</p>
          </div>
        </div>
        <div className="p-5 space-y-4 text-sm text-gray-700">
          <div className="flex items-start gap-2 bg-amber-50/50 p-3 rounded-lg border border-amber-100">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-amber-900 text-xs leading-relaxed">長+寬+高總和介於 <strong>160cm - 250cm</strong> 的行李（約28吋以上），必須事先預約「特大行李附加座位」。</p>
          </div>
          <ul className="space-y-3 text-gray-600 text-xs">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <p>座位通常位於車廂最後一排，行李可放置於座位後方的專屬空間。</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <p><strong>無額外收費</strong>（與一般指定席同價），但數量有限，強烈建議提早預訂。</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
              <p>若未預約而將特大行李帶上車，將被收取 <strong>1,000日圓</strong> 手續費。</p>
            </li>
          </ul>
          <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-xs text-gray-700 mt-4">
            <span className="font-bold text-gray-900 block mb-1">💡 溫馨提示：</span>
            Day 1 抵達關西機場時，建議直接在 JR 綠色窗口一次過購買來回車票，並同時劃位「特大行李位」。
          </div>
        </div>
      </div>

    </div>
  );
}
