import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-yellow-400 via-red-400 to-pink-500 text-white flex items-center justify-center">
      <div className="relative w-full max-w-4xl bg-gray-800/70 p-8 rounded-2xl shadow-xl">
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-teal-500 rounded-full blur-xl opacity-50"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500 rounded-full blur-xl opacity-50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-pink-200">
            Foydalanuvchilar Tizimiga Xush Kelibsiz!
          </h1>
          <p className="text-lg mb-6 text-gray-200">
            Biz bilan foydalanuvchilarni boshqarish oson va qulay.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="/create-user"
              className="px-6 py-3 bg-teal-600 text-gray-800 font-semibold rounded-xl shadow-lg hover:bg-teal-500 hover:scale-105 transition-all"
            >
              Yangi Foydalanuvchi
            </a>
            <a
              href="/users"
              className="px-6 py-3 bg-gray-700 text-gray-200 font-semibold rounded-xl shadow-lg hover:bg-gray-600 hover:scale-105 transition-all"
            >
              Foydalanuvchilarni Ko'rish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
