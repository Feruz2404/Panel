import React from "react";
import { useStateValue } from "../../context/index";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { user, setUser } = useStateValue();
  const navigate = useNavigate();

  const editUser = (userId) => {
    navigate(`/create-user?id=${userId}`);
  };

  const deleteUser = (userId) => {
    if (window.confirm("Foydalanuvchini o'chirishga ishonchingiz komilmi?")) {
      const updatedUsers = user.filter((item) => item.id !== userId);
      setUser(updatedUsers);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 flex items-center justify-center">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Foydalanuvchilar Ro'yxati
        </h2>

        {user?.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">
            Hozircha foydalanuvchi yo'q.{" "}
            <span
              onClick={() => navigate("/create-user")}
              className="text-blue-600 font-semibold underline cursor-pointer"
            >
              Yangi foydalanuvchi qo'shing.
            </span>
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {user?.map((item) => (
              <div
                key={item.id}
                className="relative bg-white shadow-2xl rounded-lg p-6 mt-5 flex flex-col items-center hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <div className="w-24 h-24 bg-yellow-500 rounded-full mb-4 shadow-lg"></div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {item.firstName} {item.lastName}
                </h3>
                <p className="text-gray-600">{item.profession}</p>
                <div className="mt-6 space-x-4">
                  <button
                    onClick={() => editUser(item.id)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                  >
                    Tahrirlash
                  </button>
                  <button
                    onClick={() => deleteUser(item.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                  >
                    O'chirish
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
