/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/api/starWarsApi.ts":
/*!***************************************!*\
  !*** ./components/api/starWarsApi.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   starWarsApi: () => (/* binding */ starWarsApi),\n/* harmony export */   useGetCharacterByIdQuery: () => (/* binding */ useGetCharacterByIdQuery),\n/* harmony export */   useGetCharactersQuery: () => (/* binding */ useGetCharactersQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst starWarsApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: 'starWarsApi',\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: 'https://swapi.dev/api/'\n    }),\n    endpoints: (builder)=>({\n            getCharacters: builder.query({\n                query: ({ search, page })=>{\n                    let url = 'people/?';\n                    if (search) {\n                        url += `search=${encodeURIComponent(search)}&`;\n                    }\n                    if (page) {\n                        url += `page=${page}`;\n                    }\n                    return url;\n                }\n            }),\n            getCharacterById: builder.query({\n                query: (id)=>`people/${id}/`\n            })\n        })\n});\nconst { useGetCharactersQuery, useGetCharacterByIdQuery } = starWarsApi;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvYXBpL3N0YXJXYXJzQXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUU7QUFHbEUsTUFBTUUsY0FBY0YsdUVBQVNBLENBQUM7SUFDbkNHLGFBQWE7SUFDYkMsV0FBV0gsNEVBQWNBLENBQUM7UUFBRUksU0FBUztJQUF5QjtJQUM5REMsV0FBVyxDQUFDQyxVQUFhO1lBQ3ZCQyxlQUFlRCxRQUFRRSxLQUFLLENBRzFCO2dCQUNBQSxPQUFPLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUU7b0JBQ3RCLElBQUlDLE1BQU07b0JBQ1YsSUFBSUYsUUFBUTt3QkFDVkUsT0FBTyxDQUFDLE9BQU8sRUFBRUMsbUJBQW1CSCxRQUFRLENBQUMsQ0FBQztvQkFDaEQ7b0JBQ0EsSUFBSUMsTUFBTTt3QkFDUkMsT0FBTyxDQUFDLEtBQUssRUFBRUQsTUFBTTtvQkFDdkI7b0JBQ0EsT0FBT0M7Z0JBQ1Q7WUFDRjtZQUNBRSxrQkFBa0JQLFFBQVFFLEtBQUssQ0FBb0I7Z0JBQ2pEQSxPQUFPLENBQUNNLEtBQU8sQ0FBQyxPQUFPLEVBQUVBLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDO1FBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFQyxxQkFBcUIsRUFBRUMsd0JBQXdCLEVBQUUsR0FBR2YsWUFBWSIsInNvdXJjZXMiOlsiL1VzZXJzL2xldG1lemVwL0Rlc2t0b3AvUmVhY3QgUlMgUTIvUkVBQ1QtMjAyNS1RMS9jb21wb25lbnRzL2FwaS9zdGFyV2Fyc0FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XG5pbXBvcnQgeyBDaGFyYWN0ZXIsIFBhZ2VSZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdHlwZXMvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCBzdGFyV2Fyc0FwaSA9IGNyZWF0ZUFwaSh7XG4gIHJlZHVjZXJQYXRoOiAnc3RhcldhcnNBcGknLFxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogJ2h0dHBzOi8vc3dhcGkuZGV2L2FwaS8nIH0pLFxuICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xuICAgIGdldENoYXJhY3RlcnM6IGJ1aWxkZXIucXVlcnk8XG4gICAgICBQYWdlUmVzcG9uc2UsXG4gICAgICB7IHNlYXJjaD86IHN0cmluZzsgcGFnZT86IHN0cmluZyB9XG4gICAgPih7XG4gICAgICBxdWVyeTogKHsgc2VhcmNoLCBwYWdlIH0pID0+IHtcbiAgICAgICAgbGV0IHVybCA9ICdwZW9wbGUvPyc7XG4gICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICB1cmwgKz0gYHNlYXJjaD0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2gpfSZgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgICAgdXJsICs9IGBwYWdlPSR7cGFnZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIGdldENoYXJhY3RlckJ5SWQ6IGJ1aWxkZXIucXVlcnk8Q2hhcmFjdGVyLCBzdHJpbmc+KHtcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGBwZW9wbGUvJHtpZH0vYCxcbiAgICB9KSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0Q2hhcmFjdGVyc1F1ZXJ5LCB1c2VHZXRDaGFyYWN0ZXJCeUlkUXVlcnkgfSA9IHN0YXJXYXJzQXBpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5Iiwic3RhcldhcnNBcGkiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiLCJidWlsZGVyIiwiZ2V0Q2hhcmFjdGVycyIsInF1ZXJ5Iiwic2VhcmNoIiwicGFnZSIsInVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldENoYXJhY3RlckJ5SWQiLCJpZCIsInVzZUdldENoYXJhY3RlcnNRdWVyeSIsInVzZUdldENoYXJhY3RlckJ5SWRRdWVyeSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/api/starWarsApi.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./components/store/slices/selectedItemsSlice.ts":
