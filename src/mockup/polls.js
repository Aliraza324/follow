export const pollsData = {
  badge: 'Fan Opinions & Voting',
  headline: 'EVERY FAN HAS AN OPINION.',
  description: 'Vote on key match moments, debate tactical decisions, and see what thousands of fellow supporters think in real-time.',
  notice: 'Interactive demo mode: Cast your vote locally to preview instant visual community feedback.',
  polls: [
    {
      id: 'poll-1',
      category: 'PLAYER OF THE MATCH',
      question: 'Who was our standout performer in the weekend victory?',
      totalVotes: 4892,
      closingTime: 'Closes in 6 hours',
      options: [
        { id: 'opt-1-1', label: 'Jack Butland (7 Crucial Saves & Clean Sheet)', percentage: 46, votes: 2250 },
        { id: 'opt-1-2', label: 'Tom Lawrence (Opener & 5 Key Passes)', percentage: 31, votes: 1516 },
        { id: 'opt-1-3', label: 'James Tavernier (Captain Performance & Assist)', percentage: 15, votes: 734 },
        { id: 'opt-1-4', label: 'Dujon Sterling (Defensive Workhorse)', percentage: 8, votes: 392 }
      ]
    },
    {
      id: 'poll-2',
      category: 'TACTICAL TURNING POINT',
      question: 'What was the defining tactical turning point of the game?',
      totalVotes: 3410,
      closingTime: 'Closes tomorrow',
      options: [
        { id: 'opt-2-1', label: 'Switching to aggressive high counter-press at 55\'', percentage: 52, votes: 1773 },
        { id: 'opt-2-2', label: 'Impact of the tactical double substitution on 68\'', percentage: 26, votes: 886 },
        { id: 'opt-2-3', label: 'Compact low defensive block during the storm', percentage: 14, votes: 477 },
        { id: 'opt-2-4', label: 'Set-piece execution and corner deliveries', percentage: 8, votes: 274 }
      ]
    },
    {
      id: 'poll-3',
      category: 'TRANSFER STRATEGY',
      question: 'Which position needs the most urgent reinforcement?',
      totalVotes: 6120,
      closingTime: 'Live Season Poll',
      options: [
        { id: 'opt-3-1', label: 'Clinical, physical No. 9 center-forward', percentage: 48, votes: 2937 },
        { id: 'opt-3-2', label: 'Dynamic box-to-box midfield engine', percentage: 29, votes: 1775 },
        { id: 'opt-3-3', label: 'Explosive left winger with 1v1 dribbling', percentage: 16, votes: 979 },
        { id: 'opt-3-4', label: 'Dominant ball-playing center-back', percentage: 7, votes: 429 }
      ]
    }
  ]
}

