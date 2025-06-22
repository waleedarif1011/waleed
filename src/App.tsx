import React from 'react';
import Layout from './components/Layout';

// Import views using relative paths
import HomeView from './components/views/HomeView';
import AboutView from './components/views/AboutView';
import ProjectsView from './components/views/ProjectsView';
import ContactView from './components/views/ContactView';
import ExpertiseView from './components/views/ExpertiseView';
import ExperienceView from './components/views/ExperienceView';

const App: React.FC = () => {
  return (
    <Layout>
      <HomeView />
      <AboutView />
      <ExpertiseView />
      <ExperienceView />
      <ProjectsView />
      <ContactView />
    </Layout>
  );
};

export default App;