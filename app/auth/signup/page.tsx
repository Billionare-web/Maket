"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/app/firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !name) {
      setError("Barcha maydonlarni to‘ldiring!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        createdAt: new Date(),
      });

      router.push("/auth/login");
    } catch (err: any) {
      setError("Xatolik yuz berdi: " + err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Ro‘yxatdan o‘tish</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Ismingiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white w-full p-2 rounded"
          >
            Ro‘yxatdan o‘tish
          </button>
        </form>
        <p className="mt-4 text-sm">
          Hisobingiz bormi?{" "}
          <a href="/auth/login" className="text-blue-500">
            Tizimga kirish
          </a>
        </p>
      </div>
    </div>
  );
}
