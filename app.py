import numpy as np
from geographiclib.geodesic import Geodesic
from global_land_mask import globe
from qiskit_optimization.problems import QuadraticProgram
from qiskit_optimization.algorithms import CplexOptimizer
import math


lat1 = 47.760111
long1 = -122.205335

lat2 = 47.0
long2 = -122.618962

ton = 1
ep = 33
cp = 33
sp = 33

geod = Geodesic.WGS84

l = geod.InverseLine(lat1, long1, lat2, long2)
ds = 1000
n = int(math.ceil(l.s13 / ds))
segments = []
curSeg = []
curSegState = False

kmWater = 0
kmLand = 0

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

for i in segments:
    if i[1]:
        kmLand += i[0]
    elif not i[1]:
        kmWater += i[0]

qp = QuadraticProgram()

m = (ep * (0.16 * kmLand * ton) + cp * (22 * kmLand * ton) * (1 / (sp * 15)))
w = kmWater
k = (ep * (0.18 * kmLand * ton) + cp * (62 * kmLand * ton) * (1 / (sp * 36)))
air = abs(kmLand - k - m + w)

KmMUpperBound = int(kmLand)
KmAUpperBound = int(kmLand + kmWater)
if kmLand < 280:
    KmMUpperBound = 0
if kmLand + kmWater < 280:
    KmAUpperBound = 0
print("Land: " + str(kmLand), "Water: " + str(kmWater))
# KmK = Truck
# KmM = Train
# KmB = boat
# KmA = KmA
qp.integer_var(name="KmK", lowerbound = 0, upperbound = int(kmLand))
qp.integer_var(name="KmM", lowerbound = 0, upperbound = KmMUpperBound)
qp.integer_var(name="KmB", upperbound = int(kmWater))
qp.integer_var(name="KmA", upperbound = KmAUpperBound)
qp.linear_constraint({"KmK": 1, "KmM": 1}, "<=", int(kmLand))
qp.linear_constraint({"KmK": 1, "KmM": 1, "KmB": 1, "KmA": 1}, "=", int(kmLand + kmWater))

print(w, k, m, air)
if kmWater > 0:
    qp.minimize(linear={"KmB": w, "KmK": k, "KmM": m, "KmA": air})
else:
    qp.minimize({"KmK": k, "KmM": m, "KmA": (kmLand - k - m + w)})
print(CplexOptimizer().solve(qp))