export const isPageTabValid = (match, tabs, history) => {
  if (!tabs.includes(match.params.pageTab)) {
    // Change invalid "tab" part of the link to a valid one
    history.replace([...match.url.split('/').slice(0, 4)].join('/'))
  }
}

export const isProjectValid = (history, projectsNames, currentProjectName) => {
  if (
    projectsNames.length > 0 &&
    !projectsNames.some(project => project === currentProjectName)
  ) {
    history.push('/projects')
  }
}
