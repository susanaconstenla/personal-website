// @ts-nocheck
import React from "react";

const pageStyle = {
  fontFamily: 'Georgia, serif',
  background: '#f0f0f0',
  color: '#111111',
  minHeight: '100vh',
};

const containerStyle = {
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '8px 40px 72px 40px',
  boxSizing: 'border-box',
  borderLeft: '1px solid #dddddd',
  borderRight: '1px solid #dddddd',
  background: '#ffffff',
};

const sectionStyle = {
  marginTop: '72px',
};

const heading2Style = {
  fontSize: '28px',
  fontWeight: 500,
  letterSpacing: '0.2px',
  marginBottom: '6px',
  color: '#111111',
};

const projects = [
  {
    slug: 'predictability',
    title: 'From linear regression to machine learning: Predictability of socioeconomic indicators',
    summary:
      'Studies the predictability of child malnutrition in shock-prone settings using machine learning, building on my PNAS paper. This work provides the empirical and methodological foundation for the early warning system currently deployed in partnership with the Government of Kenya.',
    body: [
      'This project studies the predictability of child malnutrition using machine learning methods, with a focus on whether high-frequency outcome monitoring can improve predictive performance for rapidly evolving humanitarian indicators.',
      'The empirical work combines supervised machine learning, remotely sensed covariates, and time-series anthropometric data to learn the dynamic determinants of acute malnutrition. A central contribution is to show that updating the training data with high-frequency measurements of the outcome substantially improves predictive accuracy.',
      'This research provides the empirical and methodological foundation for the early warning system now deployed in Kenya, where ward-level predictions are used to support anticipatory action and social protection planning.'
    ],
    publicationTitle:
      'High-frequency monitoring enables machine learning-based forecasting of acute child malnutrition for early warning',
    publicationLink:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dx0Se4AAAAAJ&citation_for_view=dx0Se4AAAAAJ:u5HHmVD_uO8C',
  },
  {
    slug: 'implementation',
    title: 'Implementation and evaluation of machine-learning based predictive systems',
    summary:
      'Focuses on the design, deployment, and evaluation of ML-based predictive systems within real-world policy environments, combining operational implementation with experimental and quasi-experimental methods to assess impact.',
    body: [
      'This line of work focuses on moving predictive models from research into operational policy use. In my current work, this has centered on the development and deployment of a machine learning-based early warning system for child malnutrition in partnership with government actors in Kenya.',
      'The project involves translating model outputs into decision-relevant tools for humanitarian response and social protection, while also accounting for institutional constraints, implementation needs, and technology transfer to local partners.',
      'A second component of this work is the evaluation of predictive systems in policy settings using experimental and quasi-experimental causal inference methods, in order to assess whether deployment leads to better targeting, earlier response, or improved outcomes.'
    ],
    publicationTitle:
      'Working paper: Machine learning forecast-based triggers for anticipatory action on child wasting: an impact evaluation in arid Kenya',
    publicationLink: '#',
  },
  {
    slug: 'continuity',
    title: 'Scalability and continuity under distribution shift',
    summary:
      'Develops methods to sustain predictive performance under distribution shift, with an emphasis on how models can be updated, scaled, and kept reliable over time in changing and data-scarce environments.',
    body: [
      'This project examines how ML-based predictive models can remain reliable as the environments in which they operate change over time. The central challenge is distribution shift: the fact that relationships learned from historical data may weaken as underlying conditions evolve.',
      'My work in this area focuses on the continuity and scalability of predictive systems in shock-prone settings, including how much new data is required to retrain models and maintain acceptable performance.',
      'The broader aim is to develop practical methodological guidance for sustaining prediction systems in data-scarce policy environments, where regular model updating is costly but necessary.'
    ],
    publicationTitle:
      'Working paper: A minimum sample size estimation approach for retraining survey-dependent machine learning regression models after distribution shift',
    publicationLink: '#',
  },
];

function ProjectSubpage({ project }) {
  return (
    <section style={{ paddingBottom: '40px' }}>
      <div style={{ marginBottom: '28px' }}>
        <a href="#work" style={{ fontSize: '14px', color: '#666666' }}>← Back to research</a>
      </div>
      <h1
        style={{
          fontSize: '40px',
          lineHeight: 1.1,
          fontWeight: 600,
          color: '#111111',
          margin: '0 0 24px 0',
          maxWidth: '900px',
        }}
      >
        {project.title}
      </h1>
      <div style={{ maxWidth: '900px' }}>
        {project.body.map((paragraph, idx) => (
          <p key={idx} style={{ fontSize: '18px', lineHeight: 1.8, color: '#333333', margin: '0 0 18px 0' }}>
            {paragraph}
          </p>
        ))}
      </div>
      <div style={{ marginTop: '32px', maxWidth: '900px' }}>
        <div style={{ fontWeight: 600, marginBottom: '10px' }}>Related output</div>
        <a href={project.publicationLink} style={{ color: '#2a5db0' }}>
          {project.publicationTitle}
        </a>
      </div>
    </section>
  );
}

