import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionictask.www',
  appName: 'ionic-test-task',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
