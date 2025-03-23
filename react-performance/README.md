## After optimization:

### **optimize the App for Performance:**
*React.memo* for Card, CardList, RegionFilter, Sorting, SearchBar
*useMemo* to memoize the filtered, searched and sorted list of countries
*useCallback* to memoize event handler functions for filtering, searching and sorting


### Performance Analysis Before and After Optimization

||**before**|**after**|
|ranked graph (population sorting)|[before ranked commit duration](./src/assets/00%20not-memo-ranked-commit-information.png)|[after ranked commit duration](./src/assets/00%20memo-ranked-commit-information.png)|
|flame graph (population sorting)|[before flame commit duration](./src/assets/11%20not-memo-flame-commit-information%201.png)|[after flame commit duration](./src/assets/11%20memo-flame-commit-information.png)|


#### Screenshot 1 — Before Optimization (without useMemo, useCallback):
Total render time: Render: 34.4ms

#### Components:

##### CardList (4.2ms)

The entire list of cards is re-rendered, each *Card* triggers a separate re-render.

Update trigger: *BrowserRouter*

#### Screenshot 2 — After Optimization (useMemo, useCallback, React.memo):
Total render time: Render: 30.6ms

#### Components:

Only one card is re-rendered (Card key="831" — 4.3ms)

*CardList* (2.5ms) — render time for the list decreased.

Update trigger: *BrowserRouter*

## Conclusion:
The optimization worked correctly — the number of re-renders decreased, and the load on *CardList* was reduced.

The increase in commit duration is due to the overhead of memoization, but this is offset by eliminating unnecessary re-renders.