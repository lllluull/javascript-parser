import {TOKEN} from "./types"
import {isKeyword, isWhitespace, isNumber, isString, isCommonAllowAfter, isPunctuator} from "./utils"

interface TokenList {
    type: TOKEN,
    value: string
}



const tokenizer = (input: string) => {
    let current: number = 0
    let token: TokenList[] = []
    const lengths = input.length
    while (current < lengths) {
        let char = input[current]
        if(isWhitespace(char)) {
            current++
            continue
        }

        if(isNumber(char)) {
            let value = ""
            while (isNumber(char)) {
                value += char
                char = input[++current]
            }
            // 如果接下来是空格，则表示是数字类型,否则抛出错误
            if(isCommonAllowAfter(char)) {
                token.push({ type: TOKEN.Numeric, value })
            } else {
                throw new TypeError("error");
            }
            continue
        }

        if(isString(char)) {
            let value = ""
            while (isString(char)) {
                value += char
                char = input[++current]
            }
            // 如果接下来是空格，则表示是数字类型,否则抛出错误
            if(isCommonAllowAfter(char)) {
                if (isKeyword(value)) {
                    token.push({ type: TOKEN.Keyword, value })
                } else {
                    token.push({ type: TOKEN.Identifier, value })
                }
            } else {
                throw new TypeError("error");
            }
            continue
        }

        if(char === '"') {
            let value = ""
            char = input[++current]
            while (char !== '"') {
                value += char
                char = input[++current]
            }
            current++
            token.push({ type: TOKEN.String, value })
            continue
        }

        if(isPunctuator(char)) {
            let value = ""
            while (isPunctuator(char)) {
                value += char
                char = input[++current]
            }
            token.push({ type: TOKEN.Punctuator, value })
            continue
        }
        throw new TypeError('I dont know what this character is: ' + char);
    }
    return token
}

export default tokenizer