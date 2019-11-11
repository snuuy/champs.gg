export default function colour(rating) {
    return "hsl(" + rating / 5 * 120 + ", 80%, 20%)";
}