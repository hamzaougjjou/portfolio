document.querySelectorAll('.skillbar').forEach(function(skillbar) {
    var skillbarBar = skillbar.querySelector('.skillbar-bar');
    var width = skillbar.getAttribute('data-percent');
    animateSkillBar(skillbarBar, width, 2000);
});

function animateSkillBar(skillbarBar, width, duration) {
    var startTime = null;
    var startWidth = parseFloat(skillbarBar.style.width) || 0;
    var endWidth = parseFloat(width);

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var percent = Math.min(progress / duration, 1);
        skillbarBar.style.width = startWidth + (endWidth - startWidth) * percent + '%';
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}
