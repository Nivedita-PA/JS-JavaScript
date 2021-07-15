{
    let count_heads = 0;
    let count_tails = 0;
    let flip;

    while (count_heads < 11 && count_tails < 11) {
        flip = Math.floor(Math.random() * 2);
        if (flip == 1) {
            count_heads = count_heads + 1;
        } else {
            count_tails = count_tails + 1;
        }
    }
    console.log("number of head wins: " + count_heads);
    console.log("number of tail wins: " + count_tails);
}