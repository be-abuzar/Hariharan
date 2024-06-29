function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function checkAnswer(answer) {
    if (answer === 'right') {
        showPage('page-4');
    } else {
        showPage('page-3');
    }
}
