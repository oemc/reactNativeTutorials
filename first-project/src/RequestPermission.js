import {PermissionsAndroid} from 'react-native';

checkPermissions = async() =>{
    try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            'title': 'Access Device Storage',
            'message': 'Acceso a almacenamiento para elegir imagen de fondo'
          }
        );
        return granted;
      } catch (err) {
        console.warn('Failed to request permission', err);
        return null;
    }
}

export default { checkPermissions: checkPermissions };