// Tab switching (trimmed from the original Budget app modals.js)
function switchTab(id) {
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const targetPane = document.getElementById(id);
    if (targetPane) targetPane.classList.add('active');
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${id}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    // The mortgage pane is hidden on page load, so its chart was built at
    // zero size — recalculate once it becomes visible.
    if (id === 'mortgage-sec' && window.calcMortgage) calcMortgage();
}

window.switchTab = switchTab;

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    // Initialise the compound interest calculator's rate label
    if (window.updateRate) updateRate();
});
