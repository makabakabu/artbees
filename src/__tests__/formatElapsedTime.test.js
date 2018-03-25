import formatElapsedTime from 'formatElapsedTime';

test('pass Non numberic should return 00:00.00', () => {
    expect(formatElapsedTime({ elapsedMilliseconds: 'asdfasfd'})).toBe('00:00.00');
    expect(formatElapsedTime({ elapsedMilliseconds: '2332233' })).toBe('00:00.00');
    expect(formatElapsedTime({ elapsedMilliseconds: 23232.7 })).toBe('00:00.00');
});

test('pass millseconds less than one hour should return in format 00:00.00', () => {
    const lessThanOneHour = Math.floor(Math.random() * Math.floor(60 * 60 * 1000));
    expect(formatElapsedTime({ elapsedMilliseconds: lessThanOneHour })).toBe(`${Math.floor(lessThanOneHour / (1000 * 60)).toString().padStart(2, '0')}:${Math.floor((lessThanOneHour / 1000) % 60).toString().padStart(2, '0')}.${Math.floor((lessThanOneHour / 10) % 100).toString().padStart(2, '0')}`);
});

test('pass millseconds more than one hour should return in format 00:00:00.00', () => {
    const moreThanOneHour = Math.floor(Math.random() * Math.floor(60 * 60 * 1000 * 59)) + 60 * 60 * 1000;
    expect(formatElapsedTime({ elapsedMilliseconds: moreThanOneHour })).toBe(`${Math.floor(moreThanOneHour / (1000 * 60 * 60)).toString().padStart(2, '0')}:${Math.floor((moreThanOneHour / (1000 * 60)) % 60).toString().padStart(2, '0')}:${Math.floor((moreThanOneHour / 1000) % 60).toString().padStart(2, '0')}.${Math.floor((moreThanOneHour / 10) % 100).toString().padStart(2, '0')}`);
});

test('pass millseconds much more than one hour should return in format 00:00:00.00', () => {
    const muchMoreThanOneHour = Math.floor(Math.random() * Math.floor(60 * 60 * 60 * 1000 * 10000)) + 60 * 60 * 60 * 1000;
    const formatMuchMoreThanOneHour = muchMoreThanOneHour % (60 * 60 * 60 * 1000);
    expect(formatElapsedTime({ elapsedMilliseconds: muchMoreThanOneHour })).toBe(`${Math.floor(formatMuchMoreThanOneHour / (1000 * 60 * 60)).toString().padStart(2, '0')}:${Math.floor((formatMuchMoreThanOneHour / (1000 * 60)) % 60).toString().padStart(2, '0')}:${Math.floor((formatMuchMoreThanOneHour / 1000) % 60).toString().padStart(2, '0')}.${Math.floor((formatMuchMoreThanOneHour / 10) % 100).toString().padStart(2, '0')}`);
});
