import { useState } from 'react';
import { Map, Train, Utensils, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Itinerary } from '@/components/Itinerary';
import { Transport } from '@/components/Transport';
import { Phrases } from '@/components/Phrases';
import { FoodStay } from '@/components/FoodStay';

type Tab = 'itinerary' | 'transport' | 'food' | 'phrases';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('itinerary');

  const tabs = [
    { id: 'itinerary', label: '行程', icon: Map },
    { id: 'transport', label: '交通', icon: Train },
    { id: 'food', label: '食宿', icon: Utensils },
    { id: 'phrases', label: '日語', icon: MessageCircle },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden flex flex-col">
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'itinerary' && <Itinerary />}
        {activeTab === 'transport' && <Transport />}
        {activeTab === 'food' && <FoodStay />}
        {activeTab === 'phrases' && <Phrases />}
      </main>

      <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200 pb-safe pt-2 px-4 z-50">
        <div className="flex justify-between items-center mb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex flex-col items-center justify-center w-16 h-12 rounded-xl transition-all duration-200",
                  isActive ? "text-orange-600" : "text-gray-400 hover:text-gray-600"
                )}
              >
                <div className={cn(
                  "p-1.5 rounded-full transition-all duration-200",
                  isActive ? "bg-orange-100" : "bg-transparent"
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium mt-1">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
