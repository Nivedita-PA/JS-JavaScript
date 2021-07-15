{
    let money = 100;
    let bet;
    while (money > 0 && money < 200) {
        bet = Math.floor(Math.random() * 2);
        if (bet == 1) {
            money = money + 1;
            console.log(money + "bet won");
        } else {
            money = money - 1;
            console.log(money + "bet lost");
        }
    }
}