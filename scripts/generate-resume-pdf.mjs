import React from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const h = React.createElement;

const colors = {
  primary: '#0f172a',      // Slate 900
  secondary: '#334155',    // Slate 700
  accent: '#1d4ed8',       // Blue 700
  accentLight: '#2563eb',  // Blue 600
  text: '#1e293b',        // Slate 800
  muted: '#64748b',       // Slate 500
  border: '#cbd5e1',      // Slate 300
  borderLight: '#e2e8f0', // Slate 200
  cardBg: '#f8fafc',      // Slate 50
  bg: '#ffffff'
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 34,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: colors.text,
    lineHeight: 1.35,
    backgroundColor: colors.bg
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 9,
    marginBottom: 12,
    alignItems: 'center'
  },
  name: {
    width: '100%',
    fontSize: 21,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: 1.2,
    marginBottom: 6
  },
  title: {
    width: '100%',
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    lineHeight: 1.3,
    marginBottom: 6
  },
  contactRow: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 8.8,
    color: '#000000'
  },
  contactItem: {
    color: '#000000'
  },
  contactLink: {
    color: '#0055b3',
    textDecoration: 'underline'
  },
  pipeDivider: {
    marginHorizontal: 4,
    color: '#000000'
  },
  section: {
    marginBottom: 11
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    borderBottomWidth: 0.8,
    borderBottomColor: colors.border,
    paddingBottom: 2.5,
    marginBottom: 6
  },
  summaryText: {
    fontSize: 9.8,
    color: colors.secondary,
    lineHeight: 1.4
  },
  skillsGrid: {
    flexDirection: 'column',
    gap: 3
  },
  skillRow: {
    flexDirection: 'row',
    fontSize: 9.5,
    marginBottom: 1
  },
  skillLabel: {
    width: 104,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary
  },
  skillValue: {
    flex: 1,
    color: colors.secondary,
    lineHeight: 1.32
  },
  expItem: {
    marginBottom: 8
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1.5
  },
  expRole: {
    fontSize: 10.4,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary
  },
  expCompany: {
    fontSize: 9.8,
    fontFamily: 'Helvetica-Bold',
    color: colors.accent
  },
  expDates: {
    fontSize: 9.2,
    color: colors.muted,
    fontFamily: 'Helvetica-Bold'
  },
  bulletList: {
    marginTop: 2,
    paddingLeft: 2
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2
  },
  bulletDot: {
    width: 8,
    fontSize: 9,
    color: colors.accent
  },
  bulletText: {
    flex: 1,
    fontSize: 9.4,
    color: colors.secondary,
    lineHeight: 1.33
  },
  // PAGE 2 STYLES
  page2Header: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 5,
    marginBottom: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  page2HeaderTitle: {
    fontSize: 9.8,
    fontFamily: 'Helvetica-Bold',
    color: '#000000'
  },
  page2HeaderSub: {
    fontSize: 8.5,
    color: colors.muted
  },
  projectCard: {
    marginBottom: 6.5,
    padding: 6.5,
    backgroundColor: colors.cardBg,
    borderRadius: 3,
    borderWidth: 0.6,
    borderColor: colors.borderLight
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2
  },
  projectTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary
  },
  projectRole: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.muted
  },
  projectLink: {
    fontSize: 9,
    color: colors.accent,
    textDecoration: 'none',
    fontFamily: 'Helvetica-Bold'
  },
  projectDesc: {
    fontSize: 9.2,
    color: colors.secondary,
    lineHeight: 1.32,
    marginBottom: 3
  },
  projectTechRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  projectTechLabel: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    marginRight: 4
  },
  projectTech: {
    fontSize: 8.5,
    color: colors.accentLight,
    fontFamily: 'Helvetica-Bold'
  }
});

function createBullet(text) {
  return h(View, { style: styles.bulletPoint },
    h(Text, { style: styles.bulletDot }, '›'),
    h(Text, { style: styles.bulletText }, text)
  );
}

function createSkillRow(label, value) {
  return h(View, { style: styles.skillRow },
    h(Text, { style: styles.skillLabel }, label),
    h(Text, { style: styles.skillValue }, value)
  );
}

