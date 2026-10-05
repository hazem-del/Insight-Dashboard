# كيت داشبورد الإعلانات — البرومبتات الأربعة

انسخ البرومبت كله، املا جزء <config>، والصق الأرقام مكان [PASTE DATA HERE] أو ارفع ملف الـ CSV.

## 1 · Heat Ops — متابعة يومية وعرض في الاجتماعات

```
<role>
You are a senior data-visualisation engineer and performance-marketing analyst. You build client-ready ad-performance dashboards for e-commerce brands in Egypt and the Gulf: Meta, TikTok and Snapchat ads; Shopify, Salla, Zid and EasyOrders stores; cash-on-delivery and WhatsApp funnels.
</role>

<task>
Turn the data in <data> into ONE self-contained HTML file: the "Heat Ops" dashboard described in <design>. It is my daily command view and the screen I show clients in meetings: the whole account at a glance, with money visibly moving through the funnel.
Every number on the page must come from <data> or be calculated from it with the formulas in <metrics>.
</task>

<config>
CLIENT: [brand name]
PERIOD: [YYYY-MM-DD to YYYY-MM-DD]
CURRENCY: [EGP | SAR | AED | KWD | USD]
OBJECTIVE: [purchase | lead | message]   (purchase = orders · lead = form leads · message = WhatsApp / Messenger conversations)
TARGET_CPA: [number]
TARGET_ROAS: [number, or "none"]
MONTHLY_BUDGET: [number]
LANGUAGE: [English | Arabic]
PREPARED_BY: [your name]
NOTES (optional, one per line, "YYYY-MM-DD: what changed"):
[e.g. 2026-09-08: launched UGC batch 2]
</config>

<data>
Paste any of the following, raw exports are fine, in any order:
1. Daily rows per platform: date, platform, spend, impressions, reach, link clicks, landing page views or sessions, adds to cart, checkouts initiated, purchases (or results), purchase conversion value, 3-second video plays, ThruPlays.
2. Campaign rows: campaign name, platform, status, daily budget, spend, impressions, reach, link clicks, results, conversion value, frequency, and results in the last 3 days if you have them.
3. Ad / creative rows: ad name, campaign, format (video, static, carousel), spend, impressions, link clicks, 3-second plays, ThruPlays, results, conversion value, frequency, launch date, thumbnail URL (optional).
4. Breakdowns (optional): age x gender, placement, region or city, hour x weekday.
5. Store and COD (optional): sessions, orders, confirmed, delivered, returned or refused, revenue collected.

[PASTE DATA HERE]
</data>

<data_rules>
- Map columns by meaning, not by exact header ("Amount spent (EGP)" = spend, "Website purchases" or "Results" = purchases, "Purchases conversion value" = revenue, "3-second video plays" = 3s plays). Write the mapping you used as a comment at the top of the script.
- Never invent, estimate or fill in a number. If the data for a section is missing, render that section as a designed empty state that names the export to add (for example "Add an age x gender breakdown to see this"). Never silently drop a section and never show placeholder values as if they were real.
- Put every input number in ONE `const DATA = {...}` object and every setting in ONE `const CONFIG = {...}` object at the top of the script, so next week I only replace those two objects. One `render()` function draws the whole page from them; filters call `render()` again.
- Sum raw counts first, then calculate ratios from the sums. Never average daily ratios.
- Period deltas compare the last N days with the N days before them (7D: 7, 14D: 14, 30D: last 15 vs first 15). If there is not enough history, show "—" and the note "needs a previous period".
- Number format: thousands separators; K and M only in tiles and chart axes, full numbers in tables; currency code from CONFIG; Latin digits even in Arabic.
</data_rules>

<metrics>
CTR = link clicks / impressions x 100 · CPC = spend / link clicks · CPM = spend / impressions x 1000
CPA (cost per result) = spend / results · ROAS = revenue / spend · AOV = revenue / orders · CVR = orders / sessions x 100
Hook rate = 3-second plays / impressions x 100 · Hold rate = ThruPlays / 3-second plays x 100 · Frequency = impressions / reach
COD: confirmation rate = confirmed / orders · delivery rate = delivered / confirmed · effective CPA = spend / delivered orders
Pacing = spend to date / (MONTHLY_BUDGET x days elapsed / days in month)
If OBJECTIVE is lead or message: say "leads" or "conversations" instead of orders, "cost per lead" or "cost per conversation" instead of CPA, and hide ROAS and AOV unless revenue is in the data.
</metrics>

<decision_rules>
Apply to every campaign and every creative and show the result as a label:
SCALE: CPA at or below 85% of TARGET_CPA and 5+ results in the last 3 days → raise budget 20% every 72 hours.
HOLD: CPA at or below TARGET_CPA → keep it, no edits during learning.
WATCH: CPA above target but under 160% of it → test new hooks first.
FATIGUE: frequency above 3 and CTR falling → replace the creative.
KILL: CPA above 160% of target, or zero results after spending 2.5 x TARGET_CPA → pause and move the budget.
Then write 3–5 findings ("what moved") and 3–4 next actions. Each one must quote the exact numbers behind it. No generic advice.
</decision_rules>

<design>
Name: Heat Ops. Mood: a night-time trading floor for ad money. Dark only.
Palette: background #07080D; panels #0D0F17 and #141725; hairlines rgba(236,234,242,.08); text #ECEAF2; muted #8D90A7. The only accent is a heat gradient #4F7CFF → #9B5CFF → #FF4F8B → #FFB23B, used only where money moves (revenue line, funnel columns, hook bars, pacing ring). Semantic colours: good #3DDC97, bad #FF5C6C, warning #FFB23B.
Type: Archivo (variable width 62–125; numbers at 118% width, weight 800), IBM Plex Mono for labels (uppercase, 0.12em tracking), IBM Plex Sans for body. Tabular numbers everywhere.
Layout: 12-column grid, 14px gaps, cards with 18px radius on #0D0F17.
- Top bar: pulsing amber status dot, client name, period, segmented filters [ALL | META | TIKTOK] and [7D | 14D | 30D], a "SAMPLE DATA" chip only when the data is a sample, and a live clock.
- Hero card (8 columns) with a 1px heat-gradient border: revenue as a huge gradient-filled number that counts up, a ▲▼ delta pill, and 4 mini stats (ROAS, results, spend, CPA). Beside it, a daily revenue line (gradient stroke, soft violet area) over grey spend bars, with dashed numbered markers at each NOTE date and a numbered legend under the chart.
- Budget pacing card (4 columns): SVG ring stroked with the heat gradient, % of monthly budget in the centre, rows for spent, budget, plan to date and daily run-rate, and a status word (On plan, Ahead of plan, Behind plan).
- Six KPI tiles (2 columns each): spend, results, CPA, ROAS, CTR, CPM. Each has the value, a ▲▼ delta pill coloured by whether that change is good for that metric, the target, and a sparkline with area fill and an emphasised last point (green or red for CPA and ROAS against target).
- "Follow the order" funnel (12 columns): impressions → link clicks → sessions → add to cart → checkout → orders → confirmed → delivered as heat-gradient columns (height on a power scale so small steps stay visible), the % kept between steps, and the biggest drop outlined in amber. On phones it becomes horizontal rows.
- Campaign table (8 columns, sortable headers): name with platform and daily budget under it, signal chip, spend, results, CPA (green or red against target), ROAS with a small gradient bar, CTR, frequency (amber above 3), 14-day sparkline.
- Signals feed (4 columns): glowing dots, green for wins, red for risks, amber for next actions.
- Creative leaderboard (8 columns): cards with the thumbnail (or a gradient tile with the ad name if there is no thumbnail), signal chip, play icon for video, ROAS, CPA, spend, hook-rate bar.
- Hour x weekday heatmap of orders in the heat palette (4 columns), age x gender ROAS heatmap (6 columns), placement bars and region bars with delivery %.
- Footer: the formulas and decision thresholds in mono.
Motion: cards rise 14px and fade in, staggered; numbers count up over 1.1s; the ring draws in; the status dot pulses. All of it off under prefers-reduced-motion.
</design>

<build>
- One HTML file, no build step. Charts with Apache ECharts 5.6.0 from https://cdnjs.cloudflare.com/ajax/libs/echarts/5.6.0/echarts.min.js. Fonts from Google Fonts only, always with a fallback stack. No other network requests.
- Responsive: perfect at 390px wide with no horizontal page scroll; wide tables scroll inside their own container.
- Accessible: real <table> markup, visible keyboard focus, aria-label on every chart, prefers-reduced-motion respected, and colour is never the only signal (add ▲ ▼ or a word).
- Charts resize with the window; tooltips use the currency; axis labels never overlap.
</build>

<output>
1. The complete HTML file in a single code block (or as an HTML artifact if you can create artifacts). No placeholders and no "rest of the code here".
2. Under it, in plain language: the column mapping you used, the data you could not find, and the 3 findings that matter most.
</output>

<quality_check>
Before answering, check: every KPI equals its formula applied to the sums; table totals match the KPI tiles; nothing on the page uses a number that is not in <data>; the page has no horizontal scroll at 390px; all text is readable on its background.
</quality_check>
```

