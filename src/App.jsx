import React, { useState } from 'react';

// ==========================================
// 1. NAVIGATION BAR MODULE
// ==========================================
function Navbar({ onAdminTrigger }) {
  const sections = ['ABOUT', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'REVIEWS', 'CONTACT'];
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#020813]/80 backdrop-blur-md border-b border-cyan-500/20 z-50 px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img 
          src="/logo.png" 
          alt="System Logo" 
          className="w-8 h-8 rounded-full border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.4)] object-cover"
          onError={(e) => { e.target.src = "https://via.placeholder.com/150/06b6d4/ffffff?text=SYS"; }}
        />
        <span className="font-bold tracking-widest text-cyan-400 text-sm uppercase">PRATIK // CORE</span>
      </div>
      <div className="flex items-center gap-6 text-xs tracking-wider text-slate-400">
        <div className="hidden md:flex gap-6">
          {sections.map((sec) => (
            <a key={sec} href={`#${sec.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">{sec}</a>
          ))}
        </div>
        <button onClick={onAdminTrigger} className="text-cyan-500/70 hover:text-cyan-400 text-[10px] border border-cyan-500/30 px-2 py-0.5 rounded uppercase font-bold tracking-widest bg-cyan-950/20 transition-all">
          [Admin]
        </button>
      </div>
    </nav>
  );
}

// ==========================================
// 2. HERO SPLASH HEADER MODULE
// ==========================================
function Hero() {
  return (
    <section className="text-center py-8 relative">
      <h1 className="text-4xl md:text-5xl font-black tracking-[0.2em] text-white uppercase mb-2 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        PRATIK PARAJULI
      </h1>
      <p className="text-xs tracking-widest text-cyan-400">
        Developer // Server Engineer // Location: <span className="text-emerald-400">Waling, Nepal</span>
      </p>
      <div className="mt-8 relative inline-block">
        <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse"></div>
        <img 
          src="/logo.png" 
          alt="Pratik" 
          className="w-24 h-24 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] object-cover relative z-10 mx-auto"
          onError={(e) => { e.target.src = "https://via.placeholder.com/150/06b6d4/ffffff?text=PRATIK"; }}
        />
      </div>
    </section>
  );
}

// ==========================================
// 3. ABOUT HARDWARE METRICS MODULE
// ==========================================
function About() {
  return (
    <section id="about" className="border border-cyan-500/30 bg-[#040e21]/60 backdrop-blur-sm p-6 rounded-sm relative">
      <div className="absolute top-0 left-4 -translate-y-1/2 bg-[#020813] px-2 text-[10px] text-cyan-500/60 tracking-widest">SYS // PROFILE_DATA</div>
      <h2 className="text-cyan-400 text-base font-bold tracking-wider mb-4 flex items-center gap-2 uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        <span className="w-1.5 h-3 bg-cyan-400 inline-block"></span> About Me
      </h2>
      <p className="text-sm leading-relaxed text-slate-300">
        Fullstack engineering platform enthusiast obsessed with micro-optimizations. Specializes in designing robust systems architectures, high-performance network configurations, and clean user terminal interfaces.
      </p>
      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-800/60 pt-4 text-center">
        <div>
          <div className="text-cyan-400 text-lg font-bold">22.0</div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest">Age Metric</div>
        </div>
        <div>
          <div className="text-cyan-400 text-lg font-bold">99.9%</div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest">Uptime</div>
        </div>
        <div>
          <div className="text-cyan-400 text-lg font-bold">12+</div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest">Deployments</div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. SKILLS COMPONENT
// ==========================================
function Skills({ skills }) {
  return (
    <section id="skills" className="border border-cyan-500/30 bg-[#040e21]/60 p-6 rounded-sm relative">
      <div className="absolute top-0 left-4 -translate-y-1/2 bg-[#020813] px-2 text-[10px] text-cyan-500/60 tracking-widest">SYS // CORE_SKILLS</div>
      <h2 className="text-cyan-400 text-base font-bold tracking-wider mb-4 flex items-center gap-2 uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        <span className="w-1.5 h-3 bg-cyan-400 inline-block"></span> Skill Matrix
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="border border-slate-800 bg-[#020a16] p-4 rounded-sm">
            <div className="flex justify-between items-center mb-1">
              <span className="text-white text-sm font-bold">{skill.name}</span>
              <span className="text-cyan-400 text-xs">{skill.level}</span>
            </div>
            <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden mb-2">
              <div className="bg-cyan-500 h-full" style={{ width: skill.level.includes('%') ? skill.level : `${skill.level}%` }}></div>
            </div>
            <p className="text-[11px] text-slate-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 5. PROJECTS REPOSITORY MODULE
// ==========================================
function Projects({ projects }) {
  return (
    <section id="projects" className="border border-cyan-500/30 bg-[#040e21]/60 p-6 rounded-sm relative space-y-4">
      <div className="absolute top-0 left-4 -translate-y-1/2 bg-[#020813] px-2 text-[10px] text-cyan-500/60 tracking-widest">SYS // REPOSITORIES</div>
      <h2 className="text-cyan-400 text-base font-bold tracking-wider mb-2 flex items-center gap-2 uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        <span className="w-1.5 h-3 bg-cyan-400 inline-block"></span> Projects Archive
      </h2>
      {projects.map((project) => (
        <div key={project.id} className="border border-slate-800 bg-[#020a16] p-4 rounded-sm">
          <div className="text-[10px] text-cyan-500 font-bold uppercase tracking-wider mb-1">// {project.category}</div>
          <h3 className="text-white text-base font-bold tracking-wide">{project.title}</h3>
          <p className="text-xs text-slate-400 mt-1">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.split(',').map((tag, idx) => (
              <span key={idx} className="bg-cyan-950/60 text-cyan-400 border border-cyan-900/50 px-2 py-0.5 rounded text-[10px]">
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

// ==========================================
// 6. OPERATION LOGS MODULE (EXPERIENCE)
// ==========================================
function Experience({ experiences }) {
  return (
    <section id="experience" className="border border-cyan-500/30 bg-[#040e21]/60 p-6 rounded-sm relative space-y-4">
      <div className="absolute top-0 left-4 -translate-y-1/2 bg-[#020813] px-2 text-[10px] text-cyan-500/60 tracking-widest">SYS // RUNTIME_LOG</div>
      <h2 className="text-cyan-400 text-base font-bold tracking-wider mb-2 flex items-center gap-2 uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        <span className="w-1.5 h-3 bg-cyan-400 inline-block"></span> Operational Log
      </h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="border border-slate-800 bg-[#020a16] p-4 rounded-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white text-sm font-bold">{exp.role}</h3>
              <span className="text-xs text-cyan-500">// {exp.company}</span>
            </div>
            <span className="text-[10px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400 uppercase">{exp.duration}</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">{exp.desc}</p>
        </div>
      ))}
    </section>
  );
}

// ==========================================
// 7. CLIENT EVALUATIONS MODULE (REVIEWS)
// ==========================================
function Reviews({ reviews }) {
  return (
    <section id="reviews" className="border border-cyan-500/30 bg-[#040e21]/60 p-6 rounded-sm relative space-y-4">
      <div className="absolute top-0 left-4 -translate-y-1/2 bg-[#020813] px-2 text-[10px] text-cyan-500/60 tracking-widest">SYS // CLIENT_FEEDBACK</div>
      <h2 className="text-cyan-400 text-base font-bold tracking-wider mb-2 flex items-center gap-2 uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        <span className="w-1.5 h-3 bg-cyan-400 inline-block"></span> Client Reviews
      </h2>
      {reviews.map((rev) => (
        <div key={rev.id} className="border border-slate-800 bg-[#020a16] p-4 rounded-sm italic text-slate-300 text-xs relative">
          "{rev.text}"
          <div className="text-right mt-2 font-bold not-italic text-cyan-400 text-[11px] tracking-widest">— {rev.author}</div>
        </div>
      ))}
    </section>
  );
}

// ==========================================
// 8. COMMS TERMINAL GATEWAY MODULE (CONTACT)
// ==========================================
function Contact() {
  return (
    <section id="contact" className="border border-cyan-500/30 bg-[#040e21]/60 p-6 rounded-sm relative">
      <div className="absolute top-0 left-4 -translate-y-1/2 bg-[#020813] px-2 text-[10px] text-cyan-500/60 tracking-widest">SYS // COMMS_LINK</div>
      <h2 className="text-cyan-400 text-base font-bold tracking-wider mb-4 flex items-center gap-2 uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        <span className="w-1.5 h-3 bg-cyan-400 inline-block"></span> Contact Channels
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input type="text" placeholder="IDENTITY / NAME" className="bg-[#020a16] border border-slate-800 rounded p-2 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors" />
          <input type="email" placeholder="COMMS / EMAIL" className="bg-[#020a16] border border-slate-800 rounded p-2 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors" />
        </div>
        <textarea placeholder="SECURE TRANSMISSION MESSAGE DATA" rows="3" className="w-full bg-[#020a16] border border-slate-800 rounded p-2 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
        <button className="bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/50 text-cyan-400 font-bold py-2 px-4 rounded text-xs tracking-widest uppercase transition-all">
          Transmit Message //
        </button>
      </form>
    </section>
  );
}

// ==========================================
// 9. AUTHORIZED CONTROL TERMINAL PANEL
// ==========================================
function AdminDashboard({ 
  goBack, projects, setProjects, skills, setSkills, experiences, setExperiences, reviews, setReviews 
}) {
  const [activeTab, setActiveTab] = useState('projects');

  // Input States
  const [pTitle, setPTitle] = useState(''); const [pCategory, setPCategory] = useState('');
  const [pDesc, setPDesc] = useState(''); const [pTags, setPTags] = useState('');
  const [sName, setSName] = useState(''); const [sLevel, setSLevel] = useState(''); const [sDesc, setSDesc] = useState('');
  const [eRole, setERole] = useState(''); const [eCompany, setECompany] = useState('');
  const [eDuration, setEDuration] = useState(''); const [eDesc, setEDesc] = useState('');
  const [rText, setRText] = useState(''); const [rAuthor, setRAuthor] = useState('');

  const addProject = (e) => {
    e.preventDefault(); if (!pTitle.trim()) return;
    setProjects([...projects, { id: Date.now(), title: pTitle, category: pCategory.toUpperCase() || 'GENERAL', desc: pDesc, tags: pTags || 'React' }]);
    setPTitle(''); setPCategory(''); setPDesc(''); setPTags('');
  };

  const addSkill = (e) => {
    e.preventDefault(); if (!sName.trim()) return;
    setSkills([...skills, { id: Date.now(), name: sName, level: sLevel || '80%', desc: sDesc }]);
    setSName(''); setSLevel(''); setSDesc('');
  };

  const addExperience = (e) => {
    e.preventDefault(); if (!eRole.trim()) return;
    setExperiences([...experiences, { id: Date.now(), role: eRole, company: eCompany, duration: eDuration.toUpperCase(), desc: eDesc }]);
    setERole(''); setECompany(''); setEDuration(''); setEDesc('');
  };

  const addReview = (e) => {
    e.preventDefault(); if (!rText.trim()) return;
    setReviews([...reviews, { id: Date.now(), text: rText, author: rAuthor.toUpperCase() || 'ANONYMOUS' }]);
    setRText(''); setRAuthor('');
  };

  return (
    <div className="min-h-screen bg-[#01050d] text-[#c0caf5] p-6 font-mono">
      <div className="max-w-4xl mx-auto border border-cyan-500/30 bg-[#020a16]/90 p-6 rounded-sm shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        <div className="flex justify-between items-center border-b border-cyan-500/30 pb-4 mb-6">
          <div>
            <h1 className="text-xl font-bold tracking-widest text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>SYSTEM OVERRIDE PANEL</h1>
            <p className="text-[10px] text-cyan-400 tracking-widest mt-0.5">CORE INTERFACE AUTHORIZED ON SESSION MATRIX</p>
          </div>
          <button onClick={goBack} className="border border-red-500/40 hover:bg-red-950/40 text-red-400 px-3 py-1 text-xs uppercase tracking-widest rounded-sm transition-all">
            Exit Terminal
          </button>
        </div>

        <div className="flex gap-2 border-b border-slate-800 pb-3 mb-6 overflow-x-auto">
          {['projects', 'skills', 'experience', 'reviews'].map((tab) => (
            <button
              key={tab} onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-xs font-bold tracking-widest uppercase border transition-all whitespace-nowrap ${
                activeTab === tab ? 'bg-cyan-950 text-cyan-400 border-cyan-500' : 'bg-transparent border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
            >
              [{tab}]
            </button>
          ))}
        </div>

        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <form onSubmit={addProject} className="space-y-3 border border-slate-800 bg-[#030e20] p-4 rounded-sm">
              <h3 className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2">// Append Repository</h3>
              <input type="text" placeholder="Project Name" value={pTitle} onChange={e => setPTitle(e.target.value)} className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <input type="text" placeholder="Category" value={pCategory} onChange={e => setPCategory(e.target.value)} className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <input type="text" placeholder="Tags (e.g. React, Node)" value={pTags} onChange={e => setPTags(e.target.value)} className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <textarea placeholder="Description Log" value={pDesc} onChange={e => setPDesc(e.target.value)} rows="2" className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <button type="submit" className="w-full bg-cyan-950 text-cyan-400 border border-cyan-500/60 text-[10px] font-bold py-2 uppercase">Commit Project</button>
            </form>
            <div className="md:col-span-2 space-y-2">
              {projects.map(p => (
                <div key={p.id} className="flex justify-between items-center bg-[#020a16] border border-slate-800 p-2.5 rounded-sm">
                  <span className="text-xs text-white font-bold">{p.title}</span>
                  <button onClick={() => setProjects(projects.filter(i => i.id !== p.id))} className="text-red-500 text-[10px]">[PURGE]</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <form onSubmit={addSkill} className="space-y-3 border border-slate-800 bg-[#030e20] p-4 rounded-sm">
              <h3 className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2">// Inject Skill Matrix</h3>
              <input type="text" placeholder="Skill Title" value={sName} onChange={e => setSName(e.target.value)} className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <input type="text" placeholder="Proficiency (e.g. 90%)" value={sLevel} onChange={e => setSLevel(e.target.value)} className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <input type="text" placeholder="Brief Spec" value={sDesc} onChange={e => setSDesc(e.target.value)} className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <button type="submit" className="w-full bg-cyan-950 text-cyan-400 border border-cyan-500/60 text-[10px] font-bold py-2 uppercase">Commit Skill</button>
            </form>
            <div className="md:col-span-2 space-y-2">
              {skills.map(s => (
                <div key={s.id} className="flex justify-between items-center bg-[#020a16] border border-slate-800 p-2.5 rounded-sm">
                  <span className="text-xs text-white font-bold">{s.name} ({s.level})</span>
                  <button onClick={() => setSkills(skills.filter(i => i.id !== s.id))} className="text-red-500 text-[10px]">[PURGE]</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <form onSubmit={addExperience} className="space-y-3 border border-slate-800 bg-[#030e20] p-4 rounded-sm">
              <h3 className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2">// Append Experience Log</h3>
              <input type="text" placeholder="Role Title" value={eRole} onChange={e => setERole(e.target.value)} className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <input type="text" placeholder="Company / Guild" value={eCompany} onChange={e => setECompany(e.target.value)} className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <input type="text" placeholder="Timeline (e.g. 2024 - PRES)" value={eDuration} onChange={e => setEDuration(e.target.value)} className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <textarea placeholder="Task Breakdown" value={eDesc} onChange={e => setEDesc(e.target.value)} rows="2" className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <button type="submit" className="w-full bg-cyan-950 text-cyan-400 border border-cyan-500/60 text-[10px] font-bold py-2 uppercase">Commit Experience</button>
            </form>
            <div className="md:col-span-2 space-y-2">
              {experiences.map(e => (
                <div key={e.id} className="flex justify-between items-center bg-[#020a16] border border-slate-800 p-2.5 rounded-sm">
                  <span className="text-xs text-white font-bold">{e.role} @ {e.company}</span>
                  <button onClick={() => setExperiences(experiences.filter(i => i.id !== e.id))} className="text-red-500 text-[10px]">[PURGE]</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <form onSubmit={addReview} className="space-y-3 border border-slate-800 bg-[#030e20] p-4 rounded-sm">
              <h3 className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2">// Process Client Evaluation</h3>
              <textarea placeholder="Testimonial String" value={rText} onChange={e => setRText(e.target.value)} rows="3" className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <input type="text" placeholder="Client Node Identifier" value={rAuthor} onChange={e => setRAuthor(e.target.value)} className="w-full bg-[#010610] border border-slate-800 rounded p-1.5 text-xs text-white focus:outline-none focus:border-cyan-500" />
              <button type="submit" className="w-full bg-cyan-950 text-cyan-400 border border-cyan-500/60 text-[10px] font-bold py-2 uppercase">Commit Review</button>
            </form>
            <div className="md:col-span-2 space-y-2">
              {reviews.map(r => (
                <div key={r.id} className="flex justify-between items-center bg-[#020a16] border border-slate-800 p-2.5 rounded-sm">
                  <span className="text-xs text-white truncate max-w-[200px]">"{r.text}"</span>
                  <button onClick={() => setReviews(reviews.filter(i => i.id !== r.id))} className="text-red-500 text-[10px]">[PURGE]</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 10. MAIN SYSTEM CORE ENTRY WRAPPER
// ==========================================
export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Server Performance Suite',
      category: 'CLUSTER DEPLOYMENT',
      desc: 'High-concurrency dashboard built to map global connection routes, ping spikes, and balance load parameters.',
      tags: 'React, Node.js'
    }
  ]);

  const [skills, setSkills] = useState([
    { id: 1, name: 'Web Development', level: '90%', desc: 'Fullstack apps optimized for load speeds.' },
    { id: 2, name: 'Server Management', level: '85%', desc: 'Linux deployment management and networking.' }
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      role: 'Senior Platform Moderator',
      company: 'Minecraft Infrastructure',
      duration: '2024 - PRESENT',
      desc: 'Maintained stability thresholds across continuous deployment updates, resolved game engine configuration issues, and balanced packet routing layers.'
    }
  ]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: 'Pratik delivered code architecture that completely stabilized our performance pipeline problems. Highly disciplined approach to system structures.',
      author: 'DEV_LEAD // NODE_NET'
    }
  ]);

  if (isAdmin) {
    return (
      <AdminDashboard 
        goBack={() => setIsAdmin(false)} 
        projects={projects} setProjects={setProjects}
        skills={skills} setSkills={setSkills}
        experiences={experiences} setExperiences={setExperiences}
        reviews={reviews} setReviews={setReviews}
      />
    );
  }

  return (
    <div className="relative min-h-screen pb-12 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Terminal Network Backdrop */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] z-0"></div>
      
      <Navbar onAdminTrigger={() => setIsAdmin(true)} />
      
      <main className="max-w-4xl mx-auto px-4 pt-24 space-y-12 relative z-10">
        <Hero />
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
        <Reviews reviews={reviews} />
        <Contact />
      </main>
    </div>
  );
}
