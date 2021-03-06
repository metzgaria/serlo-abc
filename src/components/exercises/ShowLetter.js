import React from 'react';
import { View, Text } from 'react-native';

import repeatIcon from '../../assets/images/repeat.png';
import speakerImage from '../../assets/images/speaker.png';
import { loadSounds } from '../helpers/audio';
import { RoundButton, IconWithBackground } from '../Components';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#00B4D5',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  bigLetter: {
    paddingLeft: 50,
    height: 200,
    width: 200,
    color: '#FFF',
    fontSize: 180,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

const UnwrappedShowLetter = (
  { letter, sounds: [letterSound, repeatSound], isRepeat }
) => {
  const play = () => {
    if (isRepeat) this.icon.unfocus();
    letterSound.playAsync();
    letterSound.setPlaybackFinishedCallback(() => {
      letterSound.setPositionAsync(0);
      if (isRepeat) {
        this.icon.focus();
        repeatSound.playAsync();
        repeatSound.setPlaybackFinishedCallback(() => {
          repeatSound.setPositionAsync(0);
        });
      }
    });
  };

  const toggleRepeatButton = () => {
    if (isRepeat) {
      return (
        <IconWithBackground
          ref={view => {
            this.icon = view;
          }}
          icon={repeatIcon}
          size={40}
        />
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bigLetter}>
          {letter}
        </Text>
        <RoundButton icon={speakerImage} size={40} onPress={play} />
      </View>
      <View height={80}>
        {toggleRepeatButton()}
      </View>
    </View>
  );
};

const WrappedShowLetter = loadSounds(UnwrappedShowLetter);

const ShowLetter = ({ sound, ...props }) => {
  const sounds = props.isRepeat
    ? [sound, require('../../assets/sounds/repeat.mp3')]
    : [sound];
  return <WrappedShowLetter sounds={sounds} {...props} />;
};

export default ShowLetter;
