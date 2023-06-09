import { Section, SectionDivider, SectionTitle } from "@/themes/GlobalComponents"
import { GridContainer, BlogCard, Img, TitleContent, HeaderThree, Hr, CardInfo, TagList, Tag, UtilityList, ExternalLinks } from "./ProjectStyles"
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
                            <HeaderThree title={title}>
                                {title}
                            </HeaderThree>
                            <Hr/>
                        </TitleContent>
                        <CardInfo>{description}</CardInfo>
                        <div>
                            <TitleContent>Stack</TitleContent>
                            <TagList>
                                {tags.map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={visit}>Code</ExternalLinks>
                            <ExternalLinks href={source}>Source</ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                ))}
            </GridContainer>
        </Section>
    )
}

export default Projects