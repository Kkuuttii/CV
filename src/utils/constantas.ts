interface courseInfo {
  title: string;
  text: string;
  time: string;
}

interface educationInfo {
  key: number;
  collapseTitle: string;
  items: courseInfo[];
}

export const educationInfo: educationInfo[] = [
  {
    key: 1,
    collapseTitle: 'College Degree',
    items: [
      {
        title: 'Belarusian State University of Culture and Arts',
        text: "Bachelor's Degree with a specialisation in Management of international cultural relations ",
        time: '2016-2020',
      },
    ],
  },
  {
    key: 2,
    collapseTitle: 'Programming',
    items: [{ title: 'Hexlet courses', text: 'Frontend developer course with a mentor ', time: '2022' }],
  },
  {
    key: 3,
    collapseTitle: 'English',
    items: [
      {
        title: 'English courses "English Discussions"',
        text: 'English language learning ',
        time: '2023-to this day',
      },
      {
        title: 'English course',
        text: 'English language learning ',
        time: '2014-2016',
      },
    ],
  },
  {
    key: 4,
    collapseTitle: 'Additional education',
    items: [{ title: 'Belarusian State University', text: 'School of entrepreneurship ', time: '2015' }],
  },
];
