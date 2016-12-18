import React from 'react'
import { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { next, tutorial, menu } from '../actions'
import { Navigation } from '../components/NavigationComponent'

class TextView extends Component {
  render() {
    console.log(this.props)
    return <View style={{flex: 1}}>
      <Navigation curViewId={this.props.id}/>
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
