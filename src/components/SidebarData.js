import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Johanna',
    path: '/Johanna',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Maths',
        path: '/Johanna/Maths',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Science',
        path: '/Johanna/Science',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Geography',
        path: '/Johanna/Geography',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'History',
        path: '/Johanna/History',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Sahana',
    path: '/Sahana',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Maths',
        path: '/Sahana/Maths',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Science',
        path: '/Sahana/Science',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Tamil',
        path: '/Sahana/Tamil',
        icon: <IoIcons.IoIosPaper />
      }
      ,
      {
        title: 'English',
        path: '/Sahana/Tamil',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Sign Out',
    path: '/signout',
    icon: <IoIcons.IoMdHelpCircle />
  }
];