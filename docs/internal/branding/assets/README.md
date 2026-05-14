# Brand Assets — Reference Images

This folder holds canonical reference images for HAIR brand elements. AI-generated assets only.

**Current direction:** HAIR v2 — Steampunk Sailor Jerry Barbershop. See [`../brand-guide.md`](../brand-guide.md).

**Archived direction:** HAIR v1.3 — Neo-Tiki Barbershop with Hairy Hank mascot. Lives under [`_archive/`](./_archive/). Retained for historical reference only; not canonical.

---

## Locked Reference: HA Box with Mullet (v2.1)

**Status:** Locked 2026-05-13. First production-ready brand hero for the HAIR Device Gallery.

- **Image:** `gallery-ha-box-mullet-hero.png` *(drop the rendered file here at this filename)*
- **Prompt:** [`gallery-ha-box-mullet-hero-prompt.md`](./gallery-ha-box-mullet-hero-prompt.md) — the full locked Gemini prompt, color palette, iteration notes, and reroll guidance

This is the canonical hero asset for HAIR. It pairs the Home Assistant box with a steampunk-influenced 1980s mullet and serves as the first locked entry in the Device Gallery. Use it for the README header, HACS thumbnail, launch announcement, and any marketing surface that needs a hero shot.

**Brand-guide reconciliation note:** Section 5.5 of the brand guide locks "HA Yellow + pompadour" as device #1 and "TV + mullet" as device #7. The mullet has been committed to the HA box hero, which means the TV needs a new signature cut and the gallery roster needs updating. Open work; not blocking this asset.

---

## Logo System

**Status:** Awaiting generation against the v3 master prompt (Section 5 of the brand guide).

When the first locked render lands here, save it as:

- `hair-logo-master-v3.png` — primary brand mark (steampunk pole + HAIR banner)
- `hair-logo-wordmark-v3.png` — wordmark-only variant
- `hair-logo-pole-v3.png` — pole-only variant (favicon-ready)
- `hair-logo-shop-sign-v3.png` — full "HAIR — IR Stylists" double-banner

---

## Device Gallery (Mode 1 + Mode 2 hero portraits)

**Status:** First entry locked (HA Box with Mullet, above). Seven remaining device portraits awaiting generation. See Section 5.5 of the brand guide for the master prompt template and per-device substitutions.

Filenames when generated:

- [x] `gallery-ha-box-mullet-hero.png` *(locked 2026-05-13)*
- [ ] `gallery-ac-handlebar.png` — wall-mount AC with handlebar mustache
- [ ] `gallery-soundbar-mane.png` — soundbar with Fabio mane
- [ ] `gallery-fan-pigtails.png` — ceiling fan with pigtails
- [ ] `gallery-candle-beard.png` — pillar candle with Victorian beard
- [ ] `gallery-projector-pencil.png` — projector with pencil mustache
- [ ] `gallery-tv-tbd.png` — TV with TBD cut (rat tail or 90s curtains)
- [ ] `gallery-remote-combover.png` — IR remote with comb-over
- [ ] `gallery-family-portrait.png` — all devices in a line, README header

---

## Asset Pipeline

When new brand assets are generated:

1. Generate using the locked master prompts in the brand guide (Sections 5 and 5.5)
2. Save the final selected render to this folder with the filename above
3. Save the locked prompt alongside the image with a matching filename suffix `-prompt.md`
4. Update this README to flip the checkbox and link the prompt file
5. If a render is rejected, do not save it here — keep prompt iterations in a scratch folder until a final pick lands

---

## Archive

The v1.3 mascot (Hairy Hank, eight iterations) and the v1.3 assets README are preserved in [`_archive/`](./_archive/). They are not the canonical reference for any current brand work. Do not generate new assets against the v1.3 prompts.
