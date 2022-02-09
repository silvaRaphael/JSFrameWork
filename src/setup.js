import { appName, appLogo, appDescription, appAuthor } from './appConfig.js'

export default function Configs() {

  let siteIcon = document.createElement("link")
  siteIcon.href = appLogo || ""
  siteIcon.href = appLogo
  siteIcon.rel = "shortcut icon"
  document.head.append(siteIcon)

  let siteDescription = document.createElement("meta")
  siteDescription.name = "description"
  siteDescription.content = appDescription || ""
  siteDescription.content = appDescription
  document.head.append(siteDescription)
  
  let siteAuthor = document.createElement("meta")
  siteAuthor.name = "author"
  siteAuthor.content = appAuthor || ""
  document.head.append(siteAuthor)
  
  document.title = appName || ""
}
Configs()