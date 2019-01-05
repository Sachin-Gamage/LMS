
/**
 *
 *
 *  Manipulate data in the local storage
 */
export function loadState() {

    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);

    } catch (err) {
        return undefined;
    }
}

export function saveState(state) {

    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.error(err);
    }
}

export function clearState() {

    try {
        localStorage.removeItem('state');
    } catch (err) {
        console.error(err);
    }
}