window.onload = () => {
    console.log('Application démarrée');

    const docking: Element | null = document.querySelector('[app]');

    if (docking) {
        docking.innerHTML = 'Hello ECMA Script';
    }
};