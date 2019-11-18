echo try starting $1
if [ $1 = "game" ]; then
  cd /home/pi/BattleSnakeAI/DemoUI
  /usr/bin/screen -dmS MainUI python -m SimpleHTTPServer 3011
  cd
fi
if [ $1 = "board" ]; then
  cd /home/pi/go/src/github.com/battlesnakeio/engine/board
  /usr/bin/screen -dmS Board python -m SimpleHTTPServer 3010
  cd
fi
if [ $1 = "engine" ]; then
  cd /home/pi/go/src/github.com/battlesnakeio/engine
  #/usr/bin/screen -dmS Engine engine server
  /usr/bin/screen -dmS Engine /home/pi/go/bin/engine server
  cd
fi
if [ $1 = "human1" ]; then
  cd /home/pi/BattleSnakeAI/humanSnake1
  /usr/bin/screen -dmS Human1 python3 ./main.py
  cd
fi
if [ $1 = "human2" ]; then
  cd /home/pi/BattleSnakeAI/humanSnake2
  /usr/bin/screen -dmS Human2 python3 ./main.py
  cd
fi