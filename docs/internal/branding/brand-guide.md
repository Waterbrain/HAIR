# HAIR — Brand Guide v2.1

**Project:** HAIR (Home Assistant IR)
**Author:** David Bailey
**Date:** 2026-05-13 *(v2.1 — first locked Device Gallery hero. See Section 14 for change history.)*
**Status:** Living document
**Previous versions:** [`brand-guide-v2.0-archive.md`](./brand-guide-v2.0-archive.md), [`brand-guide-v1.3-archive.md`](./brand-guide-v1.3-archive.md)
**Locked canonical asset:** [`assets/gallery-ha-box-mullet-hero.png`](./assets/gallery-ha-box-mullet-hero.png) — see [`assets/gallery-ha-box-mullet-hero-prompt.md`](./assets/gallery-ha-box-mullet-hero-prompt.md) for the locked prompt and iteration history.

---

## 1. The Big Idea

**HAIR is the barbershop for your smart home's IR devices.**

A neighborhood shop. Walk-ins welcome. Old-school craft, new-school tech. Your TV, your AC, your soundbar — they all come in for a cut, walk out with personality.

The product gives every IR device in your home the control (and personality) it's been missing. The brand wraps that promise in a world that's instantly recognizable, warm, and a little bit cool.

---

## 2. Aesthetic Direction — "Steampunk Sailor Jerry Barbershop"

Sailor Jerry tattoo flash × Victorian-industrial steampunk × classic barbershop ritual × *hair on things you would never expect to have hair*.

A turn-of-the-century barbershop with brass fittings, pneumatic tubes, and gauges that nobody understands anymore. Nobody works there. The chairs are full anyway — full of your TV, your AC, your candle, your Home Assistant box — and every single customer is walking out with a haircut.

**The three ingredients and one punchline:**

| Element | What it brings |
|---|---|
| **Sailor Jerry** | Bold black linework, limited flat-color palette, banners, swallows, daggers, roses, the timeless tattoo-flash craft layered over everything |
| **Steampunk** | Brass and copper, exposed rivets, pneumatic tubes, pressure gauges, polished wood, oxidized metal, leather straps, oil-lamp warmth, mechanical gears, the sense that this technology is built to last 100 years |
| **Barbershop** | The pole, the chair, the mirror, the towel, the comb-and-shears ritual, "walk-ins welcome" — the working-class craft tradition |
| **Hair on things** *(the punchline)* | Photoreal human hairstyles grafted onto IR-controllable devices. A dark-brown mullet on a Home Assistant Box. A handlebar mustache on a wall-mount AC. A Victorian beard on a candle. The HAIR shop styles your hardware. |

Together it reads as: **crafted, confident, a little weird, definitely not corporate, the only barbershop in town that does mini-splits.**

### The Core Concept — "We Put Hair on Things"

The brand name is HAIR. The product makes your IR devices controllable. The shop **gives every device a haircut**. That's the joke, the promise, and the visual hook in one.

Every recurring brand surface answers the question *"what's getting hair today?"* — and the answer is whatever IR-controllable thing makes the joke land hardest. Anything you'd point a remote at is on the menu. The hair is real-looking. The device is real-looking. The collision is the brand.

---

## 3. Tagline & Voice

### Primary Tagline

> **Style Your HAIR.**

Three words. Pun, instruction, and brand promise in one. Use it everywhere — hero copy, t-shirts, the GitHub README's first line, every release announcement.

### Hero Lockup

> # HAIR
> ## Style Your HAIR.
> *Capture every IR command. Control every device. Local-first, always.*

### Supporting Taglines (Rotation)

For social posts, blog headers, easter eggs, release notes:

- **Walk-ins welcome.** *(the workhorse — use this one a lot)*
- Old school. New tricks.
- Open since 2026.
- By appointment, or whenever.
- Sharper than a YAML file.
- Every device deserves a chair.
- From the shop to your stack.
- Local-first. Always sharp.

### Voice — "The Old-School Barber Who's Been to the Future"

Confident, brief, doesn't waste words. Has seen everything. Slightly tattooed. Has opinions. The shop has been there a long time. It doesn't need to oversell.

**Voice principles:**

1. **Brief.** A barber doesn't narrate the haircut.
2. **Confident, not cocky.** We know what we're doing. We don't need to brag.
3. **Warm, not chatty.** The greeting matters. The small talk doesn't.
4. **Anti-cloud, pro-local.** Says it once, doesn't preach.
5. **Pun-curious, never pun-drunk.** The puns live in marketing. The product UI is clean.

**Voice in practice:**

| Surface | Don't say | Say |
|---|---|---|
| Empty state | "Looking a little plain. Let's give this thing some style." | "Empty shop. Let's get you a chair." |
| Capture error | "Hmm — couldn't catch that signal. Let's try again." | "Missed it. Take a seat, we'll go again." |
| Success | "Looking good. ✨" | "That'll do." |
| Welcome | "Welcome to the show!" | "Walk-ins welcome. Take any chair." |
| 404 | "Oops! This page doesn't exist." | "Closed for the day. Be right back." |

---

## 4. The Pun Budget

**Critical brand principle.** The HAIR/barbershop puns are seasoning, not the meal.

### Pun-encouraged surfaces ✓

- Marketing site hero copy
- Release announcement headlines
- HACS listing description
- Social media posts
- Easter eggs in empty states
- Stickers, t-shirts, posters
- Blog post titles

### Pun-forbidden surfaces ✗

- Error messages (be clear, not cute)
- Setup/config flow (be fast, not flashy)
- Documentation (be useful, not clever)
- Diagnostics (be precise)
- Anything safety-relevant

**Why:** Make the marketing fun. Make the product invisible. Users should feel clever for finding HAIR — not annoyed by us reminding them of the name every screen.

---

## 5. Visual Identity — The Logo System

### The Master Brand Mark: The Pneumatic Barber Pole

The **barber pole** is the brand mark. Iconic, scales to a favicon, recognizable across cultures, stable enough that AI image models render it consistently. For HAIR v2 the pole is reframed as a **brass-and-glass steampunk apparatus**: the classic red/white/navy spiral now lives inside a copper-banded glass cylinder, the cap and finial are oxidized brass instead of chrome, and the whole thing sits on a riveted brass plinth with a small pressure gauge at the base. It looks like something a barber commissioned a watchmaker to build in 1898.

