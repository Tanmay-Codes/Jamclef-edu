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
  courseDetails: {
    courseId: "guitar",
    courseTag: ["Beginner", "Guitar"],
    courseTitle: "Beginner Level: Strum Your Way to Mastery",
    basePrice: "Rs499/- onwards",
    image:
      "https://img.freepik.com/free-photo/medium-shot-sideways-father-playing-guitar_23-2148222865.jpg?t=st=1725649731~exp=1725653331~hmac=a14aa4f3abd69530ec769ee3bea0e5b039a566c7806c019fabfcd1afa61a7829&w=996",
    rating: 4.7,
    reviews: 457,
    pricingOptions: {
      oneOnOnePrivateLessons: {
        pricePerClass: "Rs499/ Per class of 40 mins",
        "package Of 4 Lessons": "Rs1849/-",
        "package Of 8 Lessons": "Rs3499/-",
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
};

export const electricGuitarCourse = {
  courseDetails: {
    courseId: "electricGuitar",
    courseTag: ["Electric Guitar", "Guitar"],
    courseTitle: "Beginner Level: Kickstart Your Guitar Journey",
    basePrice: "Rs499/- onwards",
    image:
      "https://img.freepik.com/free-photo/portrait-person-playing-music-piano_23-2151051661.jpg?t=st=1725649795~exp=1725653395~hmac=b21f6035edf116553ad5a9f3f47deff00794dd83a764cd74689a63e7935732a8&w=996",
    rating: 4.8,
    reviews: 520,
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
      "Our beginner electric guitar course is designed to lay the foundation for your guitar-playing skills. You'll learn the basic techniques and fundamentals that will get you playing your favorite songs in no time. From understanding essential chord shapes to strumming confidently, this course will set you on a path to becoming a competent guitarist. No prior experience is needed—just a love for music and a desire to learn!",
  },
  courseCurriculum: [
    "Basic Electric Guitar Anatomy",
    "Open Chords and Power Chords",
    "Basic Strumming and Picking",
    "Reading Guitar Tabs",
    "Simple Lead Playing",
    "Introduction to Scales",
    "Basic Effects and Amplification",
    "Playing Easy Songs",
  ],
  courseInclusions: [
    "Certificate of Completion",
    "Practice Material",
    "Assignments & Feedback",
    "Personalized Learning Path",
    "Lifetime Access to Course Material",
  ],
};
export const electricintermediateGuitarCourse = {
  courseDetails: {
    courseId: "intermediateGuitar",
    courseTag: ["Intermediate Guitar", "Guitar"],
    courseTitle: "Intermediate Level: Elevate Your Guitar Skills",
    basePrice: "Rs499/- onwards",
    image:
      "https://img.freepik.com/free-photo/one-musician-playing-guitar-stage-night-generated-by-ai_188544-38794.jpg?t=st=1726772570~exp=1726776170~hmac=5242b60e1e9d39ddc140fa7cf4e14bb7a3d2cd0e5e77f512366e89b073a87bab&w=1060", // Add an image URL if available
    rating: 4.7,
    reviews: 457, // Add number of reviews if available
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
      "The intermediate course is all about leveling up your playing by focusing on more advanced techniques and music theory. You’ll dive deeper into barre chords, faster chord transitions, and techniques like legato and hammer-ons. We’ll also cover basic improvisation, and you’ll begin to see how music theory is applied directly to your playing.",
  },
  courseCurriculum: [
    "Barre Chords and Power Chords",
    "Advanced Strumming and Picking",
    "Pentatonic and Blues Scales",
    "Basic Music Theory",
    "Hammer-ons and Pull-offs",
    "Using Effects Pedals",
    "Playing with a Band",
    "Simple Improvisation",
  ],
  courseInclusions: [
    "Certificate of Completion",
    "Practice Material",
    "Assignments & Feedback",
    "Personalized Learning Path",
    "Lifetime Access to Resources",
  ],
};

export const electricadvancedGuitarCourse = {
  courseDetails: {
    courseId: "advancedGuitar",
    courseTag: ["Advanced", "Guitar"],
    courseTitle: "Advanced Level: Master the Art of Guitar",
    basePrice: "Rs549/- onwards",
    image:
      "https://img.freepik.com/free-photo/young-guitarist-plucking-strings-acoustic-guitar-generated-by-ai_188544-18433.jpg?t=st=1726772646~exp=1726776246~hmac=14201ac29de1c32fe8cbfc50d6a7d02848e0a57c562f957c142f755a27a7d0d2&w=1060", // Add an image URL if available
    rating: 4.7,
    reviews: 457, // Add number of reviews if available
    pricingOptions: {
      oneOnOnePrivateLessons: {
        pricePerClass: "Rs549/ Per class of 40 mins",
        packageOf4Lessons: "Rs1999/-",
        packageOf8Lessons: "Rs3999/-",
      },
      groupLessons: {
        packageOf4Lessons: "", // Add if available
        packageOf8Lessons: "", // Add if available
      },
    },
    courseDescription:
      "For advanced guitarists, this course offers highly personalized, one-on-one lessons tailored to your specific goals. You’ll refine your skills, master complex techniques, and dive deep into advanced music theory. Learn how to improvise like a pro, explore extended and jazz chords, and understand the nuances of phrasing and dynamics that will make your playing stand out.",
  },
  courseCurriculum: [
    "Advanced Soloing Techniques",
    "Extended Chords and Jazz Chords",
    "Improvisation and Theory",
    "Dynamic Expression",
    "Songwriting and Composition",
    "Experimenting with Effects",
    "Fast Alternate Picking and Legato",
    "Performance and Stagecraft",
  ],
  courseInclusions: [
    "Certificate of Completion",
    "Practice Material",
    "Assignments & Feedback",
    "Personalized Learning Path",
    "Lifetime Access to Course Material",
  ],
};
export const intermediateAcousticGuitarCourse = {
  courseDetails: {
    courseId: "intermediateAcousticGuitar",
    courseTag: ["Intermediate", " Acoustic", "Guitar"],
    courseTitle: "Intermediate Level: Take Your Playing to the Next Level",
    basePrice: "Rs499/- onwards",
    image:
      "https://img.freepik.com/free-photo/woman-playing-guitar-music-school_107420-12170.jpg?t=st=1726774243~exp=1726777843~hmac=6d6fcdaf69e3a7ea68f4bf4baf8193ab6d33dda145779004c68c2947e005837a&w=996", // Add an image URL if available
    rating: 4.0, // Add a rating if available
    reviews: 35, // Add number of reviews if available
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
      "The intermediate course takes your acoustic guitar playing to the next level. We’ll focus on refining your technique, increasing speed, and deepening your knowledge of musical theory as it applies to acoustic guitar. You’ll learn barre chords, more complex strumming patterns, and begin to explore fingerpicking. By the end of this course, you’ll be comfortable navigating various styles and sounds on your acoustic guitar.",
  },
  courseCurriculum: [
    "Barre Chords Introduction",
    "Advanced Strumming Patterns",
    "Fingerpicking Basics",
    "Chord Inversions and Extensions",
    "Using a Capo",
    "Pentatonic Scales",
    "Intermediate Music Theory",
    "Improving Timing",
  ],
  courseInclusions: [
    "Certificate of Completion",
    "Practice Material",
    "Assignments & Feedback",
    "Personalized Learning Path",
    "Lifetime Access to Resources",
  ],
};

export const advancedAcousticGuitarCourse = {
  courseDetails: {
    courseId: "advancedAcousticGuitar",
    courseTag: ["Advanced", "Acoustic", "Guitar"],
    courseTitle:
      "Advanced Level: Unlock the Secrets to Professional Guitar Playing",
    basePrice: "Rs549/- onwards",
    image:
      "https://img.freepik.com/free-photo/artist-white-shirt-playing-guitar-copy-space_23-2148673579.jpg?t=st=1726774259~exp=1726777859~hmac=6eb1f64f979f643c9f8942843ba207ccc28ff7b5f7967b19a0c1bf3013344da4&w=1060", // Add an image URL if available
    rating: 4.9, // Add a rating if available
    reviews: 250, // Add number of reviews if available
    pricingOptions: {
      oneOnOnePrivateLessons: {
        pricePerClass: "Rs549/ Per class of 40 mins",
        packageOf4Lessons: "Rs1999/-",
        packageOf8Lessons: "Rs3999/-",
      },
      groupLessons: {
        packageOf4Lessons: "", // Add if available
        packageOf8Lessons: "", // Add if available
      },
    },
    courseDescription:
      "For advanced players looking to master the acoustic guitar, this course offers personalized guidance on improvisation, advanced fingerstyle techniques, and complex chord structures. Dive deep into music theory, understand how to create your own compositions, and refine your playing to a professional level. This course is designed to challenge you, elevate your skills, and help you develop your unique acoustic style.",
  },
  courseCurriculum: [
    "Advanced Fingerpicking Techniques",
    "Chord Substitutions and Extensions",
    "Improvisation Techniques",
    "Dynamic Control",
    "Songwriting and Composition",
    "Alternate Tunings",
    "Polyrhythms and Syncopation",
    "Stage Performance",
  ],
  courseInclusions: [
    "Certificate of Completion",
    "Practice Material",
    "Assignments & Feedback",
    "Personalized Learning Path",
    "Lifetime Access to Course Material",
  ],
};
export const beginnerPianoCourse = {
  courseDetails: {
    courseId: "beginnerPiano",
    courseTag: ["beginner", "Piano"],
    courseTitle: "Beginner Level: Your First Steps to Piano Mastery",
    basePrice: "Rs499/- onwards",
    image:
      "https://img.freepik.com/free-photo/side-view-man-playing-piano_23-2148680302.jpg?t=st=1726774603~exp=1726778203~hmac=ab6ee4a15e94fef882a87915381c7e474eb02e37fef878fab7682899118c5a5b&w=996", // Add an image URL if available
    rating: 4.9, // Add a rating if available
    reviews: 350, // Add number of reviews if available
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
      "Start your piano journey by learning the basics of finger positioning, simple chords, and playing popular songs. This beginner course covers essential music theory concepts, making it easy for you to understand notation and rhythm while building a solid foundation for future learning.",
  },
  courseCurriculum: [
    "Introduction to Piano Layout and Hand Positioning",
    "Basic Piano Techniques",
    "Introduction to Reading Sheet Music",
    "Simple Melodies and Chord Playing",
    "Introduction to Music Theory",
    "Beginner Songs",
    "Introduction to Dynamics",
    "Recap and Performance",
  ],
  courseInclusions: [
    "Certificate of Completion",
    "Practice Material",
    "Assignments & Feedback",
    "Personalized Learning Path",
    "Lifetime Access to Resources",
  ],
};

export const intermediatePianoCourse = {
  courseDetails: {
    courseId: "intermediatePiano",
    courseTag: ["Piano", "intermediate"],
    courseTitle: "Intermediate Level: Expand Your Pianist Skillset",
    basePrice: "Rs499/- onwards",
    image:
      "https://img.freepik.com/free-photo/side-view-man-playing-piano_23-2150060686.jpg?t=st=1726774654~exp=1726778254~hmac=b47ab4338682519f1f45ef427eb87ddcf88c7f3d33c32897d272ad8c01cb997a&w=996", // Add an image URL if available
    rating: 4.2, // Add a rating if available
    reviews: 190, // Add number of reviews if available
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
      "With the fundamentals in place, this course will teach you how to play more challenging pieces and use advanced hand techniques. You’ll dive deeper into music theory, learn to read more complex sheet music, and enhance your understanding of harmony, rhythm, and scales, taking your piano skills to new heights.",
  },
  courseCurriculum: [
    "Intermediate Piano Techniques",
    "Extended Chords and Inversions",
    "Reading More Complex Sheet Music",
    "Playing Intermediate Repertoire",
    "Introduction to Improvisation",
    "Understanding Musical Phrasing",
    "Ear Training and Harmony",
    "Song Analysis and Performance",
  ],
  courseInclusions: [
    "Certificate of Completion",
    "Practice Material",
    "Assignments & Feedback",
    "Personalized Learning Path",
    "Lifetime Access to Course Material",
  ],
};

export const advancedPianoCourse = {
  courseDetails: {
    courseId: "advancedPiano",
    courseTag: ["Piano", "advanced"],
    courseTitle: "Advanced Level: From Pianist to Performer",
    basePrice: "Rs549/- onwards",
    image:
      "https://img.freepik.com/free-photo/man-playing-piano-back-view_23-2150060713.jpg?t=st=1726774681~exp=1726778281~hmac=58e39f89dd0f35761697def84749c3232f84940e9bbcb5fcacf505ec81ac7b38&w=996", // Add an image URL if available
    rating: 4.7, // Add a rating if available
    reviews: 90, // Add number of reviews if available
    pricingOptions: {
      oneOnOnePrivateLessons: {
        pricePerClass: "Rs549/ Per class of 40 mins",
        packageOf4Lessons: "Rs1999/-",
        packageOf8Lessons: "Rs3999/-",
      },
      groupLessons: {
        packageOf4Lessons: "", // Add if available
        packageOf8Lessons: "", // Add if available
      },
    },
    courseDescription:
      "For those ready to go beyond, this advanced piano course delves into complex musical pieces and intricate hand coordination. You’ll learn advanced music theory, improvisation, and how to incorporate dynamics and phrasing into your performances. Tailored to your goals, this course will elevate your skills to a professional level.",
  },
  courseCurriculum: [
    "Advanced Piano Techniques",
    "In-Depth Music Theory",
    "Advanced Repertoire",
    "Improvisation and Composition",
    "Advanced Sight-Reading",
    "Harmonic Analysis and Interpretation",
    "Performance Practice",
    "Recap and Masterclass Performance",
  ],
  courseInclusions: [
    "Certificate of Completion",
    "Practice Material",
    "Assignments & Feedback",
    "Personalized Learning Path",
    "Lifetime Access to Course Material",
  ],
};

export const termsAndConditions = {
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
};
