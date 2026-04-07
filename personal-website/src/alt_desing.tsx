// @ts-nocheck
import React from "react";

const COLORS = {
  bg: '#f7f6f3',
  white: '#ffffff',
  soft: '#f4f1e8',
  softer: '#faf8f2',
  text: '#1f1f1f',
  subtext: '#555555',
  link: '#1a2a44',
  border: '#e2e0db'
};

const pageStyle = {
  fontFamily: "'Georgia', 'Times New Roman', serif",
  background: COLORS.bg,
  color: COLORS.text,
  minHeight: '100vh',
};

const containerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 40px 80px 40px',
  background: COLORS.white,
  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
};

const section = {
  marginTop: '72px',
};

export default function SusanaWebsite() {
  return (
    <>
      <style>{`
        body { color: ${COLORS.text}; }
        a { color: ${COLORS.link}; text-decoration: none; }
        a:hover { text-decoration: underline; }
      `}</style>

      <div style={pageStyle}>
        <div style={containerStyle}>

          {/* HEADER */}
          <div style={{
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px',
            color: COLORS.subtext
          }}>
            <div style={{ fontWeight: 500 }}>
              Susana Constenla-Villoslada
            </div>
            <div>
              <a href="#research">Research</a> ·{" "}
              <a href="#publications">Publications</a> ·{" "}
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* HERO — TAGLINE STYLE */}
          <section style={{ ...section, marginTop: '40px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 260px',
              gap: '60px',
              alignItems: 'center'
            }}>

              <div>

                {/* MAIN TAGLINE */}
                <h1 style={{
                  fontSize: '30px',
                  lineHeight: 1.4,
                  fontWeight: 500,
                  marginBottom: '18px',
                  color: COLORS.text
                }}>
                  Bridging machine learning and economics for humanitarian aid and social protection in data-scarce settings
                </h1>

                <p style={{
                  lineHeight: 1.75,
                  fontSize: '17px'
                }}>
                  I am a Doctoral Researcher at UC Berkeley School of Information working at the intersection of economics and machine learning for international development.
                </p>

                <p style={{
                  lineHeight: 1.75,
                  fontSize: '17px'
                }}>
                  My research focuses on predictive systems for early warning and social protection, and their deployment and evaluation in real-world policy environments.
                </p>

              </div>

              <img
                src="/profile.jpeg"
                alt="profile"
                style={{
                  width: '100%',
                  borderRadius: '14px',
                }}
              />

            </div>
          </section>

          {/* RESEARCH */}
          <section id="research" style={{
            ...section,
            padding: '32px',
            background: COLORS.soft,
            border: `1px solid ${COLORS.border}`,
            borderRadius: '6px'
          }}>
            <h2 style={{
              fontSize: '26px',
              marginBottom: '20px',
              fontWeight: 500
            }}>
              Research pipeline: from theory to deployment in data-scarce settings
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>

              {[
                {
                  title: "I. Predictability of socioeconomic indicators",
                  text: "Machine learning approaches to improve prediction of child malnutrition using high-frequency data."
                },
                {
                  title: "II. Implementation and evaluation",
                  text: "Deployment of predictive systems in policy environments and evaluation using causal inference."
                },
                {
                  title: "III. Continuity under distribution shift",
                  text: "Ensuring predictive systems remain reliable as environments and data distributions change."
                }
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <div style={{
                    flex: 1,
                    padding: '18px',
                    background: COLORS.white,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: '6px'
                  }}>
                    <div style={{ fontWeight: 500, marginBottom: '8px' }}>
                      {item.title}
                    </div>
                    <p style={{ fontSize: '14px', color: COLORS.subtext }}>
                      {item.text}
                    </p>
                  </div>

                  {i < 2 && (
                    <div style={{
                      fontSize: '18px',
                      color: '#999'
                    }}>
                      →
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* PUBLICATIONS */}
          <section id="publications" style={{
            ...section,
            borderTop: `1px solid ${COLORS.border}`,
            paddingTop: '40px'
          }}>
            <div style={{
              maxWidth: '700px',
              margin: '0 auto',
              textAlign: 'left'
            }}>
              <h2 style={{
                fontSize: '26px',
                fontWeight: 500,
                marginBottom: '20px'
              }}>
                Selected publications
              </h2>

              <p style={{ marginBottom: '26px' }}>
                <a href="#">
                  High-frequency monitoring enables machine learning-based forecasting of acute child malnutrition for early warning
                </a><br />
                Constenla-Villoslada, S., Liu, Y., McBride, L., et al. (2025). <em>PNAS</em>.
                <br />
                <span style={{ color: COLORS.subtext }}>
                  Incorporates high-frequency monitoring into machine learning models to improve predictive performance in early warning systems.
                </span>
              </p>

              <p style={{ marginBottom: '26px' }}>
                <a href="#">
                  Large-scale land restoration improved drought resilience in Ethiopia
                </a><br />
                Constenla-Villoslada, S., Liu, Y., Wen, J., et al. (2022). <em>Nature Sustainability</em>.
                <br />
                <span style={{ color: COLORS.subtext }}>
                  Evaluates land restoration programs using satellite data and quasi-experimental methods.
                </span>
              </p>

              <p>
                <a href="#">
                  Caveat utilitor: A comparative assessment of resilience measurement approaches
                </a><br />
                Upton, J., Constenla-Villoslada, S., Barrett, C.B., et al. (2022). <em>Journal of Development Economics</em>.
                <br />
                <span style={{ color: COLORS.subtext }}>
                  Compares resilience measurement frameworks and their predictive performance.
                </span>
              </p>
            </div>
          </section>

          {/* ABOUT */}
          <section style={{
            ...section,
            padding: '28px',
            background: COLORS.softer,
            borderRadius: '6px'
          }}>
            <h2 style={{ fontSize: '26px', fontWeight: 500 }}>
              About
            </h2>

            <p style={{ lineHeight: 1.7 }}>
              I hold an M.S. in Applied Economics from Cornell University (Fulbright Scholar). Prior to my doctoral work, I spent three years at IFPRI working on survey design and impact evaluation.
            </p>

            <p style={{ lineHeight: 1.7 }}>
              My work sits at the intersection of econometrics, machine learning, and policy design, focusing on early warning systems and decision-making tools in data-scarce settings.
            </p>
          </section>

          {/* CONTACT */}
          <section id="contact" style={{
            ...section,
            borderTop: `1px solid ${COLORS.border}`,
            paddingTop: '32px'
          }}>
            <h2 style={{ fontSize: '26px', fontWeight: 500 }}>
              Contact
            </h2>
            <p>Email: susana_constenla@berkeley.edu</p>
          </section>

        </div>
      </div>
    </>
  );
}