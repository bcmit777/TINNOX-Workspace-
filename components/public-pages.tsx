'use client';

import {useMemo, useState} from 'react';
import {ArrowLeft, Calculator, ExternalLink, FolderKanban, Globe, GraduationCap, Headset} from 'lucide-react';
import {canRead, copies, type Member, type ModuleId, type WorkRecord} from '@/lib/workspace';

const pageEntries = [
  {module:'sales', moduleName:'Sales & Commercial', title:'Public CPQ', label:'Customer configurator', icon:Calculator, href:`${copies.cpq.url}/public-preview`, access:'Preview only'},
  {module:'projects', moduleName:'Project Management', title:'Track Your Project', label:'Customer project page', icon:FolderKanban, href:null, access:'Read only'},
  {module:'support', moduleName:'Support', title:'Helpdesk', label:'Customer support form', icon:Headset, href:'/helpdesk?preview=1', access:'Preview only'},
  {module:'university', moduleName:'TINNOX University', title:'TINNOX University', label:'Learning library', icon:GraduationCap, href:'/public-preview/university', access:'Read only'},
] satisfies {module:ModuleId;moduleName:string;title:string;label:string;icon:typeof Calculator;href:string|null;access:string}[];

export function PublicPages({user, records, onBack}:{user:Member;records:WorkRecord[];onBack:()=>void}) {
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const isManagement = user.kind === 'management';
  const entries = pageEntries.filter(entry => isManagement || (user.kind === 'staff' && user.modules.includes(entry.module)));
  const projects = useMemo(() => records
    .filter(record => record.kind === 'project' && ['Approved','Complete'].includes(record.state) && canRead(user, record))
    .flatMap(project => {
      const plan = records.find(record => record.projectId === project.id && record.payload?.workflow === 'pm-plan' && record.state !== 'Archived' && canRead(user, record));
      const token = typeof plan?.payload?.trackerToken === 'string' ? plan.payload.trackerToken.trim() : '';
      return token ? [{id:project.id, title:project.title, number:project.number, href:`/track/${encodeURIComponent(token)}`}] : [];
    })
    .sort((a,b) => a.title.localeCompare(b.title)), [records, user]);
  const selectedProject = projects.find(project => project.id === selectedProjectId) || projects[0];

  return <section className="public-pages" aria-labelledby="public-pages-title">
    <button type="button" className="text-button public-pages-back" onClick={onBack}>
      <ArrowLeft size={17} aria-hidden="true"/> Back to Workspace
    </button>
    <header className="public-pages-heading">
      <h1 id="public-pages-title">Public pages</h1>
      <span className="badge neutral">{isManagement ? 'Management directory' : 'Staff previews'}</span>
    </header>

    {entries.length ? <div className="public-pages-grid">
      {entries.map(entry => {
        const Icon = entry.icon;
        const isTracker = entry.module === 'projects';
        const href = isTracker ? selectedProject?.href : entry.href;
        return <article className="public-pages-card" key={entry.module} aria-labelledby={`public-page-${entry.module}`}>
          <div className="public-pages-card-heading">
            <span className="square-icon"><Icon size={23} aria-hidden="true"/></span>
            <span className="public-pages-module">{entry.moduleName}</span>
            <span className="badge neutral">{entry.access}</span>
          </div>
          <h2 id={`public-page-${entry.module}`}>{entry.title}</h2>
          <div className="public-pages-context">
            {isTracker ? projects.length > 1 ? <label htmlFor="public-pages-project">Project
              <select id="public-pages-project" value={selectedProject?.id || ''} onChange={event => setSelectedProjectId(event.target.value)}>
                {projects.map(project => <option key={project.id} value={project.id}>{project.number} · {project.title}</option>)}
              </select>
            </label> : selectedProject ? <div className="public-pages-project">
              <span>{selectedProject.number}</span><strong>{selectedProject.title}</strong>
            </div> : <span className="public-pages-unavailable">No assigned project pages available</span> : <span className="public-pages-label">{entry.label}</span>}
          </div>
          <footer className="public-pages-card-actions">
            {href ? <a className="button secondary" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Preview ${entry.title}${isTracker && selectedProject ? ` for ${selectedProject.title}` : ''} (opens in a new tab)`}>
              Preview <ExternalLink size={16} aria-hidden="true"/>
            </a> : <button className="button secondary" type="button" disabled>Preview unavailable</button>}
            {href && <span className="public-pages-new-tab">New tab</span>}
          </footer>
        </article>;
      })}
    </div> : <div className="public-pages-empty">
      <Globe size={28} aria-hidden="true"/>
      <span>No public page previews assigned</span>
    </div>}
  </section>;
}
