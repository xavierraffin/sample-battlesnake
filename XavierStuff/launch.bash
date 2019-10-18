export GAME_ID=`engine create -c ~/BattleSnake/snake-config.json | jq -r '.ID'` 

xdg-open "http://localhost:3009/?engine=http%3A//localhost:3005&game=$GAME_ID&autoplay=true"

read -n 1 -s -r -p "Press any key to start the game"

echo Launching game $GAME_ID
engine run -g $GAME_ID

echo check if the game is dead:
export GAME_STATUS=`curl -s http://localhost:3005/games/$GAME_ID | jq -r .Game.Status`

echo Game is $GAME_STATUS
