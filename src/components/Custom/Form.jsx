import React from "react";

const Form = ({ handleCity, handleSearchWeather }) => {
  return (
    <form
      className="flex justify-center text-text pt-10 focus:border-none"
      action=""
      onSubmit={(e) => handleSearchWeather(e)}
    >
      <input
        type="text"
        required="required"
        placeholder="find your place"
        className="p-1 rounded-l  text-black my-4 focus:bg-whiteAplha  "
        onChange={({ target }) => handleCity(target)}
      />
      <input
        type="submit"
        value="Search"
        className="rounded-r my-4 p-1 text-black"
      ></input>
    </form>
  );
};
export default Form;
