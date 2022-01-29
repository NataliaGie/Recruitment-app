import { useSelector } from "react-redux";
import {
    MainContentContainer,
    MainGreeting,
    CandidatesWrapper,
    StrongerText
} from "./MainContent.styles";
import { LogoutButton } from "../ui/LogoutButton";
import CandidateCard from "./CandidateCard";

const MainContent = ({ name, logout }) => {
    const candidates = useSelector(state => state.candidatesData);
    console.log(candidates);
    return (
        <MainContentContainer>
            <MainGreeting>Welcome, <StrongerText>{name}</StrongerText>!</MainGreeting>
            <LogoutButton onClick={logout}>logout</LogoutButton>
            <CandidatesWrapper>
                {candidates.map((candidate, index) => {
                    return (
                        <CandidateCard
                            name={candidate.name}
                            primarySkill={candidate.primarySkill}
                            moreSkills={candidate.moreSkills}
                            key={index}/>
                    );
                })}
            </CandidatesWrapper>
        </MainContentContainer>
    );
}

export default MainContent;