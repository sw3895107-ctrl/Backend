// All your story objects go here
const stories = [
  },
// P0300 - MISFIRE (8 stories)
  } {
id:1,
code:'P0420',
title:'$50 Cat Clean vs $1200 Dealer Replacement',
vehicle:'2004 Honda Accord 2.4L 156k miles',
author:'Mike',
img:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80',
problem:'Check engine light came on with P0420 catalyst efficiency code. Failed state inspection. Local Honda dealer quoted $1,200 for new catalytic converter plus $400 labor. Total: $1,600.',
rabbitHole:[
{title:'O2 Sensor Spacer/Cheater',desc:'$15 Amazon "fouler". Light stayed off for 50 miles, came right back. Complete waste of time and money.'},
{title:'Cataclean Fuel Additive',desc:'$25 bottle, followed instructions exactly. Zero change in O2 sensor readings. Might work for borderline cases, not this one.'}
],
fix:[
{title:'Remove the Catalytic Converter',desc:'4 bolts, 2 O2 sensors. Penetrating oil overnight, impact wrench. 45 minutes total.'},
{title:'Soak in Dishwasher Detergent',desc:'2 cups Cascade powder in 5-gallon bucket of hot water. Submerged cat completely, soaked 12 hours.'},
{title:'Bake at 500°F for 2 Hours',desc:'Used old shop oven (don't use your kitchen oven!). Burns off remaining carbon deposits.'},
{title:'Reinstall with New Gaskets',desc:'New donut gasket ($8) and hardware. Torqued to spec. Cleared codes with scanner.'}
],
cost:20,
dealerCost:1600,
saved:1580,
success:47,
cat:'p0420',
verdict:'3 weeks later: Still no check engine light. Passed state inspection yesterday. O2 sensors showing normal switching frequency. This fix won't last forever (probably 1-2 years on a 20-year-old car with 156k miles). But that's perfect. Would do again in a heartbeat.',
proTip:'Always check your O2 sensor data first! If rear O2 is stuck lean or rich, this won't help. Mine was switching slowly but normally - that's the key indicator this fix will work.'
},
{
id:2,
code:'P0420',
title:'Rear O2 Sensor Only - Not the Cat',
vehicle:'2010 Subaru Outback 2.5L 180k miles',
author:'SubieShop',
img:'https://images.unsplash.com/photo-1532581140115-ca3d01490791?w=400&q=80',
problem:'P0420 code, dealer said catalytic converter needed replacement immediately. Quote: $1,185 parts + labor.',
rabbitHole:[
{title:'Considered Aftermarket Cat',desc:'Was going to buy $300 universal cat and have shop weld it. Still $600+ total.'}
],
fix:[
{title:'Check O2 Sensor Data',desc:'Scanned with Torque Pro. Rear O2 sensor was lazy, not switching properly. Front O2 was fine.'},
{title:'Replace Rear O2 Only',desc:'Bought Bosch O2 sensor for $85. 22mm wrench, 10 minutes to swap. Cleared codes.'}
],
cost:85,
dealerCost:1185,
saved:1100,
success:89,
cat:'p0420',
verdict:'6 months later, still no codes. Cat was fine, just the sensor telling the ECU it was bad. Always check sensor data before replacing expensive cats!',
proTip:'Use a scanner that shows O2 sensor voltage graphs. Rear O2 should wave between 0.1V and 0.9V. If it's flatlined, replace the sensor first.'
},
{
id:3,
code:'P0420',
title:'Exhaust Leak Causing False P0420',
vehicle:'2007 Toyota Camry 2.4L 142k miles',
author:'ToyotaTom',
img:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
problem:'P0420 code, rough idle, exhaust smell in cabin. Dealer wanted $1,400 for new catalytic converter.',
rabbitHole:[
{title:'Replaced Both O2 Sensors',desc:'$180 in sensors, no change. Still had P0420 and rough idle.'}
],
fix:[
{title:'Visual Inspection',desc:'Found crack in flex pipe before catalytic converter. Exhaust leak was letting air in, throwing off O2 readings.'},
{title:'Weld the Crack',desc:'Local muffler shop welded crack for $80. New gasket $40. Total $120.'}
],
cost:120,
dealerCost:1400,
saved:1280,
success:34,
cat:'p0420',
verdict:'Code gone immediately after weld. Idle smooth. No more exhaust smell. Always inspect exhaust for leaks before condemning the cat!',
proTip:'Use a smoke machine or listen for leaks with engine running. Exhaust leaks before the cat will cause false P0420 codes.'
},
{
id:4,
code:'P0420',
title:'Oil Consumption Killing the Cat',
vehicle:'2008 Honda Civic 1.8L 210k miles',
author:'HondaMike',
img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
problem:'P0420 every 3 months, burning 1 quart oil every 1,000 miles. Dealer quote: $1,200 cat + investigate oil consumption.',
rabbitHole:[
{title:'Just Cleaned Cat',desc:'Worked for 2 months, then code came back. Oil was coating the cat again.'}
],
fix:[
{title:'Fix Oil Consumption First',desc:'Replaced PCV valve ($12), added oil catch can ($45), switched to high mileage oil.'},
{title:'Then Clean Cat',desc:'Once oil consumption slowed, did detergent soak and bake on cat.'}
],
cost:95,
dealerCost:1200,
saved:1105,
success:23,
cat:'p0420',
verdict:'3 months later, no codes, oil consumption down to 1qt/3000mi. Cat stays clean when oil stays in engine!',
proTip:'If you have P0420 AND oil consumption, fix the oil problem first or you'll be replacing cats forever.'
},
{
id:5,
code:'P0420',
title:'Spark Plug Fouling Causing Cat Failure',
vehicle:'2006 Nissan Altima 2.5L 165k miles',
author:'NissanTech',
img:'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&q=80',
problem:'P0420, rough idle, terrible gas mileage, smell of raw fuel.',
rabbitHole:[
{title:'Replaced Cat',desc:'New cat failed in 3 months. Didn't fix root cause.'}
],
fix:[
{title:'Check Spark Plugs',desc:'Plugs were fouled with carbon, causing misfires. Raw fuel was entering cat.'},
{title:'New Plugs + Cat Clean',desc:'NGK plugs ($45) + cat cleaning ($35) + upstream O2 ($85).'}
],
cost:165,
dealerCost:1300,
saved:1135,
success:56,
cat:'p0420',
verdict:'Fixed the misfire, cat recovered. 8 months later, still passing emissions. Fix the engine first, then the cat!',
proTip:'Misfires kill cats. If you have P0300 and P0420 together, fix the misfire first.'
id:6,
code:'P0420',
title:'Cheap Cat from RockAuto Works',
vehicle:'2005 Ford F-150 5.4L 195k miles',
author:'FordGuy',
img:'https://images.unsplash.com/photo-1605893474270-1d0d9f8e8c72?w=400&q=80',
problem:'Both banks P0420/P0430, dealer wanted $2,400 for both cats.',
rabbitHole:[
{title:'Tried Used Cat',desc:'Junkyard cat lasted 2 weeks. Waste of $80.'}
],
fix:[
{title:'Buy Eastern Catalytic',desc:'RockAuto Eastern Catalytic direct fit cats $280 each.'},
{title:'Replace Both',desc:'$560 for both cats, $120 labor at muffler shop. Total $680.'}
],
cost:680,
dealerCost:2400,
saved:1720,
success:67,
cat:'p0420',
verdict:'1 year later, still passing emissions. RockAuto cats work if you buy the right brand.',
proTip:'Eastern and Walker cats work fine. Avoid "universal" weld-in cats.'
},
{
id:7,
code:'P0420',
title:'Muffler Delete Causing P0420',
vehicle:'2012 Honda Civic Si 2.4L 98k miles',
author:'VTEC_Kid',
img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80',
problem:'P0420 after aftermarket exhaust install',
rabbitHole:[
{title:'Tuned ECU',desc:'Still threw codes after tune.'}
],
fix:[
{title:'Reinstall Resonator',desc:'Added resonator back to system.'},
{title:'O2 Defouler',desc:'Spark plug non-fouler on rear O2 with 1/2" hole drilled.'}
],
cost:60,
dealerCost:900,
saved:840,
success:28,
cat:'p0420',
verdict:'Passed inspection. Not permanent fix but works for now.',
proTip:'Exhaust changes affect O2 readings. May need tune or defoulers.'
},
{
id:8,
code:'P0420',
title:'Coolant Leak Poisoning Cat',
vehicle:'2009 Toyota Corolla 1.8L 155k miles',
author:'ToyotaTech',
img:'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&q=80',
problem:'P0420, losing coolant, white smoke. Shop quoted $2,800 head gasket + cat.',
rabbitHole:[
{title:'Just Replaced Cat',desc:'New one failed in 1 month. Coolant was killing it.'}
],
fix:[
{title:'Head Gasket Sealer',desc:'BlueDevil sealer $45. Temporary fix.'},
{title:'New Cat After',desc:'Once leak stopped, new cat $450.'}
],
cost:495,
dealerCost:2800,
saved:2305,
success:19,
cat:'p0420',
verdict:'6 months later, still working. Sealer held, cat stays dry.',
proTip:'Fix coolant leaks BEFORE replacing cat or you'll be doing it twice.'
id:9,
code:'P0420',
title:'Bad Gas Destroyed My Cat',
vehicle:'2015 Chevy Silverado 5.3L 87k miles',
author:'TruckLife',
img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
problem:'P0420 after filling up at sketchy gas station. Rough running, sulfur smell. Dealer wanted $1,800 for new cat.',
rabbitHole:[
{title:'Replaced O2 Sensors',desc:'$240 wasted. Problem was contaminated cat, not sensors.'}
],
fix:[
{title:'Drain Bad Fuel',desc:'Siphoned out 3/4 tank of suspected bad gas.'},
{title:'Cataclean + High Octane',desc:'One bottle Cataclean, filled with Shell 93 octane.'},
{title:'Italian Tune-Up',desc:'Drove hard for 100 miles. High RPMs burned off deposits.'}
],
cost:85,
dealerCost:1800,
saved:1715,
success:41,
cat:'p0420',
verdict:'Code cleared after 150 miles. 4 months later, still good. Bad gas happens - try cleaning before replacing!',
proTip:'If P0420 appears right after fill-up, suspect fuel quality. Try premium gas and cleaner first.'
},
{
id:10,
code:'P0420',
title:'Welded Heat Shield Fixed False Code',
vehicle:'2003 Lexus ES300 3.0L 178k miles',
author:'LexusTech',
img:'https://images.unsplash.com/photo-1503376763036-066120622c74?w=400&q=80',
problem:'P0420 intermittent, worse in hot weather. Dealer said cat failing $1,600.',
rabbitHole:[
{title:'Replaced Rear O2',desc:'No change. Code came back within 50 miles.'}
],
fix:[
{title:'Inspect Heat Shields',desc:'Found loose heat shield on cat causing overheating.'},
{title:'Reweld Shields',desc:'Muffler shop welded loose shields $60.'}
],
cost:60,
dealerCost:1600,
saved:1540,
success:15,
cat:'p0420',
verdict:'6 months, no codes. Heat shield was causing cat to overheat and throw false efficiency code.',
proTip:'Loose heat shields cause cats to overheat. Check them before replacing expensive components.'
},
id:11,
code:'P0300',
title:'$8 Coil Pack vs $600 Dealer Diagnosis',
vehicle:'2005 Honda Accord 2.4L 140k miles',
author:'HondaMike',
img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
problem:'Random misfire P0300, shaking at idle, flashing CEL. Shop wanted $600 to diagnose and replace all coils.',
rabbitHole:[
{title:'Replaced All Spark Plugs',desc:'$60, no change. Still misfiring.'}
],
fix:[
{title:'Scan for Specific Cylinder',desc:'Torque Pro showed P0303 (cylinder 3).'},
{title:'Swap Coil Packs',desc:'Swapped coil 3 with coil 1. Misfire moved to P0301.'},
{title:'Replace Bad Coil',desc:'$8 coil pack from RockAuto. 10 minute swap.'}
],
cost:8,
dealerCost:600,
saved:592,
success:92,
cat:'p0300',
verdict:'Fixed immediately. Been 8 months, runs perfect. Always swap test before buying full sets!',
proTip:'Swap coils between cylinders to isolate the bad one. Saves buying parts you don't need.'
},
{
id:12,
code:'P0300',
title:'Valve Cover Gasket Causing Misfire',
vehicle:'2008 BMW 328i 3.0L 125k miles',
author:'BimmerFix',
img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
problem:'P0300, rough idle, oil smell. Indie shop quoted $1,200 for ignition coils and valve cover.',
rabbitHole:[
{title:'Replaced All Coils',desc:'$280, no change. Still misfiring.'}
],
fix:[
{title:'Check Spark Plug Wells',desc:'Found oil in cylinder 2 and 4 spark plug wells from leaking gasket.'},
{title:'New Valve Cover Gasket',desc:'$45 gasket set, 2 hours labor. Cleaned oil from plugs.'}
],
cost:45,
dealerCost:1200,
saved:1155,
success:78,
cat:'p0300',
verdict:'Misfire gone immediately. Oil was shorting spark plugs. BMWs are notorious for this.',
proTip:'Check for oil in spark plug wells before replacing coils. Common on BMW, Nissan, Honda.'
},
  {id:13,
code:'P0300',
title:'Dirty Injector Cleaner Fixed It',
vehicle:'2010 Ford F-150 5.4L 98k miles',
author:'FordTech',
img:'https://images.unsplash.com/photo-1605893474270-1d0d9f8e8c72?w=400&q=80',
problem:'Intermittent P0300, worse when cold. Dealer wanted $800 for new injectors.',
rabbitHole:[
{title:'Replaced Spark Plugs',desc:'Motorcraft plugs $80, no change.'}
],
fix:[
{title:'Sea Foam Treatment',desc:'1 can in tank, 1 can in brake booster vacuum line.'},
{title:'Drive It Hard',desc:'Drove 200 miles aggressively to clean injectors.'}
],
cost:25,
dealerCost:800,
saved:775,
success:63,
cat:'p0300',
verdict:'Misfire cleared after 100 miles. 6 months later, still smooth. Try cleaner before new injectors!',
proTip:'Ford 5.4L injectors gum up. Sea Foam or Techron often fixes intermittent misfires.'
},
{
id:14,
code:'P0300',
title:'Vacuum Leak - $3 Hose',
vehicle:'2004 Toyota Camry 2.4L 165k miles',
author:'ToyotaTom',
img:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
problem:'P0300, high idle, hissing noise. Shop quoted $400 for "intake manifold gasket".',
rabbitHole:[
{title:'Smoke Test',desc:'Was going to pay $100 for smoke test.'}
],
fix:[
{title:'Visual Inspection',desc:'Found cracked vacuum hose behind intake manifold.'},
{title:'Replace Hose',desc:'$3 hose from parts store, 5 minutes with pliers.'}
],
cost:3,
dealerCost:400,
saved:397,
success:88,
cat:'p0300',
verdict:'Idle dropped to normal immediately. Misfire gone. $3 fix!',
proTip:'Listen for hissing with engine running. Vacuum leaks cause lean misfires.'
},
{
id:15,
code:'P0300',
title:'MAF Sensor Cleaning Fixed Misfire',
vehicle:'2006 Nissan Altima 2.5L 134k miles',
author:'NissanTech',
img:'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&q=80',
problem:'P0300, rough idle, stalling at stops. Shop said bad MAF $380.',
rabbitHole:[
{title:'Replaced Plugs and Coils',desc:'$200, no improvement.'}
],
fix:[
{title:'Remove MAF Sensor',desc:'2 screws, 5 minutes.'},
{title:'Clean with MAF Cleaner',desc:'$8 CRC MAF cleaner. Sprayed wire gently, let dry.'}
],
cost:8,
dealerCost:380,
saved:372,
success:71,
cat:'p0300',
verdict:'Runs like new. Never use brake cleaner on MAF - always use proper MAF cleaner.',
proTip:'Clean MAF before replacing. Takes 10 minutes and $8 vs $400 sensor.'
}
    id: 16,
    code: 'P0300',
    title: 'Corroded Engine Ground Fix',
    vehicle: '1995 Chevy 350 5.7L',
    author: 'Scott',
    img: 'https://images.unsplash.com/photo-1532581140115-ca3d01490791?w=400&q=80',
    problem: 'Random P0300, worse in wet weather. Multiple shops couldn\'t find it.',
    rabbitHole: [{ title: 'Replaced ICM', desc: '$180 ignition control module, no change.' }],
    fix: [
      { title: 'Check Grounds', desc: 'Found corroded ground wire from engine to firewall.' },
      { title: 'Clean and Tighten', desc: 'Wire brush, dielectric grease, tighten bolt.' }
    ],
    cost: 0,
    dealerCost: 800,
    saved: 800,
    success: 34,
    cat: 'p0300',
    verdict: 'Fixed immediately. Ground was causing weak spark. Free fix!',
    proTip: 'Check engine grounds before throwing parts at misfires. Especially on older trucks.'
  },
  {
    id: 17,
    code: 'P0300',
    title: 'Timing Chain Tensioner Causing Misfire',
    vehicle: '2008 BMW 528i 3.0L 115k miles',
    author: 'BimmerTech',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    problem: 'P0300, rattling on startup, rough idle. Dealer quoted $3,500 for timing chain.',
    rabbitHole: [{ title: 'Replaced VANOS Solenoids', desc: '$400, helped slightly but didn\'t fix misfire.' }],
    fix: [
      { title: 'Replace Tensioner Only', desc: 'Bought updated tensioner $180.' },
      { title: 'DIY Replacement', desc: 'YouTube video, 4 hours, basic tools.' }
    ],
    cost: 180,
    dealerCost: 3500,
    saved: 3320,
    success: 45,
    cat: 'p0300',
    verdict: 'Rattle gone, misfire gone. Chain was fine, just loose from bad tensioner.',
    proTip: 'BMW N52 engines have weak tensioners. Replace tensioner before assuming chain is bad.'
  }
  // Add all other stories here
];

