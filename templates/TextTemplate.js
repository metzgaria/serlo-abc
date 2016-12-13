import React from 'react'
import { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { next, tutorial, menu } from '../actions'

class TextView extends Component {
  render() {
    console.log(this.props)
    return <View style={{flex: 1}}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',}}>
        <Text onPress={ () => this.props.menu() }>Menu</Text>
        {/* <Text onPress={ () => this.props.tutorial(this.view.id) }>Tutorial</Text> */}
        <Text onPress={ () => this.props.next(this.props.id) }>Next</Text>
      </View>
      <View style={{
        flex: 12,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',
      }}>
        <Text>{this.props.text}</Text>
      </View>
    </View>
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = { menu, next, tutorial}
export const TextTemplate = connect(mapStateToProps, mapDispatchToProps)(TextView)
