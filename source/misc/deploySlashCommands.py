from time import sleep
from os   import system

while True:
    system('npx ts-node source/misc/deploySlashCommands')
    sleep(3 * 60)