"use client";
import { useState } from "react";
import { auth } from "@/app/firebase/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Tizimga kirganidan keyin bosh sahifaga yo‘naltiramiz
    } catch (err: any) {
      if (err.code === "auth/invalid-credential") {
        setError("❌ Email yoki parol noto‘g‘ri!");
      } else {
        setError("❌ Xatolik yuz berdi: " + err.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/"); // Google orqali tizimga kirganidan keyin bosh sahifaga yo‘naltiramiz
    } catch (err: any) {
      setError(
        "❌ Google orqali tizimga kirishda xatolik yuz berdi: " + err.message
      );
    }
  };

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      // GitHub orqali tizimga kirish
      await signInWithPopup(auth, provider);
      router.push("/"); // Kirishdan keyin bosh sahifaga yo‘naltirish
    } catch (err: any) {
      console.error("GitHub autentifikatsiyasida xatolik:", err.message);
      setError(
        "❌ GitHub orqali tizimga kirishda xatolik yuz berdi: " + err.message
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold text-center mb-4">🔑 Tizimga kirish</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="📩 Email"
          className="w-full p-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="🔑 Parol"
          className="w-full p-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition"
        >
          ✅ Kirish
        </button>
      </form>

      <div className="flex items-center gap-5 mt-4">
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black p-3 rounded shadow-lg transition flex items-center gap-2"
        >
          <FcGoogle /> Google orqali kirish
        </button>
        <button
          onClick={handleGithubLogin}
          className="w-full bg-white text-black p-3 rounded hover:bg-zinc-600 hover:text-white shadow-lg transition flex items-center gap-2"
        >
          <FaGithub /> GitHub orqali kirish
        </button>
      </div>

      <p className="mt-4 text-sm text-center">
        Hisobingiz yo‘qmi?{" "}
        <a href="/auth/signup" className="text-blue-500 hover:underline">
          Ro‘yxatdan o‘tish
        </a>
      </p>
    </div>
  );
}