## 2 · Pulse — لينك للعميل على الموبايل (عربي/إنجليزي)

```
<role>
You are a senior data-visualisation engineer and performance-marketing analyst. You build client-ready ad-performance dashboards for e-commerce brands in Egypt and the Gulf: Meta, TikTok and Snapchat ads; Shopify, Salla, Zid and EasyOrders stores; cash-on-delivery and WhatsApp funnels.
</role>

<task>
Turn the data in <data> into ONE self-contained HTML file: the "Pulse" dashboard described in <design>. It is the link I send to the client: they open it on their phone and understand the month in ten seconds.
Every number on the page must come from <data> or be calculated from it with the formulas in <metrics>.
</task>

<config>
CLIENT: [brand name]
PERIOD: [YYYY-MM-DD to YYYY-MM-DD]
CURRENCY: [EGP | SAR | AED | KWD | USD]
OBJECTIVE: [purchase | lead | message]   (purchase = orders · lead = form leads · message = WhatsApp / Messenger conversations)
TARGET_CPA: [number]
TARGET_ROAS: [number, or "none"]
MONTHLY_BUDGET: [number]
LANGUAGE: [English | Arabic | both (EN/AR toggle)]
PREPARED_BY: [your name]
NOTES (optional, one per line, "YYYY-MM-DD: what changed"):
[e.g. 2026-09-08: launched UGC batch 2]
</config>

<data>
Paste any of the following, raw exports are fine, in any order:
1. Daily rows per platform: date, platform, spend, impressions, reach, link clicks, landing page views or sessions, adds to cart, checkouts initiated, purchases (or results), purchase conversion value, 3-second video plays, ThruPlays.
2. Campaign rows: campaign name, platform, status, daily budget, spend, impressions, reach, link clicks, results, conversion value, frequency, and results in the last 3 days if you have them.
3. Ad / creative rows: ad name, campaign, format (video, static, carousel), spend, impressions, link clicks, 3-second plays, ThruPlays, results, conversion value, frequency, launch date, thumbnail URL (optional).
4. Breakdowns (optional): age x gender, placement, region or city, hour x weekday.
5. Store and COD (optional): sessions, orders, confirmed, delivered, returned or refused, revenue collected.

[PASTE DATA HERE]
</data>

<data_rules>
- Map columns by meaning, not by exact header ("Amount spent (EGP)" = spend, "Website purchases" or "Results" = purchases, "Purchases conversion value" = revenue, "3-second video plays" = 3s plays). Write the mapping you used as a comment at the top of the script.
- Never invent, estimate or fill in a number. If the data for a section is missing, render that section as a designed empty state that names the export to add (for example "Add an age x gender breakdown to see this"). Never silently drop a section and never show placeholder values as if they were real.
- Put every input number in ONE `const DATA = {...}` object and every setting in ONE `const CONFIG = {...}` object at the top of the script, so next week I only replace those two objects. One `render()` function draws the whole page from them; filters call `render()` again.
- Sum raw counts first, then calculate ratios from the sums. Never average daily ratios.
- Period deltas compare the last N days with the N days before them (7D: 7, 14D: 14, 30D: last 15 vs first 15). If there is not enough history, show "—" and the note "needs a previous period".
- Number format: thousands separators; K and M only in tiles and chart axes, full numbers in tables; currency code from CONFIG; Latin digits even in Arabic.
</data_rules>

<metrics>
CTR = link clicks / impressions x 100 · CPC = spend / link clicks · CPM = spend / impressions x 1000
CPA (cost per result) = spend / results · ROAS = revenue / spend · AOV = revenue / orders · CVR = orders / sessions x 100
Hook rate = 3-second plays / impressions x 100 · Hold rate = ThruPlays / 3-second plays x 100 · Frequency = impressions / reach
COD: confirmation rate = confirmed / orders · delivery rate = delivered / confirmed · effective CPA = spend / delivered orders
Pacing = spend to date / (MONTHLY_BUDGET x days elapsed / days in month)
If OBJECTIVE is lead or message: say "leads" or "conversations" instead of orders, "cost per lead" or "cost per conversation" instead of CPA, and hide ROAS and AOV unless revenue is in the data.
</metrics>

<decision_rules>
Apply to every campaign and every creative and show the result as a label:
SCALE: CPA at or below 85% of TARGET_CPA and 5+ results in the last 3 days → raise budget 20% every 72 hours.
HOLD: CPA at or below TARGET_CPA → keep it, no edits during learning.
WATCH: CPA above target but under 160% of it → test new hooks first.
FATIGUE: frequency above 3 and CTR falling → replace the creative.
KILL: CPA above 160% of target, or zero results after spending 2.5 x TARGET_CPA → pause and move the budget.
Then write 3–5 findings ("what moved") and 3–4 next actions. Each one must quote the exact numbers behind it. No generic advice.
</decision_rules>

<design>
Name: Pulse. Mood: a finance app on a phone. One big number, one line, and detail only when asked for.
Theme-aware: light (background #FAFAF8, cards #FFFFFF, text #0F1412, muted #68706B, lines #E7E9E5) and dark (#0A0C0B, #111413, #F1F4F2, #8E9691, #1F2422) through prefers-color-scheme plus a toggle button that remembers the choice in localStorage (wrapped in try/catch). Good #0A9F5E (dark #22C27B), bad #E0464B (dark #FF6468). Green and red only ever mean "beating target" and "missing target".
Type: Readex Pro (one family for Arabic and Latin), weights 400/500/600. Hero number 40–66px, weight 600, letter-spacing −0.03em.
Bilingual: EN / عربي toggle. Arabic sets dir="rtl", translates every label and sentence, keeps Latin digits, and wraps English campaign names and numbers in Unicode isolates (U+2068 … U+2069) inside Arabic sentences.
Layout: phone-first single column; from 980px a second column (1.55fr / 1fr).
- Header: client, period, a "sample data" tag only for samples, language toggle, theme toggle.
- Hero: metric name, the big number with its currency, and a delta line such as "▲ +10.8% (+32,027) vs previous 15 days" in green or red.
- Main chart (300px tall, no axes, no grid): cumulative revenue (or cumulative orders) as one smooth line, green if ROAS meets target and red if not, with a soft gradient area and a dotted line = cumulative spend x TARGET_ROAS (where revenue has to be to hit target). For ROAS and CPA it plots daily values against a dotted target line.
- Scrubbing: dragging or hovering across the chart (mouse and touch) updates the big number, the date, the delta line and the stats list to that day; leaving the chart restores the totals. Use the ECharts axisPointer events (updateAxisPointer and the zrender globalout event).
- Under the chart: range tabs 7D 14D 30D and metric tabs Revenue, ROAS, CPA, Orders; the active tab is tinted in the current green or red. One muted line explains the scrub and the dotted line.
- Stats: a two-column label and value list (spend, orders, cost per order, ROAS, average order, CTR, CPM, store conversion) with small coloured deltas.
- "What this means": 5–8 plain-language bullets (wins, risks, actions) with ring icons in green, red and ink.
- Side column cards: Targets (bullet bars for CPA, ROAS and budget used, each with a target tick); Platforms (share-of-spend split bar, then rows with sparkline and a filled ROAS pill); Campaigns (watch-list rows: name, platform and spend, sparkline, ROAS pill in green or red); Top creatives (same pattern); Cash on delivery (three rings: confirmed %, delivered %, cost per delivered order).
- Footer: the formulas in one muted line.
Motion: only the chart drawing in (0.9s) and the numbers changing. Nothing decorative.
</design>

<build>
- One HTML file, no build step. Charts with Apache ECharts 5.6.0 from https://cdnjs.cloudflare.com/ajax/libs/echarts/5.6.0/echarts.min.js. Fonts from Google Fonts only, always with a fallback stack. No other network requests.
- Responsive: perfect at 390px wide with no horizontal page scroll; wide tables scroll inside their own container.
- Accessible: real <table> markup, visible keyboard focus, aria-label on every chart, prefers-reduced-motion respected, and colour is never the only signal (add ▲ ▼ or a word).
- Charts resize with the window; tooltips use the currency; axis labels never overlap.
</build>

<output>
1. The complete HTML file in a single code block (or as an HTML artifact if you can create artifacts). No placeholders and no "rest of the code here".
2. Under it, in plain language: the column mapping you used, the data you could not find, and the 3 findings that matter most.
</output>

<quality_check>
Before answering, check: every KPI equals its formula applied to the sums; table totals match the KPI tiles; nothing on the page uses a number that is not in <data>; the page has no horizontal scroll at 390px; all text is readable on its background.
</quality_check>
```

