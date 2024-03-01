const hanoi = (discs, start, end, temp) => {
    if (discs == 0) return 0;

    let step1 = hanoi(discs -1, start, temp, end);
    console.log(`원반 ${discs}를 ${start}에서 ${end}로 이동`); // 기둥 옮기기
    let step2 = hanoi(discs -1, temp, end, start);

    return step1 + step2 + 1;
}

console.log("원반을 옮긴 횟수 : " + hanoi(3, "A", "C", "B"));


