import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import Work from "./work"

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      aalto: file(relativePath: { eq: "aalto.png" }) {
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 400, background:"rgba(0,0,0,0)", cropFocus: CENTER, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      f1: file(relativePath: { eq: "f1.png" }) {
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 400, background:"rgba(0,0,0,0)", fit: INSIDE) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      festivals: file(relativePath: { eq: "festival.png" }) {
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 400, background:"rgba(0,0,0,0)", cropFocus: CENTER, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fonart: file(relativePath: { eq: "fonart.png" }) {
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 400, background:"rgba(0,0,0,0)", cropFocus: CENTER, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gnp: file(relativePath: { eq: "gnp.png" }) {
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 400, background:"rgba(0,0,0,0)", cropFocus: CENTER, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep: file(relativePath: { eq: "lep.png" }) {
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 400, background:"rgba(0,0,0,0)", cropFocus: CENTER, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liso: file(relativePath: { eq: "liso.png" }) {
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 400, background:"rgba(0,0,0,0)", cropFocus: CENTER, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mrm: file(relativePath: { eq: "mexicanreadymade.png" }) {
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 400, background:"rgba(0,0,0,0)", cropFocus: CENTER, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posters: file(relativePath: { eq: "carteles.png" }) {
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 400, background:"rgba(0,0,0,0)", cropFocus: CENTER, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

	return(
		<React.Fragment>

			<Work 
				text="Aalto Lab Mexico"
				image={<Img fluid={data.aalto.childImageSharp.fluid} />}
        year="2020"
        link="/aalto/"
			/>

      <Work 
        text="FONART: Product development"
        image={<Img fluid={data.fonart.childImageSharp.fluid} />}
        year="2020"
        link="/fonart/"
        side="left"
      />

      <Work 
        text="Musical Festivals: Experience and Spatial Design"
        image={<Img fluid={data.festivals.childImageSharp.fluid} />}
        year="2020"
        link="/festivals/"
      />

      <Work 
        text="F1: Mexico Grand Prix"
        image={<Img fluid={data.f1.childImageSharp.fluid} />}
        year="2020"
        link="/f1/"
        side="left"
      />
      
      <Work 
        text="Aqueducts Installation"
        image={<Img fluid={data.gnp.childImageSharp.fluid} />}
        year="2020"
        link="/gnp/"
      />

      <Work 
        text="Mexican Ready Made: NOT for freedom"
        image={<Img fluid={data.mrm.childImageSharp.fluid} />}
        year="2020"
        link="/mexican-ready-made/"
        side="left"
      />

      <Work 
        text="Gig posters"
        image={<Img fluid={data.posters.childImageSharp.fluid} />}
        year="2020"
        link="/posters/"
      />

      <Work 
        text="Liso y complejo"
        image={<Img fluid={data.liso.childImageSharp.fluid} />}
        year="2020"
        link="/liso-y-complejo/"
        side="left"
      />

      <Work 
        text="LEP"
        image={<Img fluid={data.lep.childImageSharp.fluid} />}
        year="2020"
        link="/lep/"
      />
      
		</React.Fragment>
	)
}

export default Works;