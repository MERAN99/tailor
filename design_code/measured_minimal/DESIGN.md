# Design System Strategy: The Tailored Interface

## 1. Overview & Creative North Star
**Creative North Star: "The Master’s Pattern"**

This design system moves beyond basic minimalism into the realm of *Bespoke Utility*. Much like a tailor’s workbench, the interface must feel organized, high-quality, and intentionally sparse. We are avoiding the "template" look by rejecting standard borders and rigid grids. Instead, we utilize **Asymmetric Precision**—using generous white space and off-center alignments to guide the eye, mimicking the way fabric is laid out on a cutting table. The aesthetic is professional and utilitarian, yet elevated through "High-End Editorial" typography scales and tonal depth.

---

## 2. Colors & Surface Architecture
The palette is a sophisticated study in light and atmosphere. We are not just using "gray"; we are using a spectrum of stone, sky, and linen.

*   **Primary Palette:** The `primary` (#366480) and `primary_container` (#afddfe) act as our "Tailor’s Chalk"—precise, visible, yet soft.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning content. To separate a sidebar from a main workspace, use a background shift from `surface` (#f8f9fa) to `surface_container_low` (#f1f4f5). Boundaries are felt, not seen.
*   **Surface Hierarchy & Nesting:** Treat the UI as layers of fine paper. 
    *   **Level 0 (Base):** `surface` for the overall canvas.
    *   **Level 1 (Sections):** `surface_container` for large work areas.
    *   **Level 2 (Active Elements):** `surface_container_lowest` (#ffffff) for cards or input containers to create a "pop" against the gray base.
*   **The "Glass & Gradient" Rule:** For floating navigation or action bars, use Glassmorphism. Apply `surface` at 80% opacity with a 20px backdrop-blur. 
*   **Signature Textures:** For primary CTAs, apply a subtle linear gradient from `primary` (#366480) to `primary_dim` (#285874) at a 145-degree angle to give the button a tactile, "weighted" feel.

---

## 3. Typography: The Editorial Edge
We use **Inter** not as a system font, but as a structural element. The hierarchy is designed to feel like a high-end fashion lookbook.

*   **Display & Headlines:** Use `display-md` (2.75rem) for main dashboard greetings. High contrast between `headline-lg` and `body-md` is essential to create an editorial rhythm.
*   **The Utility Scale:** `label-md` and `label-sm` are critical for technical data (measurements, fabric codes). These should always use `on_surface_variant` (#5a6062) to maintain a professional, low-ego aesthetic.
*   **Intentional Weight:** Keep body text at `body-lg` for readability during active shop use. The "Utility" feel comes from the oversized nature of the type—easy to read from a distance while handling shears or fabric.

---

## 4. Elevation & Depth
In this system, "Elevation" does not mean "Shadow." It means "Tonal Presence."

*   **The Layering Principle:** To lift an element, move up the `surface_container` scale. A measurement card should be `surface_container_lowest` (Pure White) sitting on a `surface_dim` background.
*   **Ambient Shadows:** If a modal or floating menu is required, use an "Atmospheric Shadow": `0px 24px 48px rgba(45, 51, 53, 0.06)`. The shadow must feel like air, not ink.
*   **The "Ghost Border" Fallback:** For input fields or interactive zones where boundaries are legally required, use `outline_variant` at 20% opacity. It should be barely perceptible—a whisper of a line.

---

## 5. Components

### **Input Fields (The Core Utility)**
*   **Style:** Large, oversized containers using `surface_container_highest` (#dee3e6).
*   **Interactions:** On focus, the background shifts to `surface_container_lowest` (Pure White) with a 2px `primary` bottom-border only. 
*   **Typography:** Labels use `label-md` in `primary` color to signal activity.

### **Buttons**
*   **Primary:** `primary` background with `on_primary` text. No rounded corners beyond `md` (0.375rem) to keep the "utilitarian" sharp edge.
*   **Secondary:** `secondary_container` background. These should feel "recessed" into the page.
*   **Tertiary:** No background or border. Use `title-sm` typography with a `primary` color.

### **Cards & Lists**
*   **Forbid Dividers:** Do not use lines to separate list items. Use 16px of vertical whitespace or a alternating subtle tint between `surface_container_low` and `surface_container_high`.
*   **Selection Chips:** Use `secondary_fixed` (#d1e6f0) for unselected states and `primary` for selected. Use `full` (9999px) roundedness to contrast against the sharp-edged inputs.

### **Tailoring-Specific Components**
*   **The Measurement Grid:** A specialized list component using `surface_container_lowest`. Labels are aligned left, values aligned right in a monospaced-style Inter variant for technical clarity.
*   **Fabric Swatch Cards:** Square aspect ratios with `lg` (0.5rem) roundedness. No borders; use the fabric image itself to define the shape.

---

## 6. Do's and Don'ts

### **Do:**
*   **Do** embrace "Dead Space." If a screen feels empty, it’s likely working.
*   **Do** use `primary_fixed_dim` for "soft" alerts or notifications—it’s more professional than a harsh error red.
*   **Do** align text-heavy content to a narrow, editorial-style column (centered or slightly offset) rather than stretching it across the screen.

### **Don't:**
*   **Don't** use 100% black. The "on-surface" color is `on_background` (#2d3335), which is a deep charcoal that feels more organic and premium.
*   **Don't** use standard "drop shadows" on buttons. If a button needs to stand out, use a color shift, not a shadow.
*   **Don't** use dividers. If you feel the urge to draw a line, add 24px of padding instead.