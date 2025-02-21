"use client";
import AddQuote from "@/app/components/AddQuote";
import QuoteList from "@/app/components/QuoteList";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">
        ✨ Motivatsion Iqtiboslar ✨
      </h1>

      <AddQuote />
      <QuoteList />
    </div>
  );
}
