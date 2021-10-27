import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  imgVal: boolean;
  
  public jobs: any[] = [
    {
      organistion_name: "TCS ION",
      role:"Data science Intern",
      start_date:"May 2020",
      end_date:"June 2020",
      projects: [`EmotAI: A Machine Learning-based Emotion Classifying
      Web App, in which emotion are classified into Happy, Sad,
      Fear, Anger, Bad, Surprise, Disgust from a collection of
      English text, sentences or large paragraph, which also
      handle abbreviations.`,`github.com/antonyjm462/EmotAI `,`Front-End: HTML,CSS,BootStrap`,`Back-End: Python`,`FrameWork: Flask`],
      workdone: [ "Built a system that automates the detection of different emotions from textual comments and feedback"]
    },
    {
      organistion_name: "Wiinnova Software Labs",
      role: "Software Developer Intern",
      start_date:"August 2019",
      end_date:"September 2019",
      projects: [`Todo (TaskManager): A tool for dividing and tracking
      projects in a company, which uses Slack API for Slack
      integration and Authentication and PHP REST API for
      interfacing the MySQL database.`,`github.com/antonyjm462/todotaskmanager`,
      `Front-End: Angular`,`Back-End: TypeScript`,`Database: Firebase, MySQL`],
      workdone: [ `Built a new tool for the Winnova software project-execution
      team which allows keeping track of the project progress`,`
      Tested company's product FEEDBACQ`]
    },
    {
      organistion_name: "ZineMind Technology",
      role:"Software Developer Intern",
      start_date:"July 2019",
      end_date:"July 2019",
      projects: [`Minitacts: A contact listing web app for saving important
      contacts, which include authentication through Gmail,
      Google account.`,`github.com/antonyjm462/Minitacts`,`Front-end: Angular, Bootstrap, Angular Material`,
      `Back-end: TypeScript`,`Database: Firebase.`],
      workdone: [ "Built a contact look tool for ZineMind. It is built on top of the Angular Progressive Web Application model."]
    },
    {
      organistion_name: "Pace Lab",
      role:"Data science Intern",
      start_date:"June 2019",
      end_date:"July 2019",
      projects: [`https://github.com/antonyjm462/Machine-learning
      https://github.com/antonyjm462/Deep-Learning`],
      workdone: [ `Explored different Machine language and Deep Learning
      techniques for Hand Writing Recognition,
      Sentimental Analysis, Image Classifiers, Object Detection.`]
    },
  ];

  public intro: string = `I'm a software engineer based in India, Kerala specializing in developing (and occasionally designing) exceptional Cross-Platform applications, Google Action applications, and everything in between. also interested in Ethical Hacking, Blockchain, Artificial Intelligence.`;

  public about_me: string = `Hello! I'm Antony J Malakkaran, a software engineer based in Kochi, Kerala.Meticulous and Motivated individual working towards a Bachelor of Technology in Computer Science and Engineering at Rajagiri School of Engineering and Technology. Dynamic and Creative software engineer with a strong background in Python, C, Java, and Javascript with Previous 3 internship experience in Web-Development and Data Science. I have Solid live project experience on Google Home Application development. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide perfect, performant experiences. I work on a wide variety of interesting and meaningful projects on a daily basis.`;

  public headline: string = `I Create Useful Applications For Web`;

  public skillText: any[] = [
    `⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications`,
    `⚡ Progressive Web Applications ( PWA ) in Angular`,
    `⚡ Experienced in making Cross-Platform Apps Ionic FrameWorks`,
    `⚡ REST API creating using Google Cloud Functions`,
    `⚡ Creating Backend With Python Django FrameWork`,
    `⚡ Solid live project experience on Google Home Application development`,
    `⚡ Experienced in making ML and DL Models`,
    `⚡ Experienced in developing application using MEAN stack`,
  ]


  public skills: any = {
    language:{
      list:["Python","C","java","JavaScript","TypeScript","PHP","ruby","HTML","CSS","SCSS"],
      list_data:["Python","C","Java","JavaScript","TypeScript","PHP","Ruby","HTML","CSS","SCSS"],
      data:[
        {data: [40,0,0,0,0,50,40,40,0,0], label: '2017'},
        {data: [80,60,0,0,40,60,60,60,0,0], label: '2018'},
        {data: [80,80,40,40,50,70,50,60,0,0], label: '2019'},
        {data: [90,80,60,80,80,80,80,60,50,30], label: '2020'}
      ]
    },
    database:{
      list:["MySql","mongoDB","OracleDB"]
    },
    os:{
      list:["Windows","Linux"]
    },
    framework:{
      list:["Angular","Django","Ionic","Gatsby"]
    },
    tech:{
      list:["Machine Learning","Deep learning","Blockchain","IOT","Web Development","UI Design","Ethical Hacking"]
    }, 
    application: {
      list:["Firebase","Actions on Google","Cloud Functions","Git","GitHub","Bootstrap"]
    },
  }
  public projects: any[] = [
    {
      project_name: "LetzQuiz",
      featured: true,
      project_data: `Quizmaster is a voice-assisted application for Amazon
      Alexa and Google Home (Nest). This app can also be used on a mobile phone running Android and iOS.  
      This project comprises 3 main components. 
          * Quiz Questions Database 
          * User management 
          * Backend logic `,
      dependency: ["Firebase","Google Actions","DialogFlow","Google Cloud Functions"],
      web: "https://antonyjm462.github.io/LetzQuiz/",
      github: "https://github.com/antonyjm462/LetzQuiz",
      img: "../../../assets/project-img/LETZQUIZ/",
      last_no: 4,
      first_no: 0,
      index:[1,2,3,4]
    },
    {
      project_name: "Fixel",
      featured: true,
      project_data: `A Deep learning project which targets improving the camera quality for budget phones, the Fixel app provides the user capability to capture images through Fixel App made of Ionic and sent captured image to web API. The Fixel Web Api Is bundled with ProSR GAN for converting low-resolution images to high-resolution images.`,
      dependency: ["Ionic","Django","Google Cloud Functions","Firebase","ProSR GAN"],
      web: "#",
      github: "https://github.com/antonyjm462/Fixel",
      img: "../../../assets/project-img/FIXEL/",
      last_no: 2,
      first_no: 0,
      index:[1,2]
    },
    {
      project_name: "Libma",
      featured: true,
      project_data: `Ionic App and Web App for effective library
      management made for the Rajagiri
       College 
      Department library which includes QR scanner
      for book issuing and other
       features of library
      management in a single App. 
      Firebase used as the database and Ionic
      as front end Tool.`,
      dependency: ["Ionic","Firebase","QR Code"],
      web: "https://libma-rset.firebaseapp.com/",
      github: "https://github.com/antonyjm462/Libma",
      img: `../../../assets/project-img/LIBMA/`,
      last_no: 4,
      first_no: 0,
      index:[1,2,3,4]
    },
    {
      project_name: "DoStuff",
      featured: true,
      project_data: `A Kanban type Project Division Application 
      which includes a messaging
       Application, Alert
      center for alerting Latest Task allotted. Includes 
      time tracking with the
       due date setting etc.
      Front end using Angular, Database using 
      MySql and used PHP REST API
       to interface
      with the database and front end.`,
      dependency: ["Angular","MySQL","PHP"],
      web: "#",
      github: "https://github.com/antonyjm462/DoStuff",
      img: "../../../assets/project-img/DOSTUFF/",
      last_no: 9,
      first_no: 2,
      index:[1,2,3,4,5,6,7,8,9]
    },
    {
      project_name: "LemonInk",
      featured: false,
      project_data: `Lemonink is a developer group that I founded to solve
      problems students are facing in college by making
      applications, along with that help young aspiring
      developers to master new tools and technologies.
      https://lemon-ink.web.app`,
      dependency: ["Angular","Chart.js","Email.js"],
      web: "https://lemon-ink.web.app",
      github: "https://github.com/antonyjm462/Lemonink",
      img: "assest/image/"
    },
    {
      project_name: "p5js-Angular",
      featured: false,
      project_data: `This project contains all my P5js projects including Snake game and endless Map
      https://graphic-96d64.firebaseapp.com`,
      dependency: ["Angular","P5.js"],
      web: "https://graphic-96d64.firebaseapp.com",
      github: "https://github.com/antonyjm462/p5js-Angular",
      img: "assest/image/"
    },
    {
      project_name: "PocketDB",
      featured: false,
      project_data: `PocketDB is a Django project which contains Api for CRUD functions in Sqlite Database `,
      dependency: ["Django","Sqlite3"],
      web: "#",
      github: "https://github.com/antonyjm462/PocketDB",
      img: "assest/image/"
    },
    {
      project_name: "EmotAI",
      featured: false,
      project_data: `A Machine Learning-based Emotion Classifying
      Web App, in which emotion are classified into Happy, Sad,
      Fear, Anger, Bad, Surprise, Disgust from a collection of
      English text, sentences or large paragraph, which also
      handle abbreviations.`,
      dependency: ["Flask","Keras"],
      web: "antonyj.pythonanywhere.com/",
      github: "github.com/antonyjm462/EmotAI",
      img: "assest/image/"
    },
  ];

  public blog: any[] = [
    {
      name:"angular",
      content:"best"
    },
    {
      name:"angular",
      content:"best"
    },
  ];

  public certification: any[] = [
    {
      name:"IBM Blockchain Foundation for Developers",
      organisation:"IBM",
    },
    {
      name:"Neural Networks and Deep Learning",
      organisation:"Deeplearning.ai ",
    },
    {
      name:"Introduction to Deep Learning & Neural Networks with Keras",
      organisation:"IBM",
    },
    {
      name:"Machine Learning with Python: A Practical Introduction",
      organisation:"IBM",
    },
    {
      name:"Ethical Hacking",
      organisation:"Internshala",
    },
    {
      name:"Basics of Scrum, Agile and Project Delivery.",
      organisation:"Udemy",
    },
    {
      name:"Introduction to MongoDB",
      organisation:"MongoDB Inc",
    },
    {
      name:"Angular 9 Masterclass with TypeScript, Firebase & Material",
      organisation:"Udemy",
    },
    {
      name:"The Complete Front-End Web Development Course",
      organisation:"Udemy",
    },
    {
      name:"Learn Bootstrap 4: Create Modern Responsive Websites",
      organisation:"Udemy",
    },
  ];

  public contact: string = "I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!";
  // public imgValChanged: BehaviorSubject<number> = new BehaviorSubject<number>(this.imgVal);
  public imgValChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.imgVal);

  constructor() { 
  }

  // incImgVal(){
  //   this.imgVal+= 1;
  //   // if(this.imgVal == 5){
  //   //   this.imgVal = 1;
  //   // }
  //   this.imgValChanged.next(this.imgVal);
  // }

  incImgVal(){
    this.imgVal = true;
    this.imgValChanged.next(this.imgVal);
    this.imgVal = false;
  }


  get_last(project){
    let last = 0;
    for(let i=0;i<this.projects.length;i++){
      if(this.projects[i].project_name == project.project_name){
        last = this.projects[i].last_no;
        break;
      }
    }
    return last;
  }

}
