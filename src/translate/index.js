import en from "./en"

const useTranslation = () => {
    const languageMap = { 'en-US' : en }
    const locale = 'en-US';
    return languageMap[locale];
}

export default useTranslation;