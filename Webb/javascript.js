const circles = document.querySelectorAll('.circle');
const timelineInfo = document.getElementById('timeline-info');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    const year = circle.getAttribute('data-year');
    const tooltip = circle.querySelector('.tooltip');
    const heading = tooltip.querySelector('h3').textContent;
    const description = tooltip.querySelector('p').textContent;

    timelineInfo.innerHTML = `
      <h2>${heading}</h2>
      <p>${description}</p>
    `;
  });
});