/*!*******************************************************!*\
  !*** ./components/store/slices/selectedItemsSlice.ts ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toggleSelection: () => (/* binding */ toggleSelection),\n/* harmony export */   unselectAll: () => (/* binding */ unselectAll)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialState = {\n    selected: {}\n};\nconst selectedCharactersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'selectedCharacters',\n    initialState,\n    reducers: {\n        toggleSelection: (state, action)=>{\n            const id = action.payload;\n            state.selected[id] = !state.selected[id];\n        },\n        unselectAll: (state)=>{\n            state.selected = {};\n        }\n    }\n});\nconst { toggleSelection, unselectAll } = selectedCharactersSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectedCharactersSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvc3RvcmUvc2xpY2VzL3NlbGVjdGVkSXRlbXNTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThEO0FBTTlELE1BQU1DLGVBQXdDO0lBQzVDQyxVQUFVLENBQUM7QUFDYjtBQUVBLE1BQU1DLDBCQUEwQkgsNkRBQVdBLENBQUM7SUFDMUNJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxpQkFBaUIsQ0FBQ0MsT0FBT0M7WUFDdkIsTUFBTUMsS0FBS0QsT0FBT0UsT0FBTztZQUN6QkgsTUFBTUwsUUFBUSxDQUFDTyxHQUFHLEdBQUcsQ0FBQ0YsTUFBTUwsUUFBUSxDQUFDTyxHQUFHO1FBQzFDO1FBQ0FFLGFBQWEsQ0FBQ0o7WUFDWkEsTUFBTUwsUUFBUSxHQUFHLENBQUM7UUFDcEI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSSxlQUFlLEVBQUVLLFdBQVcsRUFBRSxHQUFHUix3QkFBd0JTLE9BQU8sQ0FBQztBQUNoRixpRUFBZVQsd0JBQXdCVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXRtZXplcC9EZXNrdG9wL1JlYWN0IFJTIFEyL1JFQUNULTIwMjUtUTEvY29tcG9uZW50cy9zdG9yZS9zbGljZXMvc2VsZWN0ZWRJdGVtc1NsaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmludGVyZmFjZSBTZWxlY3RlZENoYXJhY3RlcnNTdGF0ZSB7XG4gIHNlbGVjdGVkOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBTZWxlY3RlZENoYXJhY3RlcnNTdGF0ZSA9IHtcbiAgc2VsZWN0ZWQ6IHt9LFxufTtcblxuY29uc3Qgc2VsZWN0ZWRDaGFyYWN0ZXJzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdzZWxlY3RlZENoYXJhY3RlcnMnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgdG9nZ2xlU2VsZWN0aW9uOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3RhdGUuc2VsZWN0ZWRbaWRdID0gIXN0YXRlLnNlbGVjdGVkW2lkXTtcbiAgICB9LFxuICAgIHVuc2VsZWN0QWxsOiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnNlbGVjdGVkID0ge307XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyB0b2dnbGVTZWxlY3Rpb24sIHVuc2VsZWN0QWxsIH0gPSBzZWxlY3RlZENoYXJhY3RlcnNTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWRDaGFyYWN0ZXJzU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInNlbGVjdGVkIiwic2VsZWN0ZWRDaGFyYWN0ZXJzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJ0b2dnbGVTZWxlY3Rpb24iLCJzdGF0ZSIsImFjdGlvbiIsImlkIiwicGF5bG9hZCIsInVuc2VsZWN0QWxsIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/store/slices/selectedItemsSlice.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./components/store/store.ts":
