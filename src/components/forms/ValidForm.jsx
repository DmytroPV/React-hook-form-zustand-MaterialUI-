const name_error = 'specify from 3-14 letters'
const password_error = 'specify from 8-20 symbols'

const ValidationName = {
    required: "enter your - Name*",
    minLength: { value: 3, message: `${name_error}` },
    maxLength: { value: 14, message: `${name_error}` },
    pattern: { value: /^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я0-9$]+$/, message: 'letter must be first, no characters' }
}
const ValidationEmail = {
    required: "enter your - Email*",
    pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, message: 'email is not valid' }
}
const ValidationPassword = {
    required: "enter your Password*",
    minLength: { value: 8, message: `${password_error}` },
    maxLength: { value: 20, message: `${password_error}` },
    pattern: { value: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, message: 'min 1 up/low-case (en), number, symbol' }
}

export {
    ValidationName,
    ValidationEmail,
    ValidationPassword
}