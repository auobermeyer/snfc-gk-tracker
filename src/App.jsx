import { useState, useEffect } from "react";

const STORAGE_KEY = "snfc_gk_logs_v1";
const FILM_STORAGE_KEY = "snfc_gk_film_v1";

function loadFilm() {
  try { const r = localStorage.getItem(FILM_STORAGE_KEY); return r ? JSON.parse(r) : {}; } catch { return {}; }
}
function saveFilm(film) {
  try { localStorage.setItem(FILM_STORAGE_KEY, JSON.stringify(film)); } catch {}
}

function loadLogs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveLogs(logs) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(logs)); } catch {}
}

const SEED_LOGS = {
  Adi: [
    {
      id: 1750110000,
      date: "2026-07-12",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION LOG — Sun Jul 12 | 9:00-10:30am | Gretna East. PERIODIZATION: 🟢 GREEN. Attendance: Harlow, Maggie only (Adi + Kenzie absent). Announced service only — could not get past announced portion, which was the right call given load. Lots of rest between sets, game speed within sets. Theme: Cutback variations — defending the moment. Stayed in announced for the entirety — appropriate given green day target after red on Jul 11.",
    },
    {
      id: 1750110003,
      date: "2026-07-12",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Own Your Moments",
      rating: "",
      note: "PLAN — Limited, ankle. Announced only. Cutback starting position and hip orientation. No explosive lateral load. Monitor compensation.",
    },
    {
      id: 1750100000,
      date: "2026-07-11",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION LOG — Sat Jul 11 | 9:00-10:30am | Gretna East. PERIODIZATION RATING: 🔴 RED (maximum effort/fatigue). Hardest fatigue session of the summer — high heat ~90-95°F, long ranges moving backwards/forwards/sideways, sustained pushing throughout sets. Structure: maximum intensity within sets, deliberate open recovery between sets (intentional reset window — not rushed — allowing keepers to return to neutral state between efforts, mirroring game rhythm at the back). Next session should be YELLOW at most, GREEN preferred if within 48 hours. RPE color system: GREEN = easy, minimal diving effort | YELLOW = moderate | RED = maximum effort/fatigue. Attendance: Maggie (distribution only, camp recovery), Ryan, Harlow, Kenzie, Adi (Day 2 back, reduced load), Catthi/Kathy (guest, NWU senior GK). Curriculum stage: Defending the goal → defending the six → defending the area. Central question: can a keeper defend the entire area from all sides? Drills: driving-ball technique warmup, interior through-ball / diagonal from 9 into straight run, winger combo (diagonal into gap between OB/CB attacking corner of 18 → through-ball defending → wide overload → cross), long diagonal switch 40-yard line to top of 18 (~30-yard driven pass, target ~50 yards). Process note: build rest spots into rotation whenever managing injuries — currently Kenzie finger, Adi ankle, Maggie camp fatigue. Session takeaways: go/stay timing gap identified in specific context: NOT tight reactive moments (group solid there) but OPEN SPACE multi-touch situations from angle and distance. When ball is played inside 18 and keeper reacts to 1-2 touch moments — actually pretty good. Gap is when attacker has multiple touches in a row coming to goal from wide open space — keeper struggles to read dribble cues, when attacker is about to shoot, when to commit. Perceptual problem across a longer time window, not a decision-making problem. Needs reps in open space multi-touch environment specifically. Driven-pass technique should be decoupled from center-field geometry — usable from anywhere, not just central launch point. Progression: master driven technique broadly → lofted pass playing behind backline / flighting onto striker to flick on.",
    },
    {
      id: 1750100005,
      date: "2026-07-11",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Day 2 back from ankle injury. Reps intentionally reduced — used optional rest spot once, cut a rep short. Good on saves. Still working on setting early. Struggled with ball-line on diagonal pass from the 10/attacking-mid role — leaving front post open. On crosses, favoring letting ball drop into body rather than attacking it — likely ankle + fatigue. Monitor, don't push if she reports pain. Process note: ankle compensation still present, watch power step mechanics.",
    },
    {
      id: 1750070005,
      date: "2026-07-08",
      type: "OOP",
      subtag: "1v1",
      pillar: "Be Brave",
      rating: "⭐⭐⭐ Solid",
      note: "Continuing to improve rapidly. Exploring K save vs spread on 1v1s — let him find it. Cross claiming in the 6 is absolutely excellent — a real strength. Had an extension dive today and referenced it to Austin after training — sign of genuine investment. Development priorities: weak foot distribution, 1v1 spread technique, more extension dive opportunities. Very strong results from him this summer.",
    },    {
      id: 1750040001,
      date: "2026-07-07",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "⭐⭐⭐ Solid",
      note: "Session 1. Zone 3 extension + power step — excellent. Moving her to the younger group for now is the right call. Ramp toward older group once new techniques consolidate. Good development trajectory.",
    },
    {
      id: 1750070004,
      date: "2026-07-08",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Good session. Excellent hand eye coordination but still parrying shots rather than holding on. Under pressure her passes get bouncy instead of flat — confidence problem more than technique when speed increases. Continuing to grow on extension dive and expanding range. Testing weak foot in training when not required — great sign of curiosity and ownership. Confidence is the lever, not technique.",
    },
    {
      id: 1750070003,
      date: "2026-07-08",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "Hairline fracture in finger — bothering her but continuing to train. IMPORTANT: shot stopping inconsistency on hip hinge and shoulder/hip rotation may be partly compensation for the finger injury, not purely technique. Separate the two before deciding on coaching approach. Positives: distribution has been strong, hands getting better, cross timing improving — trying to meet at highest point. Behind the rest of the group in most areas. Need to find a different coaching approach — consider removing the comparison context entirely. One-on-one environment away from group may produce different result than anything tried technically.",
    },
    {
      id: 1750070002,
      date: "2026-07-08",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "Another excellent session. Shot stopping range continuing to expand. Summer arc: crosses, extension dives, strong foot distribution, spread technique all developed significantly. Remaining priorities: spread consolidation, back to bar, weak foot distribution. Has come a really long way this summer.",
    },
    {
      id: 1750070001,
      date: "2026-07-08",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "First session back from ankle injury. Rusty, ramping back up to her level. Expected — monitor ankle compensation on lateral explosive movements especially power step and extension dives. Give her the session to find her rhythm before any technical demands.",
    },
    {
      id: 1750040005,
      date: "2026-07-07",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "Session 2. Best session of the summer. Crossing strength was always there — shot stopping and extension starting to follow. Real upward trajectory.",
    },
    {
      id: 1750040004,
      date: "2026-07-07",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Start Higher",
      rating: "⭐⭐⭐ Solid",
      note: "Session 2. Better session — meaningful given the context of the summer. Crossing work was part of the best crossing session of the summer. Worth noting as a real positive in her development arc.",
    },
    {
      id: 1750040003,
      date: "2026-07-07",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "Session 2. Excellent — had extension dives described as insane. Hitting her rhythm. Spread technique, back to bar, and now extension dives all coming together. This is the culmination of the late June breakthrough week.",
    },
    {
      id: 1750040002,
      date: "2026-07-07",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "⭐ Needs Work",
      note: "First session. 11 years old — foundational stage. Zone 3 extension and power step introduction. Rougher as expected. Won't return until week of Jul 14. Give grace — Day 1 of fundamental learning.",
    },
    {
      id: 1750030001,
      date: "2026-06-30",
      type: "IP",
      subtag: "Beyond",
      pillar: "Weapon with the Ball",
      rating: "⭐ Needs Work",
      note: "Long distance clip — high failure rate. Technique is there in controlled announced environment but could not generate quality independently in live. Carry-forward: isolate clip at short range after break, build distance gradually. Prepping for GA National ID Jul 7-9 — Sunday bonus session planned.",
    },
    {
      id: 1750030000,
      date: "2026-06-30",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "DEBRIEF — Tue Jun 30 (last session before break). High failure rate across the board on long distance crosses — wide and narrow. Target technique: high clipped ball (20-30 yards) played to striker for flick header behind backline or chest/feet to play underneath. Keepers could not generate the quality of clip consistently when opened to the group after controlled announced crosses with Austin serving. Same announced-to-live gap as every other theme this summer. Correction: clip technique needs its own announced progression after the break — short range first, establish flight and weight, then extend distance. CARRY-FORWARD TO JUL 7: isolate clip technique in announced environment before returning to live. BONUS SESSION POSSIBLE: Sunday evening with Maggie (prepping for GA National ID Jul 7-9) + Gretna East HS keeper (prepping for FGCU ID camp following week).",
    },
    {
      id: 1750020000,
      date: "2026-06-30",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "MILESTONE — Maggie selected for National GA ID session in Virginia, Jul 7–9. Major achievement reflecting her summer development, particularly the IP and mental growth that's been visible all season. Out Jul 7 and Jul 8 confirmed. Jul 11 session status unknown pending flight details.",
    },
    {
      id: 1750010000,
      date: "2026-06-30",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION PLAN — Tue Jun 30. Building on Mon Jun 29 (wide loft crosses, jump timing, staying in path of ball). IP: Extended range Through pass to 20-30 yards — game realistic distance, meaningful step up from typical training range. OOP: Crosses with two service types — wide crosses (repeated reps building on yesterday) + narrow clipped ball added for diversity. Tests whether yesterday's timing work generalizes across service types or was pattern-matched to one serve. Finish: 1v1 or shot stopping woven in. Pure volume format continues. NEXT SESSION NOT UNTIL JUL 7 — week gap.",
    },
    {
      id: 1750000004,
      date: "2026-06-29",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Start Higher",
      rating: "⭐⭐ Developing",
      note: "Did well but roughly 6 months behind the rest of the group developmentally. Power step in shot stopping is the bottleneck — once it clicks he should accelerate quickly. Won't be revisited until after the break given group's current back to bar focus.",
    },
    {
      id: 1750000003,
      date: "2026-06-29",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "Excellent — becoming her normal. Crosses remain a clear strength. Continuing the momentum from last week.",
    },
    {
      id: 1750000002,
      date: "2026-06-29",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Hold Yourself to a Standard",
      rating: "⭐⭐ Developing",
      note: "Struggled relative to the group but is slowly pressing through it. Consistent with the summer pattern — expected, not a setback. Pure volume format is the right approach for her per coaching plan.",
    },
    {
      id: 1750000001,
      date: "2026-06-29",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "Best session yet — crosses and through-ball technique both clicked. Volume approach clearly suits her, processes and self-adjusts when given reps without interruption.",
    },
    {
      id: 1750000000,
      date: "2026-06-29",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "DEBRIEF — Mon Jun 29. Keepers: Maggie, Kenzie, Ryan, Harlow. Format: pure volume, almost no coaching stops — let them have the reps and learn through adversity. Consistent with saturation principle: more reps per theme beats more coaching interruptions. Worked well today.",
    },
    {
      id: 1749990003,
      date: "2026-06-29",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Start Higher",
      rating: "",
      note: "KENZIE PLAN. One correction only today — power step. Ball of foot, loaded, explosive. Everything else ignored. High volume, one guardrail. Let her crash into it repeatedly.",
    },
    {
      id: 1749990002,
      date: "2026-06-29",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "",
      note: "HARLOW PLAN. Coming off excellent week — build on that momentum. Back to bar is new for her but she is ready for volume. Let reps build confidence. Don't introduce set piece corrections today — stay on back to bar only.",
    },
    {
      id: 1749990001,
      date: "2026-06-29",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "",
      note: "MAGGIE PLAN. Back to bar + crosses — her full summer OOP package. Challenge her, she can handle intensity now. Push 1v1 at the end if time. Single cue: stay low and explosive moving backwards.",
    },
    {
      id: 1749990000,
      date: "2026-06-29",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION PLAN — Mon Jun 29. Keepers: Harlow, Maggie, Kenzie. OOP: Back to bar + crosses — primary focus, high volume, minimal intervention. Single cue for all three: stay low and explosive moving backwards. IP: Around/Through free play, light, weak foot where natural. Don't let IP eat into back to bar volume. Finish with 1v1 for Maggie if time allows.",
    },
    {
      id: 1749980009,
      date: "2026-06-29",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "NEXT TWO SESSIONS PLAN — Back to bar focused with crosses worked in. Brave first. Let volume teach on back to bar. Crosses reinforce the explosion and commitment standard.",
    },
    {
      id: 1749980008,
      date: "2026-06-28",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Struggled with bouncing ball / wet surface work. Better on crosses — improvement there. Key correction: catch everything, drop less, stay high and trust her hands. Needs consistent volume on high ball claiming.",
    },    {
      id: 1750070000,
      date: "2026-07-08",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION LOG — Wed Jul 8. Excellent session. Keepers: Adi (returning from ankle injury), Harlow, Ryan, Kenzie, Kylie. Maggie at GA ID camp. Session had rapid long horizontal movement demanding calculated set timing — exposed keepers timing set on habit rather than reading the ball. Started with GK moving backwards receiving pass then exploring all types of movement and decisions. Long clipped vertical channel ball was good — need to continue providing high quality volume. Volume of high quality cross service has developed the technique significantly. Physicality element on crosses still needed — exercise ball should play a part going forward per Maggie's own observation.",
    },
    {
      id: 1749980007,
      date: "2026-06-28",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Start Higher",
      rating: "⭐⭐ Developing",
      note: "Bouncing ball / wet surface — hips behind ball, stay level. Spread still being improvised around his body mechanics. Power step correction is the anchor. Excellent on crosses — consistent strength.",
    },
    {
      id: 1749980006,
      date: "2026-06-28",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Be Brave",
      rating: "⭐⭐⭐ Solid",
      note: "Excellent week overall. Spread starting to consolidate. Bouncing ball work — hips behind the ball, stay level. Back to bar and spread are the two carry-forwards into next week.",
    },
    {
      id: 1749980005,
      date: "2026-06-28",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "⭐⭐⭐ Solid",
      note: "Crosses continuing to improve. Bouncing ball / wet surface work — hips behind the ball, stay level. Consistent upward trend across the week.",
    },
    {
      id: 1749980004,
      date: "2026-06-28",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION LOG — Sat Jun 28. Keepers: Harlow, Maggie, Ryan, Kylie. Driven balls and shots bouncing off turf — wet surface, took advantage of conditions. Key technical focus: hips behind the ball, don't let height rise then come back down. Stay level, meet the ball. Good opportunity to work on low body mechanics under realistic game conditions.",
    },
    {
      id: 1749980003,
      date: "2026-06-27",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Start Higher",
      rating: "⭐⭐ Developing",
      note: "Spread technique needs improvisation to find what works for his body — not a standard fit yet. Power step remains anchor correction all summer: rolling to outside of foot, needs ball of foot plant and explosion. Excellent in crossing situations — use as confidence base.",
    },
    {
      id: 1749980002,
      date: "2026-06-27",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Be Brave",
      rating: "⭐⭐⭐ Solid",
      note: "Excellent week of training — lots of great moments. Spread starting to click. Live action emphasis with crosses reinforcing technique. Back to bar and spread consolidation are the two priorities going forward.",
    },
    {
      id: 1749980001,
      date: "2026-06-27",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "⭐⭐⭐ Solid",
      note: "Improving on crosses every session — consistent upward trend. Spread technique reinforced through crossing situations. Back to bar remains primary OOP focus.",
    },
    {
      id: 1749980000,
      date: "2026-06-27",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION LOG — Fri Jun 27. Keepers: Harlow, Maggie, Ryan. Reintroduced spread technique quickly then into live action as much as possible. Crosses woven in to reinforce spread — catching as high as possible with correct process throughout.",
    },
    {
      id: 1749970004,
      date: "2026-06-25",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Really good session for an 8th grader. Two corrections: (1) Hard shot between feet — defaulting to kick save, transitioning to hands every time. (2) Spread technique — foot sliding too direct, needs to kick wider to block the mouth of the goal. Sequence: foot wide → head forward → shoulders forward → arms wide.",
    },
    {
      id: 1749970003,
      date: "2026-06-25",
      type: "OOP",
      subtag: "1v1",
      pillar: "Hold Yourself to a Standard",
      rating: "⭐⭐ Developing",
      note: "Working into spread technique, needs more reps. Over-emotional with failure — self-criticism blocking technical progression. Coaching approach: pure reps with harsh technical guardrails. Let her crash into the correction repeatedly without emotional rescue. Next two sessions: spread technical reps → live 1v1 decisions. Austin as attacker to protect her physically.",
    },
    {
      id: 1749970002,
      date: "2026-06-25",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Be Brave",
      rating: "⭐⭐⭐ Solid",
      note: "Spread technique — never fully developed it. Now surrounded by keepers who can do it consistently — good peer pressure. Ended session with a perfect form rep. Needs volume with guided reps to consolidate. Set piece corrections from weekend games: free kicks — feet not square to ball. Corners — hips square to penalty spot instead of ball with slight upfield tilt. Back to bar and over-the-head technique also on development list.",
    },
    {
      id: 1749970001,
      date: "2026-06-25",
      type: "OOP",
      subtag: "1v1",
      pillar: "Be Brave",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "First session back from California. Trained full speed, excellent. Always hard on herself — mental growth is real but self-criticism still present. Summer OOP priorities confirmed: back to bar, ball over head/back post, crosses, 1v1 with Austin as attacker to sharpen decision-making under real pressure.",
    },
    {
      id: 1749970000,
      date: "2026-06-25",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION LOG — Wed Jun 25. Keepers: Maggie, Harlow, Kenzie, Kylie. Absent: Adi (ankle), Ryan. Grade levels confirmed: Adi (college freshman), Maggie (junior), Kenzie (senior), Harlow (sophomore), Kylie (8th grade), Ryan (8th grade). Theme: Spread technique. Structure: stretch + warmup ~15 min → slow heavy instruction drill establishing correct end point → announced live building into spread action. Good problem-solution session — identified trouble spreading and attacking high crossing ball, built drill progression to solve it.",
    },
    {
      id: 1749960000,
      date: "2026-06-25",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "WEEK PLAN — Week of Jun 25. Theme: Back post cross → Zone 2/3 extension dive → 1v1. Single compound sequence, three actions. Back post + extension: less technical feedback, more volume — let reps teach. 1v1: announced, slow, eased in. Technical anchor for every rep across all keepers: power step — ball of foot, loaded, explosive. Progression across the week: announced/isolated early → linked sequence mid-week → semi-live end of week. Fewer themes, higher volume on each.",
    },
    {
      id: 1749950003,
      date: "2026-06-24",
      type: "IP",
      subtag: "Around",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "Possession quality in weekend games was impressive. IP decision-making translating into games — a real positive sign for the summer work.",
    },
    {
      id: 1749950002,
      date: "2026-06-24",
      type: "Mental",
      subtag: "Facts Not Emotion",
      pillar: "Be a Better Human",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "Really strong mental development — learning from the book and through coaching conversations. Weekend games were impressive especially in possession. Genuine growth on the Inner Game side. Something to acknowledge.",
    },
    {
      id: 1749950001,
      date: "2026-06-24",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Back to bar and explosive jump technique remain the primary OOP gap — still struggling to explode into jumps consistently. This is the biggest technical focus for the rest of the summer.",
    },
    {
      id: 1749950000,
      date: "2026-06-24",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION LOG — Tue Jun 24. Keepers: Kenzie, Maggie, Ryan (first session). Absent: Harlow (traveling), Adi (ankle injury — expected back, timeline unknown). Set 1 (small area, tight): Zone 1 low save → 1v1 → cross over head (open hips, drop off, track ball). Set 2 (expanded, compound): Zone 1 low → back pass with pressing winger → IP decision Through or Around based on press → cross → 1v1 → shot from top of box.",
    },
    {
      id: 1749930005,
      date: "2026-06-21",
      type: "IP",
      subtag: "Beyond",
      pillar: "Weapon with the Ball",
      rating: "",
      note: "SUNDAY PLAN. IP free play last 10 min. Low physical demand. Let her make decisions freely. Weak foot beyond ball if opportunity arises naturally.",
    },
    {
      id: 1749930004,
      date: "2026-06-21",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "",
      note: "SUNDAY PLAN. Front hand parry must hold under semi-live pressure. If it breaks down revert to announced briefly then back to semi-live — don't let back hand habit re-anchor. Zone 2/3 live ball — stay explosive. 1v1 live — commit, don't hesitate.",
    },
    {
      id: 1749930003,
      date: "2026-06-21",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION PLAN — Sun Jun 21. Keepers: Adi, Kenzie only. 90 min. SEMI-LIVE TO LIVE — Saturday builds the pattern, Sunday tests whether it holds. Technical → Moment progression across the weekend. Structure: 0–20 min footwork + positioning only (no diving, let bodies warm up), 20–60 min semi-live sequence, 60–80 min live environment, 80–90 min IP free play low physical demand finish on a positive. Sequence: (1) Back post semi-live — varied timing, flight, pace. Read not anticipate. (2) Zone 2/3 live ball — real pace from angle, transition from action 1. (3) 1v1 live — actually attacking, real decision, no announcement. Periodization: second 90 min back to back — manage explosive volume throughout.",
    },
    {
      id: 1749940001,
      date: "2026-06-20",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Read, Don't React",
      rating: "⭐⭐⭐ Solid",
      note: "Really good session. Setting early to the ball even when depth wasn't perfect — good instinct and awareness. Staying low and explosive while dropping off as ball goes over. Discipline to set early rather than wait was the standout positive. Backpost footwork pattern introduced and drilled — carry into semi-live Sunday.",
    },
    {
      id: 1749940000,
      date: "2026-06-20",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "DEBRIEF — Sat Jun 20. Keepers: Adi, Kenzie. Technical first 30–40 min then volume/reps. Technical block: (1) Extension step — exploding off ball of foot, not rolling to outside. (2) Backpost footwork — weight on balls of feet, open hips perpendicular to ball, side-on dropping off in line, drive near knee toward ball, hips end up square swinging through. Replaces backpedaling from scratch. Volume block: distribution pass back → driven midfield ball → clipped cross from wide → patience to explode on the way up not down → shot at end. Patience on clipped ball is the key teaching point — they want to jump early at peak, correction is stay patient and explode through on the way up. Same timing problem as back to bar.",
    },
    {
      id: 1749930001,
      date: "2026-06-20",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "",
      note: "SATURDAY PLAN. Back post ball — front hand parry, not back hand. Stay low moving to the back post. Don't let back hand habit return in announced environment. Zone 2/3 near post — explosive extension. 1v1 finish — angle control, commit.",
    },
    {
      id: 1749930000,
      date: "2026-06-20",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION PLAN — Sat Jun 20. Keepers: Adi, Kenzie only. 90 min. ANNOUNCED + CONTROLLED — tight spacing, clean technique, correct movement patterns. Sequence: (1) Cross over head / back post — positioning defending the 6, catch vs parry decision, backpedaling addressed in controlled environment. (2) Zone 2/3 extension near post — recover position, get into ball, transition from action 1. (3) 1v1 finish — out of zone 2/3 save, attacker follows up, angle control spread vs smother commit. Rotation: one keeper working full sequence, one watching + peer coaching. Periodization: back to back 90s — manage full extension diving volume, more footwork and positioning early, explosive work second half.",
    },
    {
      id: 1749920001,
      date: "2026-06-17",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Back to Bar — getting too tall moving backwards. Loses athletic position retreating, can't generate explosive power when moment arrives. Back hand parry instead of front hand — front hand parry keeps momentum going away from goal, back hand pulls it back in. No backpedaling issue. Front hand vs back hand needs to be isolated and drilled before going back into live.",
    },
    {
      id: 1749920000,
      date: "2026-06-17",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "DEBRIEF — Wed Jun 17. Keepers: Adi, Kenzie, Harlow, Kylie. Maggie out. Primary theme: Back to Bar straight out. Two chronic habits across group: (1) getting too tall moving backwards — can't generate explosive power when moment arrives, (2) jumping at the peak — timing too early, ball still rising, no play to be made. Both same root: not staying low and loaded while moving. Backpedaling emerged organically as a genuine revelation — never been taught, became chronic in live portions. Worth dedicating real time to. Mostly failure today — reading it correctly as a positive. Real technical gap worth solving.",
    },
    {
      id: 1749910003,
      date: "2026-06-17",
      type: "Mental",
      subtag: "Experience over Instruction",
      pillar: "Be a Better Human",
      rating: "",
      note: "Experience over Instruction — let her explore different ways to achieve the goal. Fail forward. Enjoy the input as long as the output meets the standard.",
    },
    {
      id: 1749910002,
      date: "2026-06-17",
      type: "IP",
      subtag: "Through",
      pillar: "Weapon with the Ball",
      rating: "",
      note: "Expanded Around/Through decisions. Weak foot Through ball — find natural opportunities, don't force it. Let her explore the read and find her own solution.",
    },
    {
      id: 1749910001,
      date: "2026-06-17",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Own Your Moments",
      rating: "",
      note: "Back to Bar Day 3. Defending goal vs defending 6 on wide balls — keep slipping balls wide to force the read. Semi-live environment, step up from Tuesday announced work.",
    },
    {
      id: 1749910000,
      date: "2026-06-17",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION PLAN — Wed Jun 17. Keepers: Adi, Kenzie, Harlow, Kylie (2nd session overall). Maggie out (California). IP: Expanded Around/Through decision-making — more scenarios, more reads, less predictability. Weak foot woven in naturally. Output is the standard, input is theirs to find. OOP: Defending 6 / Back to Bar / Crosses into 1v1 + shot stopping. Semi-live step up from Tuesday. Slip wide balls to force defending goal vs defending 6 read. Mental: Experience over Instruction — let them explore, fail forward, find their own solution. Set the environment, hold the standard, don't over-coach the path.",
    },
    {
      id: 1749900002,
      date: "2026-06-16",
      type: "IP",
      subtag: "Through",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐⭐ Solid",
      note: "Decision-making sharp, technique clean. Mostly strong foot today — appropriate for where she is. Weak foot is the next layer, work it in naturally. Continue Around/Through read as the foundation.",
    },
    {
      id: 1749900001,
      date: "2026-06-16",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "⭐⭐⭐ Solid",
      note: "Back to Bar — good progression through announced block. Habits improving in real time over the session. Next: semi-live Wednesday — varied timing or slip into 1v1. Keep finding wide balls to work defending goal vs defending 6.",
    },
    {
      id: 1749900000,
      date: "2026-06-16",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "DEBRIEF — Full group. High energy, fun, lots of laughing. Good culture. Spent most of the session in structured/announced back to bar — right call given it was Day 1 for Kenzie and Harlow. Technique habits improving in real time. IP decision-making was the standout — really good reads, clean technique, mostly strong foot which was appropriate. Carry-forwards to Wednesday: semi-live back to bar, defending goal vs defending 6 via wide balls, 1v1 opportunities, weak foot IP reps where natural. Kylie (8th grade) joining Wednesday.",
    },
    {
      id: 1749800003,
      date: "2026-06-16",
      type: "IP",
      subtag: "Through",
      pillar: "Weapon with the Ball",
      rating: "",
      note: "Around/Through decision framework introduced. Pressing forward (Austin) determines the answer — press to outside back = Through to pivot. Drop as false striker = exploit gap Through or Beyond. Eyes giving away target — let the press expose it, don't over-coach.",
    },
    {
      id: 1749800002,
      date: "2026-06-16",
      type: "OOP",
      subtag: "1v1",
      pillar: "Own Your Moments",
      rating: "",
      note: "1v1s woven into live block. Depth and cutback location — hips square, committed. Angle control focus.",
    },
    {
      id: 1749800001,
      date: "2026-06-16",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "",
      note: "Back to Bar — Day 2. Demoed for Kenzie and Harlow alongside Maggie. Announced from hands (angle of the 6) → semi-live (varied timing, same serve) → live. Key cue: meet the ball as it drops, not at the peak. Stay explosive moving backwards. Process is the goal, not the save.",
    },
    {
      id: 1749800000,
      date: "2026-06-16",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "FULL GROUP SESSION — Adi, Maggie, Kenzie, Harlow + Austin (pressing forward). Structure: Announced back to bar (Adi + Maggie demo) → semi-live back to bar (varied timing, same serve) → live full sequence. IP: Around/Through decision determined by pressing forward. Sequence per rep: back to bar → IP decision → shot from same angle. One keeper working, one resting, two ready. Inner Game anchor before live reps: process is the goal, not the outcome. Trusting Your Body.",
    },
    {
      id: 1749700002,
      date: "2026-06-14",
      type: "IP",
      subtag: "Through",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐⭐ Solid",
      note: "Free play emphasis — let them play without restrictions after six days of driven through ball technique. Live environment: outside backs playing wide, live back to bar + shot stop decisions, 1v1 defending woven in (Zone 1/2). 1v1 and spread situations now happening naturally — last summer's work paying off. Hope for this summer: volume and information plants the seeds, players let it grow inside their own game once back with their teams.",
    },
    {
      id: 1749700001,
      date: "2026-06-14",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Back to Bar — Day 1. Session ran 9:30–11:00 (arrived 20 min late). Main technical issue: attacking ball at highest loop point — correct habit for crosses, wrong timing for back to bar. Ball needs to be met as it drops, closer to goal line. Moving backwards explosively while staying ready to explode at the right moment. Timing is the challenge — day one, expected to develop with volume. Nasty habits to work out — may need more creative approach. Periodization concern: high intensity, needs spacing to maintain effort quality.",
    },
    {
      id: 1749600014,
      date: "2026-06-13",
      type: "IP",
      subtag: "Through",
      pillar: "Weapon with the Ball",
      rating: "",
      note: "Around/Through decision session. Eyes giving away target on through ball — let pressure reps expose this naturally. Don't call it out until she sees it herself. Volume teaches here.",
    },
    {
      id: 1749600013,
      date: "2026-06-13",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Start Higher",
      rating: "",
      note: "Back to Bar + Defending 6. Conservative depth — needs to be higher before ball is played, not scrambling after. Cutbacks: hips not square, frozen between options — make her commit. Ownership of space is the thread through both OOP topics today.",
    },
    {
      id: 1749600003,
      date: "2026-06-10",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Start Higher",
      rating: "⭐⭐ Developing",
      note: "Ball line consistency not automatic yet. Depth still needs work. Six-yard box location when cross is the threat (not shot on goal) needs repetition. Cutback location — finding the same spot consistently is the goal. Brave but positioning and decision-making still inconsistent.",
    },
    {
      id: 1749600002,
      date: "2026-06-10",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Read, Don't React",
      rating: "⭐⭐ Developing",
      note: "Zone 1/2/3 distinction needs more visual context ahead of sessions. Consider providing reference clips or a visual diagram before next shot-stopping block. On coach to prep this.",
    },
    {
      id: 1749600001,
      date: "2026-06-10",
      type: "IP",
      subtag: "Through",
      pillar: "Weapon with the Ball",
      rating: "⭐ Needs Work",
      note: "First session back. Struggling with driven through ball technique — right foot improving rapidly but weak foot through ball needs consistent reps. Responded well to video/visual cues when provided. Keep sourcing reference clips before sessions on this.",
    },
],
  Maggie: [
    {
      id: 1750110005,
      date: "2026-07-12",
      type: "Mental",
      subtag: "Facts Not Emotion",
      pillar: "Own Your Moments",
      rating: "",
      note: "COACHING CONTEXT — Jul 12. The gambling problem: keepers do all the work to get to the right spot then undermine it by guessing before the perceptual cue arrives. Particularly on cutback variations — attacker on end line with multiple options (cutback into traffic, mishit on goal, deliberate post shot). No matter how it ends, the beginning is being set, balanced, and ready to react. Not guessing. The keeper controls the controllables — positioning, set, balance — and then waits for the trigger. Guessing is abandoning all that work at the last moment. Facts not emotion applied directly: I am set. I am balanced. I will react. Did cutback variations with this mental framing throughout. Coaching approach: micro weight distribution and feeling notes appropriate for Maggie and Harlow at this stage — past large technical corrections. Staying quiet when not appropriate, letting them work through it. Adding small layers when the moment is right.",
    },
    {
      id: 1750110002,
      date: "2026-07-12",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Own Your Moments",
      rating: "",
      note: "KEY OBSERVATION: Backpedaling instead of shuffling when moving backward to track the ball — back to bar habit surfacing in a different context. Cannot see the ball while backpedaling, major limiting factor. Fix: open hips, shuffle, stay connected to the ball. Same root as back to bar. COACHING NOTE: Build as a recurring low-key element in each session — one announced sequence per session targeting shuffle vs backpedal until the habit breaks. External cue (keep the ball) likely more effective than technical correction (shuffle your feet) per attentional focus research.",
    },
    {
      id: 1750100001,
      date: "2026-07-11",
      type: "Camp / Game Feedback",
      subtag: "",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "Distribution only — coming off National GA ID camp, no shots or OOP reps. Excellent in possession. Managing camp fatigue load appropriately.",
    },
    {
      id: 1750080001,
      date: "2026-07-09",
      type: "Camp / Game Feedback",
      subtag: "Beyond",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐⭐ Solid",
      note: "Camp IP summary: long ball quality degrades under fatigue — specifically the driven ball at distance. Carry-forward for remaining summer sessions: include driven ball reps late in sessions when keepers are fatigued to build that specific resilience. This is the next layer of the IP weapon development.",
    },
    {
      id: 1750080000,
      date: "2026-07-09",
      type: "Camp / Game Feedback",
      subtag: "",
      pillar: "",
      rating: "",
      note: "NATIONAL GA ID CAMP — Final Day. National selection game. Fun, good saves. Only noted issue: long balls going short under fatigue — hit one or two short. First thing to degrade under fatigue on IP — not a technique problem, a volume-under-fatigue problem. Fix is driven ball reps at distance when fatigued in training. Overall a strong weekend. Plans: Saturday session — will attend and serve, won't play. Sunday TBD based on how she feels.",
    },
    {
      id: 1750060002,
      date: "2026-07-08",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "⭐⭐⭐ Solid",
      note: "KEY INSIGHT FROM CAMP: The real gap on crosses is contact with attackers — not the technique, not the catching. She identified this herself in real time. The punch through traffic in wet conditions at a corner is the most significant OOP moment of the summer. She made contact and committed. Carry-forward: design sessions that force physical contact situations on crosses — the exercise ball work was the right instinct earlier in the summer, needs more volume.",
    },    {
      id: 1750040000,
      date: "2026-07-07",
      type: "Camp / Game Feedback",
      subtag: "",
      pillar: "",
      rating: "",
      note: "SESSION LOG — Mon Jul 7. One of the best sessions of the summer. Two back to back sessions. Session 1 (6-7pm): Kylie + Knox — power step and zone 3 extension, fundamental introduction. Session 2 (7-8pm): Ryan, Harlow, Kenzie — best crossing session of the entire summer. Keepers exploding into jump and catching at highest point possible. Most balls being caught cleanly — volume investment from the summer compounding into real technique. Three keepers had their best or near-best sessions on the same day.",
    },
    {
      id: 1750060001,
      date: "2026-07-08",
      type: "Camp / Game Feedback",
      subtag: "Facts Not Emotion",
      pillar: "Be a Better Human",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "GA ID Camp leadership conference covered facts vs feelings mindset framework — same Inner Game concepts being taught at national level. Maggie noted the coaching staff worded it differently and said Austin's version makes more sense. Significant validation that the mental framework being built all summer is at the right level. Short memory and self-kindness framing resonated at the national event.",
    },

    {
      id: 1750060000,
      date: "2026-07-08",
      type: "Camp / Game Feedback",
      subtag: "",
      pillar: "",
      rating: "",
      note: "NATIONAL GA ID CAMP — Day 2, Game Updates. Second game significantly better than first — much more comfortable, played her own game. Punch through traffic off a corner in wet conditions — made contact with an attacker, which she identified as the real gap on crosses (contact with attackers, not the technique or catching). This is the Be Brave standard applied in the highest stakes environment of the summer. Switched teams, unorganized backline — used it as an opportunity to lead rather than a problem to manage. Nebraska-style stretched team made it engaging. Overall gaining confidence.",
    },

    {
      id: 1750050005,
      date: "2026-07-08",
      type: "Camp / Game Feedback",
      subtag: "",
      pillar: "",
      rating: "",
      note: "COACHING RESPONSE TO GA ID CAMP FEEDBACK. Zone 2 correction from head coach: disagree — this is an advanced technique that NWSL goalkeepers struggle with. Continue developing it. Will serve her phenomenally long term. Do not change course on this. High balls: trust your body and instincts. She's there because she's already proven her talent. Short memory, stay with the facts, keep pushing. She's a new goalkeeper on high balls compared to the start of summer — acknowledge that growth. Organization with unfamiliar CBs: introduce yourself immediately when new CBs come on. Get their name. Say: 'Hey, I'm Austin. I'll keep talking to you so you know where I am and what I'm seeing. If we see something different let me know — I want to be on the same page. I got your back.' Let confidence and voice command the standard, not their habits. Use their names in communication. If something goes wrong, correct it to get on the same page — not to be right or make them feel dumb. Leadership habit that will be essential on her new team next year.",
    },
    {
      id: 1750050002,
      date: "2026-07-08",
      type: "Camp / Game Feedback",
      subtag: "",
      pillar: "",
      rating: "",
      note: "NATIONAL GA ID CAMP — Day 2. Thought she did okay. Super fast paced — when mistakes happen the reset window is much shorter than in training sessions. Had trouble adjusting to that pace of reset. GK session was basic handling. KEY FEEDBACK FROM HEAD COACH: didn't like her zone 2 dive — told her to move her feet rather than set ball line and dive. She felt with the pace of the ball she didn't have time to move her feet. COACHING NOTE: This is the next layer above ball line set — elite expectation is feet adjustment to get behind the ball before extending, not diving from static set. Not a contradiction of summer work, it's the refinement above it. Worth addressing in sessions going forward.",
    },
    {
      id: 1750050004,
      date: "2026-07-07",
      type: "Camp / Game Feedback",
      subtag: "Facts Not Emotion",
      pillar: "Be a Better Human",
      rating: "⭐⭐⭐ Solid",
      note: "GA ID Camp mental observation: self-awareness is sharp — diagnosing her own problems accurately in real time. Reset speed is the primary mental gap at this level — pace of the game compresses recovery window between moments significantly more than training sessions. This is a direct and honest self-observation worth building into future session design: run sessions at higher tempo to compress the reset window.",
    },
    {
      id: 1750050003,
      date: "2026-07-07",
      type: "Camp / Game Feedback",
      subtag: "Beyond",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐ Developing",
      note: "GA ID Camp IP observation: timid with ball at feet initially — playing it safe. Long balls over top too narrow early, found the wing by end of first game. IP courage developing but still needs unfamiliar environment reps to trust it earlier. Organization with unfamiliar backlines is a specific gap — system is relationship-dependent rather than universal. Next level requires universal organizational language.",
    },
    {
      id: 1750050001,
      date: "2026-07-07",
      type: "Camp / Game Feedback",
      subtag: "",
      pillar: "",
      rating: "",
      note: "NATIONAL GA ID CAMP — Day 1 continued. 8v8s after GK session — condensed, hard to show distribution. Handful of good 1v1 saves. Higher balls still a struggle — in her own head about shots around the head level, messed a few up. Attributed to jitters. Only getting one half tomorrow — two 2010s brought up to play with 09/08 teams. Overall: fine for a session, definitely nervous, expects to be better tomorrow.",
    },
    {
      id: 1750050000,
      date: "2026-07-07",
      type: "Camp / Game Feedback",
      subtag: "",
      pillar: "",
      rating: "",
      note: "NATIONAL GA ID CAMP — Virginia Jul 7-9. Maggie's real-time feedback via text. DAY 1: Game + media day circuit + second game. Felt timid with ball at feet initially. First two long balls over the top too narrow — found two good ones to the wing late. One 1v1 save, handful of good cutback saves. Primary struggle: organizing unfamiliar backlines — CBs weren't used to her check points, would pass it back to where their own keeper would be, forcing her to chase under pressure. Constant rotation of defenders made adjustment difficult.",
    },

    {
      id: 1750035000,
      date: "2026-07-06",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "SESSION — Sun Jul 6. Bonus session with Kam (Gretna East, prepping for FGCU ID camp). High volume, minimal coaching, maximum realism. Austin serving all crosses. One of Maggie's best sessions on crosses — started going a bit late on jumps but exploring extending as high as possible. Timing not yet calibrated but the movement is emerging — productive failure, not a concern. Let the extension consolidate first, timing will self-correct through volume.",
    },
    {
      id: 1749900004,
      date: "2026-06-16",
      type: "IP",
      subtag: "Around",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐⭐ Solid",
      note: "Decision-making good. Strong foot dominant today — natural at this stage. Weak foot opportunities to be woven in on return from trip.",
    },
    {
      id: 1749900003,
      date: "2026-06-16",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Own Your Moments",
      rating: "⭐⭐⭐⭐ Sharp",
      note: "Best in the group at defending goal vs defending 6 — good benchmark for Kenzie and Harlow to reference. Back to bar progressing well. Last session before California trip — out rest of the week.",
    },
    {
      id: 1749800006,
      date: "2026-06-16",
      type: "IP",
      subtag: "Around",
      pillar: "Weapon with the Ball",
      rating: "",
      note: "Around/Through decision framework. She has the instincts — let her play. Watch for side-to-side swinging instead of attacking through and beyond. Volume teaches here.",
    },
    {
      id: 1749800005,
      date: "2026-06-16",
      type: "OOP",
      subtag: "1v1",
      pillar: "Own Your Moments",
      rating: "",
      note: "1v1s per her request — live reps with consequence. Decision-making focus: spread vs smother, commit to a direction. Give her meaningful volume here.",
    },
    {
      id: 1749800004,
      date: "2026-06-16",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "",
      note: "Back to Bar — Day 2. Demoed alongside Adi for Kenzie and Harlow. Teaching role reinforces her own understanding. Key cue: meet the ball dropping, stay explosive moving backwards.",
    },
    {
      id: 1749700005,
      date: "2026-06-14",
      type: "IP",
      subtag: "Through",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐⭐ Solid",
      note: "Free play emphasis — live environment with outside backs, back to bar + shot stop decisions, 1v1 defending woven in. Same seed-planting philosophy as Adi. Let the volume and experience grow inside her game.",
    },
    {
      id: 1749700004,
      date: "2026-06-14",
      type: "OOP",
      subtag: "1v1",
      pillar: "Own Your Moments",
      rating: "",
      note: "FLAG FOR RETURN FROM TRIP: Maggie requested more 1v1 work. Prioritize this when she's back from California (out Jun 17, 20, 21, 23, maybe 24). Build 1v1 reps into her first session back.",
    },
    {
      id: 1749700003,
      date: "2026-06-14",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Back to Bar — Day 1. Same timing issue as Adi: attacking ball at highest loop point instead of letting it drop. Nasty habits built over time — patience and volume are the tools. Goal: let concepts grow within live chaotic moments. Information and encouragement, not correction overload. Periodization concern shared with Adi — high intensity work needs spacing.",
    },
    {
      id: 1749600016,
      date: "2026-06-13",
      type: "IP",
      subtag: "Around",
      pillar: "Weapon with the Ball",
      rating: "",
      note: "Around/Through decisions. She has the instincts — let her play. Only intervene if she's swinging side to side instead of attacking through and beyond. Volume teaches here.",
    },
    {
      id: 1749600015,
      date: "2026-06-13",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "",
      note: "Back to Bar: overhead decision — parry or catch. Make her verbalize the decision before she acts, every rep. Defending 6: decision to come is made before the ball arrives, not after.",
    },
    {
      id: 1749600006,
      date: "2026-06-10",
      type: "Mental",
      subtag: "Facts Not Emotion",
      pillar: "Be a Better Human",
      rating: "⭐⭐ Developing",
      note: "Letting mistakes avalanche. One bad moment compounds into the next and the session deteriorates. This is the core Inner Game application for her — the moment passes, she needs to let it pass. Most technically complete keeper in the group. Mental reset between moments is the lever this summer.",
    },
    {
      id: 1749600005,
      date: "2026-06-10",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Own Your Moments",
      rating: "⭐⭐ Developing",
      note: "Bravery on crosses is present — consistency of the decision to go is not. Coming out aggressively is the standard, not the exception.",
    },
    {
      id: 1749600004,
      date: "2026-06-10",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Overhead decisions — when to parry vs catch — inconsistent. Back to bar on shots above head is the primary technical focus. Decision to dive at everything needs to be the default mindset, not a choice.",
    },
],
  Kenzie: [
    {
      id: 1750110004,
      date: "2026-07-12",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "Out Jul 12 — sick.",
    },
    {
      id: 1750100004,
      date: "2026-07-11",
      type: "Mental",
      subtag: "Facts Not Emotion",
      pillar: "Hold Yourself to a Standard",
      rating: "⭐ Needs Work",
      note: "Continues to struggle — primarily mental, surfaces under compound-action fatigue (today ~8 actions/set, high heat ~90-95°F). Looks for an out under difficulty — quick to say 'I can't', blame external factors, or get down on herself. Focus: building mental foundation. Finger injury still a factor. Senior year — this is the last summer.",
    },
    {
      id: 1750090000,
      date: "2026-06-30",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "TEXT FROM KENZIE Jun 30: Hairline fracture in knuckle + messed up ligament. Doctor said tape and splint for 2 weeks. Will miss Jun 30 session, expected back next week if careful. Returned Jul 7 as planned. NOTE: Shot stopping inconsistency observed in recent sessions may be partly compensation for this injury — separate the injury effect from technique gaps before making coaching decisions.",
    },
    {
      id: 1749950004,
      date: "2026-06-24",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "Big project across the board — needs work in multiple areas and doesn't improve quickly. Coaching note: she may be carrying too many corrections at once. Punching, power step, backpedaling, communication — that's a lot. Consider narrowing to one thing per session and holding there longer than feels comfortable. Volume and patience are the tools. Confidence may be the real gap.",
    },
    {
      id: 1749930007,
      date: "2026-06-21",
      type: "IP",
      subtag: "Through",
      pillar: "Lead Out Loud",
      rating: "",
      note: "SUNDAY PLAN. IP free play last 10 min. Communication — name + direction every rep. Low physical demand. Let her make decisions freely.",
    },
    {
      id: 1749930006,
      date: "2026-06-21",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Start Higher",
      rating: "",
      note: "SUNDAY PLAN. Backpedaling pattern from Saturday must hold when ball is unpredictable. If it breaks down pause and reset — don't let it slide in live environment. Punching: if habit returns, stop and reset. Don't let it re-anchor under pressure. Communication every rep.",
    },
    {
      id: 1749940002,
      date: "2026-06-20",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "⭐⭐ Developing",
      note: "Process focus — output is fine if she gets scored on, input standard is what matters. Currently a little late meeting the ball — timing needs to come earlier, exploding up and through rather than waiting. Not meeting it at the right point yet. Extension step off ball of foot worked in technical block. Keep reinforcing the standard without making the outcome the measure.",
    },
    {
      id: 1749930002,
      date: "2026-06-20",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Start Higher",
      rating: "",
      note: "SATURDAY PLAN. Back post ball — walk through footwork pattern with no ball first, then add ball. Backpedaling addressed in controlled environment before any live rep. No punching on anything she can get two hands to. Zone 2/3 — power step plant on ball of foot. 1v1 finish — commit to a direction.",
    },
    {
      id: 1749920004,
      date: "2026-06-17",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "Kylie — struggled most with live portion when ball went over her head. Backpedaling a significant issue. 2nd session overall — expected, not a concern yet. Back to bar and backpedaling are both new concepts. Keep it encouraging, high volume, simple cues.",
    },
    {
      id: 1749920002,
      date: "2026-06-17",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "⭐ Needs Work",
      note: "Struggled throughout the session. Punching habit on crosses persisting — decisions to punch rather than catch still defaulting wrong. Backpedaling issue in live portions — chronic problem that emerged organically, never been taught. Needs dedicated progression built around it. Same too-tall/timing issue as group on back to bar.",
    },
    {
      id: 1749910010,
      date: "2026-06-17",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "Kylie — 2nd session overall (8th grade). Observe and absorb the group environment. Back to bar will be new — keep it simple, one cue only. 1v1 is her comfort zone, use that confidence. Keep it encouraging, don't overload with corrections.",
    },
    {
      id: 1749910006,
      date: "2026-06-17",
      type: "Mental",
      subtag: "Experience over Instruction",
      pillar: "Be a Better Human",
      rating: "",
      note: "Volume and encouragement are the tools. Let her find her own solution. Don't over-correct — she's had enough critique.",
    },
    {
      id: 1749910005,
      date: "2026-06-17",
      type: "IP",
      subtag: "Through",
      pillar: "Lead Out Loud",
      rating: "",
      note: "Expanded decision-making. Communication every rep — name + direction. Let her explore weak foot options naturally.",
    },
    {
      id: 1749910004,
      date: "2026-06-17",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "",
      note: "Back to Bar Day 2. Defending goal vs defending 6 on wide balls — this is a real weak spot, prioritize reps. Crosses: hands not fists, no punching permitted. Power step plant on ball of foot.",
    },
    {
      id: 1749900006,
      date: "2026-06-16",
      type: "IP",
      subtag: "Through",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐⭐ Solid",
      note: "Decision-making good in the session. Strong foot today. Weak foot to be woven in naturally going forward. Keep building the read.",
    },
    {
      id: 1749900005,
      date: "2026-06-16",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "⭐⭐ Developing",
      note: "Back to Bar Day 1 — peer demo from Adi and Maggie helped. Defending goal vs defending 6 is a real weak spot — needs significant reps. Semi-live next Wednesday. Kylie joining Wednesday — good peer learning environment.",
    },
    {
      id: 1749800008,
      date: "2026-06-16",
      type: "IP",
      subtag: "Through",
      pillar: "Lead Out Loud",
      rating: "",
      note: "Around/Through decision framework intro. Communication every rep — name + direction before the ball leaves hands. No exceptions.",
    },
    {
      id: 1749800007,
      date: "2026-06-16",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "",
      note: "Back to Bar — Day 1. Peer demo from Adi and Maggie before her reps. Keep it simple — one cue only: meet the ball as it drops, not at the peak. Don't stack corrections. Power step plant on ball of foot, not rolling to outside.",
    },
    {
      id: 1749600009,
      date: "2026-06-10",
      type: "General",
      subtag: "",
      pillar: "Hold Yourself to a Standard",
      rating: "",
      note: "Biggest technical project of the group. Primary goal is consistent technique across shot-stopping and passing. Volume is the answer — keep reps coming and keep the tone positive.",
    },
    {
      id: 1749600008,
      date: "2026-06-10",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Still defaulting to punch on crosses. Someone told her she can't catch — actively rebuilding confidence in her hands. She has good hands. Reinforce this every session. Do not over-correct technique; she's had enough critique. Volume and encouragement are the tools.",
    },
    {
      id: 1749600007,
      date: "2026-06-10",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Read, Don't React",
      rating: "⭐⭐ Developing",
      note: "Power step plant rolling to outside of foot instead of ball of foot — explosive drive not loading correctly. Zone 1 (between legs) technique needs consistency. Balance and set position when ball arrives still not automatic.",
    },
],
Ryan: [
    {
      id: 1750100002,
      date: "2026-07-11",
      type: "IP",
      subtag: "Through",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐ Developing",
      note: "Positioning correct most of the time. In-possession driving pass technique still developing — under stress defaults to known/safe technique rather than the new one being taught. Needs continued pressure to attempt the harder technique. Gap is technique, not decision-making. Keep applying constraint pressure.",
    },
    {
      id: 1749950006,
      date: "2026-06-24",
      type: "IP",
      subtag: "Through",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐⭐ Solid",
      note: "First session. Excellent in possession already. High balls and crosses are strengths. Weak foot is the IP development priority going forward.",
    },
    {
      id: 1749950005,
      date: "2026-06-24",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "⭐⭐ Developing",
      note: "First session. Power step: rolling to outside of foot instead of ball of foot — same root issue as Kenzie. Limits extension range on zone 2/3 dives. Worth flagging early. Grace given on everything else.",
    },
],
  Harlow: [
    {
      id: 1750110006,
      date: "2026-07-12",
      type: "Mental",
      subtag: "Facts Not Emotion",
      pillar: "Own Your Moments",
      rating: "",
      note: "COACHING CONTEXT — Jul 12. Cutback variations — gambling vs waiting. Set and balanced first, react to the trigger rather than guess. Facts not emotion: I am set. I am balanced. I will react. Micro coaching notes appropriate at this stage. Spread technique on cutbacks is the OOP carry-forward.",
    },
    {
      id: 1750110001,
      date: "2026-07-12",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Own Your Moments",
      rating: "",
      note: "Cutbacks — spread technique on cutback situations is the carry-forward. Same spread correction showing up in cutback-specific moments. Continue building volume on spread in all contexts.",
    },
    {
      id: 1750100003,
      date: "2026-07-11",
      type: "OOP",
      subtag: "Shot-Stopping Z1",
      pillar: "Read, Don't React",
      rating: "⭐⭐⭐ Solid",
      note: "Continued steady progress on driving-pass technique, growing at right pace. OOP: working on timing the set/balance point relative to attacker's touch — shot vs next touch distinction. Spread technique inconsistent — getting too high, leaving gap between legs open despite good ball-line positioning. NOTE: Harlow leaving Sporting at end of summer (coaching reasons, not performance).",
    },
    {
      id: 1749920003,
      date: "2026-06-17",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Be Brave",
      rating: "⭐⭐ Developing",
      note: "Wants to catch everything — right instinct but wrong application when momentum is carrying toward goal. Simple rule needed: if momentum is going in, parry over the bar — don't fight physics. Catch vs parry decision needs to be clarified and drilled with a clear decision framework. No backpedaling issue.",
    },
    {
      id: 1749910009,
      date: "2026-06-17",
      type: "Mental",
      subtag: "Experience over Instruction",
      pillar: "Be a Better Human",
      rating: "",
      note: "Experience over Instruction. Let her fail and explore. Emphasize the output standard, give freedom on the input.",
    },
    {
      id: 1749910008,
      date: "2026-06-17",
      type: "IP",
      subtag: "Beyond",
      pillar: "Weapon with the Ball",
      rating: "",
      note: "Expanded decisions — weak foot beyond ball is the priority. Space on the left, play it left. Let her explore, don't over-direct.",
    },
    {
      id: 1749910007,
      date: "2026-06-17",
      type: "OOP",
      subtag: "Crosses & Cutbacks",
      pillar: "Start Higher",
      rating: "",
      note: "Back to Bar Day 2. Hip orientation on wide balls — face the ball not the post. Defending goal vs defending 6 read on cross scenarios.",
    },
    {
      id: 1749900008,
      date: "2026-06-16",
      type: "IP",
      subtag: "Beyond",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐⭐ Solid",
      note: "Decision-making sharp. Strong foot today. Weak foot beyond ball is the ongoing priority — find natural opportunities to force it.",
    },
    {
      id: 1749900007,
      date: "2026-06-16",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "⭐⭐ Developing",
      note: "Back to Bar Day 1 — peer demo helped. Defending goal vs defending 6 is a weak spot alongside Kenzie. Keep slipping wide balls to force the read and decision. Semi-live next Wednesday.",
    },
    {
      id: 1749800010,
      date: "2026-06-16",
      type: "IP",
      subtag: "Beyond",
      pillar: "Weapon with the Ball",
      rating: "",
      note: "Around/Through/Beyond decision framework. Weak foot conviction on beyond ball — space on the left, play it left. Don't hesitate.",
    },
    {
      id: 1749800009,
      date: "2026-06-16",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "",
      note: "Back to Bar — Day 1. Peer demo from Adi and Maggie. Hip orientation on wide balls — face the ball not the post. She's strong in 1v1 so use that confidence to build momentum into back to bar work.",
    },
    {
      id: 1749600018,
      date: "2026-06-13",
      type: "IP",
      subtag: "Around",
      pillar: "Weapon with the Ball",
      rating: "",
      note: "Around/Through decisions. Weak foot on around ball — driven throw or roll, same pace and purpose as strong foot. Volume teaches here, minimal technical intervention.",
    },
    {
      id: 1749600017,
      date: "2026-06-13",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "",
      note: "Back to Bar: power step into extension — primary technical focus for this session. Defending 6: hip angle on wide balls — face the ball, not the post, every rep.",
    },
    {
      id: 1749600012,
      date: "2026-06-09",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "Best of the group in the air — aggressive, confident, goes and gets it. Note: losing Harlow and Adi after summer (both to Gretna). Stop tracking after summer ends.",
    },
    {
      id: 1749600011,
      date: "2026-06-09",
      type: "IP",
      subtag: "Beyond",
      pillar: "Weapon with the Ball",
      rating: "⭐⭐ Developing",
      note: "Weak foot technique needs reps on through and beyond. Strong foot improved significantly from last year — a big positive. Better on around and clip balls. Needs volume on both feet with driven distribution. More reps, same technique.",
    },
    {
      id: 1749600010,
      date: "2026-06-09",
      type: "OOP",
      subtag: "Shot-Stopping Z2",
      pillar: "Start Higher",
      rating: "⭐⭐ Developing",
      note: "Balance and set position when ball is shot not consistent. Shots overhead — decision-making and technique both need work. Same category as Maggie: managing what happens above the head.",
    },
],
};

