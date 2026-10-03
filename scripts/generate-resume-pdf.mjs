import React from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const h = React.createElement;

const colors = {
  primary: '#0f172a',
  secondary: '#334155',
  accent: '#2563eb',
  accentDark: '#1d4ed8',
  text: '#1e293b',
  muted: '#64748b',
  border: '#cbd5e1',
  cardBg: '#f8fafc',
  bg: '#ffffff'
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 28,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: colors.text,
    lineHeight: 1.35,
    backgroundColor: colors.bg
  },
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: colors.primary,
    paddingBottom: 8,
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    letterSpacing: -0.3,
    marginBottom: 2
  },
  title: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.accent,
    marginBottom: 4
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: 8.2,
    color: colors.muted
  },
  contactItem: {
    marginRight: 5
  },
  contactLink: {
    color: colors.accentDark,
    textDecoration: 'none'
  },
  dividerDot: {
    marginRight: 5,
    color: colors.muted
  },
  section: {
    marginBottom: 9
  },
  sectionTitle: {
    fontSize: 9.8,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    borderBottomWidth: 0.8,
    borderBottomColor: colors.border,
    paddingBottom: 2,
    marginBottom: 5
  },
  summaryText: {
    fontSize: 8.6,
    color: colors.secondary,
    lineHeight: 1.38
  },
  skillsGrid: {
    flexDirection: 'column',
    gap: 2
  },
  skillRow: {
    flexDirection: 'row',
    fontSize: 8.4,
    marginBottom: 1.5
  },
  skillLabel: {
    width: '25%',
    fontFamily: 'Helvetica-Bold',
    color: colors.primary
  },
  skillValue: {
    width: '75%',
    color: colors.secondary
  },
  expItem: {
    marginBottom: 6
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1.5
  },
  expRole: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary
  },
  expCompany: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.accentDark
  },
  expDates: {
    fontSize: 8.2,
    color: colors.muted,
    fontFamily: 'Helvetica-Bold'
  },
  bulletList: {
    marginTop: 1.5,
    paddingLeft: 3
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 1.8
  },
  bulletDot: {
    width: 8,
    fontSize: 8,
    color: colors.accent
  },
  bulletText: {
    flex: 1,
    fontSize: 8.3,
    color: colors.secondary,
    lineHeight: 1.32
  },
  projectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  projectCard: {
    width: '49%',
    marginBottom: 4,
    padding: 4.5,
    backgroundColor: colors.cardBg,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: colors.border
  },
  projectTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1.5
  },
  projectTitle: {
    fontSize: 8.6,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary
  },
  projectLink: {
    fontSize: 7.5,
    color: colors.accent,
    textDecoration: 'none'
  },
  projectDesc: {
    fontSize: 7.7,
    color: colors.secondary,
    lineHeight: 1.25,
    marginBottom: 2
  },
  projectTech: {
    fontSize: 7.2,
    color: colors.muted,
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

function createProjectCard(title, linkText, linkUrl, desc, tech) {
  return h(View, { style: styles.projectCard },
    h(View, { style: styles.projectTitleRow },
      h(Text, { style: styles.projectTitle }, title),
      h(Link, { src: linkUrl, style: styles.projectLink }, linkText)
    ),
    h(Text, { style: styles.projectDesc }, desc),
    h(Text, { style: styles.projectTech }, tech)
  );
}

const ResumeDocument = () => {
  return h(Document, {
    title: 'Olatunbosun Olashubomi - Resume',
    author: 'Olatunbosun Olashubomi',
    subject: 'Software Engineer Resume',
    keywords: 'Software Engineer, Full-Stack, TypeScript, React, Next.js, Node.js, AI, Remote'
  },
    h(Page, { size: 'A4', style: styles.page },
      // HEADER
      h(View, { style: styles.header },
        h(Text, { style: styles.name }, 'OLATUNBOSUN OLASHUBOMI'),
        h(Text, { style: styles.title }, 'Software Engineer | Full-Stack & AI Systems (Contract • Remote)'),
        h(View, { style: styles.contactRow },
          h(Text, { style: styles.contactItem }, 'Lagos, Nigeria (Worldwide Remote)'),
          h(Text, { style: styles.dividerDot }, '•'),
          h(Text, { style: styles.contactItem }, 'pshubomi@gmail.com'),
          h(Text, { style: styles.dividerDot }, '•'),
          h(Text, { style: styles.contactItem }, '+234 916 196 5510'),
          h(Text, { style: styles.dividerDot }, '•'),
          h(Link, { src: 'https://github.com/Derrick99234', style: styles.contactLink }, 'github.com/Derrick99234'),
          h(Text, { style: styles.dividerDot }, '•'),
          h(Link, { src: 'https://www.linkedin.com/in/derricktechtron-73717b23a', style: styles.contactLink }, 'linkedin.com/in/derricktechtron')
        )
      ),

      // SUMMARY
      h(View, { style: styles.section },
        h(Text, { style: styles.sectionTitle }, 'Professional Summary'),
        h(Text, { style: styles.summaryText },
          'Full-Stack Software Engineer with 3+ years of experience building high-performance web & mobile applications, resilient microservices, and autonomous AI automation systems. Proven track record building production AI SaaS platforms (OneRepAI), integrating payment gateways (Paystack/Stripe), orchestrating cloud pipelines (Docker, AWS), and mentoring 50+ engineers. Available immediately for high-impact Contract & Remote roles.'
        )
      ),

      // TECHNICAL SKILLS
      h(View, { style: styles.section },
        h(Text, { style: styles.sectionTitle }, 'Technical Skills'),
        h(View, { style: styles.skillsGrid },
          createSkillRow('Languages & Frontend:', 'TypeScript, JavaScript (ES6+), React.js, Next.js, React Native, Tailwind CSS, HTML5, CSS3'),
          createSkillRow('Backend & Databases:', 'Node.js, Express.js, NestJS, Python, PostgreSQL, MongoDB, Redis, REST APIs, WebSockets'),
          createSkillRow('AI & Integrations:', 'OpenAI & Anthropic APIs, Twilio Voice API, Paystack, Stripe, Google Calendar API, LangChain'),
          createSkillRow('DevOps & Tools:', 'Docker, Git & GitHub, AWS, Firebase, CI/CD Pipelines, Postman, Jest, Linux, Agile/Scrum')
        )
      ),

      // WORK EXPERIENCE
      h(View, { style: styles.section },
        h(Text, { style: styles.sectionTitle }, 'Work Experience'),

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
            createBullet('Architected and deployed a 24/7 AI digital team member platform automating lead qualification, customer support, and appointment bookings across WhatsApp, Instagram, and web chat.'),
            createBullet('Built dynamic knowledge ingestion pipeline (PDF, DOCX, URL scraping) with hallucination guardrails to deliver accurate, brand-aligned multi-turn responses.'),
            createBullet('Implemented sub-second real-time conversational streaming and voice interactions using Twilio Voice API and WebSocket duplex channels.')
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
            createBullet('Developed scalable backend microservices and RESTful API endpoints utilizing NestJS, TypeScript, Node.js, and PostgreSQL in Dockerized environments.'),
            createBullet('Integrated third-party payment, webhook, and auth services; actively reviewed 50+ PRs to enforce code quality, type safety, and test coverage.')
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
            createBullet('Collaborated in cross-functional agile sprints to build and maintain internal enterprise applications from prototype to production.'),
            createBullet('Authored comprehensive API documentation and optimized database queries, reducing onboarding time for new engineering hires.')
          )
        ),

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
            createBullet('Conducted rigorous hands-on training sessions for 50+ students in React, Next.js, TypeScript, and modern API integration workflows.')
          )
        )
      ),

      // FEATURED PROJECTS
      h(View, { style: styles.section },
        h(Text, { style: styles.sectionTitle }, 'Selected Projects'),
        h(View, { style: styles.projectGrid },
          createProjectCard('OneRepAI', 'onerepai.com', 'https://onerepai.com', 'Autonomous AI digital team member & omnichannel inbox with Google Calendar and voice automation.', 'Next.js • TypeScript • AI APIs • Twilio • Node.js'),
          createProjectCard('Urban Grill Lounge', 'urban-grill-lounge.vercel.app', 'https://urban-grill-lounge.vercel.app', 'Restaurant & lounge platform with digital menu ordering and VIP table reservation workflows.', 'Next.js • Tailwind CSS • TypeScript • Vercel'),
          createProjectCard('Intertex NG Shop', 'intertexng.shop', 'https://intertexng.shop', 'Fashion & apparel e-commerce store with cart state management and Paystack checkout.', 'E-Commerce • Paystack • React • REST APIs'),
          createProjectCard('Ajani Smart Guide', 'ajani.ai', 'https://ajani.ai', 'AI-driven regional intelligence engine providing real-time commodity pricing and recommendations.', 'Node.js • LLM APIs • Express • WebSockets')
        )
      )
    )
  );
};

async function generate() {
  const publicPath = path.resolve(__dirname, '../public/OLATUNBOSUN_RESUME.pdf');
  const desktopPersonalPath = path.resolve(__dirname, '../../OLATUNBOSUN_RESUME.pdf');

  console.log('Rendering PDF resume...');
  await ReactPDF.renderToFile(h(ResumeDocument), publicPath);
  console.log(`Saved to ${publicPath}`);

  fs.copyFileSync(publicPath, desktopPersonalPath);
  console.log(`Copied to ${desktopPersonalPath}`);
}

generate().catch(err => {
  console.error('Error rendering PDF:', err);
  process.exit(1);
});
