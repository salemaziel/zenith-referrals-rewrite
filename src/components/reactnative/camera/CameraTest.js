import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { Camera } from 'expo-camera';
//import ExpoDarkModeSwitch from 'expo-dark-mode-switch';
import * as Permissions from 'expo-permissions';
import MobilePhoneView from './MobilePhoneView';
import AppButton from './AppButton';
import AppRevealView from './AppRevealView';
//import ExpoGesturesExample from './ExpoGesturesExample';
//import ExpoImagePickerExample from './ExpoImagePickerExample';


export const CameraTest = () => {
  const [showCamera, setShowCamera] = useState(false);
  return (
    <MobilePhoneView safeAreaPaddingTop={0}>
      {showCamera ? (
        <AppRevealView
          // Workaround because onCameraReady fires at mount time in web (but camera does not display anything yet)
          delay={2500}
        >
          <Camera style={{ flex: 1, width: '100%' }} />
        </AppRevealView>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <AppButton
            onPress={async () => {
              try {
                const result = await Permissions.askAsync(Permissions.CAMERA);
                if (result.status === 'granted') {
                  setShowCamera(true);
                }
              } catch (e) {
                console.error(e);

                // TODO find a better workaround
                // Firefox will throw, we have to actually mount the camera so that FF ask the user permission...
                // See https://stackoverflow.com/a/53155894/82609
                setShowCamera(true);
              }
            }}
          >
            Show expo-camera
          </AppButton>
        </View>
      )}
    </MobilePhoneView>
  );
};
