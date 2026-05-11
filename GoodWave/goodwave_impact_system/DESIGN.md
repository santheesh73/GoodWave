---
name: GoodWave Impact System
colors:
  surface: '#141218'
  surface-dim: '#141218'
  surface-bright: '#3b383e'
  surface-container-lowest: '#0f0d13'
  surface-container-low: '#1d1b20'
  surface-container: '#211f24'
  surface-container-high: '#2b292f'
  surface-container-highest: '#36343a'
  on-surface: '#e6e0e9'
  on-surface-variant: '#cbc4d2'
  inverse-surface: '#e6e0e9'
  inverse-on-surface: '#322f35'
  outline: '#948e9c'
  outline-variant: '#494551'
  surface-tint: '#cfbcff'
  primary: '#cfbcff'
  on-primary: '#381e72'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#6750a4'
  secondary: '#cdc0e9'
  on-secondary: '#342b4b'
  secondary-container: '#4d4465'
  on-secondary-container: '#bfb2da'
  tertiary: '#e7c365'
  on-tertiary: '#3e2e00'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#141218'
  on-background: '#e6e0e9'
  surface-variant: '#36343a'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The brand identity centers on the intersection of advanced technology and humanitarian urgency. It moves away from traditional "charity" aesthetics—which often rely on soft, earth tones—and instead adopts a high-octane, futuristic aesthetic that mirrors the velocity of modern innovation.

The design style is a sophisticated blend of **Glassmorphism** and **High-Contrast Minimalism**. By using deep, cinematic backgrounds paired with vibrant neon accents, the interface evokes a sense of "mission control" for social good. The platform should feel like a premium FinTech or DeepTech tool, instilling confidence that donor contributions are being managed with scientific precision and visionary intent.

## Colors

The palette is anchored in a multi-layered dark environment. The background utilizes a deep slate navy to midnight blue radial gradient to create a sense of infinite digital space. 

Actionable elements and data visualizations utilize the primary "Impact Gradient"—a high-energy transition from bright cyan to neon green. This gradient signifies growth, vitality, and technical fluidity. Use the accent colors sparingly for highlighted text or inline status indicators to ensure they maintain their visual "punch" against the muted slate gray used for long-form body text.

## Typography

This design system uses **Geist** for its technical precision and wide apertures, which maintain legibility even in low-light dark mode environments. 

Headings should be set with tight letter-spacing and high weight to create a "bold-impact" hierarchy. Body text uses a lighter slate gray (#94A3B8) to reduce eye strain and establish a clear secondary layer of information. Use the `label-caps` style for small metadata, badges, and category tags to reinforce the technical, data-driven feel of the platform.

## Layout & Spacing

The layout follows a 12-column fluid grid system with generous internal margins to maintain a minimal, breathable aesthetic. Content is centered within a maximum width container to ensure readability on ultra-wide displays.

Spacing is strictly mathematical, built on a 4px base unit. Section vertical spacing should be aggressive (using `stack-lg`) to clearly delineate different narrative blocks of the impact story. Mobile views transition to a single-column layout with reduced horizontal margins, focusing on vertical scrolling and high-impact full-width glass cards.

## Elevation & Depth

Depth is achieved through **Glassmorphism** rather than traditional drop shadows. Surfaces are treated as semi-transparent layers of "smart glass":
- **Base Layer:** The deep gradient background.
- **Surface Layer:** Glass cards with `backdrop-filter: blur(12px)`, a subtle 8% white border, and a 10% fill of the primary background color.
- **Active Layer:** Elements that require focus (like active cards or buttons) receive a soft "Inner Glow" using the primary cyan/green gradient at very low opacity, making the element appear to emit light from within.
- **Shadows:** Use large, ultra-soft diffused shadows tinted with the primary cyan color (#06B6D4) at 10-15% opacity to create a "hover" effect that feels like a neon glow.

## Shapes

The shape language is ultra-modern and approachable, characterized by large corner radii. While standard UI components (inputs, small buttons) use a base `rounded-lg` (1rem), the primary containers and glass cards must use `rounded-2xl` or `3xl` to create the signature "tech-forward" look. This softness balances the "hard" technical feel of the dark mode and Geist typography, making the platform feel human-centric.

## Components

### Buttons
Primary buttons are pill-shaped with the cyan-to-neon-green gradient. They feature a `box-shadow` that mimics a neon glow of the same color. Text inside buttons should be high-contrast (Midnight Blue or White) to ensure legibility against the vibrant background.

### Glass Cards
Cards are the primary container for content. They must feature a `1px` solid border at `rgba(255, 255, 255, 0.08)` and a backdrop blur. For high-impact cards, add a subtle top-left gradient highlight on the border to simulate a light source.

### Progress Bars
Used for tracking donation goals. The track is a dark, semi-transparent slate, while the filler is the primary cyan-to-green gradient. The leading edge of the progress bar should have a small "glow" spark to indicate momentum.

### Glowing Badges
Used for status or categories. These are small, pill-shaped elements with a low-opacity cyan background and a high-intensity cyan border and text.

### Inputs
Fields should be dark, ghost-style inputs with a `1px` slate border that transitions to the primary cyan gradient upon focus. The cursor and selection highlight should always use the neon green accent.