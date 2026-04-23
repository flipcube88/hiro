import { Utensils, Bed, MapPin } from 'lucide-react';
import { RamenIllustration } from './Illustrations';

export function FoodStay() {
  return (
    <div className="space-y-8 pb-24 px-4 pt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Utensils className="w-6 h-6 text-orange-600" />
        美食與住宿建議
      </h2>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <Bed className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">住宿建議</h3>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
          <div className="bg-orange-50 p-4 border-b border-orange-100 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-orange-600" />
            <h4 className="font-bold text-orange-900">首三日：廣島住宿建議</h4>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-gray-700">
              因為行程包含前往兔仔島（需搭新幹線/JR）及第四日搭新幹線返大阪，強烈建議<strong>住在「JR 廣島站」周邊</strong>。
            </p>
            
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 flex items-center gap-1 mb-1">
                  <MapPin className="w-4 h-4" /> 廣島站北口 (新幹線口)
                </h4>
                <p className="text-xs text-blue-800">優點：距離新幹線閘口極近，拖著大型行李最方便。周邊較安靜。</p>
                <p className="text-xs text-blue-800 mt-1">推薦：Hotel Granvia Hiroshima, Sheraton Grand Hiroshima</p>
              </div>
              
              <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-900 flex items-center gap-1 mb-1">
                  <MapPin className="w-4 h-4" /> 廣島站南口
                </h4>
                <p className="text-xs text-green-800">優點：靠近路面電車站，前往市區景點（原爆圓頂、本通）較方便，商場多。</p>
                <p className="text-xs text-green-800 mt-1">推薦：APA Hotel Hiroshima-Ekimae, Hotel Kawashima</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
          <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-600" />
            <h4 className="font-bold text-indigo-900">後兩日：大阪住宿建議</h4>
          </div>
          <div className="p-5 space-y-3">
            <p className="text-sm text-gray-700">
              第四日會帶著兩件大型行李從廣島搭新幹線回大阪，建議選擇轉乘最少的地點：
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li><strong>新大阪站周邊</strong>：新幹線落車直達，完全不用轉地鐵搬行李，適合喜歡輕鬆的人。</li>
              <li><strong>梅田/大阪站周邊</strong>：只需從新大阪轉一程 JR (約4分鐘)，購物同飲食極度方便。</li>
              <li><strong>難波/心齋橋周邊</strong>：夜生活最豐富，行街最方便，但需從新大阪轉乘御堂筋線地鐵 (約15分鐘)，搬大型行李時需注意避開繁忙時間。</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <Utensils className="w-5 h-5 text-orange-600" />
          <h3 className="text-xl font-bold text-gray-900">必食推介 (廣島)</h3>
        </div>

        <div className="grid gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4">
            <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-3xl">🥞</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">廣島燒 (お好み焼き)</h4>
              <p className="text-xs text-gray-600 mt-1 mb-2">與大阪燒不同，廣島燒有加入炒麵，層次分明，份量十足。</p>
              <p className="text-xs font-medium text-orange-600">📍 推薦地點：廣島站 ekie 商場、お好み村</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4">
            <div className="w-20 h-20 bg-red-50 rounded-lg flex items-center justify-center shrink-0 p-2">
              <RamenIllustration className="w-full h-full" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">尾道拉麵</h4>
              <p className="text-xs text-gray-600 mt-1 mb-2">以醬油為湯底，加入小魚乾熬煮，表面浮著大塊豬背脂，香濃不膩。</p>
              <p className="text-xs font-medium text-orange-600">📍 推薦地點：尾道 (壹番館、朱華園)</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4">
            <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-3xl">🦪</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">燒生蠔 (焼き牡蠣)</h4>
              <p className="text-xs text-gray-600 mt-1 mb-2">廣島是日本最大的生蠔產地，宮島表參道商店街有許多即叫即燒的生蠔店。</p>
              <p className="text-xs font-medium text-orange-600">📍 推薦地點：宮島表參道商店街</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4">
            <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-3xl">🍱</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">星鰻飯 (穴子飯)</h4>
              <p className="text-xs text-gray-600 mt-1 mb-2">宮島名物，將烤過的星鰻鋪滿在飯上，肉質比鰻魚更細緻柔軟。</p>
              <p className="text-xs font-medium text-orange-600">📍 推薦地點：宮島口 (如：うえの Ueno)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
