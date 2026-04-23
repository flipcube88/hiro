import { Clock, Info } from 'lucide-react';
import { ToriiIllustration, RabbitIllustration, ShinkansenIllustration, CastleIllustration, TakoyakiIllustration, PlaneIllustration } from './Illustrations';

const days = [
  {
    day: 1,
    title: "大阪抵達與前往廣島",
    description: "下午抵達關西機場，隨即搭乘新幹線前往廣島。",
    alert: "抵達關西機場後，建議先在 JR 綠色窗口或售票機購買車票並劃位（包括特大行李位）。",
    icon: ShinkansenIllustration,
    activities: [
      { time: "16:00", title: "抵達關西機場 (KIX)", desc: "辦理入境手續，領取行李。" },
      { time: "17:15", title: "搭乘 HARUKA 特急", desc: "從關西機場搭乘 HARUKA 特急列車前往「新大阪站」(車程約 50 分鐘)。" },
      { time: "18:30", title: "轉乘新幹線前往廣島", desc: "在新大阪站轉乘山陽新幹線 (希望號 Nozomi 或 櫻花號 Sakura) 前往廣島 (車程約 1.5 小時)。" },
      { time: "20:00", title: "抵達廣島站 & Check-in", desc: "抵達廣島，前往車站周邊酒店辦理入住，安頓兩件大型行李。" },
      { time: "20:30", title: "晚餐：廣島燒", desc: "在廣島站內的 ekie 商場享用地道廣島燒 (お好み焼き)，消除舟車勞頓。" }
    ]
  },
  {
    day: 2,
    title: "兔仔島與尾道漫步",
    description: "探訪被可愛兔子包圍的秘境，下午前往充滿懷舊風情的尾道。",
    alert: "建議將大型行李留在廣島市區酒店，帶輕便背包前往。使用 JR Pass 可涵蓋今日大部分交通。",
    icon: RabbitIllustration,
    activities: [
      { time: "08:30", title: "廣島站出發", desc: "搭乘新幹線前往「三原站」(約25分鐘)，轉乘 JR 吳線前往「忠海站」(約20分鐘)。" },
      { time: "10:00", title: "大久野島 (兔仔島)", desc: "在忠海港買船票及兔糧，搭船(15分鐘)登島。與兔仔互動、環島散步。" },
      { time: "13:30", title: "離開兔仔島前往尾道", desc: "搭船返回忠海港，搭乘 JR 吳線至「三原站」，再轉乘 JR 山陽本線至「尾道站」(車程約 45 分鐘)。" },
      { time: "14:30", title: "尾道半日遊", desc: "搭乘千光寺山纜車上山，俯瞰瀨戶內海與尾道水道。沿著「貓之細道」漫步下山，感受懷舊氛圍。" },
      { time: "17:30", title: "晚餐：尾道拉麵", desc: "品嚐以醬油為基底、加入豬背脂的特色尾道拉麵 (如：壹番館、朱華園)。" },
      { time: "19:00", title: "返回廣島", desc: "從尾道站搭乘 JR 至「三原站」或「福山站」，轉乘新幹線返回廣島。" }
    ]
  },
  {
    day: 3,
    title: "宮島 神明居住的島嶼",
    description: "探訪日本三景之一，欣賞海上大鳥居。",
    icon: ToriiIllustration,
    activities: [
      { time: "09:00", title: "前往宮島口", desc: "從廣島站搭乘 JR 抵達「宮島口站」(約30分鐘)，轉乘 JR 西日本宮島渡輪 (JR Pass 可免費搭乘，可近距離觀賞大鳥居)。" },
      { time: "10:00", title: "嚴島神社 & 海上大鳥居", desc: "參拜建在海上的世界遺產，退潮時可步行至大鳥居旁。" },
      { time: "12:00", title: "表參道商店街", desc: "午餐時間！必食：烤生蠔、炸紅葉饅頭、星鰻飯 (穴子飯)。" },
      { time: "14:00", title: "彌山 (可選)", desc: "搭乘宮島纜車上山，俯瞰瀨戶內海絕美景色。" },
      { time: "17:00", title: "返回廣島", desc: "欣賞宮島夕陽後返回廣島市區。" }
    ]
  },
  {
    day: 4,
    title: "廣島市區巡禮 & 返回大阪",
    description: "把握最後時間遊覽廣島，帶著兩件大型行李搭新幹線返回大阪。",
    alert: "今日需攜帶兩件大型行李搭乘新幹線，務必提前預約「特大行李附加座位」！",
    icon: CastleIllustration,
    activities: [
      { time: "09:30", title: "和平紀念公園 & 原爆圓頂館", desc: "見證歷史，感受和平的可貴。建議預留 1.5 小時。" },
      { time: "11:30", title: "本通商店街", desc: "廣島市中心最繁華的商店街，適合購買藥妝及手信。" },
      { time: "13:30", title: "廣島站周邊午餐", desc: "返回廣島站附近午餐，領取寄放的行李，在 ekie 商場作最後衝刺。" },
      { time: "15:00", title: "搭乘新幹線返回大阪", desc: "從廣島站搭乘新幹線前往新大阪站。車程約 1.5 小時。" },
      { time: "16:45", title: "抵達新大阪 & Check-in", desc: "抵達新大阪後，轉乘地鐵或 JR 前往大阪市區酒店辦理入住。" },
      { time: "18:30", title: "道頓堀 & 心齋橋", desc: "在大阪最熱鬧的商圈逛街，品嚐章魚燒、大阪燒，感受道頓堀的霓虹夜景。" }
    ]
  },
  {
    day: 5,
    title: "大阪市內瘋狂遊玩",
    description: "全日於大阪市內或主題樂園遊玩。",
    icon: TakoyakiIllustration,
    activities: [
      { time: "全日", title: "選項一：日本環球影城 (USJ)", desc: "早起前往 USJ 暢玩超級任天堂世界、哈利波特魔法世界等園區。" },
      { time: "全日", title: "選項二：大阪市區探索", desc: "參觀大阪城天守閣、黑門市場食海鮮，黃昏前往梅田藍天大廈或阿倍野 HARUKAS 睇夜景。" }
    ]
  },
  {
    day: 6,
    title: "最後血拼 & 滿載而歸",
    description: "把握最後時間在大阪購物，下午前往關西機場返回溫暖的家。",
    icon: PlaneIllustration,
    activities: [
      { time: "09:30", title: "梅田 / 難波商圈", desc: "百貨公司、藥妝店最後衝刺，購買各種手信。" },
      { time: "13:00", title: "前往關西機場", desc: "從難波搭乘南海電鐵 (Rapi:t)，或從天王寺/新大阪搭乘 HARUKA 前往關西機場。" },
      { time: "14:00", title: "關西機場 (KIX)", desc: "預留充足時間辦理登機、退稅手續，並在免稅店作最後採購。" }
    ]
  }
];

