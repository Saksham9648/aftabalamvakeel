// Define a simplified BlogPost type for static content if the one from supabase.ts is too complex
export interface StaticBlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  image_url: string
  tags: string[]
  created_at: string
}

export const staticBlogPosts: StaticBlogPost[] = [
  {
    id: "1",
    title: "Understanding Property Rights in India: A Comprehensive Guide",
    slug: "understanding-property-rights-india",
    content: `
      <h2>Introduction to Property Rights</h2>
      <p>Property rights form the foundation of real estate ownership in India. Understanding these rights is crucial for anyone looking to buy, sell, or invest in property.</p>
      
      <h2>Types of Property Rights</h2>
      <p>In India, property rights can be categorized into several types:</p>
      <ul>
        <li><strong>Freehold Rights:</strong> Complete ownership of the property and land</li>
        <li><strong>Leasehold Rights:</strong> Rights to use property for a specific period</li>
        <li><strong>Easement Rights:</strong> Rights to use another's property for specific purposes</li>
      </ul>
      
      <h2>Legal Documentation</h2>
      <p>Proper documentation is essential for establishing and protecting property rights. Key documents include:</p>
      <ul>
        <li>Sale Deed</li>
        <li>Title Deed</li>
        <li>Property Registration Documents</li>
        <li>Mutation Records</li>
      </ul>
      
      <h2>Common Property Disputes</h2>
      <p>Property disputes often arise due to:</p>
      <ul>
        <li>Unclear title documents</li>
        <li>Boundary disputes</li>
        <li>Inheritance issues</li>
        <li>Fraudulent transactions</li>
      </ul>
      
      <h2>Legal Remedies</h2>
      <p>When property rights are violated, several legal remedies are available:</p>
      <ul>
        <li>Civil suits for declaration of title</li>
        <li>Injunction orders</li>
        <li>Possession suits</li>
        <li>Criminal complaints for fraud</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Understanding property rights and maintaining proper documentation is crucial for protecting your real estate investments. Always consult with experienced legal professionals when dealing with property matters.</p>
    `,
    excerpt:
      "Learn about the fundamental aspects of property rights, documentation, and legal procedures in Indian real estate.",
    image_url: "/placeholder.svg?height=300&width=500",
    tags: ["Property Law", "Real Estate", "Legal Guide"],
    created_at: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Criminal Law Reforms 2024: What You Need to Know",
    slug: "criminal-law-reforms-2024",
    content: `
      <h2>Recent Criminal Law Reforms</h2>
      <p>The recent amendments to criminal law have brought significant changes to the legal landscape in India.</p>
      <p>These reforms aim to modernize the criminal justice system and ensure faster delivery of justice.</p>
      
      <h2>Key Changes</h2>
      <ul>
        <li>Digitization of court processes</li>
        <li>Faster trial procedures</li>
        <li>Enhanced victim protection</li>
        <li>Modernized evidence collection</li>
      </ul>
      
      <h2>Impact on Citizens</h2>
      <p>These reforms will have a significant impact on citizens, ensuring more transparent and efficient legal processes.</p>
      <p>It is important to stay informed about these changes to understand your rights and obligations.</p>
    `,
    excerpt: "Explore the latest criminal law reforms and their impact on legal proceedings in India.",
    image_url: "/placeholder.svg?height=300&width=500",
    tags: ["Criminal Law", "Legal Reforms", "2024"],
    created_at: "2024-01-10T10:00:00Z",
  },
  {
    id: "3",
    title: "Family Court Procedures: A Step-by-Step Guide",
    slug: "family-court-procedures-guide",
    content: `
      <h2>Understanding Family Court</h2>
      <p>Navigating family court can be overwhelming. This guide breaks down the process step by step.</p>
      <p>From filing petitions to final judgments, we cover everything you need to know.</p>
      
      <h2>Filing Process</h2>
      <ol>
        <li>Prepare necessary documents</li>
        <li>File petition with court fees</li>
        <li>Serve notice to other party</li>
        <li>Attend hearings</li>
        <li>Follow court orders</li>
      </ol>
      
      <h2>Common Family Law Cases</h2>
      <p>Family courts handle a variety of cases, including:</p>
      <ul>
        <li>Divorce and separation</li>
        <li>Child custody and visitation</li>
        <li>Spousal and child support</li>
        <li>Adoption</li>
      </ul>
    `,
    excerpt: "A detailed walkthrough of family court procedures, from filing to final judgment.",
    image_url: "/placeholder.svg?height=300&width=500",
    tags: ["Family Law", "Court Procedures", "Legal Process"],
    created_at: "2024-01-05T10:00:00Z",
  },
]
