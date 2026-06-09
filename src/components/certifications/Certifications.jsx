import React from 'react';
import './certifications.css';

const certs = [
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'in-progress',
    icon: 'bx bxs-shield-alt-2',
  },
];

const learning = [
  {
    title: 'Cyber Security 101',
    code: 'SEC1',
    platform: 'TryHackMe',
    status: 'in-progress',
  },
  {
    title: 'Pre Security',
    code: 'SEC0',
    platform: 'TryHackMe',
    status: 'completed',
  },
];

const Certifications = () => {
  return (
    <section className="certs section" id="certifications">
      <h2 className="section__title">Certifications</h2>
      <span className="section__subtitle">Credentials &amp; growth</span>

      <div className="certs__container container">

        {/* ── Certifications ── */}
        <div className="certs__group">
          <h3 className="certs__group-title">
            <i className="bx bxs-award" /> Certifications
          </h3>
          <div className="certs__list">
            {certs.map((c, i) => (
              <div className="certs__card" key={i}>
                <i className={`${c.icon} certs__card-icon`} />
                <div className="certs__card-info">
                  <h4 className="certs__card-title">{c.title}</h4>
                  <span className="certs__card-issuer">{c.issuer}</span>
                </div>
                <span className={`certs__badge certs__badge--${c.status}`}>
                  {c.status === 'in-progress' ? 'In Progress' : 'Completed'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Learning & Development ── */}
        <div className="certs__group">
          <h3 className="certs__group-title">
            <i className="bx bx-book-open" /> Learning &amp; Development
          </h3>
          <div className="certs__list">
            {learning.map((l, i) => (
              <div className="certs__card" key={i}>
                <i className="bx bx-terminal certs__card-icon" />
                <div className="certs__card-info">
                  <h4 className="certs__card-title">{l.title}
                    <span className="certs__code"> — {l.code}</span>
                  </h4>
                  <span className="certs__card-issuer">{l.platform}</span>
                </div>
                <span className={`certs__badge certs__badge--${l.status}`}>
                  {l.status === 'in-progress' ? 'In Progress' : 'Completed'}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
