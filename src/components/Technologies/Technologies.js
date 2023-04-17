import { Section, SectionDivider, SectionText, SectionTitle } from "@/themes/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";
import { DiCss3, DiFirebase, DiHtml5, DiJavascript, DiReact, DiZend } from "react-icons/di";

function Technologies() {
    return (
        <Section id='tech'>
            <SectionDivider/>
            <br/>
            <SectionTitle>Technologies</SectionTitle>
            <SectionText>
                I have worked with various Frontend Technologies
            </SectionText>
            <List>
                <ListItem>
                    <DiReact size='3rem'/>
                    <ListContainer>
                        <ListTitle>Front-end</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            React.js
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <DiHtml5 size='3rem'/>
                    <ListContainer>
                        <ListTitle>Front-end</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            Html
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <DiCss3 size='3rem'/>
                    <ListContainer>
                        <ListTitle>Front-end</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            CSS
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <DiJavascript size='3rem'/>
                    <ListContainer>
                        <ListTitle>Front-end</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            JavaScript
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <DiFirebase size='3rem'/>
                    <ListContainer>
                        <ListTitle>Front-end</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            Firebase
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <DiZend size='3rem'/>
                    <ListContainer>
                        <ListTitle>UI/UX</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            Figma
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
            </List>
        </Section>
    )
}

export default Technologies