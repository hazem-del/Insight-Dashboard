# برومبتين البورتفوليو 3 و4

P3 اتغيّر من Campaign Manager لـ Money Table.

الصق البرومبت في Claude، وارفع معاه الصور (hazem-studio.webp وhazem-robot.webp وmark-hazem.webp) وملف clients.js، أو الصق الأرقام.

## P3 · Money Table

```
<role>Senior creative technologist who builds award-level interactive portfolios with physics and motion.</role>

<task>Build ONE self-contained HTML file: a portfolio for Hazem Mohamed, media buyer and e-commerce growth operator in Cairo, designed as a games table the visitor plays. Every section is a toy that proves one real number. It must be fun on a phone and on a desktop.</task>

<content>Use only the data I attach (clients.js: Laser Afandi, Athr, Dahsha Store, KH-ART with KPIs, charts and tables) plus: 580K+ EGP documented revenue; 1,500+ COD orders; 7,900+ WhatsApp chats; 40.77× peak ad set ROAS (185.45 EGP spend, 7,560 EGP revenue, AI still, broad audience, 22 May 2026); 47% checkout leak (1,233 reached checkout, 650 finished, 583 sent to WhatsApp recovery); Athr ABO sweep of 105 creatives, winner VID 2 at 17.66× with 344 purchases; records 19.99× peak day, 39.78 EGP best CPA, +1,158% orders, +763% profit, 7.37% conversion, 634 month-one orders, 3.56 EGP cheapest chat, 144 EGP target CPA hit. Never invent a number, a client or a testimonial. State in the footer that the toys illustrate real results and are not simulations of them.</content>

<design>
- Look: green felt (#0F3B2D with a fine dot texture), ink #07120E for alternate sections, chalk #F4F0E6 text, gold #F6B93B for money moving, coral #FF6A4D for money lost, mint #79E2B1 for money recovered. The hire section is chalk paper. Type: Unbounded 800–900 for display, DM Sans for text, JetBrains Mono for labels, IBM Plex Sans Arabic for Arabic.
- Hero: the studio portrait centred; the letters of HAZEM MOHAMED and 12 stat chips fall in as Matter.js bodies synced to DOM spans. Drag and throw them (mouse and touch; a touch that misses a body still scrolls the page). Mouse movement blows them; "Shake the table" throws everything; "Meet my AI twin" flips the portrait in 3D to the robot cutout. On phones, tilting the device shifts gravity (ask iOS permission on the Shake tap) and shaking the phone shakes the table.
- Checkout machine: canvas coins fall through a funnel into a chute; a dashed checkout gate; 47% of coins leak out of a side opening, turn coral and land in "Walked away". A WhatsApp recovery switch closes the opening with a mint flap and leakers turn mint and land in "Completed". Live counters, auto-drop when in view, tap the machine to drop coins where you tap.
- 40.77× slot: a lever (drag it down on desktop, button on phones) spins revenue from 0 to 7,560, slams a 40.77× stamp and bursts gold coins; ROAS race bars for the top four creatives below.
- ABO test: 105 physics tiles pile up; "Run the test" kills losers in waves (they turn coral and fall through the floor), then VID 2 flies to the centre, grows 2.4× and shows 17.66× · 344 purchases.
- Cases: four playing cards fanned on desktop with 3D tilt on hover; on phones a swipeable deck (fling the top card, tap to open). Opening a card expands a full-screen case file with a circle clip from the tap point (KPIs, bars, tables, the Ads Manager screen recordings).
- Records: a split-flap board that flips in when seen and re-flips on click. The loop: a draggable dial of five steps that snaps and auto-advances. The stack: 12 service chips in a physics jar you can shake and throw.
- Hire: plan cards, a short form and a printed order slip whose button opens WhatsApp (+201095109901) with the request filled in; FAQ accordion.
- Motion: loader coin flip, Lenis smooth scroll on desktop, GSAP ScrollTrigger word reveals, dark sections dealt in with a rounded clip, a gold cursor on desktop that turns into labels (THROW, DROP, PULL, RUN, OPEN, FLIP, SPIN, SHAKE), circle menu reveal.
</design>

<build>GSAP 3.12.5 + ScrollTrigger, Lenis 1.1.13 and Matter.js 0.20.0 from CDN only. Fixed-step physics per world, worlds paused off screen. If Matter fails to load, show the hero and jar as static stacks. prefers-reduced-motion: pre-settle every world, no auto motion. No horizontal scroll at 360–1440px, visible focus states, Esc closes overlays. Output the full file, then list anything you could not find in the data.</build>
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
