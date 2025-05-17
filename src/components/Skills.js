import React, { useEffect, useState } from 'react';
import {
  Code,
  FileCode,
  Palette,
  Globe,
  Brain,
  Cpu,
  Search,
  Workflow,
  Megaphone,
  LayoutDashboard,
} from 'lucide-react';

// Skills data with Lucide icons
const skills = [
  { name: 'React.js', percentage: 90, icon: LayoutDashboard, color: '#61DBFB' },
  { name: 'JavaScript', percentage: 85, icon: FileCode, color: '#F7DF1E' },
  { name: 'CSS3', percentage: 75, icon: Palette, color: '#2965f1' },
  { name: 'HTML', percentage: 80, icon: Globe, color: '#e34c26' },
  { name: 'Python', percentage: 85, icon: Code, color: '#3776AB' },
  { name: 'AI/ML', percentage: 70, icon: Brain, color: '#ff69b4' },
  { name: 'Deep Learning', percentage: 65, icon: Cpu, color: '#8A2BE2' },
  { name: 'Web Scraping', percentage: 80, icon: Search, color: '#00BFFF' },
  { name: 'n8n', percentage: 60, icon: Workflow, color: '#f97316' },
  { name: 'Meta Ads', percentage: 75, icon: Megaphone, color: '#1877F2' },
  { name: 'WordPress', percentage: 90, icon: Globe, color: '#10b981' },
];

// Updated SkillMeter component
const SkillMeter = ({ skill, animated }) => {
  const IconComponent = skill.icon;
  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke;
  const circumference = Math.PI * normalizedRadius;

  const strokeDashoffset = animated
    ? circumference - (skill.percentage / 100) * circumference
    : circumference;

  const gradientId = `grad-${skill.name.replace(/\s+/g, '-')}`;

  return (
    <div className="flex flex-col items-center transition-transform duration-500 hover:scale-105">
      <div className="relative mb-4">
        <svg
          width={radius * 2}
          height={radius + stroke * 2}
          viewBox={`0 0 ${radius * 2} ${radius}`}
        >
          {/* Gradient definition */}
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={skill.color} stopOpacity="0.7" />
              <stop offset="100%" stopColor={skill.color} stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Background arc */}
          <path
            d={`M ${stroke} ${radius} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 - stroke} ${radius}`}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={stroke}
            fill="transparent"
            strokeLinecap="round"
          />

          {/* Foreground animated arc */}
          <path
            d={`M ${stroke} ${radius} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 - stroke} ${radius}`}
            stroke={`url(#${gradientId})`}
            strokeWidth={stroke}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 1.8s ease-in-out',
              filter: 'drop-shadow(0 0 6px rgba(0, 0, 0, 0.3))',
            }}
          />
        </svg>

        {/* Center icon with glow */}
        <div className="absolute inset-0 flex items-end justify-center -top-8">
          <div className="bg-gray-700 p-2 rounded-full shadow-lg">
            <IconComponent
              size={36}
              style={{
                color: skill.color,
                filter: `drop-shadow(0 0 4px ${skill.color})`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Skill text */}
      <div className="mt-4 text-center">
        <p className="font-bold text-lg" style={{ color: skill.color }}>
          {skill.percentage}%
        </p>
        <p className="text-white text-sm">{skill.name}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gray-700 text-white py-16 px-6">
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-slate-300">
          Skills & Expertise
        </h2>
        <p className="text-lg text-gray-300 mb-12">
  From front-end development with React.js and JavaScript to back-end automation using Python, my skillset spans across modern web technologies and intelligent systems. I have hands-on experience with AI/ML, deep learning, and real-time data extraction via web scraping. Whether it's creating interactive UI, building automation workflows in n8n, or optimizing digital marketing campaigns with Meta Ads, I continuously strive to deliver impactful, scalable, and user-centric solutions.
</p>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill) => (
            <SkillMeter key={skill.name} skill={skill} animated={animate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