const KEEPERS = {
  Adi: {
    sessions: 8,
    notes: "Freshman in college next year. Out May 26–Jun 5. Reports to college Jul 16 — last session Jul 16. Ankle injury — expected back, timeline unknown.",
    oop: [
      "Returning from ankle injury — monitor lateral explosive load, power step compensation",
      "Back to bar timing — ball rising vs dropping, stay low and explosive moving backwards",
      "Cutback location and depth — ball line consistency not yet automatic",
      "Front hand parry on back post balls — back hand habit still present",
    ],
    ip: [
      "Through ball weak foot — right instinct, execution still developing",
      "Eyes giving away target — exposed in live environment",
      "Decision-making when breaking pressure — improving",
    ],
    strengths: [
      "Exceptional bravery on aerial balls",
      "Early set habit on back post balls — standout positive from pre-injury sessions",
      "Strong transition urgency",
      "Excellent game awareness",
    ],
  },
  Maggie: {
    sessions: 16,
    notes: "Junior. Selected for National GA ID camp in Virginia Jul 7–9 — major achievement. Out Jul 7–8 confirmed. Jul 11 status TBD pending flights. Out Jun 17–24 (California) — back Jun 25.",
    oop: [
      "Back to bar technique — primary OOP development focus for the summer",
      "Power dive — developing explosive drive off the power step",
      "Aggressive on crosses in traffic — claiming through contact, not around it",
      "Smother mechanics — hands lead, not legs or hip",
    ],
    ip: [
      "Beyond — pass in behind the opposition backline from feet",
      "Through — driven pass to the 9 or 10 splitting the defensive line",
      "Throwing technique — developing range, accuracy, and consistency",
    ],
    strengths: [
      "Outstanding game awareness",
      "Excellent distribution instincts",
      "Strong decision-making in 1v1",
      "Elite bravery",
    ],
  },
  Kenzie: {
    sessions: 15,
    notes: "Senior. Out Jun 13–14. Hairline fracture + ligament damage in finger/knuckle confirmed Jun 30 — missed Jun 30 session, returned Jul 7. Aug 1–2 GA camp.",
    oop: [
      "Power step — rolling to outside of foot. Single most important correction. One cue only per session.",
      "Spread technique — working into it, needs more reps. Don't stack corrections.",
      "Shot stopping consistency — hip hinge on ball between feet, shoulder/hip rotation. May be affected by finger injury.",
      "Hairline fracture in finger — monitor compensation in shot stopping mechanics.",
    ],
    ip: [
      "Distribution has been strong — a genuine positive this summer",
      "Hands getting better — cross claiming improving, trying to meet at highest point",
      "Communication: name + direction. Voice needs consistent presence.",
    ],
    strengths: [
      "Distribution quality — stronger than expected",
      "Hands improving on crosses",
      "Coachable when not overwhelmed with corrections",
    ],
  },
  Kylie: {
    sessions: 5,
    notes: "8th grade. Female. Joined summer program Jun 17. Moving to younger group for now — ramp toward older group as techniques consolidate.",
    oop: [
      "Parrying habit — defaulting to parry rather than hold on. Trust the hands.",
      "Hard shots between feet — transitioning away from kick save toward hands. Still defaulting under pressure.",
      "Spread technique — foot needs to go wider to block mouth of goal. Sequence: foot wide → head forward → shoulders forward → arms wide.",
      "Extension dives — continuing to grow, expanding range. Positive trend.",
    ],
    ip: [
      "Bouncy passes under pressure — goes flat when comfortable, bouncy when speed increases. Confidence issue.",
      "Weak foot — testing it voluntarily in training when not required. Excellent sign.",
    ],
    strengths: [
      "Hand eye coordination — excellent",
      "Crosses — improving session by session",
      "Weak foot exploration — testing voluntarily, shows curiosity and ownership",
      "Extension dive growth — positive trajectory",
    ],
  },
  Knox: {
    sessions: 1,
    notes: "11 years old. Male. Joined Jul 7. New to program — foundational stage. Won't return until week of Jul 14.",
    oop: [
      "Zone 3 extension — foundational introduction, Day 1",
      "Power step — beginning to learn correct mechanics from scratch",
    ],
    ip: [
      "Too early to assess — first session",
    ],
    strengths: [
      "Too early to assess — first session",
    ],
  },
  Kylie: [
  ],
  Knox: [
  ],
  Kam: {
    sessions: 1,
    notes: "17-18 years old. Gretna East HS keeper. Guest — one-off session prepping for FGCU ID camp. Male keeper.",
    oop: [
      "Parrying habit — still defaulting to parry rather than hold on. Trust the hands.",
      "Hard shots between feet — transitioning away from kick save toward hands. Still defaulting under pressure.",
      "Spread technique — foot needs to go wider to block mouth of goal. Sequence: foot wide → head forward → shoulders forward → arms wide.",
      "Extension dives — continuing to grow, expanding range. Positive trend.",
    ],
    ip: [
      "Bouncy passes under pressure — goes flat when comfortable, bouncy when speed increases. Confidence issue.",
      "Weak foot — testing it voluntarily in training when not required. Excellent sign.",
    ],
    strengths: [
      "Hand eye coordination — excellent",
      "Crosses — improving session by session",
      "Weak foot exploration — testing voluntarily, shows curiosity and ownership",
      "Extension dive growth — positive trajectory",
    ],
  },
  Kam: [
    {
      id: 1750100006,
      date: "2026-07-11",
      type: "General",
      subtag: "",
      pillar: "",
      rating: "",
      note: "Catthi / Kathy — guest, NWU WSOC senior GK. First session of summer, very rusty: footwork, hand-catching, mental sharpness, in-possession technique all poor. Better than expected overall. Reluctant to use weak foot. Likely only makes a handful of sessions given availability. Noticeably brought group level down today — reflects time out of reps, not ability. College senior context: rust is the primary issue.",
    },
  ],
  Ryan: {
    sessions: 9,
    notes: "2012 birth year · 8th grade · Joined summer program Jun 24. Signed up for rest of summer.",
    oop: [
      "Power step — rolling to outside of foot. Won't revisit until after break given group's current focus.",
      "1v1 — exploring K save vs spread technique. Let him find his solution.",
      "Extension dives — exploring the technique, had one in session Jul 8. Keep creating opportunities.",
      "Spread technique — being improvised around his body mechanics.",
    ],
    ip: [
      "Weak foot distribution — primary IP development priority",
      "Cross claiming in the 6 — already excellent, a real strength",
    ],
    strengths: [
      "Cross claiming in the 6 — absolutely excellent",
      "Possession quality — strong from day one",
      "High balls — excellent",
      "Rapidly improving — best session of summer on Jul 7",
    ],
  },
  Harlow: {
    sessions: 15,
    notes: "Sophomore. Missed Jun 10, 14, 20–21.",
    oop: [
      "Back to bar — new this summer, needs volume with guidance. Momentum building.",
      "Spread technique — started clicking late June, needs consolidation. Surrounded by keepers who can do it.",
      "Extension dives — major breakthrough, range expanding rapidly. Keep building.",
      "Set piece positioning — free kicks feet not square to ball. Corners hip angle needs slight upfield tilt.",
    ],
    ip: [
      "Weak foot distribution — primary IP priority remaining. Strong foot technique solid.",
      "Beyond from feet — improved significantly. Needs continued volume.",
      "Communication on crosses — KEEPER with instruction every time.",
    ],
    strengths: [
      "Exceptional aerial dominance — best in the group in the air",
      "Extension dives — major development this summer, now a real strength",
      "Crosses — consistent strength all summer",
      "Strong foot distribution through and around — improved significantly",
    ],
  },
};

