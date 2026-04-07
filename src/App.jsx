import { useState } from "react";
import Search from "./components/Search";
import Profile from "./components/Profile";
import RepoList from "./components/RepoList";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async (username) => {
    try {
      setLoading(true);
      setError("");

      const userRes = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!userRes.ok) throw new Error("User not found");

      const userData = await userRes.json();

      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated`
      );

      const repoData = await repoRes.json();

      setUser(userData);
      setRepos(repoData);

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-4 text-center">
          GitHub Profile Finder
        </h1>

        <Search fetchUser={fetchUser} />

        {loading && (
          <p className="text-center mt-4">Loading...</p>
        )}

        {error && (
          <p className="text-red-500 text-center mt-4">
            {error}
          </p>
        )}

        {user && <Profile user={user} />}
        {repos.length > 0 && <RepoList repos={repos} />}

      </div>
    </div>
  );
}

export default App;