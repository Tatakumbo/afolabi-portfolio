import Layout from './components/Layout/Layout';
import usePath from './hooks/usePath';
import { AnimatePresence, MotionConfig, motion } from './lib/motion';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Dashboard from './pages/admin/Dashboard';
import ManageBlog from './pages/admin/ManageBlog';
import ManageProjects from './pages/admin/ManageProjects';

function App() {
  const path = usePath();
  const isAdmin = path === '/admin' || path.startsWith('/admin/');

  let page;
  if (path === '/') page = <Home />;
  else if (path === '/about') page = <About />;
  else if (path === '/projects') page = <Projects />;
  else if (path === '/blog') page = <Blog />;
  else if (path.startsWith('/blog/')) page = <BlogPost slug={path.slice('/blog/'.length)} />;
  else if (path === '/achievements') page = <Achievements />;
  else if (path === '/resume') page = <Resume />;
  else if (path === '/admin') page = <Dashboard />;
  else if (path === '/admin/projects') page = <ManageProjects />;
  else if (path === '/admin/blog') page = <ManageBlog />;
  else page = <NotFound />;

  return (
    // reducedMotion="user": visitors who ask their OS for less motion get none of the movement.
    <MotionConfig reducedMotion="user">
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          {/* Admin tabs share one key, so moving between them is instant instead of fading. */}
          <motion.div
            key={isAdmin ? 'admin' : path}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {page}
          </motion.div>
        </AnimatePresence>
      </Layout>
    </MotionConfig>
  );
}

export default App;
