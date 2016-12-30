import React, { PropTypes } from 'react'
import { styled } from 'styletron-react'

const MediaObjectContainer = styled ('div', {
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
  flexGrow: '2',
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

const MediaObjectPost = styled('div', {
  marginBottom: '.5rem',
  marginLeft: '1rem',
  marginRight: '1rem',
  marginTop: '.5rem',
  // maxHeight: '4rem',
  // lineHeight: '1.25rem',
  // overflow: 'hidden',
  textAlign: 'justify',
  textOverflow: 'ellipsis',
  whiteSpace: 'no-wrap',
})

const MediaObjectPostMedia = styled('div', {
  marginBottom: '.5rem',
  marginTop: '.5rem',
})

const MediaObjectCounts = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '.5rem',
  marginTop: '.5rem',
  paddingBottom: '.25rem',
  paddingLeft: '.5rem',
  paddingTop: '.25rem',
})

const MediaObjectIcon = styled('span', (props) => ({
  borderStyle: 'solid',
  borderWidth: '1px',
  height: props.height,
  width: props.width,
}))

const PullLeft = styled('div', {
  marginRight: '.5rem',
  marginLeft: '.5rem',
})

const PullRight = styled('div', {
  marginLeft: 'auto',
  marginRight: '.5rem',
})

const MediaObjectCountsCounters = styled('span', {
  color: '#888888',
  fontSize: '.75rem',
  fontWeight: '500',
  marginRight: '.25rem',
  marginLeft: '.25rem',
})

const countFormatter = (count) => {
  return count > 1000000 ? count/1000000 + "M" : count > 1000 ? count/1000 + "K" : count
}

const FacebookMediaObject = ({avatar, name, timestamp, icon, post, children, reactionsCount, commentsCount, sharesCount}) => {

  return (
    <MediaObjectContainer>

      { /* *** *** MO Header *** *** */}
      <MediaObjectHeader>
        {avatar && <MediaObjectHeaderAvatar src={avatar} alt="facebook avatar"/>}
        <MediaObjectHeaderData>
          <MediaObjectHeaderDataName>{name}</MediaObjectHeaderDataName>
          <MediaObjectHeaderDataTimestamp>{timestamp}</MediaObjectHeaderDataTimestamp>
        </MediaObjectHeaderData>
        <MediaObjectActionButton><i>{icon}</i></MediaObjectActionButton>
      </MediaObjectHeader>
      { /* <<= =<< MO Header >>= ==> */ }

      { /* *** *** MO Post Content *** *** */}
      {post && <MediaObjectPost>{post}</MediaObjectPost>}
      {children && <MediaObjectPostMedia>
        {children}
      </MediaObjectPostMedia>}
      { /* <<= =<< MO Post Content >>= ==> */ }

      { /* *** *** MO Counters *** *** */}
      <MediaObjectCounts>
        <PullLeft>
          <MediaObjectIcon height="1rem" width="1rem"/>
          <MediaObjectCountsCounters>{countFormatter(reactionsCount)}</MediaObjectCountsCounters>
        </PullLeft>
        <PullRight>
          <MediaObjectCountsCounters>{countFormatter(commentsCount)} Comments</MediaObjectCountsCounters>
          <MediaObjectCountsCounters>{countFormatter(sharesCount)} Shares</MediaObjectCountsCounters>
        </PullRight>
      </MediaObjectCounts>
      { /* <<= =<< MO Counters >>= ==> */ }


    </MediaObjectContainer>
  )
}

FacebookMediaObject.propTypes = {
  avatar: PropTypes.string,
  children: PropTypes.element,
  commentsCount: PropTypes.number.isRequired,
  sharesCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  post: PropTypes.string,
  timestamp: PropTypes.string.isRequired,
  reactionsCount: PropTypes.number.isRequired,
}

FacebookMediaObject.defaultProps = {
  commentsCount: 0,
  sharesCount: 0,
  reactionsCount: 0,
}

export default FacebookMediaObject
