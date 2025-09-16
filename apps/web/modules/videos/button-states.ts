import {
  TRANSCRIPTION_STARTED_ICON,
  RECORDING_IN_PROGRESS_ICON,
  TRANSCRIPTION_STOPPED_ICON,
  RECORDING_DEFAULT_ICON,
} from "@calcom/lib/constants";

export const BUTTONS = {
  STOP_TRANSCRIPTION: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    tooltip: "Stop transcription",
    iconPath: TRANSCRIPTION_STARTED_ICON,
    iconPathDarkMode: TRANSCRIPTION_STARTED_ICON,
  },
  START_TRANSCRIPTION: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    tooltip: "Transcription powered by AI",
    iconPath: TRANSCRIPTION_STOPPED_ICON,
    iconPathDarkMode: TRANSCRIPTION_STOPPED_ICON,
  },
  WAIT_FOR_TRANSCRIPTION_TO_START: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    tooltip: "Please wait while we start transcription",
    iconPath: TRANSCRIPTION_STOPPED_ICON,
    iconPathDarkMode: TRANSCRIPTION_STOPPED_ICON,
  },
  WAIT_FOR_TRANSCRIPTION_TO_STOP: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    tooltip: "Please wait while we stop transcription",
    iconPath: TRANSCRIPTION_STOPPED_ICON,
    iconPathDarkMode: TRANSCRIPTION_STOPPED_ICON,
  },
  START_RECORDING: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    tooltip: "Start recording",
    iconPath: RECORDING_DEFAULT_ICON,
    iconPathDarkMode: RECORDING_DEFAULT_ICON,
  },
  WAIT_FOR_RECORDING_TO_START: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    tooltip: "Please wait while we start recording",
    iconPath: RECORDING_DEFAULT_ICON,
    iconPathDarkMode: RECORDING_DEFAULT_ICON,
  },
  WAIT_FOR_RECORDING_TO_STOP: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    tooltip: "Please wait while we stop recording",
    iconPath: RECORDING_DEFAULT_ICON,
    iconPathDarkMode: RECORDING_DEFAULT_ICON,
  },
  STOP_RECORDING: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    tooltip: "Stop recording",
    iconPath: RECORDING_IN_PROGRESS_ICON,
    iconPathDarkMode: RECORDING_IN_PROGRESS_ICON,
  },
};
