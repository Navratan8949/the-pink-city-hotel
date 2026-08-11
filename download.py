import urllib.request
import sys

url = "https://videos.pexels.com/video-files/3011326/3011326-uhd_2560_1440_24fps.mp4"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'})
try:
    with urllib.request.urlopen(req) as response, open('public/hero-video.mp4', 'wb') as out_file:
        data = response.read()
        out_file.write(data)
    print("Download successful!")
except Exception as e:
    print(f"Error: {e}")
