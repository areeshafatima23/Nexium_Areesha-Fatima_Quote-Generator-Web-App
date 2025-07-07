'use client';
import { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const quotesDB: Record<string, string[]> = {
  friendship: [
    "Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one.’",
    "A real friend is one who walks in when the rest of the world walks out.",
    "True friendship comes when the silence between two people is comfortable."
  ],
  motivation: [
    "Don't watch the clock; do what it does. Keep going.",
    "The future depends on what you do today.",
    "Dream it. Wish it. Do it."
  ],
  life: [
    "In the middle of every difficulty lies opportunity.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Keep smiling, because life is a beautiful thing."
  ],
  love: [
    "Love all, trust a few, do wrong to none.",
    "Where there is love there is life.",
    "Love is composed of a single soul inhabiting two bodies."
  ],
  success: [
    "Success is not the key to happiness. Happiness is the key to success.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't be afraid to give up the good to go for the great."
  ],
  happiness: [
    "Happiness is not something ready made. It comes from your own actions.",
    "For every minute you are angry you lose sixty seconds of happiness.",
    "Happiness depends upon ourselves."
  ],
};

export default function Home() {
  const [topic, setTopic] = useState('');
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const key = topic.toLowerCase().trim();
    if (quotesDB[key]) {
      setQuotes(quotesDB[key]);
    } else {
      setQuotes(["No quotes found for this topic. Try another one."]);
    }
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-purple-100 px-6 py-12">
    <div className="bg-purple-100 shadow-lg rounded-3xl p-10 max-w-lg w-full">
      <h1 className="text-4xl font-extrabold text-purple-900 text-center mb-8 tracking-wide">
  Quote Generator
</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Select onValueChange={(value) => setTopic(value)}>
          <SelectTrigger className="w-full bg-purple-50 text-purple-700 border border-purple-300 focus:ring-purple-400">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent className="bg-purple-50 text-purple-700 border border-purple-300">
            {Object.keys(quotesDB).map((key) => (
              <SelectItem key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

       <Button
  type="submit"
  className="w-full bg-purple-900 hover:bg-purple-500 text-white font-semibold shadow-md transition-colors"
>
  Show Quotes
</Button>
      </form>

      {quotes.length > 0 && (
        <div className="mt-10 space-y-5">
          {quotes.map((quote, idx) => (
            <div
              key={idx}
              className="bg-purple-100 border border-purple-300 rounded-xl p-6 shadow"
            >
              <p className="italic text-purple-800 text-lg tracking-wide">“{quote}”</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

}
