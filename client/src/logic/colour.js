export default function colour(rating) {
    if (rating >= 4.5) {
        return "#0B660B";
    }
    if (rating >= 4.0) {
        return "#0A116E";
    }
    if (rating >= 3.0) {
        return "#786711";
    }
    if (rating >= 2.0) {
        return "#637806";
    }
    return "#700C10";
}