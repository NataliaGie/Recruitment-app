import avatar from '../images/candidate-avatar.png';
import {
    CandidateCardWrapper,
    CandidateAvatar,
    CardContentWrapper,
    NameOfCandidate,
    MainTechnologiesParagraph,
    OtherTechnologiesParagraph,
    BlueLine
} from "./CandidateCard.style";
import { StrongerText } from "./MainContent.styles";

function CandidateCard ({name, primarySkill, moreSkills}) {
    return (
        <CandidateCardWrapper>
            <CardContentWrapper>
                <CandidateAvatar src={avatar} />
                <NameOfCandidate>{name}</NameOfCandidate>
                <BlueLine />
                <MainTechnologiesParagraph><StrongerText>Primary skill:</StrongerText> {primarySkill}</MainTechnologiesParagraph>
                <OtherTechnologiesParagraph><StrongerText>More skills:</StrongerText> {moreSkills}</OtherTechnologiesParagraph>
            </CardContentWrapper>
        </CandidateCardWrapper>
    );
};

export default CandidateCard;