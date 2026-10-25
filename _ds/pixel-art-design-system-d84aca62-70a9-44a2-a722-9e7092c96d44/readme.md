# Pixel Art Design System

A retro, game-inspired design system for **Pixel Art**: a gamified, beginner-friendly learn-to-code experience that feels like a cozy 16-bit adventure. Night-sky navy UI, chunky coin-yellow buttons, pixel-font headlines, full-bleed pixel-art scenes, and XP/badge rewards.

## Sources
- **Brief:** company description "Pixel Art"; reference site **https://www.codedex.io/** for visual context.
- **Screenshots:** six landing-page captures (hero, world map + stats, editor feature, challenge card, Club band, final CTA). They came from the attached `pixelart/` folder and were re-uploaded to `uploads/shot-1.png` … `shot-6.png`.
- There was no codebase, Figma file or logo. All values were measured from the screenshots. This is an **original system in the style of** the reference. It does not copy the reference's logo, illustrations, characters or copy.

## Products represented
1. **Marketing website:** a long, scrolling landing page (`ui_kits/website/`).
2. **Learning app:** a split-pane lesson and code editor with terminal and XP rewards (`ui_kits/learn/`).

---

## CONTENT FUNDAMENTALS
- **Voice:** a friendly guild-master. It is encouraging, playful and plain-spoken, and never talks down. Game words carry the metaphor: *quest, level up, XP, badges, character, adventure, club, chops*.
- **Person:** second person ("you", "your"). "We/our" appears only for the team or product ("Our interactive exercises…", "something we are going to use a lot").
- **Casing:** sentence case everywhere: headlines ("Level up your learning"), buttons ("Get started", "Submit answer", "Join Club now"), nav ("Learn", "Practice"). The exceptions are uppercase: the Silkscreen eyebrow ("START YOUR"), map-sign tags ("PYTHON") and status badges ("DONE!", "MEDIUM"). Proper nouns such as "Club" are capitalized.
- **Headlines:** short imperatives or invitations of 3–6 words: "Practice your coding chops", "Build an awesome portfolio", "Join the Club", "Ready to build?".
- **Body:** one or two sentences with concrete benefits and lists of languages ("Python, HTML, JavaScript, and more"). The Oxford comma is used.
- **Numbers:** lowercase unit suffix plus "+" ("2m+", "190+", "170k+"). Prices are exact ("$9.99/month").
- **Micro-copy:** a short, cheerful reward and then the next step: "+10 XP · You earned XP for this exercise. Keep it up!", "You got it! Press "Next" to continue."
- **Emoji / sparkles:** used lightly and only inside content, never as UI icons. Examples: 💖 in a code comment, 👋 in an example string, a trailing "·˚✧" sparkle after the hero subtitle. Don't put emoji in headlines or buttons.

## VISUAL FOUNDATIONS
- **Color:** a near-black navy page (`--ink-950 #020414`) carries everything. **Coin yellow** (`--yellow-400`) is the primary CTA, one per view. **Sky blue** is for secondary/submit actions and XP. Accents rotate **yellow → green → purple → pink** for stats and feature icons. **Parchment and gold** mark rewards and challenges. See `tokens/colors.css`.
- **Type:** there are three roles. **Pixel display** (Pixelify Sans 700) is for headlines only. **Pixel UI labels** (Pixelify Sans 400) are for buttons and tabs. **Silkscreen caps** are for eyebrows and map signs. **Mulish** is for all reading text. **IBM Plex Mono** is for code. Headlines use wide, balanced lines, and body text is 16–19px at 1.6 line-height.
- **Backgrounds:** full-bleed **pixel-art scenes** (landscape hero, isometric world map, town square) alternate with flat navy sections. There is one gradient band per page (the Club purple-blue `--gradient-club`). Scenes fade into navy at the bottom (`--gradient-scene-fade`). There are no textures or noise on the UI surfaces themselves.
- **Imagery vibe:** saturated but warm 16-bit palettes (teal skies, pine greens, pink blossoms, magenta mountains), crisp pixels, no blur. Always render with `image-rendering: pixelated`. Small pixel characters peek over the edges of cards and frames.
- **Corners:** there are two families. Interactive chrome (buttons, inputs, checkboxes, dialogs) uses **notched pixel corners** (`--clip-notch-sm/md`), which look square with the corner pixel bitten out. Framed media and reward cards use **soft rounds**: 12px for windows, 20px for video/map, 28px for the gold card frame. Pills are only for status badges.
- **Borders:** 2px pixel borders. Dark outline on yellow buttons, light grey on outline buttons, navy on map signs. Hairline 1px `--border-subtle` divides app panels.
- **Shadows:** the signature is the **hard inset bottom bevel** (`--bevel-yellow`: `inset 0 -4px 0`), which makes buttons read as physical keys. Map signs and pixel elements use **hard offset shadows** with no blur. Soft blurred shadows (`--shadow-card`) are only for floating media frames and overlays.
- **Cards:** app panels are navy (`--bg-surface`) with a hairline border and 12px radius. The challenge card is a gold gradient frame around a parchment panel with a slate code block inside. Never use colored left-border cards.
- **Hover:** fills lighten one step (yellow-400 → 300, blue-400 → 300, ink-850 → 750). Nav links turn yellow. There are no opacity fades on buttons.
- **Press:** the bevel collapses from 4px to 1px and the label drops 2px, like a key press. There is no scale-down.
- **Animation:** stepped and sprite-like (`--ease-pixel: steps(4)`) for toggles, progress fills and bobbing characters. `--ease-bounce` is for reward pops. Typewriter headlines use a blinking block cursor. Durations are short (80–220ms). No parallax and no long fades.
- **Transparency / blur:** used rarely. The dialog scrim is `--bg-overlay` (navy at 72%), and hero subtitles get a soft text-shadow for legibility over art. No glassmorphism or backdrop blur.
- **Layout:** the content container is 1024px (1200px for feature rows). Sections have about 96px vertical padding. There is a sticky 52px top nav with a 2px bottom rule. Feature rows alternate media and text 50/50. Stats are a 4-up grid and the Club perks a 3×2 grid.
- **Density:** marketing is airy, with big pixel headlines and lots of navy. The app is dense (13–15px text, tight panels), like a real IDE.

