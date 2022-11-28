# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.15.6](https://gitlab.com/redsky_public/framework/compare/v0.15.5...v0.15.6) (2022-11-28)

### Features

-   **cli:** Cleaned up templates for cli ([a3c79b2](https://gitlab.com/redsky_public/framework/commit/a3c79b2fdfbc099ed5d6dced8554246ca2fc209a))

### Bug Fixes

-   datatable was fetching wrong page number based on calculate page. ([e3df542](https://gitlab.com/redsky_public/framework/commit/e3df542ee2d04b08a85f8143aaa8400c78ab9fad))
-   datatable was fetching wrong page number based on calculate page. ([87980ea](https://gitlab.com/redsky_public/framework/commit/87980ea808edf9a55a1423bfddc5479e6831df4d))

### [0.15.5](https://gitlab.com/redsky_public/framework/compare/v0.15.4...v0.15.5) (2022-11-21)

### Features

-   **cli:** Added first draft of CLI ([4f6183f](https://gitlab.com/redsky_public/framework/commit/4f6183f0c17dc9cce7581aa60f12b9da9503ee76))

### [0.15.4](https://gitlab.com/redsky_public/framework/compare/v0.15.3...v0.15.4) (2022-11-17)

### Bug Fixes

-   **select:** allow for a single select on grouped options ([c42a735](https://gitlab.com/redsky_public/framework/commit/c42a735b89b309851f8c7892f36e52fcf7418694))

### [0.15.3](https://gitlab.com/redsky_public/framework/compare/v0.15.2...v0.15.3) (2022-11-15)

### Bug Fixes

-   **InputTextarea:** Made input text area more consistent for default ([5d819a5](https://gitlab.com/redsky_public/framework/commit/5d819a5155983c0d343687b8e30188eaafe808f5))
-   **popup:** Fixed issue with popups sometimes not animating in ([4a52141](https://gitlab.com/redsky_public/framework/commit/4a5214135ea85144614128c0231266779a09361b))

### [0.15.2](https://gitlab.com/redsky_public/framework/compare/v0.15.1...v0.15.2) (2022-11-11)

### Bug Fixes

-   **Select:** Fixed issue when options change for controlled inputs and they were not re-rendering ([aa8f2c0](https://gitlab.com/redsky_public/framework/commit/aa8f2c0c3721ffbbc8d7df41659e47625934f2f6))

### [0.15.1](https://gitlab.com/redsky_public/framework/compare/v0.15.0...v0.15.1) (2022-11-11)

### Bug Fixes

-   **rollup:** Added primereact/api as an external library ([f18611f](https://gitlab.com/redsky_public/framework/commit/f18611fd596ddace36d40d15079a76a44ff68a92))

## [0.15.0](https://gitlab.com/redsky_public/framework/compare/v0.14.1...v0.15.0) (2022-11-11)

### Bug Fixes

-   **datatable:** adds new datatable interfaces to export and fixes incorrect page bug ([639fd32](https://gitlab.com/redsky_public/framework/commit/639fd32995ad44db3cc3f7e9b2a0a204a0bc36da))
-   **datatable:** adds page 1 as default for page query ([e27e075](https://gitlab.com/redsky_public/framework/commit/e27e075ec32fc99938a128b585fe4b90869acfd3))
-   Fixing Alex's code ([e023fd0](https://gitlab.com/redsky_public/framework/commit/e023fd0cdad4cec50b1b915b76ccf5a734d88370))
-   **form:** Fixed Spencer's code for the form control and reverted the select component. ([ef9d674](https://gitlab.com/redsky_public/framework/commit/ef9d67484661236619bf10d7dedcf59c943d394d))
-   **form:** Undoing Spencer's fix of my code because mine was correct from the start. ([b2ba737](https://gitlab.com/redsky_public/framework/commit/b2ba737611a5fdc51735ad6a327b69579f604c7d))
-   **form:** Undoing Spencer's fix of my code because mine was correct from the start. ([c1e2582](https://gitlab.com/redsky_public/framework/commit/c1e25823e701a1e03c212877c5db44f6d2b0a4dc))
-   got clearing of the nullable select working with the validation working ([0f8a25b](https://gitlab.com/redsky_public/framework/commit/0f8a25be777dc4757de65a020a5ecdd2e73e039e))
-   I want the last word ([bacd94e](https://gitlab.com/redsky_public/framework/commit/bacd94e17cb6c77055572852b2987d4f05e27b34))
-   Made form control less opinionated ([4c89f44](https://gitlab.com/redsky_public/framework/commit/4c89f446495cec29a2b7c8a05487651519b9f621))
-   **package.json:** put back package json to original ([73a452f](https://gitlab.com/redsky_public/framework/commit/73a452f0e609c0b78d29ff65c98bc4efeabcab74))
-   Reverted unneed changes ([1906275](https://gitlab.com/redsky_public/framework/commit/19062750d3129e0a63385033596c306dc07b4e4c))
-   Your mother was a hamster, and your father smelt of elderberries ([760827e](https://gitlab.com/redsky_public/framework/commit/760827e14a7ebb9509773a3a67798fb1faa69fdf))

### [0.14.1](https://gitlab.com/redsky_public/framework/compare/v0.14.0...v0.14.1) (2022-11-10)

### Bug Fixes

-   **InputText:** Fixed issue when using a date for the InputType and a control. Dates do not support setSelectionRange ([5b7b752](https://gitlab.com/redsky_public/framework/commit/5b7b75289e2bf29ded4dd9d57eda83487d327a21))

## [0.14.0](https://gitlab.com/redsky_public/framework/compare/v0.13.2...v0.14.0) (2022-11-09)

### Features

-   **utils:** Added a number of new util methods ([2de57a5](https://gitlab.com/redsky_public/framework/commit/2de57a5a64be2f8354d57f2b8345bdcedf5e0d53))
-   **utils:** Fixed the convertTwentyFourHourTime issue for times that are 00:59 and less. ([2e16106](https://gitlab.com/redsky_public/framework/commit/2e1610613173e2db769b0b25235c3b80a9fb6e2a))

### Bug Fixes

-   **datatable:** adds isNull match types for filtering ([5406dc6](https://gitlab.com/redsky_public/framework/commit/5406dc623685b0fd8dcca6592d68269bf6cc1462))

### [0.13.2](https://gitlab.com/redsky_public/framework/compare/v0.13.1...v0.13.2) (2022-11-05)

### Bug Fixes

-   **datatable:** fixes issue with incorrect page on table data update ([5af72c1](https://gitlab.com/redsky_public/framework/commit/5af72c109ba7d83f034b9a2799aaac56391fe36f))
-   Made form control/input values nullable ([158638d](https://gitlab.com/redsky_public/framework/commit/158638d0fe501eec1742ee7c167209e79fbd04aa))

### [0.13.1](https://gitlab.com/redsky_public/framework/compare/v0.11.7...v0.13.1) (2022-11-02)

### Features

-   **996:** You can now call changeView to set the view ([a1f54c4](https://gitlab.com/redsky_public/framework/commit/a1f54c41927dda31903d54ccff859991a5efb8fe))
-   **hook:** Added a couple more hooks used with 996 ([918caf7](https://gitlab.com/redsky_public/framework/commit/918caf74d2785a9646275889fe684efaf2f37bef))

## [0.13.0](https://gitlab.com/redsky_public/framework/compare/v0.11.7...v0.13.0) (2022-11-02)

### Features

-   **996:** You can now call changeView to set the view ([a1f54c4](https://gitlab.com/redsky_public/framework/commit/a1f54c41927dda31903d54ccff859991a5efb8fe))
-   **hook:** Added a couple more hooks used with 996 ([918caf7](https://gitlab.com/redsky_public/framework/commit/918caf74d2785a9646275889fe684efaf2f37bef))

## [0.12.0](https://gitlab.com/redsky_public/framework/compare/v0.11.7...v0.12.0) (2022-11-02)

### Features

-   **996:** You can now call changeView to set the view ([a1f54c4](https://gitlab.com/redsky_public/framework/commit/a1f54c41927dda31903d54ccff859991a5efb8fe))
-   **hook:** Added a couple more hooks used with 996 ([918caf7](https://gitlab.com/redsky_public/framework/commit/918caf74d2785a9646275889fe684efaf2f37bef))

### [0.11.7](https://gitlab.com/redsky_public/framework/compare/v0.11.6...v0.11.7) (2022-11-02)

### Features

-   **select:** Added boolean to the RsSelect as a value that can be taken in. ([d5870e5](https://gitlab.com/redsky_public/framework/commit/d5870e5705d9a33ef9c238ca52ffa8181d832c81))

### [0.11.6](https://gitlab.com/redsky_public/framework/compare/v0.11.5...v0.11.6) (2022-10-31)

### Features

-   **select:** Now allowing group options to be controlled with our RsFormControl. Also added a fall back when a user passes duplicate matching option values into a group select ([c2f247c](https://gitlab.com/redsky_public/framework/commit/c2f247c143969d78e40f2c5a0ae2394d66437e7a))
-   **select:** Now allowing group options to be controlled with our RsFormControl. Also added a fall back when a user passes duplicate matching option values into a group select ([3a8ac51](https://gitlab.com/redsky_public/framework/commit/3a8ac51df3f96ec1692ef43dd21abe9e2b7a689b))

### [0.11.5](https://gitlab.com/redsky_public/framework/compare/v0.11.4...v0.11.5) (2022-10-26)

### [0.11.4](https://gitlab.com/redsky_public/framework/compare/v0.11.3...v0.11.4) (2022-10-24)

### Bug Fixes

-   **datatable:** adds option to use rows prop ([e54769c](https://gitlab.com/redsky_public/framework/commit/e54769cb24ab8e2e1ba57cb9601b583510cb91e5))

### [0.11.3](https://gitlab.com/redsky_public/framework/compare/v0.11.2...v0.11.3) (2022-10-21)

### Bug Fixes

-   **datatable:** adds ability to use custom onFilter function ([c45d3e2](https://gitlab.com/redsky_public/framework/commit/c45d3e29c83a0cc752000b379e73040dac3d4241))

### [0.11.2](https://gitlab.com/redsky_public/framework/compare/v0.11.1...v0.11.2) (2022-10-20)

### Bug Fixes

-   **datatable:** fixes filter updating and removes default pagination ([b9d603b](https://gitlab.com/redsky_public/framework/commit/b9d603bb26960573d72fab4fe9576781eb328113))

### [0.11.1](https://gitlab.com/redsky_public/framework/compare/v0.11.0...v0.11.1) (2022-10-20)

### Bug Fixes

-   **Select:** Ability to clear a single select works now ([8179567](https://gitlab.com/redsky_public/framework/commit/8179567ee826b2ea753e1cb6eae019097cf49eb7))

## [0.11.0](https://gitlab.com/redsky_public/framework/compare/v0.10.4...v0.11.0) (2022-10-18)

### Features

-   **datatable:** adds the datatable component ([5c9d904](https://gitlab.com/redsky_public/framework/commit/5c9d9042b47723fa08ba51c574174976b6bcd605))
-   **datatable:** up to date with master ([8e3f59a](https://gitlab.com/redsky_public/framework/commit/8e3f59a2d1bf2171856687e173a1544fb450037f))
-   **datatable:** updates dependencies and fixes global filter ([0dfe675](https://gitlab.com/redsky_public/framework/commit/0dfe675402acbcd0b94bda16981cf0cd9d0009bd))
-   **datatable:** updates peer dependencies ([1beb200](https://gitlab.com/redsky_public/framework/commit/1beb2006a177deb96e2913b445572a6d2ed6e7d0))

### [0.10.4](https://gitlab.com/redsky_public/framework/compare/v0.10.3...v0.10.4) (2022-10-14)

### Bug Fixes

-   **accordion:** Fixed the issue with the accordion popping open on page load/refresh ([8360448](https://gitlab.com/redsky_public/framework/commit/836044874f5c0fba3f02ebd709c3e9144a4a7ca9))

### [0.10.3](https://gitlab.com/redsky_public/framework/compare/v0.10.1...v0.10.3) (2022-10-14)

### Bug Fixes

-   **select:** Fixed the issue when setting the formControl.value to an empty array. We use to set it to undefined but react select requires us to set it to null. ([60a662e](https://gitlab.com/redsky_public/framework/commit/60a662e73dced296ab137bd0adb0f6d17a6f58aa))

### [0.10.2](https://gitlab.com/redsky_public/framework/compare/v0.10.1...v0.10.2) (2022-10-14)

### Bug Fixes

-   **select:** Fixed the issue when setting the formControl.value to an empty array. We use to set it to undefined but react select requires us to set it to null. ([60a662e](https://gitlab.com/redsky_public/framework/commit/60a662e73dced296ab137bd0adb0f6d17a6f58aa))

### [0.10.1](https://gitlab.com/redsky_public/framework/compare/v0.10.0...v0.10.1) (2022-10-13)

### Features

-   **formControl:** Added the ability to detect whether an empty array is equal to the default value of an empty array. ([d645f6a](https://gitlab.com/redsky_public/framework/commit/d645f6a657f5f7821c8b171d0fe7e4c2fd6478e6))

## [0.10.0](https://gitlab.com/redsky_public/framework/compare/v0.9.3...v0.10.0) (2022-10-10)

### Features

-   **button:** Added the props fullWidth. Added to the look options to now use an iconPrimary or iconSecondary. This will be used for iconButtons only. _YOU CANNOT ADD TEXT TO AN ICON BUTTON. USE ALL OTHER LOOK OPTIONS TO DO THIS._ ([1cb508c](https://gitlab.com/redsky_public/framework/commit/1cb508c2b5cb8d9945704ead2d0448c3065cc916))
-   **button:** Added the props fullWidth. Added to the look options to now use an iconPrimary or iconSecondary. This will be used for iconButtons only. _YOU CANNOT ADD TEXT TO AN ICON BUTTON. USE ALL OTHER LOOK OPTIONS TO DO THIS._ Added the Icon props; this allows the user to pass in an array of icons to attach to the icon. ([1f3b921](https://gitlab.com/redsky_public/framework/commit/1f3b921579411ee761dd96c80d13ac7ed5f3275d))

### [0.9.3](https://gitlab.com/redsky_public/framework/compare/v0.9.2...v0.9.3) (2022-10-03)

### Bug Fixes

-   **select:** when changing value dynamically, select would not update appropriately. ([b1d1764](https://gitlab.com/redsky_public/framework/commit/b1d17649d8810a07409ccc8e78aba8771b8f2e38))

### [0.9.2](https://gitlab.com/redsky_public/framework/compare/v0.9.1...v0.9.2) (2022-10-03)

### Bug Fixes

-   **select:** issue with giving a default value on a controlled input not using form ([99842b6](https://gitlab.com/redsky_public/framework/commit/99842b690c8e9a3ec7eedbbbaecd3e65f61335cc))

### [0.9.1](https://gitlab.com/redsky_public/framework/compare/v0.9.0...v0.9.1) (2022-09-27)

### Bug Fixes

-   **select:** When using formControl, and you set the control back to default or back to an empty string. It wasn't actually clearing the form. This is because the form doesn't like undefined. You need to set it to null. ([838af12](https://gitlab.com/redsky_public/framework/commit/838af121f3288fbe40b48a1354e33615117b1e71))

## [0.9.0](https://gitlab.com/redsky_public/framework/compare/v0.8.0...v0.9.0) (2022-09-21)

### Bug Fixes

-   **img:** when undefined gets pass into the src props. It throws an error during the checkForExistingQuery() method. ([4c7faf8](https://gitlab.com/redsky_public/framework/commit/4c7faf8f836e902eacddb601a2e6aafa9791d9b3))
-   **inputText:** On blur wasn't working as expected. We forgot to spread out props.onBlur from the inputProps. ([928d408](https://gitlab.com/redsky_public/framework/commit/928d408de4e76a5d27947b27887fc5dc51617b13))

## [0.8.0](https://gitlab.com/redsky_public/framework/compare/v0.7.1...v0.8.0) (2022-09-08)

### Features

-   **Utils:** Added AppUtils class to utils file. ([f03e2ca](https://gitlab.com/redsky_public/framework/commit/f03e2ca61264104ea15c1aca10ebbeda3aa2c47e))
-   **Utils:** Added AppUtils class to utils file. ([a5ded1a](https://gitlab.com/redsky_public/framework/commit/a5ded1a7033d48dba4d31d9232cf674e7795afd0))
-   **Utils:** made the ObjectUtils method, isArrayWithData return the value passed into it so you can use it with If checks better. ([10fd20e](https://gitlab.com/redsky_public/framework/commit/10fd20e3f72bbb485b99a9cb12b6dc9cc911cc1b))

### [0.7.1](https://gitlab.com/redsky_public/framework/compare/v0.7.0...v0.7.1) (2022-08-16)

### Features

-   **popup:** Added onRemoved callback ([c4281dc](https://gitlab.com/redsky_public/framework/commit/c4281dcfee52c142f964c0123dd52534f5966528))

## [0.7.0](https://gitlab.com/redsky_public/framework/compare/v0.6.1...v0.7.0) (2022-08-13)

### Features

-   **Hook:** Added generic to onclickoutsideref ([b644bbb](https://gitlab.com/redsky_public/framework/commit/b644bbbf7eec85d2f5582a3702eb74ef91f8503e))
-   **input:** Inputs no longer validate until first blur, this can be overwritten with a prop ([4b2206f](https://gitlab.com/redsky_public/framework/commit/4b2206fddd303409491cdef567acd0605b3fd47b))

### [0.6.1](https://gitlab.com/redsky_public/framework/compare/v0.6.0...v0.6.1) (2022-07-27)

### Bug Fixes

-   **AnimateOnScroll:** Fixed exporting animate for ui ([5e6537a](https://gitlab.com/redsky_public/framework/commit/5e6537aa0161d109c96686cac0dee6ee975e5239))

## [0.6.0](https://gitlab.com/redsky_public/framework/compare/v0.5.3...v0.6.0) (2022-07-27)

### Features

-   **996:** Page components now have title and description and open graph tags ([285fd8c](https://gitlab.com/redsky_public/framework/commit/285fd8cb93385551b3f36eef792d848b89de1645))
-   **AnimateOnScroll:** Added animate on scroll ([5334910](https://gitlab.com/redsky_public/framework/commit/5334910186cf0e52e02e8233dc9cec88dff9269d))

### Bug Fixes

-   Improved interfaces ([714e160](https://gitlab.com/redsky_public/framework/commit/714e160afb2a0fd80fdbbb031e5ff68455173c67))
-   **InputNumber:** Fixed duplicate ids when using InputNumber ([c502441](https://gitlab.com/redsky_public/framework/commit/c502441ab41544cdf91b48007fd7fa31ae54d438))
-   **LabelRadioButton:** Fixed missing keys on LabelRadioButton ([6b01dcb](https://gitlab.com/redsky_public/framework/commit/6b01dcbece7a131a7e1704b621d154b9b5bab493))
-   **useOnClickOutsideRef:** Fixed type definitions on callback function. ([12ef43f](https://gitlab.com/redsky_public/framework/commit/12ef43fc85e583e1fb3adb0633a7ce793d78291b))

### [0.5.3](https://gitlab.com/redsky_public/framework/compare/v0.5.2...v0.5.3) (2022-07-12)

### Bug Fixes

-   **Icon:** Cursor Pointer ([e15715c](https://gitlab.com/redsky_public/framework/commit/e15715c3cd7212b9d329066522e73be51cdd7549))

### [0.5.2](https://gitlab.com/redsky_public/framework/compare/v0.5.1...v0.5.2) (2022-07-12)

### Features

-   **Icon:** Added padding props to Icon. ([235f589](https://gitlab.com/redsky_public/framework/commit/235f589361c2fccfb39f7ea692f65aa1dd27b200))

### [0.5.1](https://gitlab.com/redsky_public/framework/compare/v0.5.0...v0.5.1) (2022-07-06)

### Bug Fixes

-   **labelRadiobutton:** Fixed the classNames from not showing up. ([70bb076](https://gitlab.com/redsky_public/framework/commit/70bb076e169dadb7ecccfd78bfc925783d4b2a2b))

## [0.5.0](https://gitlab.com/redsky_public/framework/compare/v0.4.0...v0.5.0) (2022-07-06)

### Features

-   **Label:** Added required prop weight for separating variant and weight ([55b827a](https://gitlab.com/redsky_public/framework/commit/55b827a3093b703e41086e4f6c1051d2859d9d1f))

## [0.4.0](https://gitlab.com/redsky_public/framework/compare/v0.3.0...v0.4.0) (2022-06-29)

### Features

-   adding starRating component ([c7acf7b](https://gitlab.com/redsky_public/framework/commit/c7acf7b7c86c25590e228d2e60de80b63fbb2d53))
-   **LabelRadioButton:** - Added in the Label radio button. ([d59059f](https://gitlab.com/redsky_public/framework/commit/d59059f9398d6dded2e520c30c0169aa5a128295))

### Bug Fixes

-   **InputTextarea:** Removed inherits on border and border color. Removed negative margin ([11b9bd4](https://gitlab.com/redsky_public/framework/commit/11b9bd4b818d4b08174f7c4ac7fa8b31782b4c6a))
-   Made adjustment to the checkbox id being generated from the component and not required. ([29dd673](https://gitlab.com/redsky_public/framework/commit/29dd673f96e06c928f93720a79a12d1ff3f47772))
-   **RadioButtonGroup:** Properly import label radio button ([8b1da94](https://gitlab.com/redsky_public/framework/commit/8b1da94a1d891a5bc7a8036dcd72391d45feeee8))
-   Removed Label Component, replaced with label field so htmlFor is used for increased click area. ([4655235](https://gitlab.com/redsky_public/framework/commit/4655235a4d88d908b54f7437af5f63def4dfca37))

## [0.3.0](https://gitlab.com/redsky_public/framework/compare/v0.2.0...v0.3.0) (2022-06-23)

### Features

-   **InputNumber:** Added Margin properties, changed order of onChange arguments. ([cb2173f](https://gitlab.com/redsky_public/framework/commit/cb2173f017f7f56402c9f2804c1e0191c464b375))
-   **InputTextarea:** Added Margin Props, adjusted onChange argument positions ([3f56720](https://gitlab.com/redsky_public/framework/commit/3f5672033fcf7d40b820725f96a955f7df504329))
-   **Select:** Added Select component ([a74ff9e](https://gitlab.com/redsky_public/framework/commit/a74ff9e947133eaa7ac7cc9c5526498d5310b495))
-   **Select:** working select with multi and create ([a1dc63a](https://gitlab.com/redsky_public/framework/commit/a1dc63abf4272eb2141c4c28a281a0d64d3f0a7e))

### Bug Fixes

-   **Img:** Added Margin properties ([635f437](https://gitlab.com/redsky_public/framework/commit/635f437f7823584835dff4971d0777017ca47dfe))
-   **InputText:** Made props more consistent. Added Margin and palette props ([737bb9a](https://gitlab.com/redsky_public/framework/commit/737bb9a5d2dbd2607bacab3627edde46dac70984))

## [0.2.0](https://gitlab.com/redsky_public/framework/compare/v0.1.11...v0.2.0) (2022-06-22)

### Features

-   Added HttpClient. Requires axios dependency ([17ed4e3](https://gitlab.com/redsky_public/framework/commit/17ed4e30c5effd37f87963dfa8488395e6e65f7c))
-   Adding in Checkbox Component. ([72f09c5](https://gitlab.com/redsky_public/framework/commit/72f09c54eb951685219428113fca6690decf6aef))
-   **Img:** Added Image Component, updated more playground. Moved stories ([24d7de4](https://gitlab.com/redsky_public/framework/commit/24d7de40619f35158d87cf19cae7a227a3908e79))

### Bug Fixes

-   **Accordion:** Fixed missing key on array of react nodes ([a4d5bf3](https://gitlab.com/redsky_public/framework/commit/a4d5bf3c2887ce2598e3b1b85a0649b5a1100731))
-   Fixes based on Alex's comments ([23ee033](https://gitlab.com/redsky_public/framework/commit/23ee033fa5a13ece8aa9ffeca1b16e476912af37))
-   remove class names ([1c3de96](https://gitlab.com/redsky_public/framework/commit/1c3de969b346741b5fedd65b803319635136691d))

### [0.1.11](https://gitlab.com/redsky_public/framework/compare/v0.1.10...v0.1.11) (2022-06-18)

### [0.1.10](https://gitlab.com/redsky_public/framework/compare/v0.1.9...v0.1.10) (2022-06-17)

### Bug Fixes

-   Page not using classname, removed rs-view class ([1914765](https://gitlab.com/redsky_public/framework/commit/19147650bf4c73a967318c2eb77fc5b783979b29))

### [0.1.9](https://gitlab.com/redsky_public/framework/compare/v0.1.8...v0.1.9) (2022-06-17)

### Features

-   **Accordion): Imported and updated the Accordion component to match new framework rules. feat(Select:** Imported and updated the Select component to match new framework ([31bd0b8](https://gitlab.com/redsky_public/framework/commit/31bd0b8a53d0bb685ba47b6392cdda2b5735f41e))
-   **Accordion): Imported and updated the Accordion component to match new framework rules. feat(Select:** Imported and updated the Select component to match new framework ([7ab769e](https://gitlab.com/redsky_public/framework/commit/7ab769e98bc1f02ea59703d09d8c7bf44578685e))
-   **Accordion): Imported and updated the Accordion component to match new framework rules. feat(Select:** Imported and updated the Select component to match new framework ([977cc8c](https://gitlab.com/redsky_public/framework/commit/977cc8c22cc88aef4d0de787f0392eb668a86316))

### Bug Fixes

-   Avatar exporting default is wrong, Removed select as an export for the time being. Removed terser plugin. ([9bbdb98](https://gitlab.com/redsky_public/framework/commit/9bbdb98ec319cea3d6f64802e0943380f10eb77c))

### [0.1.8](https://gitlab.com/redsky_public/framework/compare/v0.1.7...v0.1.8) (2022-06-17)

### Bug Fixes

-   **toastify): Cleaned up the Toastify file and changed the label color back to nothing. fix(button:** Small classname was re-added. ([9693419](https://gitlab.com/redsky_public/framework/commit/9693419659e7e002eafd0ad25705a9e15d287563))

### [0.1.7](https://gitlab.com/redsky_public/framework/compare/v0.1.6...v0.1.7) (2022-06-17)

### Bug Fixes

-   **Toastify:** Changed to required dependency ([16b0ec7](https://gitlab.com/redsky_public/framework/commit/16b0ec72803c27b639ad7e989143f5298fce68f9))

### [0.1.6](https://gitlab.com/redsky_public/framework/compare/v0.1.5...v0.1.6) (2022-06-17)

### Bug Fixes

-   **F996:** Exported namespace ([1fb7892](https://gitlab.com/redsky_public/framework/commit/1fb7892117739ff6208442e09c7207579d9bbdf1))

### [0.1.5](https://gitlab.com/redsky_public/framework/compare/v0.1.4...v0.1.5) (2022-06-17)

### Bug Fixes

-   **Link:** Updated import for Router ([9b600df](https://gitlab.com/redsky_public/framework/commit/9b600dfdd972f6a6f7782cd09e473204dfe54fa9))

### [0.1.4](https://gitlab.com/redsky_public/framework/compare/v0.1.3...v0.1.4) (2022-06-17)

### Features

-   Removed css inputs and extened ICommon.PaletteProps instead. Tested and still works. ([939a123](https://gitlab.com/redsky_public/framework/commit/939a12385ecfc0a16c51e7404430b5632ac84540))

### Bug Fixes

-   **996:** Imported and updated the 996 component to match new framework rules. ([3e52719](https://gitlab.com/redsky_public/framework/commit/3e52719634e7889f0c8d02f321eba1fa365e4217))
-   **996:** Imported and updated the 996 component to match new framework rules. ([7e58536](https://gitlab.com/redsky_public/framework/commit/7e585368b17a693293fa5244bb530af49f95b527))
-   Added space between lines ([b0e5532](https://gitlab.com/redsky_public/framework/commit/b0e5532b14556800afcc93a7ee3d0fc522c3e037))

### [0.1.3](https://gitlab.com/redsky_public/framework/compare/v0.1.2...v0.1.3) (2022-06-16)

### Features

-   **toastify:** Imported and updated the Toastify component to match new framework rules. ([93a35e6](https://gitlab.com/redsky_public/framework/commit/93a35e69f99d077fafc6473dda250b68eed59c3d))
-   updated husky to the latest version ([790432f](https://gitlab.com/redsky_public/framework/commit/790432f9ca183a6656b048968f1e60dc0f90b101))

### [0.1.2](https://gitlab.com/redsky_public/framework/compare/v0.1.1...v0.1.2) (2022-06-14)

### [0.1.1](https://gitlab.com/redsky_public/framework/compare/v0.1.0...v0.1.1) (2022-06-14)

### Features

-   **Button:** Imported and updated the Button component to match new framework rules. ([165a262](https://gitlab.com/redsky_public/framework/commit/165a2623abe1b8550193e2ba78b265b15e34c78e))

## [0.1.0](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.11...v0.1.0) (2022-06-13)

### Bug Fixes

-   Adjusted InputText to use form direct path ([179ff02](https://gitlab.com/redsky_public/framework/commit/179ff0252ba9e4fbcda5b6bf4f13df11b37de2e6))
-   **form:** Issue with returning valid when there were clearly errors. ([fc510cb](https://gitlab.com/redsky_public/framework/commit/fc510cb6d3a68804b7864308e23bed1b9a4b3279))
-   Renamed App.css to App.scss ([9c21948](https://gitlab.com/redsky_public/framework/commit/9c219480bd11e8e8dc11c95c8c6a0508db1c595c))

### [0.0.9-alpha.11](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.10...v0.0.9-alpha.11) (2022-06-12)

### Bug Fixes

-   **rollup:** moved dependencies as external so they get included properly ([0f73901](https://gitlab.com/redsky_public/framework/commit/0f739018f395dc148e2a6a904551f362ff1018b9))

### [0.0.9-alpha.10](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.9...v0.0.9-alpha.10) (2022-06-12)

### Bug Fixes

-   classnames as external dependency ([93a8eb6](https://gitlab.com/redsky_public/framework/commit/93a8eb6fc6d5c85679a261646b61311d0ed10b39))

### [0.0.9-alpha.9](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.7...v0.0.9-alpha.9) (2022-06-12)

### Bug Fixes

-   moved types for lodash.clone to devDependencies ([b3f5674](https://gitlab.com/redsky_public/framework/commit/b3f5674741008984a0297fa6385f2abc6edd77cb))

### [0.0.9-alpha.8](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.7...v0.0.9-alpha.8) (2022-06-10)

### [0.0.9-alpha.7](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.6...v0.0.9-alpha.7) (2022-06-10)

### [0.0.9-alpha.6](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.5...v0.0.9-alpha.6) (2022-06-10)

### [0.0.9-alpha.5](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.4...v0.0.9-alpha.5) (2022-06-10)

### Features

-   add more variant types ([e26516a](https://gitlab.com/redsky_public/framework/commit/e26516adcd339159e4682cdff81147fb7011904b))
-   added playground ([4ee6b22](https://gitlab.com/redsky_public/framework/commit/4ee6b22b224543368fe2af2a2f754f543a617a0a))
-   exported all props individually ([9b22079](https://gitlab.com/redsky_public/framework/commit/9b22079d9225269494177c1f046242729243f230))

### Bug Fixes

-   **Avatar:** recursive import through index ([fdc71fc](https://gitlab.com/redsky_public/framework/commit/fdc71fc07911dc524c6d6ab0cd82fc181b4ff41b))

### [0.0.9-alpha.4](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.3...v0.0.9-alpha.4) (2022-04-11)

### Features

-   label has been updated with all props using standard interfaces ([e1db1af](https://gitlab.com/redsky_public/framework/commit/e1db1af98589fe250757cd1a635755efc4719d7c))

### [0.0.9-alpha.3](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.2...v0.0.9-alpha.3) (2022-04-10)

### Bug Fixes

-   disable source map generation for css since it doesnt work and causes warnings in webpack ([95fbc0f](https://gitlab.com/redsky_public/framework/commit/95fbc0fe0db6ec0f3bfde65c08fc74fe8764e0b9))

### [0.0.9-alpha.2](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.1...v0.0.9-alpha.2) (2022-04-10)

### Bug Fixes

-   test fix changelog generation ([d138660](https://gitlab.com/redsky_public/framework/commit/d13866043dcbabdfdccbb1a9f8cec5b7230244e4))

### [0.0.9-alpha.1](https://gitlab.com/redsky_public/framework/compare/v0.0.9-alpha.0...v0.0.9-alpha.1) (2022-04-10)

### [0.0.9-alpha.0](https://gitlab.com/redsky_public/framework/compare/v0.0.8...v0.0.9-alpha.0) (2022-04-10)

### 0.0.8 (2022-04-10)
