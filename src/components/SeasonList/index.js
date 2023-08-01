import SpiritList from '../SpiritList'

const spirits = {
  Gratitude: {
    'Greeting Shaman': false,
    'Leaping Dancer': false,
    'Provoking Performer': false,
    'Saluting Protector': false,
    'Sassy Drifter': false,
    'Stretching Guru': false
  },
  Lightseekers: {
    'Crab Whisperer': false,
    'Doublefive Light Catcher': false,
    'Laidback Pioneer': false,
    'Piggyback Lightseeker': false,
    'Shushing Light Scholar': false,
    'Twirling Champion': false
  },
  Belonging: {
    'Boogie Kid': false,
    'Confetti Cousin': false,
    'Hairtoussle Teen': false,
    'Pleaful Parent': false,
    'Sparkler Parent': false,
    'Wise Grandparent': false
  },
  Rhythm: {
    'Admiring Actor': false,
    'Festival Spin Dancer': false,
    'Respectful Pianist': false,
    'Thoughtful Director': false,
    'Troupe Greeter': false,
    'Troupe Juggler': false
  },
  Enchantment: {
    'Crab Walker': false,
    'Indifferent Alchemist': false,
    'Nodding Muralist': false,
    'Playfighting Herbalist': false,
    'Scarecrow Farmer': false,
    'Snoozing Carpenter': false
  },
  Sanctuary: {
    'Chill Sunbather': false,
    'Grateful Shell Collector': false,
    'Hiking Grouch': false,
    'Jelly Whisperer': false,
    'Rallying Thrillseeker': false,
    'Timid Bookworm': false
  },
  Prophecy: {
    'Prophet of Air': false,
    'Prophet of Earth': false,
    'Prophet of Fire': false,
    'Prophet of Water': false
  },
  Dreams: {
    'Bearhug Hermit': false,
    'Dancing Performer': false,
    'Peeking Postman': false,
    'Spinning Mentor': false
  },
  Assembly: {
    'Baffled Botanist': false,
    'Chuckling Scout': false,
    'Daydream Forester': false,
    'Marching Adventurer': false,
    'Scaredy Cadet': false,
    'Scolding Student': false
  },
  'The Little Prince': {
    'Beckoning Ruler': false,
    'Gloating Narcissist': false,
    'Slouching Soldier': false,
    'Sneezing Geographer': false,
    'Star Collector': false,
    'Stretching Lamplighter': false
  },
  Flight: {
    'Light Whisperer': false,
    'Lively Navigator': false,
    'Talented Builder': false,
    'Tinkering Chimesmith': false
  },
  Abyss: {
    'Anxious Angler': false,
    'Bumbling Boatswain': false,
    'Cackling Cannoneer': false,
    'Ceasing Commodore': false
  },
  Performance: {
    'Forgetful Storyteller': false,
    'Frantic Stagehand': false,
    'Mellow Musician': false,
    'Modest Dancer': false
  },
  AURORA: {
    'Mindful Miner': false,
    'Running Wayfarer': false,
    'Seed of Hope': false,
    'Warrior of Love': false
  },
  Remembrance: {
    'Bereft Veteran': false,
    'Pleading Child': false,
    'Tiptoeing Tea-Brewer': false,
    'Wounded Warrior': false
  },
  Passage: {
    'Melancholy Mope': false,
    'Oddball Outcast': false,
    'Overactive Overachiever': false,
    'Tumbling Troublemaker': false
  },
  Moments: {
    'Ascetic Monk': false,
    'Jolly Geologist': false,
    'Nightbird Whisperer': false,
    'Reassuring Ranger': false
  }
}

export default function SeasonList () {
  return (
    <ol>
      {Object.keys(spirits).map(seasonName => (
        <li>
          <strong>{seasonName}</strong>
          <SpiritList
            key={seasonName}
            spirits={spirits[seasonName]}
          ></SpiritList>
        </li>
      ))}
    </ol>
  )
}
