# FX Journal 1.0 — Premium User & Setup Guide
*Your Complete Guide to SMC, ICT, and Portfolio Analytics Mastery*

---

Thank you for purchasing **FX Journal 1.0**! This guide will walk you through the setup, features, and advanced analytical workflows of your new trading journal. 

Unlike traditional journals that charge heavy monthly subscriptions, FX Journal 1.0 is **100% self-contained, offline-first, and local-first**. Your data belongs to you—it is stored securely in your browser's local cache, ensuring lightning-fast load times and absolute privacy.

---

## 📂 1. Getting Started (Installation)

Getting started is extremely simple. There are no databases to configure or server dependencies to install.

### How to Launch:
1. **Extract the files:** Unzip the folder you downloaded from Gumroad.
2. **Open the Journal:** Double-click the `index.html` file. It will automatically open in your default web browser (Chrome, Edge, Safari, Brave, or Firefox).
3. **Pin it:** We recommend adding the page to your browser's bookmarks bar (e.g., `Ctrl+D` or `Cmd+D`) for quick access at the start and end of every trading session.

---

## 🎨 2. App Setup & Navigation

The journal features a premium **Aero Frosted-Glass** interface designed to match state-of-the-art SaaS platforms.

### Profile Customization:
* **Dark / Light Modes:** Click the sun/moon icon (`🌙` / `☀️`) in the top-right header to toggle themes. The Light Mode is styled with a soft, low-contrast "Slate Paper" look to reduce eye strain.
* **Theme Presets:** Head to the **Settings** tab (gear icon in sidebar) to select custom color presets:
  * **Midnight:** Deep navy/indigo.
  * **Forest:** Dark emerald.
  * **Sapphire:** Tech-blue with cyan glows.
  * **Obsidian:** Stealth-black theme.
* **Frosted-Glass Toggle:** Turn on *Aero Frosted Glass* in Settings to enable translucent cards with golden glows.
* **Web Audio Chimes:** Toggle *App Sound Effects* on or off. The journal synthesizes wave tones directly in your browser to chime on wins, losses, or account drawdowns.

---

## 🎯 3. Multi-Account Profile Setup

FX Journal 1.0 supports tracking multiple accounts simultaneously (e.g., your Live account, Demo account, and Prop Firm challenge).

1. Go to the **Settings** tab.
2. Under **Account Settings**, click **Manage Profiles**.
3. Create your custom account profiles (e.g., `My Exness Live`, `My FTMO 100K`).
4. Set a unique **Starting Balance** for each profile.
5. In the top-right header, select your active account from the dropdown. All dashboard stats, calendars, analytics charts, and logs will instantly filter and display metrics for that specific profile only.

---

## ✍️ 4. Logging Your First Trade

To log a trade, switch to the **Trade Entry** tab:
1. **Details:** Enter the date, select the pair (e.g., XAUUSD, EURUSD), set the direction (Long/Short), and the active account.
2. **SMC/ICT Confluences:** Click on active setup confluences. These are critical for the *Leak Finder* analytics tool:
   * **HTF Bias:** Aligning with Higher Timeframe analysis.
   * **OB Tap:** Orderblock tap.
   * **FVG Fill:** Fair Value Gap entry.
   * **BOS/MSS:** Break of Structure / Market Structure Shift.
   * **Liq Sweep:** Liquidity Sweep before entry.
   * **Killzone:** Trading inside active London/New York session windows.
   * **Overlap:** Multiple overlap levels.
   * **News Sweep:** Trading news-related liquidity sweeps.
3. **Metrics:** Input your Entry price, Stop Loss (SL), Take Profit (TP), Lot size, and Exit price.
4. **Calculator Tool:** You can use the built-in risk calculator in the card header. Input your account balance, risk percentage, entry, and stop loss to instantly calculate your recommended lot size.
5. **Screenshots:** Attach pre-trade or post-trade TradingView screenshot links. The system contains an auto-parser that will render chart previews inside your trade logs.
6. **Psychology & Review:** Write down your pre-trade mental state, confluences, and post-trade reviews. Click **Save Trade**.

---

## 📋 5. Trade Log & Scorecards

* **Expandable Logs:** Switch to the **Trade Log** tab. Click the small arrow (`▶`) next to the index number `#` of any trade row to slide open an inline details drawer. It shows screenshot previews, pre/post reviews, and active confluences.
* **Unified Daily Scorecard:** Found on the **Dashboard** tab. 
  * Hovering over the `🎯 Outlook` badge displays your pre-market bias and levels.
  * Hovering over the `📝 Review` badge displays a compilation of your post-market journal entry and individual outcomes of all trades taken on that day.
  * Clicking any row highlights it and opens the **Day Details Modal** where you can view, edit, or log new notes for that calendar date.

---

## 📊 6. SMC/ICT Leak Finder & Analytics

Switch to the **Analytics** tab to get institutional-level insights into your edge:
1. **SMC/ICT Leak Finder:** Calculates your **Phantom PNL** (money lost on trades where a custom discipline mistake was flagged) and your **Potential Balance** (what your account would be worth if those mistakes were avoided).
2. **Confluence Performance:** Displays a win-rate tracker and visual progress bars for each logged confluence. This helps you identify which setups (e.g., OB Tap vs. FVG Fill) make you the most money.
3. **Advanced Expectancy Metics:** Displays Sharpe Ratio, Expectancy, and Kelly Criterion to evaluate the mathematical edge of your trading strategy.

---

## 🛡️ 7. Strict Risk Management & Drawdown Lockout

The journal is programmed to act as your strict risk manager.

* **Daily Drawdown Limit:** Go to **Settings** and set your daily drawdown limit (e.g., 3% or 5%).
* **Discipline Lockout Mode:** When active, if your net losses for the day exceed your limit:
  * The dashboard will lock out.
  * An alarm chime will play.
  * You will be locked out from entering or editing trades for the remainder of the day to protect your capital.
  * You can toggle **Strict Mode** in Settings, which blocks manual lockout overrides for maximum self-discipline.

---

## 💾 8. Backup, Cloud & Syncing

Because data is stored in the browser's local cache, clearing your browser cookies/history can wipe it. **You must back up your data regularly.**

### Options for Backups:
1. **Local JSON Backup:** Go to the **Settings** tab -> **Data Center**. Click **Export Backup JSON** to save a complete file copy to your local drive. To restore it, click **Import Backup JSON** and upload the file.
2. **GitHub Gist Sync:** Configure your GitHub Username, Personal Access Token (Gist scope), and Gist ID in the Data Center to sync your journal files to a private GitHub Gist in 1 click.
3. **Google Drive Sync:** Authorize your Google account to back up and restore your journal configuration file directly to your personal Google Drive account.

---

## 🧠 9. Troubleshooting & FAQ

#### Q: I cleared my browser history and my trades disappeared. Can I get them back?
**A:** If you cleared your browser's "Local storage / cookies" and did not save a JSON backup or sync to GitHub/Google Drive, the data is permanently deleted. **Please make it a habit to export your JSON backup file at the end of every trading session.**

#### Q: How do I transfer my trading log to a new computer?
**A:** Export your data as a JSON file via the **Settings** tab on your old computer, transfer the file, open `index.html` on your new computer, and import the JSON file.

#### Q: The calculator is showing '—' instead of values. What's wrong?
**A:** Ensure you have selected a pair from the dropdown and entered both the Entry Price and Stop Loss. The calculator requires these values to compute pip ranges.

---

*For support, inquiries, or custom upgrades, contact the project owner directly. Happy trading!*
