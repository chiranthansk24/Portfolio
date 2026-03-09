import React, { useEffect } from 'react';

const SkillsCertificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    container: {
      padding: '120px 2rem 5rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 1,
    },
    header: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '800',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, var(--text-primary), var(--accent))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-0.02em',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: 'var(--text-secondary)',
      marginBottom: '4rem',
      maxWidth: '600px',
      lineHeight: '1.6',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: 'var(--text-primary)',
      marginBottom: '2rem',
      marginTop: '4rem',
      borderBottom: '1px solid var(--border-color)',
      paddingBottom: '1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '2rem',
      backdropFilter: 'blur(10px)',
      transition: 'transform 0.3s ease, border-color 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
    },
    number: {
      fontSize: '3rem',
      fontWeight: '900',
      color: 'var(--accent)',
      opacity: '0.3',
      lineHeight: '1',
      marginBottom: '1rem',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: 'var(--text-primary)',
      marginBottom: '0.5rem',
    },
    cardDesc: {
      fontSize: '1rem',
      color: 'var(--text-secondary)',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
    },
    skillList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
      marginTop: 'auto',
    },
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: 'var(--text-primary)',
      fontSize: '0.95rem',
    },
    dot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: 'var(--accent)',
    },
    certPlaceholder: {
      width: '100%',
      height: '300px',
      background: 'rgba(255, 255, 255, 0.02)',
      border: '2px dashed var(--border-color)',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)',
      gap: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    certWarning: {
      fontSize: '0.9rem',
      textAlign: 'center',
      maxWidth: '300px',
    }
  };

  return (
    <div style={styles.container} className="section">
      <h1 style={styles.header}>Expertise & Certifications</h1>
      <p style={styles.subtitle}>
        A curated list of my technical skills and recognized achievements.
      </p>

      {/* ========================================================
          SKILLS SECTION 
          TODO: Edit the skills below with the content from your planner!
      ======================================================== */}
      
      <h2 style={styles.sectionTitle}>Technical Toolkit</h2>
      <div style={styles.grid}>
        
        {/* Skill Card 1 */}
        <div style={styles.card} className="skill-card">
          <span style={styles.number}>01</span>
          <h3 style={styles.cardTitle}>Frontend Development</h3>
          <p style={styles.cardDesc}>
            Crafting responsive, interactive, and beautifully animated user interfaces.
          </p>
          <ul style={styles.skillList}>
            <li style={styles.skillItem}><span style={styles.dot}></span> React & Next.js</li>
            <li style={styles.skillItem}><span style={styles.dot}></span> TypeScript</li>
            <li style={styles.skillItem}><span style={styles.dot}></span> Tailwind CSS & Framer Motion</li>
          </ul>
        </div>

        {/* Skill Card 2 */}
        <div style={styles.card} className="skill-card">
          <span style={styles.number}>02</span>
          <h3 style={styles.cardTitle}>Learining Ethical Hacking </h3>
          <p style={styles.cardDesc}>
            learning ethical hacking and cybersecurity to protect systems from attacks.
          </p>
          <ul style={styles.skillList}>
            <li style={styles.skillItem}><span style={styles.dot}></span> Ethical Hacking</li>
            <li style={styles.skillItem}><span style={styles.dot}></span> Cybersecurity</li>
            <li style={styles.skillItem}><span style={styles.dot}></span> Network Security</li>
          </ul>
        </div>

        {/* Skill Card 3 */}
        <div style={styles.card} className="skill-card">
          <span style={styles.number}>03</span>
          <h3 style={styles.cardTitle}>Gen AI Tools</h3>
          <p style={styles.cardDesc}>
            using gen ai tools to enhance productivity and creativity.
          </p>
          <ul style={styles.skillList}>
            <li style={styles.skillItem}><span style={styles.dot}></span> ChatGPT</li>
            <li style={styles.skillItem}><span style={styles.dot}></span> Gemini</li>
            <li style={styles.skillItem}><span style={styles.dot}></span> Claude</li>
          </ul>
        </div>

        {/* Skill Card 4 */}
        <div style={styles.card} className="skill-card">
          <span style={styles.number}>04</span>
          <h3 style={styles.cardTitle}>All time Vibe Coder</h3>
          {/* TODO: Add your extra skills here from the planner comment section */}
          <p style={styles.cardDesc}>
            Coding beyond pure code that help drive projects to success.Mainly doing this to overcome the concepts
            and the thinga that i dont knwo about in the real world
          </p>
          <ul style={styles.skillList}>
            <li style={styles.skillItem}><span style={styles.dot}></span> Problem Solving</li>
            <li style={styles.skillItem}><span style={styles.dot}></span> UI/UX Design</li>
            <li style={styles.skillItem}><span style={styles.dot}></span> Quick Learner</li>
          </ul>
        </div>
        
      </div>

      {/* ========================================================
          CERTIFICATES SECTION 
      ======================================================== */}
      
      <h2 style={styles.sectionTitle}>Certificates</h2>
      <div style={styles.grid}>
        
        {/* Certificate 1: be10x */}
        <div style={styles.card}>
          <img 
            src="/cert-1.webp" 
            alt="be10x AI Tools Workshop Certificate" 
            style={{width: '100%', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.1)'}} 
          />
          <h3 style={styles.cardTitle}>AI Tools & ChatGPT Workshop</h3>
          <p style={{...styles.cardDesc, marginBottom: '0.5rem'}}>
            Issued by <strong>be10x</strong> - December 28th, 2025
          </p>
          <p style={styles.cardDesc}>
            Successfully completed the interactive workshop focusing on practical AI applications including rapid presentation creation, data analysis, and efficient AI-assisted coding & debugging.
          </p>
        </div>

        {/* Certificate 2: Internship */}
        <div style={styles.card}>
          <img 
            src="/cert-2.webp" 
            alt="Frontend Web Development Internship Certificate" 
             style={{width: '100%', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.1)'}} 
          />
          <h3 style={styles.cardTitle}>Web Development Front-End Internship</h3>
          <p style={{...styles.cardDesc, marginBottom: '0.5rem'}}>
            Issued by <strong>Raise Digital / 1stop</strong> - March to April 2025
          </p>
          <p style={styles.cardDesc}>
            Demonstrated dedication and hard work completing the comprehensive frontend web development internship program. 
          </p>
        </div>

        {/* Certificate 3: Outskill */}
        <div style={styles.card}>
          <img 
            src="/cert-3.webp" 
            alt="Generative AI Mastermind Certificate" 
             style={{width: '100%', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.1)'}} 
          />
          <h3 style={styles.cardTitle}>Generative AI Mastermind</h3>
          <p style={{...styles.cardDesc, marginBottom: '0.5rem'}}>
            Issued by <strong>Outskill</strong>
          </p>
          <p style={styles.cardDesc}>
            Successfully completed the Generative AI Mastermind course, presented by Vaibhav Sisinty. Explored advanced generative concepts and cutting-edge implementations.
          </p>
        </div>

      </div>

      <style>{`
        .skill-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
};

export default SkillsCertificates;
