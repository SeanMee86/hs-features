const {blue, orange, darkblue, gray, yellow} = {
  blue: {bColor: '#0399cf', starburst: 'blue-halfburst.png', fColor: '#fff'},
  orange: {bColor: '#f2733d', starburst: 'orange-halfburst.png', fColor: '#fff'},
  darkblue: {bColor: '#0c2f68', starburst: 'darkblue-halfburst.png', fColor: '#fff'},
  gray: {bColor: '#d1d1d1', starburst: 'gray-halfburst.png', fColor: '#636363'},
  yellow: {bColor: '#ffde05', starburst: 'yellow-halfburst.png', fColor: '#636363'},
}

const row1 = [
  {
    nameAndTitle: 'Julie Rosemond, Restorative CNA, 34 years of service',
    quote: 'The best compliment we hear is that we’re heroes doing a good job.',
    imgSrc: 'julie-rosemond.png',
    color: blue,
  },
  {
    nameAndTitle: 'Adrienne Ladson, CNA, 2 years of service',
    quote: 'Real experience happens here. I’m learning so much beyond what I learned in classes.',
    imgSrc: 'adrienne-ladson.png',
    color: orange,
  },
  {
    nameAndTitle: 'Mary Stuch, RN, Unit Manager, 6 months of service',
    quote: 'I appreciate the opportunity to learn, grow, challenge, teach, and impact.',
    imgSrc: 'mary-stuch.png',
    color: darkblue,
  },
]

const row2 = [
  {
    nameAndTitle: 'Elizabeth Roddy, LPN, 9 years of service',
    quote: 'Get ready to hold yourself to a higher standard and join a great family!',
    imgSrc: 'elizabeth-roddy.png',
    color: yellow,
  },
  {
    nameAndTitle: 'Evelyn Guy, Social Service Director, 28 years of service',
    quote: 'I enjoy listening to residents, giving good care, ' +
      'assisting with their needs, and laughing and crying with them.',
    imgSrc: 'evelyn-guy.png',
    color: darkblue,
  },
  {
    nameAndTitle: 'Vernasa Jacobs, CNA, 16 years of service',
    quote: 'I give residents my love and time. \n' +
      'I look forward to making them smile.',
    imgSrc: 'vernasa-jacobs2.png',
    color: gray,
  },
]

const row3 = [
  {
    nameAndTitle: 'Sara Shumway,  RN, DON, 30 years of service',
    quote: 'My favorite day was when I became Director of Nursing. ' +
      'I completed my long-term goal with South Atlantic’s support.',
    imgSrc: 'sara-shumway.png',
    color: orange,
  },
  {
    nameAndTitle: 'Cassandra Rice, Receptionist/CNA, 14 years of service',
    quote: 'SAHC is a great place to work, with opportunities to advance.',
    imgSrc: 'cassandra-rice.png',
    color: blue,
  },
  {
    nameAndTitle: 'Misty Waldrop, Business Office Manager/HR, 13 years of service',
    quote: 'Going to work here isn’t a job, it’s a calling.',
    imgSrc: 'misty-waldrop.png',
    color: yellow,
  },
]

const row4 = [
  {
    nameAndTitle: 'Donna Thomas, Assistant Business Office Manager, 22 years',
    quote: 'Working here, you can be a difference maker.',
    imgSrc: 'donna-thomas.png',
    color: gray,
  },
  {
    nameAndTitle: 'Ashley Abercrombie, ADON, RN, 1 year of service',
    quote: 'South Atlantic is consistent, comfortable, understanding, and flexible.',
    imgSrc: 'ashley-abercrombie.png',
    color: yellow,
  },
  {
    nameAndTitle: 'Peg Odom-Hall, Activities Director, 20 years of service',
    quote: 'There are too many favorite days to list! ' +
      'The residents laugh at all the fun we have.',
    imgSrc: 'peg-odom-hall.png',
    color: blue,
  },
]

const row5 = [
    {
      nameAndTitle: 'Jaquetta Frazier, Business Office Manager, 8 years of service',
      quote: 'I hear so much praise for our facilities and our employees.',
      imgSrc: 'jacquetta-frazier.png',
      color: yellow,
    },
    {
      nameAndTitle: 'Todd Griggs, Senior Administrator, 22 years of service',
      quote: 'Management cares about employees at all levels. ' +
        'And they reward staff for a job well done.',
      imgSrc: 'todd-griggs.png',
      color: darkblue,
    },
    {
      nameAndTitle: 'Emily Ross, CNA, 1 year of service',
      quote: 'I look forward to helping residents every day and making their days better.',
      imgSrc: 'emily-ross.png',
      color: orange,
    },
  ]

export default [row1, row2, row3, row4, row5]

