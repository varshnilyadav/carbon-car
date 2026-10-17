# Sun Films Gallery Images

Drop images for the Sun Films service gallery here.

## Recommended Specifications
- **Aspect Ratio**: 4:3 (e.g., 1200x900px or 1600x1200px)
- **Format**: `.webp` or high-quality `.jpg` (compressed under 350KB for optimal web performance)
- **Naming**: `1.jpg`, `2.jpg`, etc., or descriptive names like `heat-shrink-application.jpg`

## How to add to the page
Add an entry to the `images` array for this service in `src/data/siteData.ts`:
```ts
{
  src: "/services/sun-films/1.jpg",
  alt: "Nano-ceramic window film installation",
  caption: "High solar heat rejection & UV defense"
}
```
If this folder is empty, the gallery component automatically renders 3 styled placeholder tiles.
