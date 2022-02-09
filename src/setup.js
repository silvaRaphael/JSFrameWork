import { appName, appLogo, appDescription, appAuthor } from './appConfig.js'

export default function Configs() {

  let siteIcon = document.createElement("link")
<<<<<<< HEAD
  siteIcon.href = appLogo || ""
=======
  siteIcon.href = appLogo
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1
  siteIcon.rel = "shortcut icon"
  document.head.append(siteIcon)

  let siteDescription = document.createElement("meta")
  siteDescription.name = "description"
<<<<<<< HEAD
  siteDescription.content = appDescription || ""
=======
  siteDescription.content = appDescription
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1
  document.head.append(siteDescription)
  
  let siteAuthor = document.createElement("meta")
  siteAuthor.name = "author"
<<<<<<< HEAD
  siteAuthor.content = appAuthor || ""
  document.head.append(siteAuthor)
  
  document.title = appName || ""
=======
  siteAuthor.content = appAuthor
  document.head.append(siteAuthor)
  
  document.title = appName
>>>>>>> 3520ccf15fbfcffe56c877a21e081665854b2bf1

}
Configs()