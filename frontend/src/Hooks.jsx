import { useState, useEffect } from "react";

const fetchData = async (url, options = {}) => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
        throw new Error(data.message);
    }
    return data;
}

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        let controller = new AbortController();
        let signal = controller.signal;
        (async () => {
            try {
                const data = await fetchData(url, {signal, ...options});
                setData(data);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                    console.error(error);
                } else {
                    console.error("Request aborted");
                }
            }
        })();
        return () => {controller.abort()};
    }, [url]);
    return [data, error];
}

const useDoctors = () => {
    const url = 'http://127.0.0.1:5000/doctors';
    return useFetch(url);
}

const useDepartments = () => {
    const url = 'http://127.0.0.1:5000/departments';
    return useFetch(url);
}

const useCategories = () => {
    const url = 'http://127.0.0.1:5000/categories';
    return useFetch(url);
}

const useTags = () => {
    const url = 'http://127.0.0.1:5000/blog_tags';
    return useFetch(url);
}

const useBlogs = () => {
    const url = 'http://127.0.0.1:5000/blogs';
    return useFetch(url);
}

const useUsers = () => {
    const url = 'http://127.0.0.1:5000/users';
    return useFetch(url);
}

const useAppointments = () => {
    const url = 'http://127.0.0.1:5000/appointment';
    return useFetch(url);
}

const useMessages = () => {
    const url = 'http://127.0.0.1:5000/messages';
    return useFetch(url);
}

const useNewsletter = () => {
    const url = 'http://127.0.0.1:5000/newsletter';
    return useFetch(url);
}

export { useDoctors, useDepartments, useCategories, useTags, 
    useBlogs, useUsers, useAppointments, useMessages, useNewsletter };