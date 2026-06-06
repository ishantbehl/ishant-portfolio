export interface SkillGroup {
  category: string;
  /** One-line description of the competency area. */
  summary: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Consulting',
    summary:
      'Enabling global strategy and advisory firms with multi-market primary research and decision-ready insight.',
    skills: [
      'Consulting Partnerships',
      'Strategic Client Partnering',
      'Multi-Market Strategy Enablement',
      'Proposal & Costing Strategy',
      'Feasibility & Sampling Design',
      'Stakeholder Management',
    ],
  },
  {
    category: 'Client Success',
    summary:
      'Owning high-value portfolios end to end — from scoping to post-engagement insight — to grow retention and revenue.',
    skills: [
      'Account Management',
      'Client Retention',
      'Revenue Growth (P&L Ownership)',
      'NPS & Satisfaction',
      'Relationship Building',
      'Engagement Delivery',
    ],
  },
  {
    category: 'Market Research',
    summary:
      'Designing and delivering qualitative and quantitative programs across 30+ global markets.',
    skills: [
      'Qualitative Research (IDIs, FGDs)',
      'Quantitative Research (CATI, CAWI, CAPI)',
      'B2B & Hard-to-Reach Audiences',
      'Expert Network Sourcing',
      'Consumer Behaviour',
      'Data Processing & Analytics',
    ],
  },
  {
    category: 'Leadership',
    summary:
      'Building capability, accountability, and a high-performance delivery culture across cross-functional teams.',
    skills: [
      'Team Mentoring & Coaching',
      'Cross-Functional Leadership',
      'Performance Management',
      'Capability Building',
      'Influence Without Authority',
      'Structured Problem Solving',
    ],
  },
  {
    category: 'Project Management',
    summary:
      'Driving complex, time-critical multi-country studies from scoping to final dataset delivery.',
    skills: [
      'End-to-End Delivery',
      'Workflow Optimisation',
      'Turnaround Reduction',
      'Quality Assurance Frameworks',
      'Rapid Turnaround Models',
      'Risk & Scope Planning',
    ],
  },
];
