// DEEP FIELDS · Sell the Depth. Full course content (19 lessons, 9 sections). Crafted by Small Circle.
const PITCH = "Deep Fields is a handful of deep-soiled fields on a high, cool ridge above the Northern California fog. It is made by a former astrophotographer who now farms by the same sky she used to watch. A few small fields, farmed slowly and read honestly, in eight grape-forward wines. Nothing is rushed and nothing is hidden. Look deeper.";
const SIGLINE = "The longer you look, the more there is.";

const COURSE = {
  title: "Sell the Depth",
  subtitle: "The Deep Fields Brand Education Course",
  sections: [

  { id:"A", name:"Start Here", lessons:[
    { id:"A1", title:"Your 30-Second Pitch", time:"3 min", blocks:[
      { t:"hero", img:"../assets/img/field_hero_fog.jpg", kicker:"START HERE · LESSON 1 OF 19", title:"Start with the pitch." },
      { t:"text", p:["You sell between accounts, on your phone, with two minutes to spare. So this course gives you the money first: the pitch, the reasons it sells, and the one wine for the account in front of you. Everything else is here when you want the depth."] },
      { t:"recall", id:"baseline", prompt:"Before we start: in one line, what would you say right now to get an account to try a wine like this? Jot it down. We will come back to it at the end." },
      { t:"audio", file:"marne_pitch", label:"The 30-second pitch · in Marne's voice", script: PITCH },
      { t:"flip", h:"The five takeaways", sub:"Tap each card to turn it over. These five lines are the spine of every pitch you will make.", small:true, cards:[
        { f:"01 · THE FIELDS", b:"A handful of deep-soiled fields on one high ridge, each one farmed and read on its own." },
        { f:"02 · THE FOUNDER", b:"A founder story that sells itself: astrophotographer to farmer, farming by the sky." },
        { f:"03 · THE FARMING", b:"Farming is the product, not a badge: biodynamic, regenerative, low-intervention, and buyers ask for it." },
        { f:"04 · EIGHT ROLES", b:"Eight wines, eight clear roles: one right wine for every account." },
        { f:"05 · THE DEPTH", b:"Sell the depth: patience, place, and restraint, made literal from soil to glass." } ] },
      { t:"download", h:"Your selling tools, in one place.", items:[
        {label:"DOWNLOAD THE SELL SHEET (PDF)", href:"../downloads/deep-field-sell-sheet.pdf"},
        {label:"VISIT THE BRAND SITE ↗", href:"../index.html", ext:true} ] }
    ]},
    { id:"A2", title:"What You'll Be Able to Do", time:"2 min", blocks:[
      { t:"text", h:"By the end, you can:", list:[
        "Deliver the 30-second pitch from memory.",
        "Tell Marne's story in one breath.",
        "Place Halden Rise and connect it to the glass.",
        "Sell the farming as a commercial lever, not a values badge.",
        "Sell with each certification.",
        "Pick the right wine for any account.",
        "Split the pitch by channel.",
        "Handle the five common objections.",
        "Run a full buyer conversation.",
        "Commit to one real next action." ] },
      { t:"decide", stem:"Which of these will this course NOT help you do?", opts:[
        { o:"Deliver the 30-second pitch", fb:"Not quite. That is a core skill this course builds, starting with the audio you just heard." },
        { o:"Handle common objections", fb:"Not quite. There is a whole drill for the five most common pushbacks." },
        { o:"Recite every terroir figure from memory", ok:1, fb:"Right. Nobody buys a spec sheet. You will sell the story and connect one or two site facts to what the buyer tastes, not recite numbers." },
        { o:"Pick the right wine per account", fb:"Not quite. The eight-role system exists exactly so you can do this." } ] }
    ]}
  ]},

  { id:"B", name:"The Brand Story", lessons:[
    { id:"B1", title:"Look Deeper (The Thesis)", time:"3 min", blocks:[
      { t:"hero", img:"../assets/img/vine_deepfocus.jpg", kicker:"THE BRAND STORY", title:"Look deeper." },
      { t:"statement", text:"In a category that shouts, the quiet one has the most depth." },
      { t:"text", p:["Most wine competes on volume: louder labels, bigger extraction, more oak, more adjectives. Deep Fields competes on attention. A few small fields, farmed slowly and read honestly, that hold up under a long stare.","The name works on three layers, and you lead with the first two. First, the fields: a few small pieces of real ground. Second, depth: of flavor, of roots, of patience. The third is earned."] },
      { t:"dragmatch", prompt:"Drag each phrase to the layer it belongs to. You will feel it click.", zones:[
        { name:"FIELD", why:"The plain and tangible. Always lead here." },
        { name:"DEPTH", why:"What patience tastes like. Your second beat." },
        { name:"COSMOS", why:"Earned by the farming, never decorated. Reach for it last, and it feels inevitable." } ], items:[
        { txt:"The actual soil and roots", z:0, hint:"That one is literal. Think ground." },
        { txt:"Flavor and patience that reward waiting", z:1, hint:"What rewards a long stare?" },
        { txt:"Farming by the moon and stars", z:2, hint:"Look up." } ],
        done:"Field, then depth, then the sky. Lead with the tangible and let the cosmos be earned." },
      { t:"statement", small:true, text:"“" + SIGLINE + "”" }
    ]},
    { id:"B2", title:"The Founder, Marne Okafor", time:"3 min", blocks:[
      { t:"hero", img:"../assets/img/marne_portrait.jpg", kicker:"THE BRAND STORY", title:"She came to wine through the sky." },
      { t:"text", p:["Marne Okafor came to wine through the sky. For years she was an astrophotographer, pointing an instrument at one dark patch and holding a long exposure open long enough for faint, far things to arrive. It is a practice of patience.","She kept returning to one ridge above the fog because the nights were dark, until the ground under her tripod started to matter as much as the sky above it. So she began to farm it, by the same sky. Biodynamics is farming by the cosmos."] },
      { t:"predictpair", prompt:"Her old practice is on the left. Before you connect them: which line truly mirrors it in her new one?", left:{h:"THE SKY", lines:"Long exposures. Deep focus. Nothing rushed."}, opts:[
        { o:"Long seasons. Deep roots. Nothing rushed.", ok:1, fb:"That is the mirror. Same discipline, new medium: the exposure became a season, the focus became roots. This is why the pivot sells instead of merely charming." },
        { o:"New equipment. Faster methods. Bigger yields.", fb:"That is the opposite of her method. Nothing about Deep Fields got faster; the practice of patience is the throughline." } ] },
      { t:"decide", stem:"Why did she become a farmer without leaving the sky behind?", opts:[
        { o:"She wanted a career change", fb:"There is more to it. The pivot is coherent, not a restart: the same sky now schedules the work." },
        { o:"Because biodynamics is farming by the cosmos, so the same moon and stars now schedule the work", ok:1, fb:"That is the whole pivot in one breath. She did not abandon the sky; she started farming by it. That coherence is what makes the story sell rather than charm." },
        { o:"Astronomy and wine are unrelated hobbies", fb:"They are not unrelated here, and that is the point a buyer remembers: biodynamics literally follows the moon and the stars." } ] },
      { t:"audio", file:"marne_line", label:"Marne's signature line · about 6 seconds", script: SIGLINE }
    ]}
  ]},

  { id:"C", name:"The Field + The Farming", lessons:[
    { id:"C1", title:"Halden Rise (The Place)", time:"3 min", blocks:[
      { t:"hero", img:"../assets/img/field_night_stars.jpg", kicker:"THE FIELD", title:"Above the fog. Under the stars." },
      { t:"text", p:["Deep Fields is grown on Halden Rise, a high, cool ridge on the Northern California coast. It sits above the marine fog by morning and under genuinely dark sky by night. Cool bright days, long cold nights, an unhurried season.","That is the point: slow ripening, retained acidity, length rather than weight. The soils are deep, the vines dry-farmed and deep-rooted, and the whole site is farmed as one living field."] },
      { t:"dragmatch", prompt:"You are not selling numbers. Drag each site fact onto the thing the buyer will actually taste.", zones:[
        { name:"RETAINED ACIDITY + LENGTH", why:"Cold nights keep the wine's nerve. That is the freshness a buyer notices first." },
        { name:"CONCENTRATION WITHOUT IRRIGATION", why:"Roots that drink from depth, not a hose. The literal deep field, in the glass." },
        { name:"SLOW RIPENING, FRESHNESS OVER WEIGHT", why:"An unhurried season trades weight for length. Say exactly that." } ], items:[
        { txt:"Above the fog, dark cold nights", z:0, hint:"What do cold nights protect?" },
        { txt:"Deep soils, dry-farmed roots", z:1, hint:"No irrigation. Where does the water come from?" },
        { txt:"Cool bright days", z:2, hint:"Slow and steady ripens the race." } ],
        done:"Two clean links beat ten figures. One site fact, one taste benefit, and stop." }
    ]},
    { id:"C2", title:"Farmed by the Sky", time:"4 min", blocks:[
      { t:"hero", img:"../assets/img/sheep_vines.jpg", kicker:"THE FARMING", title:"The farming is the product." },
      { t:"text", p:["Biodynamic and regenerative, native yeast, low intervention. This is not a values badge on the back label. Sommeliers, beverage directors, and chefs actively seek wines like this for natural lists, by-the-glass programs, and farm-to-glass dinners.","So you do not recite the practices. You turn each one into a reason the buyer says yes."] },
      { t:"steps", intro:"For each practice: predict the buyer benefit before you reveal ours.", items:[
        { prompt:"Cover crops and compost. What does a buyer get out of that?", reveal:"Living soil, so the wine reads the site, which natural lists want." },
        { prompt:"Grazing sheep. Why would a chef care?", reveal:"A living system, a real farm-to-glass story for chefs." },
        { prompt:"Dry-farming. What ends up in the glass?", reveal:"Deep roots, concentration, the literal deep field." },
        { prompt:"Farming by the celestial calendar. What is the selling hook?", reveal:"The founder story made operational, a somm's favorite tableside line." },
        { prompt:"Native yeast, low intervention. Who asks for this?", reveal:"The site, not a recipe, exactly what natural-wine buyers ask for." } ] },
      { t:"decide", stem:"A beverage director asks why biodynamics matters to her list. Best answer?", opts:[
        { o:"“It is better for the planet.”", fb:"True but not the sell. She is not buying ethics; she is buying something her guests want and her staff can talk about." },
        { o:"“It is what your natural-list and by-the-glass guests already ask for, and it gives your staff a real story to tell tableside.”", ok:1, fb:"Sell the buyer benefit, not the virtue. This is the answer that moves a list." },
        { o:"“It is a certification we have.”", fb:"A mark is proof, not a pitch. Lead with what her guests want; let the certification back you up." } ] },
      { t:"audio", file:"farming_pitch", label:"The farming pitch · about 15 seconds", script:"We farm a handful of small fields by the moon and the stars, with sheep, compost, and cover crops, and let native yeast finish the job. Nothing added to fake it, nothing stripped to fix it. Your natural list already wants this. We just do it honestly." }
    ]}
  ]},

  { id:"D", name:"Production", lessons:[
    { id:"D1", title:"How the Wine Is Made", time:"3 min", blocks:[
      { t:"hero", img:"../assets/img/cellar_vessels.jpg", kicker:"PRODUCTION · KEPT DELIBERATELY SHORT", title:"Just enough winemaking." },
      { t:"text", p:["You do not need to be a winemaker to sell this. Native yeasts already on the fruit carry the fermentation, we intervene as little as possible, and the flagship field is co-planted and co-fermented as one wine. That is the whole story a buyer needs."] },
      { t:"steps", intro:"A buyer asks what each step actually does for the wine. Predict the honest one-line answer, then check yours against ours.", items:[
        { prompt:"“What does native yeast actually do for the wine?”", reveal:"The wine finishes with the yeasts already living on the fruit and in the cellar, so it tastes of the site, not a lab strain." },
        { prompt:"“What does low-intervention actually mean here?”", reveal:"As little added and subtracted as possible, so the wine reads the site. Low intervention, not no intervention." },
        { prompt:"“What is a field-blend co-ferment?”", reveal:"One field, many grapes, picked and fermented together. The whole field in one wine, which is the flagship's entire story." } ] },
      { t:"decide", stem:"A skeptical buyer asks, “Is this one of those unstable natural wines?” Best reply?", opts:[
        { o:"A long technical defense of native yeast", fb:"A lecture reads as defensiveness. Short and calm wins this moment." },
        { o:"“Low intervention, not no intervention. Native yeast, careful cellar work, nothing added to fake it and nothing stripped to fix it. It is clean and it is stable.”", ok:1, fb:"Short, calm, confident. You reassure without a lecture, and you never concede the category is a gamble." },
        { o:"“All natural wine is a gamble, but ours is fine.”", fb:"Never concede the category is a gamble. You just sold against yourself and every other wine on your truck." } ] }
    ]}
  ]},

  { id:"E", name:"The Lineup", lessons:[
    { id:"E1", title:"Eight Wines, Eight Roles", time:"4 min", blocks:[
      { t:"hero", img:"../assets/img/lineup_group.jpg", kicker:"THE LINEUP", title:"Eight wines, eight jobs." },
      { t:"text", p:["Each wine has one role, so there is always one right answer for the account in front of you. Learn the roles and the portfolio sells itself."] },
      { t:"flip", h:"First, meet the eight", sub:"Tap each wine to learn its role and its one-line story. Take your time; the check comes after.", cards:[
        { f:"FIELD BLEND", fs:"The whole estate", b:"DEFINE · The one co-planted field, every variety co-fermented into a single bottle." },
        { f:"PINOT NOIR", fs:"Estate", b:"SERIOUS · The noble cool-climate red: transparency and site, nothing hidden." },
        { f:"SYRAH", fs:"Cool-climate", b:"BROADEN · Savory and peppery, not a warm-climate blockbuster." },
        { f:"CHARDONNAY", fs:"No new oak", b:"ANCHOR · Taut and mineral: the white that anchors the list." },
        { f:"DUSKFALL", fs:"Skin-contact Chenin", b:"CURIOSITY · The amber discovery, the somm's find on the list." },
        { f:"DAYBREAK", fs:"Chilled Gamay", b:"RECRUIT · First wine off the fields each year, made to pour by the glass." },
        { f:"AFTERGLOW", fs:"Pinot Noir rosé", b:"TWILIGHT · A pale, dry rosé: the last light of day in a glass." },
        { f:"LONG EXPOSURE", fs:"Reserve Pinot Noir", b:"DEPTH · The flagship grape given more time. Depth, made literal." } ] },
      { t:"dragmatch", prompt:"Now place each wine in its role. Every drop tells you immediately, so use the misses to learn.", zones:[
        { name:"DEFINE" },{ name:"SERIOUS" },{ name:"BROADEN" },{ name:"ANCHOR" },{ name:"CURIOSITY" },{ name:"RECRUIT" },{ name:"TWILIGHT" },{ name:"DEPTH" } ], items:[
        { txt:"Field Blend", z:0, hint:"The estate's thesis statement." },
        { txt:"Pinot Noir", z:1, hint:"The credibility red." },
        { txt:"Syrah", z:2, hint:"For the list that has Pinot covered." },
        { txt:"Chardonnay", z:3, hint:"It holds the white list steady." },
        { txt:"Duskfall", z:4, hint:"The somm's discovery." },
        { txt:"Daybreak", z:5, hint:"Born for by-the-glass." },
        { txt:"Afterglow", z:6, hint:"Dusk, in a glass." },
        { txt:"Long Exposure", z:7, hint:"The trade-up. Time, literally." } ],
        done:"Eight wines, eight jobs, one right answer for every account. If two ever feel interchangeable, look at the word again: Anchor holds a list, Define states the estate." }
    ]},
    { id:"E2", title:"The Reds + The Flagship", time:"4 min", blocks:[
      { t:"hotspot", img:"../assets/img/bottle_deepfield.jpg", wine:"FIELD BLEND", grape:"The co-planted field · Define",
        story:"The whole living field, co-planted and co-fermented, in one bottle. The thesis statement of the estate.",
        taste:"Dark and bright at once: red and black fruit interwoven, wild herbs, a mineral spine. Complex but never heavy.",
        predict:{ stem:"Before you open Sell-it: which account does this wine fit first?", opts:[
          { o:"The account that wants the estate's story in one pour", ok:1, fb:"Yes. The flagship defines the estate. When a buyer can only try one wine, it is this one." },
          { o:"A budget by-the-glass program", fb:"That is Daybreak's job. The flagship defines; the Gamay recruits." } ]},
        sell:"If a buyer only tries one wine, it is this one. It is the thesis: one living biodynamic site read honestly. Anchor the placement here, then build the set around it." },
      { t:"hotspot", img:"../assets/img/bottle_pinot.jpg", wine:"PINOT NOIR", grape:"Estate · Serious",
        story:"The noble cool-climate red, grown above the fog for transparency and nerve.",
        taste:"Cool-climate red fruit and forest floor, fine tannin, a long savory finish. Transparent and unforced. It shows the site, not the cellar.",
        predict:{ stem:"Which account does this wine fit first?", opts:[
          { o:"The serious list that judges a producer by its Pinot", ok:1, fb:"Right. This is the credibility red: the wine directors pour to test you." },
          { o:"A beach bar pouring by the glass", fb:"Wrong tempo. That account wants Daybreak or Afterglow. This Pinot is the Serious role." } ]},
        sell:"Lead here when the buyer's list lives and dies on Pinot. It is the proof of site: transparency, nerve, and length, nothing hidden." },
      { t:"hotspot", img:"../assets/img/bottle_syrah.jpg", wine:"SYRAH", grape:"Cool-climate estate · Broaden",
        story:"Savory, peppery, cool-climate Syrah. Not a warm-climate blockbuster.",
        taste:"White pepper, violet, dark plum, olive. Medium weight with real freshness. Syrah the way cold ridges make it.",
        predict:{ stem:"Which account does this wine fit first?", opts:[
          { o:"The list that already has Pinot covered and wants range", ok:1, fb:"Exactly. Syrah broadens the story: same site honesty, different shape." },
          { o:"A collector cellar-list", fb:"That is Long Exposure's role. Syrah is here to broaden the placement, not to be the trophy." } ]},
        sell:"When the buyer says “I already have my Pinot,” this is the move: the same farming and the same ridge in a savory, peppery shape their list does not have." },
      { t:"hotspot", img:"../assets/img/bottle_longexposure.jpg", wine:"LONG EXPOSURE", grape:"Reserve single-block Pinot Noir · Depth",
        story:"The flagship grape given more time: longer aging, later release, from the oldest heart of the field.",
        taste:"Deeper and quieter than the estate Pinot: dark cherry, tea leaf, forest, a very long finish that keeps unfolding. Depth, made literal.",
        predict:{ stem:"Which account does this wine fit first?", opts:[
          { o:"The buyer who already loves the Pinot and can trade up", ok:1, fb:"Yes. This is your trade-up and your cellar wine: the same grape, given more time." },
          { o:"A first-time account that has never poured you", fb:"Too soon. Land the estate wines first; Long Exposure rewards the relationship." } ]},
        sell:"This is your trade-up and your cellar wine. When a buyer already loves the Pinot, this is where you take the check up: the same grape, given more time." },
      { t:"decide", stem:"A steakhouse wants one serious red by the bottle for collectors. Which?", opts:[
        { o:"Daybreak", fb:"Daybreak is a fresh by-the-glass pour, the Recruit. Match the role to the ask." },
        { o:"Long Exposure", ok:1, fb:"Long Exposure is the trade-up and cellar wine. Depth is exactly what a collector table buys." },
        { o:"Afterglow", fb:"Afterglow is the twilight rosé. Lovely, and wrong for this ask. Match the role to the ask." } ] },
      { t:"audio", file:"flagship_pitch", label:"The flagship pitch · about 15 seconds", script:"The Field Blend is our flagship: one co-planted field, every variety picked and fermented together, the whole estate in a single bottle. If a buyer only tries one wine, make it this one. It is the thesis." }
    ]},
    { id:"E3", title:"The Whites + The Curiosity", time:"3 min", blocks:[
      { t:"hotspot", img:"../assets/img/bottle_chardonnay.jpg", wine:"CHARDONNAY", grape:"Estate, no new oak · Anchor",
        story:"The white that anchors the list, grown cold and picked bright.",
        taste:"Taut and mineral, no new oak, citrus pith and wet stone, a saline length. It anchors a white list without ever raising its voice.",
        predict:{ stem:"Which account does this white win first?", opts:[
          { o:"The classic list that needs one dependable, site-true white", ok:1, fb:"Right. Anchor holds the list steady. This is the white the whole page leans on." },
          { o:"The natural-wine bar chasing curiosities", fb:"That bar wants Duskfall first. The Chardonnay anchors more classic company." } ]},
        sell:"Sell it as the dependable one: taut, mineral, honest. The list's quiet spine, and the safest yes for a buyer who fears oak." },
      { t:"hotspot", img:"../assets/img/bottle_duskfall.jpg", wine:"DUSKFALL", grape:"Skin-contact Chenin Blanc · Curiosity",
        story:"The textural amber white, named for the hour the field changes light. The somm's discovery.",
        taste:"Amber and aromatic: bruised apple, chamomile, orange peel, a gentle tannic grip. Texture with real freshness.",
        predict:{ stem:"Which account does this white win first?", opts:[
          { o:"The natural-wine list that wants one wine no one else has", ok:1, fb:"Exactly. Curiosity is the role: the by-the-glass discovery that makes a list feel curated." },
          { o:"A steakhouse's house white", fb:"Wrong room. Duskfall wins where curiosity is the currency: natural lists and adventurous retail." } ]},
        sell:"This is the somm's discovery. When a natural-wine list wants one wine no one else has, Duskfall is the skin-contact Chenin that makes their by-the-glass feel curated." },
      { t:"decide", stem:"A natural-wine bar wants one white by the glass. Which and why?", opts:[
        { o:"Duskfall, the skin-contact curiosity their guests seek", ok:1, fb:"For a natural-wine bar, lead with the curiosity, not the safe pick. Duskfall is exactly what that guest walks in wanting." },
        { o:"Chardonnay, because it is safe", fb:"Safe is the wrong instinct for this room. Chardonnay anchors a more classic list; the natural bar wants the discovery." } ] }
    ]},
    { id:"E4", title:"The Fresh Pair (Daybreak + Afterglow)", time:"3 min", blocks:[
      { t:"twoup", left:{img:"../assets/img/bottle_daybreak.jpg", h:"DAYBREAK", sub:"Chilled Gamay · Recruit", p:"The first wine off the fields each year, made to pour by the glass. Bright, chillable, and gone by autumn."}, right:{img:"../assets/img/bottle_afterglow.jpg", h:"AFTERGLOW", sub:"Pinot Noir rosé · Twilight", p:"A pale, dry rosé: the last light of day in a glass. The easiest yes of the warm months."} },
      { t:"text", p:["They are a deliberate pair: the beginning and the end of the day on the ridge, and the two easiest by-the-glass recruits in the book. Sell them as a story, not as two SKUs."] },
      { t:"decide", stem:"A rooftop bar is building its summer by-the-glass list and wants “something chilled and red.” Lead with?", opts:[
        { o:"Daybreak, the chilled Gamay made exactly for that pour", ok:1, fb:"That is the Recruit doing its job: fresh, chillable, by-the-glass friendly, and a story (first wine off the fields each year) the staff can retell." },
        { o:"Long Exposure, to show the ceiling", fb:"Wrong moment. The reserve is a bottle-list wine for a later visit. Answer the ask in front of you." } ] },
      { t:"decide", stem:"Same bar, and the buyer adds: “And a rosé people will photograph at sunset.”", opts:[
        { o:"Afterglow, the dusk-pale Pinot rosé, and sell the pair as dawn and dusk on one list", ok:1, fb:"Now the two wines are one story: Daybreak opens the day, Afterglow closes it. A list that tells time. That is a placement, not a pour." },
        { o:"Duskfall, because it is also about evening", fb:"Duskfall is the amber curiosity, a different job. The rosé ask is Afterglow's, and pairing it with Daybreak turns two glasses into a story." } ] },
      { t:"audio", file:"btg_pitch", label:"The by-the-glass pitch · about 12 seconds", script:"Daybreak and Afterglow are the day on our ridge, poured at both ends: the first bright Gamay of the year, and a dusk-pale rosé. Two glasses, one story your staff can tell in a sentence." }
    ]}
  ]},

  { id:"F", name:"The Table", lessons:[
    { id:"F1", title:"Pairing the Field Blend", time:"3 min", blocks:[
      { t:"hero", img:"../assets/img/pairing_flagship.jpg", kicker:"THE TABLE", title:"The same soil, read twice." },
      { t:"text", p:["Pairing here is a sell, not a garnish: farm-to-glass dinners and chef collaborations are how on-premise accounts turn this brand into events. Learn three confident pairings and the one-line reason each works."] },
      { t:"dragmatch", prompt:"Drag each dish to its wine. Every correct drop tells you why it works, and that why is your tableside line.", zones:[
        { name:"FIELD BLEND", why:"Savory depth meets savory depth: the field blend's dark fruit carries duck and jus." },
        { name:"DUSKFALL", why:"Skin-contact grip loves sweet-spiced roast. Texture with texture." },
        { name:"AFTERGLOW", why:"Dusk-pale salinity, built for cold brine and citrus. The easiest yes of the summer." } ], items:[
        { txt:"Seared duck, maitake, dark jus", z:0, hint:"Dark, savory, structured. Which wine matches that weight?" },
        { txt:"Roast squash, spiced honey, toasted seeds", z:1, hint:"Sweet spice and texture want grip." },
        { txt:"Oysters, lemon, mignonette", z:2, hint:"Cold brine wants the palest glass." } ],
        done:"Three pairings, three one-line reasons. Say the why, not just the match: that is what a staff pick sounds like." },
      { t:"accordion", h:"The recipes (optional depth, from the field kitchen)", items:[
        { h:"Seared duck with maitake + jus · for the Field Blend", body:"Score and slow-render the breast skin-down until deeply bronzed; rest. Roast maitake hard in the duck fat. Reduce stock with a spoon of the wine and a little butter. Slice, salt, pour, and serve with the field blend just below room temperature." },
        { h:"Spiced honey squash · for Duskfall", body:"Halve delicata, roast cut-side down until caramelized. Warm honey with chile and cider vinegar; brush generously. Finish with toasted seeds, torn herbs, flaky salt. The skin-contact grip wants that sweet heat." },
        { h:"Oysters with mignonette · for Afterglow", body:"Shuck a dozen cold. Mignonette: minced shallot, cracked pepper, good vinegar, ten minutes to marry. Lemon on the side, rosé colder than the room, dusk optional but recommended." } ] }
    ]}
  ]},

  { id:"G", name:"The Brand World", lessons:[
    { id:"G1", title:"The Circle, the Almanac, the Sessions", time:"3 min", blocks:[
      { t:"hero", img:"../assets/img/tasting_field.jpg", kicker:"THE BRAND WORLD", title:"A world, not just a bottle." },
      { t:"text", p:["Deep Fields gives you three name-droppable programs. Each one is a selling hook, not a brochure line. Match the asset to the hook it unlocks."] },
      { t:"dragmatch", prompt:"Match each program to the selling hook it unlocks. Each one is a door into an account.", zones:[
        { name:"FIRST-IN-LINE ALLOCATION", why:"The Circle turns scarcity into urgency: commit now and be first in line." },
        { name:"STAFF STORYTELLING FUEL", why:"The Almanac hands staff a fresh story every season. Free training content for the account." },
        { name:"A BUYER EXPERIENCE THAT CLOSES", why:"Nothing closes a wavering buyer like a Session at the field as the stars come out. Invite them." } ], items:[
        { txt:"The Deep Fields Circle (membership)", z:0, hint:"Allocation, membership, first access." },
        { txt:"The Field Almanac (the farming year, told by the sky)", z:1, hint:"Something the floor staff can retell." },
        { txt:"The Field Sessions (tasting from dusk into dark)", z:2, hint:"You cannot email an evening on the ridge." } ],
        done:"Three programs, three doors: urgency for the buyer, stories for the staff, and an evening that closes the deal." }
    ]}
  ]},

  { id:"H", name:"Selling Deep Fields", lessons:[
    { id:"H1", title:"Certifications as a Selling Lever", time:"4 min", blocks:[
      { t:"badges", img:"../assets/img/badges_sheet.jpg", caption:"Farmed and certified: biodynamic, regenerative organic, and organic." },
      { t:"text", p:["Three marks, three different buyers convinced. A certification is proof, not a pitch: lead with what the buyer wants, then let the mark close the credibility gap."] },
      { t:"dragmatch", prompt:"Each mark convinces a different room. Drag the mark to the buyer it wins.", zones:[
        { name:"THE NATURAL-LIST SOMM", why:"The somm wants the biodynamic story and the celestial calendar behind it. Lead with the moon-and-root mark here." },
        { name:"THE SUSTAINABILITY-MINDED CHAIN BUYER", why:"Regenerative is the claim their corporate deck already values. This mark speaks their language." },
        { name:"THE CAUTIOUS FIRST-TIMER", why:"Plain organic is the reassurance a careful buyer recognizes on sight. Familiar, safe, true." } ], items:[
        { txt:"BIODYNAMIC FARMED (the moon-and-root mark)", z:0, hint:"Who romances the calendar?" },
        { txt:"REGENERATIVE ORGANIC (the soil-and-sprout mark)", z:1, hint:"Which buyer reports to a sustainability deck?" },
        { txt:"ORGANIC FARMED (the leaf mark)", z:2, hint:"The most familiar word on the shelf." } ],
        done:"One mark each, matched to the room. Proof lands hardest when it answers the fear that buyer actually has." },
      { t:"decide", stem:"A certification is proof, not a pitch. What does that look like in a real conversation?", opts:[
        { o:"Open by listing all three certifications before anything else", fb:"Marks first is a resume, not a sell. Lead with what the buyer wants; the certification is your closing proof, not your opener." },
        { o:"Lead with the buyer benefit, then let the mark close the credibility gap", ok:1, fb:"Right. The guest wants the story and the glass; the mark is what lets the buyer trust it. Benefit first, proof second, always." } ] },
      { t:"audio", file:"cert_track", label:"The certification talk track · about 12 seconds", script:"Certified biodynamic, regenerative, and organic. Not printed promises: audited farming. Your guests ask for this, your staff can say it with confidence, and the marks on the bottle back them up." }
    ]},
    { id:"H2", title:"Why Pour It vs Why Stock It", time:"4 min", blocks:[
      { t:"text", h:"Two channels, two different pitches.", p:["On-premise buys a pour: velocity by the glass, a story staff can retell, a list that feels curated. Off-premise buys a placement: margin, a premium set that trades shoppers up, and a shelf story that sells unattended. Never give one pitch to both rooms."] },
      { t:"dragmatch", prompt:"Sort each selling point into its channel. Every drop confirms or corrects you on the spot.", zones:[
        { name:"ON-PREMISE · WHY POUR", cap:3 },
        { name:"OFF-PREMISE · WHY STOCK", cap:3 } ], items:[
        { txt:"By-the-glass velocity with a staff story", z:0, hint:"Glasses move where people talk." },
        { txt:"Natural-list credibility for the somm", z:0, hint:"Who curates a list?" },
        { txt:"Farm-to-glass dinners and chef collabs", z:0, hint:"Events happen where there is a kitchen." },
        { txt:"A premium set that trades shoppers up", z:1, hint:"Sets live on shelves." },
        { txt:"Shelf story that sells without a person", z:1, hint:"No staff standing by." },
        { txt:"Case-stack potential on Daybreak in season", z:1, hint:"Nobody stacks cases in a dining room." } ],
        done:"Channel-true or nothing. The somm never hears about case stacks; the shop buyer never hears about chef dinners. Same wine, two languages." },
      { t:"audio", file:"onprem_pitch", label:"On-premise pitch · about 12 seconds", script:"Pour it because your guests already ask for biodynamic, your staff gets a story they can tell in one breath, and the glass trades up to the bottle. Start with Daybreak and Duskfall, and let the list tell time." },
      { t:"audio", file:"offprem_pitch", label:"Off-premise pitch · about 12 seconds", script:"Stock it because the premium set needs a story that sells itself: a handful of fields, farmed by the sky, eight clear roles. The label does the talking, the margin holds, and Daybreak stacks in season." }
    ]},
    { id:"H3", title:"Objection Handling", time:"5 min", blocks:[
      { t:"text", h:"The five pushbacks, rehearsed calm.", p:["Every objection below is a real conversation you will have. Choose your response before the model answer, and notice why the weaker options fail."] },
      { t:"decide", stem:"“It is too expensive for my list.”", opts:[
        { o:"Offer a discount to get in the door", fb:"Discounting concedes the wine is not worth it, and the price never recovers. Sell the return, not the cost." },
        { o:"“It is priced for what it is: hand-farmed, dry-farmed, biodynamic fields, dry-farmed, native yeast, and it earns its by-the-glass slot because guests trade up for the story. Put Daybreak by the glass and let the margin prove it.”", ok:1, fb:"You answered return, not cost, and gave a concrete first step. That is the calm, non-defensive shape of every good rebuttal." },
        { o:"Explain the production costs line by line", fb:"A technical defense misses that the buyer is asking about return, not cost. Answer the money question with a money answer." } ] },
      { t:"decide", stem:"“Natural wines are unstable and I have been burned.”", opts:[
        { o:"“Low intervention, not no intervention. Native yeast, careful cellar work, nothing added to fake it and nothing stripped to fix it. It is clean and it is stable, and I will stand behind every bottle.”", ok:1, fb:"You reassured without a lecture and put your name behind it. Never concede the category is a gamble." },
        { o:"“All natural wine is a gamble, but ours is fine.”", fb:"You just agreed the category is risky, selling against yourself and half your book. Reframe instead: low intervention, not no intervention." },
        { o:"Promise it will never have any variation at all", fb:"Overpromising perfection breaks trust the first time a cork is off. Confidence, not perfection." } ] },
      { t:"decide", stem:"“Nobody is asking for Deep Fields.”", opts:[
        { o:"“It will be famous soon, trust me”", fb:"Leaning on future fame is hollow. The story is the awareness: give them the pour that proves it." },
        { o:"“No, but they are asking for exactly what it is: biodynamic, single-site, a founder story your staff can tell. It sells itself once it is open. Pour one glass for your team and let them decide.”", ok:1, fb:"You converted no demand into latent demand and proposed the smallest possible yes: one staff pour. That is how unknown brands land." },
        { o:"List the awards and scores it might win", fb:"Speculative acclaim is worse than none, and this brand sells on substance, not scores." } ] },
      { t:"decide", stem:"“I have never heard of this ridge. Why should my list carry an unknown site?”", opts:[
        { o:"Compare it to a famous region it resembles", fb:"Name-dropping a bigger region concedes the point and makes you the imitation. The single site IS the sell." },
        { o:"“Because a single site you can taste in the glass beats a famous name you cannot. The fields, farmed honestly, read without tricks. Pour it beside a wine your guests know and let the depth make the case. Unknown today is discovered tomorrow, and your list gets there first.”", ok:1, fb:"Confidence in the site, a side-by-side proof, and first-mover flattery. Nothing defensive in it." },
        { o:"Walk through the geography in detail", fb:"Over-explaining the geography buries the sell. Two site facts, one taste benefit, done." } ] },
      { t:"decide", stem:"“If it is allocated, I cannot build a program on it.”", opts:[
        { o:"Promise unlimited supply if they commit", fb:"Promising unlimited supply devalues the wine and will be false. Scarcity is the lever, not the problem." },
        { o:"“The allocation is the reason to commit now, not later. Lock your by-the-glass placement, join the Circle logic, and you are first in line while your competitor waits. Patience is rewarded, and so is moving early.”", ok:1, fb:"You flipped scarcity from obstacle to urgency and named the concrete move. That is the close." },
        { o:"Apologize for the small production", fb:"Treating scarcity as a problem hides that it is the lever. Small is the point; first in line is the prize." } ] },
      { t:"recall", id:"comeback", prompt:"Now, in your own words: your one-line comeback to the price objection. Say it out loud before you type it." },
      { t:"audio", file:"price_rebuttal", label:"Model rebuttal · price · about 12 seconds", script:"It is priced for what it is: hand-farmed, dry-farmed, biodynamic fields. Put Daybreak by the glass, watch guests trade up for the story, and let the margin prove it." },
    ]}
  ]},

  { id:"I", name:"Practice + Commit", lessons:[
    { id:"I1", title:"The Buyer Conversation", time:"6 min", blocks:[
      { t:"text", h:"One visit, start to finish.", p:["Pick an account and run the conversation: qualify, choose the wine, pitch the channel, handle the pushback, land the placement. Your choices change the buyer's confidence, and the ending."] },
      { t:"branch" }
    ]},
    { id:"I2", title:"The Assessment", time:"6 min", blocks:[
      { t:"assess" }
    ]},
    { id:"I3", title:"Your Commitment", time:"2 min", blocks:[
      { t:"hero", img:"../assets/img/harvest_night.jpg", kicker:"TAKE IT TO THE FIELD", title:"One real next action." },
      { t:"commit" }
    ]}
  ]}

]};

