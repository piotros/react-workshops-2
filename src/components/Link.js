import React from 'react'

const Link = props => {
  const {path, children} = props

  const handleClick = event => {
    event.preventDefault()

    window.history.pushState({}, '', path)

    const urlChangeEvent = new Event('urlchange')
    window.dispatchEvent(urlChangeEvent)
  }

  return (
    <a href={path} onClick={handleClick}>{children}</a>
  )
}

export default Link