from bs4 import BeautifulSoup, Comment
import pandas as pd
import requests
import time

all_teams = []

# get the html
html = requests.get("https://fbref.com/en/comps/9/Premier-League-Stats").text
soup = BeautifulSoup(html, "lxml")

# extract all HTML comments
comments = soup.find_all(string=lambda text: isinstance(text, Comment))

# find the first comment that contains a stats table
tables = []
for c in comments:
    if "<table" in c and "stats_table" in c:
        tables.append(BeautifulSoup(c, "lxml"))

if not tables:
    raise Exception("Could not find any tables inside comments")

# use the first table to get links
table = tables[0].find("table", class_="stats_table")
links = table.find_all("a")

# filter squad links
links = [l.get("href") for l in links if "/squads/" in l.get("href")]
team_urls = [f"https://fbref.com{l}" for l in links]

print(f"Found {len(team_urls)} teams")

for team_url in team_urls:
    team_name = team_url.split("/")[-1].replace("-Stats", "").replace("-", " ")
    print(f"Scraping {team_name}")

    data = requests.get(team_url).text
    soup = BeautifulSoup(data, "lxml")

    # extract commented tables again
    comments2 = soup.find_all(string=lambda text: isinstance(text, Comment))
    stats_table = None
    for c in comments2:
        if "<table" in c and "stats_table" in c:
            stats_table = BeautifulSoup(c, "lxml").find("table", class_="stats_table")
            break

    if stats_table is None:
        print(f"⚠️ No table for {team_name}")
        continue

    team_data = pd.read_html(str(stats_table))[0]
    team_data["Team"] = team_name
    all_teams.append(team_data)

    time.sleep(5)

stat_df = pd.concat(all_teams, ignore_index=True)
stat_df.to_csv("stats.csv")

print("Done — saved to stats.csv")
