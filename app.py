import math
from geographiclib.geodesic import Geodesic
import requests
from global_land_mask import globe

lat1 = 45.523064
long1 = -122.676483

lat2 = 39.3999
long2 = -8.2245

geod = Geodesic.WGS84

l = geod.InverseLine(lat1, long1, lat2, long2)
ds = 1000
n = int(math.ceil(l.s13 / ds))
segments = []
curSeg = []
curSegState = False
for i in range(n + 1):
    s = min(ds * i, l.s13)
    g = l.Position(s, Geodesic.STANDARD | Geodesic.LONG_UNROLL)
    if i == 0:
        curSegState = globe.is_land(g['lat2'], g['lon2'])
        curSeg = [g['s12'], g['s12']]
    if curSegState != globe.is_land(g['lat2'], g['lon2']):
        curSeg.append(curSegState)
        segments.append([(curSeg[1] - curSeg[0]) / 1000, curSeg[2]])
        curSegState = globe.is_land(g['lat2'], g['lon2'])
        curSeg = [g['s12'], g['s12']]
    elif curSeg[1] < g['s12']:
        curSeg[1] = g['s12']
print(segments)
