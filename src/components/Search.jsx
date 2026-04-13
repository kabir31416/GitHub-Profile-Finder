import { useState } from "react";

const Search = ({ fetchUser }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(username);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="w-full p-3 rounded-lg border shadow-sm 
        dark:bg-gray-800 dark:text-white"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        className="bg-blue-600 hover:bg-blue-700 
        text-white px-5 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default Search;