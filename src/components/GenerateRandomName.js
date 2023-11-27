const adjectives = [
    'Flying', 'Running', 'Fierce', 'Mighty', 'Gallant',
    'Ancient', 'Swift', 'Cunning', 'Noble', 'Brave',
    'Daring', 'Bold', 'Valiant', 'Quick', 'Wise',
    'Thundering', 'Silent', 'Red', 'Blue', 'Golden'
  ];
  
  const nouns = [
    'Eagles', 'Wolves', 'Tigers', 'Dragons', 'Lions',
    'Warriors', 'Knights', 'Spectres', 'Ghosts', 'Shadows',
    'Riders', 'Ravens', 'Sharks', 'Bears', 'Phoenixes',
    'Gladiators', 'Titans', 'Pirates', 'Ninjas', 'Samurais'
  ];
  
  function generateRandomTeamName() {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adjective} ${noun}`;
  }
  
  export function generateUniqueTeamNames(count) {
    const uniqueNames = new Set();
    
    // Assuming the possible combination of adjectives and nouns is larger than the requested count
    while(uniqueNames.size < count) {
      const newName = generateRandomTeamName();
      uniqueNames.add(newName);
    }
    
    return Array.from(uniqueNames);
  }
  