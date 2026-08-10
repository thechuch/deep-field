// DEEP FIELDS · Sell the Depth. Course content v2 (15 lessons, 8 sections). Crafted by Small Circle.
const PITCH = "Deep Fields is a handful of deep-soiled fields on a high, cool ridge above the Northern California fog. It is made by a former astrophotographer who now farms by the same sky she used to watch. A few small fields, farmed slowly and read honestly, in eight grape-forward wines. Nothing is rushed and nothing is hidden. Look deeper.";
const SIGLINE = "The longer you look, the more there is.";

/* The eight wines, in lineup order. The renderer reads this so a rename can never
   strand a hardcoded name in the commitment dropdown again. */
const WINES = ["Field Blend (the flagship)","Pinot Noir","Syrah","Chardonnay","Duskfall","Daybreak","Afterglow","Long Exposure"];

/* Learning objectives, Mager form: performance, condition, criterion.
   `short` is what the learner sees. `full` is what a training reviewer audits. */
const OBJ = {
  O1: { short:"Say the pitch, cold, in thirty seconds.",
        full:"Given an account type and no notes, deliver the 30-second pitch in 30 seconds or less, hitting all five spine points, with no factual errors." },
  O2: { short:"One right wine for the room in front of you.",
        full:"Given any of the eight account archetypes in this course, name the lead wine and state its role in one sentence, correct on 7 of 8." },
  O3: { short:"Open with two, not eight.",
        full:"Given an account archetype, propose exactly two wines as the opening set and name what you hold for visit two." },
  O4: { short:"Sell the farming as a lever, in plain words, before any badge.",
        full:"Given a buyer question about farming or site, lead with the vineyard practice in plain language and one taste or guest benefit before naming any certification, in 3 of 3 attempts." },
  O5: { short:"Answer a money question with money.",
        full:"Given a stated glass price and target pour cost, identify which wines clear, quote the price line, and answer a price objection without discounting." },
  O6: { short:"Know who decides, and when to call.",
        full:"Given an on-premise or off-premise account, name who holds the pen and the buying window, and pitch using only that channel's language, with zero cross-channel terms." },
  O7: { short:"Hear the objection under the objection.",
        full:"Given any of eight objections, name what the buyer is actually saying, then answer in under 10 seconds without discounting or conceding the category, ending with one concrete next step." },
  O8: { short:"Keep the account after the yes.",
        full:"Given a placement at week 4 that has not moved, diagnose before proposing, and name the pull-through action that was skipped, correct on 3 of 4." }
};

