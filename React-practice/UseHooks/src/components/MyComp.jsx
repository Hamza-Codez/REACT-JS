
/*React UseEffect Hook tells React Do Some Code when (Pick Up)
This component re-renders
This component mounts
The state of the value


1. useEffect (() => {}) Runs after every re-render
2. useEffect (() => {}, []) Runs only on mount
3. useEffect(()=> {}, [value]) Runs on mount + when value Changes

Uses 
1 Event LIsteners
2 Dom Manupulation
3 Subscriptions (real-time updates)
4 Fetching Data from an AP1
Clean Up when a component unmounts*/

1 // useEffect() -React Hook that tells React DO SOME CODE WHEN (pick one):
// 2 This component re-renders
3 // This component mounts
4 // The state of a value
5
6 // useEffect(function, [dependencies])
7
8 // 1. useEffect(() => {}) // Runs after every re-render
9 // 2. useEffect(() => {}, []) // Runs only on mount
10 // 3. useEffect (() => {}, [value]) // Runs on mount + when value changes
11
12 // USES
13 // #1 Event Listeners
14 // #2 DOM manipulation
15 // #3 Subscriptions (real-time updates)
16 // #4 Fetching Data from an API
17 // #5 Clean up when a component unmounts
18