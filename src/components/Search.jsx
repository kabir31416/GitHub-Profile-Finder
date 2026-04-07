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
        className="border p-2 w-full rounded"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className="bg-black text-white px-4 rounded">
        Search
      </button>
    </form>
  );
};

export default Search;