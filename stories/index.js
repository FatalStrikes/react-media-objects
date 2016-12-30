import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import FacebookMediaObject from '../components/facebook-media-object'


import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
const styletron = new Styletron([styleSheet]);

storiesOf('Facebook Media Object', module)
  .add('with header no image', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        name="Fill Murray"
        timestamp="post 3hrs ago"
        />
    </StyletronProvider>
  ))
  .add('with header no content', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar="http://fillmurray.com/200/200"
        name="Fill Murray"
        timestamp="post 3hrs ago"
        />
    </StyletronProvider>
  ))
  .add('with header and content no media', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar="http://fillmurray.com/200/200"
        name="Fill Murray"
        timestamp="post 3hrs ago"
        post="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
    </StyletronProvider>
  ))
  .add('with header and content and media', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar="http://fillmurray.com/200/200"
        name="Fill Murray"
        timestamp="post 3hrs ago"
        post="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        >
        <img src="http://fillmurray.com/800/600" width="100%"/>
    </FacebookMediaObject>
    </StyletronProvider>
  ))
  .add('with header and media no content', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar="http://fillmurray.com/200/200"
        name="Fill Murray"
        timestamp="post 3hrs ago"        >
        <img src="http://fillmurray.com/800/600" width="100%"/>
    </FacebookMediaObject>
    </StyletronProvider>
  ))
  .add('with header and footer', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject
        avatar="http://fillmurray.com/200/200"
        name="Fill Murray"
        timestamp="post 3hrs ago"
        reactionsCount={3300000}
        commentsCount={220}
        sharesCount={2200} >
        <img src="http://fillmurray.com/800/600" width="100%"/>
    </FacebookMediaObject>
    </StyletronProvider>
  ))
