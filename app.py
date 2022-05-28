import math
from geographiclib.geodesic import Geodesic
import requests
from global_land_mask import globe

lat1 = 45.523064
long1 = -122.676483

lat2 = 39.3999
long2 = -8.2245

geod = Geodesic.WGS84

# def isItWater(lat, lon):
#     url = 'https://fleet.ls.hereapi.com/1/search/proximity.json?layer_ids=CARTO_POLY_OCEAN,CARTO_POLY_RIVER_DO1,CARTO_POLY_RIVER_DO2,CARTO_POLY_RIVER_DO3,CARTO_POLY_RIVER_DO4,CARTO_POLY_DO2,CARTO_POLY_DO3,CARTO_POLY_DO4&apiKey=Yc5FLhQPhSfVVp_JX-qQ3bU2nM0mqEkmE8HsbuYaXsU&proximity=' + str(lat) + ',' + str(lon)
#     headers = {}
#     response = requests.get(url, headers=headers)
#     try:
#         if len(response.json()[u'geometries']) > 0:
#             return True
#         else:
#             return False
#     except:
#         return "j"

l = geod.InverseLine(lat1, long1, lat2, long2)
ds = 500000
n = int(math.ceil(l.s13 / ds))
for i in range(n + 1):
    if i == 0:
        print("distance latitude longitude azimuth")
    s = min(ds * i, l.s13)
    g = l.Position(s, Geodesic.STANDARD | Geodesic.LONG_UNROLL)
    print("{:.0f} {:.5f} {:.5f} {:.5f} ".format(
        g['s12'], g['lat2'], g['lon2'], g['azi2']) + str(globe.is_land(g['lat2'], g['lon2'])))
