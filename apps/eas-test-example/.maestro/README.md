# Maestro Test Flows for ClipPath Tests

Maestro test flows for validating ClipPath fixes in react-native-svg.

## Prerequisites

Install Maestro CLI:
```bash
curl -Ls https://get.maestro.mobile.dev | bash
```

## Running Tests Locally

### Run all tests
```bash
maestro test .maestro/all-tests.yml
```

### Run individual tests
```bash
maestro test .maestro/clippath-transform.yml
maestro test .maestro/clippath-cache.yml
maestro test .maestro/clippath-cliprule.yml
maestro test .maestro/clippath-android-evenodd.yml
```

### Run with Maestro Studio (interactive)
```bash
maestro studio
# Then manually run flows or explore the app
```

## Test Flows

### clippath-transform.yml
Tests ClipPath transform application in mask slow-path.
- Navigates to ClipPath Transform test
- Captures screenshot of rotated clipPath rendering
- Expected: Blue rectangle clipped at 45° angle

### clippath-cache.yml
Tests cache invalidation when clipPath definition changes.
- Navigates to ClipPath Cache test
- Takes screenshot of initial state (left circle)
- Toggles to right circle, takes screenshot
- Toggles back to left, takes screenshot
- Expected: Rectangle position changes with toggle

### clippath-cliprule.yml
Tests per-child evenodd clipRule in fast-path.
- Navigates to ClipPath ClipRule test
- Captures screenshot of evenodd path with hole
- Expected: Green rectangle with hole in center

### clippath-android-evenodd.yml
Tests Android evenodd hole preservation.
- Navigates to Android Evenodd test
- Captures screenshot of overlapping circles
- Expected: Purple rectangle with hole in overlap area
- Platform: Particularly important for Android

### all-tests.yml
Runs all four ClipPath tests in sequence and captures screenshots for each.

## Running on EAS

These flows can be run on EAS Build using Maestro Cloud or by downloading the simulator build and running locally.

### Option 1: Local testing with EAS Build
```bash
# Build for simulator
eas build --profile test --platform ios

# Download and install the build
# Run Maestro tests
maestro test .maestro/
```

### Option 2: EAS + Maestro Cloud
```bash
# Upload and run tests on Maestro Cloud
maestro cloud --apiKey <key> .maestro/all-tests.yml
```

## Screenshots

Screenshots are saved to `~/.maestro/tests/<timestamp>/` by default.

To compare against reference images:
1. Generate reference images on known-good build
2. Use image comparison tools (pixelmatch, etc.) to validate
3. Or manually review screenshots for visual correctness

## Updating appId

If the app bundle identifier changes, update the `appId` field at the top of each YAML file.

Current: `com.reactnativesvg.clippathtest`
