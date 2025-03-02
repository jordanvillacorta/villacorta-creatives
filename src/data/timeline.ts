import { GraduationCap, Building, Briefcase, Calendar } from 'lucide-react';

export interface TimelineMilestone {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: typeof GraduationCap;
  image: string;
}

export const timeline: TimelineMilestone[] = [
  {
    id: 1,
    year: '2021',
    title: 'Software Engineering Journey Begins',
    description: 'Completed an intensive software engineering bootcamp, learning full-stack development with modern technologies.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    year: '2022',
    title: 'First Engineer Role',
    description: 'Joined Humana as a Full Stack Developer, working on scalable web applications.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    year: '2022-2024',
    title: 'Software Engineer Role',
    description: 'Continued progressing as a Mid-Level Software Engineer at Allstate.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    year: '2025',
    title: 'Freelance Success',
    description: 'Launched freelance career, working with clients nationally on innovative projects.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
];