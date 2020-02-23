import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

const propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default function Repository({ navigation }) {
  const repository = navigation.getParam('repository');

  return <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />;
}

Repository.propTypes = propTypes;

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});
