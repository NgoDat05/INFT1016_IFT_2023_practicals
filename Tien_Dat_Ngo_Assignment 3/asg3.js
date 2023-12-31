function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme') || 'light';

    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    root.setAttribute('data-theme', newTheme);
}

function updateHeading() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const userNameFromQuery = urlParams.get('user_name');

    
    const storedTheme = localStorage.getItem('theme');
    const currentTheme = storedTheme || 'light';

    
    document.body.setAttribute('data-theme', currentTheme);

    
    const userName = userNameFromQuery || localStorage.getItem('user_name') || 'Tien Dat Ngo';

    
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = `Hello, ${userName} - Software Engineer`;
}


function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    
    localStorage.setItem('theme', newTheme);

    
    root.setAttribute('data-theme', newTheme);
}


document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    updateHeading();
});