// ---- Branching scenario data ----
const BRANCH = {
  intro: "Choose your account. Both paths use everything you have learned; they reward different choices.",
  paths: [
    { id:"bar", name:"THE NATURAL-WINE BAR", desc:"A busy downtown natural-wine bar. The buyer is a curious somm with a tight, curated list.", img:"../assets/img/pairing_understory.jpg",
      nodes: {
        start: { text:"The somm gives you ten minutes at the end of the bar. “Alright. What have you got?”", opts:[
          { o:"Ask first: “What is your list missing right now?”", d:+15, fb:"She relaxes. “Honestly? A by-the-glass white with a story. Everyone has the same three oranges.” You qualified before pitching.", next:"wine" },
          { o:"Open with the full 30-second pitch immediately", d:+5, fb:"Solid pitch, slightly early. She listens politely, but you are answering a question she has not asked yet.", next:"wine" },
          { o:"Lead with price and a first-order discount", d:-15, fb:"Her eyes glaze. Price-first reads as commodity, and this room buys stories. You will have to earn the rapport back.", next:"wine" } ]},
        wine: { text:"“Okay. If I give you one by-the-glass slot, what is the wine?”", opts:[
          { o:"Duskfall, the skin-contact Chenin", d:+15, fb:"Exactly the room: the Curiosity role for the curated list that wants what no one else pours.", next:"pitch" },
          { o:"Daybreak, the chilled Gamay", d:+8, fb:"A fine recruit and very pourable, though this list already turns fresh reds. The Curiosity was the sharper fit.", next:"pitch" },
          { o:"Long Exposure, the reserve", d:-10, fb:"A reserve Pinot by the glass at a natural bar misreads the room and the margin. Depth is for the cellar list.", next:"pitch" } ]},
        pitch: { text:"“Give me the line I tell my staff.”", opts:[
          { o:"“One biodynamic field above the fog, farmed by the moon and stars by a former astrophotographer. This is its skin-contact Chenin.”", d:+15, fb:"She writes it down word for word. Staff-sized story, farming as the lever, done.", next:"objection" },
          { o:"A detailed rundown of maceration times and vessel choices", d:-10, fb:"“So... it is an orange wine.” The technique buried the story. Staff lines must fit in one breath.", next:"objection" } ]},
        objection: { text:"She hesitates. “Natural wines have burned me before. Bottle variation, fizzy reds. Why is this different?”", opts:[
          { o:"“Low intervention, not no intervention. Native yeast, careful cellar work, clean and stable, and I stand behind every bottle.”", d:+15, fb:"Calm, specific, personal. She nods; the fear had a name and you retired it.", next:"close" },
          { o:"“All natural wine is a bit of a gamble, honestly.”", d:-20, fb:"You conceded the category. She just mentally filed your whole book under risky.", next:"close" },
          { o:"Change the subject to the brand story", d:-8, fb:"Dodging reads as having no answer. The objection was the buying signal, and it went unanswered.", next:"close" } ]}
      }},
    { id:"shop", name:"THE FINE-WINE SHOP", desc:"A neighborhood fine-wine retailer with a premium set and loyal regulars.", img:"../assets/img/pairing_flagship.jpg",
      nodes: {
        start: { text:"The owner is stacking cases. “Five minutes. Go.”", opts:[
          { o:"Ask what his premium set is missing and what his regulars trade up to", d:+15, fb:"“People want a story at twenty-plus, and I am tired of the same estates.” You found the gap before pitching into it.", next:"wine" },
          { o:"Open the bag and lead with the flagship bottle silently", d:+5, fb:"The label earns a long look, which buys you the next question. Showmanship works better with a question first, though.", next:"wine" },
          { o:"Lead with the case discount schedule", d:-15, fb:"“Everything has a discount schedule.” You made a story brand sound like a commodity.", next:"wine" } ]},
        wine: { text:"“What goes on my premium shelf, and what actually moves?”", opts:[
          { o:"Field Blend to define the set, Chardonnay to anchor it", d:+15, fb:"Define plus Anchor is the correct retail architecture: the story bottle and the dependable one beside it.", next:"pitch" },
          { o:"Daybreak for a seasonal case stack", d:+8, fb:"Right instinct for volume, but it skips his stated premium-set gap. Lead premium, add the stack second.", next:"pitch" },
          { o:"Only Long Exposure, the allocated reserve", d:-10, fb:"An allocation-only pitch to a first-time account puts the trophy before the relationship.", next:"pitch" } ]},
        pitch: { text:"“Why does this sell off a shelf with nobody talking?”", opts:[
          { o:"“The label is the story: the fields, an eclipse ring, farmed by the sky. The shelf-talker writes itself, and the marks on the bottle back it up.”", d:+15, fb:"Retail-true: the label sells unattended, the certifications close silently. He can see the shelf already.", next:"objection" },
          { o:"“Your staff can hand-sell it at the register.”", d:-8, fb:"He has one part-timer on weekdays. Off-premise pitches cannot depend on a person.", next:"objection" } ]},
        objection: { text:"“Nobody walks in asking for Deep Fields.”", opts:[
          { o:"“No, but they ask for exactly what it is: biodynamic, single-site, a story at twenty-plus. Pour one bottle for your staff and regulars this Friday and let them decide.”", d:+15, fb:"Latent demand plus the smallest possible yes. He is already picking the Friday.", next:"close" },
          { o:"“It will be a famous name soon.”", d:-15, fb:"Futures are not stock decisions. Hollow, and he heard it as hollow.", next:"close" },
          { o:"Offer deeper margin to offset the risk", d:-8, fb:"Margin as apology reprices the brand downward on day one.", next:"close" } ]}
      }}
  ],
  closes: [
    { min:80, h:"PLACEMENT WON", text:"“Alright. Let us start it.” Full placement: your lead wines are in, and a Field Session invite is on the table. You qualified first, matched roles to the room, kept the pitch channel-true, and retired the objection without flinching." },
    { min:55, h:"A FOOT IN THE DOOR", text:"“Leave me the sheet and one sample.” Partial win: one slot on trial. Look back at the dips in the meter; one channel-true line or a calmer rebuttal turns this into the full placement next visit." },
    { min:0, h:"A PASS, FOR NOW", text:"“Not this season.” It happens. Replay the visit: qualify before pitching, match the role to the room, never concede the category, and let scarcity create urgency instead of apology. Run it again; buyers reward the calm version." } ],
  debrief: "Every branch mapped to an objective: qualifying (the pitch), wine choice (the roles), the staff line (channel split plus farming as lever), and the pushback (objection handling). This is the whole course in one conversation."
};

