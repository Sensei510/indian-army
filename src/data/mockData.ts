import { 
  Question, 
  MilitaryBranch, 
  StudyMaterial, 
  QuestionCategory, 
  QuestionDifficulty, 
  MilitaryRank 
} from "../types";

export const mockBranches: MilitaryBranch[] = [
  {
    id: "army",
    name: "Indian Army",
    description: "The Indian Army is the land-based branch of the Indian Armed Forces. It is the largest component of the Indian military forces and is commanded by the Chief of Army Staff (COAS).",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    websiteUrl: "https://joinindianarmy.nic.in/",
    requirements: "To join the Indian Army, candidates must be Indian citizens, aged between 17.5-21 years for NDA entry, have completed 10+2 with required subjects, meet physical standards, and clear the entrance examination.",
    ranks: []
  },
  {
    id: "airforce",
    name: "Indian Air Force",
    description: "The Indian Air Force (IAF) is the air arm of the Indian Armed Forces. Its primary mission is to secure Indian airspace and conduct aerial warfare during armed conflict.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    websiteUrl: "https://indianairforce.nic.in/",
    requirements: "Candidates must be Indian citizens, aged 16.5-19 years for NDA entry, have completed 10+2 with Physics and Mathematics, meet physical standards, and clear the entrance examination.",
    ranks: []
  },
  {
    id: "navy",
    name: "Indian Navy",
    description: "The Indian Navy is the naval branch of the Indian Armed Forces. It plays a crucial role in securing India's maritime borders and enhancing international relations through joint exercises.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    websiteUrl: "https://www.joinindiannavy.gov.in/",
    requirements: "Candidates must be Indian citizens, aged 16.5-19 years for NDA entry, have completed 10+2 with Physics and Mathematics, meet physical standards, and clear the entrance examination.",
    ranks: []
  },
  {
    id: "coastguard",
    name: "Indian Coast Guard",
    description: "The Indian Coast Guard is a maritime law enforcement and search and rescue agency of India with jurisdiction over territorial waters including its contiguous zone and exclusive economic zone.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    websiteUrl: "https://joinindiancoastguard.gov.in/",
    requirements: "Candidates must be Indian citizens, aged 17-22 years, have completed graduation, meet physical standards, and clear the entrance examination.",
    ranks: []
  }
];

// Mock Questions
export const mockQuestions: Question[] = [
  {
    id: "q1",
    text: "What is the highest peacetime gallantry award in India?",
    category: QuestionCategory.GENERAL_KNOWLEDGE,
    difficulty: QuestionDifficulty.EASY,
    options: [
      { id: "q1o1", text: "Param Vir Chakra", isCorrect: false },
      { id: "q1o2", text: "Ashoka Chakra", isCorrect: true },
      { id: "q1o3", text: "Kirti Chakra", isCorrect: false },
      { id: "q1o4", text: "Shaurya Chakra", isCorrect: false }
    ],
    explanation: "The Ashoka Chakra is India's highest peacetime military decoration awarded for valor, courageous action or self-sacrifice away from the battlefield.",
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15")
  },
  {
    id: "q2",
    text: "Which organization conducts the NDA examination in India?",
    category: QuestionCategory.GENERAL_KNOWLEDGE,
    difficulty: QuestionDifficulty.EASY,
    options: [
      { id: "q2o1", text: "DRDO", isCorrect: false },
      { id: "q2o2", text: "UPSC", isCorrect: true },
      { id: "q2o3", text: "Indian Army", isCorrect: false },
      { id: "q2o4", text: "Ministry of Defence", isCorrect: false }
    ],
    explanation: "The Union Public Service Commission (UPSC) conducts the National Defence Academy examination twice a year.",
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15")
  }
];

// Mock Study Materials
export const mockStudyMaterials: StudyMaterial[] = [
  {
    id: "sm1",
    title: "NDA Examination Guide",
    description: "Comprehensive guide for NDA examination preparation covering all subjects and topics.",
    category: QuestionCategory.GENERAL_KNOWLEDGE,
    content: "The National Defence Academy examination is conducted by UPSC twice a year. It consists of Mathematics, General Ability Test, and SSB interview...",
    createdAt: new Date("2022-12-01"),
    updatedAt: new Date("2023-01-15")
  },
  {
    id: "sm2",
    title: "Physical Fitness Standards",
    description: "Detailed guide on physical fitness requirements and training for Indian military services.",
    category: QuestionCategory.PHYSICAL_FITNESS,
    content: "This guide covers the physical fitness standards required for different branches of Indian Armed Forces, including running, push-ups, pull-ups...",
    createdAt: new Date("2022-12-15"),
    updatedAt: new Date("2023-02-01")
  }
];