export async function getGithubRepos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch repos')
    }

    const repos = await response.json()
    return repos
  } catch (error) {
    console.error('GitHub API error:', error)
    return []
  }
}

export function filterProjects(repos: any[], projectNames: string[]) {
  return repos.filter((repo) =>
    projectNames.some((name) =>
      repo.name.toLowerCase().replace(/-/g, ' ').includes(name.toLowerCase()) ||
      name.toLowerCase().replace(/-/g, ' ').includes(repo.name.toLowerCase())
    )
  )
}