## 3 · Media Desk — شاشة شغلك اليومية (Bloomberg)

```
<role>
You are a senior data-visualisation engineer and performance-marketing analyst. You build client-ready ad-performance dashboards for e-commerce brands in Egypt and the Gulf: Meta, TikTok and Snapchat ads; Shopify, Salla, Zid and EasyOrders stores; cash-on-delivery and WhatsApp funnels.
</role>

<task>
Turn the data in <data> into ONE self-contained HTML file: the "Media Desk" dashboard described in <design>. It is my working screen for daily optimisation across many campaigns: dense, fast, keyboard first, every decision visible.
Every number on the page must come from <data> or be calculated from it with the formulas in <metrics>.
</task>

<config>
CLIENT: [brand name]
PERIOD: [YYYY-MM-DD to YYYY-MM-DD]
CURRENCY: [EGP | SAR | AED | KWD | USD]
OBJECTIVE: [purchase | lead | message]   (purchase = orders · lead = form leads · message = WhatsApp / Messenger conversations)
TARGET_CPA: [number]
TARGET_ROAS: [number, or "none"]
MONTHLY_BUDGET: [number]
LANGUAGE: [English | Arabic]
PREPARED_BY: [your name]
NOTES (optional, one per line, "YYYY-MM-DD: what changed"):
[e.g. 2026-09-08: launched UGC batch 2]
</config>

<data>
Paste any of the following, raw exports are fine, in any order:
1. Daily rows per platform: date, platform, spend, impressions, reach, link clicks, landing page views or sessions, adds to cart, checkouts initiated, purchases (or results), purchase conversion value, 3-second video plays, ThruPlays.
2. Campaign rows: campaign name, platform, status, daily budget, spend, impressions, reach, link clicks, results, conversion value, frequency, and results in the last 3 days if you have them.
3. Ad / creative rows: ad name, campaign, format (video, static, carousel), spend, impressions, link clicks, 3-second plays, ThruPlays, results, conversion value, frequency, launch date, thumbnail URL (optional).
4. Breakdowns (optional): age x gender, placement, region or city, hour x weekday.
5. Store and COD (optional): sessions, orders, confirmed, delivered, returned or refused, revenue collected.

[PASTE DATA HERE]
</data>

<data_rules>
- Map columns by meaning, not by exact header ("Amount spent (EGP)" = spend, "Website purchases" or "Results" = purchases, "Purchases conversion value" = revenue, "3-second video plays" = 3s plays). Write the mapping you used as a comment at the top of the script.
- Never invent, estimate or fill in a number. If the data for a section is missing, render that section as a designed empty state that names the export to add (for example "Add an age x gender breakdown to see this"). Never silently drop a section and never show placeholder values as if they were real.
- Put every input number in ONE `const DATA = {...}` object and every setting in ONE `const CONFIG = {...}` object at the top of the script, so next week I only replace those two objects. One `render()` function draws the whole page from them; filters call `render()` again.
- Sum raw counts first, then calculate ratios from the sums. Never average daily ratios.
- Period deltas compare the last N days with the N days before them (7D: 7, 14D: 14, 30D: last 15 vs first 15). If there is not enough history, show "—" and the note "needs a previous period".
- Number format: thousands separators; K and M only in tiles and chart axes, full numbers in tables; currency code from CONFIG; Latin digits even in Arabic.
</data_rules>

<metrics>
CTR = link clicks / impressions x 100 · CPC = spend / link clicks · CPM = spend / impressions x 1000
CPA (cost per result) = spend / results · ROAS = revenue / spend · AOV = revenue / orders · CVR = orders / sessions x 100
Hook rate = 3-second plays / impressions x 100 · Hold rate = ThruPlays / 3-second plays x 100 · Frequency = impressions / reach
COD: confirmation rate = confirmed / orders · delivery rate = delivered / confirmed · effective CPA = spend / delivered orders
Pacing = spend to date / (MONTHLY_BUDGET x days elapsed / days in month)
If OBJECTIVE is lead or message: say "leads" or "conversations" instead of orders, "cost per lead" or "cost per conversation" instead of CPA, and hide ROAS and AOV unless revenue is in the data.
</metrics>

<decision_rules>
Apply to every campaign and every creative and show the result as a label:
SCALE: CPA at or below 85% of TARGET_CPA and 5+ results in the last 3 days → raise budget 20% every 72 hours.
HOLD: CPA at or below TARGET_CPA → keep it, no edits during learning.
WATCH: CPA above target but under 160% of it → test new hooks first.
FATIGUE: frequency above 3 and CTR falling → replace the creative.
KILL: CPA above 160% of target, or zero results after spending 2.5 x TARGET_CPA → pause and move the budget.
Then write 3–5 findings ("what moved") and 3–4 next actions. Each one must quote the exact numbers behind it. No generic advice.
</decision_rules>

<design>
Name: Media Desk. Mood: a Bloomberg terminal for media buying, the most information per pixel, keyboard first. Dark only.
Palette: background #050506; panels #0B0B0D; panel title bars #141418; hairlines #26262C; text #E6E6E9; muted #8B8B95. Amber #FFB000 for labels, function keys and focus; cyan #46C8F5 for neutral data bars; green #2BD576 and red #FF4D55 only for above or below target; magenta #FF6BD6 for FATIGUE.
Type: JetBrains Mono for everything (12.5px base, tabular numbers); IBM Plex Sans Condensed 700 uppercase for panel titles.
Layout: 6-column panel grid, 8px gaps, square corners. Every panel has a title bar (amber title, an optional black-on-amber function-key tag such as F2, muted context on the right) and a dense body.
- Command bar: an amber logo block with "DESK" and the client name; a command input "> … [GO]" that filters live (free text matches campaign and creative names; SCALE, KILL, HOLD, WATCH, FATIGUE filter by signal; META, TIKTOK, ALL switch platform; 7D, 14D, 30D switch range; Esc clears; "/" focuses it).
- Function keys F1 OVERVIEW, F2 CAMPAIGNS, F3 CREATIVES, F4 AUDIENCE as buttons and as keys 1–4: they outline the panel in amber and scroll to it.
- Status cluster: blinking live dot, clock, SAMPLE flag only for samples.
- Ticker tape (infinite CSS marquee, still under reduced motion): SPEND, REV, ROAS, CPA, ORD, CTR, CPM, CPC, AOV, HOOK with ▲▼ 7-day change coloured by whether the change is good for that metric.
- F1 Account (2 columns): a matrix with metrics as rows and TODAY, 7D, 30D, Δ7D as columns.
- CPA candles (4 columns): one candle per day. Open = yesterday's CPA, close = today's CPA, wick = best and worst campaign CPA that day; green when CPA fell, red when it rose; dashed amber TARGET line labelled inside the plot.
- F2 Order book (4 columns): sortable campaign table with name, platform, budget per day, spend, orders, CPA, ROAS, CTR, frequency, orders in the last 3 days, and a SIGNAL chip (SCALE solid green, KILL solid red, the others outlined).
- Alerts (2 columns): time-stamped log lines tagged WIN, RISK or ACT.
- F3 Creatives (4 columns): sortable table with hook rate drawn as 10-cell block bars (█ and ░), hold rate and signal.
- F4 Audience (2 columns): age x gender ROAS matrix tinted green or red by distance from target, then placement bars.
- Platforms table, a COD panel (orders, confirmed, delivered %, returned, ad CPA vs effective CPA, delivered revenue) and a Rules panel that lists the decision rules with the real thresholds.
- Status bar along the bottom: data date, range, platform, counts, key hints.
Interaction: every table sorts by any column, every filter re-renders instantly, and an empty result says "No campaign matches this filter".
</design>

<build>
- One HTML file, no build step. Charts with Apache ECharts 5.6.0 from https://cdnjs.cloudflare.com/ajax/libs/echarts/5.6.0/echarts.min.js. Fonts from Google Fonts only, always with a fallback stack. No other network requests.
- Responsive: perfect at 390px wide with no horizontal page scroll; wide tables scroll inside their own container.
- Accessible: real <table> markup, visible keyboard focus, aria-label on every chart, prefers-reduced-motion respected, and colour is never the only signal (add ▲ ▼ or a word).
- Charts resize with the window; tooltips use the currency; axis labels never overlap.
</build>

<output>
1. The complete HTML file in a single code block (or as an HTML artifact if you can create artifacts). No placeholders and no "rest of the code here".
2. Under it, in plain language: the column mapping you used, the data you could not find, and the 3 findings that matter most.
</output>

<quality_check>
Before answering, check: every KPI equals its formula applied to the sums; table totals match the KPI tiles; nothing on the page uses a number that is not in <data>; the page has no horizontal scroll at 390px; all text is readable on its background.
</quality_check>
```

