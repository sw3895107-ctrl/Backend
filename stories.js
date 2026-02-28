// All your story objects go here
const stories = [
  {
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

module.exports = stories;