function createProjectBlock(title, role, linkText, linkUrl, desc, tech) {
  return h(View, { style: styles.projectCard },
    h(View, { style: styles.projectHeader },
      h(View, { style: { flexDirection: 'row', alignItems: 'center', gap: 4 } },
        h(Text, { style: styles.projectTitle }, title),
        h(Text, { style: styles.projectRole }, `• ${role}`)
      ),
      h(Link, { src: linkUrl, style: styles.projectLink }, linkText)
    ),
    h(Text, { style: styles.projectDesc }, desc),
    h(View, { style: styles.projectTechRow },
      h(Text, { style: styles.projectTechLabel }, 'Tech Stack:'),
      h(Text, { style: styles.projectTech }, tech)
    )
  );
}

const ResumeDocument = () => {
  return h(Document, {
    title: 'Olatunbosun Olashubomi - Resume (Extended)',
    author: 'Olatunbosun Olashubomi',
    subject: 'Software Engineer & Startup Founder Resume',
    keywords: 'Software Engineer, Full-Stack, AI Systems, OneRepAI, Founder, Next.js, Node.js, Remote'
  },
    // PAGE 1: Profile, Skills, and Core Work History
    h(Page, { size: 'A4', style: styles.page },
      // HEADER
      h(View, { style: styles.header },
        h(Text, { style: styles.name }, 'OLATUNBOSUN OLASHUBOMI'),
        h(Text, { style: styles.title }, 'Full-Stack & AI Systems Engineer • Startup Founder'),
        h(View, { style: styles.contactRow },
          h(Text, { style: styles.contactItem }, 'Lagos, Nigeria (Worldwide Remote)'),
          h(Text, { style: styles.pipeDivider }, '|'),
          h(Link, { src: 'mailto:pshubomi@gmail.com', style: styles.contactLink }, 'pshubomi@gmail.com'),
          h(Text, { style: styles.pipeDivider }, '|'),
          h(Text, { style: styles.contactItem }, '+234 916 196 5510'),
          h(Text, { style: styles.pipeDivider }, '|'),
          h(Link, { src: 'https://deritech.vercel.app/', style: styles.contactLink }, 'Portfolio'),
          h(Text, { style: styles.pipeDivider }, '|'),
          h(Link, { src: 'https://www.linkedin.com/in/derricktechtron-73717b23a', style: styles.contactLink }, 'LinkedIn'),
          h(Text, { style: styles.pipeDivider }, '|'),
          h(Link, { src: 'https://github.com/Derrick99234', style: styles.contactLink }, 'GitHub')
        )
      ),

      // SUMMARY
      h(View, { style: styles.section },
        h(Text, { style: styles.sectionTitle }, 'Professional Summary'),
        h(Text, { style: styles.summaryText },
          'Full-Stack & AI Systems Engineer with founder-grade execution and 3+ years of experience architecting high-performance web applications, resilient backend microservices, and autonomous AI agents. As the founder behind OneRepAI and builder across 20+ shipped production platforms, I combine commercial product discovery with deep backend rigor—building software that eliminates operational friction, drives user retention, and delivers measurable commercial impact. Available immediately for high-impact Contract & Remote roles.'
        )
      ),

      // TECHNICAL SKILLS
      h(View, { style: styles.section },
        h(Text, { style: styles.sectionTitle }, 'Technical Skills'),
        h(View, { style: styles.skillsGrid },
          createSkillRow('Languages & Core:', 'TypeScript, JavaScript (ES6+), Python, HTML5, CSS3, SQL'),
          createSkillRow('Frontend & Mobile:', 'React.js, Next.js (App Router), React Native, Tailwind CSS, Expo, NativeWind, Zustand, Redux'),
          createSkillRow('Backend & APIs:', 'Node.js, Express.js, NestJS, RESTful APIs, WebSockets, Microservices Architecture, JWT / RBAC'),
          createSkillRow('AI & Integrations:', 'OpenAI & Claude LLM APIs, Twilio Voice API, Paystack & Stripe Gateways, Google Calendar API, RAG'),
          createSkillRow('Databases & DevOps:', 'PostgreSQL, MongoDB, Redis, Docker, Git & GitHub, AWS, Firebase, CI/CD, Postman, Linux')
        )
      ),

      // WORK EXPERIENCE (Page 1 focus: OneRepAI & Sleeky Programmers & iDeyFind)
      h(View, { style: styles.section },
        h(Text, { style: styles.sectionTitle }, 'Professional Work Experience'),

        // OneRepAI
        h(View, { style: styles.expItem },
          h(View, { style: styles.expHeader },
            h(View, null,
              h(Text, { style: styles.expRole }, 'Founder & Lead Software Engineer'),
              h(Text, { style: styles.expCompany }, 'OneRepAI — Remote')
            ),
            h(Text, { style: styles.expDates }, 'Jan 2025 – Present')
          ),
          h(View, { style: styles.bulletList },
            createBullet('Architected and launched an omnichannel 24/7 AI digital team member platform automating lead qualification, customer support, and appointment scheduling across WhatsApp, Instagram, and web chat.'),
            createBullet('Engineered a dynamic RAG knowledge ingestion pipeline (PDFs, docs, URL crawling) with behavioral guardrails to eliminate hallucinations and maintain brand alignment.'),
            createBullet('Implemented sub-second real-time conversational streaming and voice interaction pipelines utilizing Twilio Voice API and duplex WebSocket channels.'),
            createBullet('Built a unified multi-channel shared inbox and two-way Google Calendar synchronization using Next.js, Node.js, and MongoDB.')
          )
        ),

        // Sleeky Programmers
        h(View, { style: styles.expItem },
          h(View, { style: styles.expHeader },
            h(View, null,
              h(Text, { style: styles.expRole }, 'Software Engineer'),
              h(Text, { style: styles.expCompany }, 'Sleeky Programmers Limited — Remote')
            ),
            h(Text, { style: styles.expDates }, 'Aug 2024 – Apr 2025')
          ),
          h(View, { style: styles.bulletList },
            createBullet('Designed and deployed scalable backend microservices and RESTful API endpoints utilizing NestJS, TypeScript, Node.js, and PostgreSQL in Dockerized environments.'),
            createBullet('Optimized database queries and implemented caching strategies, reducing API response latency by 35%.'),
            createBullet('Integrated third-party payment gateways, authentication flows, and webhook event consumers with resilient error-handling.'),
            createBullet('Actively reviewed 50+ pull requests, enforcing type safety, coding standards, and architectural consistency across the engineering team.')
          )
        ),

        // iDeyFind
        h(View, { style: styles.expItem },
          h(View, { style: styles.expHeader },
            h(View, null,
              h(Text, { style: styles.expRole }, 'Software Engineer'),
              h(Text, { style: styles.expCompany }, 'iDeyFind — Remote')
            ),
            h(Text, { style: styles.expDates }, 'Jan 2024 – Dec 2024')
          ),
          h(View, { style: styles.bulletList },
            createBullet('Collaborated in agile cross-functional teams to build and maintain internal enterprise applications from prototype to production.'),
            createBullet('Authored comprehensive API documentation and internal technical guides, streamlining onboarding and knowledge transfer.'),
            createBullet('Maintained CI/CD pipelines and feature branching workflows in Git to guarantee clean, zero-downtime releases.')
          )
        )
      )
    ),

    // PAGE 2: Top 5 Flagship Projects & Teaching/Mentorship
    h(Page, { size: 'A4', style: styles.page },
      // RUNNING HEADER
      h(View, { style: styles.page2Header },
        h(Text, { style: styles.page2HeaderTitle }, 'OLATUNBOSUN OLASHUBOMI — Technical Portfolio'),
        h(Text, { style: styles.page2HeaderSub }, 'Page 2 | pshubomi@gmail.com | +234 916 196 5510')
      ),

      // SELECTED PROJECTS SECTION
      h(View, { style: styles.section },
        h(Text, { style: styles.sectionTitle }, 'Top 5 Flagship Production Projects'),

        // 1. OneRepAI
        createProjectBlock(
          '1. OneRepAI',
          'Autonomous Voice & Chat AI Platform',
          'onerepai.com',
          'https://onerepai.com',
          '24/7 AI digital team member & omnichannel inbox automating customer support, lead qualification, and appointment booking. Features real-time voice streaming via Twilio, dynamic knowledge base ingestion (PDF/web), and Google Calendar synchronization.',
          'Next.js • TypeScript • Node.js • Twilio Voice • OpenAI • WebSockets • MongoDB'
        ),

        // 2. Urban Grill Lounge
        createProjectBlock(
          '2. Urban Grill Lounge',
          'Hospitality & VIP Table Booking Engine',
          'urban-grill-lounge.vercel.app',
          'https://urban-grill-lounge.vercel.app',
          'Full-stack restaurant and cocktail lounge platform featuring an interactive digital menu, real-time VIP table reservation workflows, and event booking management with sub-second page transitions.',
          'Next.js 14 • TypeScript • Tailwind CSS • Responsive UI/UX • Vercel'
        ),

        // 3. Intertex NG Shop
        createProjectBlock(
          '3. Intertex NG Shop',
          'Fashion E-Commerce & Paystack Fintech',
          'intertexng.shop',
          'https://intertexng.shop',
          'Modern apparel e-commerce store with persistent cart state, webhook-verified Paystack payment gateway integration, order tracking, and high-conversion catalog filtering.',
          'Next.js • React • Paystack API • REST APIs • Tailwind CSS • State Management'
        ),

        // 4. Ajani Smart Guide
        createProjectBlock(
          '4. Ajani Smart Guide',
          'Real-Time Regional AI Advisory Engine',
          'ajani.ai',
          'https://ajani.ai',
          'AI-driven regional intelligence engine delivering multi-turn recommendations on local services, hospitality, and real-time commodity prices with streaming WebSocket responses.',
          'Node.js • Express • LLM APIs • WebSockets • MongoDB • Streaming APIs'
        ),

        // 5. Whatechnology
        createProjectBlock(
          '5. Whatechnology',
          'Enterprise Digital Consultancy Platform',
          'whatechnology.com',
          'https://whatechnology.com',
          'Corporate digital consultancy platform showcasing cloud architecture, software engineering, DevOps security, and IT enterprise solutions with optimized SEO architecture.',
          'Next.js • TypeScript • Enterprise SEO • Tailwind CSS • Vercel'
        )
      ),

      // TEACHING & LEADERSHIP EXPERIENCE
      h(View, { style: styles.section },
        h(Text, { style: styles.sectionTitle }, 'Leadership, Mentorship & Teaching'),

        // Goldtech
        h(View, { style: styles.expItem },
          h(View, { style: styles.expHeader },
            h(View, null,
              h(Text, { style: styles.expRole }, 'Software Engineering Instructor & Mentor'),
              h(Text, { style: styles.expCompany }, 'Goldtech ICT Hub LTD — Lagos, Nigeria')
            ),
            h(Text, { style: styles.expDates }, 'Sep 2024 – Dec 2024')
          ),
          h(View, { style: styles.bulletList },
            createBullet('Conducted rigorous hands-on training sessions for 50+ students in React, Next.js, TypeScript, and modern API integration workflows.'),
            createBullet('Mentored developers-in-training through real-world project builds, instilling clean code principles, Git workflows, and documentation clarity.')
          )
        ),

        // Babtech
        h(View, { style: styles.expItem },
          h(View, { style: styles.expHeader },
            h(View, null,
              h(Text, { style: styles.expRole }, 'Frontend Web Developer & Mentor'),
              h(Text, { style: styles.expCompany }, 'Babtech Computers — Lagos, Nigeria')
            ),
            h(Text, { style: styles.expDates }, 'Oct 2023 – Apr 2024')
          ),
          h(View, { style: styles.bulletList },
            createBullet('Led the development of responsive web applications, improving user engagement by 20% through modern CSS architecture and accessible components.'),
            createBullet('Guided junior developers on best practices in React state management and component reusability.')
          )
        )
      )
    )
  );
};

async function generate() {
  const publicV2Path = path.resolve(__dirname, '../public/OLATUNBOSUN_RESUME_V2.pdf');

  console.log('Rendering 2-page V2 PDF resume...');
  await ReactPDF.renderToFile(h(ResumeDocument), publicV2Path);
  console.log(`Saved to ${publicV2Path}`);
}

generate().catch(err => {
  console.error('Error rendering PDF:', err);
  process.exit(1);
});
