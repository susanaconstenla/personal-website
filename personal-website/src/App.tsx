// @ts-nocheck
import React from "react";

const pageStyle = {
  fontFamily: '"Libre Baskerville", Georgia, serif',
  background: '#f0f0f0',
  color: '#111111',
  minHeight: '100vh',
};

/*
const containerStyle = {
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  padding: isMobile ? '8px 16px 48px 16px' : '8px 40px 72px 40px',
  boxSizing: 'border-box',
  borderLeft: '1px solid #dddddd',
  borderRight: '1px solid #dddddd',
  background: '#ffffff',

  transform: isMobile ? 'none' : 'scale(0.94)',
  transformOrigin: 'top center',
};
*/
const sectionStyle = {
  marginTop: '72px',
};

const heading2Style = {
  fontSize: '30px',
  fontWeight: 600,
  letterSpacing: '1px',
  fontWeight: 500,
  letterSpacing: '0.2px',
  marginBottom: '6px',
  color: '#111111',
};

const projects = [
  {
    slug: 'predictability',
    title: 'Machine learning–based predictability of socioeconomic indicators',
    summary:
      'Studies machine learning–based predictability of socioeconomic indicators, combining insights on the role of dynamic covariates and the temporal representativeness of training data. It leverages large-scale secondary data sources such as satellite imagery.',

    body: [
      "This project studies the machine learning–based predictability of child malnutrition in shock-prone, data-constrained settings, with a focus on how dynamic covariates, the temporal representativeness of training data, and measurement constraints jointly shape predictive performance.",

      "Despite advances in the availability of large-scale data and machine learning methods, predictive models of acute malnutrition have historically exhibited limited predictive skill, particularly at subnational scales and for forward-looking forecasts. A central challenge is that acute malnutrition evolves rapidly in response to shocks, generating nonstationary outcome dynamics that are difficult to learn from low-frequency or cross-sectional data.",

      "The empirical approach combines remotely sensed covariates with high-frequency time-series anthropometric data from sentinel surveillance systems to model the evolving determinants of malnutrition. The results show that predictive performance improves substantially when models are trained on data that more closely reflect current conditions, overcoming the rapid distribution shift that characterizes this empirical setting.",

      "These findings highlight that limitations in predictive performance arise less from the availability of adequate optimization methods or predictive covariates than from constraints in outcome measurement and the extent to which training data remain representative of evolving conditions over time.",

      "These advances have enabled the implementation of a fully integrated early warning system within the National Drought Management Authority (NDMA), Kenya’s national drought management agency operating in the arid and semi-arid lands (ASAL), where ward-level predictions of acute malnutrition inform anticipatory action and social protection responses to child hunger crises."
    ],

    publications: [
      {
        title:
          'Constenla-Villoslada, S., Liu, Y., McBride, L., Ouma, C., Mutanda, N., & Barrett, C.B. (2025). High-frequency monitoring enables machine learning–based forecasting of acute child malnutrition for early warning. PNAS.',
        link:
          'https://www.pnas.org/doi/full/10.1073/pnas.2416161122',
      }
    ],
    projectInfo: [
      {
        title:
          'Commentary: Impact forecasting for humanitarian response (PNAS)',
        link:
          'https://www.pnas.org/doi/10.1073/pnas.2512728122',
      },
    ],
  },
  {
    slug: 'implementation',
    title: 'Implementation and evaluation of machine-learning based predictive systems in data-scarce settings',
    summary:
      'Focuses on the design, deployment, and evaluation of ML-based predictive systems within real-world policy environments, combining operational implementation with experimental and quasi-experimental methods to assess impact.',
    body: [
  "A central component of my research agenda focuses on the design, implementation, and evaluation of machine learning–based predictive systems in real-world policy environments. Building on predictive frameworks developed in prior work, I examine and develop solutions for operationalizing such systems within government decision-making processes and linking them to anticipatory action.",
  
  "Child malnutrition remains a leading contributor to child mortality worldwide, accounting for approximately 45% of deaths among children under five. In regions such as the arid and semi-arid lands (ASAL) of Kenya, recurrent droughts, conflict, and economic shocks generate persistently high levels of acute malnutrition, creating a critical need for timely and well-targeted interventions. While early warning systems have improved monitoring and coordination, they have historically remained largely reactive and have not systematically translated data into pre-defined, trigger-based responses.",

  "To address these limitations, I lead the development and implementation, in partnership with the National Drought Management Authority (NDMA), Kenya’s national agency responsible for drought risk management, of a machine learning–based forecasting and triggering system for child malnutrition crises in the country's ASAL. The system integrates high-frequency anthropometric data with predictive models to generate forward-looking signals of child malnutrition and links these forecasts to pre-defined anticipatory action protocols.",

  "A central contribution of this work is to move beyond predictive performance and assess whether forecast-based systems can be operationalized to improve outcomes. By embedding the system within existing government infrastructure and linking predictions to rule-based interventions, the project creates a setting to evaluate the causal impact of anticipatory action on the evolution of child malnutrition.",

  "The empirical analysis uses a quasi-experimental impact evaluation design to estimate the effects of piloting the system across selected wards in Kenya’s ASAL regions. By comparing treated and control areas, the project evaluates whether forecast-driven interventions lead to earlier responses and reductions in acute malnutrition prevalence, providing evidence on the effectiveness of integrating machine learning into humanitarian decision-making."
],
  publications: [
  {
    title: 'Working paper: Machine learning forecast-based triggers for anticipatory action on child wasting',
    link: '#',
  },
  {
    title: "Early warning dashboard designed and implemented for Kenya's National Drought Management Authority (NDMA)",
    link: 'https://muac.dews.ndma.go.ke/',
  }
],

projectInfo: [
  {
    title: "Google.org supports the project's piloting and impact evaluation design under the AI Collaborative for Food Security",
    link: 'https://gol.berkeley.edu/2025/05/22/google-org-invests-in-gol/',
  },
  {
    title: 'The Jameel Observatory supports the initial implementation phase of the project within the NDMA',
    link: 'https://www.ischool.berkeley.edu/news/2024/phd-student-team-awarded-grant-implement-early-warning-system-child-malnutrition-crises',
  },
]
},
  {
  slug: 'continuity',
  title: 'Scalability and continuity of machine learning predictive systems under distribution shift',
  summary:
    'Develops methods to estimate the minimum sample size required to retrain machine learning models under distribution shift, ensuring stable predictive performance and reliable estimation in data-scarce and evolving environments.',

  body: [
    "Machine learning–based predictive systems are increasingly deployed in policy and humanitarian applications, where they are used to inform targeting, forecasting, and early warning. In these settings, which are often shock-prone and characterized by rapidly changing conditions, models are frequently applied across new spatial or temporal domains, giving rise to distribution shift: the deterioration of predictive performance when the training domain differs from the deployment domain across space or time.",

    "Existing approaches to addressing distribution shift—such as domain generalization, invariant representation learning, and test-time adaptation—typically rely on assumptions that are unlikely to hold in the small-sample, shock-prone, tabular data settings common in applied economics. In particular, these methods often require large labeled datasets, continuous data streams, or stable representations across environments. When shifts are driven by structural changes—such as climatic shocks, policy interventions, or market disruptions—these approaches are often insufficient to maintain predictive performance.",

    "Maintaining predictive performance under such shifts therefore requires retraining models using newly collected data, raising a central question: what is the minimum sample size required to restore predictive performance in the target domain?",

    "I develop a bootstrap-based approach, anchored in non-asymptotic concentration theory, to estimate the minimum sample size required for retraining machine learning regression models under distribution shift. The proposed framework identifies the smallest data collection sufficient to recover stable predictive performance in the target domain, directly addressing a key constraint in data-scarce environments where survey-based data collection is costly and logistically constrained.",

    "Empirically, I show that restoring predictive performance after distribution shift is closely linked to capturing the essential features of the outcome distribution in the retraining sample. Across applications, relatively modest sample sizes are sufficient to recover and stabilize predictive performance. This reflects the stability of the concentration properties of the outcome distribution across environments, which allows sample size estimates calibrated on pre-shift data to remain informative after distribution shift.",

    "The broader aim of this work is to provide practical methodological guidance for the scalable and sustained use of machine learning–based predictive systems in policy environments, where models must be updated across space and time but data collection remains a binding constraint."
  ],

  publications: [
    {
      title: 'Working paper: Minimum sample size estimation for retraining machine learning models under distribution shift',
      link: '#',
    },
  ],
}
];

