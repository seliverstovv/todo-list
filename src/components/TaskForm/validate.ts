import { TodoFormValues } from "./types"

export const TITLE_MAX_LENGTH = 74
export const DESCRIPTION_MAX_LENGTH = 350

type PratialValues = Partial<TodoFormValues>

const validate = (values: PratialValues, initial: { title: string; body: string }) => {
    const errors: PratialValues = {}
    const required = "This field is required"
    const maxLength = "Maximum number of characters"

    if (!values.title) {
        errors.title = required
    }

    if (values.title && values.title.length > TITLE_MAX_LENGTH) {
        errors.title = `${maxLength}: ${TITLE_MAX_LENGTH}`
    }

    if (values.body && values.body.length > DESCRIPTION_MAX_LENGTH) {
        errors.body = `${maxLength}: `
    }

    if (values.title === initial.title && values.body === initial.body) {
        errors.body = "No change"
    }

    return errors
}

export default validate
