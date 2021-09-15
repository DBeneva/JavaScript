function examPoints(task, score, course) {
    task = Number(task);
    score = Number(score);

    switch (task) {
        case 1:
            switch (course) {
                case 'Basics':
                    score *= 8 / 100;
                    score -= score * 0.20;
                    break;
                case 'Fundamentals':
                    score *= 11 / 100;
                    break;
                case 'Advanced':
                    score *= 14 / 100;
                    score += score * 0.20;
                    break;
            }
            break;

        case 2:
            switch (course) {
                case 'Basics': score *= 9 / 100; break;
                case 'Fundamentals': score *= 11 / 100; break;
                case 'Advanced':
                    score *= 14 / 100;
                    score += score * 0.20;
                    break;
            }
            break;

        case 3:
            switch (course) {
                case 'Basics': score *= 9 / 100; break;
                case 'Fundamentals': score *= 12 / 100; break;
                case 'Advanced':
                    score *= 15 / 100;
                    score += score * 0.20;
                    break;
            }
            break;

        case 4:
            switch (course) {
                case 'Basics': score *= 10 / 100; break;
                case 'Fundamentals': score *= 13 / 100; break;
                case 'Advanced':
                    score *= 16 / 100;
                    score += score * 0.20;
                    break;
            }
            break;
    }

    console.log(`Total points: ${score.toFixed(2)}`);
}
examPoints('1', '100', 'Basics');