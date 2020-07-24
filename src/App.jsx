import SocialBadgeComponent from './SocialBadgeComponent.jsx'
import React from 'react'

const mockPreaction = {
  appRoot: '',
  block: { settings: {} },
  editable: false,
  settings: { siteTitle: 'Site Title' },
  page: { settings: {} },
  navigate: (path) => {
    console.debug(`navigate('${path}')`)
  },
}

function App() {
  return (
    <div className='App'>
      <main>
        <SocialBadgeComponent
          dev='https://dev.to/duhdugg'
          github='https://github.com/duhdugg'
          linkedin='https://www.linkedin.com/in/duhdugg'
          preaction={mockPreaction}
          twitter='https://twitter.com/_duhdugg'
        />
      </main>
    </div>
  )
}

export default App
