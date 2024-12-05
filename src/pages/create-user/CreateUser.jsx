import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/index";

const CreateUser = () => {
  const { user, setUser } = useStateValue();
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  const firstName = useRef("");
  const lastName = useRef("");
  const age = useRef("");
  const email = useRef("");
  const password = useRef("");
  const phone = useRef("");
  const profession = useRef("");

  const location = useLocation();
  const paramsUserId = location.search.split("=")[1];

  useEffect(() => {
    if (paramsUserId) {
      const updatedUser = user.find((item) => item.id === paramsUserId);
      if (updatedUser) {
        firstName.current.value = updatedUser.firstName;
        lastName.current.value = updatedUser.lastName;
        age.current.value = updatedUser.age;
        email.current.value = updatedUser.email;
        password.current.value = updatedUser.password;
        phone.current.value = updatedUser.phone;
        profession.current.value = updatedUser.profession;
        setUpdate(true);
      }
    }
  }, [paramsUserId, user]);

  const registerUser = (event) => {
    event.preventDefault();

    const formUser = {
      id: update ? paramsUserId : uuidv4(),
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
      email: email.current.value,
      password: password.current.value,
      phone: phone.current.value,
      profession: profession.current.value,
    };

    if (update) {
      const updatedUsers = user.map((item) =>
        item.id === paramsUserId ? formUser : item
      );
      setUser(updatedUsers);
    } else {
      setUser([...user, formUser]);
    }

    firstName.current.value = "";
    lastName.current.value = "";
    age.current.value = "";
    email.current.value = "";
    password.current.value = "";
    phone.current.value = "";
    profession.current.value = "";

    navigate("/users");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-green-500 via-teal-400 to-blue-500">
      <form
        className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 relative"
        onSubmit={registerUser}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          {update ? "Yangilash" : "Yangi Foydalanuvchi"}
        </h2>

        <div className="space-y-4">
          {[ 
            { placeholder: "Ism", ref: firstName, type: "text" },
            { placeholder: "Familiya", ref: lastName, type: "text" },
            { placeholder: "Yosh", ref: age, type: "number" },
            { placeholder: "Email", ref: email, type: "email" },
            { placeholder: "Parol", ref: password, type: "password" },
            { placeholder: "Telefon", ref: phone, type: "tel" },
            { placeholder: "Kasb", ref: profession, type: "text" }
          ].map(({ placeholder, ref, type }, index) => (
            <input
              key={index}
              type={type}
              placeholder={placeholder}
              ref={ref}
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          {update ? "Yangilash" : "Qo'shish"}
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
