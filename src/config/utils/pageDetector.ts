import { STATIC_VARIABLES } from "../static";

export function pageModeDetector(): boolean {
  const location = window.location.href;
  return location.includes(STATIC_VARIABLES.EDIT_MODE);
}
