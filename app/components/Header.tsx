"use client";
import { useState, useEffect } from "react";
import { auth } from "@/app/firebase/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

export default function Header() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-800 to-white text-white p-5 sm:p-6 flex justify-between items-center rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold sm:text-3xl text-white">
        Motivatsion Iqtiboslar
      </h1>
      <nav className="flex items-center space-x-6">
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="font-medium text-white">{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-gray-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition flex items-center gap-2"
            >
              <CiLogout size={18} /> Chiqish
            </button>
          </div>
        ) : (
          <>
            <Link
              href="/auth/login"
              className="flex gap-2 items-center bg-gray-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition"
            >
              <CiLogin size={18} /> Tizimga kirish
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
