
const currentYear = new Date().getFullYear();
const gitHubUrl = "https://www.linkedin.com/in/ariana-diaz-73709a280/";

export default function Footer () {
    return(
        <footer>
            <p>&copy;{currentYear}</p>
            <p><a href={gitHubUrl} target="_blank" rel="noreferrer">See Code in GitHub</a></p>
        </footer>
    )
}