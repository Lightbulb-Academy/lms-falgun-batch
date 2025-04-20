import { FormEvent, useState } from "react";

export default function UserInfo() {
  const [submittedUserInfo, setSubmittedUserInfo] = useState({
    name: "John Doe",
    address: "asdada, adsada",
    phone: "887988798",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // prevents page reload on form submit
    console.log(e);
    setSubmittedUserInfo({
      name: e.target["name"].value,
      address: e.target["address"].value,
      phone: e.target["phone"].value,
    });
    // const formData = new FormData(e.target)
    //
    // API call
  };

  // Events
  // - onChange
  // - onSubmit
  // - onClick
  // - onKeyPress

  // next class: useEffect

  return (
    <div className="flex flex-col gap-8">
      <div className="shadow-md text-left w-[300px] p-4">
        <h1 className="text-lg font-bold">{submittedUserInfo.name}</h1>
        <p>Address: {submittedUserInfo.address}</p>
        <p>Phone: {submittedUserInfo.phone}</p>
      </div>
      <form className="flex flex-col items-start gap-2" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" className="border px-2 w-full" />
        <label htmlFor="address">Address: </label>
        <input id="address" type="text" className="border px-2 w-full" />
        <label htmlFor="phone">Phone: </label>
        <input id="phone" type="text" className="border px-2 w-full" />
        <button
          type="submit"
          className="w-full bg-amber-600 text-white py-1 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
