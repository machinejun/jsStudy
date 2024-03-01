function recursisonSample(number) {
    if(number > 10) return;
    console.log("Number: " + number++);
    return recursisonSample(number);
}

recursisonSample(1);