import React, { useState } from "react";

function UserSearch() {
  const [searchText, setSearchText] = useState("hiteshchoudhary");
  const [result, setResult] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    try {
      // Fetch user details
      const res = await fetch(`https://api.github.com/users/${searchText}`);
      const userData = await res.json();

      if (userData.message === "Not Found") {
        setResult(null);
        setRepos([]);
        alert("User not found!");
        return;
      }

      const formattedData = {
        name: userData.name,
        bio: userData.bio,
        profile: userData.avatar_url,
        username: userData.login
      };
      setResult(formattedData);

      // Fetch user repositories
      const repoRes = await fetch(userData.repos_url);
      const repoData = await repoRes.json();
      setRepos(repoData);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <main>
      <h1>Github User Search</h1>
      <input
        type="text"
        value={searchText}
        placeholder="Github Username"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {result && (
        <section>
          <img
            src={result.profile}
            width={200}
            height={200}
            alt="Github_profile"
          />
          <h3>{result.name}</h3>
          <p>
            <i>{result.username}</i>
          </p>
          <p>{result.bio}</p>

          <h4>Repositories:</h4>
          {repos.length > 0 ? (
            <ul>
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No public repositories found.</p>
          )}
        </section>
      )}
    </main>
  );
}

export default UserSearch;
