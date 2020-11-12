// Players variables initialized: Player 1 = 'X'; Player 2 = 'O'
    var gameplayOn = true
    var maxTurns = 9
    var turnCounter = 0
    var player1score = document.querySelector('.scoreP1')
    var player2score = document.querySelector('.scoreP2')
    var playerTurn = document.querySelector('.player-turn')


// Create variables to select boxes
    var box1 = document.querySelector('.box1')
    var box2 = document.querySelector('.box2')
    var box3 = document.querySelector('.box3')
    var box4 = document.querySelector('.box4')
    var box5 = document.querySelector('.box5')
    var box6 = document.querySelector('.box6')
    var box7 = document.querySelector('.box7')
    var box8 = document.querySelector('.box8')
    var box9 = document.querySelector('.box9')

// Create button-clicks for each box

    box1.addEventListener('click', function() {
        if (isNotEmpty(box1)) {
            console.log("YOU CANNOT DO THAT!")
        } else if(gameplayOn) {
            turnCounter+=1
            checkPlayer(turnCounter, box1)
            if (rowCheck(box2, box3)) {
                changeRowGreen(box1, box2, box3)
                gameStops()
            } else if (rowCheck(box4, box7)) {
                changeRowGreen(box1, box4, box7)
                gameStops()
            } else if (rowCheck(box5, box9)) {
                changeRowGreen(box1, box5, box9)
                gameStops()
            } else {
                isDraw()
            }
        }


    })

    box2.addEventListener('click', function() {
        if (isNotEmpty(box2)) {
            console.log("YOU CANNOT DO THAT!")
        } else if(gameplayOn) {
            turnCounter+=1
            checkPlayer(turnCounter, box2)
            if (rowCheck(box1, box3)) {
                changeRowGreen(box1, box2, box3)
                gameStops()
            } else if (rowCheck(box5, box8)) {
                changeRowGreen(box2, box5, box8)
                gameStops()
            } else {
                isDraw()
            }
        }

    })

    box3.addEventListener('click', function() {
        if (isNotEmpty(box3)) {
            console.log("YOU CANNOT DO THAT!")
        } else if(gameplayOn) {
            turnCounter+=1
            checkPlayer(turnCounter, box3)
            if (rowCheck(box6, box9)) {
                changeRowGreen(box3, box6, box9)
                gameStops()
            } else if (rowCheck(box1, box2)) {
                changeRowGreen(box1, box2, box3)
                gameStops()
            } else if (rowCheck(box5, box7)) {
                changeRowGreen(box3, box5, box7)
                gameStops()
            } else {
                isDraw()
            }
        }

    })

    box4.addEventListener('click', function() {
        if (isNotEmpty(box4)) {
            console.log("YOU CANNOT DO THAT!")
        } else if(gameplayOn) {
            turnCounter+=1
            checkPlayer(turnCounter, box4)
            if (rowCheck(box1, box7)) {
                changeRowGreen(box1, box4, box7)
                gameStops()
            } else if (rowCheck(box5, box6)) {
                changeRowGreen(box4, box5, box6)
                gameStops()
            } else {
                isDraw()
            }
        }

    })

    box5.addEventListener('click', function() {
        if (isNotEmpty(box5)) {
            console.log("YOU CANNOT DO THAT!")
        } else if(gameplayOn) {
            turnCounter+=1
            checkPlayer(turnCounter, box5)
            if (rowCheck(box1, box9)) {
                changeRowGreen(box1, box5, box9)
                gameStops()
            } else if (rowCheck(box2, box8)) {
                changeRowGreen(box2, box5, box8)
                gameStops()
            } else if (rowCheck(box3, box7)) {
                changeRowGreen(box3, box5, box7)
                gameStops()
            } else if (rowCheck(box4, box6)) {
                changeRowGreen(box4, box5, box6)
                gameStops()
            } else {
                isDraw()
            }

        }

    })

    box6.addEventListener('click', function() {
        if (isNotEmpty(box6)) {
            console.log("YOU CANNOT DO THAT!")
        } else if(gameplayOn) {
            turnCounter+=1
            checkPlayer(turnCounter, box6)
            if (rowCheck(box3, box9)) {
                changeRowGreen(box3, box6, box9)
                gameStops()
            } else if (rowCheck(box4, box5)) {
                changeRowGreen(box4, box5, box6)
                gameStops()
            } else {
                isDraw()
            }
        }

    })

    box7.addEventListener('click', function() {
        if (isNotEmpty(box7)) {
            console.log("YOU CANNOT DO THAT!")
        } else if(gameplayOn){
            turnCounter+=1
            checkPlayer(turnCounter, box7)
            if (rowCheck(box1, box4)) {
                changeRowGreen(box1, box4, box7)
                gameStops()
            } else if (rowCheck(box8, box9)) {
                changeRowGreen(box7, box8, box9)
                gameStops()
            } else if (rowCheck(box3, box5)) {
                changeRowGreen(box3, box5, box7)
                gameStops()
            } else {
                isDraw()
            }
        } 

    })

    box8.addEventListener('click', function() {
        if (isNotEmpty(box8)) {
            console.log("YOU CANNOT DO THAT!")
        } else if (gameplayOn){
            turnCounter+=1
            checkPlayer(turnCounter, box8)
            if (rowCheck(box7, box9)) {
                changeRowGreen(box7, box8, box9)
                gameStops()
            } else if (rowCheck(box2, box5)) {
                changeRowGreen(box2, box5, box8)
                gameStops()
            } else {
                isDraw()
            }
        }

    })

    box9.addEventListener('click', function() {
        if (isNotEmpty(box9)) {
            console.log("YOU CANNOT DO THAT!")
        } else if (gameplayOn){
            turnCounter+=1
            checkPlayer(turnCounter, box9)
            if (rowCheck(box3, box6)) {
                changeRowGreen(box3, box6, box9)
                gameStops()
            } else if (rowCheck(box7, box8)) {
                changeRowGreen(box7, box8, box9)
                gameStops()
            } else if (rowCheck(box1, box5)) {
                changeRowGreen(box1, box5, box9)
                gameStops()
            } else {
                isDraw()
            }
        }

    })

    function gameStops() {
        if (turnCounter % 2 == 0) {

            //SCORE INCREMENT
            var p1Score = Number(player1score.dataset.scorePlayer1)
            p1Score += 1

            player1score.dataset.scorePlayer1 = p1Score

            document.querySelector('.announcement-message').textContent = "Congratulations Player 1! \n Click the 'NEXT GAME' button to continue to the next round!"

            gameplayOn = false

        } else {

            //SCORE INCREMENT
            var p2Score = Number(player2score.dataset.scorePlayer2)
            p2Score += 1

            player2score.dataset.scorePlayer2 = p2Score
            

            document.querySelector('.announcement-message').textContent = "Congratulations Player 2! \n Click the 'NEXT GAME' button to continue to the next round!"

            gameplayOn = false
        }
    }

    function rowCheck(boxA, boxB) {
        if (turnCounter % 2 == 0) {
            return (boxA.textContent=='X' && boxB.textContent=='X')
        } else { 
            return (boxA.textContent=='O' && boxB.textContent=='O') 
        }
    }

    function changeRowGreen(boxA, boxB, boxC) {
        boxA.style.backgroundColor = 'green'
        boxB.style.backgroundColor = 'green'
        boxC.style.backgroundColor = 'green'
    }

    function checkPlayer(turnCounter, box) {
        if (turnCounter % 2 == 0) {
            var createX = document.createElement('h3')
            createX.textContent = 'X'
            box.appendChild(createX)
            playerTurn.dataset.turn = 2
            
        } else {
            var createO = document.createElement('h3')
            createO.textContent = 'O'
            box.appendChild(createO)
            playerTurn.dataset.turn = 1

        }

    }