// ---- Assessment data (12 graded items, pass at 80%) ----
const ASSESS = {
  passNote: "Pass at 80%. This exam mirrors a real buyer conversation, not trivia. Take it again as often as you like.",
  items: [
    { kind:"mc", stem:"A busy natural-wine bar wants one wine to lead with by the glass this summer. The buyer is curious, values biodynamic farming, and wants something guests cannot get everywhere. Which do you lead with, and why?", opts:[
      { o:"Long Exposure, because it is the most serious wine in the range", fb:"Long Exposure is a beautiful reserve, but its role is Depth: the cellar trade-up for a collector, not a summer by-the-glass pour. You reached past what this guest wants." },
      { o:"Chardonnay, because a white is the safe by-the-glass choice", fb:"Chardonnay anchors a classic list, but “safe” is the wrong instinct for a natural-wine bar that wants something guests cannot get everywhere. Lead with the curiosity." },
      { o:"Duskfall, the skin-contact Chenin: the somm's curiosity, and a biodynamic natural-list guest walks in wanting it", ok:1, fb:"Exactly. You matched the wine's role, Curiosity, to the account, and the biodynamic story seals it. You led with the buyer's want, not the fanciest bottle." },
      { o:"Field Blend, because the flagship is always the right lead", fb:"The flagship is not automatically the lead. Field Blend defines the estate, but by the glass, in this account, the curiosity wins. Match the role to the buyer." } ] },
    { kind:"mc", stem:"A steakhouse wants one serious red by the bottle for its collector tables. Which?", opts:[
      { o:"Daybreak", fb:"Daybreak is the by-the-glass Recruit. A collector table is buying Depth." },
      { o:"Long Exposure", ok:1, fb:"Right: the reserve single-block Pinot is the trade-up and cellar wine. Depth is exactly what this table pays for." },
      { o:"Afterglow", fb:"The twilight rosé is built for warm evenings, not the collector's bottle list." } ] },
    { kind:"mc", stem:"A premium grocery set needs one dependable white that holds the shelf. Which?", opts:[
      { o:"Chardonnay, the Anchor", ok:1, fb:"Anchor is the role built for this: taut, mineral, dependable, and it never raises its voice." },
      { o:"Duskfall, the Curiosity", fb:"The skin-contact Chenin wins curated lists, not the everyday premium shelf. Match role to room." },
      { o:"Field Blend, the flagship", fb:"Define states the estate on a story shelf, but the ask here was the dependable anchor." } ] },
    { kind:"mc", stem:"A rooftop bar wants “something chilled, red, and easy” for summer. Which?", opts:[
      { o:"Daybreak, the chilled Gamay", ok:1, fb:"The Recruit, doing exactly its job: fresh, chillable, with a first-wine-of-the-year story staff can retell." },
      { o:"Pinot Noir, the Serious estate red", fb:"Serious is the credibility red for wine-led lists. The ask was easy and chilled: that is the Recruit." },
      { o:"Syrah, to broaden the list", fb:"Broaden answers a list that has Pinot covered, not a chilled-and-easy ask." } ] },
    { kind:"mc", stem:"A buyer says: “Give me the one wine that tells me who this estate is.” Which?", opts:[
      { o:"Field Blend, co-planted and co-fermented", ok:1, fb:"Define: the whole living field, co-planted and co-fermented, in one bottle. The thesis statement." },
      { o:"Long Exposure, the reserve", fb:"Depth rewards those who already know the estate. The introduction is the field blend." },
      { o:"Afterglow, the rosé", fb:"Twilight is a lovely chapter, not the thesis. The estate in one bottle is the field blend." } ] },
    { kind:"mc", stem:"Why is Marne's pivot from astrophotography to farming coherent rather than a career quirk?", opts:[
      { o:"Because biodynamics is farming by the cosmos, so the same moon and stars now schedule the work", ok:1, fb:"That is the one-breath version: she did not leave the sky, she started farming by it." },
      { o:"Because vineyards are photogenic at night", fb:"Charming, not coherent. The selling version is that the same sky now schedules the farming." },
      { o:"Because both jobs involve equipment on tripods", fb:"The connection that sells is the calendar: biodynamics literally follows the moon and stars." } ] },
    { kind:"mc", stem:"A buyer asks what the high, cold, above-the-fog site actually does for the wine. Your best one-line link?", opts:[
      { o:"“Dark cold nights above the fog keep the acidity, so the wines stay fresh and long.”", ok:1, fb:"One site fact, one taste benefit. That is how terroir sells: two clean links beat ten figures." },
      { o:"Recite the elevation, row spacing, and soil series", fb:"Figures bury the sell. Connect one fact to one thing she will taste." },
      { o:"“It is just a beautiful place.”", fb:"Beauty is not a benefit in the glass. Link the site to the taste: cold nights, retained acidity, length." } ] },
    { kind:"mc", stem:"The honest way to use site and farming specifics in a pitch is:", opts:[
      { o:"Connect one or two facts to what the buyer will taste, and never bury the sell in figures", ok:1, fb:"Right. The story earns the placement; the figures, where real, back it quietly." },
      { o:"Memorize every number and recite them for authority", fb:"Number-reciting reads as a crib sheet, not confidence, and swamps the one link that matters." },
      { o:"Avoid the site entirely and talk only price", fb:"The site is the differentiator. Price-only pitches commoditize exactly what makes this brand sellable." } ] },
    { kind:"mc", stem:"“It is too expensive for my list.” Your best reply?", opts:[
      { o:"“It is priced for what it is: hand-farmed, dry-farmed, biodynamic fields, and it earns its slot because guests trade up for the story. Put Daybreak by the glass and let the margin prove it.”", ok:1, fb:"Return, not cost, plus a concrete first step. Calm and non-defensive." },
      { o:"“I can discount the first order.”", fb:"Discounting concedes the wine is not worth it, and the price never recovers." },
      { o:"“Let me walk you through our production costs.”", fb:"The buyer asked about return, not cost. A cost lecture answers the wrong question." } ] },
    { kind:"mc", stem:"“Nobody is asking for Deep Fields.” Your best reply?", opts:[
      { o:"“No, but they are asking for exactly what it is: biodynamic, single-site, a story your staff can tell. Pour one glass for your team and let them decide.”", ok:1, fb:"Latent demand plus the smallest possible yes. That is how unknown brands land." },
      { o:"“It will be famous soon.”", fb:"Future fame is hollow. The story is the awareness; the staff pour is the proof." },
      { o:"“That is because marketing has not started yet.”", fb:"Blaming marketing concedes there is no current reason to buy. There is: the story, open the bottle." } ] },
    { kind:"multi", stem:"Select every point that belongs in an ON-PREMISE pour pitch. (Choose all that apply.)", opts:[
      { o:"By-the-glass velocity with a staff story", ok:1 },
      { o:"Natural-list credibility for the somm", ok:1 },
      { o:"Farm-to-glass dinners and chef collaborations", ok:1 },
      { o:"Shelf-talker copy that sells unattended", ok:0 },
      { o:"End-cap and case-stack placement", ok:0 } ],
      fb:"Pour pitches live on velocity, staff stories, and events. Shelf-talkers and case stacks are off-premise language; channel-true or nothing." },
    { kind:"cloze", stem:"Complete the brand's two locked lines.", parts:[
      { pre:"The tagline: “", answers:["look deeper","look deeper."], post:"”" },
      { pre:"The signature line: “The longer you look, ", answers:["the more there is","the more there is."], post:"”" } ],
      fb:"Look deeper. / The longer you look, the more there is. Two lines, always word for word: they are the brand's fingerprint." }
  ],
  freeItem: { stem:"Bonus, ungraded: A steakhouse buyer says your wine is too expensive. Write your two-sentence reply, then check it against the rubric.", rubric:"Strong replies do three things: answer return rather than cost (the story earns the price), stay calm and non-defensive (no discounts, no lectures), and end with a concrete next step (a by-the-glass trial, a staff pour). If your two sentences do all three, you passed your own bar." }
};

// ---- Commit / boosters (I3) ----
const COMMIT = {
  prompt: "Name one account you will pitch this week, and the wine you will lead with.",
  boosters: [
    { day:"DAY 2", what:"Pitch recall", how:"A 60-second email: type the 30-second pitch from memory, get the model answer back." },
    { day:"DAY 7", what:"Role match", how:"One-screen drill: eight wines to eight roles, ninety seconds, coaching feedback." },
    { day:"DAY 21", what:"Objection drill", how:"Two pushbacks, best-response picks, and your saved one-line comeback shown back to you." } ],
  boosterNote: "Boosters arrive by automated email with deep links to each micro-drill (push and in-app where the LMS supports it). Demonstrated here as the schedule; wired to the client's LMS in production."
};