const COURSE = {
  title: "Sell the Depth",
  subtitle: "The Deep Fields Brand Education Course",
  note: { k:"decision", h:"Designed backward from one failure",
    b:"This course is not built around what the brand wants said. It is built around one costed failure: reps win the first placement on story, then lose the account between the yes and the first reorder. Every lesson header names the objective it serves. Three lessons name none. Those three are the next cut." },
  sections: [

  { id:"A", name:"The Problem", lessons:[
{ id:"A1", title:"The Account You Lost", time:"4 min", obj:["O8"], blocks:[
  { t:"hero", img:"../assets/img/field_hero_fog.jpg", kicker:"START HERE", title:"The account you lost." },
  { t:"text", h:"You won the pitch. Then you lost the account.", p:[
    "You know this one. You walked in with something new, you told it well, and the buyer said yes. One case went in. Four weeks later the wine was off the list, and nobody would give you a straight answer about why.",
    "Here is what that actually cost. A by-the-glass slot turns on a menu cycle, so a placement that dies does not just cost you a case. It costs you that slot for the whole cycle, it spends the trust you used to get the yes, and it locks you out of the list until the next reset. You did not lose a sale. You lost the window.",
    "That gap, between the yes and the first reorder, is the only thing this course is about. Every lesson in it earns its place by closing that gap. If a lesson does not help you keep an account after the yes, it is not here."] },
  { t:"recall", id:"a1_lost_account", obj:["O8"], prompt:"Name one, from your own book. Which brand, which account, and roughly when it went quiet. Write it the way you would say it out loud, not the way you would write it in a report. Be specific: we come back to this exact account later in the course, so pick a real one you still call on." },
  { t:"recall", id:"a1_baseline_pitch", obj:["O1"],
    note:{ k:"measured", h:"A pre-test wearing a warmup",
      b:"This line is captured before any teaching, so the rep can be shown their own opening beside the one they write in the final lesson. It measures nothing on its own. The comparison is read by the rep, on one screen, at the end. We would rather say that plainly than claim a gain we do not score.",
      m:"Pre-course pitch, free text, one per learner. Reprinted beside the post-course line in H2." },
    prompt:"Now, cold, no notes. What would you say today to get an account to try a wine like this? One line, the way it would actually come out of your mouth in the doorway. Do not polish it. This stays on your device and gets shown back to you in the final lesson, beside the line you write then." },
  { t:"decide", id:"a1_cost", obj:["O8"], stem:"Week four. One case in, no reorder, and your wine is still sitting in her by-the-glass slot. Her menu reprints in eight weeks. What did that placement actually cost you?", opts:[
    { o:"One case of margin, which you make back on the next account.", fb:"That is the number on the invoice, and it is the smallest part of it. The case is gone either way. What you cannot make back is the slot, and the slot was the thing you were actually selling." },
    { o:"The slot for a full menu cycle, the trust you spent to get it, and your next look at that list.", ok:1, fb:"Right, and it is all three, not one of them. The slot is gone until the menu reprints. The trust is gone because she remembers who talked her into it. And the next conversation starts lower than the last one did. This whole course aims at the four weeks between the yes and the first reorder, because that is where all three get lost." },
    { o:"Nothing you could control. Some wines do not move.", fb:"Some do not. But most placements that die in month one die of something ordinary: the floor never tasted it, or it went onto the menu at the wrong price or in the wrong section. Those are yours to catch, and nobody else in that building is going to catch them for you." } ] }
]},
{ id:"A2", title:"What Good Looks Like", time:"4 min", obj:["O1"], blocks:[
  { t:"text", h:"Not what you will know. What you will do.", p:[
    "Knowing the estate does not keep a placement alive. Every line in this course is written as something you do out loud, in an account, with your phone in your pocket and a buyer looking at you.",
    "By the end of it you walk in and ask before you pitch, you put two wines on the bar instead of eight, you say the farming in one sentence a bartender can repeat, you answer a price question with arithmetic instead of an apology, and you leave with a next step that has a day attached to it. Then you come back and the wine is still on the list."] },
  { t:"steps", id:"a2_visit", obj:["O1","O3","O8"],
    intro:"One good visit, five moves. Predict each one before you open it. You are not being tested, you are hearing what a good visit sounds like from the inside.", items:[
    { prompt:"01 · She has ten minutes and your bag is on the floor. What happens before you open it?",
      reveal:"You ask two questions: what her by-the-glass list is missing, and what her regulars trade up to. Twenty seconds, and now everything you say answers a question she actually has." },
    { prompt:"02 · She says her whites all taste the same and she needs one glass pour that works on a Tuesday. How many bottles go on the bar?",
      reveal:"Two. The other six stay in the bag. Eight wines is a tasting. Two is a decision." },
    { prompt:"03 · You open on Duskfall, the skin-contact Chenin, because her list looks curious. She goes quiet and folds her arms. What do you do?",
      reveal:"You stop mid-sentence and ask: is skin contact a hard sell in your room? She says yes, her guests bounce off it. That question cost you ten seconds and saved the visit. A wrong wine caught early costs nothing. A wrong wine pitched all the way to the end costs you the meeting." },
    { prompt:"04 · So you move to the wine she can actually pour. What do you hand her along with the bottle?",
      reveal:"Daybreak, chilled Gamay, and one line her bartender can repeat without looking anything up: first wine off the fields each year, farmed by the moon and the stars, serve it cold. One sentence. No lecture." },
    { prompt:"05 · She is interested. What do you ask for on the way out?",
      reveal:"Not think about it. You ask her to pour it for her staff before Friday service, and you tell her you will be back Tuesday to hear what the bartenders said. That staff pour is the reorder, bought four weeks early." } ] },
  { t:"decide", id:"a2_notice", obj:["O7"], stem:"Go back to step three. The moment she went quiet and folded her arms, what did the rep actually do?", opts:[
    { o:"Kept going and finished the Duskfall story, because a half-told pitch is worse than none.", fb:"This is the common instinct and it is expensive. Finishing a pitch the buyer has already left costs you the rest of the meeting, and you still walk out not knowing why she checked out. The pitch was never the skill in that moment." },
    { o:"Dropped the price on Duskfall to get past the hesitation.", fb:"Nothing about folded arms said price. She was reacting to the style, not the number, so a discount answers a question she did not ask and reprices a wine that was never the problem. Find out what the silence is before you spend money on it." },
    { o:"Stopped presenting and asked a question.", ok:1, fb:"That is the move. She stopped listening, so the rep stopped talking and found out why. Ten seconds of asking replaced twenty minutes of guessing, and it turned the wrong wine into the right one inside the same visit. Presenting is what you do once you know what the buyer wants. Asking is how you find out." } ] },
  { t:"text", h:"The standard you will be held to.", p:["Eight things. Every one of them is checked in an account, not on a screen. Each lesson from here names which of these it serves, and if a lesson names none, ask why it is in the course."], list:[
    "O1 · Say the pitch, cold, in thirty seconds.",
    "O2 · One right wine for the room in front of you.",
    "O3 · Open with two, not eight.",
    "O4 · Sell the farming as a lever, in plain words, before any badge.",
    "O5 · Answer a money question with money.",
    "O6 · Know who holds the pen, and when to call.",
    "O7 · Hear the objection under the objection.",
    "O8 · Keep the account after the yes." ] }
]}
  ]},

  { id:"B", name:"First Contact", lessons:[
{ id:"B1", title:"One Slot, Eight Roles", time:"5 min", obj:["O2","O3"], blocks:[
  { t:"text", h:"One slot, not eight.", p:[
    "The account in front of you has one open slot. Maybe two. It does not have eight, and the buyer has a book full of reps who want the one. Whoever takes it owns it until the menu turns, and whoever wastes it is not getting it back this year.",
    "That is why the eight roles below are not a portfolio to present. They are a triage tool. You learn them so you can walk in having already chosen, and so you can say why in one line.",
    "Eight wines on the table tells a buyer you do not know their room. One wine, chosen out loud for their room, tells them you do."] },
  { t:"flip", id:"b1_roles_teach", obj:["O2"], h:"The eight, and the job each one does", sub:"Turn every card. You are not memorizing a catalog. You are learning which single wine you reach for when a buyer describes their room.", cards:[
    { f:"FIELD BLEND", fs:"The whole estate", b:"DEFINE · One co-planted field, co-fermented into one bottle. Reach for it when a buyer wants the estate explained in a single pour." },
    { f:"PINOT NOIR", fs:"Estate", b:"SERIOUS · The benchmark red. Reach for it when the list is judged on its Pinot and the buyer is testing you." },
    { f:"SYRAH", fs:"Cool-climate", b:"BROADEN · Savory and peppery, not a warm-climate blockbuster. Reach for it when the buyer says the Pinot slot is filled." },
    { f:"CHARDONNAY", fs:"No new oak", b:"ANCHOR · Taut and mineral. Reach for it when the white list needs dependable, not surprising." },
    { f:"DUSKFALL", fs:"Skin-contact Chenin", b:"CURIOSITY · The amber find. Reach for it when having what nobody else has is the whole point of the list." },
    { f:"DAYBREAK", fs:"Chilled Gamay", b:"RECRUIT · Built to pour by the glass and priced to clear a pour cost. Reach for it when volume is the test." },
    { f:"AFTERGLOW", fs:"Pinot Noir rosé", b:"TWILIGHT · Pale, dry, and seasonal. Reach for it when the room drinks outside and the calendar is working for you." },
    { f:"LONG EXPOSURE", fs:"Reserve Pinot Noir", b:"DEPTH · The flagship grape given more time. Reach for it on a cellar list, never by the glass." } ] },
  { t:"dragmatch", id:"b1_openset", obj:["O2","O3"], prompt:"Four accounts. Drag the one wine you would open with, not the wine you would eventually sell them. Every drop answers immediately, so use a miss to think.", zones:[
    { name:"NEIGHBORHOOD WINE BAR", why:"A short list that lives on what the staff recommends pour by pour. Duskfall hands them something no other rep on their bench is carrying, and it is the bottle they bring up without being asked. Open with the curiosity when curiosity is the business model." },
    { name:"STEAKHOUSE", why:"Fat, salt, and a check average that can carry a red. Syrah is savory and peppery, and it fills a gap their Cabernet section cannot. Long Exposure is the wine you want to sell here eventually, and that is a visit-three conversation, after this one has reordered." },
    { name:"PREMIUM GROCERY SET", why:"Nobody is standing in the aisle to explain a co-ferment. A shopper reaches for a grape they already trust, and $34 sits near the top of a premium grocery set without falling off it. Field Blend walks through the door later, once the buyer has velocity numbers to look at." },
    { name:"ROOFTOP SUMMER BAR", why:"Chilled Gamay pours cold, drinks fast, and needs nothing from a server in the weeds. At $16 wholesale it is the one wine in the book priced to clear a by-the-glass program without an argument, and that is the first thing this buyer asks about. Afterglow is the obvious pink answer and the one you hold back: a rosé slot expires in October, a chilled red survives the menu change." } ], items:[
    { txt:"Duskfall", z:0, hint:"This list sells on having what nobody else has." },
    { txt:"Syrah", z:1, hint:"Savory and peppery, sitting next to fat and salt." },
    { txt:"Chardonnay", z:2, hint:"There is no one in the aisle to explain anything." },
    { txt:"Daybreak", z:3, hint:"Cold, fast, and it clears the pour cost." } ],
    done:"Four accounts, four opening wines. The other four are not rejected, they are held. Field Blend for the buyer who asks what the estate actually is, Pinot Noir for the list built on Pinot, Afterglow for the season turning, Long Exposure for the day a cellar page has room. Every held wine needs a trigger, or it is not held, it is forgotten." },
  { t:"text", h:"Open with two, never eight.", p:[
    "Two wines: one that fits the room, one that stretches it. The fit wine is the one you just chose. The stretch wine is why they remember you have range, and it is where the second placement comes from.",
    "Then name what you left in the bag and why. “I brought two. The reserve Pinot stayed in the car because your list does not have a cellar page yet, and I would rather earn that page than crowd this one.” A buyer who hears you leave something out believes you when you say something is right.",
    "Two is also a promise you can keep. Two wines is a placement you can sample the staff on, watch, and check at eight weeks. Eight wines is a tasting, and a tasting is not a placement."] }
]},
{ id:"B2", title:"Run the Visit: The Curious Buyer", time:"5 min", obj:["O2","O7"], blocks:[
  { t:"text", h:"A real visit, with the hints on.", p:[
    "This one is scaffolded on purpose. The buyer is curious, the by-the-glass slot is genuinely open, and coaching fires after every choice. You are not being tested here. You are being walked through what a good visit sounds like from the inside.",
    "The job is the job: find out what the room needs before you name a wine, choose one wine, give the buyer a line she can hand her staff, and answer the pushback without conceding anything.",
    "Listen for the objection under the objection. When a buyer says she has been burned before, she is not asking about your winemaking. She is asking whether you will still be standing there in eight weeks when the wine needs help."] },
  { t:"branch", set:"curious" },
  { t:"text", h:"What to carry out of this visit.", p:[
    "Look at where the meter moved. It moved most when you asked before you pitched, and when you answered the objection with something specific instead of something soothing. It moved least when you talked about technique, because technique is what you say when you have not decided what the wine is for.",
    "Look at what the visit did not contain: seven other wines. You opened one slot with one wine, and the rest of the book is intact for the next conversation. That is not restraint for its own sake. That is what leaves you something to come back with.",
    "The scaffolding comes off later in this course: same kind of room, no hints, a buyer with less patience. Between now and then, run this visit once in your head before your next real call, out loud if you are alone in the car. The rehearsal is the part that transfers."] }
]}
  ]},

  { id:"C", name:"The Evidence", lessons:[
{ id:"C1", title:"Why It Tastes Like That", time:"4 min", obj:["O4"], blocks:[
  { t:"hero", img:"../assets/img/field_night_stars.jpg", kicker:"THE EVIDENCE · WHY IT TASTES LIKE THAT", title:"Above the fog. Under the stars." },
  { t:"text", h:"The site, in two sentences.", p:[
    "Halden Rise is a high, cool ridge on the Northern California coast. Above the marine fog by morning, under genuinely dark sky by night. Cool bright days, long cold nights, an unhurried season.",
    "That is the point. Slow ripening keeps the acidity, so the wines read long instead of heavy. The soils are deep, the vines are dry-farmed, the roots go down for their water, and the whole site is farmed as one living field.",
    "You do not open with any of this. You reach for it when a buyer asks why the wine tastes the way it does, or why it is priced where it is. One site fact, one thing she will taste, then stop talking."] },
  { t:"dragmatch", id:"c1_site_taste", obj:["O4"],
    prompt:"You are not selling numbers. Drag each site fact onto the thing the buyer will actually taste.", zones:[
    { name:"RETAINED ACIDITY + LENGTH", why:"Cold nights keep the wine's nerve. That is the freshness a buyer notices first." },
    { name:"CONCENTRATION WITHOUT IRRIGATION", why:"Roots that drink from depth, not a hose. The name, made literal, in the glass." },
    { name:"SLOW RIPENING, FRESHNESS OVER WEIGHT", why:"An unhurried season trades weight for length. Say exactly that." } ], items:[
    { txt:"Above the fog, dark cold nights", z:0, hint:"What do cold nights protect?" },
    { txt:"Deep soils, dry-farmed roots", z:1, hint:"No irrigation. Where does the water come from?" },
    { txt:"Cool bright days", z:2, hint:"Slow and steady ripens the race." } ],
    done:"Two clean links beat ten figures. One site fact, one taste benefit, and stop." },
  { t:"predictpair", id:"c1_founder", obj:["O4"],
    prompt:"Marne's old practice is on the left. A bartender gets one breath between tables. Which version of her story does he actually repeat?",
    left:{ h:"THE SKY", lines:"Long exposures. Deep focus. Nothing rushed." }, opts:[
    { o:"Long seasons. Deep roots. Nothing rushed.", ok:1, fb:"That is the one that survives a shift. Six words, a clean mirror of the work she used to do, and he can say it while he pours. The exposure became a season, the focus became roots. Staff repeat what fits in a breath, and a story that gets repeated is the only kind that sells anything." },
    { o:"She photographed the night sky for years, then found the ridge, then learned to farm it, and now the whole vineyard year runs on the biodynamic calendar.", fb:"All true, and none of it gets repeated. That is a biography, not a line. By the time he finishes it the table has ordered something else, so he will quietly stop telling it." },
    { o:"She farms in tune with the cosmos.", fb:"Too airy to say with a straight face, so he will not say it. Concrete beats mystical every time: a woman who photographed the sky now farms by it. Give staff a picture, not a mood." } ] },
  { t:"accordion", id:"c1_cellar", obj:["O4"], h:"If they ask about the cellar",
    note:{ k:"decision", h:"Winemaking is reference, not a lesson",
      b:"This was a lesson with a graded check on native yeast. No placement has ever turned on whether a rep could define a co-ferment. Buyers do ask, so the content survives here, closed by default, for the rep who needs it in the moment. Cost: nobody is made to learn it." },
    items:[
    { h:"“What does native yeast actually do?”", body:"The wine finishes with the yeasts already living on the fruit and in the cellar, so it tastes of the site rather than a lab strain." },
    { h:"“What does low intervention actually mean here?”", body:"As little added and as little stripped out as possible, so the wine reads the site. Low intervention, not no intervention. Say it in that order and a nervous buyer relaxes." },
    { h:"“What is a field-blend co-ferment?”", body:"One field, many grapes, picked and fermented together. The whole field in one wine, which is the Field Blend's entire story." } ] }
]},
{ id:"C2", title:"Why the Farming Sells", time:"4 min", obj:["O4"], blocks:[
  { t:"text", p:["Biodynamic, regenerative, dry-farmed, native yeast, low intervention. That is the practice. None of it sells anything until you turn it into a reason a buyer says yes, so do that here, one practice at a time."] },
  { t:"steps", id:"c2_farming", obj:["O4"], intro:"For each practice: predict the buyer benefit before you reveal ours.", items:[
    { prompt:"Cover crops and compost. What does a buyer get out of that?", reveal:"Living soil, so the wine reads the site, which natural lists want." },
    { prompt:"Grazing sheep. Why would a chef care?", reveal:"A living system, a real farm-to-glass story for chefs." },
    { prompt:"Dry-farming. What ends up in the glass?", reveal:"Deep roots, concentration, the name made literal." },
    { prompt:"Farming by the celestial calendar. What is the selling hook?", reveal:"The founder story made operational, a somm's favorite tableside line." },
    { prompt:"Native yeast, low intervention. Who asks for this?", reveal:"The site, not a recipe, exactly what natural-wine buyers ask for." } ] },
  { t:"decide", id:"c2_lever", obj:["O4"],
    note:{ k:"evidence", h:"Numbers do not pay. Practice does.",
      b:"Reps ask for numbers, so this item used to reward them. In a 52-study meta-analysis of wine consumers, quantified environmental-impact claims moved willingness to pay about minus 6 percent and were not significant, while vineyard-level good agricultural practices moved it plus 15.8 percent at 1 percent significance. The key is written against that.",
      src:[{t:"Radicioni, Dominici, Casini and Boncinelli, Journal of Cleaner Production 561 (2026) 148428", u:"https://doi.org/10.1016/j.jclepro.2026.148428"}] },
    stem:"A beverage director is two glasses short on her by-the-glass page. She asks why the biodynamic farming should matter to her list. Best answer?", opts:[
    { o:"“It is better for the planet.”", fb:"True, and not the sell. She is not buying ethics. She is buying something her guests want and her staff can talk about." },
    { o:"Lead with the impact numbers: water saved, carbon per acre, percentage of the estate under cover crop.", fb:"This is the tempting one, and it is the one that does not pay. Quantified environmental claims are exactly the claims that do not move what a buyer will pay. Plainly stated vineyard practice is what does. She cannot repeat a percentage to a guest, and she will not try." },
    { o:"“We farm it with sheep, compost, and cover crops, dry-farmed, native yeast to finish. It tastes like a place instead of a recipe, and that is the glass your natural-list guests already ask for.”", ok:1, fb:"Right, and right in that order: plain practice, one taste, one guest benefit. It is the version that moves what she will pay, and it is the only version her bartender can repeat on a Friday without reading a card." },
    { o:"“We are certified biodynamic, regenerative organic, and organic.”", fb:"Three true marks and not one reason. A certification is proof you offer after a practice claim lands. Open with the marks and you have handed her a resume instead of a reason to pour it." } ] },
  { t:"text", h:"The rule.", p:[
    "Practice first, in plain words. One taste or one guest benefit next. The badge last, and only if she asks you to prove it.",
    "That order is not a style preference, it is what gets paid for. A percentage is something she has to trust. Sheep in the vineyard is something she can picture, and something her staff can say out loud at ten o'clock on a Friday night."] },
  { t:"audio", file:"farming_pitch", label:"The farming pitch · about 15 seconds", script:"We farm a handful of small fields by the moon and the stars, with sheep, compost, and cover crops, and let native yeast finish the job. Nothing added to fake it, nothing stripped to fix it. Your natural list already wants this. We just do it honestly." }
]},
{ id:"C3", title:"Why She Should Believe You", time:"3 min", obj:["O4"],
  note:{ k:"decision", h:"A badge is not a lesson",
    b:"Certifications were a full lesson sorting three marks into three buyer archetypes. It taught the shape of a credential and nothing a rep does with one. It is now three minutes: what the audit covers, what it does not, and where the mark goes in a sentence. Cost: nobody drills naming all three." },
  blocks:[
  { t:"badges", img:"../assets/img/badges_sheet.jpg", caption:"Farmed and certified: biodynamic, regenerative organic, and organic." },
  { t:"text", h:"What the audit covers, and what it does not.", p:[
    "Three marks: biodynamic, regenerative organic, organic. All three audit farming. An outside body checks what goes on the ground and what goes in the tank: sprays and inputs, soil and cover crops, the grazing, the calendar the farming runs on, and what is allowed to be added in the cellar. Records, renewed on a schedule, checkable by a stranger. That is the whole scope, and it is a real one.",
    "Here is what no mark covers. Not quality. Not consistency from one vintage to the next. Not whether her guests will order it. A certification cannot tell a buyer the wine is good, and a rep who lets her think it can will get caught the first time somebody does not like the glass.",
    "So a mark is proof, and proof answers a doubt. It cannot create the interest in the first place. Land the practice claim, let her want it, then hand her the paperwork."] },
  { t:"decide", id:"c3_stakes", obj:["O4"],
    stem:"A chain buyer is building a spring set. Four wines already on her page say organic on the label. She looks at yours: “Everybody is organic now. What makes this one different?”", opts:[
    { o:"Point at the organic mark and tell her you are certified.", fb:"Organic is table stakes on this page and she just told you so. A claim four of her wines already make wins nothing, and repeating it back tells her you were not listening. Table stakes get you considered, never chosen." },
    { o:"“Fair. Organic is the floor now. What is not on your page is dry-farmed vines, sheep and compost instead of sprays, and native yeast, all on one cold ridge above the fog. That is why it tastes like somewhere. Biodynamic and regenerative are on the back label if you want the paperwork.”", ok:1, fb:"You gave her the table stake instead of arguing with it, led with the practice that is actually rare, gave her one taste reason, and put the proof last where it belongs. Practice, benefit, badge. That order survives contact with a buyer who has heard everything." },
    { o:"Lead with all three certifications, in order, before anything else.", fb:"Three marks read as a resume, and she is not hiring. Proof only lands on a doubt she has already voiced. Make the practice claim first, then let the mark close the gap it opened." } ] }
]}
  ]},

  { id:"D", name:"The Numbers", lessons:[
{ id:"D1", title:"The Numbers", time:"4 min", obj:["O5"], blocks:[
  { t:"text", h:"Adjectives do not answer a pour cost question.", p:[
    "Everything up to here was story, and story is what wins the first placement. This is the part of the conversation where the story stops and the buyer starts doing arithmetic. She has a target pour cost, a menu cycle, and one slot she can fill once. Watch for the switch: the moment she says a number, she has stopped evaluating the wine and started evaluating the placement.",
    "If you cannot answer in the same units she asked in, she will answer for you. “It is beautifully farmed” is not a reply to “what does it pour at?”. That is the sentence where you lose the slot, and you do not get another look until the menu turns.",
    "On-premise she asks it as a pour cost. In a shop the same question arrives as margin, off the same two numbers. Either way she is asking you to do division standing up, in front of her, without a calculator. It is two numbers and one division. Learn it once on the wine you will be asked about most and you can do it for the rest of the book."] },
  { t:"text", h:"The price card", p:[
    "Front-line wholesale per 750ml bottle, then suggested retail. Cheapest first, so your thumb finds the line before she finishes the question."],
    list:[
      "DAYBREAK · $16 wholesale · $24 retail · chilled Gamay, the by-the-glass workhorse and the wine you will price most",
      "AFTERGLOW · $17 wholesale · $26 retail · Pinot Noir rosé, the easiest yes of the warm months",
      "CHARDONNAY · $22 wholesale · $34 retail · the classic list anchor",
      "DUSKFALL · $24 wholesale · $36 retail · skin-contact Chenin Blanc, the somm's curiosity",
      "SYRAH · $25 wholesale · $38 retail · cool-climate and savory, for the list that has Pinot covered",
      "PINOT NOIR · $28 wholesale · $42 retail · the benchmark red",
      "FIELD BLEND · $38 wholesale · $58 retail · the flagship, co-planted and co-fermented",
      "LONG EXPOSURE · $62 wholesale · $95 retail · reserve single-block Pinot Noir, the cellar trade-up" ] },
  { t:"steps", id:"d1_pourcost", obj:["O5"],
    intro:"Daybreak is the wine you will be asked to price most, because it is the one buyers want by the glass. Work the chain one step at a time. Say your answer out loud before you reveal ours; the point is to be able to do this while someone watches.",
    items:[
      { prompt:"A 750ml bottle, poured at 5 ounces. How many glasses does she get?",
        reveal:"Five. Every pour cost starts there, and it is worth saying out loud so she knows you are working in her units and not guessing." },
      { prompt:"Daybreak costs her $16 a bottle. She pours it at $16 a glass. What does the bottle earn, and what is her pour cost?",
        reveal:"Five glasses at $16 is $80 a bottle. Her cost is $16, so 16 into 80 is 20 percent. That clears comfortably. Most buyers will take 20 percent all day." },
      { prompt:"She wants a friendlier number on the menu. At $14 a glass?",
        reveal:"Five at $14 is $70. 16 into 70 is 22.9 percent. Still inside a 25 percent target, with room left over." },
      { prompt:"She pushes to $12 a glass. Does it still work?",
        reveal:"Five at $12 is $60. 16 into 60 is 26.7 percent. That misses a 25 percent target, and it misses by enough that you cannot round it away. Say so. A placement that fails her math in month one is a slot you lose for the cycle." },
      { prompt:"Now put the rule in one line you can say without thinking.",
        reveal:"At $16 wholesale you need $14 a glass to clear a 25 percent pour cost. Know that cold for Daybreak and you can answer the most common money question in the business before she finishes asking it. Then keep doing the division anyway, because not every buyer targets 25." } ] },
  { t:"decide", id:"d1_clears", obj:["O5"],
    stem:"A beverage director tells you her by-the-glass target is a 22 percent pour cost, and she wants to put Daybreak on at $13. Does it clear?",
    opts:[
      { o:"“Close enough. Nobody counts it to the decimal.”",
        fb:"Run it before you say that. Five glasses at $13 is $65 a bottle, and 16 into 65 is 24.6 percent, well over the 22 she just told you. Close enough is a number she finds at the end of the month, on her own, without you in the room. When she finds it, the slot goes back on the market and you are not in the conversation." },
      { o:"Offer her a discount so $13 lands at 22 percent.",
        fb:"Do the arithmetic on your own offer first. For $65 a bottle to be a 22 percent cost, you would have to sell it to her at $14.30. That is not a discount, that is a new price, and it is the price forever. You also just told her the wine was never worth $16." },
      { o:"“Not at $13. That puts you at 24.6 percent. $14 is 22.9 and $15 clears your 22, so let us open at $15.”", ok:1,
        fb:"Right, and the win is that you said it out loud. You did her arithmetic in her units, you did not pretend the miss was not there, and you moved the only number that was actually free to move. Note what you did not do: you did not apply the 25 percent rule to a buyer who does not use it. $14 clears 25 and still misses her 22. Buyers remember the rep who told them a placement would not work before it did not work." },
      { o:"Move her to something cheaper so $13 works.",
        fb:"There is nothing cheaper. Daybreak is the front line of the book at $16. The lever in this conversation is the glass price, not a smaller bottle price, which is exactly why you have to be able to say the number out loud instead of hunting for a way around it." } ] },
  { t:"text", h:"Say the comparison out loud before she does.", p:[
    "When a buyer hears $58 retail on the Field Blend, she is not comparing it to another dry-farmed biodynamic single-site wine. She is comparing it to whatever she sells the most of, and that wine is almost always a great deal cheaper. Deep Fields is not competing there and was never built to.",
    "That comparison runs in her head whether or not you name it. So name it. “I know roughly what most of your volume sells for. This is not that wine and it is not trying to be. Different shelf, different guest. It is here to trade someone up, not to win the price fight.” A buyer who hears you say it first stops testing you on it, and you get the rest of the meeting back.",
    "Never argue that the number is small. Argue that the number returns. Then go back to her units. The whole book is on one card, $16 to $62 wholesale, close to four times from the cheapest bottle to the most expensive, so when someone tells you Deep Fields is expensive, ask which wine she means. Often it is a wine you were not proposing, and the answer is not a discount, it is the right bottle."],
    note:{ k:"decision", h:"The rule breaks on purpose",
      b:"The lesson teaches one line, that $16 wholesale needs $14 a glass to clear 25 percent, then hands the rep a buyer targeting 22 percent, where $14 lands at 22.9 and misses her. A rep who memorizes the rule and stops dividing quotes a confident wrong number. Cost: harder than one clean rule." } }
]}
  ]},

  { id:"E", name:"The Room", lessons:[
{ id:"E1", title:"Who Holds the Pen, and When", time:"4 min", obj:["O6"], blocks:[
  { t:"text", h:"Two rooms, two clocks.", p:[
    "On-premise buys a pour: velocity by the glass, a story staff can retell, a list that feels curated. Off-premise buys a placement: margin, a premium set that trades shoppers up, and a shelf story that sells unattended. Never give one pitch to both rooms.",
    "There is a second difference, and it costs more than the first. The two rooms run on different clocks, and neither clock is yours. A by-the-glass slot turns on a menu cycle. A shelf set turns on a reset. Pitch into the wrong week and your best call waits months for a door that is already shut.",
    "So before you open your bag, answer two questions about the room you are standing in. Who actually holds the pen, and when does the window open. Get those two wrong and the wine was never the problem."] },
  { t:"decide", id:"e1_pen", obj:["O6"],
    note:{ k:"decision", h:"Four calls, one yes",
      b:"This item reads like a trick and is not. Three of the four are the ordinary case: the person in the room can recommend and cannot authorize. Reps who learn that in the field learn it by losing six weeks and a cycle. Learning it here costs one wrong answer." },
    stem:"Four calls are on the book for Tuesday. In which one can the person standing in front of you say yes on the spot?", opts:[
    { o:"The independent restaurant, where the owner also writes the wine list", ok:1, fb:"Right, and this is the only one. The decision and the money sit in the same head, so you can ask for the by-the-glass slot in the room and get an answer before you leave. Independents are where a good call converts the same day. Ask for the slot, not for a follow-up." },
    { o:"The four-unit group, where the GM in front of you runs the best room", fb:"The GM is your advocate, not your buyer. In a small chain one beverage director usually writes all four lists at once, and a unit GM can recommend and cannot authorize. Use the call to win him, then ask him to walk you to the person who signs." },
    { o:"The grocery banner, where the store manager knows every regular in the aisle", fb:"He runs the aisle, not the set. A category manager at corporate decides what is authorized, and the shelf itself is fixed until the next reset. What the store manager can genuinely give you is a display, a local feature, and five minutes with his staff. Ask for those, and pitch the listing where it is actually decided." },
    { o:"The bottle shop on Saturday, where the clerk already loves the label", fb:"The clerk can love it all afternoon and still not buy it. Owners of small shops buy on one or two quiet mornings a week, and Saturday is not one of them. Get the buying day from the clerk, leave one bottle, and come back when the pen is behind the counter." } ] },
  { t:"dragmatch", id:"e1_channel", obj:["O6"],
    prompt:"Sort each selling point into the room where it belongs. Every drop confirms or corrects you on the spot.", zones:[
    { name:"ON-PREMISE · WHY POUR", cap:3, why:"This room buys a pour. Its language is glasses, guests, staff, list. What it fears is a slot that sits still through a whole menu cycle." },
    { name:"OFF-PREMISE · WHY STOCK", cap:3, why:"This room buys a placement. Its language is margin, movement, facings, set. What it fears is a bottle that sells only when somebody stands beside it." } ], items:[
    { txt:"By-the-glass velocity with a staff story", z:0, hint:"Glasses move where people talk." },
    { txt:"Natural-list credibility for the somm", z:0, hint:"Who curates a list?" },
    { txt:"Farm-to-glass dinners and chef collabs", z:0, hint:"Events happen where there is a kitchen." },
    { txt:"A premium set that trades shoppers up", z:1, hint:"Sets live on shelves." },
    { txt:"Shelf story that sells without a person", z:1, hint:"No staff standing by." },
    { txt:"Case-stack potential on Daybreak in season", z:1, hint:"Nobody stacks cases in a dining room." } ],
    done:"Channel-true or nothing. The somm never hears about case stacks, and the shop buyer never hears about chef dinners. Same wine, two languages, and a buyer can tell in one sentence whether you know which room you are in." },
  { t:"accordion", id:"e1_calendar", obj:["O6"], h:"The buying window, room by room", items:[
    { h:"When a by-the-glass list actually changes", body:"Most restaurants that print their own list turn it seasonally, so roughly four times a year. A busy wine bar may change glasses monthly. A chain may change once or twice a year and print it centrally. The number matters less than the habit: ask on the first call when the list next prints, and write the date in your account notes. Work backward 6 to 8 weeks from that date, because the buyer chooses well before the printer does. Miss it and your wine waits the full cycle, which is exactly how a good pitch turns into nothing." },
    { h:"When shelf resets happen", body:"An independent shop can put a bottle on the shelf the same week you sell it, so the window is open almost every week. A grocery banner is the opposite: the set changes on a schedule, commonly spring and fall, and the planogram is decided months ahead of the shelf being touched. Ask for the reset date on the first call. It tells you whether you are selling a listing today or building the case you will present at the next one." },
    { h:"What locked means, and what still moves inside it", body:"From the moment a chain's planogram goes final until the reset ships, nobody at store level can add a SKU. That is not a brush-off, it is the truth. What still moves inside the lock: displays, seasonal features, local allowances, staff sampling, and a manager who will tell corporate the wine works in his store. Spend the locked window building the proof, not asking for a decision that no one in the building is allowed to make." },
    { h:"So when do you call, and what do you put in the calendar", body:"Call the independent when you have something to sell, because the window is open. Call the chain and the banner on their calendar, not yours. And whichever room you are in, put one more date in your calendar the day the first order lands: the reorder date. Winning the slot is the first half of the job. The account is kept or lost between that yes and the first reorder, and nobody sends you a reminder for it." } ] }
]},
{ id:"E2", title:"Mixed Retrieval", time:"3 min", obj:["O1","O2","O3","O4","O5","O6","O7","O8"],
  note:{ k:"decision", h:"Shuffled, and two items run early",
    b:"These eight items are out of teaching order, so the rep must work out which skill the situation calls for before answering. Two run ahead of their teaching: objections and pull-through are still to come. Attempting before instruction improves what instruction sticks to. Cost: scores here run lower than section scores. That gap is the measurement.",
    src:[{t:"Bjork and Bjork, desirable difficulties, 2011"},{t:"Richland, Kornell and Kao, pretesting effect, 2009"}] },
  blocks:[
  { t:"text", h:"Practice, not teaching.", p:["Eight situations, one for each thing this course asks you to do, shuffled out of order on purpose. Nothing is taught here. The work is deciding which skill the room in front of you calls for, which is the part the job never labels for you.","Two of these run ahead of the course. Objections and the four weeks after the yes are still to come, and you should take a run at them anyway. Getting some of these wrong is the point. A miss you have to think your way out of is what makes the right answer available on a Tuesday in a parking lot."] },
  { t:"decide", id:"e2_q1", obj:["O5"], stem:"A gastropub owner wants Daybreak by the glass. She runs a 25 percent pour cost target and says she can put it on at $12 a glass. What do you say?", opts:[
    { o:"“Take it at $12. The volume will make up the difference.”", fb:"Run her own number. At $16 a bottle wholesale, five pours at five ounces, $12 a glass is $60 a bottle and 26.7 percent. That misses the target she set for herself, and volume does not fix a percentage. She will pull the slot in a month and blame the wine." },
    { o:"“$12 misses your own target. At $14 a glass you are at $70 a bottle and 22.9 percent, inside your 25.”", ok:1, fb:"Right. You answered a money question with money, in her numbers, and the answer was not a discount. At $16 wholesale you need $14 a glass to clear a 25 percent pour cost, and a buyer who checks your arithmetic and finds it honest stops checking." },
    { o:"“I can take a couple of dollars off the bottle to make $12 work.”", fb:"You just moved your price permanently to fix her menu price once, and it never comes back. The arithmetic already had a better answer: $14 a glass is $70 a bottle at 22.9 percent, comfortably inside her target." } ] },
  { t:"decide", id:"e2_q2", obj:["O7"], stem:"A wine director tastes the whole range, likes all of it, and says: “Leave me the sheet and let me think about it.” What is she actually telling you?", opts:[
    { o:"She needs more information before she can decide", fb:"She just tasted eight wines and liked them. More information is what you send when you have run out of a next step. The gap is not knowledge, it is a reason to act before her next list prints." },
    { o:"She has no reason to act this cycle, and no next step with a date on it", ok:1, fb:"That is the objection under the objection. Let me think about it is almost never about the wine. Answer it with the smallest yes that costs her nothing: one staff pour before service Tuesday, aimed at the spring list. A date beats a brochure." },
    { o:"It is a polite no, so spend your time elsewhere", fb:"Sometimes it is. But a buyer who tasted the whole range and asked for the sheet is not a no, she is a not-yet with nothing on the calendar. Put something small on the calendar before you leave the room." } ] },
  { t:"decide", id:"e2_q3", obj:["O2"], stem:"A hotel lobby bar has one by-the-glass slot open. Mostly business travelers, high turnover, and a bartender with about twenty seconds per order. Lead with?", opts:[
    { o:"Duskfall, the skin-contact Chenin", fb:"Duskfall is the Curiosity, and a curiosity needs somebody with time to sell it. A bartender working twenty seconds an order will pour around it every night, and by week four it looks like the wine failed." },
    { o:"Chardonnay, the Anchor", ok:1, fb:"Right room, right role. Taut, mineral, no new oak, and nobody has to explain it. In a high-turnover room the wine that needs no introduction is the one that keeps the slot, and keeping the slot is what buys you the second placement." },
    { o:"Long Exposure, to show the ceiling", fb:"Depth is the cellar trade-up, sold to a buyer who already loves the estate Pinot. Putting the reserve in a lobby-bar glass slot misreads both the room and the margin." } ] },
  { t:"decide", id:"e2_q4", obj:["O8"], stem:"You sold a Daybreak by-the-glass placement three weeks ago. The case landed, you have not been back, and the reorder is due next week. What do you owe this account before that conversation?", opts:[
    { o:"A call to the buyer asking how it has been moving", fb:"That hands the buyer your homework, and a busy buyer answers slow, I think, whether or not it is true. Now you are negotiating against a guess instead of a count." },
    { o:"A visit where you count what has moved yourself, and check the wine is on the menu at the price you agreed", ok:1, fb:"Right. You cannot ask for a reorder with nothing in your hand. Walking the floor gives you a real number to open with, and it catches the two ordinary failures, a floor that never tasted it and a wine listed at the wrong price, while there is still time in the cycle to fix them." },
    { o:"A fresh set of shelf talkers and tasting notes in the mail", fb:"Sending material feels like work and costs you nothing, which is why it is tempting. Paper does not pour. Nothing you mail tells you whether the staff has tasted the wine or whether it made the menu correctly." } ] },
  { t:"decide", id:"e2_q5", obj:["O1"], stem:"A beverage director is walking you to the door and says: “Give me the whole brand in one breath.” Which opening is the pitch?", opts:[
    { o:"Start with the eight wines and where each one prices", fb:"A list is not a pitch. She asked who this is, and a price rundown answers a question she has not asked yet. Price is the second conversation, and it goes better once she wants the wine." },
    { o:"“A handful of deep-soiled fields on a high, cool ridge above the Northern California fog, farmed by a former astrophotographer who now farms by the same sky she used to photograph. Eight grape-forward wines, nothing rushed and nothing hidden.”", ok:1, fb:"Fields, founder, farming, eight clear roles, depth. Five beats, one breath, no figures, and it ends somewhere she can ask a question. That is the whole job of the thirty seconds." },
    { o:"Open with the three certifications", fb:"Marks are proof, not a pitch. They close a credibility gap after she wants the wine. Lead with them and you sound like a resume, and she has read fifty." } ] },
  { t:"decide", id:"e2_q6", obj:["O4"], stem:"Mid-shift, the bartender who actually has to sell your wine asks what makes it different. He has about twenty seconds and a rail three deep. What do you give him?", opts:[
    { o:"“Sheep and compost instead of sprays, dry-farmed so the roots go deep. It tastes like a place instead of a recipe.”", ok:1, fb:"One practice, one taste, in a breath he can repeat while he pours. That sentence is the whole placement: a floor that owns one line outsells a table tent every night, and it is the difference between a slot that survives the cycle and one that does not." },
    { o:"The full farming rundown: biodynamic, regenerative, dry-farmed, native yeast, low intervention, and the celestial calendar", fb:"All true, and five things is zero things at a three-deep rail. He will not repeat any of it, so he will pour around your wine. Pick the one practice he can picture and stop." },
    { o:"“It is certified biodynamic, regenerative organic, and organic.”", fb:"He cannot sell a certificate to a guest on a stool. Marks reassure a buyer who has already asked for proof. A bartender needs a picture and a taste, in that order." } ] },
  { t:"decide", id:"e2_q7", obj:["O3"], stem:"First meeting at an independent restaurant. All eight wines are on the truck and you have fifteen minutes. What goes on the table?", opts:[
    { o:"All eight, so she can see the whole range", fb:"Eight bottles is a tasting, and a tasting ends with leave me the sheet. She has one or two open slots, not eight. Give her the number of decisions she can actually make today." },
    { o:"Two: Daybreak for the glass, Field Blend for the bottle list, and you name what you are holding for next visit", ok:1, fb:"Two is a decision, eight is an event. One glass wine and one bottle wine covers both halves of her list, and saying out loud what you held back gives you a reason to be in the room again before the list prints." },
    { o:"One, the flagship, and nothing else", fb:"Closer than eight, and still short. The flagship alone leaves her by-the-glass slot untouched, and the glass is where the reorder comes from. Open with the pour and the anchor bottle." } ] },
  { t:"decide", id:"e2_q8", obj:["O6"], stem:"The GM of a three-unit local group loved the Syrah and promised to “get it on the list.” Six weeks later, nothing. What went wrong?", opts:[
    { o:"The wine was wrong for that account", fb:"The wine was fine. The pen was somewhere else. In any multi-unit group the first question is who writes the list and when it prints, and it is worth asking before you pour anything." },
    { o:"He never held the pen. One beverage director writes all three lists, and nobody asked her", ok:1, fb:"Right. A GM can be your best advocate and still not be your buyer. Spend the enthusiasm rather than the six weeks: ask him to introduce you to the person who signs, and walk in carrying his endorsement." },
    { o:"You should have followed up faster", fb:"Following up faster with the person who cannot say yes is still the person who cannot say yes. Speed does not fix an org chart. Find the pen, then move quickly." } ] }
]}
  ]},

  { id:"F", name:"The Hard Room", lessons:[
{ id:"F1", title:"Objections, Diagnosed", time:"5 min", obj:["O7"],
  note:{ k:"technique", h:"Diagnosis before response",
    b:"The old version drilled five replies. A rep who has memorized five replies still picks the wrong one, because the choice happens before the words do. This version teaches the discrimination first: name what is actually being said, then answer that. The reply bank is kept where it was already good, and the drill in front of it is new." },
  blocks:[
  { t:"text", h:"The objection under the objection.", p:[
    "Almost nothing a buyer says to you is the thing she means. “I already have a Pinot” is rarely about Pinot. It is about a list with no open line on it. “It is too expensive” is rarely about your price. It is about a conversation she has to win with an owner who is not in the room.",
    "So you make two moves, in that order. First, name what you are actually being told. Then answer that, not the sentence. A reply aimed at the wrong objection sounds fine, lands nowhere, and you walk out without knowing why.",
    "Four things are usually underneath. She does not trust it will sell. She has no open slot. She cannot defend the price upward. Or she does not want another vendor to manage. Same words on top, four different answers."] },
  { t:"dragmatch", id:"f1_diagnose", obj:["O7"],
    prompt:"Drag each thing a buyer actually says onto what she is telling you underneath it. Two of these sound like different problems and are the same problem.",
    zones:[
    { name:"I DO NOT TRUST THIS WILL SELL", why:"A velocity fear, not a taste question. Answer it with proof at the smallest scale you can buy: one staff pour, one blind comparison, one count you check together." },
    { name:"I HAVE NO OPEN SLOT", why:"Arithmetic, not taste. Answer it with a different slot or a date. Never by asking her to fire a wine she has not offered to fire." },
    { name:"I CANNOT DEFEND THE PRICE UPWARD", why:"She is not arguing with you. She is rehearsing an argument she has to win with an owner. Hand her the pour cost, not an adjective." },
    { name:"I DO NOT WANT ANOTHER VENDOR", why:"Nothing in that sentence is about the wine. It is about her week. Answer it by being cheap to say yes to: one wine, one date, one follow-up." } ],
    items:[
    { txt:"“Nobody is asking for it.”", z:0, hint:"Is she talking about awareness, or about whether it moves?" },
    { txt:"“I already have a Pinot.”", z:1, hint:"Is that a verdict on your wine, or a fact about her list?" },
    { txt:"“It is too expensive for my list.”", z:2, hint:"Who else has to agree with this invoice?" },
    { txt:"“My glass program is set through the fall.”", z:1, hint:"She just told you the answer is a calendar." },
    { txt:"“Leave me a sheet and I will get back to you.”", z:3, hint:"Count how much of that sentence is about the wine." } ],
    done:"Four things underneath, and the sentence on top almost never names the one you have to answer. Diagnose in one beat, then answer what is under it." },
  { t:"decide", id:"f1_o1", obj:["O7","O5"],
    stem:"“It is too expensive for my list.” Forty seat neighborhood restaurant, glasses running $12 to $14, and she runs to a 25 percent pour cost.", opts:[
    { o:"“I can do something on the first order to get it in the door.”", fb:"Discounting answers a question she did not ask, and the price never comes back. She did not say the wine is overpriced. She said she cannot defend it. Give her the arithmetic she can repeat, not a concession she will expect on every order." },
    { o:"“Daybreak is $16 a bottle to you and it pours five glasses. At $14 a glass that is a 22.9 percent pour cost, inside your 25. Put it on for one menu cycle and I will count it with you at week two.”", ok:1, fb:"You answered a money question with money. She now has a number she can say out loud to her owner, which is the person she was really arguing with, and the ask is one cycle with a date on it. Nothing discounted, nothing apologized for." },
    { o:"“Let me walk you through what dry farming and hand picking actually cost us.”", fb:"Honest, and it answers cost when she asked about return. It also puts you on the defensive, which is the one posture a price never survives." },
    { o:"“Then let me start you on something cheaper in the book.”", fb:"A real move, and the wrong one on this sentence. You have agreed the wine is not worth it and anchored the account at the bottom of your book, which is where it will stay." } ] },
  { t:"decide", id:"f1_o2", obj:["O7"],
    stem:"“I already have a Pinot, and I like it.” Wine led bistro. The Pinot on her list sells.", opts:[
    { o:"“Taste them side by side. I think ours is the better wine.”", fb:"You might be right, and it does not matter. You are asking a buyer to call her own last decision a mistake, and the best case is a one for one swap that costs her a relationship with another rep. Go beside the Pinot, not at it." },
    { o:"“Good, keep it. I am not after that line. The gap is next to it: our Syrah is the same ridge and the same farming in a savory, peppery shape, so it broadens the page instead of competing with it. Open one at your staff tasting Tuesday and let your team tell you whether it is a different wine.”", ok:1, fb:"That is the lateral. She has no open Pinot line, so you stopped asking for one and went for a slot she does have, and you ended on a step that costs her one bottle and no risk. Never fight a wine that is selling." },
    { o:"“Then let me show you Long Exposure, so we are not competing with what you carry.”", fb:"Right instinct, wrong order. Long Exposure is a $62 bottle and a relationship wine. Nobody trades up to a producer she has never poured." } ] },
  { t:"decide", id:"f1_o3", obj:["O7"],
    stem:"“Nobody is asking for Deep Fields.” Neighborhood wine shop, owner on the floor, one part timer on weekdays.", opts:[
    { o:"“Biodynamic is one of the fastest growing things in wine right now.”", fb:"The trend may be real, and you have just told a buyer that his own floor is wrong. The rep who argues with the room loses the room. Grant the point, then give him proof at the smallest scale you can." },
    { o:"“No, and nobody walked in asking for anything on that shelf until somebody opened it. They are asking for exactly what it is: biodynamic, single site, a story your staff can tell in one breath. Open one for your team and your Saturday regulars this weekend and let them decide.”", ok:1, fb:"You turned no demand into latent demand, then made the ask as small as it goes: one bottle, one weekend, his own people deciding. That is how an unknown brand lands, and it costs him almost nothing to agree to." },
    { o:"“Fair. Let us revisit when there is more demand for it.”", fb:"A retreat is a real move, and this is the wrong sentence to use it on. A retreat works when a slot is genuinely full, because slots reopen on a calendar. Awareness does not arrive by itself, so nothing will have changed when you come back." } ] },
  { t:"decide", id:"f1_o4", obj:["O7","O6"],
    stem:"“My by-the-glass slot is committed through the season.” She is not brushing you off. It is true.", opts:[
    { o:"“Which of your current glasses is the slowest? Let us replace that one.”", fb:"A trade is legitimate, but not from you and not yet. You are asking her to fire a wine for a brand she has never poured, on your word alone. A trade works when she names the slow pour, or when you have a count to point at." },
    { o:"“Then I am not asking for it. Two things: tell me when the glass menu turns, and put a case of Daybreak on the bottle list now so you have your own count in hand when you rebuild the page. I will be back two weeks before the reset with the two wines that fit the season.”", ok:1, fb:"You took the slot off the table before she had to defend it, took a smaller yes that is real, and left with a date instead of a hope. When that menu turns you are the first call, because you are the rep who did not push." },
    { o:"“I can make the case math work if you can find the room.”", fb:"That is a discount wearing a hat, and it hands her your problem to solve. She has just told you she cannot solve it." },
    { o:"“No problem, I will circle back sometime.”", fb:"Polite, and a loss. A retreat without a date is a goodbye. The entire value of leaving cleanly is the specific day you name on the way out." } ] },
  { t:"decide", id:"f1_o5", obj:["O7"],
    stem:"“I cannot sell a brand nobody has heard of.”", opts:[
    { o:"“It drinks like the famous cool climate names your guests already buy.”", fb:"Giving her a reference point is not the worst instinct, but the moment you borrow a famous name you become the cheaper version of it, and she will price you that way. The single site is the sell, not a substitute for a bigger one." },
    { o:"“Then do not sell it as a name, sell it as a glass. Pour it blind next to the wine on your list your guests already trust, at your staff tasting. If your team cannot tell them apart, I will stop asking. Unknown today is discovered here first, and that is a line your list gets to own.”", ok:1, fb:"You moved the argument from the label to the glass, which is the only ground a small brand wins on, and you named the test, the day, and what happens if you lose it. Confident, not defensive, and no discount anywhere in it." },
    { o:"“We are certified biodynamic, regenerative and organic, so it is not a risk.”", fb:"Marks are proof, not awareness. A certification answers is this real, and she asked will this move. Lead with what her guests want, then let the mark back you up." } ] },
  { t:"recall", id:"f1_comeback", obj:["O7"], prompt:"One of those five will be said to you this week. Pick it, and write your reply in your own words: the diagnosis in your head, then the sentence out loud, ending in one concrete next step. Say it before you type it." },
  { t:"audio", file:"price_rebuttal", label:"Model rebuttal · price · about 12 seconds", script:"It is priced for what it is: hand-farmed, dry-farmed, biodynamic fields. Put Daybreak by the glass, watch guests trade up for the story, and let the margin prove it." }
]},
{ id:"F2", title:"Run the Visit: The Committed List", time:"5 min", obj:["O2","O5","O6","O7"],
  note:{ k:"decision", h:"The scaffolding comes off here",
    b:"The earlier scenario hands the rep a buyer with a gap and rewards finding it. This one does not. No open slot, no hints, and the highest scoring path ends without an order. The costed failure is a placement that dies in a slot the rep pushed for, and a course that only rewards closing teaches pushing." },
  blocks:[
  { t:"text", h:"No open slot. No easy win.", p:[
    "Forty seats, one room. The owner built the wine program and she is on the floor tonight. She holds the pen and there is nobody above her to sell. Eight wines by the glass, every one committed through the fall menu, glasses running $12 to $14, and she runs to a 25 percent pour cost and knows the number cold. You have ten minutes and there is a delivery coming in the back.",
    "Read that before you open your bag. There is no version of this visit where a case goes out today, and the fastest way to lose the next twelve months is to keep asking for one. Push her into a yes she cannot execute and the wine sits, the slot is spent, and you have burned her trust and your only line in at the same time.",
    "Three moves are live. A trade, but only if she names the slow pour herself. A lateral, meaning any slot that is not the one you came for: the bottle list, a staff pour, a wine dinner, a case for a private event. Or a timed retreat with an actual date on it. Pushing is the fourth move, and it is the only one that costs you the cycle.",
    "No hints in this one. Run it."] },
  { t:"branch", set:"committed" },
  { t:"text", h:"Why leaving well scores positive.", p:[
    "If you walked out without an order and with a date, you did the job. The slot she cannot give you today reopens on a schedule she already knows, and the only question that decides the next cycle is who she calls that week. It is the rep who did not make her say no twice.",
    "The money works the same way. At her $12 a glass, Daybreak lands at a 26.7 percent pour cost and misses her target. At $14 it is 22.9 percent and it clears. That is not a reason to discount. It is the reason her glass prices have to move before your wine can go on that list, and saying it plainly is what makes you the person she plans the next menu with.",
    "Score yourself on five things, and notice that an order is not one of them. Did you lead with one wine instead of the book. Did you find out when the menu turns. Did you take something smaller than what you came for. Did you get out without asking her to fire a wine she never offered to fire. Did you leave a date behind instead of a promise to circle back.",
    "A rep who does all five walks out with nothing on paper and the account still open. That is a good visit. The one that costs you a year is the visit that ends in a yes she regrets by Thursday."] }
]}
  ]},

  { id:"G", name:"After the Yes", lessons:[
{ id:"G1", title:"The First 30 Days", time:"6 min", obj:["O8"], blocks:[
  { t:"text", h:"The yes is the start line, not the finish.", p:[
    "You got the yes. What you do in the next four weeks decides whether you ever get a second one.",
    "Go back to the account you named in lesson one, the one that went quiet. It did not go quiet during the pitch. It went quiet somewhere in these four weeks, and almost certainly at one of the four moves below.",
    "The first placement is won on story. Every placement after it is won on evidence. The next four weeks are you building that evidence before anyone asks you for it."] },
  { t:"steps", id:"g1_pullthrough", obj:["O8"],
    intro:"Run it against a real case. A neighborhood restaurant just took Daybreak by the glass, one slot, on a menu that changes with the season. Predict the move for each week, then check it against ours.",
    items:[
      { prompt:"Day 1. The buyer just said yes. What do you do before you leave the parking lot?",
        reveal:"Confirm the purchase order in writing and put a date on the calendar for the staff pour. A yes with no delivery date and no pour date is a yes that quietly expires. You are not asking for anything new, you are converting a verbal into two lines the account can act on. Do it while you are still standing in the building and it takes four minutes. Do it next week and it takes three phone calls." },
      { prompt:"Week 1. The wine is in the building. What is the highest-value hour you can spend in this account?",
        reveal:"Get the wine into the hands of the people who actually sell it. Servers and bartenders sell what they have tasted and can describe, and nothing else. So pour it, and leave the floor with one line, not five: one biodynamic field above the fog, farmed by a former astrophotographer, and this is its chilled red. Leave the Deep Fields Almanac with them as the thing they can pick up on a slow shift, and point at the one line in it you want them saying. A floor that has tasted the wine and owns one sentence outsells a table tent every night of the week." },
      { prompt:"Week 2. You need to know whether it is moving. Do you call the buyer and ask?",
        reveal:"No. Walk in and look. On-premise: count the empties, look behind the bar, and check that the glass is actually printed on the menu, in the right section, at the price you agreed. Off-premise: find the bottle on the shelf and check the facing and the shelf talker with your own eyes. Asking hands the buyer your homework, and a busy buyer answers slow, I think, whether or not it is true. Now you are negotiating against a guess. Walk the floor instead, and the week 4 conversation is yours to open." },
      { prompt:"Week 4. You want the reorder. What do you bring, and what do you open with?",
        reveal:"Come back with the count and lead with it: eleven bottles in three weeks, at $14 a glass on a $16 bottle, a 22.9 percent pour cost, inside their 25. Then ask for the reorder and for the next thing in the same breath: a second slot, the bottle list, a staff pour on the wine that follows it. A number turns a favor into a business conversation, and business conversations repeat. This is also where you find out what to fix, because a real number tells you whether the problem is the wine, the price, or the floor." } ] },
  { t:"decide", id:"g1_notmoving", obj:["O8"],
    stem:"Week 3. The case has barely moved. The buyer has not called you, and there is no reorder coming. What do you do first?",
    opts:[
      { o:"Offer a discount on the next case to get it moving", fb:"This is the reflex, and it is the expensive one. You do not yet know what is wrong, so a discount is a guess with your margin attached to it. It also teaches this buyer that the price was soft, and every conversation from here starts lower. Diagnose before you spend anything." },
      { o:"Go in and find out two things: whether the staff was ever actually poured, and whether the wine is on the list correctly, right section, right price", ok:1, fb:"Right. Nearly every stalled placement is one of two boring failures: the floor never tasted it, or it never made it onto the menu the way you agreed. Both are invisible from your truck, both are fixable in a single visit, and neither one is fixable with money. Find the cause, then act on the cause." },
      { o:"Wait. If it were a real problem, the buyer would raise it", fb:"The buyer will not raise it. A slow wine is a small annoyance to her and a full menu cycle to you, and by the time it climbs her list of problems she has already solved it by replacing you. Silence is not information. Go and look." },
      { o:"Send over fresh tasting notes and a new set of point-of-sale material", fb:"Sending material feels like action and costs you nothing, which is exactly why it is tempting. Paper does not pour. Until you know whether the staff has tasted it and whether it is on the list correctly, you are treating a symptom you have not identified yet." } ] },
  { t:"decide", id:"g1_ask", obj:["O8"],
    stem:"Week 4. You are standing in front of the buyer and you want the reorder. Your opening line?",
    opts:[
      { o:"“How has the Daybreak been doing for you?”", fb:"You just handed the buyer the job of remembering, and memory is never kind to a new wine. A busy buyer says fine, I think, or slow, and now you are negotiating against a shrug. Never ask a question you already have the answer to." },
      { o:"“You poured eleven bottles in three weeks. At $14 a glass on a $16 bottle that is a 22.9 percent pour cost, inside your 25. I want to keep it going, and I want to talk about the second slot.”", ok:1, fb:"Right. You brought the number, so the buyer is not deciding whether she likes you, she is reading a result in her own terms: velocity and pour cost. And you named the next step in the same breath, which is what turns a reorder into a second placement instead of a repeat of the first one." },
      { o:"“Ready to reorder?”", fb:"Direct, and empty. It is a yes or no question with nothing behind it, and a busy buyer with nothing to weigh defaults to later, which at the end of a menu cycle means no. Give her something to read before you ask her to decide." },
      { o:"“I know it started slow, but give it a little more time.”", fb:"You apologized for a wine you have not measured. Even if the pace is soft, opening with an excuse tells the buyer the placement is a favor she is doing you, and favors get cut at the menu change. Bring the count first. Then talk about pace with real numbers in the room." } ] },
  { t:"decide", id:"g1_dead", obj:["O8"],
    stem:"Different account, honest outcome. You ran the sequence properly and the wine still did not move. The buyer tells you it comes off at the menu change. What now?",
    opts:[
      { o:"Own it, ask what guests reached for instead, and tell her what you will bring next cycle", ok:1, fb:"Right. You are not selling this placement any more, you are protecting the next one. Taking the miss without flinching is the most credible thing a rep can do in front of a buyer, and the answer to what guests reached for instead is free research that makes your next pick sharper. Buyers keep the reps who are straight with them." },
      { o:"Defend the wine: the farming, the reviews, the accounts where it is flying", fb:"Defending it forces the buyer to defend her decision, and now you are on opposite sides of a call she has already made. You may win the argument. You will lose the next cycle, and the cycle after that." },
      { o:"Offer a deeper discount to hold the slot one more cycle", fb:"You would be buying a slot that has already told you it does not work, at a price that will define this wine in this account forever. Let the slot go cleanly and come back with the right wine at the right price." },
      { o:"Ask her to keep it one more cycle as a personal favor", fb:"Trading on goodwill spends the exact thing you are trying to protect. A favor placement dies the same way the first one did, and it takes your credibility with it. Give the slot back and earn the next one on merit." } ] },
  { t:"text", h:"The line to close on.", p:[
    "The rep who shows up at week 4 with a number is the rep who gets the second slot. Everything above is in service of that one sentence.",
    "By week 4 you are not asking a buyer to believe in the wine. You are showing her what it did on her list, in her language, with her pour cost. That is a conversation you can have every cycle, in every account, for as long as you carry the book.",
    "Story wins the first placement. Evidence wins every one after it."] }
]}
  ]},

  { id:"H", name:"Prove It", lessons:[
{ id:"H1", title:"The Assessment", time:"5 min", obj:["O1","O2","O3","O4","O5","O6","O7","O8"], blocks:[
  { t:"text", h:"What a pass here means, and what it does not.", p:[
    "Every item on this assessment is an account situation. You will choose the two wines you open with and name what you hold for the next visit, say the farming in plain words before any badge, quote a glass price that clears a stated pour cost, name who holds the pen and when her window opens, hear what sits under an objection, and say what you do in week four when the placement has not moved. Nothing on it asks you to recite the brand back at us.",
    "A pass says one thing: with the information a buyer actually gives you, you can make the right call. It does not say the account is still pouring you in March. That gets settled on the reorder, not on this screen. Retake it as often as you want. A second run is the drill, not a failure."] },
  { t:"assess",
    note:{ k:"notthis", h:"Still not a certification",
      b:"A scored exam measures decisions made in a chair, one step short of decisions made in a doorway. Every item is a situation rather than a fact, because recognizing brand knowledge predicts nothing about whether a placement survives its first menu cycle. What a pass still cannot show is the reorder.",
      m:"Per-item correctness, tagged to the objective the item serves." } }
]},
{ id:"H2", title:"Your Pitch, and Your Commitment", time:"4 min", obj:["O1"],
  note:{ k:"decision", h:"Why the pitch comes last",
    b:"The old build handed over the 30-second pitch in lesson one. A script that arrives free gets skimmed, and it removes the problem before the rep has felt it. It now arrives last, beside the rep's own lesson-one line. The rep reads that comparison; the system does not score it. Cost: some will skip ahead.",
    src:[{t:"Bjork and Bjork, desirable difficulties, 2011"}] },
  blocks:[
  { t:"text", h:"You already wrote a version of this.", p:[
    "In lesson one, before any of this, you wrote one line to get an account to try a wine like this. That line is still saved on this device. It comes back further down this screen, next to what you commit to today.",
    "Since then you have worked out which wine the room in front of you actually wants, why you open with two and hold the rest for the next visit, how to say the farming in plain words before any badge, what a glass has to sell for to clear a pour cost, who holds the pen and when her window opens, what sits under an objection, and what the four weeks after the yes require of you. The pitch comes last on purpose. A pitch is worth exactly what stands behind it, and now something does.",
    "Marne's version is below. Treat it as the model, not the answer key. It carries five points in about thirty seconds, and yours has to carry the same five in your own mouth. A pitch that sounds like the founder instead of like you dies in the first ten seconds of a real visit."] },
  { t:"audio", file:"marne_pitch", label:"The model pitch · in Marne's voice · about 30 seconds", script: PITCH },
  { t:"flip", id:"h2_spine", obj:["O1"], h:"The five points, every time", sub:"Turn each card. If your line carries all five, it is a pitch. If it carries three, it is a description.", small:true, cards:[
    { f:"01 · THE FIELDS", b:"A few small deep-soiled fields on one high ridge above the fog, each one farmed and read on its own." },
    { f:"02 · THE FOUNDER", b:"A former astrophotographer who now farms by the same sky she used to photograph. The story does the work for you." },
    { f:"03 · THE FARMING", b:"Biodynamic, regenerative, dry-farmed, native yeast. The farming is the product, not a badge, and buyers ask for it by name." },
    { f:"04 · EIGHT ROLES", b:"Eight wines, eight jobs. You bring the two that fit the room, never the whole book." },
    { f:"05 · THE DEPTH", b:"Patience, place, and restraint, made literal from soil to glass. Look deeper." } ] },
  { t:"recall", id:"h2_final_pitch", obj:["O1"],
    prompt:"Now write yours. One line, in your own words, the way you would actually say it walking into an account on a Tuesday morning. It will sit beside the line you wrote in lesson one, a few inches down this screen. Read them back to back before you go." },
  { t:"commit" }
]}
  ]}

  ]
};

