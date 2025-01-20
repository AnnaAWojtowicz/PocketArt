function Footer() {
    let getYear = () => {
        return new Date().getFullYear();
    };


    return (
        <>
            <div>
                <div>
                    <span></span>
                    <span className="footer-text"><span className="footer-name">PocketArt</span> is a platform dedicated to making art accessible to everyone, inspiring exploration of beauty, history, and personal growth through artistic discovery. Our website features images made possible by the open access policy of the Harvard Art Museum, with all copyrights belonging to them. This initiative allows us to share and celebrate their remarkable collection with a wider audience.</span>
                </div>
                <div className="footer-year">PocketArt {getYear()}</div>
            </div>
        </>
    )
}

export default Footer;