'use client';

import Link from 'next/link';

export default function MissionStatement() {
  return (
    <section className="component container container--bleed theme-light" id="about">
      <section className="component container container--100">
        <div className="container__col container__col--100">
          <section className="component container container--100">
            <div className="container__col container__col--100">
              <section className="component mission-statement" style={{ '--c-mark': '#F54713' } as React.CSSProperties}>
                <div className="mission-statement__inner mission-statement--has-mark">
                  <div className="mission-statement__text">
                    Our mission is to promote <mark>compassion</mark>, dignity, and social responsibility by helping <mark>vulnerable</mark> communities meet their basic needs.
                  </div>
                  <Link className="btn btn--ghost mission-statement__link" href="#langar">
                    Learn about Langar Sewa
                  </Link>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
