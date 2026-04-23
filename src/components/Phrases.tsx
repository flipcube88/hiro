import { useState } from 'react';
import { MessageCircle, Volume2, Ticket, MapPin, Armchair, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const destinations = [
  { id: 'hiroshima', zh: '廣島', ja: '広島', romaji: 'Hiroshima' },
  { id: 'shinosaka', zh: '新大阪', ja: '新大阪', romaji: 'Shin-Ōsaka' },
  { id: 'onomichi', zh: '尾道', ja: '尾道', romaji: 'Onomichi' },
  { id: 'mihara', zh: '三原 (兔島)', ja: '三原', romaji: 'Mihara' },
];

const seatTypes = [
  { id: 'oversized', zh: '特大行李位', ja: '特大荷物スペース付き座席', romaji: 'tokudai nimotsu supēsu tsuki zaseki' },
  { id: 'reserved', zh: '指定席', ja: '指定席', romaji: 'shiteiseki' },
  { id: 'nonreserved', zh: '自由席', ja: '自由席', romaji: 'jiyūseki' },
];

const quantities = [
  { id: '1', zh: '1張', ja: '1枚', romaji: 'ichi-mai' },
  { id: '2', zh: '2張', ja: '2枚', romaji: 'ni-mai' },
  { id: '3', zh: '3張', ja: '3枚', romaji: 'san-mai' },
  { id: '4', zh: '4張', ja: '4枚', romaji: 'yon-mai' },
];

const staticPhrases = [
  {
    category: "入境與海關",
    items: [
      {
        zh: "我是來觀光旅遊的。",
        ja: "観光で来ました。",
        romaji: "Kankō de kimashita."
      },
      {
        zh: "我會停留六天。",
        ja: "6日間滞在します。",
        romaji: "Muika-kan taizai shimasu."
      },
      {
        zh: "這是我入住的酒店地址。",
        ja: "これが宿泊するホテルの住所です。",
        romaji: "Kore ga shukuhaku suru hoteru no jūsho desu."
      },
      {
        zh: "我沒有需要申報的物品。",
        ja: "申告するものはありません。",
        romaji: "Shinkoku suru mono wa arimasen."
      }
    ]
  },
  {
    category: "車站與寄放行李",
    items: [
      {
        zh: "請問投幣式儲物櫃在哪裡？",
        ja: "コインロッカーはどこですか？",
        romaji: "Koin rokkā wa doko desu ka?"
      },
      {
        zh: "可以幫我寄存行李嗎？",
        ja: "荷物を預かってもらえますか？",
        romaji: "Nimotsu o azukatte moraemasu ka?"
      }
    ]
  },
  {
    category: "餐廳與點餐",
    items: [
      {
        zh: "兩位。",
        ja: "2名です。",
        romaji: "Ni-mei desu."
      },
      {
        zh: "請給我英文菜單。",
        ja: "英語のメニューをお願いします。",
        romaji: "Eigo no menyū o onegaishimasu."
      },
      {
        zh: "唔該埋單。",
        ja: "お会計をお願いします。",
        romaji: "O-kaikei o onegaishimasu."
      }
    ]
  }
];

export function Phrases() {
  const [dest, setDest] = useState(destinations[1]); // Default: Shin-Osaka
  const [seat, setSeat] = useState(seatTypes[0]); // Default: Oversized
  const [qty, setQty] = useState(quantities[1]); // Default: 2 tickets

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85; // Slightly slower for clarity
      window.speechSynthesis.speak(utterance);
    } else {
      alert('你的瀏覽器不支援語音播放功能。');
    }
  };

  const combinedJa = `${dest.ja}までの${seat.ja}の切符を${qty.ja}お願いします。`;
  const combinedRomaji = `${dest.romaji} made no ${seat.romaji} no kippu o ${qty.romaji} onegaishimasu.`;
  const combinedZh = `麻煩給我 ${qty.zh} 去 ${dest.zh} 的 ${seat.zh} 車票。`;

  return (
    <div className="space-y-8 pb-24 px-4 pt-6">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-orange-600" />
          實用日語
        </h2>
        <p className="text-gray-500 text-sm mt-1">點擊喇叭圖示可聆聽日語發音。</p>
      </div>

      {/* Dynamic Ticket Builder */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-200 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 text-white flex items-center gap-2">
          <Ticket className="w-5 h-5" />
          <h3 className="font-bold text-lg">購票句子組合器</h3>
        </div>
        
        <div className="p-4 space-y-5 bg-orange-50/30">
          {/* Selectors */}
          <div className="space-y-4">
            {/* Destination */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2">
                <MapPin className="w-3.5 h-3.5 text-orange-500" /> 目的地
              </label>
              <div className="flex flex-wrap gap-2">
                {destinations.map(d => (
                  <button
                    key={d.id}
                    onClick={() => setDest(d)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border",
                      dest.id === d.id 
                        ? "bg-orange-100 border-orange-500 text-orange-800" 
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {d.zh}
                  </button>
                ))}
              </div>
            </div>

            {/* Seat Type */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2">
                <Armchair className="w-3.5 h-3.5 text-orange-500" /> 座位類型
              </label>
              <div className="flex flex-wrap gap-2">
                {seatTypes.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSeat(s)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border",
                      seat.id === s.id 
                        ? "bg-orange-100 border-orange-500 text-orange-800" 
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {s.zh}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2">
                <Users className="w-3.5 h-3.5 text-orange-500" /> 數量
              </label>
              <div className="flex flex-wrap gap-2">
                {quantities.map(q => (
                  <button
                    key={q.id}
                    onClick={() => setQty(q)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border",
                      qty.id === q.id 
                        ? "bg-orange-100 border-orange-500 text-orange-800" 
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {q.zh}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="mt-4 bg-white p-4 rounded-xl shadow-sm border border-orange-100 relative">
            <p className="font-bold text-gray-900 mb-3 text-sm">{combinedZh}</p>
            <div className="bg-orange-50 p-3 rounded-lg">
              <p className="text-orange-900 font-medium text-lg mb-2 pr-8 leading-snug">{combinedJa}</p>
              <p className="text-orange-600/80 text-xs font-mono leading-relaxed">{combinedRomaji}</p>
              <button 
                onClick={() => playAudio(combinedJa)}
                className="absolute right-6 top-14 text-orange-500 hover:text-orange-600 transition-colors bg-orange-100 p-2 rounded-full shadow-sm"
                aria-label="Play pronunciation"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Static Phrases */}
      <div className="space-y-8">
        {staticPhrases.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-orange-200 pb-2 inline-block">
              {section.category}
            </h3>
            <div className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <p className="font-bold text-gray-900 mb-2 text-sm">{item.zh}</p>
                  <div className="bg-gray-50 p-3 rounded-lg relative">
                    <p className="text-gray-900 font-medium text-base mb-1 pr-8">{item.ja}</p>
                    <p className="text-gray-500 text-xs font-mono">{item.romaji}</p>
                    <button 
                      onClick={() => playAudio(item.ja)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-orange-500 transition-colors p-1"
                      aria-label="Play pronunciation"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
