import './Header.css'
function Header() {


    function handleClick (id: string) {
        //if the user clicks on the about button, the page will scroll to the about section
        const element = document.getElementById(id);
        
        if (element !== null) {
            element.scrollIntoView({behavior: 'smooth'});
        }

    };

    return (
        <header className="header-container">
            <div className="">

                    <button className="AboutHeader" type="button" onClick={() => handleClick('About')}>About</button>
                    <button className="ProjectsHeader" type="button" onClick={() => handleClick('Projects')}>Projects</button>
                    <button className="ContactHeader" type="button" onClick={() => handleClick('Contact')}>Contact</button>
                
            </div>
        </header>
    );
};

export default Header;