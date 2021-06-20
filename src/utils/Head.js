/* eslint-disable react/prop-types */
import React from 'react'

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Cao sem casa | ' + props.title
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '')
  }, [props])
  return <></>
}

export default Head
