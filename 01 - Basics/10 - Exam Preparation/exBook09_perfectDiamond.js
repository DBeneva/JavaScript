function perfectDiamond(n) {
    n = Number(n);

    //upper part
    for (let row = 1; row <= n; row++) {
        let spacesNumber = n - row;
        let spaces = ' '.repeat(spacesNumber);
        let dashStarNumber = row - 1;
        let dashStar = '-*'.repeat(dashStarNumber);
        let line = spaces + '*' + dashStar;
        
        console.log(line);
    }

    //lower part
    for (let row = 1; row < n; row++) {
        let spacesNumber = row;
        let spaces = ' '.repeat(spacesNumber);
        let dashStarNumber = n - row - 1;
        let dashStar = '-*'.repeat(dashStarNumber);
        let line = spaces + '*' + dashStar;
        
        console.log(line);
    }
}

perfectDiamond('4');