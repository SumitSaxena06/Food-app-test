'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUserEmail(user.email);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserEmail(null);
    window.location.reload(); // Refresh to update UI
  };

  return (
    <header className="w-full bg-violet-500 py-4 shadow">
      <div className="relative flex items-center justify-center">
        {/* Left link */}
        <Link href="/" className="absolute left-4 text-white text-xl font-medium">
          Home
        </Link>

        {/* Title */}
        <h1 className="text-white text-2xl font-bold">Hungry Birds</h1>

        {/* Right section */}
        <div className="absolute right-4 flex items-center gap-4">
          {userEmail ? (
            <>
              <span className="text-white text-sm font-medium">Hi, {userEmail}</span>
              <button
                onClick={handleLogout}
                className="bg-white text-violet-600 px-3 py-1 rounded text-sm hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white text-xl font-medium">
                Login
              </Link>
              <Link href="/register" className="text-white text-xl font-medium">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