module.exports = stories;https://images.unsplash.com/photo-1532581140115-ca3d01490791?w=400&q=80',
problem:'Random P0300, worse in wet weather. Multiple shops couldn't find it.',
rabbitHole:[
{title:'Replaced ICM',desc:'$180 ignition control module, no change.'}
],
fix:[
{title:'Check Grounds',desc:'Found corroded ground wire from engine to firewall.'},
{title:'Clean and Tighten',desc:'Wire brush, dielectric grease, tighten bolt.'}
],
cost:0,
dealerCost:800,
saved:800,
success:34,
cat:'p0300',
verdict:'Fixed immediately. Ground was causing weak spark. Free fix!',
proTip:'Check engine grounds before throwing parts at misfires. Especially on older trucks.'
},
{
id:17,
code:'P0300',
title:'Timing Chain Tensioner Causing Misfire',
vehicle:'2008 BMW 528i 3.0L 115k miles',
author:'BimmerTech',
img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
problem:'P0300, rattling on startup, rough idle. Dealer quoted $3,500 for timing chain.',
rabbitHole:[
{title:'Replaced VANOS Solenoids',desc:'$400, helped slightly but didn't fix misfire.'}
],
fix:[
{title:'Replace Tensioner Only',desc:'Bought updated tensioner $180.'},
{title:'DIY Replacement',desc:'YouTube video, 4 hours, basic tools.'}
],
cost:180,
dealerCost:3500,
saved:3320,
success:45,
cat:'p0300',
verdict:'Rattle gone, misfire gone. Chain was fine, just loose from bad tensioner.',
proTip:'BMW N52 engines have weak tensioners. Replace tensioner before assuming chain is bad.'
},
{
id:18,
code:'P0300',
title:'E85 Conversion Causing Misfires',
vehicle:'2005 Ford Crown Vic 4.6L 180k miles',
author:'CrownVicKing',
img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80',
problem:'P0300 after switching to E85, hard starting, rough idle.',
rabbitHole:[
{title:'Replaced Fuel Pump',desc:'$140, no change. Wasn't a pressure issue.'}
],
fix:[
{title:'Check Injector Size',desc:'E85 needs 30% more fuel. Stock injectors too small.'},
{title:'Upgrade Injectors',desc:'Used Mustang GT injectors $80 from junkyard.'}
],
cost:80,
dealerCost:600,
saved:520,
success:22,
cat:'p0300',
verdict:'Runs perfect on E85 now. Misfire was lean condition from undersized injectors.',
proTip:'Converting to E85? You need bigger injectors or you'll run lean and misfire.'
},
// P0171 - SYSTEM TOO LEAN (7 stories)
{
id:19,
code:'P0171',
title:'$12 PCV Valve Fixed Lean Code',
vehicle:'2004 Honda Civic 1.7L 156k miles',
author:'HondaMike',
img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
problem:'P0171 system too lean, rough idle, oil in air filter box. Shop quoted $800 for "intake leak diagnosis".',
rabbitHole:[
{title:'Smoke Test Quote',desc:'Shop wanted $150 just to smoke test for leaks.'}
],
fix:[
{title:'Check PCV Valve',desc:'Found stuck open, causing massive vacuum leak.'},
{title:'Replace PCV',desc:'$12 part, 2 minutes with pliers.'}
],
cost:12,
dealerCost:800,
saved:788,
success:95,
cat:'p0171',
verdict:'Idle smoothed out immediately. Code cleared after 10 miles. Most common cause of P0171 on Hondas!',
proTip:'Check PCV first on P0171. Shake it - should rattle. If not, replace it. $12 vs hours of leak hunting.'
},
{
id:20,
code:'P0171',
title:'Intake Manifold Gasket Leak',
vehicle:'2005 Ford F-150 5.4L 140k miles',
author:'FordTech',
img:'https://images.unsplash.com/photo-1605893474270-1d0d9f8e8c72?w=400&q=80',
problem:'P0171 both banks, rough cold start, whistle noise. Dealer quoted $1,200 for intake gaskets.',
rabbitHole:[
{title:'Replaced MAF',desc:'$280, no change. Wasn't sensor issue.'}
],
fix:[
{title:'Propane Test',desc:'Sprayed propane around intake. RPM jumped at rear of manifold.'},
{title:'Replace Gaskets',desc:'$45 gasket set, 3 hours DIY with YouTube.'}
],
cost:45,
dealerCost:1200,
saved:1155,
success:67,
cat:'p0171',
verdict:'Fixed immediately. Common on 5.4L Tritons. Gaskets get hard and leak vacuum.',
proTip:'Use propane or brake cleaner around intake. RPM change = vacuum leak found.'
},
{
id:21,
code:'P0171',
title:'Brake Booster Vacuum Leak',
vehicle:'2003 Toyota Camry 2.4L 178k miles',
author:'ToyotaTom',
img:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
problem:'P0171, hard brake pedal, hissing noise. Shop said bad brake booster $650.',
rabbitHole:[
{title:'Replaced All Vacuum Hoses',desc:'$40, no change. Leak was in booster itself.'}
],
fix:[
{title:'Check Booster Check Valve',desc:'$8 valve was stuck open, leaking vacuum.'},
{title:'Replace Valve Only',desc:'Didn't need whole booster, just the valve.'}
],
cost:8,
dealerCost:650,
saved:642,
success:41,
cat:'p0171',
verdict:'Brakes normal again, code gone. Always check the cheap valve before replacing booster!',
proTip:'If hissing comes from brake pedal area, check booster check valve first. $8 vs $600.'
},
{
id:22,
code:'P0171',
title:'Fuel Filter Restriction Causing Lean',
vehicle:'2001 Chevy Silverado 5.3L 195k miles',
author:'ChevyMike',
img:'https://images.unsplash.com/photo-1532581140115-ca3d01490791?w=400&q=80',
problem:'P0171 under load, loss of power, fuel trim maxed. Shop quoted $900 for fuel pump.',
rabbitHole:[
{title:'Checked Fuel Pressure',desc:'Pressure was low but pump was new.'}
],
fix:[
{title:'Replace Fuel Filter',desc:'$15 filter, 20 minutes with line wrenches.'}
],
cost:15,
dealerCost:900,
saved:885,
success:53,
cat:'p0171',
verdict:'Power restored, code gone. Filter was original from 2001, completely clogged.',
proTip:'Replace fuel filter every 30k miles. Restricted flow causes lean condition under load.'
},
{
id:23,
code:'P0171',
title:'Air Filter Housing Crack',
vehicle:'2007 Nissan Altima 2.5L 134k miles',
author:'NissanTech',
img:'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&q=80',
problem:'P0171, whistling noise, poor MPG. Shop quoted $400 for "intake system repair".',
rabbitHole:[
{title:'Replaced MAF',desc:'$180, no change.'}
],
fix:[
{title:'Inspect Airbox',desc:'Found crack in lower airbox after filter.'},
{title:'JB Weld Fix',desc:'Plastic epoxy repair $8. Good as new.'}
],
cost:8,
dealerCost:400,
saved:392,
success:29,
cat:'p0171',
verdict:'Whistle gone, code cleared. Unmetered air was entering after MAF sensor.',
proTip:'Check airbox for cracks. Air entering after MAF causes lean condition.'
},
{
id:24,
code:'P0171',
title:'O2 Sensor Wiring Corrosion',
vehicle:'2004 Subaru Outback 2.5L 167k miles',
author:'SubieShop',
img:'https://images.unsplash.com/photo-1532581140115-ca3d01490791?w=400&q=80',
problem:'P0171, erratic fuel trim, hesitation. Shop quoted $1,100 for new O2 sensors and wiring.',
rabbitHole:[
{title:'Replaced Front O2',desc:'$180, no change. Wasn't the sensor.'}
],
fix:[
{title:'Inspect Wiring',desc:'Found corroded connector at O2 sensor.'},
{title:'Repair Wiring',desc:'Cut out bad section, soldered new connector $15.'}
],
cost:15,
dealerCost:1100,
saved:1085,
success:37,
cat:'p0171',
verdict:'Fuel trim stabilized immediately. Code never returned. Wiring, not sensor!',
proTip:'Check O2 sensor connectors for corrosion. Common in salt belt states.'
},
{
id:25,
code:'P0171',
title:'Exhaust Leak Before O2 Sensor',
vehicle:'2005 Honda Accord 2.4L 145k miles',
author:'HondaMike',
img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
problem:'P0171, ticking exhaust, poor MPG. Shop quoted $800 for cat replacement.',
rabbitHole:[
{title:'Replaced O2 Sensors',desc:'$240, no change.'}
],
fix:[
{title:'Find Exhaust Leak',desc:'Leak at flex pipe before cat.'},
{title:'Patch Pipe',desc:'Clamp-on patch $25 from auto parts store.'}
],
cost:25,
dealerCost:800,
saved:775,
success:48,
cat:'p0171',
verdict:'Code gone in 20 miles. Leak was letting air in, causing false lean reading.',
proTip:'Exhaust leaks before O2 sensor cause false lean codes. Check exhaust first!'
},
// P0455 - EVAP LEAK (6 stories)
{
id:26,
code:'P0455',
title:'Gas Cap O-Ring Fixed It',
vehicle:'2008 Toyota Camry 2.4L 120k miles',
author:'ToyotaTom',
img:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
problem:'P0455 large evap leak, CEL on. Dealer quoted $400 for "smoke test and diagnosis".',
rabbitHole:[
{title:'New Gas Cap',desc:'$25 OEM cap, no change. Wasn't the cap itself.'}
],
fix:[
{title:'Inspect Filler Neck',desc:'Found rust around gas cap seal area.'},
{title:'Clean and Grease',desc:'Sanded rust, dielectric grease on O-ring. $0.'}
],
cost:0,
dealerCost:400,
saved:400,
success:82,
cat:'p0455',
verdict:'Code cleared after 3 drive cycles. Free fix! Always check filler neck condition.',
proTip:'Rust on filler neck prevents seal even with new cap. Clean it first.'
},
{
id:27,
code:'P0455',
title:'EVAP Canister Vent Valve',
vehicle:'2006 Ford F-150 5.4L 155k miles',
author:'FordTech',
img:'https://images.unsplash.com/photo-1605893474270-1d0d9f8e8c72?w=400&q=80',
problem:'P0455, hard to fill gas tank, clicks off pump. Dealer quoted $380 for canister.',
rabbitHole:[
{title:'Replaced Gas Cap',desc:'$20, no change.'}
],
fix:[
{title:'Check Vent Valve',desc:'Found stuck closed, preventing air escape.'},
{title:'Replace Vent Valve',desc:'$45 part, 30 minutes near spare tire.'}
],
cost:45,
dealerCost:380,
saved:335,
success:91,
cat:'p0455',
verdict:'Fills normally now, code gone. Common on Fords. Valve gets dirt in it.',
proTip:'If pump clicks off while fueling, suspect vent valve. Easy DIY on most trucks.'
},
{
id:28,
code:'P0455',
title:'Rusty EVAP Line Repair',
vehicle:'2003 Chevy Silverado 5.3L 210k miles',
author:'ChevyMike',
img:'https://images.unsplash.com/photo-1532581140115-ca3d01490791?w=400&q=80',
problem:'P0455, smell of gas. Shop quoted $600 for "evap system overhaul".',
rabbitHole:[
{title:'Smoke Test',desc:'Found leak but couldn't afford $150 test.'}
],
fix:[
{title:'Visual Inspection',desc:'Found rust hole in steel line above spare tire.'},
{title:'Rubber Hose Bypass',desc:'Cut out rusty section, rubber hose and clamps $12.'}
],
cost:12,
dealerCost:600,
saved:588,
success:44,
cat:'p0455',
verdict:'Code cleared, no more gas smell. Rust belt trucks get rusty evap lines.',
proTip:'Check evap lines along frame. They rust out. Rubber hose splice is acceptable repair.'
},
{
id:29,
code:'P0455',
title:'Purge Valve Stuck Open',
vehicle:'2010 Honda Civic 1.8L 98k miles',
author:'HondaMike',
img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
problem:'P0455, rough idle after fill-up, stalls. Shop quoted $280 for purge valve.',
rabbitHole:[
{title:'Replaced Gas Cap',desc:'$25, no change.'}
],
fix:[
{title:'Test Purge Valve',desc:'Blew through it - should be closed with no power.'},
{title:'Replace Purge Valve',desc:'$35 part, 10 minutes by throttle body.'}
],
cost:35,
dealerCost:280,
saved:245,
success:73,
cat:'p0455',
verdict:'Idle normal again. Valve was stuck open, flooding engine with vapor.',
proTip:'If rough idle after fueling, suspect purge valve. Easy test: blow through it.'
},
{
id:30,
code:'P0455',
title:'Fuel Tank Pressure Sensor',
vehicle:'2007 BMW 328i 3.0L 115k miles',
author:'BimmerTech',
img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
problem:'P0455, false tank readings, CEL constantly on. Dealer quoted $650 for sensor and labor.',
rabbitHole:[
{title:'Replaced Gas Cap',desc:'$45 BMW cap, no change.'}
],
fix:[
{title:'Replace Pressure Sensor',desc:'$85 part on top of fuel pump module.'},
{title:'DIY Install',desc:'Access under rear seat, 45 minutes.'}
],
cost:85,
dealerCost:650,
saved:565,
success:38,
cat:'p0455',
verdict:'Code gone, fuel gauge accurate. Sensor was reading wrong pressure.',
proTip:'BMW fuel pressure sensors fail often. DIY accessible under rear seat.'
},
{
id:31,
code:'P0455',
title:'Charcoal Canister Saturated',
vehicle:'2005 Toyota Tacoma 4.0L 145k miles',
author:'TacoTuesday',
img:'https://images.unsplash.com/photo-1532581140115-ca3d01490791?w=400&q=80',
problem:'P0455, gas smell, overfilling tank. Shop quoted $500 for canister.',
rabbitHole:[
{title:'New Gas Cap',desc:'$20, no change.'}
],
fix:[
{title:'Don't Top Off Tank',desc:'Stopped clicking handle after auto-stop.'},
{title:'Replace Canister',desc:'Used canister from junkyard $45.'}
],
cost:45,
dealerCost:500,
saved:455,
success:56,
cat:'p0455',
verdict:'Code cleared after 2 weeks. Topping off tank floods the canister.',
proTip:'Never top off your tank! It saturates the charcoal canister and triggers P0455.'
},
// O2 SENSORS (5 stories)
{
id:32,
code:'O2',
title:'Heater Circuit - Wiring Fix',
vehicle:'2004 Honda Accord 2.4L 167k miles',
author:'HondaMike',
img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
problem:'P0135 O2 heater circuit, failed inspection. Shop quoted $280 for new sensor.',
rabbitHole:[
{title:'Replaced O2 Sensor',desc:'$85, same code came back. Wasn't the sensor.'}
],
fix:[
{title:'Check Wiring',desc:'Found melted wire near exhaust manifold.'},
{title:'Repair Harness',desc:'Soldered new wire section $10.'}
],
cost:10,
dealerCost:280,
saved:270,
success:64,
cat:'o2',
verdict:'Passed inspection. Heater circuit was open due to wiring, not bad sensor.',
proTip:'O2 heater codes often mean wiring. Check resistance and continuity first.'
},
{
id:33,
code:'O2',
title:'Sensor Socket Trick',
vehicle:'2005 Ford F-150 5.4L 189k miles',
author:'FordTech',
img:'https://images.unsplash.com/photo-1605893474270-1d0d9f8e8c72?w=400&q=80',
problem:'P0155 bank 2 sensor 1 heater circuit. Shop quoted $200 for sensor + labor.',
rabbitHole:[
{title:'Generic Sensor',desc:'$40 part didn't fit right. Wrong thread pitch.'}
],
fix:[
{title:'Buy Proper Socket',desc:'$15 O2 sensor socket with cutout for wire.'},
{title:'Motorcraft Sensor',desc:'$85 OEM sensor. Socket made install 5 minutes.'}
],
cost:100,
dealerCost:200,
saved:100,
success:87,
cat:'o2',
verdict:'Right tools make it easy. Generic sensors often cause issues.',
proTip:'Invest in O2 sensor socket. Saves hours of frustration.'
},
{
id:34,
code:'O2',
title:'Rear O2 Delete Tune',
vehicle:'2010 Chevy Camaro SS 6.2L 78k miles',
author:'CamaroKid',
img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80',
problem:'P0420/P0430 with long tube headers. Rear O2s reading out of range.',
rabbitHole:[
{title:'O2 Defoulers',desc:'$30, still threw codes occasionally.'}
],
fix:[
{title:'HP Tuners',desc:'Disabled rear O2 monitoring in ECU.'},
{title:'Turn Off Codes',desc:'Professional tune $400, turned off cat monitoring.'}
],
cost:400,
dealerCost:1200,
saved:800,
success:45,
cat:'o2',
verdict:'No more codes, passes inspection (visual only in my state).',
proTip:'Off-road use only! Check local laws before disabling emissions.'
},
{
id:35,
code:'O2',
title:'Front O2 Causing Bad MPG',
vehicle:'2006 Toyota Camry 2.4L 156k miles',
author:'ToyotaTom',
img:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
problem:'Bad gas mileage, sluggish, no codes yet. Shop said wait for codes.',
rabbitHole:[
{title:'Replaced Air Filter',desc:'$20, no improvement.'}
],
fix:[
{title:'Check O2 Switching',desc:'Scanner showed lazy front O2.'},
{title:'Replace Front O2',desc:'$95 Denso sensor. MPG improved 4mpg.'}
],
cost:95,
dealerCost:400,
saved:305,
success:72,
cat:'o2',
verdict:'MPG back to 28 from 24. Sensor was lazy but not throwing codes yet.',
proTip:'Check O2 switching rate with scanner. Lazy O2 hurts MPG before it throws codes.'
},
{
id:36,
code:'O2',
title:'O2 Bung Repair',
vehicle:'2001 Chevy Silverado 5.3L 234k miles',
author:'ChevyMike',
img:'https://images.unsplash.com/photo-1532581140115-ca3d01490791?w=400&q=80',
problem:'Stripped O2 threads, exhaust leak, P0135. Shop quoted $500 for new pipe.',
rabbitHole:[
{title:'Oversize Sensor',desc:'Didn't exist for this application.'}
],
fix:[
{title:'Retap Threads',desc:'M18x1.5 tap $25.'},
{title:'Install with Antiseize',desc:'New sensor $85. Threads held fine.'}
],
cost:110,
dealerCost:500,
saved:390,
success:28,
cat:'o2',
verdict:'No leak, code gone. Retapping saved replacing entire exhaust section.',
proTip:'Stripped O2 threads can often be retapped. Try before replacing pipe.'
},
// EGR SYSTEM (5 stories)
{
id:37,
code:'P0401',
title:'Clean EGR Passages',
vehicle:'2004 Honda Accord 2.4L 178k miles',
author:'HondaMike',
img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
problem:'P0401 insufficient EGR flow, rough idle. Shop quoted $450 for new EGR valve.',
rabbitHole:[
{title:'Replaced EGR Valve',desc:'$180, no change. Wasn't the valve.'}
],
fix:[
{title:'Remove Intake Manifold',desc:'2 hours to access EGR passages.'},
{title:'Clean Carbon',desc:'Carb cleaner and picks. Passages completely clogged.'}
],
cost:15,
dealerCost:450,
saved:435,
success:79,
cat:'egr',
verdict:'Idle smooth, code gone. Passages were clogged, valve was fine.',
proTip:'P0401 often means clogged passages, not bad valve. Clean first!'
},
{
id:38,
code:'P0401',
title:'DPFE Sensor Replacement',
vehicle:'2005 Ford F-150 5.4L 167k miles',
author:'FordTech',
img:'https://images.unsplash.com/photo-1605893474270-1d0d9f8e8c72?w=400&q=80',
problem:'P0401, hesitation, poor MPG. Shop quoted $380 for EGR valve.',
rabbitHole:[
{title:'Cleaned EGR Valve',desc:'$0, no change.'}
],
fix:[
{title:'Check DPFE Sensor',desc:'Sensor measures EGR pressure differential.'},
{title:'Replace DPFE',desc:'$65 part, 15 minutes on firewall.'}
],
cost:65,
dealerCost:380,
saved:315,
success:68,
cat:'egr',
verdict:'Fixed immediately. Ford DPFE sensors fail constantly.',
proTip:'Ford EGR codes often mean DPFE sensor, not EGR valve. Check it first.'
},
{
id:39,
code:'P0401',
title:'Vacuum Line to EGR',
vehicle:'2003 Toyota Camry 3.0L 156k miles',
author:'ToyotaTom',
img:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
problem:'P0401, no EGR function. Shop quoted $340 for EGR valve.',
rabbitHole:[
{title:'Tested EGR Valve',desc:'Valve worked fine when manually powered.'}
],
fix:[
{title:'Trace Vacuum Lines',desc:'Found cracked hose to EGR modulator.'},
{title:'Replace Hose',desc:'$5 vacuum hose, 10 minutes.'}
],
cost:5,
dealerCost:340,
saved:335,
success:42,
cat:'egr',
verdict:'EGR working normally. Simple vacuum leak caused the code.',
proTip:'Test EGR valve manually before replacing. Often it's vacuum supply issue.'
},
{
id:40,
code:'P0401',
title:'EGR Cooler Delete',
vehicle:'2008 BMW 335i 3.0L 98k miles',
author:'BimmerTech',
img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
problem:'P0401, coolant loss, white smoke. Dealer quoted $2,400 for EGR cooler.',
rabbitHole:[
{title:'Replace EGR Cooler',desc:'$800 part, failed again in 6 months.'}
],
fix:[
{title:'EGR Delete Kit',desc:'$200 block-off plates and software.'},
{title:'Tune Out Codes',desc:'MHD tune $300, disabled EGR monitoring.'}
],
cost:500,
dealerCost:2400,
saved:1900,
success:56,
cat:'egr',
verdict:'No more issues, more power, better MPG. Common N54 upgrade.',
proTip:'EGR delete for off-road use only. But it solves chronic EGR cooler problems.'
},
{
id:41,
code:'P0401',
title:'Carbon Cleaning on Valves',
vehicle:'2010 VW GTI 2.0T 87k miles',
author:'VW_Fan',
img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80',
problem:'P0401, rough idle, carbon buildup. Shop quoted $800 for intake cleaning.',
rabbitHole:[
{title:'Sea Foam',desc:'$25, helped slightly but didn't fix it.'}
],
fix:[
{title:'Walnut Blasting',desc:'Bought walnut blaster kit $150.'},
{title:'DIY Cleaning',desc:'Removed intake, blasted valves clean.'}
],
cost:150,
dealerCost:800,
saved:650,
success:83,
cat:'egr',
verdict:'Runs like new. Direct injection engines need this every 80k miles.',
proTip:'DIY walnut blasting saves hundreds. TSI/TFSI engines need this service.'
},
// TRANSMISSION (4 stories)
{
id:42,
code:'TRANS',
title:'Fluid Change Fixed Shifting',
vehicle:'2005 Honda Accord 3.0L 145k miles',
author:'HondaMike',
img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
problem:'Hard shifting, jerking, shop quoted $3,800 for transmission rebuild.',
rabbitHole:[Lucas, no change.'}
],
fix:[
{title:'Drain and Fill',desc:'3x drain/fill with Honda DW-1 fluid.'},
{title:'Total Cost',desc:'$90 in fluid, did it myself over 2 weeks.'}
],
cost:90,
dealerCost:3800,
saved:3710,
success:94,
cat:'trans',
verdict:'Shifts like new. Honda transmissions are sensitive to fluid condition.',
proTip:'Try fluid change before rebuild. Use ONLY Honda fluid, not universal ATF.'
},
{
id:43,
code:'TRANS',
title:'Shift Solenoid Replacement',
vehicle:'2004 Ford F-150 5.4L 178k miles',
author:'FordTech',
img:'https://images.unsplash.com/photo-1605893474270-1d0d9f8e8c72?w=400&q=80',
problem:'Stuck in 2nd gear, limp mode. Shop quoted $2,200 for transmission.',
rabbitHole:[
{title:'Code Scan',desc:'P0750 shift solenoid A malfunction.'}
],
fix:[
{title:'Drop Pan',desc:'Removed transmission pan.'},
{title:'Replace Solenoid',desc:'$45 solenoid, $30 filter/gasket.'}
],
cost:75,
dealerCost:2200,
saved:2125,
success:76,
cat:'trans',
verdict:'Back to normal shifting. Solenoid was stuck, not transmission failure.',
proTip:'Solenoid codes often mean bad solenoid, not bad transmission. Check first!'
},
{
id:44,
code:'TRANS',
title:'Range Sensor Adjustment',
vehicle:'2006 Toyota Camry 2.4L 134k miles',
author:'ToyotaTom',
img:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
problem:'No reverse, hard to start. Shop quoted $1,800 for transmission.',
rabbitHole:[
{title:'Transmission Additive',desc:'$25 Sensor',desc:'Loosened 2 bolts, aligned properly.'},
{title:'Test All Gears',desc:'Reverse works, starts normally now.'}
],
cost:0,
dealerCost:1800,
saved:1800,
success:52,
cat:'trans',
verdict:'10 minute adjustment. Sensor thought it was in drive when in park.',
proTip:'No reverse often means range sensor adjustment, not transmission failure.'
},
{
id:45,
code:'TRANS',
title:'Torque Converter Lockup',
vehicle:'2003 Chevy Silverado 5.3L 198k miles',
author:'ChevyMike',
img:'https://images.unsplash.com/photo-1532581140115-ca3d01490791?w=400&q=80',
problem:'Stalling at stops, shuddering. Shop quoted $1,200 for torque converter.',
rabbitHole:[
{title:'New Torque Converter',desc:'$400 part, didn't fix stalling.'}
],
fix:[
{title:'Check TCC Solenoid',desc:'Found sticking TCC solenoid.'},
{title:'Replace Solenoid',desc:'$35 solenoid in side cover.'}
],
cost:35,
dealerCost:1200,
saved:1165,
success:61,
cat:'trans',
verdict:'No more stalling. TCC was staying locked up at idle.',
proTip:'Stalling at stops often means TCC solenoid, not torque converter.'
},
// SUSPENSION/STEERING (5 stories)
{
id:46,
code:'SUSP',
title:'End Links Fixed Clunking',
vehicle:'2004 Honda Accord 2.4L 167k miles',
author:'HondaMike',
img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
problem:'Clunking over bumps, shop quoted $800 for struts.',
rabbitHole:[
{title:'Replaced Struts',desc:'$400, still clunking. Wasn't struts.'}
],
fix:[
{title:'Check End Links',desc:'Found loose sway bar end links.'},
{title:'Replace End Links',desc:'$30 pair, 30 minutes with sockets.'}
],
cost:30,
dealerCost:800,saved:770,
success:88,
cat:'susp',
verdict:'Clunking gone. Always check end links before replacing struts!',
proTip:'End links are $30 and clunk when bad. Struts are $400+. Check cheap stuff first.'
},
{
id:47,
code:'SUSP',
title:'Power Steering Hose Leak',
vehicle:'2005 Toyota Camry 3.0L 156k miles',
author:'ToyotaTom',
img:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
problem:'Whining, fluid leak, hard steering. Shop quoted $650 for rack and pinion.',
rabbitHole:[
{title:'Added Stop Leak',desc:'$15, no change.'}
],
fix:[
{title:'Find Leak Source',desc:'Leak at pressure hose fitting, not rack.'},
{title:'Replace Hose',desc:'$45 hose, 1 hour to replace.'}
],
cost:45,
dealerCost:650,
saved:605,
success:74,
cat:'susp',
verdict:'No more leak, steering normal. Hose was leaking at crimp fitting.',
proTip:'Find the actual leak before assuming rack is bad. Often it's just a hose.'
},
{
id:48,
code:'SUSP',
title:'Ball Joint Press Tool',
vehicle:'2004 Ford F-150 5.4L 189k miles',
author:'FordTech',img:'https://images.unsplash.com/photo-1605893474270-1d0d9f8e8c72?w=400&q=80',
problem:'Loose ball joints, shop quoted $800 for control arms.',
rabbitHole:[
{title:'Control Arms',desc:'$400, but ball joints are pressed in.'}
],
fix:[
{title:'Buy Ball Joint Press',desc:'$60 loaner tool from AutoZone.'},
{title:'Press in New Joints',desc:'$80 for MOOG ball joints.'}
],
cost:140,
dealerCost:800,
saved:660,
success:57,
cat:'susp',
verdict:'Tight steering again. Press tool made it easy, saved hundreds.',
proTip:'Rent ball joint press. Don't replace whole control arm if just joint is bad.'
},
{
