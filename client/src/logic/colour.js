export default function colour(rating, page) {
    if (page === 'main') {
        return "hsl(" + rating / 5 * 120 + ", 80%, 20%)";
    }
    else if (page === 'champ') {
        return "hsl(" + (11 - rating) / 10 * 120 + ", 80%, 20%)";
    }
}