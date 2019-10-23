// TODO
const keyList = ["let", "const", "var"]


export const isKeyword = (word: string) => {
    return keyList.includes(word)
}

export const isWhitespace = (char: string) => {
    const WHITESPACE = /\s/;
    return WHITESPACE.test(char)
}

export const isNumber = (char: string ) => {
    const NUMBERS = /[0-9]/;
    return NUMBERS.test(char)
}

export const isString = (char: string ) => {
    const STRING = /[a-zA-Z]/;
    return STRING.test(char)
}

export const isCommonAllowAfter = (char: string) => {
    const WHITESPACE = /\s/;
    const list = ["=", ")"]
    return WHITESPACE.test(char) || list.includes(char)
}

export const isPunctuator = (char: string) => {
    const punctuatorList = ["[", "]", "(", ")", "=", "<", ">", "?", "|"]
    return punctuatorList.includes(char)
}
