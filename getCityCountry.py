# Import library
from geopy.geocoders import Nominatim

# Initialize Nominatim API
geolocator = Nominatim(user_agent="MyApp")

# Get input for latitude and longitude
lat = input("Latitude: ")
long = input("Longitude: ")

# Get coordinates
coordinates = "" + lat + " , " +  long + ""

# Reverse the coordinates + get address
location = geolocator.reverse(coordinates)
address = location.raw['address']

# Get city and country
city = address.get('city' '')
country = address.get('country', '')

# Output city and country
print(city + ", " + country)