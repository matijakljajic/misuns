export function averageCourierRating(ratings: { id: number; rating: number }[]) {
	const rratings = ratings.map((r) => r.rating);
	const sum = rratings.reduce((a, b) => a + b, 0);
	return sum / ratings.length;
}
