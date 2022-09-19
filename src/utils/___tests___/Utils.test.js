import getDay, { sortDays, getTime } from '../Utils';
import { SegmentData } from '../../data/SegmentData';

describe('getDay function', () => {
  it('Should return the day of the given date', () => {
    const dateString = '2020-03-31T15:12:28.527Z';
    const expectedResult = 'Tuesday';

    const result = getDay(dateString);

    expect(result).toBe(expectedResult);
  });
});

describe('sortDays function', () => {
  it('Should push days into correct day array', () => {
    const expectedResultMonday = 151;
    const expectedResultTuesday = 146;

    const result = sortDays(SegmentData);

    expect(result[0]).toBe(expectedResultMonday);
    expect(result[1]).toBe(expectedResultTuesday);
  });
});

describe('getTime function', () => {
  it('Should push days into correct day array', () => {
    const expectedResult = '16:12:28';

    const result = getTime('2020-03-31T15:12:28.527Z');

    expect(result).toBe(expectedResult);
  });
});
