import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Input } from '@preaction/inputs'
import {
  FaDev,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa'

const icons = {
  dev: FaDev,
  facebook: FaFacebookSquare,
  github: FaGithubSquare,
  instagram: FaInstagramSquare,
  linkedin: FaLinkedin,
  twitter: FaTwitterSquare,
}

const labels = {
  dev: 'DEV.to',
  facebook: 'Facebook',
  github: 'GitHub',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
}

class SocialBadge extends React.Component {
  render() {
    const badges = []
    for (let key of Object.keys(icons)) {
      if (this.props[key]) {
        badges.push({
          key,
          url: this.props[key],
          Icon: icons[key],
          label: labels[key],
        })
      }
    }
    return (
      <div className='social-badge'>
        <div style={{ display: 'flex' }}>
          {badges.map((badge) => {
            const { key, url, Icon, label } = badge
            return (
              <a
                className={`${key}-badge`}
                href={url}
                key={key}
                rel='noreferrer noopener'
                style={{ display: 'block' }}
                target='_blank'
              >
                <Icon
                  aria-label={label}
                  style={{
                    width: `${this.props.size || 4}em`,
                    height: `${this.props.size || 4}em`,
                  }}
                />
              </a>
            )
          })}
        </div>
        {this.props.debug ? (
          <div>
            <p>Here are the props I received:</p>
            <pre>{JSON.stringify(this.props, undefined, 4)}</pre>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

SocialBadge.propTypes = {
  debug: PropTypes.bool,
  dev: PropTypes.string,
  facebook: PropTypes.string,
  github: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  preaction: PropTypes.object.isRequired,
  size: PropTypes.number,
  twitter: PropTypes.string,
}

SocialBadge.extensionType = 'block'
SocialBadge.label = 'Social Badges'
SocialBadge.defaultProps = {
  dev: '',
  facebook: '',
  github: '',
  instagram: '',
  linkedin: '',
  twitter: '',
  debug: false,
}

class SocialBadgeSettings extends React.Component {
  render() {
    return (
      <div>
        <h6>Social Badge Settings</h6>
        <hr className='mb-3' />
        <Input
          type='url'
          label='DEV URL'
          value={this.props.propsData.dev}
          valueHandler={this.props.getPropsDataValueHandler('dev')}
        />
        <Input
          type='url'
          label='Facebook URL'
          value={this.props.propsData.facebook}
          valueHandler={this.props.getPropsDataValueHandler('facebook')}
        />
        <Input
          type='url'
          label='GitHub URL'
          value={this.props.propsData.github}
          valueHandler={this.props.getPropsDataValueHandler('github')}
        />
        <Input
          type='url'
          label='Instagram URL'
          value={this.props.propsData.instagram}
          valueHandler={this.props.getPropsDataValueHandler('instagram')}
        />
        <Input
          type='url'
          label='LinkedIn URL'
          value={this.props.propsData.linkedin}
          valueHandler={this.props.getPropsDataValueHandler('linkedin')}
        />
        <Input
          type='url'
          label='Twitter URL'
          value={this.props.propsData.twitter}
          valueHandler={this.props.getPropsDataValueHandler('twitter')}
        />
        <Checkbox
          label='Debug'
          checked={!!this.props.propsData.debug}
          valueHandler={this.props.getPropsDataValueHandler('debug')}
        />
      </div>
    )
  }
}

SocialBadgeSettings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

SocialBadge.Settings = SocialBadgeSettings

export { SocialBadge }
