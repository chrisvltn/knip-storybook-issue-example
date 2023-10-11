import {addons} from '@storybook/manager-api';

addons.setConfig({
  toolbar: {
    copy: {hidden: true},
    eject: {hidden: true},
    remount: {hidden: true},
    'storybook/outline': {hidden: true},
    zoom: {hidden: true},
  },
});
