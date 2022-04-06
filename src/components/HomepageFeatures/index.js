import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Discover",
    Svg: require("@site/static/img/frontpage/discovering-2.svg").default,
    description: (
      <>
        GEO Knowledge Hub was designed to allow users to easily find Earth 
        Observation Applications
      </>
    ),
  },
  {
    title: "Contribute",
    Svg: require("@site/static/img/frontpage/contribute.svg").default,
    description: (
      <>
        GEO Knowledge Hub enables the organized and transparent sharing of 
        Earth Observation applications.
      </>
    ),
  },
  {
    title: "Communities",
    Svg: require("@site/static/img/frontpage/community.svg").default,
    description: (
      <>
        Engage with <code>open</code>, <code>reproducible</code> sharing communities curated by 
        Earth Observation experts.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
