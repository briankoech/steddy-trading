import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../components/Layout';
import { projects } from '../data-source';
import { ProjectCard } from '../components/ProjectCard';
import { Size } from '../enums';

const ProjectsPage = ({ location }: any) => {
  return (
    <Layout
      title='Our Projects'
      description='Projects that we sell at steddytrading.com'
      location={location.pathname}
    >
      <div className='container mx-auto py-10'>
        <div className='grid grid-cols-4 gap-8'>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} size={Size.SM} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects Page</title>;