// ---- Branching scenario data ----
const BRANCH = {
  sets: {
    curious: {
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
    },
    committed: {
      intro: "No open slot, and no easy win. Pick the account. The best move here may be the one that gets you invited back, not the one that gets a yes today.",
      paths: [
        { id:"locked", name:"THE LOCKED PROGRAM", desc:"A well-run restaurant whose by-the-glass program is set for the season. The beverage director likes you and has nothing open.", img:"../assets/img/pairing_flagship.jpg",
          nodes: {
            start: { text:"“I will save you the pitch. My glass pours are locked until the fall menu. I am not moving anything before then.”", opts:[
              { o:"Ask what is on the program now, and which pour she is least happy with.", d:+15, next:"mid", fb:"Right. You cannot win a slot you have not measured. She names a white that sells fine but that the floor finds boring, and now you know the actual opening.", },
              { o:"Push: explain why Daybreak deserves a slot now.", d:-10, next:"mid", fb:"She has heard this from four people this month. Pushing a locked program tells her you were not listening, and it costs you the only thing you had, which was her attention." },
              { o:"Offer a discount to get in before the reset.", d:-20, next:"mid", fb:"Now the wine is a price, not a pour. You have also taught her to wait for a deal every time you come back, and you still did not get the slot." },
              { o:"Ask for the bottle list instead of the glass program.", d:+8, next:"mid", fb:"Reasonable, and a real lateral. It is a smaller ask on a list that moves less, so it is a fallback rather than your opener, but you kept the visit alive." } ] },
            mid: { text:"“The Chenin is fine. It sells. Honestly the staff just does not have anything to say about it.”", opts:[
              { o:"Offer a staff pour, and leave the floor one line they can say.", d:+18, next:"late", fb:"That is the whole game. You did not ask for the slot, you offered to fix the thing she just told you was broken. Staff who can say one line outsell a shelf talker." },
              { o:"Point out that your Duskfall is a better wine.", d:-12, next:"late", fb:"You argued quality at a buyer who told you her problem was narrative. Being right about the wine does not move a program that is already selling." },
              { o:"Ask what her fall reset date is and what she decides on.", d:+12, next:"late", fb:"Good. Now the next visit has a date and a standard, which is worth more than a maybe." } ] },
            late: { text:"“Look, I appreciate you. But I am not making a change today.”", opts:[
              { o:"Book the staff pour for the week before her reset, and leave.", d:+20, next:"close", fb:"This is the answer. You leave with a date, a job to do, and her trust intact. The slot turns on a cycle, and you are now the person standing there when it turns." },
              { o:"Ask her to reconsider one more time.", d:-15, next:"close", fb:"She already said no twice. The third ask converts a warm buyer into a call she starts avoiding, and you spent a real relationship to hear the same answer." },
              { o:"Leave the sell sheet and say you will check back sometime.", d:-4, next:"close", fb:"Polite and forgettable. Sometime is not a date, so nothing about her week changes and nothing about yours does either." } ] }
          } },
        { id:"fullset", name:"THE FULL SHELF", desc:"A premium grocery banner. The wine set is planogrammed and locked until the spring reset, and the buyer does not own the schematic.", img:"../assets/img/pairing_understory.jpg",
          nodes: {
            start: { text:"“I like it. But I do not own the set. Corporate does, and it is locked until spring.”", opts:[
              { o:"Ask who does own the schematic, and what they decide on.", d:+15, next:"mid", fb:"Correct. You just found out the person in front of you cannot say yes, which means your real job today is intelligence, not closing." },
              { o:"Ask him to make an exception.", d:-12, next:"mid", fb:"You asked a man to break a rule he did not write. Even if he wanted to, you have made the visit about his authority instead of your wine." },
              { o:"Pitch harder on the farming story.", d:-8, next:"mid", fb:"A better story does not open a locked planogram. You spent your best material on someone who cannot buy it." } ] },
            mid: { text:"“Category manager decides. She looks at velocity in comparable stores, and she hates gaps.”", opts:[
              { o:"Ask what comparable stores she trusts, and offer to build the case there first.", d:+18, next:"late", fb:"That is the play. You are not asking for the shelf, you are building the evidence the person who owns the shelf already told you she uses." },
              { o:"Offer a display outside the set for the holiday.", d:+10, next:"late", fb:"A real lateral. Off-shelf feature does not need the planogram, and it generates exactly the velocity the category manager reads." },
              { o:"Send the category manager a deck.", d:-6, next:"late", fb:"Cold paper to someone who has never met you, from a brand with no velocity in her stores. It is not damaging, it is just not a plan." } ] },
            late: { text:"“So realistically, spring. Anything before that is a maybe.”", opts:[
              { o:"Agree, set the two independent accounts to build velocity, and diary the reset.", d:+20, next:"close", fb:"You took the honest answer and turned it into work. When spring comes you will arrive with numbers from stores she trusts, which is the only argument that opens a locked set." },
              { o:"Keep working him for an early exception.", d:-15, next:"close", fb:"He has told you twice that it is not his decision. Continuing to ask is asking him to fail, and it is the fastest way to stop being welcome." },
              { o:"Move on to another account and try again next year.", d:-6, next:"close", fb:"You gave up a warm buyer with a known date. Spring is not next year, and nobody else is going to build that case for you." } ] }
          } }
      ],
      closes: [
        { min:80, h:"INVITED BACK, WITH A DATE", text:"You did not get a placement today, and that was never available. You got the thing that is worth more: the actual decision criteria, a specific date, and a job to do before it. This is a win. The slot turns on a cycle, and you will be standing there when it turns." },
        { min:55, h:"STILL WELCOME", text:"You kept the relationship and learned something real, but you left without a date. Vague good will decays. Next time, leave with something on both calendars." },
        { min:0, h:"YOU SPENT THE RELATIONSHIP", text:"You pushed a buyer who had already told you the answer, or you led with price. Either way you did not open the slot and you made the next visit harder. In a committed room, the discipline is knowing when to stop." }
      ],
      debrief: "There was no open slot in either account, and no choice available today would have produced one. That is the lesson. A committed room rewards three moves: a trade backed by what the buyer told you, a lateral into a slot that is actually open, and a timed retreat tied to a real date. Pushing and discounting both score negative here, because both spend trust you will need at the reset."
    }
  }
};

