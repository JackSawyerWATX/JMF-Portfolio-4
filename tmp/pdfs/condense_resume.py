from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from pypdf import PdfReader
import pypdfium2 as pdfium

out = Path("output/pdf/Jonathan_Fausset_Resume_One_Page.pdf")
styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=23, leading=27, textColor=HexColor("#142536"), spaceAfter=4),
    "title": ParagraphStyle("title", fontName="Helvetica", fontSize=11, leading=14, spaceAfter=5),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=9, leading=12, textColor=HexColor("#364858")),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, leading=12.5, spaceAfter=4),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=HexColor("#142536"), spaceBefore=11, spaceAfter=6),
    "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=9.8, leading=13),
    "date": ParagraphStyle("date", fontName="Helvetica", fontSize=9.2, leading=13, alignment=2),
    "company": ParagraphStyle("company", fontName="Helvetica", fontSize=9.3, leading=12, textColor=HexColor("#364858"), spaceAfter=4),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.5, leading=12.5, leftIndent=10, firstLineIndent=-8, spaceAfter=3),
}
story = []
def p(text, style="body"):
    story.append(Paragraph(text, styles[style]))
def section(text):
    p(text, "section")
def role(title, dates, company):
    row = Table([[Paragraph(title, styles["role"]), Paragraph(dates, styles["date"])]], colWidths=[370, 166])
    row.setStyle(TableStyle([("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),1)]))
    story.append(row)
    p(company, "company")
def bullet(text):
    p("- " + text, "bullet")

p("Jonathan Fausset", "name")
p("Full Stack Developer | Backend Architecture &amp; AI Systems", "title")
p('<link href="mailto:contact@jonathanfausset.com">contact@jonathanfausset.com</link>  |  <link href="https://www.jonathanfausset.com">www.jonathanfausset.com</link>', "contact")
p('<link href="https://linkedin.com/in/jonathan-fausset-dev">linkedin.com/in/jonathan-fausset-dev</link>  |  <link href="https://github.com/jacksawyerwatx">github.com/jacksawyerwatx</link>', "contact")
story.append(Spacer(1, 9))
p("Full stack developer with 6+ years of experience building backend systems, APIs, and data pipelines. Experienced in Python, Node.js, PostgreSQL, and cloud-native development on AWS and Azure, with hands-on work supporting AI workflows and model integration.")

section("TECHNICAL SKILLS")
p("<b>Languages &amp; frameworks:</b> Python, JavaScript, TypeScript, Node.js, Express, FastAPI, React, Angular, HTML5, CSS3")
p("<b>Data &amp; architecture:</b> PostgreSQL, SQL Server, MySQL, MongoDB, Redis, REST APIs, microservices, schema design, query optimization, data ingestion and processing, API-driven model inference")
p("<b>Cloud &amp; delivery:</b> AWS (Amplify, Lambda, API Gateway, S3, Route 53), Azure, Docker, GitHub Actions, Azure DevOps, CI/CD, OAuth, JWT")

section("PROFESSIONAL EXPERIENCE")
role("Full Stack Developer", "Jun 2026 - Present", "Syntronic Labs")
bullet("Lead client and internal development using React/Vite, Node.js/Express, Python/FastAPI, and PostgreSQL.")
bullet("Architect and deploy AWS applications with Amplify, Lambda, API Gateway, S3, and Route 53; manage automated build and deployment pipelines.")
bullet("Deliver REST API integrations and serverless contact workflows with Lambda and Resend, plus DNS, SPA routing, SEO, and structured data for nonprofit and commercial clients.")
story.append(Spacer(1, 5))
role("Full Stack Developer", "Nov 2022 - May 2026", "Jack Sawyer Software | Seattle, WA")
bullet("Built scalable backend systems, REST APIs, and microservices with Node.js, Express, Python, and PostgreSQL for data-heavy applications.")
bullet("Managed AWS and Azure infrastructure, deployment, monitoring, and S3 storage; integrated backend services with React and Angular applications.")
bullet("Reviewed code and established practices for maintainability, documentation, and security.")
story.append(Spacer(1, 5))
role("Software Engineer - Generative AI &amp; Web Development", "Jan 2024 - Jun 2025", "Outlier AI | San Francisco Bay Area")
bullet("Developed Python backend services, APIs, and microservices supporting AI tools, model workflows, and system integrations.")
bullet("Contributed to data ingestion and transformation pipelines; collaborated across teams to integrate AI-backed features into web applications.")
bullet("Supported CI/CD with GitHub Actions and Azure DevOps, production troubleshooting, and performance tuning.")
story.append(Spacer(1, 5))
role("Managing Director", "Sep 2010 - Dec 2020", "Bishop Motion Pictures | Redmond, WA")
bullet("Served as executive producer on film productions, overseeing operations and finances of feature films.")

section("EDUCATION &amp; PROFESSIONAL DEVELOPMENT")
p("Self-taught software engineer with bachelor's-equivalent professional experience. Continuous hands-on development in backend systems, cloud infrastructure, AI workflows, and model lifecycle integration.")

doc = SimpleDocTemplate(str(out), pagesize=letter, rightMargin=38, leftMargin=38, topMargin=30, bottomMargin=30, title="Jonathan Fausset Resume", author="Jonathan Fausset")
doc.build(story)
reader = PdfReader(out)
assert len(reader.pages) == 1, f"Expected 1 page, got {len(reader.pages)}"
render = pdfium.PdfDocument(str(out))
render[0].render(scale=1.7).to_pil().save("tmp/pdfs/resume-preview.png")
print(f"Created {out}: {len(reader.pages)} page")
