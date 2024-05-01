/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {WebView} from 'react-native-webview';

const VrTheatre = () => {
  return (
    <WebView
      source={{uri: 'https://gyanratan.me/Recliner/'}}
      style={{flex: 1}}
    />
  );
};

export default VrTheatre;
