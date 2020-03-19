# network tables

data retrieved | table key
-- | --
timestamp | "time"
angle | "angle
posR | "posR"
posL | "posL"
velR | "velR"
velL | "velL"
voutR | "voutR"
voutL | "voutL"
inputR | "inputR"
inputL | "inputL"

# numpy
 - input list

   >The *input* list is 2 dimensional, where the first dimension is used as an index for the data collected and the second dimension comprises of the following data in that order

   - timestamp
   - next timestamp
   - angle
   - posR
   - posL
   - velR
   - velL
   - voutR
   - voutL
   - inputR 
   - inputL

 - answer list

   >The *answer* list is a similar shape as the input but the second dimension has the following data, and the data matches with the data corresponding to the **next timestamp** from the input list
   
 
   - angle
   - posR
   - posL
   - velR
   - velL
   - voutR
   - voutL