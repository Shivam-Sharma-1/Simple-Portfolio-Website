import { Section, SectionTitle } from "@/themes/GlobalComponents"
import { Box, BoxNum, BoxText, Boxes } from "./AccomplishmentsStyles"
import { accomplishmentsData } from "@/constants/constants"

function Accomplishments() {
    return (
        <Section>
            <SectionTitle>Personal Accomplishments</SectionTitle>
            <Boxes>
                {accomplishmentsData.map((card, index) => (
                    <Box key={index}>
                        <BoxNum>{card.number}</BoxNum>
                        <BoxText>{card.text}</BoxText>
                    </Box>
                ))}
            </Boxes>
        </Section>
    )
}

export default Accomplishments