# ClipPath Test Components

Test components for validating ClipPath fixes in react-native-svg.

## Tests

### 1. ClipPathTransform
**Issue**: ClipPath transforms dropped for mask slow-path

**Test**: ClipPath with transform (rotation 45°) and overlapping circles (triggers mask slow-path)

**Expected**: Blue rectangle clipped at 45-degree angle

**If bug present**: Clipping will be axis-aligned (not rotated)

---

### 2. ClipPathCache
**Issue**: Cached clip masks never refresh when definition changes

**Test**: Interactive - toggle button switches clipPath definition between two circles

**Expected**: Clipped rectangle updates to use new clipPath geometry after toggle

**If bug present**: Rectangle stays clipped by original cached mask

---

### 3. ClipPathClipRule
**Issue**: Fast-path drops per-child clipRule, using clipped element's clipRule instead

**Test**: ClipPath with single path using evenodd clipRule (fast-path eligible)

**Expected**: Green rectangle clipped with hole in center (evenodd behavior)

**If bug present**: Hole will be filled (nonzero used instead of evenodd)

---

### 4. ClipPathAndroidEvenodd
**Issue**: Android evenodd holes flattened when using path combining UNION operation

**Test**: ClipPath with two overlapping circles using evenodd clipRule

**Expected**: Overlapping area creates a hole (evenodd behavior)

**If bug present**: Overlapping area will be filled (UNION flattens holes)

**Platform**: Android/macOS specific (iOS uses mask rendering for overlaps)
