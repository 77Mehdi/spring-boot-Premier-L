import { motion } from 'framer-motion';
import { Trophy, Target, Users, Zap, Code, Database } from 'lucide-react';

/**
 * About Page Component
 * Information about the Premier League Player Hub application
 */
const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Tech stack data
  const techStack = [
    {
      icon: Code,
      name: 'React',
      description: 'Modern UI library for building interactive interfaces',
    },
    {
      icon: Zap,
      name: 'Vite',
      description: 'Lightning-fast build tool and development server',
    },
    {
      icon: Database,
      name: 'Spring Boot',
      description: 'Robust Java backend with RESTful API',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            About Us
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Premier League <span className="text-gradient">Player Hub</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Your ultimate destination for comprehensive Premier League player statistics, 
            team information, and football insights. We bring you closer to the beautiful game.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4">
                Premier League Player Hub was created to provide football enthusiasts with 
                easy access to comprehensive player data and statistics from the world's 
                most-watched football league.
              </p>
              <p className="text-muted-foreground mb-4">
                Whether you're a fantasy football manager, a sports analyst, or simply a 
                passionate fan, our platform gives you the tools to explore, compare, and 
                analyze player performance across all 20 Premier League clubs.
              </p>
              <p className="text-muted-foreground">
                We believe in making football data accessible, intuitive, and beautiful. 
                Our application combines modern design with powerful functionality to 
                deliver an exceptional user experience.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Target, label: 'Accurate Data', value: '99.9%' },
                { icon: Users, label: 'Players Tracked', value: '500+' },
                { icon: Trophy, label: 'Teams Covered', value: '20' },
                { icon: Zap, label: 'Real-time Updates', value: 'Live' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl gradient-card border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="block text-2xl font-bold text-gradient mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Key Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover what makes Premier League Player Hub the go-to platform for football data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Comprehensive Search',
                description:
                  'Search players by name, team, position, or nationality. Find exactly who you\'re looking for in seconds.',
              },
              {
                title: 'Detailed Statistics',
                description:
                  'Access in-depth player stats including goals, assists, appearances, and more performance metrics.',
              },
              {
                title: 'Modern Interface',
                description:
                  'Enjoy a sleek, responsive design that works beautifully on desktop, tablet, and mobile devices.',
              },
              {
                title: 'Fast Performance',
                description:
                  'Built with modern technologies for lightning-fast load times and smooth interactions.',
              },
              {
                title: 'RESTful API',
                description:
                  'Powered by a robust Spring Boot backend with a clean, well-documented API architecture.',
              },
              {
                title: 'Real-time Data',
                description:
                  'Stay up-to-date with the latest player information and transfer updates.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Built With Modern Technology
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our application leverages cutting-edge technologies to deliver a seamless experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl gradient-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* API Documentation Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="gradient-card rounded-3xl border border-border p-8 md:p-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              API Endpoints
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The backend exposes a RESTful API for managing Premier League players.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid gap-4 max-w-3xl mx-auto"
          >
            {[
              { method: 'GET', endpoint: '/api/player', description: 'Fetch all players' },
              { method: 'GET', endpoint: '/api/player?name=NAME', description: 'Search by name' },
              { method: 'GET', endpoint: '/api/player?team=TEAM', description: 'Filter by team' },
              { method: 'GET', endpoint: '/api/player?position=POS', description: 'Filter by position' },
              { method: 'GET', endpoint: '/api/player?nation=NATION', description: 'Filter by nation' },
              { method: 'POST', endpoint: '/api/player', description: 'Add new player' },
              { method: 'PUT', endpoint: '/api/player', description: 'Update player' },
              { method: 'DELETE', endpoint: '/api/player/{name}', description: 'Delete player' },
            ].map((api) => (
              <div
                key={api.endpoint}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
              >
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    api.method === 'GET'
                      ? 'bg-accent/20 text-accent'
                      : api.method === 'POST'
                      ? 'bg-green-500/20 text-green-400'
                      : api.method === 'PUT'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-destructive/20 text-destructive'
                  }`}
                >
                  {api.method}
                </span>
                <code className="text-sm text-foreground flex-1 font-mono">
                  {api.endpoint}
                </code>
                <span className="text-sm text-muted-foreground hidden md:block">
                  {api.description}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
