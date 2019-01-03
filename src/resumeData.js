export default {
  name: 'Marc Sola',
  jobTitle: 'Full-Stack Developer',
  birthDate: '7th of March 1988',
  address: 'Francesc Macià 29, Santpedor (08251), Spain',
  telephone: '+34 636 290 957',
  email: 'marcsolanadal@gmail.com',
  employmentHistory: [
    {
      title: 'Javascript Developer',
      company: 'ATSistemas',
      location: 'Barcelona, Spain',
      period: {
        start: 'October 2015',
        end: 'July 2016'
      },
      description: `
        Developed a back-end project controlling the lifecycle of mobile applications with Node.js, 
        MySQL, Sequalize and Jenkins. \n
        Involment in various front-end mobile applicaitons form banking to augmented reality using 
        Cordova, HTML5, CSS3, Backbone, Angular, Dojo and plenty of javascript libraries.
      `
    },
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Micronax A.S.',
      location: 'Trondheim, Norway',
      period: {
        start: 'June 2014',
        end: 'December 2014'
      },
      description: `
        Programmed the interface between the server and the client in a Phonegap game
        using CoffeeScript, Node.js and other Full Stack technologies.
      `
    },
    {
      title: 'System Administrator',
      company: 'University of Barcelona',
      location: 'Barcelona, Spain',
      period: {
        start: 'April 2011',
        end: 'August 2013'
      },
      description: `
        Managed and maintained a RedHat cluster and network of medium size. Compiling and optimizing
        the linux kernel to improve the performance of some systems. Helping all network users.
      `
    },
    {
      title: 'Freelance C# Programmer',
      company: 'Coralsis S.L.',
      location: 'Sallent, Spain',
      period: {
        start: 'July 2009',
        end: 'August 2009'
      },
      description: `
        Developend an application to survey children in a classroom for the Kid's&Us English academy.
      `
    },
    {
      title: 'Junior C# Programmer',
      company: 'Inditex S.A.',
      location: 'Sallent, Spain',
      period: {
        start: 'April 2008',
        end: 'July 2008'
      },
      description: `
        Internship for the Higher Education Certificate. \n
        Support senior developers with several C# applications.
      `
    }
  ],
  education: [
    {
      title: 'University Degree in Electronics',
      school: 'University of Barcelona (UB)',
      period: '2009 - (near future)',
      additionalInfo: `ERASMUS in Norwegian University of Science and Technology (NTNU) 2013 - 2014.`
    },
    {
      title: 'Certificate of Higher Education in Computer Programming',
      school: 'Joviat School, Manresa',
      period: '2008 - 2009'
    }
  ],
  skills: {
    'System Administrator': [
      { name: 'Unix systems', level: 4 },
      { name: 'Bash', level: 3 },
      { name: 'Docker', level: 2 },
      { name: 'Networking', level: 3 },
      { name: 'Virtualization', level: 3 }
    ],
    'Full-Stack': [
      { name: 'Javascript', level: 5 },
      { name: 'Functional programming', level: 3 }
    ],
    'Soft Skills': ['Agile', 'Remote', 'Technical interviews']
  },
  languages: [
    { name: 'Catalan', level: 5 },
    { name: 'Spanish', level: 5 },
    { name: 'English', level: 4 }
  ]
};
