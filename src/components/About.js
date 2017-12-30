import React from 'react';
import TeamMember from './TeamMember';

const About = () => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2>About Us</h2>

          <p>C.S.E.-Community-Source-Exchange is a fast, reliable and fully transparent cryptocurrency exchange built by crypto enthusiasts, for crypto enthusiasts.</p>
          <p>Supported by a group of multi-national, multi-disciplinary cryptocurrency professionals.</p>
          <p>This team came together to make this platform after seeing firsthand the need for a fast and reliable exchange on the crypto market.</p>
          <p>We pride ourselves on total transparency: Everything is viewable through our API, starting from order lists and ending with our coin reserves. </p>
          <p>Nexchange is built on several core values that guide our team in our day to day operations. Among them are complete transparency, a strive to help make cryptocurrency as accessible as possible and a passion for open source.</p>
          <p>To support our mission of making crypto accessible to everyone, we’ve made our <b><a href="https://github.com/onitsoft/nexchange-open-client-react" target="_blank">front end client completely open source <i className="fa fa-github" aria-hidden="true"></i></a></b>.</p>

          <div id="team-members" className="row">
            <TeamMember id="oleg" name="Oleg Belousov" country="IL" fullCountryName="Israel"
              description="Multidisciplinary coder. Aspiring innovator with a deep passion for open source and making the world better, step by step, every single day."
              social={{
                linkedin: "https://www.linkedin.com/in/oleg-belousov-b4112145/",
                twitter: "https://twitter.com/iooleg",
                medium: "https://medium.com/@IoOleg",
                github: "https://github.com/BeOleg",
              }} />

            <TeamMember id="daniel" name="Daniel Blank" country="IL" fullCountryName="Israel"
              description="Product manager. Former IDF and FinTech coder with a deep passion for great products. Cryptocurrency enthusiast since 2013."
              social={{
                linkedin: "https://www.linkedin.com/in/daniel-blank-72166284/",
                twitter: "https://twitter.com/daniel_a_blank",
                quora: "https://www.quora.com/profile/Daniel-Blank-7",
              }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
