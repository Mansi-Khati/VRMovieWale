/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {WebView} from 'react-native-webview';

const VrTheatre = () => {
  return (
    <WebView
      source={{uri: 'http://gyanratan.me/Unity-WebTheater/'}}
      style={{flex: 1}}
    />
  );
};

export default VrTheatre;
