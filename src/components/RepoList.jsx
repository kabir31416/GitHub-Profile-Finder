const RepoList = ({ repos }) => {
  return (
    <div className="bg-white mt-4 p-4 rounded shadow">
      <h2 className="font-bold mb-2">Repositories</h2>

      {repos.slice(0, 6).map((repo) => (
        <div
          key={repo.id}
          className="border-b py-2"
        >
          <h3 className="font-semibold">
            {repo.name}
          </h3>

          <p className="text-sm text-gray-600">
            {repo.description}
          </p>

          <a
            href={repo.html_url}
            target="_blank"
            className="text-blue-500 text-sm"
          >
            Open Repo
          </a>
        </div>
      ))}
    </div>
  );
};

export default RepoList;