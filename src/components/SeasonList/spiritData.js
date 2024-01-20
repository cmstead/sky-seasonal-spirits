export const seasonData = {
  Gratitude: {
    'Greeting Shaman': {
      visited: true
    },
    'Leaping Dancer': {
      visited: true
    },
    'Provoking Performer': {
      visited: true
    },
    'Saluting Protector': {
      visited: true
    },
    'Sassy Drifter': {
      visited: true
    },
    'Stretching Guru': {
      visited: true
    }
  },
  Lightseekers: {
    'Crab Whisperer': {
      visited: true
    },
    'Doublefive Light Catcher': {
      visited: true
    },
    'Laidback Pioneer': {
      visited: true
    },
    'Piggyback Lightseeker': {
      visited: true
    },
    'Shushing Light Scholar': {
      visited: true
    },
    'Twirling Champion': {
      visited: true
    }
  },
  Belonging: {
    'Boogie Kid': {
      visited: true
    },
    'Confetti Cousin': {
      visited: true
    },
    'Hairtoussle Teen': {
      visited: true
    },
    'Pleaful Parent': {
      visited: true
    },
    'Sparkler Parent': {
      visited: true
    },
    'Wise Grandparent': {
      visited: true
    }
  },
  Rhythm: {
    'Admiring Actor': {
      visited: true
    },
    'Festival Spin Dancer': {
      visited: true
    },
    'Respectful Pianist': {
      visited: true
    },
    'Thoughtful Director': {
      visited: true
    },
    'Troupe Greeter': {
      visited: true
    },
    'Troupe Juggler': {
      visited: true
    }
  },
  Enchantment: {
    'Crab Walker': {
      visited: true
    },
    'Indifferent Alchemist': {
      visited: true
    },
    'Nodding Muralist': {
      visited: true
    },
    'Playfighting Herbalist': {
      visited: true
    },
    'Scarecrow Farmer': {
      visited: true
    },
    'Snoozing Carpenter': {
      visited: true
    }
  },
  Sanctuary: {
    'Chill Sunbather': {
      visited: true
    },
    'Grateful Shell Collector': {
      visited: true
    },
    'Hiking Grouch': {
      visited: true
    },
    'Jelly Whisperer': {
      visited: true
    },
    'Rallying Thrillseeker': {
      visited: true
    },
    'Timid Bookworm': {
      visited: true
    }
  },
  Prophecy: {
    'Prophet of Air': {
      visited: true
    },
    'Prophet of Earth': {
      visited: true
    },
    'Prophet of Fire': {
      visited: true
    },
    'Prophet of Water': {
      visited: true
    }
  },
  Dreams: {
    'Bearhug Hermit': {
      visited: true
    },
    'Dancing Performer': {
      visited: false
    },
    'Peeking Postman': {
      visited: true
    },
    'Spinning Mentor': {
      visited: true
    }
  },
  Assembly: {
    'Baffled Botanist': {
      visited: true
    },
    'Chuckling Scout': {
      visited: true
    },
    'Daydream Forester': {
      visited: true
    },
    'Marching Adventurer': {
      visited: true
    },
    'Scaredy Cadet': {
      visited: true
    },
    'Scolding Student': {
      visited: true
    }
  },
  'The Little Prince': {
    'Beckoning Ruler': {
      visited: true
    },
    'Gloating Narcissist': {
      visited: true
    },
    'Slouching Soldier': {
      visited: true
    },
    'Sneezing Geographer': {
      visited: true
    },
    'Star Collector': {
      visited: true
    },
    'Stretching Lamplighter': {
      visited: true
    }
  },
  Flight: {
    'Light Whisperer': {
      visited: false
    },
    'Lively Navigator': {
      visited: true
    },
    'Talented Builder': {
      visited: true
    },
    'Tinkering Chimesmith': {
      visited: true
    }
  },
  Abyss: {
    'Anxious Angler': {
      visited: true
    },
    'Bumbling Boatswain': {
      visited: false
    },
    'Cackling Cannoneer': {
      visited: true
    },
    'Ceasing Commodore': {
      visited: false
    }
  },
  Performance: {
    'Forgetful Storyteller': {
      visited: false
    },
    'Frantic Stagehand': {
      visited: false
    },
    'Mellow Musician': {
      visited: false
    },
    'Modest Dancer': {
      visited: false
    }
  },
  Shattering: {
    'Ancient Light 1': {
      visited: false
    },
    'Ancient Light 2': {
      visited: false
    },
    'Ancient Darkness 1': {
      visited: false
    },
    'Ancient Darkness 2': {
      visited: false
    }
  },
  AURORA: {
    'Mindful Miner': {
      visited: false
    },
    'Running Wayfarer': {
      visited: false
    },
    'Seed of Hope': {
      visited: false
    },
    'Warrior of Love': {
      visited: false
    }
  },
  Remembrance: {
    'Bereft Veteran': {
      visited: false
    },
    'Pleading Child': {
      visited: false
    },
    'Tiptoeing Tea-Brewer': {
      visited: false
    },
    'Wounded Warrior': {
      visited: false
    }
  },
  Passage: {
    'Melancholy Mope': {
      visited: false
    },
    'Oddball Outcast': {
      visited: false
    },
    'Overactive Overachiever': {
      visited: false
    },
    'Tumbling Troublemaker': {
      visited: false
    }
  },
  Moments: {
    'Ascetic Monk': {
      visited: false
    },
    'Jolly Geologist': {
      visited: false
    },
    'Nightbird Whisperer': {
      visited: false
    },
    'Reassuring Ranger': {
      visited: false
    }
  },
  Revival: {
    'Vestige of a Deserted Oasis': {
      visited: false
    },
    'Memory of a Lost Village': {
      visited: false
    },
    'Echoes of an Abandoned Refuge': {
      visited: false
    },
    'Remnant of a Forgotten Haven': {
      visited: false
    }
  }, 
  'Nine Colored Deer' : {
    'Herb Gatherer': {
      visited: false
    },
    'Hunter': {
      visited: false
    },
    'Princess': {
      visited: false
    },
    'Feudal Lord': {
      visited: false
    }
  }
}

function getSpiritDefaultValues (spiritData) {
  return Object.keys(spiritData).reduce((result, spiritName) => {
    result[spiritName] = false
    return result
  }, {})
}

export const spiritData = Object.keys(seasonData).reduce(
  (result, seasonName) => {
    result[seasonName] = getSpiritDefaultValues(seasonData[seasonName])
    return result
  },
  {}
)
