import React from 'react'
import PropTypes from 'prop-types'
import {
  FaDev,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa'

const icons = {
  dev: FaDev,
  facebook: FaFacebookSquare,
  github: FaGithubSquare,
  instagram: FaInstagram,
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

const Component = (props) => {
  const badges = []
  for (let key of Object.keys(icons)) {
    if (props[key]) {
      badges.push({
        key,
        url: props[key],
        Icon: icons[key],
        label: labels[key],
      })
    }
  }
  return (
    <div className='social-badge-component'>
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
                  width: `${props.size || 4}em`,
                  height: `${props.size || 4}em`,
                }}
              />
            </a>
          )
        })}
      </div>
      {props.debug ? (
        <div>
          <p>Here are the props I received:</p>
          <pre>{JSON.stringify(props, undefined, 4)}</pre>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

Component.propTypes = {
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

export default Component
