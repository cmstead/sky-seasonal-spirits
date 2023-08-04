export default function MarkdownList ({ spiritList }) {
  function buildSeasonChecklist (spirits) {
    return Object.keys(spirits)
      .map(spiritName => `- [${spirits[spiritName] ? 'X' : ' '}] ${spiritName}`)
      .join('\n')
  }

  function buildMarkdownList (spiritList) {
    return Object.keys(spiritList)
      .map(
        seasonName =>
          `##${seasonName}##\n${buildSeasonChecklist(spiritList[seasonName])}`
      )
      .join('\n\n')
  }

  return <textarea id="markdown-list" value={buildMarkdownList(spiritList)}></textarea>
}
