export default function AboutDetails() {
  return (
    <section className="about-details">
      <div className="about-detail-grid">
        <article className="about-story custom-bg">
          <p className="eyebrow">DEVELOPMENT WITH PERSPECTIVE</p>
          <h2>
            Grounded in code.
            <br />
            Driven by discovery.
          </h2>
          <p>
            My work brings together web engineering and visual design. With
            JavaScript, React, and Next.js, I create websites and applications
            that connect people with ideas.
          </p>
          <p>
            From full stack applications to immersive 3D experiences, I enjoy
            finding the right tools for each challenge and making complex things
            feel simple.
          </p>
        </article>
        <div className="about-facts">
          <div className="about-stat custom-bg">
            <strong>
              18<span>+</span>
            </strong>
            <p>Clients</p>
          </div>
          <div className="about-stat custom-bg">
            <strong>
              4<span>+</span>
            </strong>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className="toolkit-panel custom-bg">
        <p className="eyebrow">TOOLS FOR THE JOURNEY</p>
        <div>
          {[
            "Python",
            "JavaScript",
            "TypeScript",
            "React",
            "Vite",
            "Angular",
            "Next.js",
            "Node.js",
            "Express",
            "FastAPI",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Three.js",
            "PostgreSQL",
            "SQL Server",
            "MySQL",
            "MongoDB",
            "REST APIs",
            "Microservices",
            "Schema Design",
            "Query Optimization",
            "Data Ingestion & Processing",
            "Data Transformation",
            "AI",
            "Agentic AI",
            "RAG",
            "LLM Integration",
            "AI Evaluation",
            "AI Workflows",
            "Model Integration",
            "API-Driven Model Inference",
            "Model Lifecycle Integration",
            "AWS",
            "AWS Amplify",
            "AWS Lambda",
            "API Gateway",
            "Amazon S3",
            "Route 53",
            "Docker",
            "Git",
            "GitHub Actions",
            "CI/CD",
            "DNS",
            "SEO",
            "Structured Data",
            "Cloud Infrastructure",
            "Monitoring",
            "Production Troubleshooting",
            "Performance Tuning",
            "Code Review",
            "Technical Documentation",
            "Application Security",
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