We use a **prompt-standardized, run-variable** approach: every logo asset is generated from the same master prompt family. We accept variation between runs as part of the brand — controlled inconsistency, unified by the prompt.

### Master Logo Prompt (v3 — LOCKED 2026-05-13)

This is the canonical prompt for the primary HAIR brand mark. All logo assets in the family are generated from this prompt or one of its named variants below.

> A Sailor Jerry American traditional tattoo flash design on a cream textured background with subtle aged paper grain. A steampunk barber pole stands vertically at the center — red, white, and navy spiral stripes inside a polished glass cylinder banded with three horizontal copper rings. The pole has an oxidized brass cap on top with a small round pressure gauge set into it, and a matching brass finial below. The cylinder is mounted onto a riveted brass plinth at the base, with two thin copper pipes curving out and away from the plinth like exhaust tubing. A small pressure gauge with a black needle is fitted to the side of the plinth. The pole is wrapped diagonally by a large, dominant cream-colored ribbon banner that takes up the central 50% of the composition. The banner reads "HAIR" in oversized bold serif tattoo-style letterforms — letters tall, thick, deep red with black outlines and subtle drop shadow, filling the entire banner. No subtitle, no secondary text. The banner has classic Sailor Jerry shading and curls at each end. Bold black tattoo-style outlines throughout. Palette: cream, deep red, navy blue, bone white, antique brass, oxidized copper, gunmetal accents. No green, no pink, no neon. Centered vertical composition.

**Why this prompt won the v2 → v3 iteration:**
- Pole reframed as Victorian-industrial apparatus — brass, copper, glass, gauges, rivets
- Tiki and hibiscus base dropped entirely, replaced with a riveted brass plinth and exhaust copper tubing
- Cyberpunk neon dropped — the warm metals carry the contrast against the cream background
- HAIR wordmark still dominates ~50% of vertical real estate (the banner remains the focal point)
- The pole still reads instantly as a barber pole; the steampunk treatment is the period costume, not a reskin

### Logo Variant Prompts (Same Brand, Different Asset)

Each variant starts from the master prompt, with the noted modifications:

**Variant A — Wordmark-Only (cramped surfaces, headers)**
> [Master prompt] — but remove the entire barber pole, the brass plinth, the copper tubing, and the pressure gauges. Show only the cream-colored ribbon banner with "HAIR" in oversized bold serif tattoo-style letterforms, deep red with black outlines and drop shadow, on a cream textured background. Sailor Jerry shading and ribbon curls at each end. Optionally, two small brass rivets at each end of the banner where it would be tacked to a wall. No other elements.

**Variant B — Pole-Only (favicon, app icon, sidebar icon)**
> [Master prompt] — but remove the ribbon banner and the "HAIR" wordmark entirely. Show only the steampunk barber pole: red, white, and navy spiral stripes inside a polished glass cylinder banded with three copper rings, oxidized brass cap with a small pressure gauge set into it, brass finial below, mounted on a small riveted brass plinth. Two short copper pipes curving out from the plinth. Bold black tattoo-style outlines. Cream textured background. Centered, vertical composition. Designed to read clearly at favicon and 32px sizes — keep details simple, silhouette legible.

**Variant C — Horizontal Lockup (site headers, email signatures, social cards)**
> A Sailor Jerry American traditional tattoo flash design on a cream textured background, in a wide horizontal composition. On the left, a large cream-colored ribbon banner reads "HAIR" in oversized bold serif tattoo-style letterforms — deep red with black outlines and drop shadow, classic Sailor Jerry shading and curls at each end. On the right, a steampunk barber pole stands vertically: red, white, and navy spiral stripes inside a polished glass cylinder banded with three copper rings, oxidized brass cap with a small pressure gauge on top, brass finial below, mounted on a riveted brass plinth with copper exhaust tubing curving away. Bold black tattoo-style outlines throughout. Palette: cream, deep red, navy blue, bone white, antique brass, oxidized copper, gunmetal accents.

**Variant D — Shop Sign (full "HAIR — IR Stylists" version, formal contexts)**
> [Master prompt] — but add a smaller secondary banner curling beneath the main "HAIR" banner, reading "IR STYLISTS" in stencil-style condensed lettering. Both banners cream-colored, both with Sailor Jerry shading and curls. The pole is mostly hidden behind the two banners — only the brass cap and the pressure gauge peek out at the top, only the brass plinth and copper tubing show at the bottom.

### Prompt Modifier Library (Optional Variations)

Append any of these to a base prompt for occasional thematic variations while staying on-brand:

- *"...with a small dagger tattoo crossing behind the pole"*
- *"...with a single swallow tattoo perched on top of the brass cap"*
- *"...with the pressure gauge needle pegged into the red zone"*
- *"...with a small American traditional rose at the base of the banner"*
- *"...with a wisp of steam curling from the top of the brass cap"*
- *"...with the spiral stripes rendered as if mid-rotation, slightly motion-blurred"*

### Logo Asset Family

Five marks, all generated from the prompt family above:

| # | Asset | Use |
|---|---|---|
| 1 | **Primary logo** | Steampunk pole + HAIR wordmark on banner — main brand mark |
| 2 | **Wordmark only** | "HAIR" tattoo-flash banner alone — when the pole would be redundant |
| 3 | **Pole only** | Standalone pneumatic pole — favicon, app icon, sidebar icon in HA |
| 4 | **Shop sign** | Full "HAIR — IR Stylists" double-banner version — site headers |
| 5 | **Tattoo flash mark** | A single device-with-hair tattoo design — stickers, social secondary |

### Logo Placement Rules

- Always allow generous breathing room (logo height of clear space on all sides)
- Never recolor outside the brand palette
- Never stretch or distort
- Acceptable on: cream, bone white, deep navy, weathered-paper backgrounds
- Avoid on: busy photographs, brand red (clashes with pole), any green, any neon
- Minimum size: 32px tall for digital, 0.5 inch for print
- For favicon use: simplified pole-only version — drop the side gauge and tubing if they don't read at 16px

---

## 5.5 The Device Gallery — Hair on Things

### The Concept

HAIR v2 has **no mascot character**. There is no Hank, no troll, no human stand-in. The recurring cast of the brand is the **devices themselves**, each wearing a signature human hairstyle. The HAIR shop *puts hair on things*. The "things" are the recurring stars.

