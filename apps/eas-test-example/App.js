import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

// ClipPath test components
import {
  ClipPathTransform,
  ClipPathCache,
  ClipPathClipRule,
  ClipPathAndroidEvenodd,
} from './components/ClipPathTests';

// Test registry
const CLIPPATH_TESTS = [
  {
    id: 'transform',
    name: 'ClipPath Transform',
    component: ClipPathTransform,
    description: 'ClipPath with rotation (mask slow-path)',
  },
  {
    id: 'cache',
    name: 'ClipPath Cache',
    component: ClipPathCache,
    description: 'Cache invalidation on definition change',
  },
  {
    id: 'cliprule',
    name: 'ClipPath ClipRule',
    component: ClipPathClipRule,
    description: 'Per-child evenodd clipRule (fast-path)',
  },
  {
    id: 'android-evenodd',
    name: 'Android Evenodd',
    component: ClipPathAndroidEvenodd,
    description: 'Overlapping circles with evenodd holes',
  },
];

export default function App() {
  const [selectedTest, setSelectedTest] = useState(CLIPPATH_TESTS[0]);

  const TestComponent = selectedTest.component;

  return (
    <View style={styles.container}>
      {/* Test selector */}
      <View style={styles.testSelector}>
        <Text style={styles.title}>ClipPath Tests</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CLIPPATH_TESTS.map((test) => (
            <TouchableOpacity
              key={test.id}
              testID={`test-button-${test.id}`}
              style={[
                styles.testButton,
                selectedTest.id === test.id && styles.testButtonActive,
              ]}
              onPress={() => setSelectedTest(test)}
            >
              <Text
                style={[
                  styles.testButtonText,
                  selectedTest.id === test.id && styles.testButtonTextActive,
                ]}
              >
                {test.name}
              </Text>
              <Text style={styles.testButtonDesc}>{test.description}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Test display */}
      <View style={styles.testDisplay}>
        <TestComponent />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  testSelector: {
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  testButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    minWidth: 150,
  },
  testButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  testButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  testButtonTextActive: {
    color: '#fff',
  },
  testButtonDesc: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  testDisplay: {
    flex: 1,
  },
});
