import React from 'react';
import ctpcw_screenshot from "./ctpcw_screenshot.png";

const projects = [
    {
        "id": "0",
        "name": "CTP Summer 2022 Course Works Webapp",
        "category": "Webapp",
        "tech": ["Flask", "Python", "HTML/CSS", "SQLite3"],
        "descShort": "Webapp designed to provide students of the CTP mentorship program with all instructional content in an organized manner.",
        "descLong": ["Designed and built a web app using Flask which allowed students enrolled in the CTP Ethiopia mentorship program to create accounts and register into the organization’s database, where they could access mentor-released instruction videos, homework, and guides, thus enhancing user experience", 
                      "Implemented interfaces for admin to keep record of registered students and for mentors to easily upload instruction material, improving teaching efficiency and expediting the digitization of our instruction material.",
                      "Text 2"],
        "mediaPreviewSrc": ctpcw_screenshot,
        "mediaSrc": "",
        "mediaAlt": "Screen cap of CTP Summer 2022 Course Works Webapp",
        "linkSrc": "https://youtu.be/0o8IxUn11Z0",
        "repoSrc": "https://github.com/AbenezerA/ctp2022_courseworks"
    },
    {
      "id": "1",
      "name": "CTP Summer 2022 Course Works Webapp",
      "category": "Webapp",
      "tech": ["Flask", "Python", "HTML/CSS", "MySQL"],
      "descShort": "A Webapp that provides students enrolled in the CTP mentorship program the ability to create personalized accounts where they'll find instruction videos, assigned homework, resources and announcements in an organized format.",
      "descLong": "<p>Designed and built a web app using Flask which allowed students enrolled in the CTP Ethiopia mentorship program to create accounts and register into the organization’s database, where they could access mentor-released instruction videos, homework, and guides, thus enhancing user experience<\/p><p>Implemented interfaces for admin to keep record of registered students and for mentors to easily upload instruction material, improving teaching efficiency and expediting the digitization of our instruction material.<\/p>",
      "mediaPreviewSrc": ctpcw_screenshot,
      "mediaSrc": "",
      "mediaAlt": "Screen cap of CTP Summer 2022 Course Works Webapp",
      "linkSrc": "https://youtu.be/0o8IxUn11Z0",
      "repoSrc": "https://github.com/AbenezerA/ctp2022_courseworks"
  }
]  

export default projects;