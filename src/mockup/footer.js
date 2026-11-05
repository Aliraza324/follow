export const footerData = {
  brand: {
    name: 'FOLLOWON',
    description: 'Bringing Rangers supporters together through conversations, opinions and shared passion for football.'
  },
  socials: [
    { id: 'facebook', label: 'Facebook' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'x', label: 'X' }
  ],
  exploreColumn: {
    title: 'Explore',
    links: [
      { label: 'Home', targetId: 'hero' },
      { label: 'About FollowOn', targetId: 'about' },
      { label: 'Community', targetId: 'community' },
      { label: 'Features', targetId: 'polls' }
    ]
  },
  communityColumn: {
    title: 'Community',
    links: [
      { label: 'Polls & Debates', targetId: 'polls' },
      { label: 'Player Ratings', targetId: 'ratings' },
      { label: 'Quizzes', targetId: 'quizzes' },
      { label: 'Leaderboard', targetId: 'leaderboard' }
    ]
  },
  touchColumn: {
    title: 'Get in Touch',
    items: [
      { id: 'contact', label: 'Contact Us', type: 'mail', modalTitle: 'Contact Us', modalDesc: 'Send a message to the FollowOn team.' },
      { id: 'email', label: 'Email Placeholder', type: 'mail', modalTitle: 'Email Support', modalDesc: 'Reach our team directly at contact@followon.com' }
    ]
  },
  legalColumn: {
    title: 'Legal',
    items: [
      { id: 'privacy', label: 'Privacy Policy', type: 'doc', modalTitle: 'Privacy Policy', modalDesc: 'Our commitment to protecting supporter data and privacy.' },
      { id: 'terms', label: 'Terms & Conditions', type: 'scale', modalTitle: 'Terms & Conditions', modalDesc: 'Community rules and platform terms of service.' }
    ]
  },
  copyright: '© 2026 FollowOn. All rights reserved.'
}