const CURRICULUM = [
  { week: "1–2", dates: "May 19–31", oop: "Set Position, Ball Line, Low Save Zones", ip: "Outlet (Roll/Pass), Around (Throw/Switch)" },
  { week: "3", dates: "June 9–13", oop: "Defending the 6 — Zone Definition, Runners, Cutbacks", ip: "Through — 6, 8, 10" },
  { week: "4", dates: "June 16–20", oop: "Defending the Area — Crosses, Positioning, Cutbacks", ip: "Beyond — 7, 9, 11 (from feet)" },
  { week: "5", dates: "June 23–27", oop: "1v1 — Angle Control, Spread vs Smother, Live", ip: "Beyond — 7, 9, 11 / Through + Around combined" },
  { week: "6", dates: "June 30–July 1", oop: "Behind the Backline, Set Pieces — Corners", ip: "Beyond + Outlet — Transition Distribution" },
  { week: "7", dates: "July 7–11", oop: "Set Pieces — Walls, Full Compound, Positioning, Communication", ip: "Through + Into/Onto, Full IP, Formation Reading" },
  { week: "8", dates: "July 14–18", oop: "Individual Focus, Compound Intensity, Film Review", ip: "Beyond + Through refinement" },
  { week: "9", dates: "July 21–25", oop: "Game Simulation, Pressure, Opponent Reading, Final Review", ip: "Game Simulation, Pressure Distribution, IP Review" },
  { week: "10", dates: "July 28–31", oop: "Final Compound, Individual Accountability, Season Prep", ip: "Final IP, Accountability, Season Prep" },
];

