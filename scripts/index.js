const buttons = {
    portfolio_btn: document.getElementById('portfolio-btn'),
    skills_btn: document.getElementById('skills-btn'),
}

const portfolioBtn = document.getElementById('portfolio-btn');
const skills_btn = document.getElementById('skills-btn');

const lamps = {
    portfolio_lamp: document.getElementById('portfolio-lamp'),
    skills_lamp: document.getElementById('skills-lamp'),
}

const activateBlock = () => {
    if(event) { 
        if (event.currentTarget.id === 'portfolio-btn') { localStorage.setItem('skills', false) }
        else if (event.currentTarget.id === 'skills-btn') { localStorage.setItem('skills', true) }
    };
    const skillsBlock = JSON.parse(localStorage.skills);
    lamps.portfolio_lamp.style.backgroundColor = skillsBlock ? 'black' : '#00ff00';
    lamps.skills_lamp.style.backgroundColor = skillsBlock ? '#00ff00' : 'black';
    document.getElementById('portfolio-container').style.display = skillsBlock ? 'none': 'block';
    document.getElementById('skills-container').style.display = skillsBlock ? 'block' : 'none';
}

buttons.portfolio_btn.addEventListener('click', activateBlock);
buttons.skills_btn.addEventListener('click', activateBlock);

if (localStorage.skills === 'true') {
    activateBlock();
}
