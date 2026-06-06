export interface Role {
  title: string;
  period: string;
  duration: string;
  location: string;
  highlights: string[];
}

export interface Experience {
  /** Two-letter monogram used in the timeline marker. */
  monogram: string;
  company: string;
  /** Highest / most recent title — shown as the headline for the entry. */
  headlineRole: string;
  roles: Role[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    monogram: 'MX',
    company: 'Market Xcel',
    headlineRole: 'Associate Director',
    current: true,
    roles: [
      {
        title: 'Associate Director',
        period: 'Jan 2026 — Present',
        duration: '6 months',
        location: 'India',
        highlights: [
          'Lead consulting partnerships, enabling global strategy and advisory firms with end-to-end primary research and multi-market fieldwork execution.',
          'Own the P&L for consulting accounts, driving revenue growth, retention, and long-term strategic alignment.',
          'Partner with engagement managers and consulting teams on time-critical projects, ensuring execution aligned to client hypotheses and decision frameworks.',
          'Design and deliver qualitative and quantitative research programs across APAC, MENA, Europe, and North America.',
          'Oversee feasibility, costing, proposal development, and execution strategy for complex multi-country studies.',
          'Lead cross-functional teams across operations, CATI, recruitment, moderation, data processing, and analytics to ensure high-quality, timely delivery.',
          'Maintain strong stakeholder relationships with global consulting leaders, ensuring high NPS and repeat business.',
        ],
      },
    ],
  },
  {
    monogram: 'IR',
    company: 'Infollion Research Services',
    headlineRole: 'Client Servicing Lead',
    roles: [
      {
        title: 'Client Servicing Lead',
        period: 'Apr 2025 — Dec 2025',
        duration: '9 months',
        location: 'Gurugram, Haryana, India',
        highlights: [
          'Promoted to lead and mentor a growing team of 6+ professionals across Research and Client Servicing, managing high-impact projects for McKinsey, Bain & Company, and BCG.',
          'Oversaw end-to-end delivery of client engagements valued at $2M+ annually, from expert identification to final insight delivery.',
          'Drove team performance through structured training programs, performance reviews, and on-the-job coaching.',
          'Optimised internal workflows and project-management practices, improving turnaround times and delivery efficiency.',
          'Collaborated closely with internal stakeholders and clients to deliver strategic, data-backed insights that deepened relationships and retention.',
        ],
      },
      {
        title: 'Client Servicing Specialist',
        period: 'Jul 2023 — Mar 2025',
        duration: '1 year 9 months',
        location: 'Gurugram, Haryana, India',
        highlights: [
          'Led a high-impact team of 6, driving client success strategies for top consulting firms including McKinsey, Bain, and BCG.',
          'Spearheaded project delivery worth over $1M annually, ensuring seamless execution from expert sourcing to final insights.',
          'Achieved 3x revenue targets, earning "Best Performer of the Month".',
          'Optimised project-management processes, reducing turnaround time by 25%.',
          'Strengthened client relationships through data-driven insights, boosting retention and satisfaction.',
        ],
      },
      {
        title: 'Senior Associate',
        period: 'Mar 2022 — Jun 2023',
        duration: '1 year 4 months',
        location: 'Gurugram, Haryana, India',
        highlights: [
          'Expanded the expert network by 30%, sourcing top professionals across APAC, MENA, and the US.',
          'Conducted in-depth interviews, increasing expert–client match success by 40%.',
          'Managed a 70,000+ expert database, streamlining engagement and onboarding.',
        ],
      },
    ],
  },
  {
    monogram: 'MC',
    company: 'McKinsey & Company',
    headlineRole: 'McKinsey Forward Program',
    roles: [
      {
        title: 'McKinsey Forward Program',
        period: 'Apr 2025 — Jul 2025',
        duration: '4 months',
        location: 'India',
        highlights: [
          "Completed McKinsey's flagship program for early-career professionals, focused on foundational skills for the future of work.",
          'Structured problem solving (McKinsey style).',
          'Communicating with intention and impact.',
          'Influence without authority.',
          'Embracing continuous growth.',
        ],
      },
    ],
  },
  {
    monogram: 'CX',
    company: 'Concentrix',
    headlineRole: 'Sr. Representative, Operations',
    roles: [
      {
        title: 'Sr. Representative, Operations',
        period: 'Jun 2021 — Feb 2022',
        duration: '9 months',
        location: 'Gurugram, Haryana, India',
        highlights: [
          'Achieved a perfect NPS 10 score, earning "Best Performer of the Quarter".',
          'Exceeded KPIs through deep customer needs assessment and tailored solutions.',
        ],
      },
    ],
  },
  {
    monogram: 'SC',
    company: 'Sysmart Corporation',
    headlineRole: 'Market Research Analyst',
    roles: [
      {
        title: 'Market Research Analyst',
        period: 'Jun 2020 — Aug 2020',
        duration: '3 months',
        location: 'Maryland, United States',
        highlights: [
          'Studied the supplier evaluation and selection process at Sysmart Corporation.',
          'Conducted market study and analysis to discover prospective customer preferences.',
          'Performed competitive analysis on market offerings, trends, pricing, business models, and operations.',
        ],
      },
    ],
  },
  {
    monogram: 'BC',
    company: 'Backpackclan',
    headlineRole: 'Client Services Representative',
    roles: [
      {
        title: 'Client Services Representative',
        period: 'Mar 2017 — Mar 2019',
        duration: '2 years 1 month',
        location: 'Gurugram, Haryana, India',
        highlights: [
          'Resolved concerns with products and services to drive retention and sales.',
          'Identified customer issues, investigated causes, and initiated resolutions.',
          'Used exceptional communication to connect with customers, assess needs, and present solutions.',
        ],
      },
    ],
  },
];
