import Link from "next/link"
import { ArrowRight, Code, Database, Download, ExternalLink, Github, Layers, Mail, Server } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LocationGreeting } from "@/components/location-greeting"
import { StructuredData } from "@/components/structured-data"
import { AnalyticsProvider } from "@/components/analytics-provider"
import { ScrollButton } from "@/components/scroll-button"
import { TrackedDownloadButton } from "@/components/tracked-download-button"
import { Toaster } from "@/components/ui/toaster"
import { DownloadStats } from "@/components/download-stats"

export default function Home() {
  return (
    <AnalyticsProvider>
      <div className="flex min-h-screen flex-col px-4 md:px-8 lg:px-12">
        <StructuredData />
        {/* Header/Navigation */}
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="font-bold text-xl">
              Jitin <span className="text-primary">Kayyala</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
            <TrackedDownloadButton
              resumePath="/files/JitinKayyala.pdf"
              fileName="JitinKayyala.pdf"
              className="hidden md:flex"
            />
          </div>
          
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="container py-24 md:py-32 space-y-8">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="space-y-6 md:w-1/2">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    Java Backend Developer
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Jitin <span className="text-primary">Kayyala</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground">
                    Building robust, scalable backend systems with Java
                  </p>
                </div>
                <p className="text-muted-foreground">
                  I'm a full stack developer with 15+ years of experience specializing in Java, Spring Boot, and
                  microservices architecture. I build high-performance, scalable systems that power modern applications.
                </p>

                <LocationGreeting />

                <div className="flex gap-4">
                <ScrollButton targetId="contact" size="lg">
                    Contact Me
                  </ScrollButton>
                  <ScrollButton targetId="projects" size="lg">                  
                    View Projects
                  </ScrollButton>
                </div>
                
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-square w-full max-w-[400px] rounded-full border-2 border-primary/20 p-1 relative mx-auto">
                  <img
                    src="/jitin.png?height=400&width=400"
                    alt="Jitin Kayyala"
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -top-4 -right-4 bg-background rounded-full p-3 shadow-lg border">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-background rounded-full p-3 shadow-lg border">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
            {/* Add download stats in hero section */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <DownloadStats />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-muted/50 py-16 md:py-24">
            <div className="container space-y-12">
              <div className="text-center space-y-4 max-w-[800px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                <p className="text-muted-foreground text-lg">
                  I'm a passionate backend developer with a focus on building efficient, scalable, and maintainable
                  systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>My Journey</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      I started my programming journey after my Instrumentation Engineering degree, where I discovered my passion
                      for backend development. Over the past 15+ years, I've worked with various companies to build robust
                      backend systems that handle millions of requests daily.
                    </p>
                    <p>
                      My expertise lies in designing and implementing high-performance Java applications, microservices
                      architecture, and database optimization. I'm constantly learning and adapting to new technologies
                      to stay at the forefront of backend development.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Education & Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="border-b pb-4">
                        <div className="font-medium">BE in Instrumentation Engineering</div>
                      </li>
                      <li className="border-b pb-4">
                        <div className="font-medium">Oracle Certified Professional: Java Developer</div>
                      </li>
                      <li className="border-b pb-4">
                        <div className="font-medium">Spring Professional Certification</div>
                      </li>
                      <li>
                        <div className="font-medium">AWS Certified Solution Architect - Associate</div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16 md:py-24">
            <div className="container space-y-12">
              <div className="text-center space-y-4 max-w-[800px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
                <p className="text-muted-foreground text-lg">
                  My expertise spans across various backend technologies and frameworks
                </p>
              </div>

              <Tabs defaultValue="languages" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="languages">Languages</TabsTrigger>
                  <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                  <TabsTrigger value="databases">Databases</TabsTrigger>
                  <TabsTrigger value="tools">Tools & DevOps</TabsTrigger>
                </TabsList>
                <TabsContent value="languages" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <SkillCard
                      title="Java"
                      icon={<Code className="h-8 w-8 text-primary" />}
                      level="Expert"
                      description="Java EE, Java 8-17 features"
                    />
                    <SkillCard
                      title="SQL"
                      icon={<Database className="h-8 w-8 text-primary" />}
                      level="Advanced"
                      description="Complex queries, optimization, stored procedures"
                    />
                    <SkillCard
                      title="Python"
                      icon={<Code className="h-8 w-8 text-primary" />}
                      level="Basic"
                      description="Data processing, automation scripts"
                    />
                    <SkillCard
                      title="JavaScript"
                      icon={<Code className="h-8 w-8 text-primary" />}
                      level="Intermediate"
                      description="Node.js, Express, basic frontend"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="frameworks" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <SkillCard
                      title="Spring Boot"
                      icon={<Layers className="h-8 w-8 text-primary" />}
                      level="Expert"
                      description="REST APIs, Security, Data JPA"
                    />
                    <SkillCard
                      title="Hibernate"
                      icon={<Database className="h-8 w-8 text-primary" />}
                      level="Advanced"
                      description="ORM, JPA, performance tuning"
                    />
                    <SkillCard
                      title="Vue"
                      icon={<Layers className="h-8 w-8 text-primary" />}
                      level="Intermediate"
                      description="Single page apps"
                    />
                    <SkillCard
                      title="Next"
                      icon={<Layers className="h-8 w-8 text-primary" />}
                      level="Intermediate"
                      description="HMPO admin applications"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="databases" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <SkillCard
                      title="PostgreSQL"
                      icon={<Database className="h-8 w-8 text-primary" />}
                      level="Expert"
                      description="Performance tuning, complex queries"
                    />
                    <SkillCard
                      title="MySQL"
                      icon={<Database className="h-8 w-8 text-primary" />}
                      level="Intermediate"
                      description="Sql queries, optimization"
                    />
                    <SkillCard
                      title="MongoDB"
                      icon={<Database className="h-8 w-8 text-primary" />}
                      level="Intermediate"
                      description="Document design, aggregation pipeline"
                    />
                    <SkillCard
                      title="Redis"
                      icon={<Database className="h-8 w-8 text-primary" />}
                      level="Intermediate"
                      description="Caching, pub/sub, data structures"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="tools" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <SkillCard
                      title="Docker"
                      icon={<Server className="h-8 w-8 text-primary" />}
                      level="Advanced"
                      description="Containerization, multi-stage builds"
                    />
                    <SkillCard
                      title="Kubernetes"
                      icon={<Server className="h-8 w-8 text-primary" />}
                      level="Intermediate"
                      description="Deployment, scaling, service mesh"
                    />
                    <SkillCard
                      title="CI/CD"
                      icon={<Server className="h-8 w-8 text-primary" />}
                      level="Advanced"
                      description="Jenkins, GitHub Actions, GitLab CI"
                    />
                    <SkillCard
                      title="AWS"
                      icon={<Server className="h-8 w-8 text-primary" />}
                      level="Intermediate"
                      description="EC2, S3, RDS, Lambda, ECS"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="bg-muted/50 py-16 md:py-24">
            <div className="container space-y-12">
              <div className="text-center space-y-4 max-w-[800px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
                <p className="text-muted-foreground text-lg">
                  A selection of my most significant full stack development work
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>HMPO & Companies House</CardTitle>
                    <CardDescription>Public Services Website</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                      <img
                        src="/passport.png?height=200&width=400"
                        alt="E-Commerce Architecture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground mb-4">
                    Responsible for improving or enhancing the U/X of the website by adding new journeys or modifying existing journey as part of a team in Kainos.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">Java 17</Badge>
                      <Badge variant="secondary">Spring Boot</Badge>
                      <Badge variant="secondary">Kafka</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">AWS Lambda</Badge>
                      <Badge variant="secondary">Kubernetes</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>World Check One</CardTitle>
                    <CardDescription>LSEG Risk Assessment product</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                      <img
                        src="/WorldCheckOne.png?height=200&width=400"
                        alt="Banking API Architecture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground mb-4">
                    Led a team and was responsible for making changes in the World Check One product of LSEG and improving casesearch functionality.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">Java 11</Badge>
                      <Badge variant="secondary">Spring Boot</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">ElasticSearch</Badge>
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">Docker</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>Insight UK Ltd</CardTitle>
                    <CardDescription>B2B ecommerce website</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                      <img
                        src="/insight.png?height=200&width=400"
                        alt="Data Pipeline Architecture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground mb-4">
                    Responsible for creating REST interfaces and integrating third party applications and building services for adding functionality to the website.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">Spring Boot</Badge>
                      <Badge variant="secondary">Kafka</Badge>
                      <Badge variant="secondary">RabbitMQ</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">MS-SQL</Badge>
                      <Badge variant="secondary">Docker</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-16 md:py-24">
            <div className="container space-y-12">
              <div className="text-center space-y-4 max-w-[800px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
                <p className="text-muted-foreground text-lg">My professional journey as a Java backend developer</p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>Senior Engineer</CardTitle>
                        <CardDescription>Kainos • Full-time</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        Sep 2022 - Present
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                      Mentored new members through pair programming to enhance Sprint contributions.
                      </li>
                      <li>
                      Led the migration of Perl services to Java leveraging GitHub Copilot for POC development.
                      </li>
                      <li>
                      Designed Open Design Proposals for multi-microservice architecture changes.
                      </li>
                      <li>
                      Improved 95 percentile response time of bio search SQL query and increased performance by 50% to meet NFR requirements.
                      </li>
                      <li>
                      Reduced bad requests by 30% through third-party API integration and improved user experience of website.
                      </li>
                      <li>
                      Spearheaded the migration of a legacy HMPO service ensuring seamless data transformation.
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>Lead Software Engineer</CardTitle>
                        <CardDescription>LSEG • Full-time</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        Nov 2019 - Sep 2022
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                      Led 20+ functional changes in the World Check product ensuring smooth releases.
                      </li>
                      <li>
                      Led a 5-member team to optimize Elasticsearch sorting, improving response times by 70%.
                      </li>
                      <li>Enhanced goal-focused sprints and streamlined context switching to boost team productivity.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>Java Developer</CardTitle>
                        <CardDescription>Insight UK • Full-time</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        Sep 2014 - Nov 2019
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                      Responsible for creating REST interface for Gigya and GoCardless and integrating it on the website.
                      </li>
                      <li>
                      Led the Global Redesign initiative, creating REST APIs for an enhanced search experience.
                      </li>
                      <li>
                      Implemented Checkstyle to strengthen the code review process.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>Technical Analyst</CardTitle>
                        <CardDescription>BT-NHS(Mastek) • Full-time</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        Jul 2013 - May 2014
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                      Ensured timely incident resolution, meeting service SLA standards.
                      </li>
                      <li>
                      Diagnosed root causes, coordinated internal/external teams and prevented recurring issues.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>Senior Developer</CardTitle>
                        <CardDescription>FCA(Mastek) • Full-time</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        Sep 2012 - Jul 2013
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                      Identify and create Appian processes based on requirements gathered during SCRUM iteration.
                      </li>
                      <li>
                      Ensured designed components were handed over to Offshore team and the delivered work package was as per the design.
                      </li>
                      <li>
                      Provided utopian view of one of the key functionalities which helped in the work package being delivered before estimated time.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>Lead Developer</CardTitle>
                        <CardDescription>Lex Autolease(Mastek) • Full-time</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        Aug 2008 - Aug 2012
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                      Involved in the design and development of web interface for vehicle quoting and fleet management software which increased efficiency of the vehicle leasing process by 50%.
                      </li>
                      <li>
                      Responsible for leading a team of 5 developers and defining migration strategy, data mappings for migration, GAP analysis, data analysis and technical solution for de-commissioning source system.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>Developer</CardTitle>
                        <CardDescription>Lex Extranet(Mastek) • Full-time</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        Jan 2008 - Aug 2008
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                      Providing technical solutions based on the requirements.
                      </li>
                      <li>
                      Implement the required functionality based on the design document.
                      </li>
                      <li>
                      Code review functional changes in the system.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-muted/50 py-16 md:py-24">
            <div className="container">
              <div className="max-w-[800px] mx-auto space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                  <p className="text-muted-foreground text-lg">
                    Interested in working together? Feel free to reach out to me.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="mailto:jitin.kayyala@gmail.com" className="text-primary hover:underline">
                      jitin.kayyala@gmail.com
                      </a>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Github className="h-5 w-5 text-primary" />
                        GitHub
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a
                        href="https://github.com/kjitin"
                        target="_blank"
                        className="text-primary hover:underline"
                        rel="noreferrer"
                      >
                        github.com/kjitin
                      </a>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        LinkedIn
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a
                        href="https://www.linkedin.com/in/jitin-kayyala/"
                        target="_blank"
                        className="text-primary hover:underline"
                        rel="noreferrer"
                      >
                        linkedin.com/in/jitin-kayyala
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-6 md:py-8">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="font-bold text-lg">
              Jitin <span className="text-primary">Kayyala</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Jitin Kayyala. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </AnalyticsProvider>
  )
}

function SkillCard({ title, icon, level, description }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Badge variant="outline" className="mb-2">
          {level}
        </Badge>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
