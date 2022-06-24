export const isInTheFuture = (input: Date) => {
	return input.getTime() > new Date().getTime();
}

export const isInThePast = (input: Date) => {
	return input.getTime() < new Date().getTime();
}