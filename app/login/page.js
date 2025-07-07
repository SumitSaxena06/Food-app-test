'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebaseconfig';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    localStorage.setItem('user', JSON.stringify(user));
    router.push('/');
    setTimeout(() => window.location.reload(), 100); // 👈 Fix
  } catch (error) {
    alert('Login failed: ' + error.message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 mb-3 border rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 mb-4 border rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-violet-500 text-white py-2 rounded hover:bg-violet-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
