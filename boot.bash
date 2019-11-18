if [ `hostname` = "red" ]; then
  echo This is red pi
  /home/pi/BattleSnakeAI/start.bash human1
  /home/pi/BattleSnakeAI/start.bash human2 
fi

if [ `hostname` = "blue" ]; then
  echo This is blue pi
  /home/pi/BattleSnakeAI/start.bash engine
  /home/pi/BattleSnakeAI/start.bash board
  /home/pi/BattleSnakeAI/start.bash game
fi

if [ `hostname` = "yellow" ]; then
  echo This is yellow pi
  /home/pi/BattleSnakeAI/start.bash ai1
  /home/pi/BattleSnakeAI/start.bash ai2
fi