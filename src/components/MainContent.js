import {
    MainContentContainer,
    MainGreeting
} from "./MainContent.styles";
import { LogoutButton } from "../ui/LogoutButton";

function MainContent ({ name, logout }) {
    return (
        <MainContentContainer>
            <MainGreeting>Welcome, {name}</MainGreeting>
            <LogoutButton onClick={logout}>logout</LogoutButton>
        </MainContentContainer>
    );
}

export default MainContent;