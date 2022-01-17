export const getaverageRatingBackgroundColor = (rating) => {
    if(rating >= 7) {
        return 'percent-high';
    } else if(rating > 4 && rating < 7) {
        return 'percent-medium';
    } else {
        return 'percent-low';
    }
}