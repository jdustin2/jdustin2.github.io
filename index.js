const projects = document.querySelector("#projects");

results = fetch("https://api.github.com/users/jdustin2/repos", {
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((body) => body.json())
  .then((results) => {
    results.forEach((repo) => {
      projects.innerHTML +=
        `<br/><div class="githubProject"><a href='${repo.html_url}' target=blank><h6>${repo.name}</h6></a>` +
        repo.description +
        "<br/>" +
        new Date(repo.created_at).toDateString() +
        "</div>";
    });
  });

  