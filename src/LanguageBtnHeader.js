import React from "react";

function LanguageButtonHeader (props) {
    let languages = ["All", "JavaScript", "Python", "Ruby", "Java", "CSS"];
    let {handleClick, value} = props
    return (
        <header className="header">
            <nav className="menus">
                {languages.map((language) => {
                 return   <button
                    className={value === language ? "lang-button active" : "lang-button"}
                    onClick={handleClick}
                    key={language}
                    >
                        {language}
                    </button>
                })}
            </nav>
        </header>
    )
}

export default LanguageButtonHeader