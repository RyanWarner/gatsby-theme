import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { contextMDX } from "@jbolda/isolated-theme-ui-components";
import { Flex, Box, Heading, Text } from "@jbolda/isolated-theme-ui-components";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Engagements = ({ engagements }) => (
  <Flex>
    {!!engagements
      ? engagements.nodes.map(engagement => (
          <Box key={engagement.name} width={["85%", "45%", "30%"]}>
            <MDXRenderer scope={{ contextMDX }}>{engagement.childMdx.body}</MDXRenderer>
          </Box>
        ))
      : null}
  </Flex>
);

export default props => (
  <StaticQuery
    query={graphql`
      query jBoldaGatsbyThemeHomepageProfessionalEngagements {
        engagements: allFile(
          filter: {
            sourceInstanceName: { eq: "homepage" }
            relativeDirectory: { regex: "/engagements*/" }
          }
        ) {
          nodes {
            name
            childMdx {
              body
            }
          }
        }
      }
    `}
    render={queryData =>
      queryData.engagements.nodes.length === 0 ? null : (
        <Flex direction="column" alignItems="left">
          <Heading sx={{ marginBottom: "0px" }}>
            Professional Engagements
          </Heading>
          <Text>In View of the Public</Text>
          <Engagements engagements={queryData.engagements} {...props} />
        </Flex>
      )
    }
  />
);