## ICONOGRAPHY
- **System:** **Pixelarticons** (MIT, halfmage): filled glyphs on a 24px grid, stored in `assets/pixel-icons/*.svg` and embedded in the `Icon` component (`ICON_NAMES` lists all 65). This is a **substitution**: the reference site's own pixel icons weren't available, and Pixelarticons is the closest open set in the same style.
- **Usage:** feature icons are 36–48px and each gets one accent color (blue book, green certificate, grey mentors, pink chat, purple code, yellow events). UI icons are 16–24px in `currentColor`. Keep sizes at multiples of 12 where possible, and use `shapeRendering: crispEdges`.
- **Utility icons** (search, moon, chevrons, close, flag, bell) use the same pixel set. The reference uses thin line icons in the nav, but we don't mix line and pixel sets.
- **Emoji:** only inside lesson content and code strings, never as icons. **Unicode:** a sparkle "✧" may trail a hero line, and "#" marks lesson sub-headings in blue.
- **Logo:** **none was supplied.** The brand renders as a "Pixel Art" wordmark in Pixelify Sans 700. Don't draw a mark.

## Fonts
All are Google Fonts, self-hosted in `assets/fonts/` and declared in `tokens/fonts.css`. **These are substitutes**: the reference's proprietary pixel faces weren't available.
- Pixelify Sans (400–700): display and UI labels
- Silkscreen (400/700): caps eyebrows and signs
- Mulish (400–800): body
- IBM Plex Mono (400–600): code

---

## Index
- `styles.css`: entry point (imports only)
- `tokens/`: `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `guidelines/`: foundation specimen cards (Colors, Type, Spacing, Brand)
- `assets/fonts/`: webfonts · `assets/pixel-icons/`: 65 SVG icons
- `components/`: React primitives (below), one `*.card.html` per folder
- `ui_kits/website/`: marketing landing page · `ui_kits/learn/`: exercise editor
- `uploads/`: reference screenshots
- `thumbnail.html`: project tile · `SKILL.md`: agent-skill entry

### Components
- **core/**: Button, IconButton, Icon
- **forms/**: Input, Select, Checkbox, Radio, Switch
- **display/**: Card, Badge, Tag, ProgressBar, Stat, CodeBlock, WindowFrame
- **feedback/**: Toast, Dialog, Tooltip
- **navigation/**: Tabs, Navbar

No source component inventory existed, so this is a standard set sized to the brand.

**Intentional additions** (brand-specific):
- `Icon`: wrapper for the embedded pixel icon set.
- `Tag`: the map-sign plaque.
- `Stat`: the pixel-number social-proof row.
- `WindowFrame`: the pastel browser frame used for showcases.
- `CodeBlock`: lessons and challenges depend on it.

### UI kits
- **Website:** nav, hero, stats and world map, three feature rows, Club band, final CTA, sign-up dialog.
- **Learning app:** header, lesson pane, editor, terminal and toasts, footer, exercise drawer.
