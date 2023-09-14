import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { cssIcon, djangoIcon, githubIcon, gmailIcon, htmlIcon, javaIcon, javascriptIcon, materialUIIcon, mongodbIcon, mysqlIcon, nodejsIcon, pythonIcon, reactjsIcon, springBootIcon, tailwindcssIcon } from '../assets';

const user = [
  // Vietnamese
  {
    lastName: "Nguyễn Vân",
    firstName: "Anh",
    onPosition: "ReactJS Developer",
    university: "Trường Đại học Mở Thành phố Hồ Chí Minh",
    major: "Khoa học máy tính",
    educationTime: "08/2020",
    yearSchool: "Sinh viên năm 4",
    gpaScore: '3.8/4.0',
    careerShortTermGoal:
      `Là một sinh viên năm 4, 
      tôi muốn tìm một cơ hội để áp dụng những kiến thức mình đã học vào các dự án thực tế, 
      cũng như mong muốn được trở thành nhân viên của một công ty. Tiếp tục học hỏi và nâng cao trình độ.`,
    careerLongTermGoal: `Tiếp tục học hỏi và trở thành một Web Developer chuyên về cả front-end và back-end.`,
    dob: '09/10/2002',
    phoneNumber: '039 545 7434',
    email: 'anhnv.forwork@gmail.com',
    address: 'Quận Gò Vấp, thành phố Hồ Chí Minh',
    github: 'https://github.com/workanhnguyen',
    awards: [
      {
        time: '08/2020 - Hiện tại',
        name: 'Đạt 9/11 học kỳ nhận học bổng khuyến khích học tập.'
      },
      {
        time: '07/2023',
        name: 'Đạt học bổng "Sinh viên xuất sắc tiêu biểu năm 2023".'
      },
      {
        time: '03/2023',
        name: 'Đạt học bổng "Sinh viên 5 tốt năm 2023".'
      },
      {
        time: '12/2022',
        name: 'Đạt giải khuyến khích cuộc thi "Giải pháp phần mềm 24 giờ" của khoa Công nghệ thông tin.'
      },
    ],
    skills: [
      {
        skillName: "Front-end",
        programmingLanguages: [
          {
            icon: htmlIcon,
            name: 'HTML',
          },
          {
            icon: cssIcon,
            name: 'CSS',
          },
          {
            icon: javascriptIcon,
            name: 'JavaScript',
          },
        ],
        frameworks: [
          {
            icon: reactjsIcon,
            name: 'ReactJS',
          },
          {
            icon: tailwindcssIcon,
            name: 'Tailwind CSS',
          },
          {
            icon: materialUIIcon,
            name: 'Material UI',
          },
        ],
      },
      {
        skillName: "Back-end",
        programmingLanguages: [
          {
            icon: javaIcon,
            name: 'Java',
          },
          {
            icon: pythonIcon,
            name: 'Python',
          },
        ],
        frameworks: [
          {
            icon: springBootIcon,
            name: 'Spring Boot',
          },
          {
            icon: djangoIcon,
            name: 'Django',
          },
          {
            icon: springBootIcon,
            name: 'Spring MVC',
          },
        ],
      },
      {
        skillName: "Database",
        programmingLanguages: [
          {
            icon: mysqlIcon,
            name: 'MySQL',
          },
          {
            icon: mongodbIcon,
            name: 'MongoDB',
          },
        ],
      }
    ],
    english: [
      "Đạt chứng chỉ TOEIC 750 của IIG Vietnam.",
      "Có khả năng đọc hiểu tài liệu chuyên ngành.",
      "Giao tiếp ở mức cơ bản."
    ],
    projects: [
      {
        time: '07/2023 - 09/2023',
        name: 'Mạng xã hội cựu sinh viên.',
        numberOfMems: "02 thành viên",
        linkGithub: 'https://github.com/workanhnguyen/project_java',
        technologies: [
          {
            name: 'Front-end',
            techs: [
              {
                icon: javascriptIcon,
                name: 'JavaScript'
              },
              {
                icon: reactjsIcon,
                name: 'ReactJS'
              },
              {
                icon: tailwindcssIcon,
                name: 'Tailwind CSS'
              },
              {
                icon: materialUIIcon,
                name: 'Material UI'
              },
            ]
          },
          {
            name: 'Back-end',
            techs: [
              {
                icon: springBootIcon,
                name: 'Java Spring MVC'
              },
              {
                icon: mysqlIcon,
                name: 'MySQL'
              },
            ]
          }
        ],
        functions: [
          "Đăng nhập, đăng ký người dùng",
          "CRUD người dùng, bài viết, nhóm, thư mời.",
          "Cho phép người dùng nhắn tin theo thời gian thực (sử dụng Firebase).",
          "Nghiệp vụ thống kê số lượng người dùng, bài đăng của quản trị viên."
        ],
        roleInProjects: [
          "Phân tích nghiệp vụ hệ thống",
          "Thiết kế giao diện bằng ReactJS",
          "Fetch API và hiển thị dữ liệu."
        ]
      },
      {
        time: '12/2022 - 02/2023',
        name: 'Trang web hỗ trợ định hướng nghề nghiệp cho học sinh.',
        numberOfMems: "02 thành viên",
        linkGithub: 'https://github.com/workanhnguyen/career_orientation',
        technologies: [
          {
            name: 'Front-end',
            techs: [
              {
                icon: javascriptIcon,
                name: 'JavaScript'
              },
              {
                icon: reactjsIcon,
                name: 'ReactJS'
              },
            ]
          },
          {
            name: 'Back-end',
            techs: [
              {
                icon: djangoIcon,
                name: 'Django'
              },
              {
                icon: mysqlIcon,
                name: 'MySQL'
              },
            ]
          }
        ],
        functions: [
          "Đăng nhập, đăng ký người dùng",
          "CRUD người dùng, khảo sát.",
          "Cho phép người dùng làm khảo sát, sau đó phân tích và đưa ra gợi ý về ngành nghề phù hợp."
        ],
        roleInProjects: [
          "Phân tích nghiệp vụ hệ thống",
          "Thiết kế giao diện bằng ReactJS",
          "Fetch API và hiển thị dữ liệu."
        ]
      },
      {
        time: '02/2023 - 03/2023',
        name: 'Airbnb clone.',
        numberOfMems: "01 thành viên",
        linkGithub: 'https://github.com/workanhnguyen/airbnb_app',
        technologies: [
          {
            name: 'Front-end',
            techs: [
              {
                icon: javascriptIcon,
                name: 'JavaScript'
              },
              {
                icon: reactjsIcon,
                name: 'ReactJS'
              },
              {
                icon: tailwindcssIcon,
                name: 'Tailwind CSS'
              },
            ]
          },
          {
            name: 'Back-end',
            techs: [
              {
                icon: nodejsIcon,
                name: 'NodeJS'
              },
              {
                icon: mongodbIcon,
                name: 'MongoDB'
              },
            ]
          }
        ],
        functions: [
          "Đăng nhập, đăng ký người dùng",
          "CRUD bài đăng.",
        ],
        roleInProjects: [
          "Thiết kế giao diện bằng ReactJS",
          "Fetch API và hiển thị dữ liệu."
        ]
      }
    ],
    contacts: [
      {
        icon: githubIcon,
        link: 'https://github.com/workanhnguyen' 
      },
      {
        icon: gmailIcon,
        link: 'anhnv.forwork@gmail.com' 
      },
    ],
  },
];

export default user;
