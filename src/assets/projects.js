import React from 'react';
import ctpcw_screenshot from "./ctpcw_screenshot.png";
import forum_gif from "./forum_walkthrough.gif";
import http_server_screenshot from "./http_server.png";
import recover_screenshot from "./recover_screenshot.png";

const projects = [
    {
        "id": "0",
        "name": "College Application Discussion Forum",
        "category": "Webapp",
        "tech": ["React", "JavaScript", "HTML/CSS", "Supabase"],
        "descShort": "Forum where users can discuss the different aspects of applying to college by posting and commenting on each other's posts.",
        "descLong": {
          "what": ["In this webapp built primarily using the React JavaScript library, users can create posts on the topic of applying to colleges. Each post has a title and can optionally contain a text description and an image. Once created, it is available for viewing by all users via the home feed.", 
                    "Users have the agency to edit or delete a post they created by providing the secret key they chose while creating the post. Other users can interact with a post by liking it or leaving a comment.", 
                    "In the home feed, the user can sort posts either by creation date or number of likes. The user can also filter posts by title."
                  ],
          "how": ["The frontend visuals were built using basic HTML/CSS whereas the bulk of the backend was built using the React JavaScript library.", 
                    "Posts are stored within a database, for which I utilized an opensource and lightweight alternative to Firebase called Supabase."
                  ],
          "notes": ["One unique challenge I encountered had to do with the search bar using which the user can filter posts. I first tried implementing it from within the navbar (implemented as an upper-level route that wraps all other routes). However, this made it very difficult to pass the search input to the main page component, where the API fetch call was being made. Thus, I decided to implement the search bar from within the main page instead of the navbar." 
                  ],
        },
        "mediaPreviewSrc": forum_gif,
        "mediaAlt": "Walkthrough gif showing features of College Application Discussion Forum",
        "linkSrc": "https://collegeappforum.netlify.app/",
        "repoSrc": "https://github.com/AbenezerA/forum"
    },
    {
      "id": "1",
      "name": "CTP Summer 2022 Course Works Webapp",
      "category": "Webapp",
      "tech": ["Flask", "Python", "HTML/CSS", "MySQL", "Jinja"],
      "descShort": "A Webapp that provides students enrolled in the CTP mentorship program the ability to create personalized accounts where they'll find instruction videos, assigned homework, resources and announcements in an organized format.",
      "descLong": {
        "what": ["I designed and built a webapp using Python's Flask framework which allowed students enrolled in the CTP Ethiopia mentorship program to create accounts and register into the program's database, where they could access mentor-released instruction videos, homework, and guides all organized in one place.", 
                  "Previously, mentors at CTP Ethiopia used to release their instructional content on Telegram and YouTube channels which were prone to getting cluttered, making it hard for mentees to find the content they were looking for. In addition, there was no consistent way of releasing homework or assignments. The webapp serves to solve these problems of irregularity and inconsistency by presenting all content to the mentee via a few clicks from the dashboard. Content is grouped by subject and by week, both of which the user can select for easily using navigation menus.",
                  "In addition to the mentee-facing dashboard, the webapp includes an interface for mentors to easily upload instruction material and for admins to maintain the student database. The inclusion of these interfaces improved the teaching efficiency and expedited the digitization of our instruction material."
                ],
        "how": ["The aesthetic of this webapp was inspired by the final project of the CS50x online course given by Harvard University. This project uses no JavaScript code. Instead, the frontend was built using HTML/CSS in addition to Jinja, the popular web template engine for Python, to keep the layout of the different pages consistent.", 
                  "Virtually every feature of this program was implemented using Flask and the functions defined under this library. One such function allows the calling of SQL queries from within Python code, which are used to store and fetch the user's account credentials from the program's databse."
                ],
        "notes": ["I built this webapp during the summer of 2022 while serving as the tech team lead at Counseling and Test Preparation Ethiopia (CTP Ethiopia), a non-profit organization that aims to mentor highschool students in Ethiopia as they apply to colleges in the US. The organization itself was set up and is currently ran by Ethiopian students enrolled in universities across the US who return to Ethiopia every summer to mentor in person.",
                  "As tech team lead, I was responsible for organizing and supervising projects that would improve the organization's digital reach and make it easier for our metees to access our content through digital means. I had seen first-hand our outdated and inefficient system of uploading to our YouTube and Telegram channels and thus decided to design and build this courseworks webapp to solve the problems of the organization.",
                  "This webapp also serves as the final project for Harvard's CS50x course, from which I learned several of the skills that went into building this project, including Flask, Jinja, and MySQL queries."
                ],
      },
      "mediaPreviewSrc": ctpcw_screenshot,
      "mediaAlt": "Screen cap of CTP Summer 2022 Course Works Webapp",
      "linkSrc": "https://youtu.be/0o8IxUn11Z0",
      "repoSrc": "https://github.com/AbenezerA/ctp2022_courseworks"
  },
  {
    "id": "2",
    "name": "Multi-process Static Web Server",
    "category": "Command Line Program",
    "tech": ["C", "Sockets API"],
    "descShort": "A command line program in C that simulates a multi-thread static web server that serves files from a provided root directory to an HTTP client.",
    "descLong": {
      "what": ["As part of a final project for an advanced programming class, I created a web server using C that serves files from a provided root directory to an HTTP client. The user selects the port number and root directory from where the requested files will be fetched from the command line. After the server has been properly established, the user can use any HTTP client, i.e. a browser or a CLI command such as wget or curl, to view their requested file.",
                "The server can handle multiple simultaneous HTTP requests, is robust against client failure, and works with both command-line clients and browsers.", 
                ],
      "how": ["The program is written entirely in C and utilizes UNIX file descriptors from the Linux Sockets API to establish a socket connection between server and client.", 
                "Furthermore, the program has signal handlers that detect when multiple clients establish an HTTP request simultaneously. When this occurs, the signal handlers fork the program into multiple child processes, allowing the server to handle multiple requests at a time."
              ],
      "notes": ["This program is part of the penultimate lab for COMS 3157 Advanced Programming in C class at Columbia University. It was originally a single-process server capable of handling a single HTTP request at a time, but I later developed it into a multi-process server."
              ],
    },
    "mediaPreviewSrc": http_server_screenshot,
    "mediaAlt": "Screen cap of Multi-process Static Web Server",
    "linkSrc": "",
    "repoSrc": "https://github.com/AbenezerA/static-web-server"
  },
  {
    "id": "3",
    "name": "Image Recoverer",
    "category": "Command Line Program",
    "tech": ["C"],
    "descShort": "Command-line program in C that recovers deleted JPEG files from an input forensic image file by scanning for JPEG signatures in the file's byte sequence.",
    "descLong": {
      "what": ["I built a command-line program in C that recovers deleted JPEG files from an input forensic image file by scanning for JPEG signatures in the file’s byte sequence. The user inputs the name of the forensic file and dumps the JPEG files into the directory where the program was called."
              ],
      "how": ["This program is written entirely in C and depends on the specific bit patterns or \"signatures\" that distinguish JPEG files from other file formats. The program loops over the provided forensic file looking for these signature bytes that signal the start of a JPEG file and outputs the bits that follow until an end signature or a long sequence of null bytes are encountered.",
              "All such byte sequences are dumped into the working directory."
              ],
      "notes": ["I built this program as part of a problem set for Harvard's CS50x Introductory to Programming course."
              ],
    },
    "mediaPreviewSrc": recover_screenshot,
    "mediaAlt": "Screen cap of CTP Summer 2022 Course Works Webapp",
    "linkSrc": "",
    "repoSrc": "https://github.com/AbenezerA/recover"
  }

]  

export default projects;