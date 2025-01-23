/*
    You are given timings of n meetings in the form of (start[i], end[i]) where start[i] is the start time of meeting i and end[i] is the finish time of meeting i. Return the maximum number of meetings that can be accommodated in a single meeting room, when only one meeting can be held in the meeting room at a particular time. 

    Note: The start time of one chosen meeting can't be equal to the end time of the other chosen meeting.
*/

const maxMeeting = (start: number[], end: number[]): number => {
  const meetings: { start: number; end: number }[] = [];

  for (let i = 0; i < start.length; i++) {
    meetings.push({ start: start[i], end: end[i] });
  }

  meetings.sort((a, b) =>
    a.end === b.end ? a.start - b.start : a.end - b.end
  );

  let prevEnd: number = -1;
  let meetCount: number = 0;

  for (const meeting of meetings) {
    if (meeting.start > prevEnd) {
      meetCount++;
      prevEnd = meeting.end;
    }
  }

  return meetCount;
};
