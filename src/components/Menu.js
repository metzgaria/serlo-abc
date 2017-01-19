import React, { Component } from 'react'
import { ListView, View, Alert } from 'react-native'

import { MenuListItem } from '../components/Components'

import json from '../assets/exercises.json'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#00b4d5'
  }
}

class Menu extends Component {

  constructor(props) {
    super(props)
    const items = json["categories"].map((item) => item["title"])
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(items)
    }
  }

  onSelection(index) {
    const item = this.state.dataSource.getRowData(0, index)
    const category = json["categories"][index]
    console.log(`Category “${category["title"]}” with ${category["exercises"].length} exercises`);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, _, rowID) => (
            <MenuListItem
              text={rowData}
              onPress={() => this.onSelection(rowID)}
            />
          )}
        />
      </View>
    )
  }

}

export default Menu