This is structurally better than a single mascot:

- The brand name pays off literally every time anyone sees a brand asset
- The cast scales with the product — every new device type HAIR supports is a new face for the brand
- The joke compounds: a TV with a mullet is funny once, a whole shop full of differently-coiffed appliances is the world
- There's no canonical character that has to be defended across every render — the gallery rotates

### The Hair Rule

The hair is **photorealistic**. The device is **photorealistic**. The collision is the entire joke. AI image generators are very good at hair on humans and very good at rendering devices; smashing them together is what modern generative models do best.

- Hair must look like real human hair — strand-by-strand, light catching, the works
- Hair must be *grafted onto* the device in a way that respects the device's actual surface and silhouette
- Hair must be styled with a clear, named hairstyle (pompadour, mullet, handlebar, etc.) — not just "some hair"
- No cartoon hair, no flame stylization, no flat-color hair zones. Real. Hair.
- Where the hair meets the device, the seam is honest — sometimes it sprouts from a vent, sometimes it grows under the bezel, sometimes it just *is there* like the device was born with it

### The Locked Cast — Initial Roster

Eight device archetypes, each with a single signature hairstyle. These are the recurring stars. Future archetypes (smart bulbs, fireplaces, garage doors, anything IR or IR-adjacent) get added to the cast as needed, but each new entry must lock to one signature look.

| # | Device | Signature Cut | Personality |
|---|---|---|---|
| 1 | **Home Assistant Box** *(hero device — LOCKED v2.1)* | 1980s steampunk-styled mullet, dark brown, dramatic top volume with flowing back curtain, small leather-and-brass hair tie | The hometown favorite. The reason the shop exists. The face on the window sticker. *See [`assets/gallery-ha-box-mullet-hero.png`](./assets/gallery-ha-box-mullet-hero.png) for the locked render.* |
| 2 | **Wall-mount AC / mini-split** | Tom Selleck handlebar mustache across the bottom face | Quiet, dependable, slightly intimidating. Has stories. |
| 3 | **Soundbar** | Long Fabio-style rocker mane, blonde, flowing | Loud, dramatic, fronts the band. |
| 4 | **Ceiling fan** | Twin braided pigtails hanging from opposing blades | Spins all day. Pigtails fly out. Cheerful idiot. |
| 5 | **Pillar candle** | Full Victorian gentleman's beard with waxed mustache tips | The shop's eccentric professor. Burns the midnight oil. |
| 6 | **Projector** | Sharp pencil mustache (because it projects a fine line) | Theatrical. Slightly French. Insists on dimmed lights. |
| 7 | **TV** | *TBD — open candidates: rat tail (short cropped cut with one thin braid trailing down the back), or 90s curtains parted in the middle. Mullet was originally assigned here but moved to device #1 (HA Box).* | Business up front, party in back. Plays sports. *Awaiting cut decision.* |
| 8 | **IR remote control** | Comb-over (the remote is losing its hair on the inside, too) | Aging, dignified, doing its best. Crowd favorite. |

### Master Prompt Template — Device Gallery Hero (Collage Approach, LOCKED v2.1)

The brand hero is a **mixed-media collage**: a flat Sailor Jerry tattoo flash illustration of the device, with a single photoreal element (the hair) composited on top. This approach was validated against the HA Box render and is now the canonical hero treatment. See [`assets/gallery-ha-box-mullet-hero-prompt.md`](./assets/gallery-ha-box-mullet-hero-prompt.md) for the full validated reference prompt.

The template below is a shortened scaffold; the full validated reference prompt has the iteration-tested specifics for hair anchoring, prop placement, text suppression, and palette discipline. Use that as the actual generator input. The scaffold here is for understanding the structure.

**Scaffold structure:**

