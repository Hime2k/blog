import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1> mianhae
            Patience is not simply the ability to wait ,it's how we beahve while we're waiting. ~Joyce Meyer
      
          </Headings.h1>
        </div>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
