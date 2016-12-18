import React from 'react'
import { Component } from 'react'
import { AppRegistry, Text, View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

class ShowLetterView extends Component {
  render() {
    console.log(abc)
    return <View>
    </View>
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = { start }
export const ShowLetterTemplate = connect(mapStateToProps, mapDispatchToProps)(MenuView)
