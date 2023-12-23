import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
<CiSearch />;
import { Context } from "../App";

const Search = () => {
  const { user,handleUser, searchUser } = useContext(Context);
  return (
    <div className="search flex justify-between items center gap-4 p-2">
      <input
        type="text"
        name="user"
        id="user"
        onChange={handleUser}
        className="w-full rounded-lg"
        placeholder="Search GitHub username..."

      />
      <button className="bg-[#0079FF] text-white" type="submit" onClick={async()=> await searchUser(user)}>
        Search
      </button>
    </div>
  );
};

export default Search;
