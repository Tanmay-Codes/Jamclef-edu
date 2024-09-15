import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
export const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: SpeedIcon,
    subMenu: false,
  },
  {
    title: "Students",
    path: "/students",
    icon: AvTimerIcon,
  },
  {
    title: "Finance",
    path: "/finance",
    icon: AccountBalanceWalletIcon,
    subMenu: false,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: AssignmentIndIcon,
    subMenu: false,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: SettingsIcon,
    subMenu: false,
  },
];

export const vision = [
  "Explore and Develop Musical Talents Empowering everyone to discover and cultivate their musical abilities",
  "Create a Vibrant Music Community Building a network where musicians inspire and support each other",
  "Make Music Education Accessible Providing high-quality education to help individuals express themselves through music",
  "Become a One-Stop Platform Offering comprehensive resources for all a musician’s needs",
  "Achieve a Successful Music Career Simplifying the path to a rewarding and successful career in music",
  "Ensure Joyful and Transformative Learning Making the music learning process enjoyable and impactful",
];

export const guitarA = {
  courseInclusions: [
    "Certificate of Completion",
    "Practice Material",
    "Jamclef Starter Kit",
    "Assignments & Feedback",
    "Personalized Learning Path",
    "Jam Sessions & Performance Opportunities",
    "Lifetime Access to Resources",
    "Invitation to Student exclusive parties and events",
  ],
  termsAndConditions: {
    missedGroupLessons:
      "There will be no compensation for missed group lessons. It is the student’s responsibility to attend on time.",
    reschedulingPrivateLessons:
      "To reschedule a private lesson, students must inform at least 1 hour prior to the scheduled time. Failure to do so may result in the class being marked as attended.",
    jamclefStarterKit:
      "The Jamclef Starter Kit (manuscript notebook, file, pen, bookmarks) is available only with Packages or upon enrolling in our premium courses.",
    certificateOfCompletion:
      "A Certificate of Completion will be awarded only if the student successfully completes a specified number of classes and meets the assessment criteria set for certification.",
    courseMaterials:
      "All necessary practice materials, including assignments and supplementary resources, will be provided throughout the course to aid the learning process.",
    classSchedule:
      "Classes will be conducted as per the pre-decided schedule. Any changes in the schedule will be communicated well in advance.",
    refundPolicy:
      "Course fees are non-refundable once the course begins, except in exceptional circumstances as deemed fit by Jamclef.",
    codeOfConduct:
      "Students are expected to maintain discipline during lessons, respect faculty and peers, and adhere to the guidelines provided by Jamclef.",
  },
  courseDetails: {
    courseTag: "Guitar",
    courseTitle: "Beginner Level: Strum Your Way to Mastery",
    basePrice: "Rs499/- onwards",
    pricingOptions: {
      oneOnOnePrivateLessons: {
        pricePerClass: "Rs499/ Per class of 40 mins",
        packageOf4Lessons: "Rs1849/-",
        packageOf8Lessons: "Rs3499/-",
      },
      groupLessons: {
        packageOf4Lessons: "Rs999/-",
        packageOf8Lessons: "Rs1849/-",
      },
    },
    courseDescription:
      "Get started on your guitar journey by learning the essential techniques and chord shapes. We’ll guide you through playing your favorite songs while introducing fundamental music theory concepts to build your confidence. Designed for absolute beginners, this course makes learning fun and accessible, ensuring you enjoy every step of the process.",
  },
  courseCurriculum: [
    "Introduction to Guitar Anatomy and Tuning",
    "Basic Chord Shapes and Finger Positioning",
    "Strumming Patterns and Rhythm Practice",
    "Playing Simple Melodies",
    "Introduction to Music Theory",
    "Song Application",
    "Building Finger Strength and Dexterity",
    "Practice and Recap",
  ],
};
