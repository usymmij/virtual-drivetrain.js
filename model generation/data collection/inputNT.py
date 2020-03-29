import sys
import time
from networktables import NetworkTables
import numpy as np
import logging

# temporary placeholders for the data
lastData = np.zeros((10), dtype=float)
currData = np.zeros((10), dtype=float)

# buffer array that shows a freeze frame the data at the timestamp
frozenArray = np.zeros((2,10), dtype=float)

# a list of the parameters for the NN that must be set, in the order as recieved from the Network
# table
parameterArray = [
    "time", "angle", "posR", "posL", "velR", "velL", "voutR", "voutL", "inputR", "inputL"
]

# the ip address and network table reference vars
ip = "10.42.53.2"
table = None
ready = False

filepath = "../dataset/"
filename = "ShotsFiredLowGear"
filesize = 2000
firstFile = 0

# the listener function called when a NT entry changes
def entryChanged(table, key, value, isNew):
    global frozenArray
    global currData
    global lastData

    #print(key, " ", value)

    if key == "ready":
        frozenArray[0] = lastData.copy()
        frozenArray[1] = currData.copy()
        ready = True
        return
    
    indx = parameterArray.index(key)
    lastData[indx] = currData[indx]
    currData[indx] = value

    #print("valueChanged: key: '%s'; value: %s; isNew: %s" % (key, value, isNew))

# the listener function called when a device connects
def connectionListener(connected, info):
    # prints out data about the connected device
    print(info, "; Connected=%s" % connected)

def setup():
    global ip
    global table

    # if there was another argument sent, set the ip to it, otherwise use the default ip
    if len(sys.argv) == 2:
        ip = sys.argv[1]
    logging.basicConfig(level=logging.DEBUG)

    NetworkTables.initialize(server=ip)
    NetworkTables.addConnectionListener(connectionListener, immediateNotify=True)
    table = NetworkTables.getTable("simulation")
    table.addEntryListener(listener=entryChanged, immediateNotify=True, key=None, localNotify=False)

if __name__ == "__main__" :

    setup()
    storeArray = []
    while True:
        if ready == True:
            ready = False
            # shape of storeArray is (-1, 2, 10) dytpe=float
            storeArray.append(frozenArray)
            if len(storeArray) > filesize:
                #uncomment this
                np.save(filepath + filename + str(firstFile), storeArray)
                storeArray = []
                firstFile += 1
