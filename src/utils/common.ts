export function ucFirst(word: string | undefined) {

    if (!word) {
        return false;
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function dateFromUTC(utcDateTime: string | undefined) {

    if (!utcDateTime) {
        return false;
    }

    return utcDateTime.slice(0, 10);
}

export function dateTimeFromUTC(utcDateTime: string | undefined) {

    if (!utcDateTime) {
        return false;
    }

    return utcDateTime.slice(0, 10) + ' ' + utcDateTime.slice(11, 19);
}