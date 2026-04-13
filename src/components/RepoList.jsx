const RepoList = ({ repos }) => {
  return (
    <div className="mt-6 grid gap-4">

      {repos.slice(0, 6).map((repo) => (
        <div
          key={repo.id}
          className="backdrop-blur-lg 
        bg-white/70 dark:bg-gray-800/70
        p-4 rounded-xl shadow 
        hover:shadow-xl transition"
        >

          <div className="flex justify-between">
            <h3 className="font-semibold dark:text-white">
              {repo.name}
            </h3>

            <span className="text-sm bg-gray-200 px-2 rounded">
              ⭐ {repo.stargazers_count}
            </span>
          </div>

          <p className="text-sm text-gray-600 
          dark:text-gray-300 mt-2">
            {repo.description}
          </p>

          <a
            href={repo.html_url}
            target="_blank"
            className="text-blue-500 text-sm mt-2 inline-block"
          >
            Open Repo →
          </a>

        </div>
      ))}

    </div>
  );
};

export default RepoList;