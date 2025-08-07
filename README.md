# Diell Logo

A beautiful, customizable, animated React logo component with TypeScript support. Features a sun-inspired design with smooth hover animations and extensive customization options.

## Installation

```bash
npm install diell-logo
```

or

```bash
yarn add diell-logo
```

## Basic Usage

```tsx
import React from 'react';
import DiellLogo from 'diell-logo';

function App() {
  return (
    <div>
      <DiellLogo />
    </div>
  );
}
```

## Advanced Usage

### Custom Size and Colors

```tsx
import DiellLogo from 'diell-logo';

function App() {
  return (
    <div>
      <DiellLogo
        size={120}
        primaryColor="#ff6b35"
        secondaryColor="#f7931e"
        animationDuration={500}
      />
    </div>
  );
}
```

### Logo Only (No Text)

```tsx
<DiellLogo
  size={60}
  showText={false}
/>
```

### Custom Text

```tsx
<DiellLogo
  text="MY BRAND"
  textColor="#333"
  size={100}
/>
```

### With Background Container

```tsx
<DiellLogo
  showBackground={true}
  backgroundColor="#1a1a1a"
  primaryColor="#ffd700"
/>
```

### Responsive Sizing

```tsx
<DiellLogo
  width="10vw"
  height="10vh"
  showText={false}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `80` | Size of the logo (width and height) |
| `width` | `number \| string` | `undefined` | Custom width (overrides size) |
| `height` | `number \| string` | `undefined` | Custom height (overrides size) |
| `primaryColor` | `string` | `'#fbbf24'` | Primary color for the sun rays and center |
| `secondaryColor` | `string` | `'#f97316'` | Secondary color for glow effects |
| `inactiveColor` | `string` | `'rgba(100,100,100,0.6)'` | Color when not hovered |
| `textColor` | `string` | `undefined` | Color of the text (auto if not set) |
| `animationDuration` | `number` | `300` | Animation duration in milliseconds |
| `hoverScale` | `number` | `1.2` | Scale factor on hover |
| `showText` | `boolean` | `true` | Whether to show the text below logo |
| `text` | `string` | `'DIELL'` | Text to display |
| `showBackground` | `boolean` | `false` | Whether to show background container |
| `backgroundColor` | `string` | `'#f3f4f6'` | Background color when showBackground is true |
| `onClick` | `() => void` | `undefined` | Click handler |
| `onMouseEnter` | `() => void` | `undefined` | Mouse enter handler |
| `onMouseLeave` | `() => void` | `undefined` | Mouse leave handler |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `React.CSSProperties` | `{}` | Inline styles for logo container |
| `containerStyle` | `React.CSSProperties` | `{}` | Inline styles for background container |
| `alt` | `string` | `'Diell Logo'` | Alt text for accessibility |
| `title` | `string` | `'Diell Logo'` | Title attribute |

## Examples

### Small Navigation Logo

```tsx
<DiellLogo
  size={40}
  showText={false}
  onClick={() => window.location.href = '/'}
/>
```

### Hero Section Logo

```tsx
<DiellLogo
  size={200}
  primaryColor="#ffd700"
  secondaryColor="#ffed4e"
  animationDuration={600}
  hoverScale={1.3}
/>
```

### Dark Theme

```tsx
<DiellLogo
  size={100}
  primaryColor="#fbbf24"
  textColor="#ffffff"
  className="dark-logo"
/>
```

### Loading Indicator Style

```tsx
<DiellLogo
  size={60}
  showText={false}
  primaryColor="#3b82f6"
  animationDuration={200}
/>
```

## TypeScript Support

The package includes full TypeScript definitions. Import the types if needed:

```tsx
import DiellLogo, { DiellLogoProps } from 'diell-logo';

const logoProps: DiellLogoProps = {
  size: 100,
  primaryColor: '#ff6b35',
  showText: false,
};

<DiellLogo {...logoProps} />
```

## Browser Support

- Modern browsers that support CSS transforms and transitions
- React 16.8+ (hooks support required)
- TypeScript 4.0+ (for TypeScript projects)

## Contributing

As this is a proprietary project, direct contributions via pull requests are not accepted. 

If you have suggestions or have found a bug that you believe is critical, you are welcome to open an issue in the GitHub repository.

## License

This project is proprietary and not available for use without express permission from the author. All rights are reserved.

Copyright (c) 2024 Blendar Orana
