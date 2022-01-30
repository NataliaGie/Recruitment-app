import  { useState } from "react";
import { useSelector } from "react-redux";
import {
    MainContentContainer,
    MainGreeting,
    CandidatesWrapper,
    StrongerText
} from "./MainContent.styles";
import { LogoutButton } from "../ui/LogoutButton";
import CandidateCard from "./CandidateCard";
import SearchBar from "./SearchBar";

const MainContent = ({ name, logout }) => {
    const [searchedCandidates, setSearchedCandidates] = useState("");

    const candidates = useSelector(state => state.candidatesData);

    return (
        <MainContentContainer>
            <MainGreeting>Welcome, <StrongerText>{name}</StrongerText>!
            </MainGreeting>
            <LogoutButton onClick={logout}>logout</LogoutButton>
            <SearchBar
                onSearchChange={event => setSearchedCandidates(event.target.value)} />
            <CandidatesWrapper>
                {candidates.filter(candidate => {
                    if (searchedCandidates === "") {
                        return candidate;
                    } else if (candidate.primarySkill.toLowerCase().includes(searchedCandidates.toLowerCase())) {
                        return candidate;
                    }
                }).map((candidate, index) => {
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