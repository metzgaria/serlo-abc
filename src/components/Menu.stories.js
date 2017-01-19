import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'

import Menu from './Menu'

storiesOf('components/Menu', module)
  .add('default', () => (
    <Menu />
  ))
