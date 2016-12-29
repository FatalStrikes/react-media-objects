import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import FacebookMediaObject from '../components/facebook-media-object'


import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
const styletron = new Styletron([styleSheet]);

storiesOf('Facebook Media Object', module)
  .add('empty', () => (
    <StyletronProvider styletron={styletron}>
      <FacebookMediaObject />
    </StyletronProvider>
  ))
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
