export const quizzesSectionData = {
  pretitle: 'TEST YOUR FOOTBALL KNOWLEDGE',
  headlinePart1: 'Think You Know',
  headlinePart2: 'Your Football?',
  subtitle: 'Challenge yourself with football trivia, test your knowledge and make your match predictions.',
  quizCard: {
    badge: 'Football Quiz',
    title: 'How well do you know Rangers FC?',
    subtitle: 'Put your football knowledge to the test with our sample supporter quiz.',
    stats: [
      { id: 'q', label: 'Questions', value: '10 Questions' },
      { id: 'd', label: 'Difficulty', value: 'Intermediate' },
      { id: 't', label: 'Time', value: '5 Minutes' }
    ],
    cta: 'Try Sample Quiz'
  },
  predictionCard: {
    badge: 'Next Match Prediction',
    title: 'Who do you think will win?',
    defaultSelected: 'opt-win',
    options: [
      { id: 'opt-win', label: 'Rangers Win', type: 'rangers' },
      { id: 'opt-draw', label: 'Draw', type: 'draw' },
      { id: 'opt-opp', label: 'Opponent Win', type: 'opponent' }
    ]
  },
  cta: 'Explore Quizzes & Predictions',
  note: 'Note: Quizzes and predictions are illustrative previews only, not live features.'
}
