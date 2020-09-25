import { SocialBadge } from './SocialBadge.jsx'
import { Boilerplate, Card } from '@preaction/bootstrap-clips'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const propsData = {
  dev: 'https://dev.to/duhdugg',
  facebook: 'about:blank',
  github: 'https://github.com/duhdugg',
  instagram: 'about:blank',
  linkedin: 'https://www.linkedin.com/in/duhdugg',
  twitter: 'https://twitter.com/_duhdugg',
}

const mockPreaction = {
  appRoot: '',
  block: {
    blockType: 'ext',
    settings: {
      header: 'Component View',
      extKey: 'SocialBadge',
      propsData,
    },
  },
  editable: false,
  settings: { siteTitle: 'Preaction CMS Extension Testing' },
  page: { settings: {} },
  navigate: (path) => {
    console.debug(`navigate('${path}')`)
  },
}

class MockCMS extends React.Component {
  constructor(props) {
    super(props)
    this.state = { propsData, mockPreaction }
  }

  getPropsDataValueHandler(key) {
    return (value) => {
      this.setState((state) => {
        const propsData = state.propsData
        propsData[key] = value
        state.propsData = propsData
        return state
      })
    }
  }

  render() {
    // this emulates how the component is rendered in Preaction CMS
    return (
      <div className='App'>
        <Boilerplate>
          <main className='mt-3 mb-3'>
            <Card
              header={mockPreaction.block.settings.header}
              headerTheme='blue'
            >
              <SocialBadge preaction={mockPreaction} {...propsData} />
            </Card>
          </main>
          <footer>
            <Card header='Settings View' headerTheme='dark'>
              <SocialBadge.Settings
                propsData={propsData}
                getPropsDataValueHandler={this.getPropsDataValueHandler.bind(
                  this
                )}
              />
            </Card>
          </footer>
        </Boilerplate>
      </div>
    )
  }
}

export default MockCMS
