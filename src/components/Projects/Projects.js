import { Section, SectionDivider, SectionTitle } from "@/themes/GlobalComponents"
import { GridContainer, BlogCard, Img, TitleContent, HeaderThree, Hr, CardInfo, TagList } from "./ProjectStyles"
import { projects } from "@/constants/constants"

function Projects() {
    return (
        <Section nopadding id='projects'>
            <SectionDivider/>
            <SectionTitle main>Projects</SectionTitle>
            <GridContainer>
                {projects.map(({ title, description, image, tags, source, visit, id }) => (
                    <BlogCard key={id}>
                        {/* <Img src={image}/> */}
                        <TitleContent>
                            <HeaderThree title>
                                {title}
                            </HeaderThree>
                            <Hr/>
                        </TitleContent>
                        <CardInfo>{description}</CardInfo>
                    </BlogCard>
                ))}
            </GridContainer>
        </Section>
    )
}

export default Projects