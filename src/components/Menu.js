import React, { Component } from 'react'
import { ListView, View } from 'react-native'

import { MenuListItem } from '../components/Components'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#00b4d5'
  }
}

class Menu extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(
        ['A', 'N', 'E', 'Hallo!', 'A N E', 'S', 'T', 'O', 'S T O', 'R', 'I','H']
      )
    }
  }

  onSelection(index) {
    const item = this.state.dataSource.getRowData(0, index)
    console.log(`Selected “${item}” at index ${index}`)
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
