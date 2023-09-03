//Q17:

function max(start, end) {
    const x = start.length;
    const meetings = [];

 

 
    for (let i = 0; i < x; i++) {
        meetings.push({ start: start[i], end: end[i], index: i });
    }


    meetings.sort((a, b) => a.end - b.end);

 

    let max = 0;
    let endTime = 0;

 


    for (let i = 0; i < x; i++) {
        const meeting = meetings[i];
        if (meeting.start >= endTime) {
            max++;
            endTime = meeting.end;
        }
    }

 

    return max;
}

 
const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];
console.log(max(start, end));  