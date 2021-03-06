/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React from 'react';
import {StyleSheet, Text, View, Keyboard} from 'react-native';

import AV from 'leancloud-storage';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import QIcon from '../../assets/fonts/iconSets';
import Request from '../../utils/Request';
import {BaseComponent} from '../../components/base/BaseComponent'
let feedbackText;

class Feedback extends BaseComponent {
    static navigationOptions = ({navigation}) => ({
        title: '建议',
        tabBarIcon: ({tintColor}) => (
            <Icon name="md-thumbs-up" size={25} color={tintColor}/>
        ),
        headerRight: (
            <QIcon.Button
                name="icon-shouye"
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={0.8}
                onPress={() => {
                    navigation.state.params.handleCheck();
                }}
            />
        )
    });

    componentDidMount() {
        feedbackText = '';
        this.props.navigation.setParams({handleCheck: this.onActionSelected});
    }

    onActionSelected = () => {
        this.props.navigation.goBack();   // this.props.navigation.popToTop();
    };
    onNext = () => {
        this.props.navigation.state.params.callback('返回的数据');
        this.props.navigation.goBack();
        // this.props.navigation.navigate('Feedback', { isFirst: true });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textInput}  onPress={this.onNext}>点击</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    textInput: {
        width: 200,
        height: 100,
        fontSize: 18,
        padding: 15,
    }
});


export default Feedback;
