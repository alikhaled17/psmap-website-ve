import { FormType } from './../../../interfaces/FormType.enum';
import { EBookFormInput, FormDataState, FormInput } from "@/app/interfaces/Form";
import HttpService from '@/app/services/http-service';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type SubmitFormType = {
    body: FormInput | EBookFormInput,
    formType: FormType
}

const initialState: FormDataState = {
    formData: {
        fullName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
        notes: "",
    },
    eBookFormData: {
        fullName: "",
        email: "",
        company: "",
        jobTitle: "",
        phoneNumber: null,
        notes: null,
    },
};

export const submitForm: any = createAsyncThunk("Form/submitForm",
    async ({ body, formType }: SubmitFormType, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const { postRequest } = new HttpService();
            const res = await postRequest(`Form/submitForm?formType=${formType}`, body);
            const { data } = res;

            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);


const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setFormData: (state, action) => {
            return {
                ...state
            };
        },
    },
    extraReducers: {
        [submitForm.fulfilled]: (state, action) => {
            return state;
        },

    },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
