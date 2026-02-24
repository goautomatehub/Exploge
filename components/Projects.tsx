import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Reveal } from './Reveal';
import { Icons } from './Icons';
import { LayoutGrid, ArrowUpRight } from 'lucide-react';
import { caseStudies, CaseStudy } from '../data/caseStudies';
import fallbackImage from './Images/assest images/driven-img.png';

 

interface ProjectsProps {
  onOpenCase?: (slug: string) => void;
  limit?: number;
  showViewAll?: boolean;
  onViewAll?: () => void;
}

interface ProjectCardProps {
  project: CaseStudy;
  index: number;
  onOpenCase?: (slug: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenCase }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white border border-black/5 rounded-md overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500"
    >
      {onOpenCase && (
        <button
          type="button"
          onClick={() => onOpenCase(project.slug)}
          className="absolute inset-0 z-30"
        />
      )}
      {/* Spotlight Effect - Hidden on mobile for performance */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden lg:block"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseXSpring}px ${mouseYSpring}px, rgba(32,188,97,0.08), transparent 80%)`,
        }}
      />

      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={project.heroImage} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          onError={(e) => { 
            const target = e.currentTarget as HTMLImageElement; 
            if (target.src !== (fallbackImage as unknown as string)) target.src = fallbackImage; 
          }}
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-secondary font-bold text-[9px] uppercase rounded-sm border border-black/5">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 xs:p-8 flex flex-col flex-grow relative z-20">
        <h4 className="text-xl font-black uppercase mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow font-normal">
          {project.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-semibold text-black uppercase border border-primary px-2.5 py-1 rounded-full bg-white">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-6 border-t border-black/5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase text-secondary group-hover:text-primary transition-colors">View Case Study</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ onOpenCase, limit, showViewAll = false, onViewAll }) => {
  const allProjects = caseStudies;
  const visibleProjects = typeof limit === 'number' ? allProjects.slice(0, Math.max(0, limit)) : allProjects;

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Reveal direction="up">
            <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
              <LayoutGrid className="text-primary w-5 h-5" />
              <span className="text-2xl font-bold text-primary sub-heading inline-block">Case Studies</span>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] text-secondary mb-8">
              Systems We've <br/> 
              <span className="text-primary">Deployed.</span>
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={0.2}>
            <p className="text-zinc-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              A collection of architectural implementations that have transformed agency operations into automated powerhouses.
            </p>
          </Reveal>
        </div>

        

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project, idx) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={idx}
                onOpenCase={onOpenCase}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {showViewAll && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => onViewAll && onViewAll()}
              className="bg-secondary text-white px-8 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-md hover:bg-primary hover:text-secondary transition-all duration-300"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
