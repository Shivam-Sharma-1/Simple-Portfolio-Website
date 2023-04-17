const { Section, SectionTitle, SectionText } = require("@/themes/GlobalComponents");
const { LeftSection } = require("./HeroStyles");
const { default: Button } = require("@/themes/GlobalComponents/Button");

function Hero() {
    return (
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome to <br/>
                    My Personal Portfolio
                </SectionTitle>
                <SectionText>
                    Hey! My name is Shivam Sharma<br/>
                    I am a Frontend Developer. I love developing websites and problem solving. I am a quick learner and love to learn new concepts inside and outside of my domain.
                </SectionText>
                <Button onClick={() => window.location = 'https://www.linkedin.com/in/shivamsharma77607/'}>Learn more</Button>
            </LeftSection>
        </Section>
    )
}

export default Hero