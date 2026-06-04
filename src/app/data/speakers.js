

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
    // role: 'Lead Organizer',
    affiliation: 'Professor, American University in Cairo, Egypt',
    distinctions:
      'ACM Fellow, IEEE Fellow, AAS Fellow, AAAS Fellow',
    bio: 'Expert in mobile and pervasive computing, location determination systems, mobile/wireless networks, and quantum computing.',
    quantum:
      'Led tutorials and workshops on quantum computing for spatial systems and indoor positioning at IPIN 2024 and ACM SIGSPATIAL 2025. Delivered keynotes and invited talks on quantum computing for location tracking systems.',
    awards:
      'University of Maryland Invention of the Year Award, TWAS-AAS-Microsoft Award, Egyptian State Award for Excellence, multiple Google Research Awards, and Best Paper awards.',
    tags: [
      'Quantum Computing',
      'Pervasive Computing',
      'Wireless Networks',
      'Localization'
    ],
    email: 'moustafa.youssef@aucegypt.edu',
    image: `${BASE_PATH}/speakers/moustafa.jpg`
  },

  {
  initials: 'WL',
  name: 'Prof. Wei Li',
  // role: 'Organizer',
  affiliation: 'Professor, Harbin Engineering University, Harbin, China',
  distinctions: [
    'IEEE/ACM Member',
    'CCF Senior Member',
    'Deputy Director, Heilongjiang Provincial Laboratory of New Generation Network Technologies and Information Security'
  ],
  bio: 'Professor at Harbin Engineering University with research expertise in database systems, graph data management and mining, spatiotemporal data analysis, and location-based services. His work focuses on intelligent data systems and next-generation computing applications.',
  quantum: 'Received his Ph.D. from the University of New South Wales (UNSW) in 2019 and served as a Research Fellow at UNSW before joining Harbin Engineering University. He has published over 60 research papers and actively serves the research community through editorial and conference leadership roles.',
  awards: 'Associate Editor of JIHMSP and Guest Editor for Applied Sciences. Program Committee member for AAAI, ICASSP, and DASFAA, and reviewer for leading venues including TKDE, TKDD, ICDE, VLDB, and ACM Multimedia.',
  tags: [
    'Database Systems',
    'Graph Mining',
    'Spatiotemporal Data',
    'Location-based Services',
    'Data Analytics'
  ],
  email: 'wei.li@hrbeu.edu.cn',
  image: `${BASE_PATH}/speakers/weili.jpg`
},

  {
    initials: 'RY',
    name: 'Prof. Rahul Yadav',
    // role: 'Organizer',
    affiliation: 'Associate Professor, Harbin Engineering University, China',
    distinctions: 'Senior Member IEEE, CCF Member',
    bio: 'Works on mobile and edge computing, system resource optimization, and quantum cloud computing.',
    quantum:'Developing a Python-based Quantum Cloud Computing Simulator.',
    awards:
      'Best Paper Award for edge computing research.',
      // Quantum Cloud ComputingIntelligent Edge ComputingIoTVehicular ComputingDigital Twins
    tags: [
      'Quantum Cloud Computing',
      'Intelligent Edge Computing',
      'IoT ',
      'Vehicular Computing'
    ],
    email: 'rahul@hrbeu.edu.cn',
    image: `${BASE_PATH}/speakers/rahul.jpg`
  }
];
