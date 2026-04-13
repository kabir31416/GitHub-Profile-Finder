const Profile = ({ user }) => {
  return (
    <div className="backdrop-blur-lg bg-white/70 
dark:bg-gray-800/70 
border border-white/20
mt-6 p-6 rounded-xl shadow-lg">

      <div className="flex items-center gap-6">

        <img
          src={user.avatar_url}
          className="w-28 h-28 rounded-full border"
        />

        <div>
          <h2 className="text-2xl font-bold dark:text-white">
            {user.name || user.login}
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            {user.bio}
          </p>

          <div className="flex gap-4 mt-3 text-sm">
            <span className="bg-gray-200 px-2 py-1 rounded">
              👥 {user.followers}
            </span>

            <span className="bg-gray-200 px-2 py-1 rounded">
              Following {user.following}
            </span>

            <span className="bg-gray-200 px-2 py-1 rounded">
              Repos {user.public_repos}
            </span>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            className="inline-block mt-3 
            text-blue-500"
          >
            Visit Profile →
          </a>

        </div>
      </div>

    </div>
  );
};

export default Profile;