export function Itinerary() {
  return (
    <div className="space-y-8 pb-24">
      <div className="bg-orange-600 text-white p-6 rounded-b-3xl shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">大阪・廣島六日遊</h1>
          <p className="text-orange-100">廣島重點(4日) + 大阪吃喝血拼(2日)</p>
        </div>
        <ToriiIllustration className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20" />
      </div>

      <div className="px-4 space-y-6">
        {days.map((day) => {
          const Icon = day.icon;
          return (
            <div key={day.day} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-orange-50 p-4 border-b border-orange-100 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm p-2 flex items-center justify-center">
                  <Icon className="w-full h-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-orange-600 font-bold text-sm bg-orange-100 px-2 py-0.5 rounded">
                      Day {day.day}
                    </span>
                    <h2 className="text-lg font-bold text-gray-900 leading-tight">{day.title}</h2>
                  </div>
                  <p className="text-gray-600 text-xs">{day.description}</p>
                </div>
              </div>
              
              {day.alert && (
                <div className="bg-amber-50 p-3 mx-4 mt-4 rounded-lg flex gap-2 items-start text-amber-800 text-xs border border-amber-200">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>{day.alert}</p>
                </div>
              )}

              <div className="p-4">
                <div className="relative border-l-2 border-orange-200 ml-4 space-y-6 pb-2">
                  {day.activities.map((act, idx) => (
                    <div key={idx} className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-orange-500" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                        <span className="text-orange-600 font-mono text-sm font-semibold flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {act.time}
                        </span>
                        <h3 className="font-bold text-gray-900">{act.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{act.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
