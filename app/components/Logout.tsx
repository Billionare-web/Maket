"use client";
import { auth } from "@/app/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/auth/login"); // Chiqishdan keyin Login sahifasiga yo‘naltiramiz
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded"
    >
      Chiqish
    </button>
  );
}
