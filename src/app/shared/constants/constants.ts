/**
 * @author Bruno Ramirez
 */
export const EMPTY_STRING: string = '';

/*Routes*/
export const DASHBOARD: string = 'dashboard';
export const AUTH: string = 'auth';
export const LOGIN: string = 'login';
export const REGISTER: string = 'register';
export const LINKS_CUSTOM: string = 'links-custom';
export const LINKS_PREVIEW: string = 'links-preview';
export const PROFILE: string = 'profile';
export const LINKS_CUSTOM_PATH: string = `${DASHBOARD}/${LINKS_CUSTOM}`;
export const LINKS_PREVIEW_PATH: string = `${DASHBOARD}/${LINKS_PREVIEW}`;
export const PROFILE_PATH: string = `${DASHBOARD}/${PROFILE}`;
export const LOGIN_PATH: string = `${AUTH}/${LOGIN}`;
export const REGISTER_PATH: string = `${AUTH}/${REGISTER}`;

export const PLATFORM_NAMES: string[] = [
  'github',
  'fronted-mentor',
  'twitter',
  'linkedin',
  'youtube',
  'facebook',
  'twitch',
  'devto',
  'codewars',
  'codepen',
  'freecodecamp',
  'gitlab',
  'hashnode',
  'stackoverflow',
];
