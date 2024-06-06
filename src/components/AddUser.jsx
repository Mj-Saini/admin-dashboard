import React, { useState } from "react";
import { addNewUserData } from "./common/Helper";
import { SaveIcon } from "./common/Icon";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    city: "",
    state: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://crud-django-c7ri.onrender.com/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        phone_no: userData.phone_no,
        city: userData.city,
        state: userData.state,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Response:", json);

        setUserData({
          first_name: "",
          last_name: "",
          email: "",
          phone_no: "",
          city: "",
          state: "",
        });
        navigate("/users");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap"
        action=""
      >
        <div className="flex justify-between items-center mt-5">
          <h2 className="font-medium text-[30px] text-black">Dashboard</h2>
          <button
            type="submit"
            className="py-3 px-6 border border-[#FFAE00] rounded-[10px] flex gap-2 bg-[#FFAE00] hover:bg-transparent duration-300"
          >
            <SaveIcon />
            Save
          </button>
        </div>
        <div className="bg-white py-5 shadow-2xl px-5 mt-5">
          {" "}
          <h2 className="font-normal text-lg text-black capitalize">
            Basic Information
          </h2>
          <div className=" flex flex-wrap">
            {addNewUserData.map((items, index) => (
              <div
                key={index}
                className="flex flex-col mt-5 w-full   sm:w-1/3 lg:w-1/4 px-3 gap-2"
              >
                {console.log(items, "items")}
                <label
                  htmlFor={items.name}
                  className="font-normal text-sm text-balck capitalize"
                >
                  {items.label}
                </label>
                <input
                  required
                  className="px-2 border-[.5px] text-sm font-normal border-black/30 text-black outline-none py-2.5"
                  onChange={onChange}
                  type="text"
                  placeholder={items.placeholder}
                  value={userData[items.name] || ""}
                  name={items.name}
                  id={items.name}
                />
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
