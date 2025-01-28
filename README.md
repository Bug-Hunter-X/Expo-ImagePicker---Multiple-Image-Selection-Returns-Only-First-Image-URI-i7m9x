# Expo ImagePicker Multiple Image Selection Bug

This repository demonstrates a bug in the Expo ImagePicker library where selecting multiple images results in only the first image's URI being returned.  This issue is reproduced on both iOS and Android.  The solution provided resolves this issue by modifying the ImagePicker's `allowsEditing` and `allowsMultipleSelectionAsync` properties.