> A Sailor Jerry American traditional tattoo flash style illustration with comic-book panel composition, rendered as a wide 16:9 banner. Bold uniform-weight black outlines, flat color fills in a limited Sailor Jerry palette, no gradients.
>
> **MIXED-MEDIA RULE:** Everything except the hair is a flat illustration. The hair is a high-resolution photograph composited onto the illustration. The contrast is the joke.
>
> The {DEVICE_DESCRIPTION} sits on a muted bench against a cream paper background. The device is illustrated in flat Sailor Jerry style with the Home Assistant logo (rounded-corner house silhouette containing a circuit-tree design — vertical stem with three filled circular nodes) on its visible face.
>
> Growing through the upper surface of the device — which has no top-edge outline, the chassis surface acting as scalp — is a photoreal {HAIRSTYLE_DESCRIPTION} of real human hair, color {HAIR_COLOR}, with full strand-level studio-photography detail. Individual hair shafts emerge directly through the chassis surface; small slivers of chassis-blue are visible between parted strands as the implied scalp.
>
> The hair is rendered as a magazine-style photograph collaged onto the tattoo flash drawing. No outline around the hair silhouette. No comic shading on the hair.
>
> Sailor Jerry secondary props (shears, comb, ribbon banner reading the device's tagline) sit distributed around the device, never grouped. The headline reads "HAIR Styling." in deep red bold serif tattoo lettering across the top of the frame.

**Field substitutions for each archetype:**

| Archetype | DEVICE_DESCRIPTION | HAIRSTYLE_DESCRIPTION | HAIR_COLOR |
|---|---|---|---|
| **HA Box** *(locked)* | a compact Home Assistant mini-PC, a small rounded-edge cube in Home Assistant brand blue (#41BDF5) with antique brass rivets at the corners and the Home Assistant logo centered on the front face | a large, dramatic 1980s mullet with steampunk grooming sensibility: dramatic top volume, swept up and back with a clean side part, with a long flowing back curtain trailing behind. A small leather-and-brass hair tie binds a section of the back curtain | rich dark brown with multi-tonal variation (five tones: espresso roots #2E1A0F, dark chocolate body #4B2E1E, walnut mid-tones #6B4423, chestnut warmth #7A4B2E, walnut highlights #8B5A3C) |
| Wall AC | a white wall-mounted ductless mini-split air conditioner with a long horizontal vent, illustrated in flat Sailor Jerry style | a thick Tom Selleck handlebar mustache spanning the unit, with full waxed and curled tips, anchored along the upper edge of the air output vent | rich chestnut brown |
| Soundbar | a slim black horizontal soundbar with a fabric speaker grille, illustrated in flat Sailor Jerry style | a long Fabio-style flowing rocker mane reaching well past the unit, gently windswept, anchored along the top edge of the soundbar | sun-bleached blonde with caramel lowlights |
| Ceiling Fan | a five-blade dark wood ceiling fan with brass-finish accents, viewed slightly from below, illustrated in flat Sailor Jerry style | two long braided pigtails tied with red ribbons, hanging from two opposing fan blades | warm chestnut brown |
| Candle | a tall ivory pillar candle, lit with a soft visible flame, illustrated in flat Sailor Jerry style | a full Victorian gentleman's beard with intricately waxed and curled handlebar mustache, wrapping the upper third of the candle just below the wick | silver-grey, distinguished |
| Projector | a small black home cinema projector with a single front lens, illustrated in flat Sailor Jerry style | a sharp pencil mustache, thin and precise, directly above the projector lens | jet black |
| TV | a slim modern flat-screen TV (off, dark screen) on a small wooden stand, illustrated in flat Sailor Jerry style | *TBD — see Locked Cast above* | *TBD* |
| IR Remote | a vintage chunky black plastic TV remote with rubber buttons, lying flat, illustrated in flat Sailor Jerry style | a distinguished comb-over of thin grey hairs carefully arranged across the upper third of the remote, where a forehead would be | thin silver-grey |

### Style Juxtaposition Rules

The brand operates in three visual modes (defined in Section 8). The Device Gallery shows up in all three, with these rules for how realistic the hair gets in each:

- **Mode 1 — Collage hero (LOCKED, validated against HA Box render).** Device illustrated in flat Sailor Jerry tattoo flash style (bold black outlines, limited flat fills, brand palette). The hair is a high-resolution photograph composited onto the flat illustration as a magazine-style collage. The contrast between the flat illustrated device and the detailed real hair is the entire joke. Print sheets, hero banners, marketing, social.
- **Mode 2 — Pure tattoo flash flat (stickers, merch-style art).** Same flat Sailor Jerry treatment as Mode 1, but the hair is also illustrated flat (no photoreal element). Used when the print medium can't reproduce photo-illustration mixing cleanly, or when a fully flat sticker is preferred. Lower priority than Mode 1.
- **Mode 3 — In-product illustrations.** Device illustrated cleanly in the simplified house style. Hair rendered with visible strand texture but in 2-3 tonal zones (no full photoreal here — would be too busy in a UI). Bold black outlines on the device, finer linework inside the hair. Restrained.

The historical Mode 1 framing (full photoreal device + photoreal hair + photoreal environment) was explored during v2.0 iteration and not validated. The collage approach in current Mode 1 is the brand hero treatment.

### Gallery Usage Rules

- **The cast is the cast.** New devices can join the gallery (with David's signoff), but the existing eight don't get redesigned. Pompadour TV is wrong. Mullet AC is wrong. Lock and respect.
- **One signature look per device.** No scenario variations on hair. The HA Box always has a mullet. The candle always has the Victorian beard. Variety comes from *which device* is on screen, not from "today the HA Box has bangs."
- **No props on the hair.** No tiny Santa hats on the mullet, no sunglasses on the candle. The brand stays clean. Seasonal beats come from the *environment* (December counter has a tiny wreath on the wall, not on the device). The small leather-and-brass hair tie on the HA Box mullet is the exception that proves the rule — it's a steampunk grooming detail that's part of the locked look, not a seasonal prop.
- **Hair color is locked per device.** See the substitution table above. The HA Box mullet is always the five-tone dark brown palette specified. Drift on hair color drifts the character.
- **Devices appear alone in hero portraits.** Group shots (the "shop floor" lineup) are allowed for marketing — see the Family Portrait below — but each individual gallery render is one device, centered, getting its glamour shot.
- **No human faces or hands in gallery renders.** The shop is staffed by ghosts. The hair appeared overnight. Keep the focus on the device.
- **No merch, AI-generated assets only.** Same posture as v1.3: this is a software project with a fun visual layer, not a streetwear brand.

### Gallery Family Portrait (the "Shop Floor" Hero)

The hero marketing image for the brand is the **family portrait** — all eight archetypes lined up on a counter, each in profile, each with its signature cut. This is the HAIR equivalent of the wall of headshots in a real barbershop. It runs across the top of the README, the HACS listing, and the project's launch announcement.

The family portrait follows the same mixed-media collage approach as the individual hero (Sailor Jerry illustration + photoreal hair), scaled out to all eight devices in one frame.

**Family Portrait Prompt (will need a render-time pass once the TV cut is locked):**

> A wide horizontal Sailor Jerry American traditional tattoo flash style illustration on a cream textured paper background. Bold black tattoo outlines, flat color fills, Sailor Jerry palette. Eight household electronic devices stand in a row on a muted bench, each illustrated in flat Sailor Jerry style. From left to right: (1) a compact Home Assistant mini-PC cube in HA brand blue (#41BDF5) with the HA logo on its face, (2) a white wall-mount mini-split AC with a long horizontal vent, (3) a slim black soundbar with a fabric grille, (4) a dark wood five-blade ceiling fan viewed slightly from below, (5) a tall lit ivory pillar candle, (6) a small black home projector with a front lens, (7) a slim modern flat-screen TV on a wooden stand, (8) a vintage chunky black plastic TV remote.
>
> Each device wears a different signature hairstyle of fully photorealistic human hair, composited on top of the flat illustration as a magazine-style collage: (1) HA Box with a dramatic 1980s dark-brown steampunk mullet with leather-and-brass hair tie, (2) AC with a chestnut-brown Tom Selleck handlebar mustache, (3) soundbar with a long blonde Fabio mane, (4) fan with two braided chestnut pigtails tied in red ribbons on opposing blades, (5) candle with a silver-grey Victorian beard and waxed handlebar mustache, (6) projector with a precise jet-black pencil mustache, (7) TV with [TBD cut], (8) remote with a thin silver comb-over.
>
> The background is a flat-illustrated steampunk barbershop wall: hammered copper sheets, exposed brass piping running horizontally, a row of small pressure gauges, oil lamps on brass sconces, a leather strop hanging on a brass hook. A single brass-and-glass barber pole stands on the far right edge of the frame, drawn in flat Sailor Jerry style. The hair on each device is the only photoreal element. The hair-on-illustration contrast is the entire visual joke, repeated eight times across the frame. No people, no banners with text other than possibly a single "HAIR — IR Stylists" sign painted on the back wall.

### Why This Replaces a Mascot

A mascot is a single character that has to carry the brand's warmth across every surface. That's a tall order, and v1.3's Hank required eight rounds of iteration to lock and a permanent reference image to defend. The Device Gallery distributes that warmth across an ensemble cast, which means:

- Failure modes are smaller — one bad device render doesn't break the brand, it just doesn't ship
- The brand stays surprising — each new render is a new face, not the same character in a new pose
- The brand argument writes itself — "what device should I show today?" is easier than "what is Hank doing today?"
- The joke literally is the product — HAIR puts hair on the IR things, and every render reinforces that

---

## 6. Color Palette

The v2 palette drops cyberpunk neon (Neon Pink, Electric Cyan) and tropical accents (Tiki Wood) and mascot-specific colors (Hank Orange, Sailor Jerry Yellow). It adds the warm-metal range that anchors the steampunk world. The Barber Red / Deep Navy / Cream Linen / Bone White anchor stays intact. The v2.1 update adds the **HA Brand Blue** (the chassis color of the HA Box hero device) and documents the **Hair Palette** (a separate five-tone palette used for the photographic hair element in the Device Gallery).

### Primary Brand Palette

| Color | Hex | Role |
|---|---|---|
| **Cream Linen** | `#F4EBD9` | Primary background, paper, "shop wall" |
| **Barber Red** | `#C8102E` | Primary brand red, the pole stripe, headline lettering |
| **Deep Navy** | `#1A2B4A` | Primary text, ink lines, the pole stripe, illustration outlines |
| **Bone White** | `#FBF8F1` | Surfaces, cards, the pole stripe |
| **HA Brand Blue** | `#41BDF5` | The Home Assistant Box chassis color. The single high-saturation cool color in the palette. Standardized to match the SMART Sniffer sibling brand. |
| **Ocean Teal** | `#2A8B8B` | Secondary accent, oxidized patina, retained from v1 |
| **Antique Brass** | `#B08D57` | Steampunk apparatus, gauges, plinth, frames, rivets, shear blades |
| **Oxidized Copper** | `#A85A3A` | Copper banding, exhaust tubing, secondary metal accent |
| **Gunmetal** | `#3B3F45` | Riveted plate, mechanical gears, restrained accent |
| **Oxblood** | `#6E1E1E` | Leather strop, smock detail, deep accent over Barber Red |
| **Tobacco Leather** | `#8A5A3B` | Aged leather, hair-tie wraps, chair upholstery, warm secondary |
| **Sailor Jerry Gold** | `#F2C14E` | Headline drop shadow, brass tone highlights, accent only |
| **Muted Bench** | `#E6D5B8` | Recessive bench / surface color in the Device Gallery hero renders — fades into the cream background |

### Hair Palette (for photographic hair compositing)

Used for any Device Gallery character wearing dark hair (HA Box and others as they get rendered). These tones are not flat zones — they appear as multi-tonal variation across individual strands in photographic rendering, never as a single block. Documented here so future hero renders match the locked HA Box reference.

| Color | Hex | Role |
|---|---|---|
| **Espresso Root** | `#2E1A0F` | Deepest tone, at the very base of strands where they emerge from the chassis |
| **Dark Chocolate** | `#4B2E1E` | Dominant base color through the body of the hair |
| **Walnut Brown** | `#6B4423` | Mid-tone strands woven through, visible especially in the styled top |
| **Chestnut Warm** | `#7A4B2E` | Warmer strands threaded sparingly for variation |
| **Walnut Highlight** | `#8B5A3C` | Lightest tone, only at the peaks of the styled crown where studio light reflects off the pomaded surface |

Other devices in the gallery wear different hair colors (the AC's chestnut brown, the soundbar's blonde, the candle's silver-grey, etc.). Each device-specific palette will be documented in its prompt file as it's locked.

### Palette Usage Rules

- **Cream Linen** is the default background. Treat it like the wall of the shop.
- **Barber Red + Deep Navy + Bone White** is the classic trio — these do the heavy lifting in any layout. The pole, the wordmark, and most type.
- **Antique Brass + Oxidized Copper** are the steampunk metals — use for apparatus, frames, gauges, decorative dividers. They replace the role tiki wood and chrome played in v1.
- **Gunmetal + Oxblood** are deep accents — use sparingly for mechanical detail, leather, or to ground a busy composition. Never use Gunmetal as a substitute for Deep Navy in body text.
- **Tobacco Leather** is the warm secondary — the chair, the strop, the smock. Pairs naturally with Antique Brass.
- **Ocean Teal** is retained as an occasional patina or secondary accent — never as a primary, never as a substitute for green.

### Avoid

- Tech blue (the default HA palette) — we are intentionally not that
- Pure black (#000000) — use Deep Navy or Gunmetal instead, they're warmer
- Pure white (#FFFFFF) — use Bone White or Cream Linen, the warm tones matter
- Green (other than Ocean Teal patina) — clashes with the palette identity
- Neon anything — the v2 brand does not glow. The metals carry the contrast.
- Modern chrome / cool silver — replace with Antique Brass or Gunmetal

---

## 7. Typography

### Display / Wordmark

A bold slab serif or western-style display font. Hand-painted barbershop window energy. Weathered, confident, doesn't apologize.

**Try:** Recoleta Bold, Playfair Display Black, Rosewood Std, or commission a custom hand-lettered "HAIR" wordmark for the long term.

### Sub-display / Tags / Signage

Stencil or condensed sans-serif. Reserved for short callouts: "OPEN," "WALK-INS WELCOME," "STYLE YOUR HAIR."

**Try:** DIN Condensed, United Sans, Compacta, Bebas Neue.

### UI / Body

Clean modern sans, gets out of the way. The vintage stays in the marketing; the product UI stays accessible and fast.

**Use:** Inter or Geist.

### Accent Script

A bold brush script for occasional flair — captions on illustrations, signed notes from the dev, hand-lettered shop-window copy.

**Try:** Permanent Marker, Cookie, or a Sailor Jerry-style brush script.

---

## 8. Visual Asset System

The brand operates in **three visual modes**, each suited to different surfaces. The Device Gallery (Section 5.5) shows up in all three; the modes define *how* the gallery is rendered for that surface.

The v2.1 update reorders the modes based on what was actually validated during iteration: the **collage approach** (illustrated device + photoreal hair) is the locked brand hero, not the pure-photoreal cinematic shot that v2.0 originally proposed.

### Mode 1: Collage Hero — Illustrated Device + Photoreal Hair (LOCKED)

**Sailor Jerry tattoo flash illustration of the device, with a single photoreal element (the hair) composited on top.**

This is the brand hero mode, validated against the HA Box render ([`assets/gallery-ha-box-mullet-hero.png`](./assets/gallery-ha-box-mullet-hero.png)). It's used for the README header, HACS thumbnail, launch announcements, marketing carousels, and large-format posters.

How it works:

- The device sits in flat Sailor Jerry tattoo flash style: bold black outlines, flat-fill colors in the brand palette, decorative banners and Sailor Jerry flourishes around it
- The hair grows through the top of the device as a high-resolution photograph composited onto the illustration — magazine-collage style, no outline, no comic shading
- A "HAIR Styling." headline anchors the top of the frame; a small Sailor Jerry ribbon banner (often reading "HA·IR" or the device's tagline) anchors a corner
- Small props (shears, comb) sit distributed around the device, never grouped
- A muted bench surface and cream paper background carry the scene; the bench fades into the background at the edges to focus the eye on the device-and-hair centerpiece

**Two canonical Mode 1 shots:**

**1a — Solo Hero.** A single device with its locked cut. See [`assets/gallery-ha-box-mullet-hero-prompt.md`](./assets/gallery-ha-box-mullet-hero-prompt.md) for the full validated reference prompt and per-device substitutions.

**1b — Family Portrait.** All eight devices in a row, each with its signature cut, each with a photoreal hair element on top of the flat illustration. See the Family Portrait prompt in Section 5.5.

**Use for:** Website hero, README header, HACS listing thumbnail, launch announcements, large-format posters, marketing carousel cards.

### Mode 2: Pure Flat Tattoo Flash (Stickers, Merch-style, Print)

**Same Sailor Jerry tattoo flash style as Mode 1, but the hair is also flat-illustrated (no photoreal element).**

Used when the printing medium can't reproduce mixed-media collage cleanly, or when a fully flat sticker is preferred. Mode 2 is the alternative to Mode 1 for surfaces where the photographic element doesn't render well (cheap printing, screen-print stickers, embroidery, etc.).

Tattoo flash scene seeds:

- HA Box with its dark-brown mullet (flat-illustrated), banner reading "WALK-INS WELCOME"
- Mini-split AC with handlebar mustache, classic roses, banner reading "COOL & WELL-GROOMED"
- Soundbar with Fabio mane, two swallows flanking, banner reading "LOUD AND PROUD"
- Ceiling fan with pigtails, banner reading "ROUND AND ROUND"
- Pillar candle with Victorian beard, classic rose, banner reading "BURNS LATE"
- Projector with pencil mustache, classic dagger, banner reading "DRAMA"
- TV with [TBD cut], banner reading "BUSINESS / PARTY" *(awaiting TV cut decision)*
- IR remote with comb-over, dagger through it, banner reading "STILL TICKING"

**Style rules:**
- Bold black tattoo outlines on the device and the hair
- Flat fills only in brand palette
- Hair rendered in 2-3 tonal color zones, not photoreal
- Banner curls and Sailor Jerry shading on text
- Steampunk accents (brass plate frame, copper rivets, small gauge) allowed as flourishes
- One device per design, centered, print-ready

**Use for:** Stickers, screen-print posters, social cards where the collage doesn't reproduce, fan-shareable flat assets, t-shirt mockups (no merch shipped, but the art reads as merch-ready).

### Mode 3: Illustrated In-Product

**Cleaner, restrained illustrations of the gallery devices for in-product UI states.**

The shop has been quietly cleaning up. Mode 3 illustrations are simpler than Modes 1 and 2, tuned to sit calmly inside a Home Assistant admin panel without screaming for attention. Devices appear with their signature hair rendered in 2-3 tonal zones (visible strand linework, no photoreal). Bold black outlines on the device silhouette, finer linework inside the hair. Limited palette: Cream Linen background, Barber Red / Deep Navy / Bone White for the device, Antique Brass / Tobacco Leather for environment accents.

Scene library:

| Surface | Scene |
|---|---|
| Empty device list | A row of empty barber chairs facing a mirror. A brass pressure gauge on the wall reads "0." *"Slow day at the shop. Add your first device."* |
| Add device flow | A single device silhouette stepping through the shop door, hairstyle not yet visible. *"Walk-ins welcome. What can we do for you today?"* |
| Capture in progress | Device in the chair, cape on, brass scissors and comb hovering above it, the pole's spiral mid-rotation. A small "LISTENING" tag hangs from a brass hook. |
| Capture success | Device facing the mirror, admiring its fresh haircut. *"That'll do."* |
| Capture error | Device tilted in the chair, comb broken on the floor, a small gear on the floor next to it. *"Something's not right. Take a seat, we'll go again."* |
| All commands learned | Device walking out the door with its full hairstyle on display, shop bell mid-ring. *"Come back anytime."* |
| Settings page | "Back of house" — brass tool rack, leather strop, jars of pomade. A small "STAFF ONLY" plate on the door. |
| 404 / error | Closed shop, "BE RIGHT BACK" hand-painted sign hanging in the door. A cat sleeps on the windowsill next to a brass oil lamp. |

**Style:** Restrained Sailor Jerry linework + steampunk environment. Flat fills in brand palette. One clear visual idea per scene. Not cluttered. The pole is steampunk-stylized but unmistakable.

**Use for:** All in-product illustrations.

### Mode Hierarchy

| Surface | Mode |
|---|---|
| Marketing hero, README, HACS thumbnail, launch posters | Mode 1 (Collage: illustrated device + photoreal hair) |
| Stickers, screen-print, flat social cards, merch-style art | Mode 2 (Pure flat tattoo flash) |
| In-product UI states | Mode 3 (Illustrated in-product) |
| Logo marks (everywhere) | Logo system (Section 5) |

### Cross-Mode Consistency Rules

- **The Device Gallery cast is constant across all three modes.** A device's signature hairstyle doesn't change between modes. The HA Box's mullet is a photographic mullet in Mode 1, a flat-illustrated mullet in Mode 2, and a simplified strand-textured mullet in Mode 3.
- **The steampunk environment scales with the mode.** Decorative flat accents in Modes 1 and 2, restrained background in Mode 3. Never absent.
- **Sailor Jerry linework is the brand seal.** It defines the device in all three modes; the difference is whether the hair is photoreal (Mode 1), flat-illustrated (Mode 2), or simplified-strand (Mode 3).
- **No cyberpunk neon, no tropical motifs, no glowing surfaces.** The shop runs on tungsten and brass.
- **The historical pure-photoreal v2.0 Mode 1 framing is deprecated.** It was explored during iteration and didn't validate. If a future render attempts pure photoreal (device + hair + environment all photographic), confirm against the brand owner before shipping.

---

## 9. Voice in Context — Copy Templates

### Website Hero

> # Style Your HAIR.
>
> Capture every IR command. Control every device. Local-first, always.
>
> *Walk-ins welcome.*
>
> [Install on HACS] [See it in action]

### HACS Listing Description

> **HAIR — IR device management for Home Assistant, finally done right.**
>
> Built on HA's native infrared platform (2026.4+). No YAML. No JSON files. No cloud. Just a clean, fast, friendly admin panel for capturing and organizing IR commands.
>
> Walk-ins welcome.

### Release Announcement Format

> 🪒 **HAIR 1.0 — Open for business.**
>
> The shop is officially open. After [N] weeks of soundcheck, HAIR is on HACS.
>
> What's in this release:
> - Capture flow (the cut)
> - Device admin panel (the shop)
> - Remote entity platform (the chair)
>
> Walk in. Get a trim. Walk out with a device that just works.
>
> [Install] · [Docs] · [GitHub]

### About / Team Page

> We're not actually a barbershop.
>
> HAIR is an open-source Home Assistant integration that makes capturing and managing IR commands feel less like data entry and more like getting a haircut.
>
> Built by David Bailey. Available on HACS. MIT licensed. Local-first, always.
>
> *Walk-ins welcome.*

### Empty States (In-Product)

| State | Copy |
|---|---|
| No devices yet | Empty shop. Let's get you a chair. **[Add Device]** |
| No commands captured | Take a seat. Press a button on your remote. **[Start]** |
| No emitters available | Looks like there's no IR hardware connected yet. Set up an ESPHome or Broadlink device first. **[Setup Guide]** |

### Error States (In-Product)

| State | Copy |
|---|---|
| Capture timeout | Missed it. Move closer to the receiver and try again. |
| Hardware error | The chair's empty. Check your IR hardware. |
| Duplicate signal | Looks just like your "[X]" command. Save anyway, or try a different button? |

---

## 10. The Pun Lookup Table

Quick reference for "what do we call X in HAIR-speak?" (Marketing only.)

| Generic term | HAIR-speak |
|---|---|
| The product | The shop |
| Admin panel | The shop floor |
| Settings | Back of house |
| Diagnostics | The mirror (you check yourself out) |
| Installation | Opening day |
| Update | Fresh trim |
| New feature | New service on the menu |
| Bug fix | Cleanup |
| Major version | Grand reopening |
| Documentation | The price list / shop manual |
| GitHub Issues | Customer feedback |
| Contributors | Staff |
| Sponsors | Regulars |
| Beta testers | Walk-ins |
| HACS listing | Storefront |
| Roadmap | Coming soon (window posters) |

**Rule:** Use these in marketing. Translate back to plain language inside the product.

---

## 11. Easter Eggs

Discoverable details that turn a brand into a community.

- **Konami code** in the admin panel — the barber pole on the brand mark spins faster for 5 seconds
- **Time-of-day greeting** — between 9pm and 6am, the welcome text reads *"Open late tonight."*
- **Holiday touches** — the barber pole gets a small ornament in December, sunglasses in July
- **Achievement unlocks** — "First Cut" (capture 1 command), "Regular" (capture 50), "Master Stylist" (set up 10+ devices)
- **The cat** — a small sleeping cat illustration appears on the 404 page. She has a name. She is canon.
- **"Compliment" command** — if a user creates a custom command literally named "Compliment," the test button briefly shows a sparkle animation
- **Hidden device type "Cowbell"** — does nothing, but exists. Captures one command: *"More."*

---

## 12. What This Brand Is Not

To clarify the edges:

- **Not corporate.** No SaaS landing page energy. No stock photos.
- **Not nostalgic LARP.** The Device Gallery — photoreal modern devices wearing real human hair — keeps us from reading as a Pinterest mood board. The steampunk and tattoo flash are the costume, not the substance.
- **Not chaotic.** The system is consistent — the variation lives inside the system, not on top of it.
- **Not exclusive.** "Walk-ins welcome" means everyone — power users, newcomers, kids running their first HA setup.
- **Not the salon.** Salon implies precious. We're the barbershop. We work for a living.
- **Not the band.** No hair metal puns. No album metaphors. The shop is the world.

---

## 13. Asset Wishlist (To Generate / Commission)

Tracking what we need to actually produce for v2. All v1 / v1.3 assets are considered archive and live under `assets/_archive/`.

### Logo system (v3 prompts in Section 5)
- [ ] Master logo (steampunk pole + HAIR banner)
- [ ] Wordmark only (banner)
- [ ] Pole only (favicon-ready, 16-32px legible)
- [ ] Shop sign (full "HAIR — IR Stylists" double-banner)
- [ ] Horizontal lockup (site headers, social cards)

### Device Gallery hero portraits (Mode 1 — eight needed)
- [x] **HA Box with mullet** — LOCKED 2026-05-13. See [`assets/gallery-ha-box-mullet-hero.png`](./assets/gallery-ha-box-mullet-hero.png) and the [locked prompt](./assets/gallery-ha-box-mullet-hero-prompt.md).
- [ ] Wall-mount AC with handlebar mustache
- [ ] Soundbar with Fabio mane
- [ ] Ceiling fan with pigtails
- [ ] Pillar candle with Victorian beard
- [ ] Projector with pencil mustache
- [ ] TV with [TBD cut — rat tail or 90s curtains, mullet moved to HA Box]
- [ ] IR remote with comb-over

### Family portrait (Mode 1)
- [ ] All eight devices lined up on the counter — README header / HACS thumbnail / launch hero

### Tattoo flash (Mode 2)
- [ ] One flash sheet of all eight devices (poster)
- [ ] Eight individual sticker designs (one per device)
- [ ] Social card templates (one per device)

### In-product (Mode 3)
- [ ] Empty device list illustration
- [ ] Add device flow illustration
- [ ] Capture in progress (animated)
- [ ] Capture success
- [ ] Capture error
- [ ] All commands learned
- [ ] Settings / back of house
- [ ] 404 / closed shop with cat

### Type & color
- [ ] Final wordmark typeface decision
- [ ] Hex palette tested for accessibility (WCAG AA contrast) — including new metals
- [ ] Dark mode palette variant

---

## 14. Versioning

This document evolves. Track major changes here.

| Version | Date | Changes |
|---|---|---|
| v1 | 2026-05-08 | Initial branding doc. Locks: Neo-Tiki Barbershop direction, "Style Your HAIR" tagline, "Walk-ins welcome" supporting line, color palette, logo prompt v1. Pending: pole prompt iteration with David. |
| v1.1 | 2026-05-08 | **Logo prompt v2 LOCKED.** Updated Section 5 with the canonical master prompt (HAIR-dominant banner, pole as supporting element, tiki + hibiscus base). Added four named variant prompts (Wordmark-Only, Pole-Only, Horizontal Lockup, Shop Sign) for the full asset family. The "BARBER SHOP" subtitle is dropped from the primary mark to keep the wordmark pure. |
| v1.2 | 2026-05-08 | **Hairy Hank LOCKED as mascot.** Added new Section 5.5 with full character design, locked master prompt, 10-scenario library, wardrobe variants, and usage rules. Hank's hair uses Sailor Jerry tattoo color shading (red→orange→yellow flame) as the default; flame color shifts function as a brand-wide mood indicator across scenarios. Added **Hank Orange (#F28C3F)** to the color palette as the middle band of the flame. AI-generated only, no merch posture confirmed. Pin and pole logo system unchanged — Hank is the *mascot*, the wordmark + pole is the *logo*. |
| v1.3 | 2026-05-08 | **Hank v8 LOCKED as final mascot.** After 8 iteration rounds, the canonical Hank is locked: middle-aged plastic troll doll with a pronounced receded hairline, towering 65-70%-of-canvas Sailor Jerry flame hair (with fluffy fur strand texture), thin gold wireframe glasses on a bulbous nose, working as a barbershop barber in a tobacco-brown leather smock with brass rivets and a small red "HAIR" patch — dressed underneath like a suburban dad on a Saturday (polo collar, cargo shorts, white New Balance, crew socks all visible peeking around the smock). Three-act visual storytelling: hair = "HOLY HAIR," middle = "he's a barber," bottom = "wait, he's a dad too." All scenarios and wardrobe variants updated to reference v8 as the locked baseline. Created `branding/assets/` folder with README pointing to the canonical reference render. Usage rules expanded to lock the hair-to-body ratio, fur texture, troll face, wireframes, hairline, smock, dad-outfit underneath, and belly-button peek as non-negotiable elements. |
| **v2.0** | **2026-05-13** | **Brand reset — Steampunk Sailor Jerry Barbershop direction locked.** Hairy Hank is retired (archived to `assets/_archive/`). Tiki and cyberpunk are dropped entirely. Steampunk joins as an equal partner to Sailor Jerry tattoo flash. The new central concept is **"hair on things"** — photoreal human hairstyles grafted onto IR-controllable devices, with the Device Gallery (Section 5.5) as the recurring ensemble cast in place of a single mascot. Eight archetypes locked: HA Yellow (pompadour), wall AC (handlebar mustache), soundbar (Fabio mane), ceiling fan (pigtails), pillar candle (Victorian beard), projector (pencil mustache), TV (mullet), IR remote (comb-over). Logo system rewritten: barber pole reframed as brass-and-glass steampunk apparatus on a riveted brass plinth, no tiki base. Color palette refreshed: dropped Neon Pink, Electric Cyan, Tiki Wood, Hank Orange, Sailor Jerry Yellow; added Antique Brass, Oxidized Copper, Gunmetal, Oxblood, Tobacco Leather. Visual modes rewritten with explicit photoreal-vs-illustrated juxtaposition rules so the three modes stay coherent. Previous guide archived to `brand-guide-v1.3-archive.md`. |
| **v2.1** | **2026-05-13** | **First Device Gallery hero locked. Collage approach validated; v2.0 pure-photoreal Mode 1 deprecated.** After roughly a dozen iteration rounds against Gemini, the **HA Box with a 1980s steampunk mullet** is locked as the first canonical Device Gallery render and the brand hero asset. The collage approach — flat Sailor Jerry tattoo flash illustration of the device with photographic hair composited on top — became the validated brand mode and is now the new Mode 1. The original v2.0 Mode 1 (pure photoreal cinematic photography) was explored and did not validate; it is deprecated as a primary mode. The original v2.0 Mode 2 (tattoo flash + photoreal hair) is promoted to Mode 1; a new Mode 2 (pure flat tattoo flash, no photographic element) is documented for print/sticker surfaces. **Device #1 renamed from "Home Assistant Yellow" to "Home Assistant Box"** to reflect the actual hardware target. **Hair changed from 1950s pompadour to 1980s steampunk-influenced mullet** with steampunk gentleman's grooming sensibility (visible pomade hold, small leather-and-brass hair tie on the back curtain). **Hair color changed from jet black to a five-tone dark brown palette** (espresso roots, dark chocolate body, walnut mid-tones, chestnut warmth, walnut highlights), explicitly documented with hex codes in the palette section. **HA Brand Blue (#41BDF5)** added to the primary palette as the HA Box chassis color, standardized to match the SMART Sniffer sibling brand. **HA logo description borrowed from SMART Sniffer**: "rounded-corner house silhouette containing a circuit-tree design — vertical stem with three filled circular nodes." **TV signature cut is now TBD** because the mullet moved to the HA Box. Open candidates: rat tail or 90s curtains. Family Portrait prompt updated to reference the new device names and the collage approach. Master Prompt Template in Section 5.5 rewritten as a scaffold that references the validated reference prompt at `assets/gallery-ha-box-mullet-hero-prompt.md`. v2.0 guide archived to `brand-guide-v2.0-archive.md`. |

---

*Branding by David Bailey. Opinions by an old-school barber who runs the only shop in town that does mini-splits.*

*Walk-ins welcome.*
