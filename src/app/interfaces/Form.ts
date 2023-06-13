export type FormInput = {
    fullName: string,
    email: string,
    phoneNumber: string,
    company?: string | null,
    jobTitle?: string | null,
    notes?: string | null,
}

export type EBookFormInput = {
    fullName: string,
    email: string,
    company?: string | null,
    jobTitle?: string | null,
    phoneNumber: null,
    notes: null,
}

export type FormDataState = {
    formData: FormInput,
    eBookFormData: EBookFormInput
};
