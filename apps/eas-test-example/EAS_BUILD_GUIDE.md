# EAS Build Guide for ClipPath Test App

Quick reference for building and testing the ClipPath test app on EAS.

## Prerequisites

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to EAS
eas login
```

## Build Commands

### iOS Simulator Build (for local testing)
```bash
cd apps/eas-test-example
eas build --profile test --platform ios
```

This creates a simulator build that can be:
- Downloaded and installed on local macOS simulator
- Tested with Maestro flows locally

### Android APK Build (for local testing)
```bash
cd apps/eas-test-example
eas build --profile test --platform android
```

### Other Build Profiles

The app includes several pre-configured build profiles in `eas.json`:

- **test** - Simulator/APK builds for testing (Release configuration)
- **sim-dev** - Development client simulator builds
- **development** - Development client internal builds
- **preview** - Preview builds for internal distribution
- **production** - Production builds

## Running Tests After Build

### 1. Download and Install Build
```bash
# After build completes, download the artifact
# For iOS simulator: Install .app to simulator
# For Android: Install .apk to device/emulator
```

### 2. Run Maestro Tests
```bash
cd apps/eas-test-example

# Run all tests
maestro test .maestro/all-tests.yml

# Or run individual tests
maestro test .maestro/clippath-transform.yml
maestro test .maestro/clippath-cache.yml
maestro test .maestro/clippath-cliprule.yml
maestro test .maestro/clippath-android-evenodd.yml
```

## App Configuration

### Bundle Identifiers
- **iOS**: `com.reactnativesvg.clippathtest`
- **Android**: `com.reactnativesvg.clippathtest`

### EAS Project
- **Project ID**: `b64c64de-eb0a-48ce-a59e-998c5896dfc1`
- **Slug**: `eas-test-example`

## Local Library Linking

The app uses the local react-native-svg library via:
```json
"react-native-svg": "link:../../"
```

Before building:
1. Ensure react-native-svg is built: `yarn bob` in repo root
2. Install dependencies: `yarn install` in apps/eas-test-example

## Troubleshooting

### Build fails with "Module not found: react-native-svg"
- Run `yarn bob` in the react-native-svg root directory
- Ensure symlink is working: `ls -la node_modules/react-native-svg`

### Maestro can't find the app
- Check appId in Maestro YAML files matches bundleIdentifier in app.json
- Current appId: `com.reactnativesvg.clippathtest`

### Tests fail to find UI elements
- Verify app is running and visible
- Use `maestro studio` to inspect app hierarchy
- Check testID props are present in components