// Click button for next game
    var nextGameButton = document.querySelector('.next-game')

    nextGameButton.addEventListener('click', function() {
        box1.style.backgroundColor = 'white'
        box2.style.backgroundColor = 'white'
        box3.style.backgroundColor = 'white'
        box4.style.backgroundColor = 'white'
        box5.style.backgroundColor = 'white'
        box6.style.backgroundColor = 'white'
        box7.style.backgroundColor = 'white'
        box8.style.backgroundColor = 'white'
        box9.style.backgroundColor = 'white'

        document.querySelector('.announcement-message').textContent = "Ready?! FIGHT!!!"

        var childBox = document.querySelectorAll('.boxes h3')

        gameplayOn = true

        for (var i=0; i<childBox.length; i++){
            childBox[i].parentNode.removeChild(childBox[i])
        }
    })

    //Reset game - sets all scores to zero and clears board
    var resetGameButton = document.querySelector('.reset-game')
    var p2Score = player2score.dataset.scorePlayer2
    var p1Score = player1score.dataset.scorePlayer1

    resetGameButton.addEventListener('click', function() {
        box1.style.backgroundColor = 'white'
        box2.style.backgroundColor = 'white'
        box3.style.backgroundColor = 'white'
        box4.style.backgroundColor = 'white'
        box5.style.backgroundColor = 'white'
        box6.style.backgroundColor = 'white'
        box7.style.backgroundColor = 'white'
        box8.style.backgroundColor = 'white'
        box9.style.backgroundColor = 'white'

        document.querySelector('.announcement-message').textContent = "Ready?! FIGHT!!!"

        var childBox = document.querySelectorAll('.boxes h3')

        gameplayOn = true

        player2score.dataset.scorePlayer2 = 0
        player1score.dataset.scorePlayer1 = 0

        for (var i=0; i<childBox.length; i++){
            childBox[i].parentNode.removeChild(childBox[i])
        }
    })



    // Reset


    function boardReset() {
        
        box1.style.backgroundColor = 'white'
        box2.style.backgroundColor = 'white'
        box3.style.backgroundColor = 'white'
        box4.style.backgroundColor = 'white'
        box5.style.backgroundColor = 'white'
        box6.style.backgroundColor = 'white'
        box7.style.backgroundColor = 'white'
        box8.style.backgroundColor = 'white'
        box9.style.backgroundColor = 'white'

        var childBox = document.querySelectorAll('.boxes h3')

        for (var i=0; i<childBox.length; i++){
            childBox[i].parentNode.removeChild(childBox[i])
        }
    }

    function isNotEmpty(box) {
        return (box.textContent != "")
    }

    function isEmpty(box) {
        return (box.textContent == "")
    }
    
    //DRAW
    function isDraw () {
        if (isNotEmpty(box1) && isNotEmpty(box2) && isNotEmpty(box3) && isNotEmpty(box4) && isNotEmpty(box5) && isNotEmpty(box6) && isNotEmpty(box7) && isNotEmpty(box8) && isNotEmpty(box9)) {
            gameplayOn = false
            document.querySelector('.announcement-message').textContent = "DRAW HAHA! \n Click 'NEXT GAME' to continue..."
        }
    } 