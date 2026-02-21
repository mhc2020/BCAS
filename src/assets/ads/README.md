# Advertisement Images

This folder contains advertisement images used in the website's ad slideshows.

## Ad Locations

### Left Sidebar Ad
- **Location**: Fixed left sidebar (visible on large screens)  
- **Recommended Size**: 160x600 pixels (standard skyscraper banner)
- **Configuration File**: `src/components/ads/LeftSidebarAd.tsx`
- **Number of Images**: 2 (can be modified)

### Bottom Ad
- **Location**: Above footer, full-width container
- **Recommended Size**: 728x90 pixels (standard leaderboard banner)
- **Configuration File**: `src/components/ads/BottomAd.tsx`
- **Number of Images**: 2 (can be modified)

## How to Add Your Ad Images

1. Place your ad images in this folder (`src/assets/ads/`)
2. Update the image paths in the respective component files:
   - For left sidebar: Edit `src/components/ads/LeftSidebarAd.tsx`
   - For bottom ad: Edit `src/components/ads/BottomAd.tsx`

### Example:
```typescript
// In LeftSidebarAd.tsx or BottomAd.tsx
const adImages = [
  "/src/assets/ads/ad1.jpg",
  "/src/assets/ads/ad2.jpg",
];
```

## Customization

- **Slideshow interval**: Default is 5 seconds. Change the `interval` prop (in milliseconds)
- **Number of images**: Add or remove image paths from the `adImages` array
- **Styling**: Modify the className in the component files
