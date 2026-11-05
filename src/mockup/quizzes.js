export const quizzesData = {
  badge: 'Interactive Fan Challenges',
  headline: 'PUT YOUR FOOTBALL KNOWLEDGE TO THE TEST.',
  description: 'Climb the community ladder by answering weekly historical trivia and predicting matchday outcomes.',
  trivia: {
    badge: 'CARD A — CLUB TRIVIA',
    title: 'European Glory Quiz',
    topic: 'Barcelona 1972 Cup Winners Cup',
    question: 'In which iconic year did Rangers triumph 3-2 against Dynamo Moscow in Barcelona to lift European silverware?',
    difficulty: 'Medium',
    xpReward: '+250 Fan XP',
    options: [
      { id: 't-1', text: '1967', isCorrect: false },
      { id: 't-2', text: '1972', isCorrect: true },
      { id: 't-3', text: '1978', isCorrect: false },
      { id: 't-4', text: '1984', isCorrect: false }
    ],
    explanation: 'Correct! On 24 May 1972 at Camp Nou, Barcelona, Rangers claimed the European Cup Winners\' Cup.'
  },
  prediction: {
    badge: 'CARD B — MATCH PREDICTION',
    title: 'Weekend Derby Clash',
    fixture: 'Rangers FC vs Aberdeen FC',
    tournament: 'Scottish Premiership • Matchday 24',
    venue: 'Ibrox Stadium, Glasgow',
    kickoff: 'Saturday • 15:00 GMT',
    xpReward: '+500 Prediction Points',
    options: [
      { id: 'p-1', label: 'Rangers 2 - 0 Win', odds: 'High Confidence' },
      { id: 'p-2', label: 'Rangers 3 - 1 Win', odds: 'Fan Favorite' },
      { id: 'p-3', label: '1 - 1 Stalemate Draw', odds: 'Tough Battle' },
      { id: 'p-4', label: 'Rangers 1 - 0 Gritty Clean Sheet', odds: 'Tactical Edge' }
    ]
  }
}

