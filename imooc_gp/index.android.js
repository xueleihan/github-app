/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';
import Boy from './Boy.js';
import ListViewTest from './ListViewTest';

export default class imooc_gp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'tb_popular',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <TabNavigator>
                  <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_popular'}
                    selectedTitleStyle={{color:'red'}}
                    title="最热"
                    renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
                    <View style={styles.page1}></View>
                  </TabNavigator.Item>
                  <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_trending'}
                    selectedTitleStyle={{color:'red'}}
                    title="趋势"
                    renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
                    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_trending.png')} />}
                    onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
                    <View style={styles.page2}></View>
                  </TabNavigator.Item>
                  <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_favorite'}
                    selectedTitleStyle={{color:'red'}}
                    title="收藏"
                    renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')} />}
                    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_favorite.png')} />}
                    onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
                    <View style={styles.page1}></View>
                  </TabNavigator.Item>
                  <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_my'}
                    selectedTitleStyle={{color:'red'}}
                    title="我的"
                    renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')} />}
                    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_my.png')} />}
                    onPress={() => this.setState({ selectedTab: 'tb_my' })}>
                    <View style={styles.page2}></View>
                  </TabNavigator.Item>
                </TabNavigator> */}
                {/* <Navigator renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component navigator={navigator} {...route.params}/>
                }}
                initialRoute={{
                    component:Boy
                }}
                ></Navigator> */}
                <ListViewTest/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    page1: {
        backgroundColor: 'red',
        flex: 1
    },
    page2: {
        backgroundColor: 'yellow',
        flex: 1
    },
    image: {
        height: 22,
        width: 22
    }
});

AppRegistry.registerComponent('imooc_gp', () => imooc_gp);
