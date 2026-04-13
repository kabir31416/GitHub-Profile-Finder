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
    <div>
      <div className="min-h-screen relative overflow-hidden
            bg-linear-to-br 
        from-slate-100 via-blue-50 to-indigo-100
        dark:from-gray-900 dark:via-gray-800 dark:to-black">

        <div className="max-w-4xl mx-auto p-6">

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold dark:text-white">
              GitHub Profile Finder
            </h1>

          </div>

          <Search fetchUser={fetchUser} />

          {loading && (
            <p className="text-center mt-6 dark:text-white">
              Loading profile...
            </p>
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
    </div>
  );
}

export default App;