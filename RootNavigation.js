import { createNavigationContainerRef } from "@react-navigation/native"

export const navigationRef = createNavigationContainerRef()

/**
 * We use to initialize the navigation reference in the whole app dispatched in App.tsx
 * @param name
 * @param params
 */
export function navigate(name, params) {
     if (navigationRef.isReady()) {
          navigationRef.navigate(name, params)
     }
}

/**
 * We use to go back to the previous screen
 *
 */
export function goBack() {
     if (navigationRef.isReady() && navigationRef.canGoBack()) {
          navigationRef.goBack()
     }
}