function ProjectSubpage({ project, isMobile }) {
  return (
    <section style={{ paddingBottom: '40px' }}>
      <div style={{ marginBottom: '28px' }}>
        <a href="#work" style={{ fontSize: '14px', color: '#666666' }}>
          ← Back to research
        </a>
      </div>

      <h1
        style={{
          fontSize: '40px',
          lineHeight: 1.1,
          fontWeight: 600,
          color: '#111111',
          margin: '0 0 44px 0',
          maxWidth: '900px',
        }}
      >
        {project.title}
      </h1>

      {/* GRID: TEXT + IMAGE */}
     <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            (project.slug === 'predictability' ||
            project.slug === 'implementation' ||
            project.slug === 'continuity')
              ? (isMobile ? '1fr' : '720px 360px')
              : '1fr',
          gap: '48px',
          alignItems: 'start',
          maxWidth: '1100px',
        }}
      >
        {/* TEXT */}
        <div>
          {project.body.map((paragraph, idx) => (
            <React.Fragment key={idx}>

              {/* FIRST SUBTITLE */}
              {project.slug === 'implementation' && idx === 1 && (
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    margin: '32px 0 12px 0',
                    color: '#333333',
                  }}
                >
                  From predictive modeling to operational early warning systems
                </h3>
              )}

              {/* SECOND SUBTITLE */}
              {project.slug === 'implementation' && idx === 3 && (
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    margin: '32px 0 12px 0',
                    color: '#333333',
                  }}
                >
                  Embedding implementation within an impact evaluation framework
                </h3>
              )}
                {/* CONTINUITY SUBTITLE */}
                {project.slug === 'continuity' && idx === 3 && (
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      margin: '32px 0 12px 0',
                      color: '#333333',
                    }}
                  >
                    A bootstrap-based approach grounded in non-asymptotic concentration theory
                  </h3>
                )}
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.9,
                  color: '#444444',
                  maxWidth: '720px',
                  margin: '0 0 18px 0',
                }}
              >
                {paragraph}
              </p>

            </React.Fragment>
          ))}
        </div>

        {/* IMAGE (RIGHT COLUMN) */}
        {(project.slug === 'predictability' ||
          project.slug === 'implementation' ||
          project.slug === 'continuity') && (
          <div
            style={{
              justifySelf: 'end',
              alignSelf: 'start',
              marginTop: '40px',
              transform: isMobile ? 'none' : 'translateX(10px)',
              display: 'flex',
              flexDirection: 'column',
              gap: project.slug === 'continuity' ? '350px' : '0px',
            }}
          >

            {/* PREDICTABILITY */}
                    {project.slug === 'predictability' && (
            <div>
              <img
                src={`${import.meta.env.BASE_URL}pnas.png`}
                style={{
                  width: '100%',
                  maxWidth: '640px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              />
              <p
                style={{
                  fontSize: '13px',
                  color: '#666',
                  marginTop: '6px',
                  textAlign: 'right',
                }}
              >
               First page of Constenla-Villoslada et al., PNAS (2025)
              </p>
            </div>
          )}

            {/* IMPLEMENTATION */}
            {project.slug === 'implementation' && (
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}fieldwork.jpeg`}
                  style={{
                    width: '110%',
                    maxWidth: '500px',
                    borderRadius: '3px',
                  }}
                />
                <p style={{ fontSize: '13px', color: '#666', marginTop: '6px', textAlign: 'right' }}>
                  Fieldwork in Kajiado county, Kenya: visit to NDMA high-frequency anthropometric data collection supporting early warning systems.
                </p>
              </div>
            )}

            {/* CONTINUITY */}
            {project.slug === 'continuity' && (
              <>
                {/* IMAGE 1 */}
                <div>
                  <img
                    src={`${import.meta.env.BASE_URL}concept_shift_performance.jpeg`}
                    style={{
                      width: '100%',
                      maxWidth: '520px',
                      borderRadius: '4px',
                      border: '1px solid #ddd',
                    }}
                  />
                  <p style={{ fontSize: '13px', color: '#666', marginTop: '6px', textAlign: 'right' }}>
                    Predictive performance before and after retraining.
                  </p>
                </div>

                {/* IMAGE 2 */}
                <div>
                  <img
                    src={`${import.meta.env.BASE_URL}ci_evol.png`}
                    style={{
                      width: '100%',
                      maxWidth: '520px',
                      borderRadius: '4px',
                      border: '1px solid #ddd',
                    }}
                  />
                  <p style={{ fontSize: '13px', color: '#666', marginTop: '6px', textAlign: 'right' }}>
                    CI width concentration of distributional parameters.
                  </p>
                </div>
              </>
            )}

          </div>
        )}

                  </div>

      {/* RESEARCH OUTPUTS */}
      <div style={{ marginTop: '48px', maxWidth: '1100px' }}>
        <div
          style={{
            fontWeight: 600,
            marginBottom: '14px',
            fontSize: '18px',
          }}
        >
          Research outputs
        </div>

        {project.publications?.map((pub, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '16px',
              paddingLeft: '12px',
              borderLeft: '2px solid #e6dfc7',
            }}
          >
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#2a5db0',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: 1.6,
                textDecoration: 'none',
              }}
            >
              {pub.title || pub.citation}
            </a>
          </div>
        ))}
      </div>

      {/* PROJECT CONTEXT AND ENGAGEMENT */}
      {project.projectInfo && (
        <div style={{ marginTop: '48px', maxWidth: '1100px' }}>
          <div
            style={{
              fontWeight: 600,
              marginBottom: '14px',
              fontSize: '18px',
            }}
          >
            Project mentions and engagement
          </div>

          {project.projectInfo.map((item, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '12px',
                paddingLeft: '12px',
                borderLeft: '2px solid #eee',
              }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#2a5db0',
                  fontSize: '15px',
                  textDecoration: 'none',
                }}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function CVPage() {
  return (
    <section style={{ paddingBottom: '40px' }}>
      <div style={{ marginBottom: '28px' }}>
        <a href="#work" style={{ fontSize: '14px', color: '#666666' }}>
          ← Back to research
        </a>
      </div>

      <h1
        style={{
          fontSize: '42px',
          lineHeight: 1.15,
          letterSpacing: '0.5px',
          fontWeight: 600,
          color: '#111111',
          margin: '0 0 24px 0',
        }}
      >
        Curriculum Vitae
      </h1>

      <p style={{ marginBottom: '20px' }}>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2a5db0' }}
        >
          Download CV (PDF)
        </a>
      </p>

      <iframe
        src="/cv.pdf"
        width="100%"
        height="900px"
        style={{ border: '1px solid #ddd' }}
        title="Curriculum Vitae"
      />
    </section>
  );
}

function PipelineArrow() {
  return (
    <div
      style={{
        display: isMobile ? 'block' : 'flex',
        gap: isMobile ? '24px' : '18px',
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

  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

      const containerStyle = {
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: isMobile ? '8px 16px 48px 16px' : '8px 40px 72px 40px',
      boxSizing: 'border-box',
      borderLeft: '1px solid #dddddd',
      borderRight: '1px solid #dddddd',
      background: '#ffffff',
      transform: isMobile ? 'none' : 'scale(0.94)',
      transformOrigin: 'top center',
    };

  React.useEffect(() => {
    const onHashChange = () => setActiveHash(getHash());
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const activeProject = projects.find((p) => p.slug === activeHash);
  const isCV = activeHash === 'cv';

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap');
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
          color: #111111;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        a:hover {
          color: #888888;
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
    <div
  style={{
    fontFamily: 'Georgia, serif',
    fontSize: '25px',
    fontWeight: 550,
    letterSpacing: '3.5px',
    color: '#111111',
  }}
>
  Susana Constenla-Villoslada
</div>

      <nav style={{ fontSize: '16px', whiteSpace: isMobile ? 'normal' : 'nowrap' }}>
        <a href="#work">Research Projects</a> · <a href="#publications">Publications</a> · <a href="#cv">CV</a> · <a href="#contact">Contact</a>
      </nav>
    </div>
          {isCV ? (
            <CVPage />
          ) : activeProject ? (
            <ProjectSubpage project={activeProject} isMobile={isMobile} />
          ) : (
            <>
              <section style={{ paddingBottom: '48px', borderBottom: '1px solid #eaeaea' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                        isMobile ? '1fr' : '720px 360px',
                    gap: '50px',
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
                      src={`${import.meta.env.BASE_URL}profile.jpeg`}
                      alt="Susana Constenla-Villoslada"
                      style={{
                        width: '100%',
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
                <h2
  style={{
    fontFamily: 'Georgia, serif',
    fontSize: '24px',
    fontWeight: 600,
    letterSpacing: '2px',
    marginBottom: '18px',
    color: '#111111',
  }}
>
  From theory to deployment: a research pipeline for data-scarce settings
</h2>

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

                  {!isMobile && <PipelineArrow />}

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
                <h2
                      style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: '28px',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        marginBottom: isMobile ? '16px' : '0px',
                        color: '#111111',
                      }}
                    >
                      Selected publications
                    </h2>
                <div style={{ maxWidth: '950px' }}>
                  <p style={{ margin: '0 0 28px 0', lineHeight: 1.7 }}>
                    <a
                        href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dx0Se4AAAAAJ&citation_for_view=dx0Se4AAAAAJ:2osOgNQ5qMEC"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#2a5db0' }}
                      > High-frequency monitoring enables machine learning-based forecasting of acute child malnutrition for early warning
                        </a>
                    <br />
                    Constenla-Villoslada, S., Liu, Y., McBride, L., et al. (2025). <em>PNAS</em>.
                  </p>
                  <p style={{ color: '#444', lineHeight: 1.7, margin: '0 0 28px 0' }}>
                    The number of acutely food insecure people worldwide has doubled since 2017, increasing demand for early warning systems (EWS) that can predict food emergencies. Advances in computational methods and the growing availability of near-real-time remote sensing data suggest that big data approaches might help meet this need. This work shows that incorporating high-frequency monitoring of child malnutrition into machine learning models substantially improves predictive performance, enabling more timely and accurate early warning.
                  </p>

                  <p style={{ margin: '0 0 28px 0', lineHeight: 1.7 }}>
                    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dx0Se4AAAAAJ&citation_for_view=dx0Se4AAAAAJ:u5HHmVD_uO8C"
                       target="_blank"
                        rel="noopener noreferrer"
                         style={{ color: '#2a5db0' }}>
                      Large-scale land restoration improved drought resilience in Ethiopia's degraded watersheds
                    </a>
                    <br />
                    Constenla-Villoslada, S., Liu, Y., Wen, J., et al. (2022). <em>Nature Sustainability</em>.
                  </p>
                  <p style={{ color: '#444', lineHeight: 1.7, margin: '0 0 28px 0' }}>
                    Anthropogenic land degradation, exacerbated by climate change, threatens rural livelihoods in developing economies. This study combines satellite-based indicators with quasi-experimental methods to evaluate the impacts of one of the largest land restoration programs in Ethiopia, showing improvements in vegetation productivity and resilience to drought.
                  </p>

                  <p style={{ margin: '0 0 28px 0', lineHeight: 1.7 }}>
                    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dx0Se4AAAAAJ&citation_for_view=dx0Se4AAAAAJ:d1gkVwhDpl0C"    
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#2a5db0' }}>
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