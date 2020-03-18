import sys
import time
from networktables import NetworkTables
import numpy as np
import logging

lastData = [None] * 10
currData = [None] * 10

inputArray = []
answerArray = []

parameterArray = [
    "time", "angle", "posR", "posL", "velR", "velL", "voutR", "voutL", "inputR", "inputL"
]

if len(sys.argv) != 2:
    print("Error: specify an IP to connect to!")
    exit(0)
ip = sys.argv[1]
logging.basicConfig(level=logging.DEBUG)
NetworkTables.initialize(server=ip)
sd = NetworkTables.getTable("simulation")

def getShit(array):
    global parameterArray
    for p in range(len(parameterArray))

if __name__ == "__main__" :
    global lastData
    global currData

    lastData[0] = sd.getDouble("time")
    lastData[1] = sd.getDouble("angle")
    lastData[2] = sd.getDouble("posR")
    lastData[3] = sd.getDouble("posL")
    lastData[4] = sd.getDouble("velR")
    lastData[5] = sd.getDouble("velL")
    lastData[6] = sd.getDouble("voutR")
    lastData[7] = sd.getDouble("voutL")
    lastData[8] = sd.getDouble("inputR")
    lastData[9] = sd.getDouble("inputL")
    
    while True:
        currData[0] = sd.getDouble("time")
        currData[1] = sd.getDouble("angle")
        currData[2] = sd.getDouble("posR")
        currData[3] = sd.getDouble("posL")
        currData[4] = sd.getDouble("velR")
        currData[5] = sd.getDouble("velL")
        currData[6] = sd.getDouble("voutR")
        currData[7] = sd.getDouble("voutL")
        currData[8] = sd.getDouble("inputR")
        currData[9] = sd.getDouble("inputL")

        if lastData == currData:
            continue

        lastData = currData