function PipelineArrow() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        color: '#c2b280',
        flex: '0 0 18px',
        marginTop: '44px',
      }}
    >
      →
    </div>
  );
}

function PipelineCard({ label, title, summary, href }) {
  return (
    <div
      style={{
        background: '#fffaf0',
        padding: '22px',
        borderRadius: '8px',
        border: '1px solid #e9ddb5',
        flex: 1,
        minWidth: 0,
      }}
    >
      {/* LABEL */}
      <div
        style={{
          fontSize: '13px',
          color: '#8c845a',
          marginBottom: '10px',
          fontWeight: 500,
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontWeight: 600,
          fontSize: '18px',
          marginBottom: '12px',
          color: '#111111',
        }}
      >
        {title}
      </div>

      <p
        style={{
          color: '#444444',
          lineHeight: 1.7,
          fontSize: '16px',
          margin: '0 0 14px 0',
        }}
      >
        {summary}
      </p>

      <a href={href} style={{ color: '#2a5db0', fontSize: '15px', fontWeight: 500 }}>
        Read more
      </a>
    </div>
  );
}

export default function SusanaWebsite() {
  const getHash = () => (typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '');
  const [activeHash, setActiveHash] = React.useState(getHash());

  React.useEffect(() => {
    const onHashChange = () => setActiveHash(getHash());
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const activeProject = projects.find((p) => p.slug === activeHash);

  return (
    <>
      <style>{`
        :root {
          color: #111 !important;
          background: #faf6e8 !important;
        }
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          background: #f7f7f7 !important;
          color: #111 !important;
        }
        body {
          
        }
        #root {
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
          text-align: left !important;
        }
        * {
          box-sizing: border-box;
        }
        a {
          color: #4a4a4a;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
      <div style={pageStyle}>
        <div style={containerStyle}>
    {/* HEADER (MOVE HERE) */}
    <div
      style={{
        background: '#faf6e8',
        borderBottom: '1px solid #e6dfc7',
        margin: '0 -40px 32px -40px',
        padding: '18px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ fontWeight: 700, fontSize: '24px', letterSpacing: '0.3px' }}>
        Susana Constenla-Villoslada
      </div>

      <nav style={{ fontSize: '16px', whiteSpace: 'nowrap' }}>
        <a href="#work">Research</a> · <a href="#publications">Publications</a> · <a href="#contact">Contact</a>
      </nav>
    </div>
          {activeProject ? (
            <ProjectSubpage project={activeProject} />
          ) : (
            <>
              <section style={{ paddingBottom: '48px', borderBottom: '1px solid #eaeaea' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) 380px',
                    gap: '92px',
                    alignItems: 'start',
                  }}
                >
                  <div style={{ maxWidth: '720px', order: 1 }}>
                    <h1
                      style={{
                        fontSize: '44px',
                        lineHeight: 1.1,
                        fontWeight: 600,
                        color: '#111111',
                        margin: '40px 0 38px 0',
                      }}
                    >
                      Bridging machine learning and economics<br />
                      for humanitarian aid and social protection<br />
                      in data-scarce settings
                    </h1>

                    <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#333333', margin: '0 0 16px 0' }}>
                      I am a PhD candidate at UC Berkeley School of Information, working at the intersection of economics and machine learning for international development. My research focuses on machine learning–based predictability of socioeconomic indicators for social protection and humanitarian response, as well as the deployment and evaluation of predictive systems based on these methodological advances in policy environments.
                    </p>

                    <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#333333', margin: 0 }}>
                      I study how these systems can be implemented and assessed using experimental and quasi-experimental causal inference methods, and how their performance can be sustained over time and across contexts under distribution shift.
                    </p>

                    <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#333333', marginTop: '18px' }}>
                      I hold an M.S. in Applied Economics from Cornell University (Fulbright Scholar), and, prior to my PhD, I spent three years as a research analyst at IFPRI&apos;s headquarters in Washington, D.C., where I worked mainly on sample design for population-based surveys and on the design and implementation of impact evaluations for large World Bank development interventions.
                    </p>
                  </div>

                  <div style={{ order: 2, marginTop: '182px' }}>
                    <img
                      src="/profile.jpeg"
                      alt="Susana Constenla-Villoslada"
                      style={{
                        width: '105%',
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        display: 'block',
                      }}
                    />
                  </div>
                </div>
              </section>

              <section
                id="work"
                style={{ ...sectionStyle, padding: '40px 32px', background: '#faf6e8', borderRadius: '8px', border: '1px solid #eee4bf' }}
              >
                <h2 style={heading2Style}>From theory to deployment: a research pipeline for data-scarce settings</h2>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    gap: '18px',
                    marginTop: '24px',
                  }}
                >
                  <PipelineCard
                    label=""
                    title= "I. Machine learning predictability of socioeconomic indicators"
                    summary={projects[0].summary}
                    href="#predictability"
                  />

                  <PipelineArrow />

                  <PipelineCard
                    label=""
                    title="II. Implementation and evaluation of machine-learning based predictive systems"
                    summary={projects[1].summary}
                    href="#implementation"
                  />

                  <PipelineArrow />

                  <PipelineCard
                    label=""
                    title="III. Scalability and continuity under distribution shift"
                    summary={projects[2].summary}
                    href="#continuity"
                  />
                </div>
              </section>

              <section id="publications" style={{ ...sectionStyle, marginTop: '88px', paddingTop: '40px', borderTop: '1px solid #eaeaea'  }}>
                <h2 style={heading2Style}>Selected publications</h2>

                <div style={{ maxWidth: '950px' }}>
                  <p style={{ margin: '0 0 28px 0', lineHeight: 1.7 }}>
                    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dx0Se4AAAAAJ&citation_for_view=dx0Se4AAAAAJ:u5HHmVD_uO8C" style={{ color: '#2a5db0' }}>
                      High-frequency monitoring enables machine learning-based forecasting of acute child malnutrition for early warning
                    </a>
                    <br />
                    Constenla-Villoslada, S., Liu, Y., McBride, L., et al. (2025). <em>PNAS</em>.
                  </p>
                  <p style={{ color: '#444', lineHeight: 1.7, margin: '0 0 28px 0' }}>
                    The number of acutely food insecure people worldwide has doubled since 2017, increasing demand for early warning systems (EWS) that can predict food emergencies. Advances in computational methods and the growing availability of near-real-time remote sensing data suggest that big data approaches might help meet this need. This work shows that incorporating high-frequency monitoring of child malnutrition into machine learning models substantially improves predictive performance, enabling more timely and accurate early warning.
                  </p>

                  <p style={{ margin: '0 0 28px 0', lineHeight: 1.7 }}>
                    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dx0Se4AAAAAJ&citation_for_view=dx0Se4AAAAAJ:2osOgNQ5qMEC" style={{ color: '#2a5db0' }}>
                      Large-scale land restoration improved drought resilience in Ethiopia
                    </a>
                    <br />
                    Constenla-Villoslada, S., Liu, Y., Wen, J., et al. (2022). <em>Nature Sustainability</em>.
                  </p>
                  <p style={{ color: '#444', lineHeight: 1.7, margin: '0 0 28px 0' }}>
                    Anthropogenic land degradation, exacerbated by climate change, threatens rural livelihoods in developing economies. This study combines satellite-based indicators with quasi-experimental methods to evaluate the impacts of one of the largest land restoration programs in Ethiopia, showing improvements in vegetation productivity and resilience to drought.
                  </p>

                  <p style={{ margin: '0 0 28px 0', lineHeight: 1.7 }}>
                    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dx0Se4AAAAAJ&citation_for_view=dx0Se4AAAAAJ:d1gkVwhDpl0C" style={{ color: '#2a5db0' }}>
                      Caveat utilitor: A comparative assessment of resilience measurement approaches
                    </a>
                    <br />
                    Upton, J., Constenla-Villoslada, S., Barrett, C.B., et al. (2022). <em>Journal of Development Economics</em>.
                  </p>
                  <p style={{ color: '#444', lineHeight: 1.7, margin: 0 }}>
                    As resilience measurement becomes central to development policy, multiple approaches have emerged. This paper compares three widely used resilience measurement frameworks using panel data from Ethiopia and Niger, showing that they produce substantially different classifications and exhibit only modest predictive performance.
                  </p>
                </div>
              </section>

              <section id="contact" style={{ ...sectionStyle, paddingTop: '40px', borderTop: '1px solid #eaeaea' }}>
                <h2 style={heading2Style}>Contact</h2>
                <p style={{ color: '#333333', margin: 0 }}>Email: susana_constenla@berkeley.edu</p>
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
}