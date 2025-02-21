"use client";
import { useState, useEffect } from "react";
import { db, auth } from "@/app/firebase/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";

export default function QuoteList() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const user = auth.currentUser;

  useEffect(() => {
    const q = query(collection(db, "quotes"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setQuotes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmation = window.confirm("Rostdan ham o‘chirmoqchimisiz?");
    if (!confirmation) return;

    try {
      await deleteDoc(doc(db, "quotes", id));
    } catch (err: any) {
      alert("Xatolik yuz berdi: " + err.message);
    }
  };

  const handleEdit = (id: string, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdate = async (id: string) => {
    if (!editText.trim()) {
      alert("Iqtibos bo‘sh bo‘lishi mumkin emas!");
      return;
    }

    try {
      await updateDoc(doc(db, "quotes", id), { text: editText });
      setEditId(null);
      setEditText("");
    } catch (err: any) {
      alert("Xatolik yuz berdi: " + err.message);
    }
  };

  return (
    <div className="mt-6 space-y-6">
      {quotes.map((quote) => (
        <div
          key={quote.id}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
        >
          {editId === quote.id ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full p-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleUpdate(quote.id)}
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                >
                  <FaCheck /> Saqlash
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="w-full bg-gray-400 text-white p-3 rounded-lg hover:bg-gray-500 transition"
                >
                  <HiMiniXMark /> Bekor qilish
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-xl font-semibold">"{quote.text}"</p>
              <p className="text-sm text-gray-600 mt-1">— {quote.author}</p>

              {user && user.email === quote.author && (
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleEdit(quote.id, quote.text)}
                    className="bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 transition"
                  >
                    <MdEdit /> Tahrirlash
                  </button>
                  <button
                    onClick={() => handleDelete(quote.id)}
                    className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
                  >
                    <MdDelete /> O‘chirish
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
