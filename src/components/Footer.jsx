const now = new Date();
const year = now.getFullYear();

function Footer(){
    return (
        <footer>
            <p>Copywrite ⓒ {year}</p>
        </footer>
    )
}

export default Footer;