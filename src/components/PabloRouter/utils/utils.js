export const NAVIGATION_EVENTS = {
    PUSHSTATE: 'pushstate',
    POPSTATE: 'popstate'
}

export const BUTTONS = {
    PRIMARY: 0
}

export function navigate(path) {
    window.history.pushState({}, '', path);
    //Crear un evento personalizado
    const navigationEvent = new Event(NAVIGATION_EVENTS.PUSHSTATE);
    window.dispatchEvent(navigationEvent);
}