## **Optimize the App for Performance:**

`React.memo` for `Card`, `CardList`, `RegionFilter`, `Sorting`, `SearchBar`
`useMemo` to memoize the filtered, searched and sorted list of countries
`useCallback` to memoize event handler functions for filtering, searching and sorting

### Performance Analysis Before and After Optimization

**Actions:**
Sorting by population (ascending) — used to trigger component updates and measure render performance.

|                                   | **Before**                                                                                   | **After (useMemo, useCallback, React.memo)**                                          |
| :-------------------------------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| ranked graph (population sorting) | ![before ranked commit duration](./src/assets/00%20not-memo-ranked-commit-information.png)   | ![after ranked commit duration](./src/assets/00%20memo-ranked-commit-information.png) |
| flame graph (population sorting)  | ![before flame commit duration](./src/assets/11%20not-memo-flame-commit-information%201.png) | ![after flame commit duration](./src/assets/11%20memo-flame-commit-information.png)   |
| :-                                | :-                                                                                           | :-                                                                                    |
| `CardList` ranked chart           | ![before ranked CardList](./src/assets/44%20not-memo-ranked-card-list.png)                   | ![after](./src/assets/44%20memo-ranked-card-list.png)                                 |
| :-                                | :-                                                                                           | :-                                                                                    |
|                                   | Total render time: Render: 34.4ms                                                            |

#### Components:

##### CardList (4.2ms)

The entire list of cards is re-rendered, each _Card_ triggers a separate re-render.

Update trigger: `BrowserRouter`|Total render time: Render: 30.6ms

#### Components:

Only one card is re-rendered (Card key="831" — 4.3ms)

`CardList` (2.5ms) — render time for the list decreased.

Update trigger: `BrowserRouter`|

## Conclusion:

The optimization worked correctly — the number of re-renders decreased, and the load on `CardList` was reduced.

The increase in commit duration is due to the overhead of memoization, but this is offset by eliminating unnecessary re-renders.
