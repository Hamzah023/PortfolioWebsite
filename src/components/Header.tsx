
function Header() {


    function handleClick (id: string) {
        //if the user clicks on the about button, the page will scroll to the about section
        const element = document.getElementById(id);
        
        if (element !== null) {
            element.scrollIntoView({behavior: 'smooth'});
        }

    };

    return (
        <header className="">
            <div className="">
                {/* Logo */}
                <div className="">
                    Hamzah's Portfolio
                </div>

                {/* Navigation */}
                <nav className="">
                    <button className="" type="button" onClick={() => handleClick('About')}>About</button>
                    <button className="" type="button" onClick={() => handleClick('Projects')}>Projects</button>
                    <button className="" type="button" onClick={() => handleClick('Contact')}>Contact</button>
                </nav>
            </div>
        </header>
    )
}
