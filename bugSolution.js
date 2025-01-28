The issue is resolved by setting `allowsEditing` to `false` and modifying the `ImagePicker.launchImageLibraryAsync` call to correctly handle the result.  The corrected code ensures that all selected images' URIs are included in the `selected` array.
```javascript
import * as ImagePicker from 'expo-image-picker';

async function pickMultipleImages() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false,
    allowsMultipleSelection: true,
  });

  if (!result.cancelled) {
    console.log('Selected images:', result.selected);
    // Use result.selected to access the URIs of all selected images
  }
}
```