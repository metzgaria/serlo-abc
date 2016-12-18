import React from 'react'
import { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { next, tutorial, menu } from '../actions'

class NavigationComponent extends Component {
  render() {
    return <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',}}>
        <Text onPress={ () => this.props.menu() }>Menu</Text>
        {/* <Text onPress={ () => this.props.tutorial(this.view.id) }>Tutorial</Text> */}
        <Text onPress={ () => this.props.next(this.props.curViewId) }>Next</Text>
      </View>
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = { menu, next, tutorial}

export const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)
