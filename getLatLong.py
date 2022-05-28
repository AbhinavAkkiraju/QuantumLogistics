#importing library
from geopy.geocoders import Nominatim

#initializing Nominatim API
geolocator = Nominatim(user_agent="MyApp")

#getting city from user
city = input("Enter a city: ")
location = geolocator.geocode(city)

#printing latitude and longitude
print("Latitude: ", location.latitude)
print("Longitude: ", location.longitude)