const NON_NEGOTIABLES = [
  "Start Higher",
  "Read, Don't React",
  "Weapon with the Ball",
  "Own Your Moments",
  "Lead Out Loud",
  "Stay Engaged",
  "Be Brave",
  "Be a Better Human",
];

const INNER_GAME = [
  "Facts Not Emotion",
  "Experience over Instruction",
  "Trusting Your Body",
  "Noticing Your Thoughts",
];

const TAG_OPTIONS = {
  type: ["OOP", "IP", "Mental", "General", "Camp / Game Feedback"],
  oop: ["Shot-Stopping Z1", "Shot-Stopping Z2", "Shot-Stopping Z3", "1v1", "Crosses & Cutbacks", "Defending 6", "Power Step", "Behind Backline"],
  ip: ["Outlet", "Around", "Through", "Into/Onto", "Beyond"],
  mental: [...INNER_GAME],
  pillars: [...NON_NEGOTIABLES],
};

const RATING = ["⭐ Needs Work", "⭐⭐ Developing", "⭐⭐⭐ Solid", "⭐⭐⭐⭐ Sharp"];

function getCurrentWeek() {
  const today = new Date();
  const ranges = [
    { week: "1–2", start: new Date("2026-05-19"), end: new Date("2026-05-31") },
    { week: "3", start: new Date("2026-06-09"), end: new Date("2026-06-13") },
    { week: "4", start: new Date("2026-06-16"), end: new Date("2026-06-20") },
    { week: "5", start: new Date("2026-06-23"), end: new Date("2026-06-27") },
    { week: "6", start: new Date("2026-06-30"), end: new Date("2026-07-01") },
    { week: "7", start: new Date("2026-07-07"), end: new Date("2026-07-11") },
    { week: "8", start: new Date("2026-07-14"), end: new Date("2026-07-18") },
    { week: "9", start: new Date("2026-07-21"), end: new Date("2026-07-25") },
    { week: "10", start: new Date("2026-07-28"), end: new Date("2026-07-31") },
  ];
  for (const r of ranges) {
    if (today >= r.start && today <= r.end) return r.week;
  }
  return null;
}

