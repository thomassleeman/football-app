### This didn't work for a really long time

For a long time this app did not work. The problem was that that first page would load up the data as required but when the user clicked on an item to go through to the next page the data was not present and the app would crash complaining of a type error.

**The problems**
For one thing there is an issue with Football API which is that each season is defined by the year in which it started. So searching for 2022 during the 2021/22 season will return nothing.

The main issue was that I was asking useFetch to set the state to 'loading' when that should have been happening onClick at the point at which the user clicks an item. When I changed this the problem went away.

### Planning

`Functionality`
**Home** page with Search bar to search either teams or leagues. Lists all leagues on first render.
--> click on a league -->

**League** page with list of teams
--> click on a team -->

**Team** page with team info

**About** page with basic description of what the app is

---

`api calls`

1. Leagues: All leagues
2. League by name: List of teams in a given league
3. League by ID
4. Team by name: specific team
5. Team by ID.

`Components`

1. Navbar
2. Loading
3. Search
4. Leagues
5. League
6. Team

`Pages`

1. Home
2. About
3. Error

`App`

1. index
2. App
3. context

### Notes on Football API

The sign in process on football Api is a bit strange. You have to select the option to 'sign up' directly through football Api and the website will then work out who you are from your browser.

Note:
The plan now is to use call() to dispatch new state and simply invoke call with the relevant endpoint from whereever it is needed throughout the app.
