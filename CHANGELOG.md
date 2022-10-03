# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
