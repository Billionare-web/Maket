"use client";
import { useState } from "react";
import { db, auth } from "@/app/firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { IoMdAdd } from "react-icons/io";

export default function AddQuote() {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quote.trim()) {
      setError("Iltimos, iqtibos kiriting!");
      return;
    }
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) {
        setError("Tizimga kirganingizga ishonch hosil qiling!");
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "quotes"), {
        text: quote,
        author: user.email,
        createdAt: serverTimestamp(),
      });

      setQuote("");
      setError("");
    } catch (err: any) {
      setError("Xatolik yuz berdi: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        📝 Yangi iqtibos qo‘shish
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          placeholder="Iqtibosingizni kiriting..."
          className="w-full p-3 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <span>Yuklanmoqda...</span>
          ) : (
            <>
              <IoMdAdd size={22} className="mr-2" />
              Qo‘shish
            </>
          )}
        </button>
      </form>
    </div>
  );
}
