import healthBar from '../health'

test('display healthy', () => {
	let result = healthBar({name: 'Маг', health: 90});
	expect(result).toBe('healthy');
})

test('display wounded', () => {
	let result = healthBar({name: 'Маг', health: 40});
	expect(result).toBe('wounded');
})

test('display critical', () => {
	let result = healthBar({name: 'Маг', health: 10});
	expect(result).toBe('critical');
})