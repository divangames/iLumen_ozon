---
name: iLumen presentation
description: A calm editorial stage for supplied Ozon product artwork and its design rationale.
colors:
  paper: "#f5f3ef"
  white: "#fff"
  ink: "#18191d"
  muted: "#626168"
  blue: "#0750ef"
  line: "#d7d3cd"
  stage: "#e9e5df"
  dark: "#1c2028"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(32px, 4.3vw, 60px)"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.55
rounded:
  control: "14px"
  artwork: "8px"
  pill: "24px"
  circle: "50%"
spacing:
  compact: "8px"
  small: "16px"
  medium: "24px"
  large: "32px"
  gutter: "48px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "16px 24px"
  button-text:
    textColor: "{colors.ink}"
    padding: "12px 0"
  button-icon:
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "48px"
  topic-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  stage-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "20px"
---

# Design System: iLumen presentation

## Overview

**Creative North Star: "A quiet stage for the product"**

Warm white grounds, near-black typography and Ozon cobalt frame the supplied iLumen artwork. The interface is editorial and restrained; the infographics supply the visual richness. The supplied Ozon 11.11 logo remains an image asset.

The chosen comparison places the supplied original before cover beside the supplied proposed cover. Supporting controls and explanations stay visually subordinate to that evidence.

**Key Characteristics:**
- Warm neutral surfaces and a single strong interface accent.
- Locally hosted Manrope with clear scale contrast.
- Actual supplied artwork, quiet chrome and visible source labels.
- Responsive comparison and keyboard-accessible image viewing.

## Colors

### Primary
- **Ozon cobalt** (`blue`): primary actions, selected state controls, focus rings and the closing section.

### Neutral
- **Warm paper** (`paper`): page background, image stage and dialog.
- **Clean white** (`white`): artwork frames and reversed labels.
- **Near-black ink** (`ink`): main text and selected comparison topics.
- **Muted graphite** (`muted`): supporting copy and provenance.
- **Warm divider** (`line`): quiet boundaries and circular controls.
- **Warm stage** (`stage`): the neutral staging vocabulary, with nearby warm surface shades in section backgrounds.
- **Night charcoal** (`dark`): the lighting demonstration; its controls reverse to white when selected.

**The Artwork Leads Rule.** Keep the surrounding interface restrained so the supplied product imagery remains the richest visual element.

## Typography

Manrope is served locally in regular, semibold and bold files, with Arial and sans-serif fallbacks. Headings use tight tracking and balanced wrapping. Body paragraphs are limited to 70ch; display copy is shorter.

The frontmatter records the desktop roles. The hero falls to 48px at 900px and below. Section headings become 36px at 600px. Lead text is generally 22px, with responsive reductions. Source notes use 13px on desktop; the mobile reconstruction notice stays at least 11px. Counts use tabular numerals.

## Layout

Content sits in a centered 1440px container with 48px side padding. The header has its own 1536px maximum. Desktop section rhythm is 112px. Main image-and-commentary layouts use two columns with generous 64–100px gaps; the initial comparison has two portrait sheets between two explanation columns.

At 1180px the side padding becomes 32px and gaps tighten. At 900px the comparison side notes disappear, preserving the two artwork sheets, and gallery thumbnails become a horizontal scroll rail. Section spacing becomes 80px. At 600px side padding becomes 20px, section spacing becomes 64px, and major content layouts stack. The initial before-and-after pair stays side by side. The comparison stage and launch introduction lose their desktop sticky positioning.

## Elevation & Depth

Tonal surface changes provide most separation. The comparison sheets use one restrained shadow (`0 12px 28px -20px #18191d66`). The image viewer uses a dark translucent backdrop with a 5px blur. Primary buttons stay flat.

## Shapes

Panels and primary controls share the gently rounded control radius. Artwork uses smaller corners; topic controls are pills, and image navigation is circular. Borders are thin and warm. The mobile dialog becomes a full-screen rectangle.

## Components

- **Primary button:** cobalt fill, white bold text, 56px minimum height; darkens on hover. At 600px it becomes at least 52px tall.
- **Text button:** semibold label with a small line icon, 44px minimum height and cobalt hover color.
- **Circular icon button:** 48px square with a thin divider border; fills cobalt on hover. Disabled controls reduce opacity.
- **Navigation:** compact semibold text links and the supplied logo; cobalt hover states. The final navigation link is hidden on phones.
- **Topic tabs and state switch:** ink-selected topic pills; cobalt-selected before/after segments. Selected state is reflected in ARIA attributes.
- **Artwork gallery:** seven portrait thumbnails, a cobalt selection outline, and a larger artwork/commentary stage. Expansion cues appear on hover or keyboard focus and stay visible on phones.
- **Image dialog:** contained artwork, counter, previous/next, close and fullscreen controls. At 900px and below, artwork and explanation stack in a scrollable body, preserving verification notes. Navigation remains in the bottom toolbar. Arrow keys switch slides and Escape closes the dialog. Source mode browses ten original slides; proposal mode browses seven new slides.
- **Fact disclosures:** ruled rows with a cobalt plus/minus indicator, preserving the quiet page structure.

All interactive controls use a 3px cobalt focus outline with 5px offset. State changes use 160ms transitions with `cubic-bezier(.23,1,.32,1)`. Entrance and image changes are brief; reduced-motion preferences disable animation and transitions and remove backdrop blur.

## Do's and Don'ts

### Do:
- Do use the supplied infographics and Ozon 11.11 logo as the visual evidence.
- Do retain visible reconstruction and source labels beside the relevant images.
- Do preserve the side-by-side before-and-after pair on mobile.
- Do keep keyboard focus and selected states visible.

### Don't:
- Don't present reconstructed before states as original listing screenshots.
- Don't add decorative interface imagery that competes with the supplied artwork.
- Don't hide critical provenance only inside hover interactions.

The expanded audit reuses these tokens for a ten-item horizontal original-artwork rail, model-name tabs, a scrollable competitor table and a responsive funnel. Historical market figures are dated, and product claims remain subject to verification.

The November 10 research extension adds three keyboard-operable competitor tabs, each pairing an attributed original cover with observations and an iLumen recommendation. All panels are visible without JavaScript; enhancement reveals tabs and hides inactive panels. The existing viewer has a separate three-cover research mode. Priority filters expose six audit items, and native disclosures group buyer questions. Mobile stacks images and explanations without dropping source notes. The header and hero link directly to competitors and the expanded audit. Source links are underlined or visibly action-shaped, and cached prices carry explicit freshness and comparison limits. The historical table is now an archive disclosure, distinct from the new research.

