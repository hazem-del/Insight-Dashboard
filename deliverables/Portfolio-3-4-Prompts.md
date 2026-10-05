# برومبتين البورتفوليو 3 و4

الصق البرومبت في Claude، وارفع معاه الصور (hazem-studio.webp وhazem-robot.webp وmark-hazem.webp) وملف clients.js، أو الصق الأرقام.

## P3 · Campaign Manager

```
<role>Senior product designer and front-end engineer who builds portfolio sites for performance marketers.</role>

<task>Build ONE self-contained HTML file: a portfolio for Hazem Mohamed, media buyer and e-commerce growth operator in Cairo, designed as an ad account. The visitor should feel they opened his campaign manager, not a website.</task>

<content>Use only the data I attach (clients.js: four accounts, Laser Afandi, Athr, Dahsha Store, KH-ART, with KPIs, charts and tables) plus: 580K+ EGP documented revenue, 1,500+ COD orders, 7,900+ WhatsApp chats in 30 days, 40.77× peak ad set ROAS, 250+ campaigns and ad sets, 300+ creatives. Never invent a number, a client or a testimonial.</content>

<design>
- App shell: fixed left icon rail (Overview, Campaigns, Breakdown, Method, Services, Hire, theme toggle) that becomes a bottom tab bar under 760px; a sticky top bar with an account switcher (avatar, name, role; opens contact details with copy buttons), a date-range chip, a search field that filters the tables live, a "4 accounts live" status and a primary "Start a project" button.
- Palette: light #F2F3EF ground, white panels, ink #15181A, one money green #0B7A55 for actions and good numbers, marker yellow #FFE27A for the one phrase to read, red only for leaks. A full dark theme with the same tokens, following the OS and a toggle.
- Type: Instrument Sans for UI, Instrument Serif italic for the greeting only ("Hi, I'm Hazem."), IBM Plex Mono for labels, IBM Plex Sans Arabic for Arabic lines.
- Overview: greeting card plus an "Ad preview" card styled as a sponsored post, whose image is a drag-to-compare slider between the studio portrait (A) and the AI twin (B), with a one-time auto sweep and keyboard arrows. Six KPI tiles count up when they appear.
- Campaigns card with tabs Campaigns / Ads / Records: clients as table rows (delivery status pill, objective, results, reach or revenue, signature number, window); creatives as ad cards with ROAS or cost per chat and a LOST tag on the losing studio ad; records as a dated table. On phones the campaign table turns into stacked cards. Every row opens a right-side drawer with tabs Overview / Breakdown / Tables, next and previous campaign, focus trap and Esc to close; the screen-recording videos play inside it.
- Breakdown card with a select (funnel, revenue mix, catalogue) and an "Opportunity" callout for the 47% checkout leak. A pricing card for the 770 EGP no-discount decision.
- Method as a five-stage pipeline (Learning, Active, Scaling pills). Services as "People and permissions": 12 switches that are all on; trying to switch one off shakes it and shows "Hazem covers this one too."
- Hire: plan radio cards, a short form, and a live summary whose button opens WhatsApp (+201095109901) with the request filled in. FAQ as a help-centre accordion.
</design>

<build>No libraries. Responsive with no horizontal scroll at 390px, visible focus states, prefers-reduced-motion respected, content visible without JavaScript animations. Output the full file, then list anything you could not find in the data.</build>
```

## P4 · Reels

```
<role>Senior creative technologist who designs portfolio sites as social-media formats.</role>

<task>Build ONE self-contained HTML file: a portfolio for Hazem Mohamed, media buyer and e-commerce growth operator in Cairo, designed as a vertical reels feed. Each reel is one hook and one number, the way he builds ads.</task>

<content>Use only the data I attach (clients.js with four accounts and their KPIs, charts and tables) plus: 40.77× peak ad set ROAS (185.45 EGP spend, 7,560 EGP revenue, AI product photo, broad audience, 22 May 2026); Athr's ABO sweep of 105 creatives with one winner (VID 2, 17.66×, 344 purchases); Laser Afandi's funnel (21,492 sessions, 1,585 add to cart, 1,233 checkout, 650 completed, 583 recovered on WhatsApp); 770 EGP held with no discount (hero SKU 47.3% of revenue, 160,960 EGP, 236 orders); KH-ART cost per chat (3.56 and 4.44 EGP boosted posts against 10.54 EGP for the studio ad). Never invent a number, a comment or a testimonial.</content>

<design>
- Layout: desktop has three columns: a profile and clickable reel list on the left, a 9:16 phone-shaped feed in the centre, and an "Insights · this reel" panel on the right that updates with the active reel and offers "Open the case file". Under 760px the feed is full screen.
- Feed: CSS scroll-snap, one reel per screen, Stories-style progress segments and "Hazem Mohamed n / 14" at the top, a TikTok-style action rail (AI twin, Case, FAQ, Share, Message) and a caption with "original audio · Hazem Mohamed" at the bottom. Content keeps clear of the rail. On light reels the chrome turns dark.
- 14 reels, each a flat colour (cobalt #2547F5, tomato #FF4B23, sun #FFC31F, mint #14B98E, violet #6C43F0, ink #121214, paper #F3EEE5): intro with the portrait and an "AI twin filter" that wipes to the robot with a glowing scan line; 40.77×; 105-creative grid with the winner popping; the checkout funnel with bars; the 770 price tag with a NO DISCOUNT stamp; boosted posts against the studio ad (LOST tag); four case reels with KPIs (two play the Ads Manager screen recordings); the five-step loop; 12 services dropping into a pile; a printed receipt of 10 records; and a closing CTA with plan radios, a store field and a WhatsApp button (+201095109901) that pre-fills the message.
- Type: Bricolage Grotesque at 75–85% width for hooks and huge numbers (sized with container-query units of the feed), Geist for text, Geist Mono for labels, IBM Plex Sans Arabic for Arabic.
- Motion: elements of the active reel rise in with a stagger, numbers count up, bars grow, videos play only while their reel is active. Keyboard ↑ ↓ Space Home End, C opens the case file, T triggers the twin filter. The bottom sheet holds the full case file (KPIs, charts, tables) and the FAQ as pinned questions; Esc closes it.
</design>

<build>No libraries. Deep link to a reel with #r-id. No horizontal scroll, visible focus, prefers-reduced-motion turns the motion off. Output the full file, then list anything you could not find in the data.</build>
```
