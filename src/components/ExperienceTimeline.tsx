"use client";
import { motion } from "framer-motion";
import { experiences } from "@/lib/experience-data";
import { ExperienceCard } from "./ExperienceCard";
import { SquareArrowOutUpRight } from "lucide-react";

export const ExperienceTimeline = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {experiences.map((company, companyIndex) => (
        <div key={companyIndex} className="mb-16 last:mb-0">
          {/* Company Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block p-4 rounded-lg bg-card border">
              <div className="flex gap-2">
                <h2 className="text-2xl font-bold font-akshar text-foreground">
                  {company.name}
                </h2>
                <a target="_blank" href={company.linkedInLink}>
                  <SquareArrowOutUpRight className="h-[1rem] w-[1rem] rotate-0 scale-100 mt-2" />
                </a>
              </div>
              <p className="text-muted-foreground">{company.period}</p>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.projects.map((project, index) => (
              <ExperienceCard key={index} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
