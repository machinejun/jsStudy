const hanoi = (discs, start, end, temp) => {
    if (discs == 0) return 0; // 옮길 원반이 없다면 함수를 종료
	
    // step1 : 작은 원반들을 temp 기둥을 거쳐 end 기둥에 올리기
    let step1 = hanoi(discs -1, start, temp, end); 
    // 원반 옮기기
    console.log(`원반 ${discs}를 ${start}에서 ${end}로 이동`);
    // step2 : 원반 쌓기
    let step2 = hanoi(discs -1, temp, end, start);

    return step1 + step2 + 1;
}