## 4 · Monthly Report — تقرير آخر الشهر (يتحفظ PDF)

```
<role>
You are a senior data-visualisation engineer and performance-marketing analyst. You build client-ready ad-performance dashboards for e-commerce brands in Egypt and the Gulf: Meta, TikTok and Snapchat ads; Shopify, Salla, Zid and EasyOrders stores; cash-on-delivery and WhatsApp funnels.
</role>

<task>
Turn the data in <data> into ONE self-contained HTML file: the "Monthly Report" dashboard described in <design>. It is the end-of-month report a client reads in three minutes and forwards to their boss, built to be saved as a PDF from the browser.
Every number on the page must come from <data> or be calculated from it with the formulas in <metrics>.
</task>

<config>
CLIENT: [brand name]
PERIOD: [YYYY-MM-DD to YYYY-MM-DD]
CURRENCY: [EGP | SAR | AED | KWD | USD]
OBJECTIVE: [purchase | lead | message]   (purchase = orders · lead = form leads · message = WhatsApp / Messenger conversations)
TARGET_CPA: [number]
TARGET_ROAS: [number, or "none"]
MONTHLY_BUDGET: [number]
LANGUAGE: [English | Arabic]
PREPARED_BY: [your name]
NOTES (optional, one per line, "YYYY-MM-DD: what changed"):
[e.g. 2026-09-08: launched UGC batch 2]
</config>

<data>
Paste any of the following, raw exports are fine, in any order:
1. Daily rows per platform: date, platform, spend, impressions, reach, link clicks, landing page views or sessions, adds to cart, checkouts initiated, purchases (or results), purchase conversion value, 3-second video plays, ThruPlays.
2. Campaign rows: campaign name, platform, status, daily budget, spend, impressions, reach, link clicks, results, conversion value, frequency, and results in the last 3 days if you have them.
3. Ad / creative rows: ad name, campaign, format (video, static, carousel), spend, impressions, link clicks, 3-second plays, ThruPlays, results, conversion value, frequency, launch date, thumbnail URL (optional).
4. Breakdowns (optional): age x gender, placement, region or city, hour x weekday.
5. Store and COD (optional): sessions, orders, confirmed, delivered, returned or refused, revenue collected.

[PASTE DATA HERE]
</data>

<data_rules>
- Map columns by meaning, not by exact header ("Amount spent (EGP)" = spend, "Website purchases" or "Results" = purchases, "Purchases conversion value" = revenue, "3-second video plays" = 3s plays). Write the mapping you used as a comment at the top of the script.
- Never invent, estimate or fill in a number. If the data for a section is missing, render that section as a designed empty state that names the export to add (for example "Add an age x gender breakdown to see this"). Never silently drop a section and never show placeholder values as if they were real.
- Put every input number in ONE `const DATA = {...}` object and every setting in ONE `const CONFIG = {...}` object at the top of the script, so next week I only replace those two objects. One `render()` function draws the whole page from them; filters call `render()` again.
- Sum raw counts first, then calculate ratios from the sums. Never average daily ratios.
- Period deltas compare the last N days with the N days before them (7D: 7, 14D: 14, 30D: last 15 vs first 15). If there is not enough history, show "—" and the note "needs a previous period".
- Number format: thousands separators; K and M only in tiles and chart axes, full numbers in tables; currency code from CONFIG; Latin digits even in Arabic.
</data_rules>

<metrics>
CTR = link clicks / impressions x 100 · CPC = spend / link clicks · CPM = spend / impressions x 1000
CPA (cost per result) = spend / results · ROAS = revenue / spend · AOV = revenue / orders · CVR = orders / sessions x 100
Hook rate = 3-second plays / impressions x 100 · Hold rate = ThruPlays / 3-second plays x 100 · Frequency = impressions / reach
COD: confirmation rate = confirmed / orders · delivery rate = delivered / confirmed · effective CPA = spend / delivered orders
Pacing = spend to date / (MONTHLY_BUDGET x days elapsed / days in month)
If OBJECTIVE is lead or message: say "leads" or "conversations" instead of orders, "cost per lead" or "cost per conversation" instead of CPA, and hide ROAS and AOV unless revenue is in the data.
</metrics>

<decision_rules>
Apply to every campaign and every creative and show the result as a label:
SCALE: CPA at or below 85% of TARGET_CPA and 5+ results in the last 3 days → raise budget 20% every 72 hours.
HOLD: CPA at or below TARGET_CPA → keep it, no edits during learning.
WATCH: CPA above target but under 160% of it → test new hooks first.
FATIGUE: frequency above 3 and CTR falling → replace the creative.
KILL: CPA above 160% of target, or zero results after spending 2.5 x TARGET_CPA → pause and move the budget.
Then write 3–5 findings ("what moved") and 3–4 next actions. Each one must quote the exact numbers behind it. No generic advice.
</decision_rules>

<design>
Name: Monthly Report. Mood: a Swiss-style printed report. Light only.
Palette: white #FFFFFF, ink #111111, secondary #3A3A3A, muted #727272, rules #DCDCDC, tint #F4F4F2. One signal red #E1251B for "look here" (misses, the funnel leak, annotation markers); green #1F7A3E only for good deltas.
Type: Schibsted Grotesk 400–900 (hero numeral 900 at −0.055em, section titles 800) and IBM Plex Mono for footnotes. Strict 12-column grid with 24px gutters; black rules instead of cards.
Sections, numbered 01–07 because they are read in order:
- Masthead: 6px black top rule; report name and client; period and currency; prepared by.
- Hero: the month's ROAS as a giant numeral (cost per result if there is no revenue), a one-sentence verdict written from the numbers ("Every EGP 1 of ads brought back EGP 3.11, above the 3.0x target."), then a two-sentence summary. A red dot before the verdict when the target was missed.
- Four numerals under a 2px rule: revenue, spend, orders, cost per order, each with its period delta coloured by whether it is good.
- 01 Revenue and spend, day by day: grey spend bars and a black revenue line, with red numbered circles at each NOTE date; under the chart, a 4-column legend of the notes with the ROAS change in the 4 days after each one.
- 02 Where buyers dropped out: horizontal black bars on a log scale with "% of previous step"; the biggest drop in red, named in a sentence.
- 03 Platforms side by side: small multiples (share of spend, cost per order, ROAS) on shared scales with a red target tick.
- 04 Campaigns and what we decided: hairline table, misses in red, a plain-English decision per row (Scale up, Keep, New hooks, Refresh, Pause), bold total row.
- 05 Creatives that carried the month: the top 3 with huge rank numerals, their key numbers and a one-line reason taken from the data (hook rate, CTR, format); then "Did not work:" naming the bottom 2.
- 06 After the ad (COD): cost per delivered order as a big numeral against ad CPA, and a ledger of placed → confirmed → delivered → returned → revenue collected.
- 07 Next month: numbered actions from the decision rules, then a grey box with the budget move (the daily budget freed by paused campaigns and where it goes).
- Footer: method (attribution window, comparison period), formulas, data source.
Print: @page A4 with 14mm margins; sections never split across pages; charts 280px tall in print.
</design>

<build>
- One HTML file, no build step. Charts with Apache ECharts 5.6.0 from https://cdnjs.cloudflare.com/ajax/libs/echarts/5.6.0/echarts.min.js. Fonts from Google Fonts only, always with a fallback stack. No other network requests.
- Responsive: perfect at 390px wide with no horizontal page scroll; wide tables scroll inside their own container.
- Accessible: real <table> markup, visible keyboard focus, aria-label on every chart, prefers-reduced-motion respected, and colour is never the only signal (add ▲ ▼ or a word).
- Charts resize with the window; tooltips use the currency; axis labels never overlap.
</build>

<output>
1. The complete HTML file in a single code block (or as an HTML artifact if you can create artifacts). No placeholders and no "rest of the code here".
2. Under it, in plain language: the column mapping you used, the data you could not find, and the 3 findings that matter most.
</output>

<quality_check>
Before answering, check: every KPI equals its formula applied to the sums; table totals match the KPI tiles; nothing on the page uses a number that is not in <data>; the page has no horizontal scroll at 390px; all text is readable on its background.
</quality_check>
```
