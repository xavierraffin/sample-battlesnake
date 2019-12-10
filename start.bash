echo try starting $1
if [ $1 = "game" ]; then
  cd /home/pi/BattleSnakeAI/DemoUI
  /usr/bin/screen -dmS MainUI python -m SimpleHTTPServer 3011
  cd
fi
if [ $1 = "board" ]; then
  cd /home/pi/go/src/github.com/battlesnakeio/engine/board
  /usr/bin/screen -dmS Board python -m SimpleHTTPServer 3009
  cd
fi
if [ $1 = "engine" ]; then
  cd /home/pi/go/src/github.com/battlesnakeio/engine
  #/usr/bin/screen -dmS Engine engine server
  /usr/bin/screen -dmS Engine /home/pi/go/bin/engine server
  cd
fi
if [ $1 = "human1" ]; then
  cd /home/pi/BattleSnakeAI/humanSnake
  /usr/bin/screen -dmS Human1 python3 ./main.py --port 8080 --color "#F00" --controllerId 0
  cd
fi
if [ $1 = "human2" ]; then
  cd /home/pi/BattleSnakeAI/humanSnake2
  /usr/bin/screen -dmS Human2 python3 ./main.py --port 8081 --color "#0F0" --controllerId 1
  cd
fi
if [ $1 = "ai1" ]; then
  cd /home/pi/BattleSnakeAI/Ross
  /usr/bin/screen -dmS AI1 python main.py --port 8888 --snake 0
#  export PORT=8888
#  /usr/bin/screen -dmS AI1 /home/pi/go/bin/dsnek
fi
if [ $1 = "ai2" ]; then
  cd /home/pi/BattleSnakeAI/Ross
  /usr/bin/screen -dmS AI2 python main.py --port 9999 --snake 1
#  export PORT=9999
#  /usr/bin/screen -dmS AI1 /home/pi/go/bin/dsnek
fi
