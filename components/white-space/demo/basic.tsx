import { WhiteSpace, WingBlank, Button } from 'antd-mobile';
import React from 'react';
import { View } from 'react-native';

export default class BasicWhiteSpaceExample extends React.Component<any, any> {
  render() {
    const viewStyle = {
      borderBottomColor: '#108ee9',
      borderBottomWidth: 0.5,
    };
    return (
      <View>
        <WhiteSpace size="xs" />
        <WingBlank>
          <Button type="primary">上下留白xs</Button>
        </WingBlank>
        <WhiteSpace size="xs" />
        <View style={viewStyle} />
        <WhiteSpace size="sm" />
        <WingBlank>
          <Button type="primary">上下留白sm</Button>
        </WingBlank>
        <WhiteSpace size="sm" />
        <View style={viewStyle} />
        <WhiteSpace size="md" />
        <WingBlank>
          <Button type="primary">上下留白md(默认)</Button>
        </WingBlank>
        <WhiteSpace size="md" />
        <View style={viewStyle} />
        <WhiteSpace size="lg" />
        <WingBlank>
          <Button type="primary">上下留白lg</Button>
        </WingBlank>
        <WhiteSpace size="lg" />
        <View style={viewStyle} />
        <WhiteSpace size="xl" />
        <WingBlank>
          <Button type="primary">上下留白xl</Button>
        </WingBlank>
        <WhiteSpace size="xl" />
        <View style={viewStyle} />
      </View>
    );
  }
}
