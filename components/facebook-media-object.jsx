import React, { PropTypes } from 'react'
import { styled } from 'styletron-react'

const MediaObjectContainer = styled('div', {
  boxShadow: '0px 1px 6px #888888',
  fontFamily: 'sans-serif',
  paddingTop: '.5rem',
  paddingBottom: '.5rem',
  overflow: 'hidden',
})

const MediaObjectHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '1rem',
  marginRight: '1rem',
})


const MediaObjectHeaderAvatar = styled('img', {
  height: "2.5rem",
  marginBottom: '.5rem',
  marginRight: '1rem',
  marginTop: '.5rem',
  width: "2.5rem",
})

const MediaObjectHeaderData = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginBottom: '.5rem',
  marginTop: '.5rem',
  flexGrow: '2'
})

const MediaObjectHeaderDataName = styled('span', {
  alignSelf: 'flex-start',
  fontWeight: '900',
  lineHeight: '1',
  textTransform: 'uppercase',
})

const MediaObjectHeaderDataTimestamp = styled('span', {
  color: '#888888',
  fontSize: '.5rem',
  fontWeight: '900',
  textTransform: 'uppercase',
})

const MediaObjectActionButton = styled('span', {
  // borderStyle: 'solid',
  // borderWidth: '1px',
  marginTop: '1rem',
  marginLeft: '1rem',
  marginBottom: '1rem',
  width: '1.5rem',
  height: '1.5rem',
})


const FacebookMediaObject = (props) => {
  return (
    <MediaObjectContainer>
        <MediaObjectHeader>
          {props.avatar && <MediaObjectHeaderAvatar src={props.avatar} alt="facebook avatar"/>}
          <MediaObjectHeaderData>
            <MediaObjectHeaderDataName>{props.name}</MediaObjectHeaderDataName>
            <MediaObjectHeaderDataTimestamp>{props.timestamp}</MediaObjectHeaderDataTimestamp>
          </MediaObjectHeaderData>
          <MediaObjectActionButton><i>{props.icon}</i></MediaObjectActionButton>
        </MediaObjectHeader>
    </MediaObjectContainer>
  )
}

FacebookMediaObject.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
}

export default FacebookMediaObject
