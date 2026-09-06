export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightRecord = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  readingTime: string;
  summary: string;
  sections: InsightSection[];
};

export const insights: InsightRecord[] = [
  {
    slug: "ai-search-visibility-business-framework",
    title: "AI Search Visibility: A Practical Framework for Businesses",
    description:
      "A practical ISTRIADE framework for understanding how a business can assess its visibility across AI-powered search and answer environments.",
    category: "Search & Visibility",
    published: "2026-09-05",
    updated: "2026-09-05",
    readingTime: "7 min read",
    summary:
      "AI search visibility is not one ranking. It is a set of observable signals showing whether an AI system can recognize a business, connect it to relevant needs and surface it in useful answers.",
    sections: [
      {
        heading: "Visibility is broader than a single ranking",
        paragraphs: [
          "Traditional search measurement often starts with a position: where a page ranks for a query. AI-powered answer environments complicate that model. A business can be recognized but not recommended, mentioned for one type of question but absent for another, or understood correctly while competitors are surfaced more often.",
          "For that reason, ISTRIADE treats AI search visibility as a multi-signal observation problem rather than a single score. The useful question is not simply whether a brand appears. It is how consistently the business is recognized, understood and connected to the situations in which a prospective customer might need it.",
        ],
      },
      {
        heading: "Five questions create a useful diagnostic frame",
        paragraphs: [
          "A practical assessment can be organized around five questions. Together they separate basic entity recognition from commercially meaningful visibility.",
        ],
        bullets: [
          "Recognition: does the system appear to know that the business exists?",
          "Understanding: does it describe the business, offering and location accurately?",
          "Relevance: does the business appear for queries connected to the problems it solves?",
          "Recommendation: is it surfaced as an option when users ask for providers, products or alternatives?",
          "Evidence: are there accessible sources, citations or entity signals that support what the system says?",
        ],
      },
      {
        heading: "Observation should be separated from causality",
        paragraphs: [
          "A responsible visibility review should distinguish what can be observed from what cannot be proven. If a company is absent from an answer, the absence is observable. The exact internal reason a model produced that answer usually is not.",
          "This distinction matters operationally. It prevents teams from treating speculation about model internals as evidence. Instead, the analysis can focus on controllable factors such as entity clarity, website information, third-party references, local or industry signals, structured data and the consistency of public information across sources.",
        ],
      },
      {
        heading: "The output should lead to prioritized action",
        paragraphs: [
          "Measurement is useful only when it changes the next decision. A diagnostic should therefore end with a small number of actions ranked by expected relevance, effort and dependency rather than a long undifferentiated list of observations.",
          "For one business, the priority may be clarifying what the company does. For another, it may be strengthening authoritative source coverage, correcting inconsistent entity information or improving pages that explain specific services and markets. The objective is not to optimize for an opaque model. It is to make the public evidence about the business clearer, more consistent and easier to use.",
        ],
      },
      {
        heading: "A repeatable measurement system is more useful than a one-off test",
        paragraphs: [
          "AI answer environments change. Individual outputs can also vary. That makes a repeatable query set, consistent observation method and recorded evidence more valuable than isolated screenshots or anecdotal checks.",
          "ISTRIADE's operating view is simple: define the questions that matter, observe multiple environments, preserve the evidence, distinguish facts from inference and repeat the measurement after meaningful changes. That creates a visibility system that can support decisions over time instead of a single moment of curiosity.",
        ],
      },
    ],
  },
  {
    slug: "human-governed-ai-operations",
    title: "Human-Governed AI Operations: Where Automation Needs Control",
    description:
      "An ISTRIADE operating framework for combining AI automation with explicit authority, evidence, verification and human decision gates.",
    category: "Automation & Execution",
    published: "2026-09-05",
    updated: "2026-09-05",
    readingTime: "8 min read",
    summary:
      "The useful question is not whether AI can perform a task. It is what authority the system should have, what evidence it must preserve and where human approval remains material.",
    sections: [
      {
        heading: "Capability and authority are different questions",
        paragraphs: [
          "An AI system may be technically capable of drafting a message, modifying a record, deploying code or initiating a transaction. That does not mean it should have unrestricted authority to do so. Operational design starts by separating capability from permission.",
          "ISTRIADE uses this distinction to define controlled execution. A system can prepare, analyze and verify broadly while still requiring a human decision before actions with material commercial, legal, financial or reputational consequences.",
        ],
      },
      {
        heading: "A useful control model has explicit states",
        paragraphs: [
          "Many failures in AI-assisted work come from collapsing different states into one. An idea is not an approval. A build is not a validation. A deployment is not commercial activation. When those distinctions are explicit, both humans and automated agents can reason about what is actually authorized.",
        ],
        bullets: [
          "Proposal: a possible course of action exists.",
          "Approval: the responsible person has authorized a defined scope.",
          "Build: the system or change has been constructed.",
          "Test: expected behavior has been checked.",
          "Validation: evidence supports that the intended outcome is real.",
          "Deployment: the change is present in the target environment.",
          "Activation: the system is allowed to affect customers, money or other material outcomes.",
        ],
      },
      {
        heading: "Human gates should be material, not constant",
        paragraphs: [
          "Human governance does not require approving every reversible technical step. That would turn oversight into a bottleneck and remove much of the value of automation. A better design lets agents continue through reversible, observable work and stop when a decision changes exposure, authority or consequence.",
          "Examples of material gates include publishing a previously private asset, enabling live payments, sending external outreach, changing a production dependency, accepting contractual obligations or making an irreversible data change. The exact gates depend on the operating context, but the principle is consistent: reserve human attention for decisions where judgment and accountability matter.",
        ],
      },
      {
        heading: "Evidence should travel with execution",
        paragraphs: [
          "Controlled execution is stronger when each important action produces its own evidence: test output, deployment state, version identifiers, read-back verification or a clear record of what changed. This makes it possible to distinguish an intended action from a completed one.",
          "The same evidence also makes rollback and diagnosis easier. Instead of asking whether an agent probably completed a task, the operating system can inspect the resulting state and compare it with the authorized target.",
        ],
      },
      {
        heading: "The goal is higher autonomy with clearer accountability",
        paragraphs: [
          "The purpose of governance is not to keep AI systems weak. It is to let them operate with greater useful autonomy inside explicit boundaries. When permissions, evidence and lifecycle states are designed in advance, more work can be delegated safely because the system knows where it may continue and where it must stop.",
          "That is the operating principle behind ISTRIADE's phrase: AI-operated where useful, human-governed where it matters.",
        ],
      },
    ],
  },
  {
    slug: "from-signal-to-execution",
    title: "From Signal to Execution: Designing AI Systems Around Business Decisions",
    description:
      "A framework for moving from raw information to structured decisions, controlled action and verification in AI-assisted business systems.",
    category: "Business Systems",
    published: "2026-09-05",
    updated: "2026-09-05",
    readingTime: "7 min read",
    summary:
      "AI becomes more useful when it is designed as part of a decision system: signal, structure, decision, execution and verification rather than an isolated generation step.",
    sections: [
      {
        heading: "The bottleneck is often not information",
        paragraphs: [
          "Businesses already produce large amounts of data, messages, reports, analytics and operational signals. The harder problem is turning those inputs into a clear next action. Adding another AI-generated summary does not necessarily solve that problem.",
          "ISTRIADE therefore frames intelligent systems around a decision chain rather than around a model call. The system should help identify relevant signals, structure them, support a decision, connect that decision to controlled execution and then verify what actually changed.",
        ],
      },
      {
        heading: "Signal comes before automation",
        paragraphs: [
          "Automation is only as useful as the information it acts on. A system should first define what evidence matters, where it comes from and how reliable it is. This may include structured business data, search observations, customer interactions, system events or manually supplied context.",
          "The goal is not to collect everything. It is to create enough signal to support the specific decision the system is meant to improve.",
        ],
      },
      {
        heading: "Structure turns evidence into an operating model",
        paragraphs: [
          "Raw information becomes more useful when it is normalized into explicit objects: opportunities, risks, constraints, tasks, dependencies, states and evidence. This structure lets humans and agents work against the same representation of reality.",
          "It also reduces ambiguity. Instead of relying on a long conversation to remember what was approved, the system can preserve a state such as tested but not deployed, or deployed but not commercially activated. That state then determines the next safe action.",
        ],
      },
      {
        heading: "Execution should be connected, not assumed",
        paragraphs: [
          "A recommendation has limited value when implementation remains disconnected. Where permissions and integrations allow it, an intelligent business system should be able to translate an approved decision into concrete work: update a system, create a task, modify a configuration, generate an artifact or coordinate another specialized agent.",
          "This does not mean every recommendation should execute automatically. It means the architecture should make the transition from decision to action explicit, governed and observable.",
        ],
      },
      {
        heading: "Verification closes the loop",
        paragraphs: [
          "Execution is not the final state. The system should verify whether the intended change happened and whether the evidence supports the claimed result. That may be as simple as reading a record back after a write or as involved as measuring business performance after an intervention.",
          "This creates a closed loop: signal becomes structure, structure supports a decision, the decision becomes controlled execution and verification creates new signal for the next cycle. That loop is more valuable than treating AI as a separate layer that only generates text.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
