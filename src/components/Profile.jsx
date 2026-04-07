const Profile = ({ user }) => {
  return (
    <div className="bg-white p-4 mt-4 rounded shadow">
      <div className="flex gap-4 items-center">

        <img
          src={user.avatar_url}
          className="w-24 h-24 rounded-full"
        />

        <div>
          <h2 className="text-xl font-bold">
            {user.name}
          </h2>

          <p>{user.bio}</p>

          <div className="flex gap-4 mt-2 text-sm">
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
            <span>Repos: {user.public_repos}</span>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            className="text-blue-500 text-sm"
          >
            View Profile
          </a>

        </div>
      </div>
    </div>
  );
};

export default Profile;