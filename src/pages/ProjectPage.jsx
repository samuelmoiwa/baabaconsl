import { useState } from 'react';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectSpecPanel from '../components/projects/ProjectSpecPanel';

const projectData = [
  {
    id: "connaught-icu",
    title: "Connaught Hospital ICU Renovation",
    location: "Freetown, Sierra Leone",
    clientType: "Corporate / Public Healthcare",
    scope: "Medical-Grade Infrastructure Renovation",
    status: "Successfully Delivered",
    summary: "A high-precision overhaul of critical healthcare infrastructure, delivering an optimized sterile environment with advanced life-support structural configurations.",
    details: "This critical infrastructure deployment involved complex interior reconfiguration to maximize sterile fields. Structural adjustments were executed to integrate continuous vital oxygen delivery arrays and high-voltage backup electrical conduits without compromising old foundation points.",
    metrics: ["100% Sterile Compliance", "Optimized Unit Spatial Layout", "Integrated Emergency HVAC Routing"]
  },
  {
    id: "lds-stake-centres",
    title: "LDS Church Stake Centres",
    location: "Multi-Region (Freetown / Bo)",
    clientType: "Religious Organization",
    scope: "Mass-Occupancy Structural Civil Engineering",
    status: "Successfully Delivered",
    summary: "Simultaneous engineering and delivery of three separate high-capacity assembly centres featuring advanced large-span frame stability.",
    details: "Built to stand for generations, these religious hubs required complex calculations for clear-span steel roofing trusses over massive continuous spaces. Foundation physics were heavily optimized to support structural load transitions during peak mass gatherings.",
    metrics: ["3 Major Multi-Centres Completed", "Clear-Span Steel Truss Integration", "Enhanced Acoustic Structural Foundations"]
  },
  {
    id: "bo-mission-residence",
    title: "Bo Mission President’s Residence",
    location: "Bo, Sierra Leone",
    clientType: "Religious Organization / Executive Housing",
    scope: "Premium Turnkey Residential Construction",
    status: "Successfully Delivered",
    summary: "An elite executive estate blending premium safety enforcement structures with modern high-end architectural finishings.",
    details: "This project showcases top-tier turnkey management from raw excavation lines to precise finishing joinery. Features integrated custom high-security entryway layouts, architectural perimeter monitoring setups, and independent luxury living design flow.",
    metrics: ["Premium Joinery Fitting Finish", "High-Security Compound Configuration", "Independent Core Power Integration"]
  },
  {
    id: "freetown-boreholes",
    title: "Freetown Community Borehole Infrastructure",
    location: "Wellington & New England, Freetown",
    clientType: "Community / Educational Institutions",
    scope: "Industrial Hydro-Drilling & Distribution",
    status: "Successfully Delivered",
    summary: "Deep aquifer utility infrastructure serving the Wellington community and Bethel School with clean, structural fluid resource lines.",
    details: "Engineered to combat water scarcity challenges. Deployed heavy rotary boring machinery to tap reliable deep water tables. Fully encased with anti-corrosive thick-walled utility piping and matched to heavy solar power lift pumps.",
    metrics: ["Clean Flow Water Delivery", "Anti-Corrosive Outer Utility Casing", "Solar Pump Array Syncing"]
  },
  {
    id: "private-portfolios",
    title: "Private Luxury Residential Portfolios",
    location: "Freetown Enclaves",
    clientType: "Private Individuals",
    scope: "Full Cycle Custom Residential Engineering",
    status: "Successfully Delivered",
    summary: "A curated collection of custom high-end family properties executed seamlessly from breaking ground to final key handover.",
    details: "Handling bespoke requirements for discerning clients. Focus heavily on reinforced retaining walls on sloped terrains, custom structural columns, modern framing geometries, and seamless integration of in-house solar systems and millwork.",
    metrics: ["Bespoke Architectural Geometry", "Retaining Structural Sloped Footings", "100% Turnkey Handover Track Record"]
  }
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen relative">
      {/* 1. High-Contrast Project Hero Showcase */}
      <ProjectHero />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-4 mb-12">
          <span className="text-xs font-black tracking-widest text-[#F97316] uppercase bg-[#F97316]/10 px-4 py-1.5 rounded-md inline-block">
            Proven Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1E3A8A] tracking-tight">
            Verified Case Studies
          </h2>
          <div className="w-16 h-1 bg-[#1E3A8A] rounded-full"></div>
        </div>

        {/* 2. Interactive Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* 3. Project Specification Side-Panel Sliding Drawer */}
      <ProjectSpecPanel
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default ProjectsPage;
