import React from 'react';
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { Badge } from '../ui/badge';
import { useRef } from 'react';
import { GithubIcon } from '../ui/github';
import {
 Carousel,
 CarouselContent,
 CarouselDots,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from '../ui/carousel';
import { ScrollArea } from '../ui/scroll-area';
import { ArrowUpRightIcon } from '../ui/arrow-up-right';

//project images
import SmartSpend1 from '../../assets/projects/smartSpend/smart-spend-1.png';
import SmartSpend2 from '../../assets/projects/smartSpend/smart-spend-2.png';
import SmartSpend3 from '../../assets/projects/smartSpend/smart-spend-3.png';
import SmartSpend4 from '../../assets/projects/smartSpend/smart-spend-4.png';
import SmartSpend5 from '../../assets/projects/smartSpend/smart-spend-5.png';
import Emsys1 from '../../assets/projects/emsys/emsys-1.png';
import Emsys2 from '../../assets/projects/emsys/emsys-2.png';
import Emsys3 from '../../assets/projects/emsys/emsys-3.png';
import Emsys4 from '../../assets/projects/emsys/emsys-4.png';
import Emsys5 from '../../assets/projects/emsys/emsys-5.png';
import WeatherSnap1 from '../../assets/projects/weather-snap-1.png';
import WeatherSnap2 from '../../assets/projects/weather-snap-2.png';
import WeatherSnap3 from '../../assets/projects/weather-snap-3.png';
import Tefmasys1 from '../../assets/projects/tefmasys/tefmasys-1.jpg';
import Tefmasys2 from '../../assets/projects/tefmasys/tefmasys-2.jpg';
import Tefmasys3 from '../../assets/projects/tefmasys/tefmasys-3.png';
import Tefmasys4 from '../../assets/projects/tefmasys/tefmasys-4.png';
import Iot1 from '../../assets/projects/iot/iot-1.jpg';
import Iot2 from '../../assets/projects/iot/iot-2.jpg';
import Iot3 from '../../assets/projects/iot/iot-3.PNG';
import Rathaya1 from '../../assets/projects/rathaya/rathaya-1.png';
import Rathaya2 from '../../assets/projects/rathaya/rathaya-2.png';
import Rathaya3 from '../../assets/projects/rathaya/rathaya-3.png';
import Pemcore1 from '../../assets/projects/pemcore/pemcore-1.png';
import Pemcore2 from '../../assets/projects/pemcore/pemcore-2.png';
import Pemcore3 from '../../assets/projects/pemcore/pemcore-3.png';
import Pemcore4 from '../../assets/projects/pemcore/pemcore-4.png';

const projects = [
 {
  title: 'Smart Spend 💸',
  image: [SmartSpend1, SmartSpend2, SmartSpend3, SmartSpend4, SmartSpend5],
  description:
   'SmartSpend is a full-stack web application that helps users track income and expenses, manage multiple accounts, set budgets, and gain actionable financial insights.',
  seeMore1:
   'SmartSpend is a full-stack, web-based personal finance and expenses management application designed to help users track income and expenses, manage multiple accounts, set monthly budgets, and gain actionable financial insights. The system goes beyond basic expense tracking by introducing automation, recurring transactions, smart budget alerts, and AI-powered financial reports, helping users develop better spending habits and make informed financial decisions 📊.',
  seeMore2:
   'The application is built with Next.js (App Router) and React, featuring secure authentication using Clerk, a type-safe backend powered by Prisma with a PostgreSQL (Supabase) database, and serverless background processing using Inngest. Key features include AI-based receipt scanning, recurring expense automation, budget alert emails, and monthly AI-generated financial reports using Google Gemini AI 🤖. SmartSpend also implements rate limiting and bot protection with Arcjet, responsive UI with Tailwind CSS and shadcn/ui, and rich data visualizations using Recharts, making it a secure, scalable, and production-ready financial management system ☁️.',
  github: 'https://github.com/Upasara/Smart-Spend.git',
  link: 'https://smart-spend-delta-opal.vercel.app/',
  stack1: ['Next.js', 'Prisma', 'Gemini API'],
  stack2: [
   'Next.js',
   'Tailwind CSS',
   'Shadcn UI',
   'Prisma',
   'Clerk',
   'Inngest',
   'Gemini API',
   'Arcjet',
   'Recharts',
  ],
 },
 {
  title: 'EMSys 👩🏻‍💻',
  image: [Emsys1, Emsys2, Emsys3, Emsys4, Emsys5],
  description:
   'EMSys is a full-stack web-based HR system that centralizes employee records, departments, salaries, and leave management, replacing manual and spreadsheet-based workflows.',
  seeMore1:
   'EMSys is a full-stack, web-based Employee Management and HR system developed to digitize and streamline employee administration processes. It replaces manual and spreadsheet-based workflows with a secure, centralized platform for managing employee records, departments, salaries, and leave operations. The system supports role-based access for administrators and employees, providing transparency, efficiency, and improved decision-making through real-time dashboards and summaries 📊.',
  seeMore2:
   'Built using React (Vite) on the frontend and Node.js, Express, and MongoDB Atlas on the backend, EMSys focuses on security, scalability, and responsive design. Key features include employee and department management, leave handling, salary management with Excel export, and JWT-based authentication. The application is currently deployed on Vercel for demonstration purposes and is designed for easy migration to paid hosting for production use ☁️.',
  github: 'https://github.com/Upasara/EMSys.git',
  link: 'https://pemco-emsys.vercel.app/',
  stack1: ['React', 'MongoDB', 'Node.js'],
  stack2: [
   'React',
   'Tailwind CSS',
   'Node.js',
   'Express.js',
   'MongoDB',
   'JWT',
   'Axios',
   'Recharts',
   'XLSX',
  ],
 },
 {
  title: 'Weather Snap 🌤️',
  image: [WeatherSnap1, WeatherSnap2, WeatherSnap3],
  description:
   'WeatherSnap is a responsive, web-based weather forecasting application that provides real-time weather information based on city search or user’s current location.',
  seeMore1:
   'WeatherSnap is a responsive, web-based weather forecasting application that provides real-time weather information based on city search or user’s current location. The application displays current weather conditions, hourly forecasts, and a 5-day forecast, along with detailed highlights such as humidity, pressure, wind speed, visibility, “feels like” temperature, sunrise and sunset times, offering users a clear and complete view of weather conditions ☀️🌧️.',
  seeMore2:
   'The application is built using HTML, CSS, JavaScript, and Tailwind CSS, and integrates the OpenWeatherMap API for live weather, forecast, geolocation, and air quality data. It features dynamic UI updates, API-driven data rendering, geolocation-based weather detection, and animated user interactions using AOS. WeatherSnap focuses on clean UI design, efficient API handling, and real-time data visualization, making it a practical and user-friendly weather application 🌍.',
  github: 'https://github.com/Upasara/Weather-App.git',
  link: 'https://weather-app-rouge-ten-35.vercel.app/',
  stack1: ['HTML', 'Java Script', 'OpenWeatherMap API'],
  stack2: [
   'HTML',
   'Tailwind CSS',
   'CSS',
   'Java Script',
   'OpenWeatherMap API',
   'AOS',
  ],
 },
 {
  title: 'TeFMaSys 🍃',
  image: [Tefmasys1, Tefmasys2, Tefmasys3, Tefmasys4],
  description:
   'TEFMASYS is a dual-platform tea farmer management system that improves communication and transparency between farmers and tea factory management in Sri Lanka.',
  seeMore1:
   'TEFMASYS is a dual-platform tea farmer management system consisting of a mobile application for farmers and a web-based admin panel for tea factory managers. The system was designed to improve communication, transparency, and efficiency in the tea collection process by digitizing farmer data, earnings, pricing updates, and operational messages across the tea supply chain in Sri Lanka.',
  seeMore2:
   'The mobile application, built with Flutter, allows farmers to view weekly tea leaf collections, pricing updates, total earnings, and historical performance charts directly from their smartphones 📱. It also includes real-time notifications, graph-based insights, and a chatbot interface to assist farmers with quick queries, ensuring timely access to important information and reducing dependency on manual communication.',
  seeMore3:
   'The web application, developed using React and TypeScript, serves as an admin dashboard for tea factory managers. It enables administrators to manage farmer records, handle complaints, and publish announcements and updates efficiently. Both platforms are powered by Firebase, providing authentication, real-time database synchronization, cloud storage, and push notifications, resulting in a scalable, reliable, and production-ready system that modernizes a traditional industry 🌱.',
  github:
   'https://github.com/Upasara/Tea_Farmer_Management_System-Mobile_App.git',
  link: '',
  stack1: ['Flutter', 'Firestore', 'React'],
  stack2: [
   'Flutter',
   'Firebase Auth',
   'Firestore',
   'Firebase Messaging',
   'React',
   'TypeScript',
  ],
 },
 {
  title: 'Smart Irrigation System 🌊',
  image: [Iot1, Iot2, Iot3],
  description:
   'The Smart Irrigation System is an IoT-enabled agriculture solution designed to improve water efficiency and support optimal crop growth through real-time environmental monitoring.',
  seeMore1:
   'The Smart Irrigation System is an IoT-enabled agriculture solution designed to improve water efficiency and support optimal crop growth through real-time environmental monitoring. The system uses sensors to measure soil moisture, temperature, humidity, and sunlight, with data collected and transmitted via an ESP8266 WiFi module to a Firebase Realtime Database. This enables continuous tracking of field conditions and helps reduce water wastage while maintaining healthy crop conditions 🌧️🌡️.',
  seeMore2:
   'A custom mobile application allows users to monitor live sensor readings and control irrigation remotely, providing greater flexibility and automation in farm management 📱. The system supports real-time data synchronization and remote actuator control through Firebase, demonstrating a practical application of IoT, cloud integration, and mobile development. This project highlights the use of technology in sustainable farming, combining embedded systems, cloud services, and mobile interfaces into a complete end-to-end solution ☁️🌾.',
  github: 'https://github.com/Upasara/Smart-Irrigation-System_IOT.git',
  link: '',
  stack1: ['Arduino', 'Kotlin', 'Firestore'],
  stack2: [
   'Arduino',
   'Kotlin',
   'Firestore',
   'ESP8266',
   'DHT11',
   'Soil Moisture',
   'LDR',
  ],
 },
 {
  title: 'Rathaya 🚗',
  image: [Rathaya1, Rathaya2, Rathaya3],
  description:
   'Rathaya is a full-stack, web-based auto parts ordering platform designed to simplify how customers discover, verify, and purchase vehicle spare parts from a trusted auto shop.',
  seeMore1:
   'Rathaya is a full-stack, web-based auto parts ordering platform designed to simplify how customers discover, verify, and purchase vehicle spare parts from a trusted auto shop. The user-facing application allows customers to register, search for required parts, place orders, and communicate with the shop in real time through an integrated chat system 📲. The platform also supports post-delivery payment, ensuring trust and customer satisfaction while providing a smooth and reliable online shopping experience 🌐.',
  seeMore2:
   'The system includes a dedicated admin panel built for auto shop owners to efficiently manage inventory, update part details, track orders, and monitor stock levels 📦. The backend is developed using Node.js, Express, and MongoDB, with Socket.IO enabling real-time communication between users and administrators. Rathaya demonstrates practical full-stack development skills by combining secure APIs, real-time features, and structured data management to streamline business operations and improve customer engagement 🖥️.',
  github: 'https://github.com/Upasara/Rathaya.git',
  link: '',
  stack1: ['Angular.js', 'Node.js', 'MongoDB'],
  stack2: [
   'Angular.js',
   'Node.js',
   'Express.js',
   'MongoDB',
   'Socket.IO',
   'JWT',
  ],
 },
 {
  title: 'PEMcore 🖥️',
  image: [Pemcore1, Pemcore2, Pemcore3, Pemcore4],
  description:
   'Designed and implemented a secure centralized data storage system to replace fragmented, department-level file handling at P. E. Mathew & Company.',
  seeMore1:
   'Designed and implemented a secure centralized data storage system to replace fragmented, department-level file handling at P. E. Mathew & Company. The solution consolidated all organizational data into a single, well-structured storage environment, improving accessibility, consistency, and operational efficiency 📂⚙️. Department-wise folder segregation, controlled access permissions, and a structured backup strategy ensured smooth day-to-day operations while reducing human error and data duplication.',
  seeMore2:
   'To enhance security and reliability, the system was configured with multiple protection layers including BitLocker drive encryption 🔐, firewall hardening, antivirus management, secure boot options, and a 3-2-1 backup strategy for disaster recovery 💾. A custom Python-based firewall automation script was implemented to block known malicious IPs, strengthening network protection 🚫🌐. This project reflects a practical, real-world implementation of data security, system administration, and IT infrastructure best practices, ensuring long-term scalability, data protection, and business continuity for the firm.',
  github: 'https://github.com/Upasara/PEMcore.git',
  link: '',
  stack1: ['Python', 'Network Architectures', 'Windows Firewall'],
  stack2: [
   'Python',
   'Windows',
   'Network Architectures',
   'Windows Firewall',
   'Firewall Automation',
  ],
 },
];

const Projects = ({ id }) => {
 const iconRef = useRef([]);
 const iconRef2 = useRef([]);
 return (
  <section id={id} className='min-h-screen p-5 md:p-10 lg:px-20 '>
   <h1
    className='text-center text-indigoo-600 text-shadow-sm font-poppins font-semibold text-4xl lg:text-5xl mb-5 pt-10 pb-10 '
    data-aos='fade-up'
   >
    Projects
   </h1>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>
    {projects.map((project, i) => (
     <Drawer>
      <DrawerTrigger asChild>
       <div data-aos='fade-up' data-aos-delay={i * 100}>
        <Card
         key={i}
         className='p-0 hover:scale-105 transition-all shadow-md  hover:shadow-lg cursor-pointer font-inter border-2 border-indigoo-100 hover:shadow-indigoo-100 duration-300'
        >
         <CardHeader className='p-2.5 pb-0'>
          <Carousel className=' rounded-md w-full h-64  bg-transparent'>
           <CarouselContent>
            {project.image.map((img, i) => (
             <CarouselItem key={i}>
              <img
               src={img}
               alt={img}
               className='rounded-md w-full h-64 object-cover'
              />
             </CarouselItem>
            ))}
           </CarouselContent>
           <CarouselDots />
          </Carousel>
         </CardHeader>
         <CardContent className='px-5 pb-5'>
          <CardTitle>
           {/* Tech Stack */}
           <div className='flex flex-wrap gap-1.5 pb-3'>
            {project.stack1.map((tech, i) => (
             <Badge
              key={i}
              variant='secondary'
              className='bg-indigoo-50 text-indigoo-400'
             >
              {tech}
             </Badge>
            ))}
           </div>
          </CardTitle>
          <CardDescription>
           <div>
            <div className='pb-3 font-medium text-indigoo-800 font-poppins tracking-wide text-shadow-2xs text-2xl '>
             {project.title}
            </div>
            <div className='pb-10 text-justify'>
             {project.description}
             <span className='ml-1 tracking-wide font-semibold  text-indigoo-700 '>
              See More...
             </span>
            </div>
           </div>
           <div className='flex items-center justify-between px-2'>
            {project.github && (
             <Button
              variant='outline'
              size='sm'
              onClick={(e) => e.stopPropagation()}
              className=' bg-indigoo-600 text-white/90 border-0 shadow-sm hover:text-white hover:bg-indigoo-700 hover:shadow-md hover:scale-110 duration-300'
              onMouseEnter={() => iconRef2.current[i]?.startAnimation()}
              onMouseLeave={() => iconRef2.current[i]?.stopAnimation()}
             >
              <a href={project.github} className='flex text-xs font-semibold'>
               <GithubIcon
                ref={(el) => (iconRef2.current[i] = el)}
                className='relative z-10 '
               />
               <span className=' ml-1 relative z-10'>Github</span>
              </a>
             </Button>
            )}
            {project.link && (
             <Button
              variant='outline'
              asChild
              size='sm'
              onClick={(e) => e.stopPropagation()}
              className='bg-indigoo-600 text-white/90 border-0 shadow-sm hover:text-white hover:bg-indigoo-700 hover:shadow-md hover:scale-110 duration-300'
              onMouseEnter={() => iconRef.current[i]?.startAnimation()}
              onMouseLeave={() => iconRef.current[i]?.stopAnimation()}
             >
              <a href={project.link} className=' text-xs font-semibold '>
               <ArrowUpRightIcon
                ref={(el) => (iconRef.current[i] = el)}
                className='relative z-10'
               />
               <span className='relative z-10'>Live Demo</span>
              </a>
             </Button>
            )}
           </div>
          </CardDescription>
         </CardContent>
        </Card>
       </div>
      </DrawerTrigger>
      <DrawerContent>
       <ScrollArea className='h-[85vh] font-inter'>
        <h2 className='text-center text-lg md:text-2xl pt-5  font-medium text-indigoo-800 font-poppins tracking-wide text-shadow-2xs'>
         {project.title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 p-5 md:px-15 md:py-10'>
         <div className='shadow-md h-52 md:h-80 w-full'>
          <Carousel>
           <CarouselContent>
            {project.image.map((image, i) => (
             <CarouselItem key={i}>
              <img
               src={image}
               className='rounded-md h-52 md:h-80 w-full object-cover shadow-md'
              />
             </CarouselItem>
            ))}
           </CarouselContent>
           <CarouselPrevious className='hidden md:grid text-indigoo-600 bg-indigoo-50 border-indigoo-300 hover:bg-indigoo-50 hover:text-indigoo-600 ' />
           <CarouselNext className='hidden md:grid  text-indigoo-600 bg-indigoo-50 border-indigoo-300 hover:bg-indigoo-50 hover:text-indigoo-600' />
          </Carousel>
         </div>
         <div className='flex flex-col  md:justify-center'>
          <div className='mb-5'>
           {project.stack2.map((tech, i) => (
            <Badge
             key={i}
             variant='secondary'
             className='mr-2 mb-2 bg-indigoo-50 text-indigoo-400'
            >
             {tech}
            </Badge>
           ))}
          </div>
          <div className=' text-justify '>{project.seeMore1}</div>
          <div className=' text-justify mt-5'>{project.seeMore2}</div>
         </div>
        </div>
       </ScrollArea>
      </DrawerContent>
     </Drawer>
    ))}
   </div>
  </section>
 );
};

export default Projects;
