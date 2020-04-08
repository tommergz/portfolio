
if (localStorage.block === 'skills') {
    document.getElementById('portfolio-container').style.display = 'none';
    document.getElementById('skills-container').style.display = 'block';
}

const buttons = {
    portfolio_btn: document.getElementById('portfolio-btn'),
    skills_btn: document.getElementById('skills-btn'),
}

const lamps = {
    portfolio_lamp: document.getElementById('portfolio-lamp'),
    skills_lamp: document.getElementById('skills-lamp'),
}

buttons.portfolio_btn.addEventListener('click', () => {
    lamps.skills_lamp.style.backgroundColor = 'black';
    lamps.portfolio_lamp.style.backgroundColor = '#00ff00';
    document.getElementById('skills-container').style.display = 'none';
    document.getElementById('portfolio-container').style.display = 'block'; 
    localStorage.setItem('block', 'projects'); 
})

buttons.skills_btn.addEventListener('click', () => {
    lamps.portfolio_lamp.style.backgroundColor = 'black';
    lamps.skills_lamp.style.backgroundColor = '#00ff00';
    document.getElementById('portfolio-container').style.display = 'none';
    document.getElementById('skills-container').style.display = 'block';
    localStorage.setItem('block', 'skills');
})