// ---- Assessment data (12 graded items, pass at 80%) ----
const ASSESS = {
  /* A bank, drawn fresh each attempt, not a fixed form. 26 items, 12 drawn,
     options shuffled. Passing needs the cut score AND every must-pass item. */
  draw: 12,
  cut: 10,
  passNote: "Twelve items, drawn from a larger bank and shuffled, so no two attempts are the same. Passing is 10 of 12 with every must-pass item correct. These are account situations, not trivia. Draw a new set as often as you like.",
  bank: [
  { id:"q_door_thirty", kind:"mc", obj:"O1", stem:"A buyer walks you to the stockroom door and says, “Give me the short version.” No bottles in your hand, about thirty seconds before he is back on the floor. What do you say?", opts:[
      { o:"“Certified biodynamic, regenerative organic, and organic. Three audited marks, which is rare at this price.”", fb:"You opened with the paperwork. Marks are proof for a buyer who has already decided to be interested, and this one has not. Give him the place and the person first, and let the marks close later." },
      { o:"“A handful of small fields on a cold ridge above the fog. The founder was an astrophotographer and now farms by the same sky: biodynamic, dry-farmed, nothing rushed. Eight wines, each with one job. If you try one, make it the Field Blend.”", ok:1, fb:"Place, person, practice, and one wine with a job. That is the whole spine inside thirty seconds, and it ends somewhere he can actually say yes." },
      { o:"Walk him through all eight wines in lineup order so nothing gets missed.", fb:"Eight names in thirty seconds is a list, not a pitch. He will remember none of them, and you spent your only window without asking for anything." },
      { o:"Open with the price band so he knows straight away that it fits his list.", fb:"Lead with price and you turn a story brand into a number he can shop. Price answers a question he has not asked yet, and it is the one question you cannot win on." } ] },

  { id:"q_pitch_overrun", kind:"mc", obj:"O1", stem:"You have run your pitch three times this week and it keeps landing near ninety seconds. Buyers start checking their phones around the one minute mark. Which cut gets you back to thirty without gutting it?", opts:[
      { o:"Cut the co-ferment and cellar detail and the wine-by-wine walk. Keep the ridge, Marne, the farming in plain words, and one wine named with its job.", ok:1, fb:"You cut the material that answers questions nobody has asked yet. Place, person, practice, and one wine is the spine. Winemaking and the full lineup are visit-two depth." },
      { o:"Cut the founder story. It is charming, but charm is not commercial.", fb:"The founder is the line buyers repeat to their staff after you leave. Astrophotographer turned farmer is the cheapest memory you will ever buy. Cut the cellar detail instead." },
      { o:"Cut the farming. Every producer claims it, so it costs time and wins nothing.", fb:"Farming is the reason a natural list or a chef takes your call at all. Said in plain words it is a lever, not filler. What actually costs you time is the winemaking detail." },
      { o:"Keep everything and just talk faster.", fb:"Speed does not fix a pitch that is carrying too much. His problem is not your words per minute, it is that he cannot tell what matters." } ] },

  { id:"q_ridealong_thirty", kind:"multi", obj:"O1", stem:"Your manager rides along Thursday and wants a clean thirty seconds. Which of these earn a place inside the thirty, rather than waiting for visit two? (Choose all that apply.)", fb:"The thirty seconds carries place, person, practice in plain words, and one wine with a job. Maceration times, the wholesale list, and the three certification marks are all real, and all three are answers to questions a buyer has not asked yet. Hold them for the visit where he is asking.", opts:[
      { o:"One cold ridge above the fog, farmed as a handful of small fields", ok:1 },
      { o:"Marne Okafor, astrophotographer turned farmer, farming by the same sky", ok:1 },
      { o:"Biodynamic and dry-farmed, said in plain words, with what it does to the wine", ok:1 },
      { o:"One wine named with its job, so the pitch ends somewhere he can say yes", ok:1 },
      { o:"How long Duskfall sits on its skins and in what vessel" },
      { o:"The full wholesale list, top to bottom" } ] },

  { id:"q_pinot_covered", kind:"mc", obj:"O2", stem:"A steakhouse wine director has three Russian River Pinots on the bottle list and tells you flatly, “I do not need another Pinot.” Which wine do you put in front of him?", opts:[
      { o:"Long Exposure, because a reserve single-block Pinot is a different tier from anything he is listing.", fb:"He said Pinot and you answered with more Pinot at $62 a bottle. He was describing the shape of the gap, not the price of it. Long Exposure is your trade-up once he is already pouring you." },
      { o:"Syrah, the cool-climate one: same ridge, same farming, savory and peppery, in a shape his list does not have.", ok:1, fb:"That is Broaden doing its job. You answered the gap he named, and you kept the site and the farming story intact while changing the shape of the wine." },
      { o:"Pinot Noir anyway, and make the case that yours shows the site better than the three he has.", fb:"Arguing that your Pinot beats his three turns the visit into a taste-off you did not need to have. He was telling you where the room is, and it is not in Pinot." },
      { o:"Field Blend, because the flagship is the strongest bottle you carry.", fb:"The flagship states the estate, which is a different job from filling a gap on a red list. Strongest bottle and right bottle are not the same thing." } ] },

  { id:"q_club_shipment", kind:"mc", obj:"O2", stem:"A retailer with a 400-member wine club is choosing one bottle for a shipment. His band is $40 to $60 on the shelf, and he wants the wine members will call the shop about. Which do you put up?", opts:[
      { o:"Field Blend at $58 on the shelf: one co-planted field, everything picked and fermented together, the estate in a single bottle.", ok:1, fb:"Inside his band with room, and it is the one bottle that explains the whole estate. Club shipments live on the story the newsletter can tell, and this is the thesis." },
      { o:"Long Exposure, the reserve, because a club shipment should reach up.", fb:"Long Exposure is $95 on the shelf, well outside the band he just gave you. Reaching past a stated price band reads as not listening, and now he has to say no to you." },
      { o:"Pinot Noir at $42, because Pinot is the safest club pick.", fb:"In his band, and a fine wine. But he asked for the bottle members will call about, and the benchmark red is a reliable pour, not a phone call." },
      { o:"Chardonnay at $34, because whites move faster in a club.", fb:"Under his band, and the Anchor's whole virtue is that it never raises its voice. That is exactly wrong for a shipment meant to start conversations." } ] },

  { id:"q_lobby_allday", kind:"mc", obj:"O2", stem:"A hotel lobby bar is rewriting an all-day menu. The buyer wants one red that works chilled at four in the afternoon and still holds up at a table at nine. Which do you lead with?", opts:[
      { o:"Daybreak, the chilled Gamay: built to pour cold by the glass and still a real wine at the table.", ok:1, fb:"The Recruit doing exactly its job. Made to be served cold, fresh rather than heavy, and it comes with a line the floor can say: the first wine off the fields each year." },
      { o:"Pinot Noir, because a serious red covers both times of day.", fb:"The benchmark red is your credibility wine on a wine-led list. Chilled at four in a lobby is not that room, and it is a $28 bottle doing a $16 job." },
      { o:"Afterglow, since a rosé is the obvious chilled answer.", fb:"He asked for a red. Afterglow may well be his second pour, and it is the easiest yes of the warm months, but answer the ask in front of you first." },
      { o:"Syrah, because savory and peppery reads well against bar food.", fb:"Syrah broadens a list that already has Pinot covered. This buyer asked for one wine that flexes across a day, not for range." } ] },

  { id:"q_bistro_two", kind:"mc", obj:"O3", stem:"A 40-seat neighborhood bistro: six wines by the glass, a one-page bottle list. You have the full bag and one visit. What do you open?", opts:[
      { o:"All eight, so he can see the range and choose for himself.", fb:"Eight open bottles is a tasting, not a sales call. He will pick whatever he liked most that afternoon, and you have burned every reason to come back." },
      { o:"Two: Daybreak for the glass program and Chardonnay to anchor the whites. Name Field Blend and Long Exposure as the visit-two conversation.", ok:1, fb:"Two wines aimed at the two things he actually sells, and the rest named but held. You made today's decision easy and built a reason to be back." },
      { o:"Field Blend and Long Exposure, to set the ceiling before you talk about anything else.", fb:"The ceiling is not the opening. A one-page list at a 40-seat bistro is not buying a $38 flagship and a $62 reserve on a first call, and you just made your whole book look unaffordable." },
      { o:"Hand him the sell sheet and ask which two he would like to try.", fb:"You handed the buyer your job. He does not know the roles yet, so he picks by label or by price, and either way the choice is not one you can build on." } ] },

  { id:"q_naturalbar_two", kind:"mc", obj:"O3", stem:"A natural-wine bar with four glass pours and a short bottle list. The somm is curious and has ten minutes. Which two do you open, and what do you deliberately leave in the bag?", opts:[
      { o:"Duskfall and Daybreak, and hold Field Blend for the visit where she is already pouring you.", ok:1, fb:"The curiosity and the fresh red are the two pours this list actually buys, and holding the flagship gives visit two a reason to exist. Two, then one." },
      { o:"Duskfall and Field Blend, because the flagship explains the whole estate.", fb:"Duskfall is right. Adding the flagship asks her to make a bottle-list decision while she is choosing a glass pour, and it spends the wine you wanted as your reason to return." },
      { o:"Duskfall, Daybreak, Chardonnay and Afterglow, so she can build a full glass program in one go.", fb:"Four wines for four slots sounds efficient and reads as a takeover. She has suppliers in those slots already, and asking for the whole program on a first call is the fastest way to get none of it." },
      { o:"Duskfall only, and keep the visit tight.", fb:"Not wrong, just thin. One wine leaves nothing to compare against and nothing to move to if she hesitates. Two gives her a choice that is still your choice." } ] },

  { id:"q_bagpack_first", kind:"multi", obj:"O3", stem:"You are packing the bag on Tuesday night for a first call at a 30-seat wine bar with four glass pours. Which of these choices set up a second visit? (Choose all that apply.)", fb:"A first call is won by leaving with a decision and a reason to return. Two wines aimed at the slots that exist, an explicit hold on the reserve, a question about which slot turns first, and one sample left behind all do that. Opening the whole bag and anchoring on the reserve both spend everything today and leave you nothing to come back for.", opts:[
      { o:"Two wines chosen against his four glass slots, not against your favorites", ok:1 },
      { o:"Name Long Exposure out loud as the next conversation, and leave it in the bag", ok:1 },
      { o:"Ask which of his four pours turns first, so you know what to bring back", ok:1 },
      { o:"Leave one sample of the wine you pitched", ok:1 },
      { o:"Open all eight so nothing in the book goes unseen" },
      { o:"Lead with Long Exposure so he judges the book by its ceiling" } ] },

  { id:"q_sustainable_everyone", kind:"mc", obj:"O4", must:true, stem:"A beverage director cuts in mid-pitch: “Everyone who walks in here says they are sustainable. Why would I care about yours?” What do you lead with?", opts:[
      { o:"“We are certified biodynamic, regenerative organic, and organic. Three marks, all audited annually.”", fb:"You answered a why with a resume. Marks are what she reaches for once she wants the wine, and she does not want it yet. A certification closes a credibility gap; it cannot open one." },
      { o:"“We do not irrigate, and sheep graze the rows instead of sprays. The vines drink from deep soil, so the wine comes in fresh and long instead of heavy, and your floor has something true to say about it.”", ok:1, fb:"Practice in plain words, then one thing she can taste and one thing her staff can say. That is what actually separates you from the four producers who used the word sustainable at her this week." },
      { o:"Give her the environmental figures: water saved by dry-farming, and the carbon numbers off the sustainability sheet.", fb:"Quantified impact claims are the one thing that reliably does not move a wine buyer. She is asking what changes on her list, and a figure does not answer that. Say what you do, and what it tastes like." },
      { o:"“It is better for the planet, and honestly that should matter to all of us.”", fb:"She is not buying ethics with her by-the-glass slots. Even when she agrees with you, she still has to justify the slot on velocity and story, so hand her those instead." } ] },

  { id:"q_chef_farmdinner", kind:"mc", obj:"O4", stem:"A chef who runs a monthly farm dinner already lists three biodynamic bottles. He asks what makes your farming different from theirs. Your move?", opts:[
      { o:"“Sheep in the rows, compost and cover crops, no irrigation, and native yeast finishes it. It is one ridge you can stand on. Bring your cooks up for a Field Session and you will have a course to talk about.”", ok:1, fb:"Concrete practice, one walkable site, and an invitation that turns farming into something he can put on a menu. He does not need your farming to be better than theirs, he needs it to be usable." },
      { o:"Explain that your biodynamic certification is stricter than the standard the other three hold.", fb:"You started an argument about paperwork with a chef who cares about food. Even if you win it, nothing about his dinner has changed." },
      { o:"Walk him through the celestial calendar and which days the crew prunes and picks.", fb:"A great tableside line and a poor opening one. Lead with what he can put on a plate, and let the calendar be the detail he repeats later." },
      { o:"Ask which of the three he pours most, and offer to beat that price.", fb:"You turned a farming question into a price fight, in the one room where farming is the currency. He asked what is different, and the answer cannot be cheaper." } ] },

  { id:"q_scorecard_buyer", kind:"mc", obj:"O4", stem:"A regional grocery buyer has a corporate sustainability scorecard to fill in and asks you for your environmental credentials. You have two minutes before his next appointment. What do you say first?", opts:[
      { o:"Read out the three certifications in order, since that is literally what the scorecard asks for.", fb:"It fills his boxes and teaches him nothing about why the wine sells. A buyer who has only ever heard your paperwork has no argument to make when the set gets cut." },
      { o:"“Dry-farmed, sheep instead of sprays, native yeast. It makes a fresher wine and it gives the shelf a story. And yes, it is certified biodynamic, regenerative organic and organic, so I will send the marks over for your form.”", ok:1, fb:"Practice first so he knows what he is stocking, one benefit so he can argue for it, then the marks so his form gets filled. He leaves with a sell, not just a checkbox." },
      { o:"Send the sustainability one-pager and let the figures do the work.", fb:"The one-pager gets him through the form and out of the conversation. You want him able to say why this bottle earns a facing, and no figure on that sheet does that job." },
      { o:"Tell him the certifications are printed on the back label and he can read them from the bottle.", fb:"True and unhelpful. He asked a question that bought you two minutes of his attention, and you handed the two minutes back." } ] },

  { id:"q_fifteen_seconds", kind:"multi", obj:"O4", stem:"A buyer asks about your farming and you can see her phone lighting up on the bar. You have about fifteen seconds. Which of these belong in it? (Choose all that apply.)", fb:"Fifteen seconds of farming has to be practice she can picture, plus one thing she can taste or sell. No irrigation, sheep in the rows, native yeast, and the freshness that comes out of all of it qualify. The certification list and the impact figures are real and they are proof, so they belong in the answer she asks for next, not the one she asked for now.", opts:[
      { o:"“We do not irrigate. The roots go down for their water.”", ok:1 },
      { o:"“Sheep graze the rows instead of sprays.”", ok:1 },
      { o:"“Native yeast finishes it, so it tastes like the site and not a recipe.”", ok:1 },
      { o:"“That is why it comes in fresh and long instead of heavy.”", ok:1 },
      { o:"“We hold biodynamic, regenerative organic and organic certification.”" },
      { o:"“Our vineyard sequesters more carbon per acre than a conventional one.”" } ] },

  { id:"q_daybreak_pourcost", kind:"mc", obj:"O5", must:true, stem:"A wine bar owner runs a 25 percent pour-cost ceiling. She looks at Daybreak at $16 a bottle to her and says, “That is more than the Gamay I pour now.” What comes out of your mouth first?", opts:[
      { o:"Offer $2 a bottle off the first order to close the gap.", fb:"You answered a math question with a discount, so the wine is now worth $14 and it will never be worth $16 again. You also taught her to wait for a deal every time you walk in." },
      { o:"“At $16 you get five 5oz pours. Price it at $14 a glass and that is $70 a bottle, a 22.9 percent pour cost, inside your ceiling. At $16 a glass it is 20 percent.”", ok:1, fb:"A money question answered with money, in her units, on the spot. She can see the slot works before she has to trust a word you said about the farming." },
      { o:"Move her to something cheaper in the book so the number stops being the conversation.", fb:"There is nothing cheaper in the book, and the instinct is the real problem. She did not say she could not afford it. She said it costs more, which is an invitation to show her what it returns." },
      { o:"Explain that dry-farming and biodynamic certification cost more to produce.", fb:"That is your cost, not her return. Production economics answer a question she did not ask, and out loud it sounds like an apology for the price." } ] },

  { id:"q_shop_thirtythree", kind:"mc", obj:"O5", stem:"A fine-wine shop owner is deciding what goes on the premium shelf. “I need at least 33 points on anything up there.” What do you give him?", opts:[
      { o:"“Chardonnay is $22 to you and $34 on the shelf, so $12 a bottle, just over 35 percent. Field Blend is $38 and $58, so $20 a bottle, about 34 percent. Both clear you.”", ok:1, fb:"You did his arithmetic before he had to, on the two wines you actually want up there. A margin question gets answered with the margin." },
      { o:"Tell him the wines are priced to hold margin and that nobody discounts the brand.", fb:"True, and not an answer. He asked for a number and got a policy, which means he still has to open a spreadsheet before he can say yes to you." },
      { o:"Quote him the shelf prices and let him work the margin out from the invoice.", fb:"Every second he spends doing your math is a second he could have spent on the rep who already did it. Bring the number into the room." },
      { o:"Offer a deeper case price so the margin comes out comfortably above 33.", fb:"The margin already clears. Discounting to beat a bar you have cleared gives money away for nothing and resets what he thinks the wine costs." } ] },

  { id:"q_house_pour_twelve", kind:"mc", obj:"O5", stem:"A restaurant pours its house red at $12 a glass and asks whether Daybreak can slot in at that price. Their target is a 25 percent pour cost. What do you tell them?", opts:[
      { o:"“At $12 a glass Daybreak runs 26.7 percent, just over your line. At $14 it is 22.9 percent. Here is both, and here is what the story is worth at $14.”", ok:1, fb:"The honest number, the number that works, and a reason the guest pays it. Buyers trust the rep who tells them when their own math does not work." },
      { o:"Say yes, and make the numbers work later with a depletion allowance.", fb:"You bought a placement with money and hid the fact that the slot does not work at $12. When the allowance ends the wine looks expensive, and off it comes." },
      { o:"Tell them Daybreak is not a house pour, and move on to the bottle list.", fb:"A fair instinct, and a fast way to walk away from the highest-volume slot in the restaurant. The slot works at $14, so make the case for $14 before you leave it." },
      { o:"Point out that Daybreak is already the least expensive wine in the book, so there is nothing else to show them.", fb:"True, and it ends the conversation on your constraint instead of their return. The question was whether the slot works, and at $14 a glass it does." } ] },

  { id:"q_eighteen_glass", kind:"multi", obj:"O5", stem:"A beverage director will price her new by-the-glass slot at $18 and will not go over a 25 percent pour cost. She asks which of your wines can live there. Which do you name? (Choose all that apply.)", fb:"At $18 a glass a bottle returns $90 across five 5oz pours, so anything at or under about $22 to her clears 25 percent. Daybreak at $16 runs 17.8 percent, Afterglow at $17 runs 18.9 percent, Chardonnay at $22 runs 24.4 percent. Duskfall at $24 is 26.7 percent, Syrah at $25 is 27.8 percent, Pinot Noir at $28 is 31.1 percent. Naming any of those last three at $18 tells her you did not check.", opts:[
      { o:"Daybreak, $16 to her", ok:1 },
      { o:"Afterglow, $17 to her", ok:1 },
      { o:"Chardonnay, $22 to her", ok:1 },
      { o:"Duskfall, $24 to her" },
      { o:"Syrah, $25 to her" },
      { o:"Pinot Noir, $28 to her" } ] },

  { id:"q_locked_program", kind:"mc", obj:"O6", must:true, stem:"A beverage director who likes you opens with: “I will save you the pitch. My glass pours are locked until the fall menu and I am not moving anything before then.” What do you do with the rest of the visit?", opts:[
      { o:"Make the case for Daybreak anyway. A good enough wine can jump a locked list.", fb:"She has heard that from four people this month, and every one of them told her they were not listening. You spend the only thing you had, which was her attention, and the program still does not open." },
      { o:"Ask which pour on the program she is least happy with, offer a staff pour, and book it for the week before her reset.", ok:1, fb:"You cannot win a slot you have not measured. You leave with the real gap, a job to do, and a date, which is the whole prize in a committed room." },
      { o:"Offer a price break to get in before the reset.", fb:"Now the wine is a number, and you have taught her that waiting produces a better one. She still has no open slot, and your next visit starts lower than this one did." },
      { o:"Leave the sell sheet, say you will check back sometime, and save the time.", fb:"Polite and forgettable. Sometime is not a date, so nothing on her calendar changed and nothing on yours did either. The slot turns on a cycle, and you want to be standing there when it turns." } ] },

  { id:"q_planogram_owner", kind:"mc", obj:"O6", stem:"A grocery buyer tastes the range, likes it, and then says: “I do not own the set. Corporate does, and it is locked until spring.” What is the rest of this visit for?", opts:[
      { o:"Find out who owns the schematic and what she decides on, then start building the case where she is already looking.", ok:1, fb:"The person in front of you cannot say yes, so today's job is intelligence, not closing. Decision maker, decision criteria, decision date, and you have something to work for six months." },
      { o:"Ask him to make an exception for one facing.", fb:"You asked a man to break a rule he did not write. Even if he wanted to, the visit is now about his authority instead of your wine, and that is how he will remember it." },
      { o:"Pitch harder on the farming, since a strong enough story can move corporate.", fb:"A better story does not open a locked planogram. You spent your best material on someone who cannot buy it, and nobody upstream will ever hear it." },
      { o:"Get the category manager's email and send her the deck this afternoon.", fb:"Cold paper to someone who has never met you, for a brand with no velocity in her stores. It is not damaging, it is just not a plan. Find out what she reads first." } ] },

  { id:"q_shop_language", kind:"multi", obj:"O6", stem:"You are pitching the same brand to a somm on Tuesday and a shop owner on Wednesday. Which lines belong in the shop owner's version? (Choose all that apply.)", fb:"Off-premise buys a placement: a label that sells with nobody standing there, a margin that holds, a set that gives regulars somewhere to trade up to, and seasonal volume. On-premise buys a pour: a line the floor can say and an event the chef can cook for. Say shelf talker to a somm, or farm dinner to a shop owner, and you have told each of them you do not know their business.", opts:[
      { o:"A shelf story that works with nobody standing there", ok:1 },
      { o:"Chardonnay at $22 to him and $34 on the shelf, $12 a bottle", ok:1 },
      { o:"A premium set that gives his regulars somewhere to trade up to", ok:1 },
      { o:"Daybreak case stacked while the weather is warm", ok:1 },
      { o:"A farm-to-glass dinner built with the chef" },
      { o:"One line the floor staff can say tableside" } ] },

  { id:"q_take_something_off", kind:"mc", obj:"O7", stem:"A beverage director tastes Duskfall twice, then says: “I love it. But I would have to take something off to put it on.” What is she actually telling you?", opts:[
      { o:"That the cost of yes is a conversation with another supplier, so she needs you to make the swap easy. Ask which pour she is least happy with and aim there.", ok:1, fb:"She said yes to the wine and no to the disruption. Naming the weakest pour turns your ask from take a risk into fix a problem you already have, and that is something she can defend to the supplier she drops." },
      { o:"That price is the real problem and she is being polite about it.", fb:"She tasted it twice and said she loves it. Hearing price in that sentence is exactly how a rep ends up discounting a wine the buyer already wants." },
      { o:"That her program is full, so the honest move is to ask for a ninth pour.", fb:"Glass programs are sized to the staff and the cooler, not to your book. Asking for a slot that does not exist puts the entire burden of the yes on her." },
      { o:"That she needs more information before deciding, so send the sell sheet and follow up.", fb:"She has all the information she needs. She is describing a cost inside her own operation, and paper does not touch that." } ] },

  { id:"q_send_me_info", kind:"mc", obj:"O7", stem:"Ten minutes into a good conversation the buyer's tone changes and he says, “Send me some information and I will take a look.” What is under that?", opts:[
      { o:"He is a careful buyer who reads before deciding. Email the deck and follow up in two weeks.", fb:"In two weeks he will not remember the conversation and you will start from zero, having spent a live visit on an attachment. If he really does read, he will still read it after you have booked something." },
      { o:"He is out of time or not convinced, and information is the polite exit. Ask one question about his list and propose one small dated step: a staff pour on a named day.", ok:1, fb:"Send me information is almost never a request for information. A small specific yes with a date on it either revives the visit or gives you an honest no, and both beat a PDF sitting in a folder." },
      { o:"He is stalling, so press for a decision today before the momentum goes.", fb:"Pressing a buyer who just reached for the door confirms why he reached for it. The move is smaller, not harder: one question, one dated step." },
      { o:"He is telling you the wine is wrong for his list, so leave the sheet and move on.", fb:"Maybe, and you do not know that yet. Leaving without one question means you never learn whether it was the wine, the timing, or his afternoon." } ] },

  { id:"q_expensive_means", kind:"multi", obj:"O7", stem:"A buyer says, “It is too expensive.” Before you answer: which of these could she actually mean? (Choose all that apply.)", fb:"Too expensive is a symptom with several causes: the pour cost does not clear her target at the glass price she has in mind, she does not yet believe guests will trade up, she is measuring you against the wine already in that slot, or she is finding out whether you discount when pushed. All four have different answers, and none of those answers is a lower price. What it almost never means is that she wants your cost structure explained, or that the wine is bad. If the wine were bad she would say so.", opts:[
      { o:"The pour cost does not clear her target at the glass price she has in mind", ok:1 },
      { o:"She does not yet believe her guests will trade up to it", ok:1 },
      { o:"She is measuring it against the wine currently in that slot, not against nothing", ok:1 },
      { o:"She is finding out whether you discount when pushed", ok:1 },
      { o:"She wants your production costs explained line by line" },
      { o:"She thinks the wine is not good" } ] },

  { id:"q_week_four_duskfall", kind:"mc", obj:"O8", stem:"You won a by-the-glass slot for Duskfall four weeks ago. The account has not reordered, and the manager says it is just sitting there. What do you do first?", opts:[
      { o:"Go stand at the bar on a busy night, listen to how the staff describe it, and check where it sits on the printed list.", ok:1, fb:"Diagnose before you propose. A stalled skin-contact pour is almost always a staff who cannot describe it or a list position that buries it, and both are yours to fix. You cannot fix what you have not watched." },
      { o:"Offer a different wine. Skin contact was probably too adventurous for that room.", fb:"Swapping is the most expensive guess available. You lose the slot, the account learns your recommendations do not stick, and you still do not know what went wrong." },
      { o:"Offer a discount on the reorder to get the depletions moving.", fb:"Discounting a wine that is not selling does not make it sell. It makes it cheap and still not selling. The problem is not the price on the invoice, it is that nobody is telling a guest what the wine is." },
      { o:"Ask the manager to push it harder with the team.", fb:"Push it harder is a request without a tool. The staff pour and the one line they can repeat were your job at the placement, and skipping them is what put you here." } ] },

  { id:"q_shelf_no_reorder", kind:"mc", obj:"O8", stem:"A fine-wine shop took two cases of Field Blend six weeks ago and has not reordered. The owner is friendly but vague about why. What is the move?", opts:[
      { o:"Go look at the shelf. Check the facing, check whether the shelf talker ever went up, and offer to work a Saturday tasting.", ok:1, fb:"Off-premise has nobody talking for you, so the shelf is the salesperson. A buried facing and a shelf talker still in the box are the usual answer, and a Saturday tasting is the cheapest depletion you will ever buy." },
      { o:"Call and ask for the reorder. Sometimes it just needs asking.", fb:"Asking for a reorder on a wine that has not sold asks him to fund the same mistake twice. Find out why the first two cases are still there, then ask." },
      { o:"Offer a deeper price on the next two cases to get the reorder in.", fb:"It did not fail on price, it failed on visibility. A discount buys you a second stack of unsold bottles and a lower price on every case after it." },
      { o:"Assume the premium set was the wrong fit and pitch him Daybreak instead.", fb:"You are changing the answer before you know the question. A $38 story bottle that never got a shelf talker has not actually been tested yet." } ] },

  { id:"q_thirty_days", kind:"multi", obj:"O8", stem:"You just landed Daybreak by the glass at a 60-seat restaurant. What goes on your calendar for the next thirty days? (Choose all that apply.)", fb:"The yes is the start of the work. A staff pour with one repeatable line, list copy in their language, a dated visit to read the depletions, and an invitation that makes the account feel like a partner are the four things that turn a placement into a reorder. A second placement pitch on the next visit tells them you were only ever there for the next slot, and a standing discount reprices a wine that has not failed at anything yet.", opts:[
      { o:"A staff pour in the first week, with one line the floor can repeat", ok:1 },
      { o:"List or menu copy written in their language, not the brand's", ok:1 },
      { o:"A dated visit around week four to read the depletions with the manager", ok:1 },
      { o:"A Field Session invitation for the buyer and one of her staff", ok:1 },
      { o:"A second placement pitch on your next visit, to build on the momentum" },
      { o:"A standing discount on the first reorder, to protect the placement" } ] }
],
  freeItem: { stem:"A steakhouse buyer says your wine is too expensive. Write your two-sentence reply, then check it against the rubric.", rubric:"Strong replies do three things: answer return rather than cost (the story earns the price), stay calm and non-defensive (no discounts, no lectures), and end with a concrete next step (a by-the-glass trial, a staff pour). If your two sentences do all three, you passed your own bar." }
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

/* The lineup, as an ungated job aid rather than gated instruction. Rendered by
   lineup.html, which a rep opens in a parking lot, not a lesson they sit through. */
const LINEUP = [
  { wine:"DAYBREAK", grape:"Chilled Gamay · Recruit", img:"../assets/img/bottle_daybreak.jpg", wholesale:16, srp:24,
    story:"The first wine off the fields each year, made to pour by the glass. Bright, chillable, and gone by autumn.",
    taste:"Crunchy red fruit, low tannin, served cold. The easiest yes in the book.",
    sell:"The by-the-glass workhorse. At $16 wholesale you need $14 a glass to clear a 25 percent pour cost." },
  { wine:"AFTERGLOW", grape:"Pinot Noir rosé · Twilight", img:"../assets/img/bottle_afterglow.jpg", wholesale:17, srp:26,
    story:"A pale, dry rosé: the last light of day in a glass. The easiest yes of the warm months.",
    taste:"Dry, pale, saline. Warm-month by-the-glass and patio lists.",
    sell:"Pairs with Daybreak as a story, not as two SKUs: the beginning and the end of a day on the ridge." },
  { wine:"CHARDONNAY", grape:"Estate, no new oak · Anchor", img:"../assets/img/bottle_chardonnay.jpg", wholesale:22, srp:34,
    story:"The white that anchors the list, grown cold and picked bright.",
    taste:"Taut and mineral, no new oak, citrus pith and wet stone, a saline length. It anchors a white list without ever raising its voice.",
    sell:"Sell it as the dependable one: taut, mineral, honest. The list's quiet spine, and the safest yes for a buyer who fears oak." },
  { wine:"DUSKFALL", grape:"Skin-contact Chenin Blanc · Curiosity", img:"../assets/img/bottle_duskfall.jpg", wholesale:24, srp:36,
    story:"The textural amber white, named for the hour the field changes light. The somm's discovery.",
    taste:"Amber and aromatic: bruised apple, chamomile, orange peel, a gentle tannic grip. Texture with real freshness.",
    sell:"This is the somm's discovery. When a natural-wine list wants one wine no one else has, Duskfall is the skin-contact Chenin that makes their by-the-glass feel curated." },
  { wine:"PINOT NOIR", grape:"Estate · Serious", img:"../assets/img/bottle_pinot.jpg", wholesale:28, srp:42,
    story:"The noble cool-climate red, grown above the fog for transparency and nerve.",
    taste:"Cool-climate red fruit and forest floor, fine tannin, a long savory finish. Transparent and unforced. It shows the site, not the cellar.",
    sell:"Lead here when the buyer's list lives and dies on Pinot. It is the proof of site: transparency, nerve, and length, nothing hidden." },
  { wine:"SYRAH", grape:"Cool-climate estate · Broaden", img:"../assets/img/bottle_syrah.jpg", wholesale:25, srp:38,
    story:"Savory, peppery, cool-climate Syrah. Not a warm-climate blockbuster.",
    taste:"White pepper, violet, dark plum, olive. Medium weight with real freshness. Syrah the way cold ridges make it.",
    sell:"When the buyer says “I already have my Pinot,” this is the move: the same farming and the same ridge in a savory, peppery shape their list does not have." },
  { wine:"FIELD BLEND", grape:"The co-planted field · Define", img:"../assets/img/bottle_deepfield.jpg", wholesale:38, srp:58,
    story:"The whole living field, co-planted and co-fermented, in one bottle. The thesis statement of the estate.",
    taste:"Dark and bright at once: red and black fruit interwoven, wild herbs, a mineral spine. Complex but never heavy.",
    sell:"If a buyer only tries one wine, it is this one. It is the thesis: one living biodynamic site read honestly. Anchor the placement here, then build the set around it." },
  { wine:"LONG EXPOSURE", grape:"Reserve single-block Pinot Noir · Depth", img:"../assets/img/bottle_longexposure.jpg", wholesale:62, srp:95,
    story:"The flagship grape given more time: longer aging, later release, from the oldest heart of the field.",
    taste:"Deeper and quieter than the estate Pinot: dark cherry, tea leaf, forest, a very long finish that keeps unfolding. Depth, made literal.",
    sell:"This is your trade-up and your cellar wine. When a buyer already loves the Pinot, this is where you take the check up: the same grape, given more time." }
];
