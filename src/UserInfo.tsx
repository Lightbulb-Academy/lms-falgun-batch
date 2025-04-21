import { FormEvent, useEffect, useState } from "react";

export default function UserInfo() {
  const [submittedUserInfo, setSubmittedUserInfo] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault(); // prevents page reload on form submit
    const formData = new FormData(e.currentTarget);
    const formValues = JSON.stringify(Object.fromEntries(formData.entries())); // Convert FormData to object
    setSubmittedUserInfo(JSON.parse(formValues));
    setLoading(false);
    // API call with the processed form data
  };

  // to run code automatically based on dependency
  useEffect(() => {
    // runs this code once on page mount
    console.log("page mounted");
  }, []); // since dependency array is empty

  useEffect(() => {
    console.log("use effect call");
    // setSubmittedUserInfo({
    //   name: "John Doe",
    //   address: "asdada, adsada",
    //   phone: "887988798",
    // });
  }, [submittedUserInfo]); // runs useEffect every time the value changes

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
        <input
          id="name"
          name="name"
          type="text"
          className="border px-2 w-full border-green-200"
        />
        <label htmlFor="address">Address: </label>
        <input
          id="address"
          name="address"
          type="text"
          className="border px-2 w-full"
        />
        <label htmlFor="phone">Phone: </label>
        <input
          id="phone"
          name="phone"
          type="phone"
          className="border px-2 w-full"
        />
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

// component
// props
// local state
// hooks - useEffect, useState
