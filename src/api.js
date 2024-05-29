import axios from "axios";
export const basePath = "https://webexam-backend.vercel.app/" // for prod
// export const basePath = "http://localhost:8000/"; // for development

export const postApi = (url, params) => {
    const options = {
        method: 'post',
        url: `${basePath}${url}`,
        data: params,
    };
    return axios(options);
};

export const getUserDetails = async (req, res) => {
    const result = await axios.get(`${basePath}user`);
    return result;
};

export const getAllQuestions = async (subject) => {
    let result = {};
    if(subject) {
        result = await axios.get(`${basePath}question/all/${subject}`);
    } else {
        result = await axios.get(`${basePath}question/all`);
    }
    return result;
};

export const login = async (params) => {
    const result = await postApi('user/login', params);
    return result;
};

export const signup = async (params) => {
    const result = await postApi('user/signup', params);
    return result;
};

export const checkResult = async (params) => {
    const result = await postApi('question/checkResult', params);
    return result;
};