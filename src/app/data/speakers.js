

// export const speakers = [
//   {
//     initials: 'MY',
//     name: 'Prof. Moustafa Youssef',
//     role: 'Invited Speaker',
//     affiliation: 'Professor, American University in Cairo',
//     bio: 'Expert in mobile and pervasive computing systems with strong focus on wireless sensing, IoT localization, and real-world deployment of smart systems.',
//     tags: ['IoT', 'wireless sensing'],
//     email: 'moustafa.youssef@aucegypt.edu',
//      image: '/speakers/moustafa.jpg'
//   },
//   // Spatio-temporal data mining, Graph Computation, and Scence Understanding.
//   {
//     initials: 'WL',
//     name: 'Prof. Wei Li',
//     role: 'Invited Speaker',
//     affiliation: 'Harbin Engineering University, Harbin, China',
//     bio: 'Research in  Spatio-temporal data mining, Graph Computation, and Scence Understanding.',
//     tags: ['Spatio-temporal', 'data mining','Graph Computation'],
//     email: 'wei.li@hrbeu.edu.cn',
//      image: '/speakers/weili.jpg'
//   },
//   // Edge Computing, Digital Twins,  Drone Computing, Internet of Things (IoT), and AI for industrial edge computing.
//   {
//     initials: 'RY',
//     name: 'Prof. Rahul Yadav',
//     role: 'Invited Speaker',
//     affiliation: 'Harbin Engineering University, Harbin, China',
//     bio: 'Works on Edge Computing, Digital Twins,  Drone Computing, Internet of Things (IoT), and AI for industrial edge computing',
//     tags: ['edge AI', 'Edge Computing','Internet of Things (IoT)'],
//     email: 'rahul@hrbeu.edu.cn',
//     image: '/speakers/rahul.jpg'
//   },
// ];
const BASE_PATH =
  process.env.NODE_ENV === 'production'
    ? '/ubicomp2026-quantum-tutorial'
    : '';

export const speakers = [
  {
    initials: 'MY',
    name: 'Prof. Moustafa Youssef',
    role: 'Lead Organizer',
    affiliation: 'Professor, American University in Cairo, New Cairo, Egypt',
    distinctions: [
      'ACM Fellow',
      'IEEE Fellow',
      'AAAS Fellow',
      'AAS Fellow'
    ],
    bio:
      'Professor at the American University in Cairo. His expertise includes mobile and pervasive computing, location determination systems, mobile and wireless networks, and quantum computing.',
    quantum:
      'Recently led tutorials and workshops on quantum computing for spatial systems and indoor positioning at IPIN 2024 and ACM SIGSPATIAL 2025. He has also delivered numerous keynotes and invited talks on leveraging quantum computing for location tracking systems.',
    awards:
      'University of Maryland Invention of the Year Award, TWAS-AAS-Microsoft Award, multiple Google Research Awards, Egyptian State Excellence Award, and numerous Best Paper and Runner-Up awards for his quantum computing work.',
    tags: [
      'Quantum Computing',
      'Pervasive Computing',
      'Wireless Networks',
      'Location Determination'
    ],
    email: 'moustafa.youssef@aucegypt.edu',
    image: `${BASE_PATH}/speakers/moustafa.jpg`
  },

  {
    initials: 'WL',
    name: 'Prof. Wei Li',
    role: 'Organizer',
    affiliation:
      'Professor, College of Computer Science and Technology, Harbin Engineering University, Harbin, China',
    distinctions: [
      'CCF Senior Member',
      'National-level Young Talent in China'
    ],
    bio:
      'Professor at Harbin Engineering University, China. His expertise includes spatial-temporal data mining and quantum computing.',
    quantum:
      'Developed QCloudSimpy, a Python-based quantum cloud simulator leveraging reinforcement learning.',
    awards:
      'Second Prize for Technical Invention of Heilongjiang Province, First Prize for Science and Technology Progress of State Grid, and Best Paper Award at CCF Conference, among others.',
    tags: [
      'Quantum Computing',
      'Spatial-Temporal Data Mining',
      'Quantum Cloud Computing',
      'Reinforcement Learning'
    ],
    email: 'wei.li@hrbeu.edu.cn',
    image: `${BASE_PATH}/speakers/weili.jpg`
  },

  {
    initials: 'RY',
    name: 'Prof. Rahul Yadav',
    role: 'Organizer',
    affiliation:
      'Associate Professor, College of Computer Science and Technology, Harbin Engineering University, Harbin, China',
    distinctions: [
      'Senior Member of IEEE'
    ],
    bio:
      'Associate Professor at Harbin Engineering University, China. His expertise includes mobile and edge computing and quantum cloud computing.',
    quantum:
      'Co-developed QCloudSimpy, a Python-based quantum cloud simulator.',
    awards:
      'Research contributions in mobile and edge computing and quantum cloud computing.',
    tags: [
      'Quantum Cloud Computing',
      'Mobile Computing',
      'Edge Computing'
    ],
    email: 'rahul@hrbeu.edu.cn',
    image: `${BASE_PATH}/speakers/rahul.jpg`
  }
];