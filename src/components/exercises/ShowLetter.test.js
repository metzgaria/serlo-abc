import React from 'react';

import ShowLetter from './ShowLetter';

import renderer from 'react-test-renderer';

it('renders without crashing (without repeat)', () => {
  const tree = renderer.create(
    <ShowLetter letter="A" sound={require('../../assets/sounds/a.mp3')} />
  );
  expect(tree).toMatchSnapshot();
});

it('renders without crashing (with repeat)', () => {
  const tree = renderer.create(
    <ShowLetter
      letter="B"
      sound={require('../../assets/sounds/b.mp3')}
      isRepeat
    />
  );
  expect(tree).toMatchSnapshot();
});
