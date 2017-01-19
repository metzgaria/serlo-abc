import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'

const styles = {
  buttonWithInset: {
    marginLeft: -50
  },
  listItemContainer: {
    flex: 1,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    alignItems: 'center'
  },
  letterContainer: {
    padding: 10,
    backgroundColor: '#73DBFF',
    borderRadius: 30,
  },
  letter: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#73DBFF',
    borderRadius: 9999,
    padding: 5
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 4,
      width: 4
    }
  }
}

export const MenuListItem = ({ text, onPress }) => (
  <View style={styles.listItemContainer}>
    <Letter letter={text} onPress={onPress} />
  </View>
)

export const Letter = ({ letter, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.letterContainer, styles.shadow]}>
      <Text style={styles.letter}>{letter}</Text>
    </View>
  </TouchableOpacity>
)

export const RoundImageWithBorder = ({ image, size }) => (
  <Image
    resizeMode="cover"
    source={image}
    style={{
      height: size,
      width: size,
      margin: 20,
      borderRadius: size / 2,
      borderColor: 'rgba(0, 0, 0, 0.05)'
    }}
  />
)

export class IconWithBackground extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: 'transparent'
    }
  }

  // Removes the semi-transparent background behind the icon
  unfocus = () => {
    this.setState({
      backgroundColor: 'transparent'
    })
  }

  // Draws the semi-transparent background behind the icon
  focus = () => {
    this.setState({
      backgroundColor: 'rgba(255,255,255,0.15)'
    })
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.state.backgroundColor,
          borderRadius: 9999,
          padding: 20
        }}
      >
        <Image
          source={this.props.icon}
          style={{
            height: this.props.size,
            width: this.props.size,
            resizeMode: 'contain'
          }}
        />
      </View>
    )
  }
}

export const RoundButton = ({ icon, size, style, onPress }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <View
      style={[styles.button, styles.shadow]}
    >
      <Image
        source={icon}
        style={{
          height: size,
          width: size,
          resizeMode: 'contain'
        }}
      />
    </View>
  </TouchableOpacity>
)

export const RoundImageWithButton = ({ image, imageSize, icon, buttonSize, onPress }) => (
  <View
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      borderRadius: 9999999,
      flexDirection: 'row',
      alignItems: 'flex-end'
    }}
  >
    <RoundImageWithBorder
      image={image}
      size={imageSize}
    />
    <RoundButton
      icon={icon}
      size={buttonSize}
      onPress={onPress}
      style={styles.buttonWithInset}
    />
  </View>
)