/*!***********************************!*\
  !*** ./components/store/store.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query */ \"@reduxjs/toolkit/query\");\n/* harmony import */ var _api_starWarsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/starWarsApi */ \"(pages-dir-node)/./components/api/starWarsApi.ts\");\n/* harmony import */ var _slices_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slices/selectedItemsSlice */ \"(pages-dir-node)/./components/store/slices/selectedItemsSlice.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__, _api_starWarsApi__WEBPACK_IMPORTED_MODULE_2__, _slices_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_3__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__, _api_starWarsApi__WEBPACK_IMPORTED_MODULE_2__, _slices_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        [_api_starWarsApi__WEBPACK_IMPORTED_MODULE_2__.starWarsApi.reducerPath]: _api_starWarsApi__WEBPACK_IMPORTED_MODULE_2__.starWarsApi.reducer,\n        selectedCharacters: _slices_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_api_starWarsApi__WEBPACK_IMPORTED_MODULE_2__.starWarsApi.middleware)\n});\n(0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.setupListeners)(store.dispatch);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvc3RvcmUvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDTTtBQUNQO0FBQ21CO0FBRTdELE1BQU1JLFFBQVFKLGdFQUFjQSxDQUFDO0lBQ2xDSyxTQUFTO1FBQ1AsQ0FBQ0gseURBQVdBLENBQUNJLFdBQVcsQ0FBQyxFQUFFSix5REFBV0EsQ0FBQ0csT0FBTztRQUM5Q0Usb0JBQW9CSixrRUFBeUJBO0lBQy9DO0lBQ0FLLFlBQVksQ0FBQ0MsdUJBQ1hBLHVCQUF1QkMsTUFBTSxDQUFDUix5REFBV0EsQ0FBQ00sVUFBVTtBQUN4RCxHQUFHO0FBRUhQLHNFQUFjQSxDQUFDRyxNQUFNTyxRQUFRIiwic291cmNlcyI6WyIvVXNlcnMvbGV0bWV6ZXAvRGVza3RvcC9SZWFjdCBSUyBRMi9SRUFDVC0yMDI1LVExL2NvbXBvbmVudHMvc3RvcmUvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IHNldHVwTGlzdGVuZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeSc7XG5pbXBvcnQgeyBzdGFyV2Fyc0FwaSB9IGZyb20gJy4uL2FwaS9zdGFyV2Fyc0FwaSc7XG5pbXBvcnQgc2VsZWN0ZWRDaGFyYWN0ZXJzUmVkdWNlciBmcm9tICcuL3NsaWNlcy9zZWxlY3RlZEl0ZW1zU2xpY2UnO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBbc3RhcldhcnNBcGkucmVkdWNlclBhdGhdOiBzdGFyV2Fyc0FwaS5yZWR1Y2VyLFxuICAgIHNlbGVjdGVkQ2hhcmFjdGVyczogc2VsZWN0ZWRDaGFyYWN0ZXJzUmVkdWNlcixcbiAgfSxcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHN0YXJXYXJzQXBpLm1pZGRsZXdhcmUpLFxufSk7XG5cbnNldHVwTGlzdGVuZXJzKHN0b3JlLmRpc3BhdGNoKTtcblxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJzZXR1cExpc3RlbmVycyIsInN0YXJXYXJzQXBpIiwic2VsZWN0ZWRDaGFyYWN0ZXJzUmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsInJlZHVjZXJQYXRoIiwic2VsZWN0ZWRDaGFyYWN0ZXJzIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0IiwiZGlzcGF0Y2giXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/store/store.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _components_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/store/store */ \"(pages-dir-node)/./components/store/store.ts\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./styles/global.css\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_1__, _components_store_store__WEBPACK_IMPORTED_MODULE_2__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_1__, _components_store_store__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// import { ThemeProvider } from '../src/context/ThemeProvider';\n\nconst MyApp = ({ Component, pageProps })=>{\n    return(// <ThemeProvider>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: _components_store_store__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/letmezep/Desktop/React RS Q2/REACT-2025-Q1/pages/_app.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/letmezep/Desktop/React RS Q2/REACT-2025-Q1/pages/_app.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ1c7QUFDbEQsZ0VBQWdFO0FBRW5DO0FBRTdCLE1BQU1FLFFBQVEsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNuQyxPQUNJLGtCQUFrQjtrQkFDbEIsOERBQUNKLGlEQUFRQTtRQUFDQyxPQUFPQSwwREFBS0E7a0JBQ2xCLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBSXBDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXRtZXplcC9EZXNrdG9wL1JlYWN0IFJTIFEyL1JFQUNULTIwMjUtUTEvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9jb21wb25lbnRzL3N0b3JlL3N0b3JlJztcbi8vIGltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9zcmMvY29udGV4dC9UaGVtZVByb3ZpZGVyJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICAvLyA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "@reduxjs/toolkit/query":
/*!*****************************************!*\
  !*** external "@reduxjs/toolkit/query" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit/query");;

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit/query/react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();