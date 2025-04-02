import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.scss';

const About = () => {
  // Animation Controls für verschiedene Sektionen
  const heroControls = useAnimation();
  const missionControls = useAnimation();
  const teamControls = useAnimation();
  const valuesControls = useAnimation();

  // Refs für Intersection Observer
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Teammitglieder-Daten
  const teamMembers = [
    {
      name: 'Orhan Güzel',
      role: 'Fullstack-Entwickler',
      description: 'Spezialist für die Integration von Frontend und Backend, mit Fokus auf API-Design und effiziente Datenübertragung.',
    },
    {
      name: 'Norman Tetzlaff',
      role: 'Backend-Architekt',
      description: 'Experte für die Entwicklung skalierbarer Serverinfrastrukturen, Datenbankverwaltung und Systemsicherheit.',
    },
    {
      name: 'Mark Döring',
      role: 'Projektleiter',
      description: 'Verantwortlich für die Planung und Koordination des Projekts, mit Fokus auf Qualitätssicherung und termingerechte Umsetzung.',
    },
    {
      name: 'Chris Schubert',
      role: 'Frontend-Designer',
      description: 'Spezialist für visuelles Design und Animationen, mit Schwerpunkt auf der Umsetzung unserer Vintage-Ästhetik.',
    }
  ];

  // Unternehmenswerte
  const companyValues = [
    {
      title: 'Nachhaltigkeit',
      description: 'Wir glauben an verantwortungsvollen Konsum und setzen uns für die Verlängerung des Produktlebenszyklus ein. Jedes wiederverwendete Stück schont Ressourcen und reduziert Abfall.',
      icon: '♻️'
    },
    {
      title: 'Qualität',
      description: 'Nur ausgewählte Stücke von höchster Qualität finden ihren Weg in unser Sortiment. Wir prüfen sorgfältig jedes Vintage-Objekt und jede moderne Kreation.',
      icon: '⭐'
    },
    {
      title: 'Einzigartigkeit',
      description: 'Wir schätzen das Besondere und Individuelle. Unsere Artikel erzählen ihre eigene Geschichte und bringen Charakter in den Alltag unserer Kunden.',
      icon: '🔍'
    },
    {
      title: 'Innovation',
      description: 'Wir verbinden das Beste aus Vergangenheit und Gegenwart. Durch innovative Upcycling-Prozesse und Kollaborationen mit Designern schaffen wir Neues aus Altem.',
      icon: '💡'
    }
  ];

  // Animationen auslösen, wenn Elemente im Viewport sind
  useEffect(() => {
    if (heroInView) {
      heroControls.start('visible');
    }
    if (missionInView) {
      missionControls.start('visible');
    }
    if (teamInView) {
      teamControls.start('visible');
    }
    if (valuesInView) {
      valuesControls.start('visible');
    }
  }, [heroInView, missionInView, teamInView, valuesInView, heroControls, missionControls, teamControls, valuesControls]);

  // Animation Varianten
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="about-page">
      {/* Hero-Sektion */}
      <motion.section 
        className="hero-section"
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeInUp}
      >
        <div className="container">
          <motion.h1 
            className="vintage-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Über Retroy
          </motion.h1>
          <motion.div 
            className="hero-text"
            variants={fadeInUp}
          >
            <p className="lead-text">
              Wir verbinden zeitlose Vintage-Ästhetik mit moderner Nachhaltigkeit, um einzigartige Produkte anzubieten, die Geschichte und Zukunft vereinen.
            </p>
          </motion.div>
          <motion.div 
            className="vintage-divider"
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          />
        </div>
      </motion.section>

      {/* Mission-Sektion */}
      <motion.section 
        className="mission-section"
        ref={missionRef}
        initial="hidden"
        animate={missionControls}
        variants={fadeInUp}
      >
        <div className="container">
          <div className="mission-content">
            <motion.div 
              className="mission-image-container"
              variants={fadeInUp}
            >
              <div className="mission-image-placeholder">
                <div className="vintage-frame"></div>
              </div>
            </motion.div>
            <motion.div 
              className="mission-text"
              variants={fadeInUp}
            >
              <h2 className="section-title">Unsere Mission</h2>
              <div className="vintage-divider"></div>
              <p>Bei Retroy verbinden wir die Schönheit vergangener Epochen mit der Verantwortung für eine nachhaltige Zukunft. Wir kuratieren sorgfältig ausgewählte Vintage-Schätze, fördern innovative Upcycling-Produkte und unterstützen zeitgenössische Designer, die sich von der Vergangenheit inspirieren lassen.</p>
              <p>Unsere Plattform ist mehr als nur ein Marktplatz – sie ist ein Ort, an dem Geschichte weitererzählt wird und neue Geschichten entstehen. Wir glauben an bewussten Konsum, der Qualität über Quantität stellt und die einzigartige Geschichte jedes Stücks wertschätzt.</p>
              <p>Jeder Kauf bei Retroy ist eine Entscheidung für Individualität, Qualität und Nachhaltigkeit – eine kleine Revolution gegen die Wegwerfkultur unserer Zeit.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team-Sektion */}
      <motion.section 
        className="team-section"
        ref={teamRef}
        initial="hidden"
        animate={teamControls}
        variants={staggerChildren}
      >
        <div className="container">
          <motion.h2 
            className="section-title text-center"
            variants={fadeInUp}
          >
            Unser Team
          </motion.h2>
          <motion.div 
            className="vintage-divider center"
            variants={fadeInUp}
          ></motion.div>
          <motion.div 
            className="team-grid"
            variants={staggerChildren}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                className="team-member"
                key={index}
                variants={fadeInUp}
              >
                <div className="member-image-container">
                  <div className="member-image-placeholder">
                    <span className="member-initials">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <p className="member-description">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Werte-Sektion */}
      <motion.section 
        className="values-section"
        ref={valuesRef}
        initial="hidden"
        animate={valuesControls}
        variants={staggerChildren}
      >
        <div className="container">
          <motion.h2 
            className="section-title text-center"
            variants={fadeInUp}
          >
            Unsere Werte
          </motion.h2>
          <motion.div 
            className="vintage-divider center"
            variants={fadeInUp}
          ></motion.div>
          <motion.div 
            className="values-grid"
            variants={staggerChildren}
          >
            {companyValues.map((value, index) => (
              <motion.div 
                className="value-card"
                key={index}
                variants={fadeInUp}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Entdecke unsere Kollektionen</h2>
            <p className="cta-text">Tauche ein in die Welt zeitloser Designs und einzigartiger Funde.</p>
            <motion.a 
              href="/kollektionen" 
              className="cta-button"
            >
              Zu den Kollektionen
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;