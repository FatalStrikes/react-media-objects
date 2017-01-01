
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import faker from 'faker'

import FacebookMediaObject from '../components/facebook-media-object'

import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
const styletron = new Styletron([styleSheet]);

const avatar = "http://loremflickr.com/40/40/person"
const name = faker.name.findName()
const date = '3hrs ago'
const media = "http://loremflickr.com/800/600"

storiesOf('Facebook Media Object', module)
  .add('with header no image', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        name={name}
        timestamp={date}
        />
    </StyletronProvider>
  ))
  .add('with header no content', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar={avatar}
        name={name}
        timestamp={date}
        />
    </StyletronProvider>
  ))
  .add('with header and content no media', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar={avatar}
        name={name}
        timestamp={date}
        post="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
    </StyletronProvider>
  ))
  .add('with header and content and media', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar={avatar}
        name={name}
        timestamp={date}
        post="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        >
        <img src={media} width="100%"/>
    </FacebookMediaObject>
    </StyletronProvider>
  ))
  .add('with header and media no content', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar={avatar}
        name={name}
        timestamp={date}        >
        <img src={media} width="100%"/>
    </FacebookMediaObject>
    </StyletronProvider>
  ))
  .add('with header and footer', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar={avatar}
        name={name}
        timestamp={date}
        reactionsCount={3300000}
        commentsCount={220}
        sharesCount={2200} >
        <img src={media} width="100%"/>
    </FacebookMediaObject>
    </StyletronProvider>
  ))
  .add('with header and footer and actions', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar={avatar}
        name={name}
        timestamp={date}
        reactionsCount={3300000}
        commentsCount={220}
        sharesCount={2200}
        incLikes={action('clicked')}
        sharePost={action('clicked')}
        showComments={action('clicked')} >
        <img src={media} width="100%"/>
    </FacebookMediaObject>
    </StyletronProvider>
  ))