export default function App() {
  const [tab, setTab] = useState("keepers");
  const [activeKeeper, setActiveKeeper] = useState("Adi");
  const [keeperTab, setKeeperTab] = useState("profile");
  const [logs, setLogs] = useState(() => {
    const stored = loadLogs();
    const merged = { ...SEED_LOGS };
    for (const keeper of Object.keys(stored)) {
      const storedIds = new Set(stored[keeper].map(l => l.id));
      const seedFiltered = (merged[keeper] || []).filter(l => !storedIds.has(l.id));
      merged[keeper] = [...seedFiltered, ...stored[keeper]];
    }
    return merged;
  });

  const [film, setFilm] = useState(() => loadFilm());
  useEffect(() => { saveFilm(film); }, [film]);
  const currentWeek = getCurrentWeek();
  const [filmForm, setFilmForm] = useState({ date: new Date().toISOString().split("T")[0], clipType: "Pre-Session", week: currentWeek || "1", theme: "", url: "", note: "" });
  const [showFilmForm, setShowFilmForm] = useState(false);

  function addFilmClip() {
    if (!filmForm.url.trim()) return;
    const entry = { ...filmForm, id: Date.now() };
    setFilm(prev => ({ ...prev, [activeKeeper]: [...(prev[activeKeeper] || []), entry] }));
    setFilmForm(f => ({ ...f, theme: "", url: "", note: "" }));
    setShowFilmForm(false);
  }

  function deleteFilmClip(keeper, id) {
    setFilm(prev => ({ ...prev, [keeper]: prev[keeper].filter(c => c.id !== id) }));
  }
  const [showForm, setShowForm] = useState(false);

  const currentCurriculum = CURRICULUM.find(c => c.week === currentWeek);

  const keeperLogs = (logs[activeKeeper] || []).slice().reverse();

  function addLog() {
    if (!form.note.trim()) return;
    const entry = { ...form, id: Date.now() };
    setLogs(prev => ({ ...prev, [activeKeeper]: [...(prev[activeKeeper] || []), entry] }));
    setForm(f => ({ ...f, subtag: "", pillar: "", rating: "", note: "" }));
    setShowForm(false);
  }

  function deleteLog(keeper, id) {
    setLogs(prev => ({ ...prev, [keeper]: prev[keeper].filter(l => l.id !== id) }));
  }

  const tabStyle = (active) => ({
    padding: "8px 18px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "13px",
    letterSpacing: "0.04em",
    background: active ? "#1a1a2e" : "transparent",
    color: active ? "#e8c96d" : "#888",
    transition: "all 0.15s",
  });

  const keeperTabStyle = (active) => ({
    padding: "6px 14px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "12px",
    letterSpacing: "0.05em",
    background: active ? "#e8c96d" : "transparent",
    color: active ? "#1a1a2e" : "#aaa",
    transition: "all 0.15s",
  });

  const pill = (color, text) => (
    <span style={{ background: color + "22", color, border: `1px solid ${color}44`, borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em" }}>
      {text}
    </span>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f1a", color: "#e8e8f0", fontFamily: "'Inter', system-ui, sans-serif", padding: "0" }}>
      {/* Header */}
      <div style={{ background: "#1a1a2e", borderBottom: "1px solid #2a2a4a", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#e8c96d", fontWeight: 700, textTransform: "uppercase" }}>Sporting Nebraska FC</div>
          <div style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "0.02em", marginTop: "2px" }}>Goalkeeper Program</div>
          <div style={{ fontSize: "11px", color: "#666", marginTop: "2px" }}>Summer 2026 · Gretna East</div>
        </div>
        {currentCurriculum && (
          <div style={{ textAlign: "right", background: "#0f0f1a", borderRadius: "8px", padding: "10px 14px", border: "1px solid #2a2a4a" }}>
            <div style={{ fontSize: "10px", color: "#e8c96d", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Current — Week {currentWeek}</div>
            <div style={{ fontSize: "11px", color: "#aaa", marginTop: "3px" }}>OOP: {currentCurriculum.oop.split("—")[0].trim()}</div>
            <div style={{ fontSize: "11px", color: "#aaa" }}>IP: {currentCurriculum.ip.split("—")[0].trim()}</div>
          </div>
        )}
      </div>

      {/* Nav */}
      <div style={{ background: "#14142a", borderBottom: "1px solid #2a2a4a", padding: "8px 24px", display: "flex", gap: "4px" }}>
        {["keepers", "curriculum", "pillars"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={tabStyle(tab === t)}>
            {t === "keepers" ? "Keepers" : t === "curriculum" ? "Curriculum" : "Standards"}
          </button>
        ))}
      </div>

      <div style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>

        {/* KEEPERS TAB */}
        {tab === "keepers" && (
          <div>
            {/* Keeper selector */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
              {Object.keys(KEEPERS).map(k => (
                <button key={k} onClick={() => { setActiveKeeper(k); setKeeperTab("profile"); }} style={{
                  padding: "10px 20px", borderRadius: "8px", border: "2px solid",
                  borderColor: activeKeeper === k ? "#e8c96d" : "#2a2a4a",
                  background: activeKeeper === k ? "#e8c96d11" : "#1a1a2e",
                  color: activeKeeper === k ? "#e8c96d" : "#888",
                  fontWeight: 700, fontSize: "14px", cursor: "pointer", letterSpacing: "0.04em",
                  transition: "all 0.15s",
                }}>
                  {k}
                </button>
              ))}
            </div>

            {/* Keeper sub-tabs */}
            <div style={{ display: "flex", gap: "4px", marginBottom: "20px", background: "#1a1a2e", padding: "4px", borderRadius: "8px", width: "fit-content" }}>
              {["profile", "log", "notes", "film"].map(t => (
                <button key={t} onClick={() => setKeeperTab(t)} style={keeperTabStyle(keeperTab === t)}>
                  {t === "profile" ? "Profile" : t === "log" ? `Session Log (${(logs[activeKeeper] || []).length})` : t === "notes" ? "All Notes" : `Film (${(film[activeKeeper] || []).length})`}
                </button>
              ))}
            </div>

            {/* PROFILE */}
            {keeperTab === "profile" && (
              <div>
                <div style={{ background: "#1a1a2e", borderRadius: "10px", padding: "20px", marginBottom: "16px", border: "1px solid #2a2a4a" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <div>
                      <div style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "0.02em" }}>{activeKeeper}</div>
                      <div style={{ fontSize: "12px", color: "#888", marginTop: "2px" }}>{KEEPERS[activeKeeper].notes}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "28px", fontWeight: 800, color: "#e8c96d" }}>{KEEPERS[activeKeeper].sessions}</div>
                      <div style={{ fontSize: "10px", color: "#666", letterSpacing: "0.08em", textTransform: "uppercase" }}>Sessions</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {KEEPERS[activeKeeper].strengths.map((s, i) => (
                      <span key={i} style={{ background: "#2a4a2a", color: "#6dd68c", border: "1px solid #3a6a3a", borderRadius: "4px", padding: "3px 10px", fontSize: "11px", fontWeight: 600 }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div style={{ background: "#1a1a2e", borderRadius: "10px", padding: "18px", border: "1px solid #2a2a4a" }}>
                    <div style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#e87d6d", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px" }}>OOP Priorities</div>
                    {KEEPERS[activeKeeper].oop.map((p, i) => (
                      <div key={i} style={{ fontSize: "12px", color: "#ccc", padding: "6px 0", borderBottom: i < KEEPERS[activeKeeper].oop.length - 1 ? "1px solid #2a2a3a" : "none", lineHeight: "1.4" }}>
                        {p}
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "#1a1a2e", borderRadius: "10px", padding: "18px", border: "1px solid #2a2a4a" }}>
                    <div style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#6db8e8", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px" }}>IP Priorities</div>
                    {KEEPERS[activeKeeper].ip.map((p, i) => (
                      <div key={i} style={{ fontSize: "12px", color: "#ccc", padding: "6px 0", borderBottom: i < KEEPERS[activeKeeper].ip.length - 1 ? "1px solid #2a2a3a" : "none", lineHeight: "1.4" }}>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SESSION LOG */}
            {keeperTab === "log" && (
              <div>
                <button onClick={() => setShowForm(!showForm)} style={{
                  background: "#e8c96d", color: "#1a1a2e", border: "none", borderRadius: "8px",
                  padding: "10px 20px", fontWeight: 800, fontSize: "13px", cursor: "pointer",
                  letterSpacing: "0.04em", marginBottom: "16px",
                }}>
                  + Add Session Note
                </button>

                {showForm && (
                  <div style={{ background: "#1a1a2e", borderRadius: "10px", padding: "20px", marginBottom: "20px", border: "1px solid #e8c96d44" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                      <div>
                        <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Date</label>
                        <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                          style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "8px", color: "#e8e8f0", fontSize: "13px" }} />
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Category</label>
                        <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value, subtag: "" }))}
                          style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "8px", color: "#e8e8f0", fontSize: "13px" }}>
                          {TAG_OPTIONS.type.map(t => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                      {(form.type === "OOP" || form.type === "IP" || form.type === "Mental") && (
                        <div>
                          <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                            {form.type === "OOP" ? "OOP Theme" : form.type === "IP" ? "IP Zone" : "Inner Game Theme"}
                          </label>
                          <select value={form.subtag} onChange={e => setForm(f => ({ ...f, subtag: e.target.value }))}
                            style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "8px", color: "#e8e8f0", fontSize: "13px" }}>
                            <option value="">— Select —</option>
                            {(form.type === "OOP" ? TAG_OPTIONS.oop : form.type === "IP" ? TAG_OPTIONS.ip : TAG_OPTIONS.mental).map(t => <option key={t}>{t}</option>)}
                          </select>
                        </div>
                      )}
                      <div>
                        <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Standard</label>
                        <select value={form.pillar} onChange={e => setForm(f => ({ ...f, pillar: e.target.value }))}
                          style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "8px", color: "#e8e8f0", fontSize: "13px" }}>
                          <option value="">— Optional —</option>
                          {NON_NEGOTIABLES.map(p => <option key={p}>{p}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Rating</label>
                        <select value={form.rating} onChange={e => setForm(f => ({ ...f, rating: e.target.value }))}
                          style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "8px", color: "#e8e8f0", fontSize: "13px" }}>
                          <option value="">— Optional —</option>
                          {RATING.map(r => <option key={r}>{r}</option>)}
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                      <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Observation</label>
                      <textarea value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                        placeholder="What did you see? Be specific."
                        rows={3}
                        style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "10px", color: "#e8e8f0", fontSize: "13px", resize: "vertical", boxSizing: "border-box" }} />
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button onClick={addLog} style={{ background: "#e8c96d", color: "#1a1a2e", border: "none", borderRadius: "6px", padding: "9px 20px", fontWeight: 800, fontSize: "13px", cursor: "pointer" }}>
                        Save
                      </button>
                      <button onClick={() => setShowForm(false)} style={{ background: "transparent", color: "#888", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {keeperLogs.length === 0 && (
                  <div style={{ color: "#555", fontSize: "13px", textAlign: "center", padding: "40px 0" }}>
                    No session notes yet for {activeKeeper}. Add one after your next session.
                  </div>
                )}

                {keeperLogs.map(log => (
                  <div key={log.id} style={{ background: "#1a1a2e", borderRadius: "8px", padding: "14px 16px", marginBottom: "10px", border: "1px solid #2a2a4a" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                        <span style={{ fontSize: "12px", color: "#888" }}>{log.date}</span>
                        {pill(log.type === "OOP" ? "#e87d6d" : log.type === "IP" ? "#6db8e8" : log.type === "Mental" ? "#b06de8" : log.type === "Camp / Game Feedback" ? "#e8c96d" : "#888", log.type)}
                        {log.subtag && pill("#aaa", log.subtag)}
                        {log.pillar && pill("#e8c96d", log.pillar)}
                        {log.rating && <span style={{ fontSize: "11px", color: "#888" }}>{log.rating}</span>}
                      </div>
                      <button onClick={() => deleteLog(activeKeeper, log.id)} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: "16px", lineHeight: 1 }}>×</button>
                    </div>
                    <div style={{ fontSize: "13px", color: "#ddd", lineHeight: "1.5" }}>{log.note}</div>
                  </div>
                ))}
              </div>
            )}

            {/* ALL NOTES across all keepers */}
            {keeperTab === "notes" && (
              <div>
                <div style={{ fontSize: "12px", color: "#888", marginBottom: "16px" }}>All session notes for {activeKeeper}, grouped by category.</div>
                {["OOP", "IP", "Mental", "General"].map(type => {
                  const typeLogs = (logs[activeKeeper] || []).filter(l => l.type === type).reverse();
                  if (!typeLogs.length) return null;
                  return (
                    <div key={type} style={{ marginBottom: "20px" }}>
                      <div style={{ fontSize: "10px", letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase", color: type === "OOP" ? "#e87d6d" : type === "IP" ? "#6db8e8" : type === "Mental" ? "#b06de8" : type === "Camp / Game Feedback" ? "#e8c96d" : "#888", marginBottom: "8px" }}>
                        {type} — {typeLogs.length} note{typeLogs.length !== 1 ? "s" : ""}
                      </div>
                      {typeLogs.map(log => (
                        <div key={log.id} style={{ background: "#1a1a2e", borderRadius: "6px", padding: "10px 14px", marginBottom: "8px", border: "1px solid #2a2a4a" }}>
                          <div style={{ display: "flex", gap: "6px", marginBottom: "4px", flexWrap: "wrap" }}>
                            <span style={{ fontSize: "11px", color: "#666" }}>{log.date}</span>
                            {log.subtag && pill("#aaa", log.subtag)}
                            {log.pillar && pill("#e8c96d", log.pillar)}
                          </div>
                          <div style={{ fontSize: "12px", color: "#ddd", lineHeight: "1.5" }}>{log.note}</div>
                        </div>
                      ))}
                    </div>
                  );
                })}
                {!(logs[activeKeeper] || []).length && (
                  <div style={{ color: "#555", fontSize: "13px", textAlign: "center", padding: "40px 0" }}>No notes yet.</div>
                )}
              </div>
            )}
            {/* FILM LOG */}
            {keeperTab === "film" && (
              <div>
                <button onClick={() => setShowFilmForm(!showFilmForm)} style={{
                  background: "#6db8e8", color: "#0f0f1a", border: "none", borderRadius: "8px",
                  padding: "10px 20px", fontWeight: 800, fontSize: "13px", cursor: "pointer",
                  letterSpacing: "0.04em", marginBottom: "16px",
                }}>
                  + Add Clip
                </button>

                {showFilmForm && (
                  <div style={{ background: "#1a1a2e", borderRadius: "10px", padding: "20px", marginBottom: "20px", border: "1px solid #6db8e844" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                      <div>
                        <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Date</label>
                        <input type="date" value={filmForm.date} onChange={e => setFilmForm(f => ({ ...f, date: e.target.value }))}
                          style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "8px", color: "#e8e8f0", fontSize: "13px", boxSizing: "border-box" }} />
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Clip Type</label>
                        <select value={filmForm.clipType} onChange={e => setFilmForm(f => ({ ...f, clipType: e.target.value }))}
                          style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "8px", color: "#e8e8f0", fontSize: "13px" }}>
                          <option>Pre-Session</option>
                          <option>Highlight</option>
                          <option>Focus Area</option>
                          <option>Weekly Review</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Week</label>
                        <select value={filmForm.week} onChange={e => setFilmForm(f => ({ ...f, week: e.target.value }))}
                          style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "8px", color: "#e8e8f0", fontSize: "13px" }}>
                          {["1–2","3","4","5","6","7","8","9","10"].map(w => <option key={w}>{w}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Theme / Topic</label>
                        <input type="text" value={filmForm.theme} onChange={e => setFilmForm(f => ({ ...f, theme: e.target.value }))}
                          placeholder="e.g. Back to Bar, Through ball"
                          style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "8px", color: "#e8e8f0", fontSize: "13px", boxSizing: "border-box" }} />
                      </div>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                      <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>YouTube Link</label>
                      <input type="url" value={filmForm.url} onChange={e => setFilmForm(f => ({ ...f, url: e.target.value }))}
                        placeholder="https://youtube.com/..."
                        style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "8px", color: "#e8e8f0", fontSize: "13px", boxSizing: "border-box" }} />
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                      <label style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Notes</label>
                      <textarea value={filmForm.note} onChange={e => setFilmForm(f => ({ ...f, note: e.target.value }))}
                        placeholder="What does this clip show? What should they look for?"
                        rows={2}
                        style={{ width: "100%", background: "#0f0f1a", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "10px", color: "#e8e8f0", fontSize: "13px", resize: "vertical", boxSizing: "border-box" }} />
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button onClick={addFilmClip} style={{ background: "#6db8e8", color: "#0f0f1a", border: "none", borderRadius: "6px", padding: "9px 20px", fontWeight: 800, fontSize: "13px", cursor: "pointer" }}>
                        Save
                      </button>
                      <button onClick={() => setShowFilmForm(false)} style={{ background: "transparent", color: "#888", border: "1px solid #2a2a4a", borderRadius: "6px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Group by clip type */}
                {["Pre-Session", "Highlight", "Focus Area", "Weekly Review"].map(type => {
                  const clips = (film[activeKeeper] || []).filter(c => c.clipType === type).slice().reverse();
                  if (!clips.length) return null;
                  const typeColor = type === "Pre-Session" ? "#b06de8" : type === "Highlight" ? "#6dd68c" : type === "Focus Area" ? "#e87d6d" : "#6db8e8";
                  return (
                    <div key={type} style={{ marginBottom: "24px" }}>
                      <div style={{ fontSize: "10px", letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase", color: typeColor, marginBottom: "10px" }}>
                        {type} — {clips.length} clip{clips.length !== 1 ? "s" : ""}
                      </div>
                      {clips.map(clip => (
                        <div key={clip.id} style={{ background: "#1a1a2e", borderRadius: "8px", padding: "14px 16px", marginBottom: "10px", border: "1px solid #2a2a4a" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                              <span style={{ fontSize: "12px", color: "#888" }}>{clip.date}</span>
                              <span style={{ background: typeColor + "22", color: typeColor, border: `1px solid ${typeColor}44`, borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em" }}>{type}</span>
                              {clip.week && <span style={{ fontSize: "11px", color: "#666" }}>Wk {clip.week}</span>}
                              {clip.theme && <span style={{ fontSize: "11px", color: "#aaa", fontWeight: 600 }}>{clip.theme}</span>}
                            </div>
                            <button onClick={() => deleteFilmClip(activeKeeper, clip.id)} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: "16px", lineHeight: 1 }}>×</button>
                          </div>
                          {clip.note && <div style={{ fontSize: "12px", color: "#ddd", lineHeight: "1.5", marginBottom: "10px" }}>{clip.note}</div>}
                          {clip.url && (
                            <a href={clip.url} target="_blank" rel="noopener noreferrer" style={{
                              display: "inline-flex", alignItems: "center", gap: "6px",
                              background: "#e8000022", color: "#ff4444", border: "1px solid #e8000044",
                              borderRadius: "6px", padding: "6px 14px", fontSize: "12px", fontWeight: 700,
                              textDecoration: "none", letterSpacing: "0.04em",
                            }}>
                              ▶ Watch on YouTube
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })}

                {!(film[activeKeeper] || []).length && (
                  <div style={{ color: "#555", fontSize: "13px", textAlign: "center", padding: "40px 0" }}>
                    No clips yet for {activeKeeper}. Add a pre-session reference or weekly review clip.
                  </div>
                )}
              </div>
            )}
          </div>
        )}


        {tab === "curriculum" && (
          <div>
            <div style={{ fontSize: "12px", color: "#888", marginBottom: "20px" }}>Technical → Moment → Compound. Each session pairs one OOP moment with one IP zone.</div>
            {CURRICULUM.map(row => {
              const isCurrent = row.week === currentWeek;
              return (
                <div key={row.week} style={{
                  background: isCurrent ? "#1a2a1a" : "#1a1a2e",
                  border: `1px solid ${isCurrent ? "#4a8a4a" : "#2a2a4a"}`,
                  borderRadius: "8px", padding: "14px 18px", marginBottom: "10px",
                  display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: "16px", alignItems: "start",
                }}>
                  <div>
                    <div style={{ fontSize: "10px", color: isCurrent ? "#6dd68c" : "#e8c96d", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {isCurrent ? "▶ NOW" : `WK ${row.week}`}
                    </div>
                    <div style={{ fontSize: "11px", color: "#666", marginTop: "2px" }}>{row.dates}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", color: "#e87d6d", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "3px" }}>OOP</div>
                    <div style={{ fontSize: "12px", color: "#ccc", lineHeight: "1.4" }}>{row.oop}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", color: "#6db8e8", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "3px" }}>IP</div>
                    <div style={{ fontSize: "12px", color: "#ccc", lineHeight: "1.4" }}>{row.ip}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* PILLARS TAB */}
        {tab === "pillars" && (
          <div>
            <div style={{ marginBottom: "28px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#e8c96d", fontWeight: 700, textTransform: "uppercase", marginBottom: "14px" }}>The Standard — 8 Non-Negotiables</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {NON_NEGOTIABLES.map((p, i) => (
                  <div key={p} style={{ background: "#1a1a2e", borderRadius: "8px", padding: "14px 16px", border: "1px solid #2a2a4a", display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: "#e8c96d33", minWidth: "28px" }}>{String(i + 1).padStart(2, "0")}</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#e8e8f0" }}>{p}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: "28px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#b06de8", fontWeight: 700, textTransform: "uppercase", marginBottom: "14px" }}>Inner Game — Mental Framework</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {INNER_GAME.map((p, i) => (
                  <div key={p} style={{ background: "#1a1a2e", borderRadius: "8px", padding: "14px 16px", border: "1px solid #2a2a4a" }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#e8e8f0" }}>{p}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#6db8e8", fontWeight: 700, textTransform: "uppercase", marginBottom: "14px" }}>IP Distribution Zones</div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {["Outlet", "Around", "Through", "Into/Onto", "Beyond"].map((z, i) => (
                  <div key={z} style={{ background: "#1a1a2e", borderRadius: "8px", padding: "12px 20px", border: "1px solid #2a2a4a", textAlign: "center" }}>
                    <div style={{ fontSize: "10px", color: "#6db8e8", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "2px" }}>{String(i + 1)}</div>
                    <div style={{ fontSize: "13px", fontWeight: 700 }}>{z}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "28px", background: "#1a1a2e", borderRadius: "10px", padding: "20px", border: "1px solid #2a2a4a" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#e87d6d", fontWeight: 700, textTransform: "uppercase", marginBottom: "10px" }}>Development Progression</div>
              <div style={{ display: "flex", gap: "0", alignItems: "center" }}>
                {["TECHNICAL", "MOMENT", "COMPOUND"].map((stage, i) => (
                  <div key={stage} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <div style={{ flex: 1, background: "#0f0f1a", borderRadius: "6px", padding: "12px", textAlign: "center", border: "1px solid #2a2a4a" }}>
                      <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", color: ["#e87d6d", "#e8c96d", "#6dd68c"][i] }}>{stage}</div>
                      <div style={{ fontSize: "10px", color: "#666", marginTop: "3px" }}>
                        {i === 0 ? "Isolated skill mastery" : i === 1 ? "Skill in real situation" : "Live game environment"}
                      </div>
                    </div>
                    {i < 2 && <div style={{ color: "#444", fontSize: "18px", padding: "0 4px" }}>→</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
