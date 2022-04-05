import requests
from  geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="Advanced_Vacation_Planner")
api_key = '904337bc92d1a77bffa708a9543a3649'
excludeRequest = 'minutely, alerts'
requestUnits = 'imperial'


#Gets latitude and longitude from city string
def get_coords_from_addr(city):
    coords = geolocator.geocode(city)
    return {
        'lat': coords.latitude,
        'lon': coords.longitude
    }
    

# https://openweathermap.org/api/one-call-api
# This is the doc for api request

def weather_api_request(city, excludeRequest,api_key, requestUnits):
    coords = get_coords_from_addr(city)
    url = f"https://api.openweathermap.org/data/2.5/onecall?lat={coords['lat']}&lon={coords['lon']}&exclude={excludeRequest}&appid={api_key}&units={requestUnits}"
    response = requests.get(url).json()

    return {
        'current': response['current'],
        'hourly': response['hourly'],
        'daily': response['daily']
    }


""" 
To use: 
    request using city name and country identifier to ensure correct location ("New York, NY"), ("Cancun, Mexico")
    
To access current weather data:
    Use weather_obj['current'] to get the whole list, further specifying with 
    weather_obj['current']['temp'] for temperature
    Useful identifiers include: temp, feels_like, humidity, dew_point, wind_speed, wind_deg

To access hourly weather data:
    Use weather_obj['hourly'] to get the whole list, further specifying with 
    weather_obj['hourly'][0]['temp'] for temperature for hour 1 up to hour 48
    Useful identifiers include: temp, feels_like, humidity, dew_point, wind_speed, wind_deg, pop(rain%)

To access daily weather data:
    Use weather_obj['daily'] to get the whole list, further specifying with 
    weather_obj['daily'][0]['temp']['max'] for daily max temperature for day 1 up to day 7
    Temperature identifiers include: day, min, max, night, eve, morn. Min/Max give best results
    Feels Like identifiers include: day, night, eve, morn

    Useful identifiers include: temp, feels_like, humidity, dew_point, wind_speed, wind_deg, pop(rain%)
 """
weather_obj = weather_api_request('clemson,sc', excludeRequest, api_key, requestUnits)
print('current:', weather_obj['daily'][1]['temp'])